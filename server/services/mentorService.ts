import { db } from '../db/index.js';
import { mentorChats, studentProfiles, careerTracks } from '../db/schema.js';
import { eq } from 'drizzle-orm';

interface MentorMessageParams {
  studentId?: number;
  saveCode?: string;
  message: string;
}

export async function handleMentorChat(params: MentorMessageParams): Promise<string> {
  const { studentId, saveCode, message } = params;

  // Retrieve student profile and current track
  let profile: any = null;
  let track: any = null;

  if (saveCode) {
    const profiles = await db.select().from(studentProfiles).where(eq(studentProfiles.saveCode, saveCode)).limit(1);
    if (profiles.length > 0) profile = profiles[0];
  } else if (studentId) {
    const profiles = await db.select().from(studentProfiles).where(eq(studentProfiles.id, studentId)).limit(1);
    if (profiles.length > 0) profile = profiles[0];
  }

  if (profile?.primaryTrackId) {
    const tracks = await db.select().from(careerTracks).where(eq(careerTracks.id, profile.primaryTrackId)).limit(1);
    if (tracks.length > 0) track = tracks[0];
  }

  // Save student message in DB if studentId is known
  if (profile?.id) {
    await db.insert(mentorChats).values({
      studentId: profile.id,
      role: 'user',
      content: message,
    });
  }

  const apiKey = process.env.AI_API_KEY?.trim();
  let reply = '';

  if (apiKey) {
    try {
      reply = await callExternalLLM({ message, profile, track, apiKey });
    } catch (err) {
      console.error('LLM API error, falling back to local mentor engine:', err);
      reply = generateFallbackMentorResponse({ message, profile, track });
    }
  } else {
    // High-grade intelligent local fallback engine
    reply = generateFallbackMentorResponse({ message, profile, track });
  }

  // Enforce Anti-AI and Clean Writing Protocol
  reply = sanitizeMentorText(reply);

  // Save assistant message to DB if studentId is known
  if (profile?.id) {
    await db.insert(mentorChats).values({
      studentId: profile.id,
      role: 'assistant',
      content: reply,
    });
  }

  return reply;
}

async function callExternalLLM(params: {
  message: string;
  profile: any;
  track: any;
  apiKey: string;
}): Promise<string> {
  const { message, profile, track, apiKey } = params;

  const systemPrompt = `You are a dedicated senior polytechnic career mentor in Bangladesh for Computer Science and Technology (CST) students.
Student Context:
- Current Matched Career Track: ${track ? track.titleEn : 'General CST Engineering'}
- Hardware Access: ${profile?.hardwareTier || 'Unknown'}
- Computer Literacy: ${profile?.pcLiteracy || 'Unknown'}
- English Comfort: ${profile?.englishLevel || 'Unknown'}
- Financial Urgency: ${profile?.urgencyLevel || 'Unknown'}

STRICT COMMUNICATION RULES:
1. ZERO EMOJIS. Never output any emoji under any circumstances.
2. ZERO DASH QUIRKS. Never use em-dashes, en-dashes, or double-hyphens. Use commas, colons, parentheses, or periods.
3. BANNED VOCABULARY. Never use words like delve, unlock, unleash, elevate, supercharge, tapestry, testament, beacon, in today's fast-paced digital world, or embark on a journey.
4. TONE: Warm, practical, realistic mentor tone. If the user writes in Bangla, answer in natural, respectful, supportive Bangla using "তুমি" consistently. If they write in English or Banglish, respond appropriately in simple, clear, actionable language.
5. Offer concrete Bangladeshi CST advice: utilizing polytechnic lab hours, using OTG keyboards with Android phones, Termux setups, local ISP and corporate IT hiring realities, and free verified certifications.`;

  // Standard fetch to Google Generative AI or OpenAI compatible endpoint
  const endpoint = apiKey.startsWith('AIza') 
    ? `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`
    : 'https://api.openai.com/v1/chat/completions';

  if (apiKey.startsWith('AIza')) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: `${systemPrompt}\n\nStudent Inquiry: ${message}` }]
          }
        ],
        generationConfig: {
          temperature: 0.5,
          maxOutputTokens: 600,
        }
      })
    });
    const data = (await res.json()) as any;
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  } else {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.5,
        max_tokens: 600,
      })
    });
    const data = (await res.json()) as any;
    return data?.choices?.[0]?.message?.content || '';
  }
}

