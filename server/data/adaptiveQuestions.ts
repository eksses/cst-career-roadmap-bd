export interface AdaptiveOption {
  key: string;
  label_en: string;
  label_bn: string;
  description_en: string;
  description_bn: string;
  iconName?: string;
}

export interface AdaptiveQuestion {
  id: string;
  dimension: string;
  title_en: string;
  title_bn: string;
  subtitle_en: string;
  subtitle_bn: string;
  dependsOn?: {
    questionId: string;
    values: string[];
  };
  options: AdaptiveOption[];
  allowSkip?: boolean;
}

export const adaptiveQuestions: AdaptiveQuestion[] = [
  // 1. Root Question: Hardware & Device Reality
  {
    id: 'hardware',
    dimension: 'hardware',
    title_en: 'What device do you use daily?',
    title_bn: 'বর্তমানে কী ডিভাইস ব্যবহার করো?',
    subtitle_en: 'Your roadmap adapts to what you have right now.',
    subtitle_bn: 'তোমার ডিভাইসের সাথে মিলিয়ে বাস্তব রোডম্যাপ তৈরি হবে।',
    allowSkip: true,
    options: [
      {
        key: 'phone_only',
        label_en: 'Smartphone Only',
        label_bn: 'শুধুমাত্র স্মার্টফোন',
        description_en: 'Android or iPhone. No personal PC at home.',
        description_bn: 'বাসায় কোনো কম্পিউটার নেই, স্মার্টফোন ব্যবহার করি।',
        iconName: 'Smartphone'
      },
      {
        key: 'low_spec_pc',
        label_en: 'Low-Spec PC / Shared Laptop (2GB - 4GB RAM)',
        label_bn: 'কম কনফিগারেশনের পিসি (২ থেকে ৪ জিবি র‍্যাম)',
        description_en: 'Older computer for lightweight coding and browsing.',
        description_bn: 'পুরোনো কম্পিউটার, হালকা ব্রাউজিং ও কোডিং চলে।',
        iconName: 'Monitor'
      },
      {
        key: 'standard_pc',
        label_en: 'Standard PC / Laptop (8GB RAM / SSD)',
        label_bn: 'স্ট্যান্ডার্ড ল্যাপটপ বা ডেস্কটপ (৮ জিবি র‍্যাম)',
        description_en: 'Smoothly runs VS Code and web browsers.',
        description_bn: 'কোড এডিটর ও ব্রাউজার অনায়াসে চলে।',
        iconName: 'Laptop'
      },
      {
        key: 'high_spec_pc',
        label_en: 'High-Spec PC (16GB+ RAM / Dedicated GPU)',
        label_bn: 'হাই কনফিগারেশন কম্পিউটার (১৬ জিবি+ র‍্যাম)',
        description_en: 'Runs Unity, Docker, virtual machines, and AI models.',
        description_bn: 'ভারী গেম ইঞ্জিন, ডকার ও লোকাল এআই চালানো যায়।',
        iconName: 'Cpu'
      }
    ]
  },

  // 2A. Branch for Phone-Only: Mobile & Lab Routine
  {
    id: 'phone_routine',
    dimension: 'phone_capacity',
    title_en: 'How will you practice coding?',
    title_bn: 'কোডিং কীভাবে প্র্যাকটিস করবে?',
    subtitle_en: 'We adjust your roadmap to your lab or mobile routine.',
    subtitle_bn: 'ল্যাব বা মোবাইলের সময় অনুযায়ী সঠিক পরিকল্পনা তৈরি হবে।',
    dependsOn: {
      questionId: 'hardware',
      values: ['phone_only']
    },
    allowSkip: true,
    options: [
      {
        key: 'polytechnic_lab',
        label_en: 'Weekly access to Polytechnic computer labs',
        label_bn: 'পলিটেকনিকের ল্যাবে সপ্তাহে বসার সুযোগ পাই',
        description_en: 'Hands-on practice on lab computers and routers.',
        description_bn: 'ল্যাব ক্লাসে কম্পিউটার ও রাউটারে কাজ করতে পারি।',
        iconName: 'Laptop'
      },
      {
        key: 'mobile_otg_keyboard',
        label_en: 'OTG keyboard connected to phone',
        label_bn: 'ফোনে ওটিজি কিবোর্ড লাগিয়ে টাইপিং শিখব',
        description_en: 'Low-cost BDT 200 setup for 35+ WPM typing speed.',
        description_bn: 'মাত্র ২০০ টাকার কিবোর্ড দিয়ে দ্রুত টাইপিং স্পিড তৈরি করব।',
        iconName: 'Smartphone'
      },
      {
        key: 'mobile_pure',
        label_en: 'Smartphone screen only (1 to 2 hours daily)',
        label_bn: 'শুধুমাত্র ফোনে দিনে ১ থেকে ২ ঘণ্টা সময় দেব',
        description_en: 'Focus on notes, video walkthroughs, and mobile app QA.',
        description_bn: 'মোবাইলে সহজে পড়া ও টেস্ট করা যায় এমন কাজ।',
        iconName: 'HelpCircle'
      }
    ]
  },

  // 2B. Branch for Phone-Only: Target Goal
  {
    id: 'phone_target_goal',
    dimension: 'phone_direction',
    title_en: 'What kind of work do you want to start with?',
    title_bn: 'কোন কাজ দিয়ে শুরু করতে চাও?',
    subtitle_en: 'Realistic career tracks without an expensive laptop.',
    subtitle_bn: 'দামি কম্পিউটার ছাড়াই বাস্তব ক্যারিয়ারের সুযোগ।',
    dependsOn: {
      questionId: 'hardware',
      values: ['phone_only']
    },
    allowSkip: true,
    options: [
      {
        key: 'goal_it_networking',
        label_en: 'ISP & IT Hardware Support',
        label_bn: 'আইএসপি, নেটওয়ার্কিং ও হার্ডওয়্যার সাপোর্ট',
        description_en: 'Router setup, network cables, and PC maintenance.',
        description_bn: 'ল্যাবে রাউটার কনফিগ ও কম্পিউটার মেরামত শেখা।',
        iconName: 'Network'
      },
      {
        key: 'goal_software_qa',
        label_en: 'Software QA Testing (Mobile Bug Hunting)',
        label_bn: 'সফটওয়্যার কিউএ টেস্টিং (মোবাইলে অ্যাপ টেস্ট)',
        description_en: 'Find bugs in mobile apps, report issues, earn rewards.',
        description_bn: 'মোবাইলে অ্যাপ টেস্ট করে ভুল ধরা ও বাউন্টি জেতা।',
        iconName: 'CheckCircle2'
      },
      {
        key: 'goal_digital_foundation',
        label_en: 'Digital Literacy & Computer Foundations',
        label_bn: 'কম্পিউটার বেসিক ফাউন্ডেশন (একদম শূন্য থেকে)',
        description_en: 'Touch-typing, file management, and internet basics.',
        description_bn: 'টাইপিং, ফাইল অর্গানাইজেশন ও কম্পিউটার ব্যবহারের মৌলিক জ্ঞান।',
        iconName: 'Compass'
      },
      {
        key: 'goal_digital_marketing',
        label_en: 'Digital Marketing & Social Media Management',
        label_bn: 'ডিজিটাল মার্কেটিং ও ফেসবুক পেজ ম্যানেজমেন্ট',
        description_en: 'Manage online shop pages and customer orders on phone.',
        description_bn: 'স্মার্টফোন থেকেই পেজ হ্যান্ডেল ও কাস্টমার সার্ভিস।',
        iconName: 'Globe'
      }
    ]
  },

  // 2C. Sub-branch for Phone: IT Networking Route
  {
    id: 'phone_net_route',
    dimension: 'phone_networking_focus',
    title_en: 'Which hardware field interests you most?',
    title_bn: 'কোন হার্ডওয়্যার কাজটি তোমার বেশি পছন্দ?',
    subtitle_en: 'Hands-on practice in polytechnic labs and local offices.',
    subtitle_bn: 'পলিটেকনিক ল্যাব ও লোকাল অফিসে কাজের উপযোগী দিকনির্দেশনা।',
    dependsOn: {
      questionId: 'phone_target_goal',
      values: ['goal_it_networking']
    },
    allowSkip: true,
    options: [
      {
        key: 'net_isp_mikrotik',
        label_en: 'ISP & MikroTik Router Setup (WinBox Lab)',
        label_bn: 'আইএসপি ও মিক্রোটিক রাউটার কনফিগারেশন',
        description_en: 'Bandwidth queues, IP assignment, and optical fiber.',
        description_bn: 'উইনবক্স দিয়ে ব্যান্ডউইথ কিউ ও অপটিক্যাল ফাইবার নেটওয়ার্ক।',
        iconName: 'Network'
      },
      {
        key: 'net_pc_support',
        label_en: 'PC Assembly, Hardware Repair & Windows Setup',
        label_bn: 'পিসি মেরামত, হার্ডওয়্যার ট্রাবলশুটিং ও উইন্ডোজ',
        description_en: 'Motherboards, RAM upgrades, and printer repairs.',
        description_bn: 'মাদারবোর্ড, র‍্যাম, উইন্ডোজ সেটআপ ও প্রিন্টার মেরামত।',
        iconName: 'Monitor'
      }
    ]
  },

  // 2D. Sub-branch for Phone: QA Route
  {
    id: 'phone_qa_route',
    dimension: 'phone_qa_focus',
    title_en: 'Which testing path fits your phone?',
    title_bn: 'মোবাইলে কোন ধরনের টেস্টিং শিখতে চাও?',
    subtitle_en: 'Test real apps and report bugs with zero coding.',
    subtitle_bn: 'কোডিং ছাড়া অ্যাপ টেস্ট করে ভুল ধরার ব্যবহারিক কাজ।',
    dependsOn: {
      questionId: 'phone_target_goal',
      values: ['goal_software_qa']
    },
    allowSkip: true,
    options: [
      {
        key: 'qa_mobile_app_test',
        label_en: 'Mobile App Testing & Bug Reporting (Android & uTest)',
        label_bn: 'মোবাইল অ্যাপ টেস্টিং ও বাগ রিপোর্টিং',
        description_en: 'Test Android apps, capture screenshots, write bug reports.',
        description_bn: 'মোবাইলেই অ্যাপ টেস্ট করে স্ক্রিনশট ও বাগ রিপোর্ট তৈরি।',
        iconName: 'Smartphone'
      },
      {
        key: 'qa_web_usability',
        label_en: 'Web Usability & Functional Testing',
        label_bn: 'ওয়েবসাইট ইউজেবিলিটি ও টেস্ট',
        description_en: 'Verify mobile websites, buttons, and checkout forms.',
        description_bn: 'মোবাইল ব্রাউজারে ওয়েবসাইটের বাটন ও ফরম যাচাই করা।',
        iconName: 'CheckCircle2'
      }
    ]
  },

  // 3. Branch for PC Owners: Coding Experience & Preference
  {
    id: 'coding_preference',
    dimension: 'coding_stance',
    title_en: 'What is your coding experience?',
    title_bn: 'প্রোগ্রামিং বা কোডিংয়ে তোমার অভিজ্ঞতা কেমন?',
    subtitle_en: 'Select your comfort level with coding.',
    subtitle_bn: 'তোমার অভিজ্ঞতার সাথে মিলিয়ে রোডম্যাপ সাজানো হবে।',
    dependsOn: {
      questionId: 'hardware',
      values: ['low_spec_pc', 'standard_pc', 'high_spec_pc']
    },
    allowSkip: true,
    options: [
      {
        key: 'has_c_basics',
        label_en: 'Learned basic C / C++ in Polytechnic',
        label_bn: 'পলিটেকনিক ক্লাসে বেসিক সি (C) বা সি++ শিখেছি',
        description_en: 'Familiar with variables, if-else, loops, and functions.',
        description_bn: 'ভ্যারিয়েবল, কন্ডিশন ও লুপের সাধারণ ধারণা রয়েছে।',
        iconName: 'Code2'
      },
      {
        key: 'absolute_code_beginner',
        label_en: 'Complete beginner (Start from scratch)',
        label_bn: 'একদম নতুন, শূন্য থেকে আধুনিক কোডিং শিখব',
        description_en: 'Want a high-demand language with friendly syntax.',
        description_bn: 'সহজবোধ্য ভাষা দিয়ে সরাসরি প্রজেক্টভিত্তিক কোডিং।',
        iconName: 'Compass'
      },
      {
        key: 'has_python_or_js',
        label_en: 'Practiced Python, JavaScript, or HTML/CSS',
        label_bn: 'ইতিমধ্যে পাইথন, জাভাস্ক্রিপ্ট বা এইচটিএমএল জানি',
        description_en: 'Ready to build production web apps or backend APIs.',
        description_bn: 'এডভান্সড ফ্রেমওয়ার্ক ও ডেটাবেস দিয়ে প্রজেক্ট বানাতে প্রস্তুত।',
        iconName: 'Layers'
      },
      {
        key: 'prefers_non_coding',
        label_en: 'Prefer non-coding (Design, Servers, Networking)',
        label_bn: 'কোডিং ভালো লাগে না; ডিজাইন, সার্ভার বা নেটওয়ার্ক পছন্দ',
        description_en: 'Interested in UI/UX Figma, Linux systems, or QA testing.',
        description_bn: 'ডিজাইন, সার্ভার টার্মিনাল বা নেটওয়ার্কিং বেশি পছন্দ।',
        iconName: 'Palette'
      }
    ]
  },

  // 4A. Branch for PC Coders: 24-Track Tech Specialization
  {
    id: 'tech_niche_focus',
    dimension: 'specialization',
    title_en: 'Which engineering field excites you most?',
    title_bn: 'কোন ফিল্ডে কাজ করতে সবচেয়ে বেশি আগ্রহী?',
    subtitle_en: 'Select your primary focus area.',
    subtitle_bn: 'তোমার পছন্দের ক্ষেত্রটি বেছে নাও।',
    dependsOn: {
      questionId: 'coding_preference',
      values: ['has_c_basics', 'absolute_code_beginner', 'has_python_or_js']
    },
    allowSkip: true,
    options: [
      {
        key: 'niche_game_dev',
        label_en: 'Video Game Development (Unity & C#)',
        label_bn: 'ভিডিও গেম ডেভেলপমেন্ট (ইউনিটি ও সি-শার্প)',
        description_en: '2D/3D games with physics, animations, and Play Store export.',
        description_bn: 'সি-শার্প দিয়ে ২ডি/৩ডি গেম ও প্লে-স্টোরের জন্য এপিকে তৈরি।',
        iconName: 'Layers'
      },
      {
        key: 'niche_ai_deep_learning',
        label_en: 'AI & Machine Learning (PyTorch & LLMs)',
        label_bn: 'এআই ও ডিপ লার্নিং (পাইটর্চ ও চ্যাটবট)',
        description_en: 'Neural networks, LLM fine-tuning, and vector search.',
        description_bn: 'পাইটর্চ মডেল, লার্জ ল্যাঙ্গুয়েজ মডেল ও ভেক্টর সার্চ।',
        iconName: 'Cpu'
      },
      {
        key: 'niche_ethical_hacking',
        label_en: 'Ethical Hacking & Bug Bounty (Burp Suite)',
        label_bn: 'এথিক্যাল হ্যাকিং ও বাগ বাউন্টি (বার্প স্যুট)',
        description_en: 'Find security bugs, write reports, earn bounties.',
        description_bn: 'ওয়েব নিরাপত্তা ত্রুটি নির্ণয় ও বাউন্টি রিওয়ার্ড অর্জন।',
        iconName: 'ShieldCheck'
      },
      {
        key: 'niche_web_fullstack',
        label_en: 'Frontend & Full-Stack Web (React & Next.js)',
        label_bn: 'ফ্রন্টএন্ড ও ফুল-স্ট্যাক ওয়েব (রিয়্যাক্ট ও নেক্সট)',
        description_en: 'Modern high-demand stack: React 19, TypeScript, and Node.',
        description_bn: 'রিয়্যাক্ট, টাইপস্ক্রিপ্ট ও নোড দিয়ে আধুনিক ওয়েব অ্যাপ।',
        iconName: 'Code2'
      },
      {
        key: 'niche_laravel_agency',
        label_en: 'Laravel, PHP & Agency Web Dev (Fast Jobs)',
        label_bn: 'লারাভেল ও পিএইচপি (দ্রুত চাকরির সেরা সুযোগ)',
        description_en: 'Fastest placement track across Dhaka software agencies.',
        description_bn: 'লারাভেল ও মাইএসকিউএল দিয়ে দেশীয় ফার্মে দ্রুত নিয়োগ।',
        iconName: 'Globe'
      },
      {
        key: 'niche_enterprise_java',
        label_en: 'Enterprise Java, FinTech & Banking APIs',
        label_bn: 'এন্টারপ্রাইজ জাভা, ফিনটেক ও ব্যাংকিং সফটওয়্যার',
        description_en: 'Spring Boot microservices and bKash payment APIs.',
        description_bn: 'স্প্রিং বুট দিয়ে দেশের ব্যাংক ও পেমেন্ট গেটওয়ে আর্কিটেকচার।',
        iconName: 'Briefcase'
      },
      {
        key: 'niche_mobile_flutter',
        label_en: 'Mobile App Development (Flutter & Dart)',
        label_bn: 'মোবাইল অ্যাপ ডেভেলপমেন্ট (ফ্লাটার ও ডার্ট)',
        description_en: 'Cross-platform native mobile apps with Firebase.',
        description_bn: 'একটি কোডে অ্যান্ড্রয়েড ও আইওএস অ্যাপ তৈরি।',
        iconName: 'Smartphone'
      },
      {
        key: 'niche_desktop_pos',
        label_en: 'Desktop POS & Utility Apps (Electron & C#)',
        label_bn: 'ডেস্কটপ সফটওয়্যার ও পিওএস (ইলেকট্রন ও সি-শার্প)',
        description_en: 'Offline billing tools for supermarkets and pharmacies.',
        description_bn: 'দোকান ও সুপারশপের অফলাইন ক্যাশ মেমো সফটওয়্যার।',
        iconName: 'Monitor'
      },
      {
        key: 'niche_data_engineering',
        label_en: 'Data Engineering & Big Data (Spark & SQL)',
        label_bn: 'ডেটা ইঞ্জিনিয়ারিং ও বিগ ডেটা (স্পার্ক ও এসকিউএল)',
        description_en: 'Pipelines processing millions of records for telecoms.',
        description_bn: 'টেলিকম ও ব্যাংকিং খাতের বিশাল ডেটা প্রসেসিং পাইপলাইন।',
        iconName: 'Database'
      },
      {
        key: 'niche_blockchain_web3',
        label_en: 'Blockchain & Smart Contracts (Solidity)',
        label_bn: 'ব্লকচেইন ও স্মার্ট কন্ট্রাক্ট (সলিডিটি ও ইভিএম)',
        description_en: 'Ethereum smart contracts and global remote bounties.',
        description_bn: 'সলিডিটি দিয়ে স্বয়ংক্রিয় স্মার্ট কন্ট্রাক্ট ও রিমোট প্রজেক্ট।',
        iconName: 'Layers'
      },
      {
        key: 'niche_embedded_iot',
        label_en: 'Embedded Systems & IoT (Arduino & ESP32)',
        label_bn: 'এমবেডেড সিস্টেমস ও রোবোটিক্স (আরডুইনো ও ইএসপি)',
        description_en: 'Sensors, Wi-Fi chips, and industrial automation.',
        description_bn: 'সার্কিট, সেন্সর ও চিপ কোডিং দিয়ে অটোমেশন ডিভাইস তৈরি।',
        iconName: 'Cpu'
      }
    ]
  },

  // 4A-1. Web Sub-Focus
  {
    id: 'web_sub_focus',
    dimension: 'web_layer',
    title_en: 'Which part of web development do you prefer?',
    title_bn: 'ওয়েব ডেভেলপমেন্টের কোন অংশ তোমার পছন্দ?',
    subtitle_en: 'Choose visual frontend or backend database APIs.',
    subtitle_bn: 'ভিজ্যুয়াল ফ্রন্টএন্ড নাকি ডেটাবেস ব্যাকএন্ড বেছে নাও।',
    dependsOn: {
      questionId: 'tech_niche_focus',
      values: ['niche_web_fullstack']
    },
    allowSkip: true,
    options: [
      {
        key: 'web_frontend_react',
        label_en: 'Frontend (React 19, Next.js, Tailwind)',
        label_bn: 'ফ্রন্টএন্ড (রিয়্যাক্ট ১৯, নেক্সট ও টেইলউইন্ড)',
        description_en: 'User interfaces, sleek animations, and responsive web pages.',
        description_bn: 'ইউজার ইন্টারফেস, সুন্দর এনিমেশন ও আধুনিক ওয়েবসাইট তৈরি।',
        iconName: 'Code2'
      },
      {
        key: 'web_backend_apis',
        label_en: 'Backend Systems (Node.js, PostgreSQL, Redis)',
        label_bn: 'ব্যাকএন্ড সিস্টেম (নোড, পোস্টগ্রিস ও এপিআই)',
        description_en: 'REST APIs, relational databases, caching, and auth.',
        description_bn: 'ডেটাবেস ডিজাইন, সুরক্ষিত এপিআই ও সার্ভার লজিক।',
        iconName: 'Server'
      },
      {
        key: 'web_fullstack_mern',
        label_en: 'Full-Stack Engineer (End-to-End TypeScript)',
        label_bn: 'ফুল-স্ট্যাক ইঞ্জিনিয়ার (সম্পূর্ণ ওয়েব সমাধান)',
        description_en: 'Connect frontend UI with backend databases and cloud.',
        description_bn: 'ফ্রন্টএন্ড থেকে ক্লাউড সার্ভার পর্যন্ত পুরো প্রজেক্ট।',
        iconName: 'Layers'
      }
    ]
  },

  // 4A-2. Cybersecurity Sub-Focus
  {
    id: 'cyber_sub_focus',
    dimension: 'cyber_domain',
    title_en: 'Which cybersecurity path matches your goal?',
    title_bn: 'সাইবার সিকিউরিটিতে কোন দিকে যেতে চাও?',
    subtitle_en: 'Choose offensive testing or defensive monitoring.',
    subtitle_bn: 'বাগ বাউন্টি টেস্টিং নাকি ব্যাংক সিকিউরিটি ডিফেন্স।',
    dependsOn: {
      questionId: 'tech_niche_focus',
      values: ['niche_ethical_hacking']
    },
    allowSkip: true,
    options: [
      {
        key: 'cyber_bug_hunting',
        label_en: 'Web Penetration Testing & Bug Bounty (Burp Suite)',
        label_bn: 'ওয়েব পেনিট্রেশন টেস্টিং ও বাউন্টি হান্টিং',
        description_en: 'OWASP Top 10 vulnerabilities and HackerOne bounties.',
        description_bn: 'ওয়েব নিরাপত্তা ত্রুটি বের করে ডলার বাউন্টি অর্জন।',
        iconName: 'ShieldCheck'
      },
      {
        key: 'cyber_soc_analyst',
        label_en: 'SOC Analyst & Network Defense (Wireshark & SIEM)',
        label_bn: 'এসওসি অ্যানালিস্ট ও ডিফেন্সিভ সিকিউরিটি',
        description_en: 'Traffic analysis, log monitoring, and bank network defense.',
        description_bn: 'ব্যাংক ও কর্পোরেট নেটওয়ার্ক সার্বক্ষণিক সুরক্ষিত রাখা।',
        iconName: 'ShieldCheck'
      }
    ]
  },

  // 4A-3. AI & Data Sub-Focus
  {
    id: 'ai_sub_focus',
    dimension: 'ai_depth',
    title_en: 'Which AI and data domain do you want to learn?',
    title_bn: 'এআই ও ডেটায় কোন ক্ষেত্রে দক্ষতা গড়বে?',
    subtitle_en: 'Choose deep learning, business dashboards, or pipelines.',
    subtitle_bn: 'ডিপ লার্নিং মডেল, ড্যাশবোর্ড নাকি ডেটা পাইপলাইন।',
    dependsOn: {
      questionId: 'tech_niche_focus',
      values: ['niche_ai_deep_learning']
    },
    allowSkip: true,
    options: [
      {
        key: 'ai_deep_learning_llm',
        label_en: 'Deep Learning & LLM Systems (PyTorch & RAG)',
        label_bn: 'ডিপ লার্নিং ও চ্যাটবট (পাইটর্চ ও ভেক্টর সার্চ)',
        description_en: 'Neural networks, LLM fine-tuning, and AI agents.',
        description_bn: 'পাইটর্চ দিয়ে নিউরাল নেটওয়ার্ক ও আধুনিক এআই অ্যাপ।',
        iconName: 'Cpu'
      },
      {
        key: 'ai_business_analytics',
        label_en: 'Data Analytics & Power BI (Python & SQL)',
        label_bn: 'ডেটা অ্যানালিটিক্স ও পাওয়ার বিআই (পাইথন ও এসকিউএল)',
        description_en: 'Data analysis, dashboards, and automated business reports.',
        description_bn: 'কোম্পানির ডেটা বিশ্লেষণ করে ইন্টারঅ্যাক্টিভ ড্যাশবোর্ড তৈরি।',
        iconName: 'Database'
      },
      {
        key: 'ai_bigdata_spark',
        label_en: 'Big Data Engineering (Spark & Kafka)',
        label_bn: 'বিগ ডেটা ইঞ্জিনিয়ারিং (স্পার্ক ও কাফকা)',
        description_en: 'Large-scale streaming data pipelines for telecom and banks.',
        description_bn: 'বড় ডেটা প্রসেসিং পাইপলাইন ও ক্লাউড ডেটা ওয়্যারহাউস।',
        iconName: 'Database'
      }
    ]
  },

  // 4B. Branch for Non-Coders / Systems Lovers
  {
    id: 'non_coding_niche_focus',
    dimension: 'non_coding_direction',
    title_en: 'Which tech track appeals to you most?',
    title_bn: 'কোন নন-কোডিং বা সিস্টেমস পথটি পছন্দ?',
    subtitle_en: 'Careers that do not require writing complex code.',
    subtitle_bn: 'ভারী কোডিং ছাড়াই সফটওয়্যার ও আইটিতে কাজ।',
    dependsOn: {
      questionId: 'coding_preference',
      values: ['prefers_non_coding']
    },
    allowSkip: true,
    options: [
      {
        key: 'focus_ui_ux',
        label_en: 'UI/UX & Product Design (Figma)',
        label_bn: 'ইউআই/ইউএক্স ও প্রোডাক্ট ডিজাইন (ফিগমা)',
        description_en: 'Design modern web and mobile apps with zero coding.',
        description_bn: 'ফিগমা দিয়ে মোবাইল অ্যাপ ও ওয়েবসাইটের সুন্দর ডিজাইন।',
        iconName: 'Palette'
      },
      {
        key: 'focus_graphic_motion',
        label_en: 'Graphic Design & Motion Graphics',
        label_bn: 'গ্রাফিক্স ডিজাইন ও মোশন গ্রাফিক্স',
        description_en: 'Photoshop, Illustrator, branding, and motion creatives.',
        description_bn: 'ফটোশপ ও ইলাস্ট্রেটর দিয়ে লোগো ও মার্কেটিং ভিজ্যুয়াল।',
        iconName: 'Palette'
      },
      {
        key: 'focus_devops_linux',
        label_en: 'Linux Server Administration & DevOps',
        label_bn: 'লিনাক্স সার্ভার অ্যাডমিন ও ডেভঅপ্স',
        description_en: 'Control cloud servers with Linux terminal and Docker.',
        description_bn: 'উবুন্টু টার্মিনাল, সার্ভার ও ডকার কনটেইনার পরিচালনা।',
        iconName: 'Server'
      },
      {
        key: 'focus_isp_networking',
        label_en: 'ISP & MikroTik Network Engineering',
        label_bn: 'আইএসপি ও মিক্রোটিক নেটওয়ার্কিং (উইনবক্স)',
        description_en: 'Bandwidth queues, fiber routing, and network administration.',
        description_bn: 'উইনবক্স দিয়ে ব্যান্ডউইথ নিয়ন্ত্রণ ও ইন্টারনেট রাউটিং।',
        iconName: 'Network'
      },
      {
        key: 'focus_qa_testing',
        label_en: 'Software QA & Bug Testing (Jira)',
        label_bn: 'সফটওয়্যার কিউএ ও বাগ টেস্টিং (জিরা)',
        description_en: 'Find software bugs, write test cases, verify apps.',
        description_bn: 'সফটওয়্যারের ভুলত্রুটি ধরা ও বাগ রিপোর্ট তৈরি।',
        iconName: 'CheckCircle2'
      },
      {
        key: 'focus_it_support',
        label_en: 'Corporate IT Support & Hardware',
        label_bn: 'কর্পোরেট আইটি সাপোর্ট ও হার্ডওয়্যার',
        description_en: 'PC assembly, office networking, and system repairs.',
        description_bn: 'কম্পিউটার হার্ডওয়্যার মেরামত ও অফিস নেটওয়ার্ক।',
        iconName: 'Briefcase'
      }
    ]
  },

  // 4B-1. DevOps & Cloud Sub-Focus
  {
    id: 'devops_sub_focus',
    dimension: 'devops_scope',
    title_en: 'Which server field do you want to specialize in?',
    title_bn: 'কোন সার্ভার ফিল্ডে বিশেষজ্ঞ হতে চাও?',
    subtitle_en: 'Choose Linux systems, AWS cloud, or Docker automation.',
    subtitle_bn: 'লিনাক্স সার্ভার, এডব্লিউএস ক্লাউড নাকি ডকার অটোমেশন।',
    dependsOn: {
      questionId: 'non_coding_niche_focus',
      values: ['focus_devops_linux']
    },
    allowSkip: true,
    options: [
      {
        key: 'devops_linux_sysadmin',
        label_en: 'Linux Server Admin (Ubuntu & Nginx)',
        label_bn: 'লিনাক্স সার্ভার অ্যাডমিন (উবুন্টু ও এনজিনএক্স)',
        description_en: 'VPS servers, firewalls, permissions, and hosting.',
        description_bn: 'ক্লাউড ভিপিএস সার্ভার সেটআপ ও ওয়েবসাইট হোস্টিং।',
        iconName: 'Server'
      },
      {
        key: 'devops_cloud_aws',
        label_en: 'AWS Cloud Solutions (Terraform & EC2)',
        label_bn: 'এডব্লিউএস ক্লাউড সল্যুশনস ও টেরাফর্ম',
        description_en: 'Cloud networks, serverless infrastructure, and storage.',
        description_bn: 'আন্তর্জাতিক ক্লাউড প্ল্যাটফর্ম এডব্লিউএসে আর্কিটেকচার তৈরি।',
        iconName: 'Cloud'
      },
      {
        key: 'devops_cicd_docker',
        label_en: 'DevOps & CI/CD (Docker & GitHub Actions)',
        label_bn: 'ডেভঅপ্স ও অটোমেশন (ডকার ও গিটহাব একশন)',
        description_en: 'Automate build pipelines and deploy microservices.',
        description_bn: 'সফটওয়্যার রিলিজ পাইপলাইন ও ডকার ডিপ্লয়মেন্ট।',
        iconName: 'Layers'
      }
    ]
  },

  // 5. Universal Closing Question: Timeline, Certification & Cost Preference
  {
    id: 'timeline_and_certs',
    dimension: 'timeline_budget',
    title_en: 'What is your timeline and certification goal?',
    title_bn: 'তোমার সময়সীমা ও সার্টিফিকেটের লক্ষ্য কী?',
    subtitle_en: 'All featured certifications are 100% free.',
    subtitle_bn: 'রোডম্যাপের সব সার্টিফিকেট সম্পূর্ণ ফ্রি।',
    allowSkip: true,
    options: [
      {
        key: 'urgent_job_free_certs',
        label_en: 'Fast entry (3 to 6 months, Free Certs)',
        label_bn: 'দ্রুত চাকরি দরকার (৩ থেকে ৬ মাস, ফ্রি সার্টিফিকেট)',
        description_en: 'Fast-turnaround skills with free verified badges.',
        description_bn: 'কম সময়ে দ্রুত কাজ শুরু ও ফ্রি আন্তর্জাতিক সার্টিফিকেট।',
        iconName: 'ShieldCheck'
      },
      {
        key: 'deep_specialist_1_year',
        label_en: 'Deep specialist (1 to 2 years diploma buffer)',
        label_bn: 'পর্যাপ্ত সময় আছে (১ থেকে ২ বছর, দক্ষ ইঞ্জিনিয়ার)',
        description_en: 'Deep technical foundation and high salary potential.',
        description_bn: 'গভীর টেকনিক্যাল দক্ষতা ও আকর্ষণীয় ক্যারিয়ারের লক্ষ্য।',
        iconName: 'Compass'
      },
      {
        key: 'vendor_exam_ccna_aws',
        label_en: 'Targeting official vendor exams (CCNA / AWS)',
        label_bn: 'অফিশিয়াল ভেন্ডর পরীক্ষার প্রস্তুতি (সিসকো/এডব্লিউএস)',
        description_en: 'Study for recognized industry vendor certification exams.',
        description_bn: 'ডিপ্লোমার পাশাপাশি আন্তর্জাতিক ভেন্ডর সার্টিফিকেটের প্রস্তুতি।',
        iconName: 'Award'
      }
    ]
  }
];
