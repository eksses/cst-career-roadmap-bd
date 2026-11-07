import type { CareerTrack } from '../../../shared/types.js';

export const uiUxDesignTrack: Omit<CareerTrack, 'id'> = {
  slug: 'ui-ux-design',
  title_en: 'UI/UX and Product Design',
  title_bn: 'ইউআই/ইউএক্স ও প্রোডাক্ট ডিজাইন',
  summary_en: 'User research, wireframing, high-fidelity Figma design systems, mobile app design, micro-interactions, and usability testing for digital products.',
  summary_bn: 'ব্যবহারকারী গবেষণা, ওয়্যারফ্রেমিং, ফিগমা ডিজাইন সিস্টেম, মোবাইল অ্যাপ ইন্টারফেস ও ডিজিটাল প্রোডাক্ট ইউজেবিলিটি টেস্টিংয়ের পূর্ণাঙ্গ ট্র্যাক।',
  pivotAdvice_en: 'If you have an eye for visual clarity, empathy for non-technical users, and dislike writing code, UI/UX design allows you to work at the core of software teams without writing a single line of syntax.',
  pivotAdvice_bn: 'তোমার যদি নান্দনিক দৃষ্টিভঙ্গি থাকে এবং কোডিং ছাড়াই প্রযুক্তি জগতে কাজ করার আগ্রহ থাকে, তবে ইউআই/ইউএক্স ডিজাইন একটি চমৎকার ক্ষেত্র। কোনো কোড না লিখেও তুমি সফটওয়্যার টিমের কেন্দ্রবিন্দুতে কাজ করতে পারবে।',
  minPcRequired: 'standard',
  dayToDay_en: [
    'Interviewing target users and mapping out user journey flows and information architecture.',
    'Creating responsive auto-layout components and design tokens in Figma.',
    'Designing mobile app screens with strict accessibility contrast ratios and thumb-zone ergonomics.',
    'Building clickable interactive prototypes to demonstrate transitions and micro-interactions.',
    'Conducting usability tests and preparing developer handoff documentation with clear CSS specs.'
  ],
  dayToDay_bn: [
    'অ্যাপ ব্যবহারকারীদের সাথে কথা বলে ইউজার ফ্লো ও ইনফরমেশন আর্কিটেকচার তৈরি করা।',
    'ফিগমায় অটো-লেআউট এবং রিইউজেবল কম্পোনেন্ট দিয়ে ডিজাইন সিস্টেম তৈরি করা।',
    'মোবাইল স্ক্রিনে এক হাতে ব্যবহারের সুবিধা (Thumb-zone) মাথায় রেখে স্ক্রিন সাজানো।',
    'ক্লিক করা যায় এমন ইন্টারেক্টিভ প্রোটোটাইপ বানিয়ে ডেভেলপার ও ক্লায়েন্টকে দেখানো।',
    'ডিজাইন তৈরি শেষে ডেভেলপারদের বোঝার সুবিধার জন্য প্রোপার্টি হ্যান্ডঅফ ফাইল প্রস্তুত করা।'
  ],
  mustHaveSkills: [
    {
      id: 'figma-auto-layout',
      name: 'Figma Auto-Layout and Component Variants',
      category: 'Design Tools',
      importance: 'Essential',
      description_en: 'Mastering flexbox-like auto-layout, constraints, nested components, and interactive variants.',
      description_bn: 'ফিগমার অটো-লেআউট, কনস্ট্রেইন্টস ও কম্পোনেন্ট ভ্যারিয়েন্টসের নিখুঁত ব্যবহার।'
    },
    {
      id: 'visual-hierarchy-typography',
      name: 'Visual Hierarchy, Spacing and Typography',
      category: 'Visual Design',
      importance: 'Essential',
      description_en: '8pt grid systems, font pairings, line-height scaling for Bangla, and WCAG AA contrast compliance.',
      description_bn: '৮-পিক্সেল গ্রিড সিস্টেম, টাইপোগ্রাফি স্কেলিং ও বাংলা ফন্টের সঠিক লাইন-হাইট নির্ধারণ।'
    },
    {
      id: 'user-research-personas',
      name: 'User Personas and Empathy Mapping',
      category: 'UX Research',
      importance: 'Essential',
      description_en: 'Conducting non-leading user interviews, drafting personas, and identifying friction points.',
      description_bn: 'ব্যবহারকারীর সমস্যা ও চাহিদা চিহ্নিত করে বাস্তবসম্মত পারসোনা তৈরি।'
    },
    {
      id: 'mobile-heuristics',
      name: 'Mobile Usability Heuristics and Micro-Interactions',
      category: 'Interaction',
      importance: 'Recommended',
      description_en: 'Designing bottom sheets, drawer states, swipe gestures, and tactile feedback.',
      description_bn: 'মোবাইল বটম শিট, ড্রয়ার ও মসৃণ সোয়াইপ জেসচার ডিজাইন।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka and Remote BD',
      entrySalary: { min: 22000, max: 40000, currency: 'BDT', formatted: '22,000 - 40,000 BDT' },
      midSalary: { min: 50000, max: 95000, currency: 'BDT', formatted: '50,000 - 95,000 BDT' },
      seniorSalary: { min: 100000, max: 220000, currency: 'BDT', formatted: '100,000 - 220,000 BDT' },
      hiringSectors: [
        'Fintech and Mobile Banking (bKash, Nagad, Upay design teams)',
        'Tech Startups and Ride-Sharing Apps (Pathao, Sheba.xyz)',
        'Design Agencies and Global Software Outsourcing Firms in Dhaka'
      ],
      cvExpectations: [
        'A polished Behance or Figma portfolio with 2 to 3 detailed case studies',
        'Demonstrating the WHY behind design choices rather than just pretty shots',
        'Deep mastery of Figma shortcuts and auto-layout',
        'Understanding how developers translate designs into code'
      ],
      localDemandSummary_en: 'As digital products mature in Bangladesh, companies are moving away from developer-made interfaces toward professional product designers who understand local consumer habits.',
      localDemandSummary_bn: 'বাংলাদেশে মোবাইল ফাইন্যান্সিয়াল সার্ভিস ও অ্যাপের প্রসারের সাথে সাথে প্রফেশনাল ইউআই/ইউএক্স ডিজাইনারদের চাহিদা ব্যাপক বৃদ্ধি পেয়েছে।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'United Arab Emirates and Qatar',
        countryName_bn: 'সংযুক্ত আরব আমিরাত ও কাতার',
        demandLevel: 'Moderate',
        demandLevel_bn: 'মাঝারি',
        visaReality_en: 'E-commerce and banking apps in Dubai recruit UI designers with bilingual (Arabic/English) layout sensitivity.',
        visaReality_bn: 'দুবাইয়ের বিভিন্ন ই-কমার্স ও ব্যাংকিং প্রতিষ্ঠানে পোর্টফোলিও যাচাই করে সরাসরি নিয়োগ দেওয়া হয়।',
        averageSalaryUsdOrLocal: '10,000 - 18,000 AED / month (approx 320,000 - 580,000 BDT)',
        requiredExperienceYears: '3+ years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$600 - $2,800 / month',
      competitionLevel: 'Moderate for designers with strong case studies and English video walk-throughs',
      competitionLevel_bn: 'ভিডিওতে ডিজাইন ব্যাখ্যার দক্ষতা থাকলে আন্তর্জাতিক কাজ পাওয়া সহজ হয়',
      englishRequirement: 'Good spoken English to present design rationale in team standups',
      englishRequirement_bn: 'টিম মিটিংয়ে নিজের ডিজাইনের যুক্তি তুলে ধরার মতো ইংরেজি জানা জরুরি',
      realities_en: [
        'Clients care about conversion metrics and usability, not just colors',
        'Figma has made real-time global design collaboration standard',
        'Loom video walkthroughs double interview callbacks'
      ],
      realities_bn: [
        'ক্লায়েন্টরা কেবল রঙ দেখে না, ডিজাইনটি ইউজারকে কীভাবে সাহায্য করছে তা দেখে',
        'ফিগমার মাধ্যমে সারাবিশ্ব থেকে রিমোটলি কাজ করা অনেক সহজ হয়েছে',
        'লুম (Loom) ভিডিও দিয়ে ডিজাইন বুঝিয়ে পাঠালে কাজ পাওয়ার সম্ভাবনা বহুগুণ বাড়ে'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Design Fundamentals and Figma Tool Mastery',
      phaseTitle_bn: 'প্রথম পর্ব: ডিজাইনের ব্যাকরণ ও ফিগমার নিখুঁত ব্যবহার',
      phaseSubtitle_en: 'Day 1 to 30: Color theory, typography, spacing grids, and auto-layout.',
      phaseSubtitle_bn: '১ থেকে ৩০ দিন: কালার থিওরি, টাইপোগ্রাফি, স্পেসিং গ্রিড ও ফিগমা অটো-লেআউট।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-figma-basics',
          title_en: 'Figma Auto-Layout and Component Properties',
          title_bn: 'ফিগমা অটো-লেআউট ও কম্পোনেন্ট প্রোপার্টিজ',
          description_en: 'Hug, Fill, Fixed sizing, gap spacing, and building responsive buttons and cards.',
          description_bn: 'রেসপনসিভ বাটন, কার্ড ও নেভিগেশন বার তৈরির আধুনিক ফিগমা টেকনিক।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Auto-layout padding and margins', 'Component variants and boolean properties', 'Typography hierarchies'],
          practicalTask_en: 'Build a fully responsive card component in Figma that adapts smoothly to mobile and desktop widths.',
          practicalTask_bn: 'ফিগমায় একটি অটো-লেআউট প্রোডাক্ট কার্ড ডিজাইন করো যা সব সাইজের স্ক্রিনে সুন্দর দেখায়।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: UX Research, Wireframing and Information Architecture',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: ইউএক্স রিসার্চ, ওয়্যারফ্রেমিং ও ইউজার জার্নি',
      phaseSubtitle_en: 'Day 31 to 60: Low-fidelity wireframes, user personas, and flowcharts.',
      phaseSubtitle_bn: '৩১ থেকে ৬০ দিন: খসড়া স্কেচ, ইউজার পারসোনা ও স্টেপ-বাই-স্টেপ ফ্লোচার্ট।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-ux-research-case',
          title_en: 'Conducting User Interviews and Low-Fidelity Wireframes',
          title_bn: 'ইউজার ইন্টারভিউ ও লো-ফিডেলিটি ওয়্যারফ্রেম',
          description_en: 'Interviewing real people to discover real pain points and sketching paper wireframes before touching Figma.',
          description_bn: 'মানুষের বাস্তব সমস্যা জানার ইন্টারভিউ নেওয়া এবং খাতায় প্রাথমিক স্কেচ আঁকা।',
          estimatedDays: 15,
          mobileAccessible: true,
          keyTopics: ['User pain points analysis', 'Card sorting', 'Low-fidelity wireframing in Whimsical/Figma'],
          practicalTask_en: 'Interview 3 polytechnic classmates and sketch a simplified mobile portal for semester exam results.',
          practicalTask_bn: 'পলিটেকনিকের ৩ জন সহপাঠীর সাথে কথা বলে সেমিস্টার রেজাল্ট দেখার একটি সহজ অ্যাপের খসড়া আঁকো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: High-Fidelity UI and Design Systems',
      phaseTitle_bn: 'তৃতীয় পর্ব: হাই-ফিডেলিটি ইউআই ও পূর্ণাঙ্গ ডিজাইন সিস্টেম',
      phaseSubtitle_en: 'Day 61 to 90: Design systems, tokens, interactive micro-animations.',
      phaseSubtitle_bn: '৬১ থেকে ৯০ দিন: কালার টোকেন, আইকন লাইব্রেরি ও ইন্টারেক্টিভ প্রোটোটাইপিং।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-design-system-creation',
          title_en: 'Building an Enterprise Design System in Figma',
          title_bn: 'ফিগমায় পূর্ণাঙ্গ এন্টারপ্রাইজ ডিজাইন সিস্টেম তৈরি',
          description_en: 'Typography scales, color tokens, button states (default, hover, active, disabled), and form inputs.',
          description_bn: 'কালার প্যালেট, বাটন ভ্যারিয়েন্ট ও ইনপুট ফিল্ডের পূর্ণাঙ্গ লাইব্রেরি তৈরি।',
          estimatedDays: 18,
          mobileAccessible: false,
          keyTopics: ['Figma variables and tokens', 'Accessibility contrast ratios (WCAG AA)', 'State variants'],
          practicalTask_en: 'Create a bilingual (Bangla and English) design system with at least 15 reusable UI components.',
          practicalTask_bn: 'বাংলা ও ইংরেজি ফন্ট সাপোর্ট সহ ১৫টি কম্পোনেন্টের একটি সমন্বিত ডিজাইন সিস্টেম বানাও।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: Case Study Production and Portfolio Publishing',
      phaseTitle_bn: 'চতুর্থ পর্ব: কেস স্টাডি রাইটিং ও পোর্টফোলিও প্রকাশ',
      phaseSubtitle_en: 'Day 91 to 120: Publishing case studies on Behance and preparing for product interviews.',
      phaseSubtitle_bn: '৯১ থেকে ১২০ দিন: বিহ্যান্স ও নোশনে কেস স্টাডি তৈরি এবং প্রোডাক্ট ডিজাইন ইন্টারভিউ।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-behance-case-study',
          title_en: 'Writing an End-to-End Product Case Study',
          title_bn: 'বিহ্যান্সে পূর্ণাঙ্গ ইউআই/ইউএক্স কেস স্টাডি প্রকাশ',
          description_en: 'Documenting the problem statement, user research, wireframes, iterations, and final UI solution with metrics.',
          description_bn: 'সমস্যার বিবরণ থেকে শুরু করে চূড়ান্ত সমাধান পর্যন্ত সুন্দর প্রেজেন্টেশন স্লাইড তৈরি।',
          estimatedDays: 16,
          mobileAccessible: false,
          keyTopics: ['Problem framing', 'Before-and-after iterations', 'Interactive prototype link embedding'],
          practicalTask_en: 'Publish a complete case study for a Bangladeshi utility or healthcare app on Behance.',
          practicalTask_bn: 'বাংলাদেশের স্বাস্থ্যসেবা বা ইউটিলিটি সার্ভিসের একটি সম্পূর্ণ কেস স্টাডি বিহ্যান্সে পাবলিশ করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'ui-q1',
      question_en: 'What is the difference between UI design and UX design?',
      question_bn: 'ইউআই (UI) এবং ইউএক্স (UX) ডিজাইনের মধ্যে মূল পার্থক্য কী?',
      category: 'Design Foundations',
      whyAsked_en: 'Ensures the candidate understands the difference between visual styling and underlying user problem-solving.',
      whyAsked_bn: 'প্রার্থী শুধু সুন্দর রঙ বোঝে নাকি ব্যবহারকারীর সমস্যার কার্যকর সমাধান বোঝে তা যাচাই করতে।',
      howToAnswer_en: 'UX (User Experience) is the structural problem-solving process that focuses on user goals, ease of navigation, and removing friction. UI (User Interface) is the visual and interactive surface, including typography, colors, layout, and tactile component feedback.',
      howToAnswer_bn: 'ইউএক্স (UX) হলো ব্যবহারকারীর সমস্যা সমাধানের কাঠামো, যেমন অ্যাপের ফ্লো কতটা সহজ এবং ব্যবহারকারী কোনো বাধার মুখে পড়ছে কিনা। আর ইউআই (UI) হলো সেই কাঠামোর ওপরের রূপ, যেমন ফন্ট, রঙ, বাটন এবং ভিজুয়াল সৌন্দর্য।',
      commonMistakes_en: 'Saying UI is for mobile and UX is for websites.',
      commonMistakes_bn: 'ইউআই মোবাইল আর ইউএক্স ওয়েবসাইট এমন ভুল তুলনা করা।'
    },
    {
      id: 'ui-q2',
      question_en: 'Why is line-height and letter-spacing critical when designing for Bangla typography compared to English?',
      question_bn: 'ইংরেজি ফন্টের তুলনায় বাংলা ফন্টে ডিজাইন করার সময় লাইন-হাইট (Line-height) কেন বেশি রাখা জরুরি?',
      category: 'Typography & Localization',
      whyAsked_en: 'Directly tests localized product competence for Bangladeshi software users.',
      whyAsked_bn: 'বাংলাদেশি ব্যবহারকারীদের জন্য লোকাল প্রোডাক্ট তৈরির বাস্তব জ্ঞান পরীক্ষা করতে।',
      howToAnswer_en: 'Bangla typography includes upper and lower matras (কার ও ফলা যেমন হ্রস্ব-ই কার, দীর্ঘ-উ কার, র-ফলা) that extend above the ascender and below the descender lines. If English line-height (e.g. 1.2 to 1.4) is used, Bangla vowel marks get clipped or touch adjacent lines. Bangla requires a line-height multiplier of at least 1.6 to 1.8 for legible rendering.',
      howToAnswer_bn: 'বাংলা বর্ণমালায় ওপরের এবং নিচের কার ও ফলা (যেমন ই-কার, উ-কার, র-ফলা) থাকে যা স্বাভাবিক লাইনের বাইরে ছড়ায়। ইংরেজির মতো টাইট লাইন-হাইট (১.২-১.৪) দিলে বাংলা লেখা কেটে যায়। তাই বাংলায় স্বাচ্ছন্দ্যে পড়ার জন্য লাইন-হাইট অন্তত ১.৬ থেকে ১.৮ রাখতে হয়।',
      commonMistakes_en: 'Ignoring font clipping or treating Bangla exactly like English Latin characters.',
      commonMistakes_bn: 'বাংলা অক্ষরের কার-ফলা কেটে যাওয়াকে গুরুত্ব না দিয়ে ইংরেজির মাপ বসিয়ে রাখা।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-figma-foundations',
      title_en: 'Figma Fundamentals and UI Systems',
      title_bn: 'ফিগমা ফান্ডামেন্টালস ও ডিজাইন সিস্টেম',
      provider: 'Figma for Education',
      url: 'https://www.figma.com/education/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 12,
      cost: '100% Free',
      relevance_en: 'Official Figma tutorials and educational certification exercises.',
      relevance_bn: 'ফিগমার অফিশিয়াল এডুকেশন রিসোর্স ও ফ্রি প্র্যাকটিস প্রজেক্ট।'
    }
  ]
};
