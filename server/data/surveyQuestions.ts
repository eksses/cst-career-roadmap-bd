import type { SurveyQuestion } from '../../shared/types.js';

export const surveyQuestions: SurveyQuestion[] = [
  {
    id: 'hardware',
    dimension: 'hardware',
    title_en: 'What device do you currently have access to for learning?',
    title_bn: 'পড়াশোনা ও অনুশীলনের জন্য তোমার কাছে বর্তমানে কী ডিভাইস আছে?',
    subtitle_en: 'We calibrate your roadmap to what you actually own right now.',
    subtitle_bn: 'তোমার বর্তমান ডিভাইসের সাথে মিলিয়ে বাস্তব রোডম্যাপ তৈরি হবে।',
    options: [
      {
        key: 'phone_only',
        label_en: 'Smartphone only (No PC at home)',
        label_bn: 'শুধুমাত্র স্মার্টফোন (বাসায় কোনো কম্পিউটার নেই)',
        description_en: 'Android or iPhone with mobile data or Wi-Fi.',
        description_bn: 'সাধারণ স্মার্টফোন ও ইন্টারনেট সংযোগ।',
        mentorNote_en: 'Over 40% of polytechnic students start without a PC. Your roadmap starts with mobile-friendly skills, OTG keyboard practice, and polytechnic lab guidance.',
        mentorNote_bn: 'পলিটেকনিকের ৪০% এর বেশি শিক্ষার্থী শুরুতে পিসি ছাড়াই যাত্রা শুরু করে। তোমার রোডম্যাপে মোবাইল ফ্রেন্ডলি স্কিল, ওটিজি কিবোর্ড ও ল্যাব গাইড থাকবে।'
      },
      {
        key: 'low_spec_pc',
        label_en: 'Shared or Low-spec PC (Dual-core / 4GB RAM)',
        label_bn: 'শেয়ার্ড বা কম কনফিগারেশনের পিসি (ডুয়াল কোর বা ৪ জিবি র‍্যাম)',
        description_en: 'Older desktop or shared family laptop.',
        description_bn: 'পুরোনো বা ফ্যামিলি ল্যাপটপ যা সাধারণ কাজের জন্য সচল।',
        mentorNote_en: 'A 4GB PC is enough to master web basics, Linux terminal, and networking tools. We will focus on lightweight, efficient tools.',
        mentorNote_bn: '৪ জিবি র‍্যামের সাধারণ পিসি দিয়েই ওয়েব বেসিক, লিনাক্স কমান্ড ও নেটওয়ার্কিং সুন্দরভাবে শেখা সম্ভব।'
      },
      {
        key: 'standard_pc',
        label_en: 'Standard Laptop or Desktop (Core i3/i5, 8GB RAM)',
        label_bn: 'স্ট্যান্ডার্ড ল্যাপটপ বা ডেস্কটপ (আই৩/আই৫, ৮ জিবি র‍্যাম)',
        description_en: 'Runs code editors, browser tabs, and design tools smoothly.',
        description_bn: 'কোড এডিটর, ব্রাউজার এবং ডিজাইন সফটওয়্যার স্বাভাবিক গতিতে চলে।',
        mentorNote_en: 'Great configuration. You can learn software development, UI design, network simulations, and databases without bottlenecks.',
        mentorNote_bn: 'দারুণ সেটআপ। সফটওয়্যার ডেভেলপমেন্ট, ডিজাইন ও নেটওয়ার্কিং প্র্যাকটিসে কোনো হার্ডওয়্যার বাধা থাকবে না।'
      },
      {
        key: 'high_spec_pc',
        label_en: 'High-spec PC (16GB+ RAM, Fast SSD / GPU)',
        label_bn: 'হাই কনফিগারেশন কম্পিউটার (১৬ জিবি+ র‍্যাম, এসএসডি বা গ্রাফিক্স)',
        description_en: 'Runs virtual machines, Docker, and heavy tools.',
        description_bn: 'ভার্চুয়াল মেশিন, ডকার বা ভারী সফটওয়্যার চালানোর উপযোগী।',
        mentorNote_en: 'Zero hardware limits. You can explore full-stack apps, Docker, Linux virtualization, or graphics with maximum speed.',
        mentorNote_bn: 'কোনো হার্ডওয়্যার সীমাবদ্ধতা নেই। ফুল-স্ট্যাক, ডকার, ভার্চুয়ালাইজেশন নিশ্চিন্তে প্র্যাকটিস করতে পারবে।'
      }
    ]
  },
  {
    id: 'literacy',
    dimension: 'literacy',
    title_en: 'How comfortable are you operating a computer right now?',
    title_bn: 'বর্তমানে কম্পিউটার পরিচালনায় তোমার বাস্তব দক্ষতা কেমন?',
    subtitle_en: 'Choose honestly so we can set the right starting point.',
    subtitle_bn: 'নতুন হলেও সংকোচ করো না। যে অবস্থানে আছো সেখান থেকেই শুরু হবে।',
    options: [
      {
        key: 'absolute_beginner',
        label_en: 'Struggle with mouse, typing, and folders',
        label_bn: 'মাউস চালানো, টাইপিং এবং ফাইল ফোল্ডার পরিচালনায় সমস্যা হয়',
        description_en: 'Rarely used a physical computer, unfamiliar with file management.',
        description_bn: 'কম্পিউটার খুব বেশি ব্যবহার করা হয়নি, ফোল্ডার বা কিবোর্ড শর্টকাট নতুন।',
        mentorNote_en: 'Honesty is key. We automatically prepend a 30-Day Digital Literacy Bridge Track so you master mouse, typing, and files first.',
        mentorNote_bn: 'আমরা শুরুতে ৩০ দিনের ডিজিটাল লিটারেসি ব্রিজ ট্র্যাক যোগ করছি। মাউস, টাইপিং ও ফাইল ম্যানেজমেন্ট শিখে মূল কোর্সে যাবে।'
      },
      {
        key: 'basic_user',
        label_en: 'Comfortable with web browsing and office apps',
        label_bn: 'ব্রাউজার ব্যবহার, ইউটিউব দেখা ও সাধারণ অফিস ফাইলে স্বচ্ছন্দ',
        description_en: 'Can navigate websites, manage files, and install basic apps.',
        description_bn: 'ফাইল ডাউনলোড, ব্রাউজিং ও সাধারণ সফটওয়্যার ব্যবহারে কোনো সমস্যা নেই।',
        mentorNote_en: 'You have solid fundamental computer literacy and can directly begin technical foundation tracks.',
        mentorNote_bn: 'তোমার প্রাথমিক কম্পিউটার ব্যবহারের দক্ষতা ঠিক আছে। সরাসরি টেকনিক্যাল বিষয় শেখা শুরু করতে পারবে।'
      },
      {
        key: 'system_curious',
        label_en: 'Comfortable installing Windows and troubleshooting',
        label_bn: 'উইন্ডোজ সেটআপ, ড্রাইভার ইনস্টল ও ছোটখাটো সমস্যা সমাধান পারি',
        description_en: 'Have configured Wi-Fi routers or helped fix PC issues.',
        description_bn: 'রাউটার কনফিগার বা বন্ধুদের পিসি ঠিক করার অভিজ্ঞতা রয়েছে।',
        mentorNote_en: 'Your hands-on curiosity is a huge asset for ISP networking, IT support, and system administration.',
        mentorNote_bn: 'এই সমস্যা সমাধানের আগ্রহ আইএসপি নেটওয়ার্কিং ও আইটি সাপোর্টের জন্য অনেক বড় সুবিধা।'
      },
      {
        key: 'intermediate_coder',
        label_en: 'Already writing code or configuring network labs',
        label_bn: 'ইতিমধ্যে কোড লিখছি বা নেটওয়ার্ক ল্যাব কনফিগার করছি',
        description_en: 'Familiar with C, Python, HTML/CSS, or Cisco Packet Tracer.',
        description_bn: 'পলিটেকনিক ক্লাসের সি প্রোগ্রামিং, এইচটিএমএল বা সিসকো ল্যাবের অভিজ্ঞতা আছে।',
        mentorNote_en: 'You are ready to accelerate into full-stack web development, Linux DevOps, or professional routing.',
        mentorNote_bn: 'তুমি সরাসরি ফুল-স্ট্যাক ওয়েব বা প্রফেশনাল নেটওয়ার্কিং ট্র্যাকে দ্রুত গতিতে এগিয়ে যেতে পারবে।'
      }
    ]
  },
  {
    id: 'english',
    dimension: 'english',
    title_en: 'How comfortable are you reading English?',
    title_bn: 'ইংরেজি পড়ে বোঝার ক্ষেত্রে তোমার বর্তমান অবস্থা কেমন?',
    subtitle_en: 'Technical skills and language grow together.',
    subtitle_bn: 'ভাষার ভয়ের কিছু নেই। নিজের আসল অবস্থা বেছে নাও।',
    options: [
      {
        key: 'struggle_english',
        label_en: 'Prefer learning 100% in Bangla',
        label_bn: 'ইংরেজি সহজে বুঝতে পারি না (সম্পূর্ণ বাংলায় শিখতে চাই)',
        description_en: 'Struggle with English documentation and error messages.',
        description_bn: 'ইংরেজিতে লেখা ডকুমেন্টেশন পড়ে বুঝতে কষ্ট হয়।',
        mentorNote_en: 'Very common. We curate top-rated Bangla video tutorials with bilingual vocabulary sheets.',
        mentorNote_bn: 'খুবই স্বাভাবিক। তোমার জন্য সেরা বাংলা টিউটোরিয়াল এবং সহজ পরিভাষার নির্দেশিকা যুক্ত থাকবে।'
      },
      {
        key: 'read_simple',
        label_en: 'Can read simple text, struggle to speak/write',
        label_bn: 'সহজ লেখা পড়তে পারি, তবে নিজে বলতে বা লিখতে জড়তা কাজ করে',
        description_en: 'Can follow coding guides, nervous about English interviews.',
        description_bn: 'ডকুমেন্টেশন পড়ে বুঝতে পারি, তবে কথা বলায় দ্বিধাবোধ করি।',
        mentorNote_en: 'Your reading comprehension is enough to build professional technical skills while improving spoken English.',
        mentorNote_bn: 'টেকনিক্যাল স্কিল শেখার জন্য তোমার রিডিং কমপ্রিহেনশন যথেষ্ট। ভাইভা প্র্যাকটিসের গাইডও দেওয়া হবে।'
      },
      {
        key: 'fluent_technical',
        label_en: 'Comfortable reading technical blogs and manuals',
        label_bn: 'টেকনিক্যাল ম্যানুয়াল ও ব্লগ সাবলীলভাবে পড়তে পারি',
        description_en: 'Can follow official docs and GitHub guides in English.',
        description_bn: 'অফিসিয়াল ডকুমেন্টেশন ও আন্তর্জাতিক ভিডিও গাইড সহজে বুঝতে পারি।',
        mentorNote_en: 'Fluent technical reading accelerates your learning curve directly with official docs.',
        mentorNote_bn: 'টেকনিক্যাল ইংরেজি পড়ার দক্ষতা তোমার শেখার গতি অনেক বাড়িয়ে দেবে।'
      }
    ]
  },
  {
    id: 'urgency',
    dimension: 'urgency',
    title_en: 'What is your timeline to start earning?',
    title_bn: 'উপার্জন শুরু করার জন্য তোমার সময়সীমা ও তাগিদ কেমন?',
    subtitle_en: 'We match tracks to your family financial realities.',
    subtitle_bn: 'তোমার পারিবারিক ও ব্যক্তিগত খরচের বাস্তবতার সাথে মিলিয়ে পথ বেছে নাও।',
    options: [
      {
        key: 'earn_3_to_6_months',
        label_en: 'Urgent: Need to earn within 3 to 6 months',
        label_bn: 'জরুরি: ৩ থেকে ৬ মাসের মধ্যে আয় শুরু করা প্রয়োজন',
        description_en: 'Need fast local employment to support family or education.',
        description_bn: 'দীর্ঘ সময় অপেক্ষা করা কঠিন, দ্রুত কর্মসংস্থান দরকার।',
        mentorNote_en: 'We prioritize high-demand local entry tracks like ISP Network Support, IT Support, or E-Commerce Operations where CST students are hired quickly.',
        mentorNote_bn: 'আমরা দ্রুত কর্মসংস্থানমূলক ট্র্যাক যেমন আইএসপি নেটওয়ার্ক বা কর্পোরেট আইটি সাপোর্টে ফোকাস করব।'
      },
      {
        key: 'study_1_to_2_years',
        label_en: 'Moderate: Can dedicate 1 to 2 years during Diploma',
        label_bn: 'মধ্যম: ডিপ্লোমা চলাকালীন ১-২ বছর স্কিল তৈরিতে সময় দিতে পারব',
        description_en: 'Family supports living expenses while building a portfolio.',
        description_bn: 'ইন্ডাস্ট্রিয়াল অ্যাটাচমেন্টের আগে নিজেকে চাকরির উপযোগী করতে চাই।',
        mentorNote_en: 'Ideal timeline for CST students to master full-stack web or Linux DevOps and build strong projects.',
        mentorNote_bn: 'এটি শেখার সেরা সময়। নিয়মিত অনুশীলনে ডিপ্লোমা শেষেই ভালো বেতনের চাকরিতে প্রবেশ করা সম্ভব।'
      },
      {
        key: 'long_term_academic',
        label_en: 'Long-term: Planning for BSc, DUET, or higher studies',
        label_bn: 'দীর্ঘমেয়াদী: বিএসসি, ডুয়েট ভর্তি বা উচ্চশিক্ষার পরিকল্পনা রয়েছে',
        description_en: 'Focusing on core computer science foundations and CGPA.',
        description_bn: 'ডুয়েট বা বিদেশে বিএসসিকে প্রধান লক্ষ্য রেখে এগোচ্ছি।',
        mentorNote_en: 'Focus on CS fundamentals: data structures, OS, networking protocols, and high CGPA.',
        mentorNote_bn: 'তোমার ফোকাস হওয়া উচিত কম্পিউটার সায়েন্সের মূল ভিত্তি: ডেটা স্ট্রাকচার, অপারেটিং সিস্টেম ও ভালো সিজিপিএ।'
      }
    ]
  },
  {
    id: 'interest',
    dimension: 'interest',
    title_en: 'What type of daily work sounds most appealing?',
    title_bn: 'প্রতিদিনের কাজের ক্ষেত্রে কোনটি তোমার কাছে আকর্ষণীয় মনে হয়?',
    subtitle_en: 'Choose what you actually enjoy doing.',
    subtitle_bn: 'তুমি নিজে যা করতে স্বাচ্ছন্দ্যবোধ করো, সেটি বেছে নাও।',
    options: [
      {
        key: 'physical_networking',
        label_en: 'Routers, cables, MikroTik, switches, and hardware',
        label_bn: 'রাউটার, কেবল, মাইক্রোটিক, সুইচ ও ফিজিক্যাল ডিভাইস সেটআপ',
        description_en: 'Fixing network issues, crimping cables, configuring Wi-Fi and CCTV.',
        description_bn: 'নেটওয়ার্কিং ডিভাইস সংযোগ, ইন্টারনেট ত্রুটি সমাধান ও সিসিটিভি সেটআপ।',
        mentorNote_en: 'ISPs and corporate networks are the highest-volume employers of CST diploma engineers in Bangladesh.',
        mentorNote_bn: 'বাংলাদেশে পলিটেকনিক শিক্ষার্থীদের জন্য আইএসপি ও নেটওয়ার্কিং সবচেয়ে বড় কর্মসংস্থানের ক্ষেত্র।'
      },
      {
        key: 'visual_design',
        label_en: 'UI/UX design, Figma layouts, graphics, and video editing',
        label_bn: 'ইউআই/ইউএক্স ডিজাইন, ফিগমা লেআউট, গ্রাফিক্স বা ভিডিও এডিটিং',
        description_en: 'Crafting user interfaces, website layouts, and social media visuals.',
        description_bn: 'মোবাইল অ্যাপ বা ওয়েবসাইটের আকর্ষণীয় ও সহজ ইন্টারফেস ডিজাইন করা।',
        mentorNote_en: 'Great creative path into tech without complex coding. High demand for product UI/UX designers.',
        mentorNote_bn: 'জটিল কোডিং ছাড়াও প্রযুক্তি ক্যারিয়ার গড়ার চমৎকার মাধ্যম। ইউআই/ইউএক্স ডিজাইনারদের চাহিদা ব্যাপক।'
      },
      {
        key: 'coding_web_apps',
        label_en: 'Building websites, web apps, APIs, and writing code',
        label_bn: 'ওয়েবসাইট, ওয়েব অ্যাপ ও সফটওয়্যার তৈরির জন্য কোড লেখা',
        description_en: 'Solving logic problems, connecting databases, building full apps.',
        description_bn: 'কোড লিখে সমাধান বের করা এবং কার্যকর ওয়েবসাইট ও অ্যাপ বানানো।',
        mentorNote_en: 'Software engineering offers high salaries and remote jobs. Requires consistent practice and problem-solving.',
        mentorNote_bn: 'সফটওয়্যার ও ওয়েব ডেভেলপমেন্টে আকর্ষণীয় বেতন ও রিমোট জবের সুযোগ রয়েছে। দরকার নিয়মিত প্র্যাকটিস।'
      },
      {
        key: 'operations_support',
        label_en: 'IT operations, client support, QA testing, or digital marketing',
        label_bn: 'আইটি সাপোর্ট, ক্লায়েন্ট কমিউনিকেশন, সফটওয়্যার টেস্টিং বা ডিজিটাল মার্কেটিং',
        description_en: 'Testing software, managing digital operations, or assisting enterprise users.',
        description_bn: 'সফটওয়্যারের ভুল বের করা, সোশ্যাল মিডিয়া মার্কেটিং বা গ্রাহক সেবা।',
        mentorNote_en: 'Non-coding tech roles have high demand in Dhaka, offering stable career growth.',
        mentorNote_bn: 'সফটওয়্যার টেস্টিং ও ডিজিটাল অপারেশনে ঢাকায় ব্যাপক চাহিদা রয়েছে। কোডিং ছাড়াই ভালো ক্যারিয়ারের সুযোগ।'
      },
      {
        key: 'confused_open',
        label_en: 'Unsure / confused: recommend the safest practical path',
        label_bn: 'দ্বিধাদ্বন্দ্বে আছি: আমার বর্তমান অবস্থার জন্য সবচেয়ে নিরাপদ পথ দেখাও',
        description_en: 'Overwhelmed by too many options, need honest direction.',
        description_bn: 'সঠিক নির্দেশনার অভাবে বুঝতে পারছি না কোথা থেকে শুরু করব।',
        mentorNote_en: 'Almost all students face this confusion. We will compute the safest, most practical path for you.',
        mentorNote_bn: 'অনেক শিক্ষার্থীই এই দোটানায় পড়ে। তোমার ডিভাইস ও সময়ের ভিত্তিতে সবচেয়ে নিরাপদ পথটি সাজিয়ে দিচ্ছি।'
      }
    ]
  }
];