export function sanitizeMentorText(text: string): string {
  if (!text) return '';
  return text
    // Remove all emojis (unicode ranges)
    .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
    // Remove em-dashes and en-dashes
    .replace(/\u2014/g, ', ')
    .replace(/\u2013/g, '-')
    .replace(/--/g, ': ')
    // Remove banned AI words
    .replace(/\bdelve\b/gi, 'examine')
    .replace(/\bunlock\b/gi, 'learn')
    .replace(/\bunleash\b/gi, 'develop')
    .replace(/\belevate\b/gi, 'improve')
    .replace(/\bsupercharge\b/gi, 'accelerate')
    .replace(/\btapestry\b/gi, 'range')
    .replace(/\btestament\b/gi, 'proof')
    .replace(/\bbeacon\b/gi, 'guide')
    .replace(/in today's fast-paced digital world/gi, 'currently')
    .replace(/embark on a journey/gi, 'start your preparation')
    .trim();
}

function generateFallbackMentorResponse(params: {
  message: string;
  profile: any;
  track: any;
}): string {
  const { message, profile, track } = params;
  const msgLower = message.toLowerCase();
  const isBangla = /[\u0980-\u09FF]/.test(message) || msgLower.includes('bangla') || msgLower.includes('kivabe');
  const trackTitleBn = track?.titleBn || 'সিএসটি ক্যারিয়ার ট্র্যাক';
  const trackTitleEn = track?.titleEn || 'CST Career Track';
  const hasPhoneOnly = profile?.hardwareTier === 'phone_only';

  // Topic 1: No computer / smartphone practice
  if (msgLower.includes('computer') || msgLower.includes('pc') || msgLower.includes('ল্যাপটপ') || msgLower.includes('ফোন') || msgLower.includes('device') || msgLower.includes('phone') || msgLower.includes('ল্যাব')) {
    if (isBangla) {
      return `বাসায় কম্পিউটার না থাকা কোনো স্থায়ী বাধা নয়। পলিটেকনিকের বহু সফল শিক্ষার্থী এই পরিস্থিতি পার করে এসেছে। তুমি এই ৩টি ব্যবহারিক পদক্ষেপ নিতে পারো:

১. ওটিজি কিবোর্ড সেটআপ: বাজার থেকে মাত্র ৫০-৬০ টাকার একটি ওটিজি (OTG) ক্যাবল কিনে তোমার অ্যান্ড্রয়েড ফোনে যেকোনো সাধারণ ইউএসবি কিবোর্ড যুক্ত করে নাও। এতে প্রতিদিন ঘরে বসেই টাইপিং ও বেসিক কোডিং অনুশীলন করা যায়।
২. টার্মাক্স অ্যাপ: অ্যান্ড্রয়েডে ফ্রি Termux অ্যাপ ইনস্টল করো। এতে লিনাক্স টার্মিনাল, নোড এবং পাইথনের কোড সরাসরি ফোনে রান করা যায়।
৩. পলিটেকনিক ল্যাব শিডিউল: ডিপ্লোমার ল্যাব ক্লাসের সময়টুকু অলস বসে না থেকে শিক্ষককে অনুরোধ করে প্র্যাকটিক্যাল সফটওয়্যার ইনস্টল ও কনফিগারেশন হাতে-কলমে করো।

তোমার নির্বাচিত ট্র্যাক (${trackTitleBn})-এর প্রথম পর্বের পাঠগুলো সম্পূর্ণ ফোনেই পড়া সম্ভব। কোনো দ্বিধা রেখো না, আজ থেকেই শুরু করো।`;
    } else {
      return `Not owning a personal computer at home is common across CST diploma students in Bangladesh. Here is the practical action plan:

1. OTG Keyboard Setup: Purchase a simple 60 BDT USB OTG adapter and connect a physical keyboard to your Android smartphone. This lets you practice touch typing and text editing at home.
2. Termux on Android: Install the free Termux app from F-Droid to run Linux bash commands, Node.js, and Python scripts directly on your phone.
3. Polytechnic Lab Access: Do not waste lab hours. Request lab assistants or teachers for extra machine time after practical classes to practice software configurations hands-on.

Your current roadmap (${trackTitleEn}) is designed so you can absorb foundational concepts on your phone before needing desktop equipment.`;
    }
  }

  // Topic 2: CV / Resume preparation
  if (msgLower.includes('cv') || msgLower.includes('resume') || msgLower.includes('চাকরি') || msgLower.includes('job') || msgLower.includes('ইন্টারভিউ') || msgLower.includes('interview')) {
    if (isBangla) {
      return `বাংলাদেশে ডিপ্লোমা ইঞ্জিনিয়ার হিসেবে আইটি বা নেটওয়ার্কিং চাকরিতে সিভিতে কোম্পানিগুলো যা দেখতে চায়:

১. এক পাতার পরিষ্কার সিভি: গুগল ডক্স ব্যবহার করে পরিষ্কার এক পাতার সিভি বানাও। অপ্রয়োজনীয় ডিজাইনার গ্রাফিক্স বা কালারফুল টেমপ্লেট বাদ দাও।
২. প্র্যাকটিক্যাল স্কিল সেকশন: তোমার সিভির শীর্ষে "Technical Skills" রাখবে (যেমন: MikroTik Winbox, IPv4 Subnetting, Linux CLI, Windows Deployment, C/Python)।
৩. প্রজেক্টের স্পষ্ট বিবরণ: পলিটেকনিকের ফাইনাল ইয়ার বা নিজের করা অন্তত ২টি প্রজেক্টের বাস্তব ফলাফল উল্লেখ করো।
৪. সার্টিফিকেশন লিংক: তোমার রোডম্যাপে থাকা ফ্রি সিসকো, গুগল বা পোস্টম্যান ভেরিফায়েড সার্টিফিকেটগুলোর লিংক যুক্ত করো।

ইন্টারভিউতে মুখস্থ সংজ্ঞার চেয়ে তুমি নিজে হাতে কোনো রাউটার বা পিসি ঠিক করেছ কিনা, সেটাই বেশি জানতে চাওয়া হয়।`;
    } else {
      return `Here is what corporate tech employers and ISPs in Bangladesh look for on a diploma engineer's CV:

1. Clean One-Page Format: Use Google Docs to create a crisp, single-page CV. Avoid cluttered multi-column templates.
2. Technical Skills First: Put your hands-on competencies at the top (e.g. MikroTik Winbox, IPv4 Subnetting, Linux Bash, Windows Troubleshooting, Git).
3. Tangible Projects: Describe 2 real practical projects or lab exercises with clear problem-and-solution summaries.
4. Verifiable Free Certifications: Include links to Cisco Networking Academy, Google, or freeCodeCamp badges from your roadmap.

In interviews, managers value your willingness to troubleshoot real hardware and network lines over academic textbook memorization.`;
    }
  }

  // Topic 3: English language improvement
  if (msgLower.includes('english') || msgLower.includes('ইংরেজি') || msgLower.includes('ভাষা') || msgLower.includes('speak') || msgLower.includes('spelling')) {
    if (isBangla) {
      return `টেকনিক্যাল কাজের জন্য তোমাকে শেক্সপিয়ারের মতো ইংরেজি জানতে হবে না। কর্মক্ষেত্রের কার্যকরী ইংরেজি শেখার ৩টি সহজ কৌশল:

১. প্রতিদিন ১০টি টেকনিক্যাল শব্দ: আমাদের রোডম্যাপের ইন্টারভিউ ভল্ট থেকে প্রতিদিন ৫ থেকে ১০টি সাধারণ আইটি পরিভাষা (যেমন: Gateway, Latency, Throughput, Repository, Deployment) খাতায় লিখে অর্থ পরিষ্কার করো।
২. ইংরেজি ইউটিউব ভিডিও সাবটাইটেল সহ দেখা: কোনো টেকনিক্যাল ভিডিও দেখার সময় ইংরেজি সাবটাইটেল (CC) চালু রেখে শোনো। এতে কান ও মস্তিষ্ক শব্দের উচ্চারণে অভ্যস্ত হবে।
৩. প্রফেশনাল ইমেইল লেখা: চ্যাটজিপিটি বা অনুবাদকের ওপর অন্ধ নির্ভর না করে ছোট ছোট অফিশিয়াল ইমেইল নিজে লেখার চেষ্টা করো।

ভয় পাওয়ার কিছু নেই, নিয়মিত অনুশীলনে ২-৩ মাসের মধ্যেই ইন্টারভিউতে কথা বলার মতো সাবলীলতা চলে আসে।`;
    } else {
      return `You do not need literary English to thrive in tech. You only need functional workplace communication:

1. Master 100 Technical Terms: Learn the exact meaning of core industry words (Subnet, Bandwidth, Gateway, Inode, Latency, Repository, Endpoint).
2. Watch Tutorials with English Subtitles: When watching technical walk-throughs, enable closed captions (CC) to train your ear on technical pronunciation.
3. Write Short Professional Messages: Practice writing clean 3-sentence email updates to describe technical status clearly.

Consistency is key: 20 minutes of daily exposure will prepare you for corporate technical interviews within 60 to 90 days.`;
    }
  }

  // Default / General Response
  if (isBangla) {
    return `তোমার বর্তমান নির্বাচিত ক্যারিয়ার ট্র্যাক: ${trackTitleBn}।

এই ট্র্যাকটিতে সফল হতে হলে এই মুহূর্তে যা করা জরুরি:
১. রোডম্যাপের "প্রথম পর্ব (Phase 1)"-এর বিষয়গুলো দিয়ে শুরু করো। প্রতিটি টপিক শেষ হলে চেকলিস্টে টিক চিহ্ন দাও।
২. মুখস্থ করার চেয়ে হাতে-কলমে প্র্যাকটিসে বেশি সময় দাও। পলিটেকনিক ল্যাবে বন্ধুদের সাথে গ্রুপ স্টাডি করো।
৩. "ইন্টারভিউ ভল্ট" ট্যাবে গিয়ে নিয়মিত ইন্টারভিউ প্রশ্নগুলো পড়ে নাও যাতে ভাইভায় কী ধরনের প্রশ্ন আসে তা আগে থেকেই স্পষ্ট থাকে।

তুমি যেকোনো সময় তোমার প্র্যাকটিস, ডিভাইস বা পড়াশোনার সমস্যা নিয়ে আমাকে প্রশ্ন করতে পারো। ধাপে ধাপে এগিয়ে যাও, তুমি অবশ্যই পারবে।`;
  } else {
    return `You are currently focusing on: ${trackTitleEn}.

To make steady progress, focus on these three priorities right now:
1. Start with Phase 1 of your roadmap. As you finish each module, check it off in the interactive progress tracker.
2. Prioritize hands-on lab experiments over passive video watching. Form a practical study group with 2 dedicated CST classmates.
3. Review the Interview Prep Vault weekly to understand how technical concepts are questioned in real job interviews.

Feel free to ask me anything about your roadmap phases, alternative career tracks, or practical workarounds for hardware limitations.`;
  }
}
