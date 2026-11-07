import type { CareerTrack } from '../../../shared/types.js';

export const digitalLiteracyFoundationTrack: Omit<CareerTrack, 'id'> = {
  slug: 'digital-literacy-foundation',
  title_en: 'Digital and Computer Literacy Foundation Track',
  title_bn: 'ডিজিটাল ও কম্পিউটার লিটারেসি ফাউন্ডেশন ট্র্যাক',
  summary_en: 'A mandatory 30-day practical bridge curriculum built for CST students who do not yet own a personal computer or struggle with mouse control, typing, file management, and workplace English.',
  summary_bn: 'পলিটেকনিকের যেসকল শিক্ষার্থী এখনও ব্যক্তিগত কম্পিউটার ব্যবহার করেননি অথবা মাউস, দ্রুত টাইপিং, ফাইল ব্যবস্থাপনা ও প্রাথমিক ইংরেজিতে দ্বিধাবোধ করেন, তাদের জন্য ৩০ দিনের ব্যবহারিক বুনিয়াদি কোর্স।',
  pivotAdvice_en: 'If you cannot comfortably navigate operating systems and files, attempting full-stack coding or advanced networking right now will lead to frustration. Complete this 30-day foundational bridge first. Once you finish, your technical learning speed will multiply.',
  pivotAdvice_bn: 'কম্পিউটার পরিচালনা ও ফাইলে স্বাচ্ছন্দ্য না থাকলে সরাসরি জটিল কোডিং বা অ্যাডভান্সড নেটওয়ার্কিং শেখা হতাশাজনক হতে পারে। প্রথমে এই ৩০ দিনের বুনিয়াদি সেতু শেষ করো। এটি সম্পন্ন হলে তোমার যেকোনো কারিগরি বিষয় শেখার গতি বহুগুণ বেড়ে যাবে।',
  minPcRequired: 'none',
  dayToDay_en: [
    'Practicing touch typing in English and Bangla Bijoy/Avro for at least 25 words per minute.',
    'Organizing directories, understanding zip archives, USB file transfers, and file extensions.',
    'Navigating modern web browsers, bookmarking resources, and conducting targeted Google search queries.',
    'Composing professional emails and organizing Google Drive folders for academic and job documents.',
    'Using smartphone OTG adapter with a physical keyboard and mouse for low-cost home practice.'
  ],
  dayToDay_bn: [
    'প্রতিদিন ইংরেজি ও বাংলা অভ্র/বিজয় টাইপিং অনুশীলন করে মিনিটে অন্তত ২৫ শব্দ তোলার দক্ষতা অর্জন।',
    'কম্পিউটারের বিভিন্ন ফোল্ডার গোছানো, জিপ ফাইল আনজিপ করা, পেনড্রাইভ ব্যবহার ও ফাইল ফরম্যাট বোঝা।',
    'ওয়েব ব্রাউজার দিয়ে প্রয়োজনীয় ডকুমেন্ট সার্চ করা ও বিশ্বস্ত উৎস থেকে সফটওয়্যার ডাউনলোড করা।',
    'পেশাদার ইমেইল লেখা এবং গুগুল ড্রাইভে ক্লাউড ফাইল ব্যাকআপ রাখার নিয়ম শেখা।',
    'স্মার্টফোনে ওটিজি অ্যাডাপ্টারের মাধ্যমে সাধারণ কিবোর্ড ও মাউস যুক্ত করে ঘরে বসেই টাইপিং চর্চা।'
  ],
  mustHaveSkills: [
    {
      id: 'touch-typing',
      name: 'Touch Typing (English and Bangla)',
      category: 'Foundational',
      importance: 'Essential',
      description_en: 'Typing at 25+ words per minute without looking constantly at the keyboard keys.',
      description_bn: 'কিবোর্ডের দিকে না তাকিয়ে মিনিটে অন্তত ২৫ শব্দ নির্ভুলভাবে টাইপ করার সক্ষমতা।'
    },
    {
      id: 'file-system-mastery',
      name: 'File System and Folder Navigation',
      category: 'Operating System',
      importance: 'Essential',
      description_en: 'Understanding drives, paths, file extensions (.pdf, .zip, .exe, .iso), and backup hygiene.',
      description_bn: 'লোকাল ড্রাইভ, পাথ, ফাইল এক্সটেনশন ও ডেটা ব্যাকআপের সঠিক নিয়ম বোঝা।'
    },
    {
      id: 'otg-mobile-setup',
      name: 'OTG Smartphone Peripheral Setup',
      category: 'Hardware Workaround',
      importance: 'Essential',
      description_en: 'Connecting USB mouse and physical keyboard to an Android phone using a 60 BDT OTG converter.',
      description_bn: '৬০ টাকার ওটিজি ক্যাবল দিয়ে সাধারণ অ্যান্ড্রয়েড ফোনে কিবোর্ড-মাউস যুক্ত করে চর্চার কৌশল।'
    },
    {
      id: 'google-workspace',
      name: 'Google Docs and Cloud Storage',
      category: 'Productivity',
      importance: 'Recommended',
      description_en: 'Creating clean CVs in Google Docs, organizing spreadsheets, and sharing drive links.',
      description_bn: 'গুগল ডক্সে জীবনবৃত্তান্ত তৈরি, শিট ব্যবহার এবং ড্রাইভে ফাইল শেয়ার করার পদ্ধতি।'
    },
    {
      id: 'tech-english-vocabulary',
      name: 'Essential Tech English Vocabulary',
      category: 'Language',
      importance: 'Essential',
      description_en: 'Understanding 100 core words: directory, repository, execute, debug, bandwidth, and protocol.',
      description_bn: 'কম্পিউটার জগতের ১০০টি অতি প্রয়োজনীয় ইংরেজি শব্দের অর্থ ও ব্যবহার আয়ত্ত করা।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Bangladesh Nationwide (All Districts)',
      entrySalary: { min: 10000, max: 18000, currency: 'BDT', formatted: '10,000 - 18,000 BDT' },
      midSalary: { min: 18000, max: 28000, currency: 'BDT', formatted: '18,000 - 28,000 BDT' },
      seniorSalary: { min: 28000, max: 40000, currency: 'BDT', formatted: '28,000 - 40,000 BDT' },
      hiringSectors: [
        'Union Digital Centers (UDC) and Post E-Centers',
        'School, College and Coaching Computer Labs',
        'Retail Shops and Local Trading Accounting Support',
        'Hospital and Diagnostic Reception Data Desks'
      ],
      cvExpectations: [
        'Fast and accurate bilingual typing speed (Bangla Bijoy/Avro + English)',
        'Clear understanding of MS Word, Excel, and Google Drive',
        'Polite customer interaction and punctual attendance',
        'Basic troubleshooting of printers and internet routers'
      ],
      localDemandSummary_en: 'Basic computer literacy is the universal stepping stone across every district in Bangladesh. Over 100,000 small businesses, clinics, and government sub-offices hire entry-level operators while you prepare for advanced CST certifications.',
      localDemandSummary_bn: 'বাংলাদেশের প্রতিটি জেলা ও উপজেলায় ডিজিটাল লিটারেসি হলো কর্মসংস্থানের প্রথম ধাপ। বিভিন্ন ডায়াগনস্টিক সেন্টার, ইউনিয়ন ডিজিটাল সেন্টার ও স্থানীয় প্রতিষ্ঠানে এন্ট্রি-লেভেল কাজ করে পড়াশোনার খরচ চালানো যায়।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'United Arab Emirates and Saudi Arabia',
        countryName_bn: 'সংযুক্ত আরব আমিরাত ও সৌদি আরব',
        demandLevel: 'Moderate',
        demandLevel_bn: 'মাঝারি',
        visaReality_en: 'Data entry and basic document handling visas require high school or diploma equivalence attested by the foreign ministry.',
        visaReality_bn: 'ডেটা এন্ট্রি ও অফিস সহায়ক ভিসার জন্য ডিপ্লোমা সার্টিফিকেটের পররাষ্ট্র মন্ত্রণালয় সত্যায়ন প্রয়োজন হয়।',
        averageSalaryUsdOrLocal: '1,500 - 2,500 AED (approx 45,000 - 75,000 BDT)',
        requiredExperienceYears: '1 to 2 years documented experience'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$100 - $300 / month',
      competitionLevel: 'High competition from global virtual assistants',
      competitionLevel_bn: 'সারাবিশ্বের ভার্চুয়াল অ্যাসিস্ট্যান্টদের সাথে প্রতিযোগিতা থাকে',
      englishRequirement: 'Basic chat comprehension is mandatory to follow buyer instructions',
      englishRequirement_bn: 'ক্রেতার কাজের নির্দেশনা বুঝতে ন্যূনতম রিডিং ইংরেজি জানা আবশ্যক',
      realities_en: [
        'Micro-task platforms require patience and prompt delivery',
        'Reliable power and smartphone internet hotspot are critical',
        'Bilingual typing (English-Bangla) gives local edge'
      ],
      realities_bn: [
        'মাইক্রো-টাস্ক প্ল্যাটফর্মে ধৈর্য ধরে সঠিক সময়ে কাজ ডেলিভারি দিতে হয়',
        'নিরবচ্ছিন্ন ইন্টারনেট ও বিদ্যুৎ ব্যাকআপ থাকা জরুরি',
        'দ্বিভাষিক টাইপিং জানলে লোকাল মার্কেটে বেশি কাজ পাওয়া যায়'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Zero-to-One Computer Operations',
      phaseTitle_bn: 'প্রথম পর্ব: কম্পিউটার পরিচিতি ও টাইপিং মাস্টারি',
      phaseSubtitle_en: 'Day 1 to 10: Mouse agility, typing speed, and operating system basics.',
      phaseSubtitle_bn: '১ থেকে ১০ দিন: মাউস চালানো, কিবোর্ড টাইপিং ও অপারেটিং সিস্টেমের ভিত্তি।',
      durationWeeks: 2,
      modules: [
        {
          id: 'mod-typing-drill',
          title_en: 'Touch Typing and Muscle Memory Drills',
          title_bn: 'টাচ টাইপিং ও কিবোর্ড মেমোরি অনুশীলন',
          description_en: 'Master home row keys (ASDF JKL;) on physical keyboard or OTG-connected smartphone keyboard.',
          description_bn: 'কিবোর্ডের হোম-রো কি আয়ত্ত করে না দেখে টাইপ করার ধারাবাহিক ড্রিল।',
          estimatedDays: 5,
          mobileAccessible: true,
          keyTopics: ['Home row finger placement', 'TypingClub drills', 'Bangla Avro layout basics'],
          practicalTask_en: 'Achieve 20 WPM on TypingClub without looking down at the keyboard.',
          practicalTask_bn: 'কিবোর্ডের দিকে না তাকিয়ে টাইপিংক্লাবে ২০ শব্দ প্রতি মিনিট গতি অর্জন করো।'
        },
        {
          id: 'mod-file-mgmt',
          title_en: 'File Systems, Formats and Directory Structures',
          title_bn: 'ফাইল ম্যানেজমেন্ট ও ফোল্ডার সাজানো',
          description_en: 'Learn file extensions, cut/copy/paste shortcuts, compression (.zip), and secure USB handling.',
          description_bn: 'ফাইল ফরম্যাট, কাট-কপি-পেস্ট শর্টকাট, জিপ ফাইল তৈরি ও নিরাপদ পেনড্রাইভ ব্যবহার।',
          estimatedDays: 5,
          mobileAccessible: true,
          keyTopics: ['Path navigation', 'Zip and 7z extraction', 'Keyboard shortcuts (Ctrl+C, V, X, Z)'],
          practicalTask_en: 'Create an organized 3-tier folder structure for your diploma subjects with proper naming conventions.',
          practicalTask_bn: 'পলিটেকনিকের সেমিস্টার সাবজেক্টগুলোর জন্য সুবিন্যস্ত ৩ স্তরের ফোল্ডার তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: Productive Internet and Cloud Literacy',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: কার্যকর ইন্টারনেট ও ক্লাউড ব্যবহার',
      phaseSubtitle_en: 'Day 11 to 20: Google Workspace, online research, and email etiquette.',
      phaseSubtitle_bn: '১১ থেকে ২০ দিন: গুগল ডক্স, প্রফেশনাল ইমেইল ও প্রয়োজনীয় তথ্য খোঁজার কৌশল।',
      durationWeeks: 2,
      modules: [
        {
          id: 'mod-google-docs-cv',
          title_en: 'Professional CV and Document Creation in Google Docs',
          title_bn: 'গুগল ডক্সে স্ট্যান্ডার্ড জীবনবৃত্তান্ত তৈরি',
          description_en: 'Build a standard single-page CV without relying on complex MS Word installations.',
          description_bn: 'মোবাইল বা পিসিতে গুগল ডক্স ব্যবহার করে পরিষ্কার ও নির্ভুল এক পাতার সিভি তৈরি।',
          estimatedDays: 5,
          mobileAccessible: true,
          keyTopics: ['Typography formatting', 'Table alignment', 'Exporting PDF documents cleanly'],
          practicalTask_en: 'Write and export your personal 1-page student profile in PDF format.',
          practicalTask_bn: 'নিজের শিক্ষাগত যোগ্যতা ও স্কিল দিয়ে এক পাতার সুন্দর পিডিএফ সিভি তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: Hardware Diagnostics and Troubleshooting',
      phaseTitle_bn: 'তৃতীয় পর্ব: হার্ডওয়্যার পরিচিতি ও প্রাইমারি ট্রাবলশুটিং',
      phaseSubtitle_en: 'Day 21 to 26: Inside a PC cabinet, ports, BIOS, and OS reinstallation.',
      phaseSubtitle_bn: '২১ থেকে ২৬ দিন: কম্পিউটারের বিভিন্ন পার্টস, বায়োস ও উইন্ডোজ ইনস্টলেশন।',
      durationWeeks: 1,
      modules: [
        {
          id: 'mod-pc-anatomy',
          title_en: 'Anatomy of Desktop and Laptop Hardware',
          title_bn: 'ডেস্কটপ ও ল্যাপটপের ভেতরের যন্ত্রাংশ পরিচিতি',
          description_en: 'RAM, SSD vs HDD, CPU socket, power supply (PSU), motherboards, and heat sinks.',
          description_bn: 'র‍্যাম, এসএসডি, প্রসেসর, মাদারবোর্ড, পাওয়ার সাপ্লাই ও ক্যাবল কানেকশন শনাক্তকরণ।',
          estimatedDays: 3,
          mobileAccessible: true,
          keyTopics: ['Identifying RAM slots and DDR types', 'SATA vs NVMe drives', 'Safe ESD precautions'],
          practicalTask_en: 'Inspect your polytechnic lab computer and write down its exact CPU, RAM, and storage specifications.',
          practicalTask_bn: 'পলিটেকনিক ল্যাবের একটি কম্পিউটারের প্রসেসর, র‍্যাম ও স্টোরেজ স্পেক পর্যবেক্ষণ করে নোট করো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: Stepping Up to Technical Tracks',
      phaseTitle_bn: 'চতুর্থ পর্ব: পরবর্তী টেকনিক্যাল ট্র্যাকের প্রস্তুতি',
      phaseSubtitle_en: 'Day 27 to 30: Evaluation, terminal basics, and track selection.',
      phaseSubtitle_bn: '২৭ থেকে ৩০ দিন: বেসিক টার্মিনাল কমান্ড ও মূল ট্র্যাকে রূপান্তরের দিকনির্দেশনা।',
      durationWeeks: 1,
      modules: [
        {
          id: 'mod-terminal-first-look',
          title_en: 'First Steps with Command Prompt and Bash',
          title_bn: 'কমান্ড প্রম্পট ও ব্যাশ টার্মিনালের সাথে প্রথম পরিচয়',
          description_en: 'Navigating directories via terminal: cd, dir, ls, ping, and ipconfig without fear.',
          description_bn: 'কালো স্ক্রিনের ভয় দূর করা: সিডি, এলএস, পিং ও আইপিকনফিগ কমান্ডের মাধ্যমে কাজ করা।',
          estimatedDays: 4,
          mobileAccessible: true,
          keyTopics: ['ping 8.8.8.8', 'ipconfig / all', 'cls and clear', 'cd and mkdir'],
          practicalTask_en: 'Ping your local gateway and check your local IP address using command prompt.',
          practicalTask_bn: 'কমান্ড প্রম্পট ওপেন করে নিজের লোকাল আইপি অ্যাড্রেস বের করো এবং পিং টেস্ট সম্পন্ন করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'fl-q1',
      question_en: 'What is the difference between an Operating System and an Application Program?',
      question_bn: 'অপারেটিং সিস্টেম (OS) এবং অ্যাপ্লিকেশন প্রোগ্রামের মধ্যে মূল পার্থক্য কী?',
      category: 'Foundational Knowledge',
      whyAsked_en: 'Tests whether the candidate understands how software interacts with physical computer hardware.',
      whyAsked_bn: 'প্রার্থী কম্পিউটারের হার্ডওয়্যার ও সফটওয়্যারের পারস্পরিক সম্পর্ক পরিষ্কারভাবে বোঝে কিনা তা যাচাই করতে।',
      howToAnswer_en: 'Explain that the Operating System (like Windows or Linux) manages hardware resources like RAM and CPU, while application programs (like Google Chrome or MS Word) perform specific user tasks on top of the OS.',
      howToAnswer_bn: 'বলবে: অপারেটিং সিস্টেম হলো মূল সফটওয়্যার যা হার্ডওয়্যারকে পরিচালনা করে (যেমন উইন্ডোজ বা লিনাক্স)। আর অ্যাপ্লিকেশন সফটওয়্যার হলো নির্দিষ্ট কাজের জন্য তৈরি প্রোগ্রাম (যেমন ক্রোম বা এমএস ওয়ার্ড)।',
      commonMistakes_en: 'Confusing basic utility apps with operating systems or giving overly academic textbook definitions without practical examples.',
      commonMistakes_bn: 'অপারেটিং সিস্টেমের উদাহরণ হিসেবে ক্রোম বা ফেসবুকের নাম বলে ফেলা।'
    },
    {
      id: 'fl-q2',
      question_en: 'If a computer turns on but the monitor says "No Signal", what steps do you take first?',
      question_bn: 'কম্পিউটার চালু হলেও যদি মনিটরে "No Signal" দেখায়, তবে তুমি প্রথমে কী করবে?',
      category: 'Hardware Troubleshooting',
      whyAsked_en: 'Evaluates logical step-by-step diagnostic thinking rather than random guessing.',
      whyAsked_bn: 'সমস্যা দেখে এলোমেলো আন্দাজ না করে ধাপে ধাপে কারণ খুঁজে বের করার মানসিকতা দেখার জন্য।',
      howToAnswer_en: 'Start with the simplest check: ensure VGA/HDMI cable is securely plugged in at both ends. Next, observe if the keyboard NumLock light turns on. If it does not post, gently remove RAM, clean the golden pins with an eraser, reseat it, and retest.',
      howToAnswer_bn: 'প্রথমে ভিজিএ/এইচডিএমআই ক্যাবলটি ভালোভাবে লাগানো আছে কিনা দেখব। এরপর কিবোর্ডের নামলক বাতি জ্বলে কিনা লক্ষ্য করব। বাতি না জ্বললে র‍্যাম সাবধানে খুলে ইরেজার দিয়ে গোল্ডেন পিন পরিষ্কার করে আবার বসাব।',
      commonMistakes_en: 'Immediately recommending buying a new motherboard or processor before testing the display cable and RAM.',
      commonMistakes_bn: 'ক্যাবল বা র‍্যাম চেক না করেই মাদারবোর্ড নষ্ট হয়ে গেছে বলে ঘোষণা দেওয়া।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-typingclub',
      title_en: 'TypingClub Touch Typing Mastery Badge',
      title_bn: 'টাইপিংক্লাব টাচ টাইপিং প্রফিশিয়েন্সি ব্যাজ',
      provider: 'TypingClub',
      url: 'https://www.typingclub.com/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 15,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Builds foundational muscle memory for 25+ words per minute.',
      relevance_bn: 'কিবোর্ডের দিকে না তাকিয়ে দ্রুত টাইপ করার অভ্যাস তৈরি করে।'
    },
    {
      id: 'cert-muktopaath-computer',
      title_en: 'Basic Computer Operations and Office Applications',
      title_bn: 'মৌলিক কম্পিউটার পরিচালনা ও অফিস অ্যাপ্লিকেশন',
      provider: 'Muktopaath (Government of Bangladesh a2i)',
      url: 'https://muktopaath.gov.bd/',
      mobileAccessible: true,
      language: 'bn',
      durationHours: 20,
      cost: 'BD Gov 100% Free',
      isBdLocal: true,
      category: 'bd_national',
      relevance_en: 'Official government-backed course in Bangla covering everyday computing and office literacy.',
      relevance_bn: 'বাংলাদেশ সরকারের এটুআই পরিচালিত মুক্তপাঠ প্ল্যাটফর্মের সম্পূর্ণ বাংলায় ফ্রি সার্টিফিকেট কোর্স।'
    }
  ]
};
