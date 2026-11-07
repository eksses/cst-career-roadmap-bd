import type { CareerTrack } from '../../../shared/types.js';

export const itHardwareSupportTrack: Omit<CareerTrack, 'id'> = {
  slug: 'it-hardware-support',
  title_en: 'IT Support, Hardware and System Maintenance',
  title_bn: 'আইটি সাপোর্ট, হার্ডওয়্যার ও সিস্টেম মেইনটেন্যান্স',
  summary_en: 'Hands-on hardware troubleshooting, corporate desktop deployment, peripheral servicing, Windows domain environments, CCTV camera systems, and enterprise helpdesk operations.',
  summary_bn: 'কম্পিউটার হার্ডওয়্যার মেরামত, অফিস ডেস্কটপ সেটআপ, প্রিন্টার ও পেরিফেরাল সার্ভিসিং, সিসিটিভি ক্যামেরা ও কর্পোরেট হেল্পডেস্ক সহায়তার প্র্যাকটিক্যাল ট্র্যাক।',
  pivotAdvice_en: 'If you want immediate local corporate employment without waiting years to master deep coding, IT Support Executive roles in hospitals, universities, manufacturing factories, and private banks are hiring constantly.',
  pivotAdvice_bn: 'তুমি যদি কোডিং ছাড়াই অবিলম্বে বিভিন্ন হাসপাতাল, বিশ্ববিদ্যালয়, কারখানা বা ব্যাংকের কর্পোরেট হেড অফিসে আইটি এক্সিকিউটিভ হিসেবে চাকরি পেতে চাও, তবে এই ট্র্যাকটি সবচেয়ে দ্রুততম ও নিরাপদ পথ।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Assembling custom desktop PCs, replacing failing power supplies (PSUs), and upgrading RAM/SSDs.',
    'Deploying Windows 10/11 operating systems across new staff workstations with standard enterprise security tools.',
    'Configuring IP cameras, NVRs, biometric fingerprint attendance machines, and network printers.',
    'Resolving Outlook email synchronization, local printer spooler jams, and network share drive access.',
    'Maintaining hardware asset inventories and managing support tickets through GLPI or Jira Service Desk.'
  ],
  dayToDay_bn: [
    'নতুন পিসি অ্যাসেম্বল করা, পাওয়ার সাপ্লাই ও মাদারবোর্ড পরীক্ষা করা এবং র‍্যাম/এসএসডি আপগ্রেড করা।',
    'অফিসের বিভিন্ন পিসিতে উইন্ডোজ ও প্রয়োজনীয় অফিশিয়াল সফটওয়্যার সেটআপ এবং অ্যান্টিভাইরাস কনফিগার করা।',
    'আইপি ক্যামেরা, এনভিআর (NVR), ফিঙ্গারপ্রিন্ট বায়োমেট্রিক হাজিরা মেশিন ও নেটওয়ার্ক প্রিন্টার সংযোগ দেওয়া।',
    'আউটলুক ইমেইল সমস্যা, প্রিন্টার স্পুলার এরর ও শেয়ার্ড ড্রাইভ অ্যাক্সেসের অভিযোগ সমাধান করা।',
    'অফিসের আইটি ডিভাইসের হিসাব রাখা এবং হেল্পডেস্ক টিকিটের মাধ্যমে সমাধান ট্র্যাক করা।'
  ],
  mustHaveSkills: [
    {
      id: 'pc-assembly-benchmarking',
      name: 'PC Hardware Assembly and Benchmarking',
      category: 'Hardware',
      importance: 'Essential',
      description_en: 'Socket pin alignment, thermal paste application, diagnostic POST beep code analysis.',
      description_bn: 'প্রসেসরে থার্মাল পেস্ট লাগানো, মাদারবোর্ড ফিটিং এবং পোস্ট (POST) বিপ কোড দেখে ত্রুটি নির্ণয়।'
    },
    {
      id: 'windows-domain-workstation',
      name: 'Windows 10/11 and Active Directory Joining',
      category: 'Operating System',
      importance: 'Essential',
      description_en: 'Joining workstations to corporate domains, managing local users, and setting network shares.',
      description_bn: 'অফিসের ডোমেইন নেটওয়ার্কে পিসি যুক্ত করা ও লোকাল পারমিশন নিয়ন্ত্রণ।'
    },
    {
      id: 'cctv-nvr-biometric',
      name: 'IP Camera, NVR and Biometric Setup',
      category: 'Security Hardware',
      importance: 'Essential',
      description_en: 'Crimping PoE cables, assigning static camera IPs, setting NVR motion schedules and remote viewing.',
      description_bn: 'পিওই (PoE) ক্যাবলিং, ক্যামেরার আইপি কনফিগার ও মোবাইলে সিসিটিভি লাইভ ভিউ সেটআপ।'
    },
    {
      id: 'printer-network-troubleshooting',
      name: 'Network Printer and Scanner Servicing',
      category: 'Peripherals',
      importance: 'Recommended',
      description_en: 'Setting static printer IP, driver distribution, network scanning to SMB folder.',
      description_bn: 'নেটওয়ার্ক প্রিন্টারের স্ট্যাটিক আইপি ও শেয়ার্ড স্ক্যানার কনফিগারেশন।'
    },
    {
      id: 'helpdesk-ticketing',
      name: 'IT Helpdesk and Remote Support Tools',
      category: 'Support',
      importance: 'Essential',
      description_en: 'Using AnyDesk, TeamViewer, and ticket platforms to troubleshoot remote employee issues calmly.',
      description_bn: 'এনিডেস্ক বা টিমভিউয়ার দিয়ে দূর থেকে কর্মীদের কম্পিউটার সমস্যা দূর করা।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka, Gazipur, Chattogram, Narayanganj',
      entrySalary: { min: 15000, max: 25000, currency: 'BDT', formatted: '15,000 - 25,000 BDT' },
      midSalary: { min: 28000, max: 48000, currency: 'BDT', formatted: '28,000 - 48,000 BDT' },
      seniorSalary: { min: 50000, max: 80000, currency: 'BDT', formatted: '50,000 - 80,000 BDT' },
      hiringSectors: [
        'Private Hospitals and Diagnostic Centers (Square, United, Evercare, Popular)',
        'Garments, Buying Houses, and Manufacturing Groups (Beximco, DBL, Square, Akij)',
        'Private Banks and Financial Non-Banking Institutions',
        'Universities, English Medium Schools, and Tech Retailers (Star Tech, Ryans)'
      ],
      cvExpectations: [
        'Solid knowledge of desktop hardware replacement and OS installation',
        'Experience setting up CCTV cameras and biometric attendance terminals',
        'Customer-friendly attitude and calm verbal communication under office pressure',
        'Diploma in CST or Hardware certification'
      ],
      localDemandSummary_en: 'Virtually every mid-sized company in Bangladesh requires an in-house IT Support Officer to keep billing counters, printers, and manager laptops running smoothly.',
      localDemandSummary_bn: 'বাংলাদেশের প্রায় প্রতিটি মাঝারি ও বড় প্রতিষ্ঠানে বিলিং সফটওয়্যার, নেটওয়ার্ক ও প্রিন্টার সচল রাখতে ফুল-টাইম আইটি সাপোর্ট এক্সিকিউটিভ প্রয়োজন হয়।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'United Arab Emirates and Saudi Arabia',
        countryName_bn: 'সংযুক্ত আরব আমিরাত ও সৌদি আরব',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ',
        visaReality_en: 'Large facilities management companies regularly recruit IT technicians for shopping malls, airports, and smart buildings.',
        visaReality_bn: 'শপিং মল, বিমানবন্দর ও আধুনিক ভবনে আইটি ও সিসিটিভি টেকনিশিয়ান হিসেবে প্রচুর নিয়োগ হয়।',
        averageSalaryUsdOrLocal: '2,800 - 4,800 AED (approx 90,000 - 150,000 BDT)',
        requiredExperienceYears: '2+ years'
      },
      {
        region: 'Europe',
        countryName_en: 'Poland and Romania',
        countryName_bn: 'পোল্যান্ড ও রোমানিয়া',
        demandLevel: 'Moderate',
        demandLevel_bn: 'মাঝারি',
        visaReality_en: 'Factory automation and warehouse IT maintenance contracts open for technicians with European work permits.',
        visaReality_bn: 'গুদাম ও ফ্যাক্টরি অটোমেশনে টেকনিক্যাল সাপোর্ট কর্মীদের কাজের সুযোগ তৈরি হচ্ছে।',
        averageSalaryUsdOrLocal: '4,000 - 6,000 PLN (approx 110,000 - 165,000 BDT)',
        requiredExperienceYears: '2 to 3 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$300 - $800 / month',
      competitionLevel: 'Moderate for tier 1 remote helpdesk positions',
      competitionLevel_bn: 'টিয়ার-১ রিমোট হেল্পডেস্কে মাঝারি প্রতিযোগিতা',
      englishRequirement: 'Fluent spoken English required for voice support or good writing for chat helpdesk',
      englishRequirement_bn: 'ভয়েস সাপোর্টের জন্য স্পষ্ট ইংরেজি বলার দক্ষতা আবশ্যক',
      realities_en: [
        'Remote support handles password resets, Office 365 issues, and software installs',
        'Shift hours often coincide with US or UK business timezones',
        'Requires quiet background and reliable broadband fiber'
      ],
      realities_bn: [
        'রিমোট হেল্পডেস্কে সাধারণত পাসওয়ার্ড রিসেট ও সফটওয়্যার সেটআপের কাজ থাকে',
        'ইউএস বা ইউরোপীয় সময় অনুযায়ী রাতের শিফটে কাজ করার মানসিকতা থাকতে হয়',
        'নীরব পরিবেশ ও নিরবচ্ছিন্ন ইন্টারনেট লাইন থাকা আবশ্যক'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Deep Hardware Anatomy and Component Servicing',
      phaseTitle_bn: 'প্রথম পর্ব: পিসি আর্কিটেকচার ও কম্পোনেন্ট সার্ভিসিং',
      phaseSubtitle_en: 'Day 1 to 20: Motherboards, chipsets, power supplies, and POST diagnostics.',
      phaseSubtitle_bn: '১ থেকে ২০ দিন: মাদারবোর্ড, চিপসেট, পাওয়ার সাপ্লাই ও হার্ডওয়্যার পরীক্ষা।',
      durationWeeks: 3,
      modules: [
        {
          id: 'mod-psu-multimeter',
          title_en: 'Power Supply Unit (PSU) Testing and Multimeter Usage',
          title_bn: 'পাওয়ার সাপ্লাই ও মাল্টিমিটার দিয়ে ভোল্টেজ পরীক্ষা',
          description_en: 'Paperclip jump-test, measuring +12V, +5V, +3.3V rails with a digital multimeter.',
          description_bn: 'পেপারক্লিপ দিয়ে পাওয়ার সাপ্লাই চালু করা ও মাল্টিমিটার দিয়ে ভোল্টেজ পরিমাপ।',
          estimatedDays: 6,
          mobileAccessible: false,
          keyTopics: ['ATX 24-pin pinout', 'Yellow (+12V), Red (+5V), Orange (+3.3V) lines', 'Power Good signal'],
          practicalTask_en: 'Test an old SMPS power supply using a multimeter and record voltage tolerances.',
          practicalTask_bn: 'একটি পাওয়ার সাপ্লাইয়ের তারগুলোর ভোল্টেজ মাল্টিমিটার দিয়ে মেপে নোট তৈরি করো।'
        },
        {
          id: 'mod-ram-storage-upgrade',
          title_en: 'RAM Compatibility and NVMe vs SATA Storage Installation',
          title_bn: 'র‍্যাম কম্প্যাটিবিলিটি ও এসএসডি ইনস্টলেশন',
          description_en: 'DDR3, DDR4, DDR5 frequencies, dual-channel slotting, M.2 NVMe vs SATA SSDs.',
          description_bn: 'ডিডিআর৩/৪/৫ র‍্যামের পার্থক্য, ডুয়াল চ্যানেল কনফিগ ও এম.২ এনভিএমই এসএসডি লাগানো।',
          estimatedDays: 7,
          mobileAccessible: false,
          keyTopics: ['RAM frequency matching', 'Thermal throttling in SSDs', 'Cloning drives with Clonezilla'],
          practicalTask_en: 'Clone an existing Windows installation from a slow HDD to an SSD without data loss.',
          practicalTask_bn: 'একটি স্লো হার্ডডিস্কের উইন্ডোজ ক্লোন সফটওয়্যার দিয়ে সম্পূর্ণ নতুন এসএসডিতে ট্রান্সফার করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: Corporate Operating Systems and Domain Integration',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: উইন্ডোজ ওএস ও কর্পোরেট নেটওয়ার্ক সংযোগ',
      phaseSubtitle_en: 'Day 21 to 45: Clean OS deployment, group policies, and Outlook troubleshooting.',
      phaseSubtitle_bn: '২১ থেকে ৪৫ দিন: ওএস ডিপ্লয়মেন্ট, ড্রাইভার সেটআপ ও ইমেইল ক্লায়েন্ট সমস্যা সমাধান।',
      durationWeeks: 3,
      modules: [
        {
          id: 'mod-windows-tweaks-sysprep',
          title_en: 'Windows Automated Deployment and Driver Packs',
          title_bn: 'অটোমেটেড উইন্ডোজ সেটআপ ও ড্রাইভার ম্যানেজমেন্ট',
          description_en: 'Deploying Windows with pre-installed enterprise software and managing offline driver repositories.',
          description_bn: 'অফিস উপযোগী উইন্ডোজ ইমেজ তৈরি ও ড্রাইভার প্যাক দিয়ে দ্রুত পিসি প্রস্তুতকরণ।',
          estimatedDays: 8,
          mobileAccessible: false,
          keyTopics: ['Device Manager error codes', 'Event Viewer logs', 'Services.msc administration'],
          practicalTask_en: 'Diagnose a computer that crashes with a Blue Screen of Death (BSOD) using dump file logs.',
          practicalTask_bn: 'ব্লু স্ক্রিন (BSOD) এরর আসা একটি পিসির ডাম্প ফাইল বিশ্লেষণ করে ক্র্যাশ হওয়ার কারণ বের করো।'
        },
        {
          id: 'mod-outlook-email-setup',
          title_en: 'Microsoft Outlook Configuration (IMAP, POP3, Exchange)',
          title_bn: 'আউটলুক ইমেইল সেটআপ ও ডেটা ব্যাকআপ (PST/OST)',
          description_en: 'Managing corporate email accounts, mailbox corruption repairs with SCANPST, and archive rules.',
          description_bn: 'আউটলুক সফটওয়্যারে অফিশিয়াল ইমেইল সেটআপ, পিএসটি ব্যাকআপ ও স্ক্যানপিএসটি দিয়ে ফাইল মেরামত।',
          estimatedDays: 7,
          mobileAccessible: false,
          keyTopics: ['Port 993, 465, 587 settings', 'OST to PST migration', 'Auto-archive rules'],
          practicalTask_en: 'Configure a business email account on Microsoft Outlook and create an automated archive folder.',
          practicalTask_bn: 'আউটলুকে একটি কর্পোরেট ইমেইল সেটআপ করে স্বয়ংক্রিয় ব্যাকআপ ফোল্ডার কনফিগার করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: Surveillance, Biometrics and Peripheral Systems',
      phaseTitle_bn: 'তৃতীয় পর্ব: সিসিটিভি সার্ভেইল্যান্স, বায়োমেট্রিক ও পেরিফেরালস',
      phaseSubtitle_en: 'Day 46 to 70: IP cameras, NVR recording, access control, and network printers.',
      phaseSubtitle_bn: '৪৬ থেকে ৭০ দিন: আইপি ক্যামেরা, এনভিআর রেকর্ডিং, অ্যাক্সেস কন্ট্রোল ও নেটওয়ার্ক প্রিন্টার।',
      durationWeeks: 3,
      modules: [
        {
          id: 'mod-cctv-ip-nvr',
          title_en: 'IP Camera Systems and Network Video Recorders (NVR)',
          title_bn: 'আইপি ক্যামেরা সিস্টেম ও এনভিআর কনফিগারেশন',
          description_en: 'Hikvision and Dahua systems: configuring static IPs, motion detection zones, hard disk allocation, and mobile app pairing.',
          description_bn: 'হিকভিশন ও ডাহুয়া ক্যামেরার আইপি সেট করা, হার্ডডিস্ক রেকর্ডিং ফরম্যাট ও মোবাইলে ভিউ শেয়ার।',
          estimatedDays: 8,
          mobileAccessible: false,
          keyTopics: ['PoE switch calculation', 'H.265 compression bitrate', 'RTSP streaming urls'],
          practicalTask_en: 'Set up an IP camera and configure remote mobile view using cloud P2P.',
          practicalTask_bn: 'একটি আইপি ক্যামেরা লোকাল নেটওয়ার্কে বসিয়ে মোবাইল অ্যাপের মাধ্যমে লাইভ ভিডিও কানেক্ট করো।'
        },
        {
          id: 'mod-biometric-attendance',
          title_en: 'Biometric Attendance Terminals and Door Access Control',
          title_bn: 'বায়োমেট্রিক হাজিরা মেশিন ও ডোর এক্সেস কন্ট্রোল',
          description_en: 'ZKTeco attendance devices: enrolling employee fingerprints/faces, setting IP, pulling attendance logs to HR software.',
          description_bn: 'জেডকেটেকো হাজিরা মেশিনে কর্মীদের ফিঙ্গারপ্রিন্ট ইনপুট দেওয়া এবং সফটওয়্যারে লগ ডাউনলোড করা।',
          estimatedDays: 6,
          mobileAccessible: false,
          keyTopics: ['ZKTeco BioTime software', 'Magnetic door lock wiring', 'Emergency push button integration'],
          practicalTask_en: 'Connect an attendance machine over LAN and generate an automated monthly attendance report.',
          practicalTask_bn: 'একটি হাজিরা মেশিন ল্যানে যুক্ত করে কর্মকর্তা-কর্মচারীদের মাসিক উপস্থিতি রিপোর্ট তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: Corporate Helpdesk Protocols and Interview Vault',
      phaseTitle_bn: 'চতুর্থ পর্ব: আইটি হেল্পডেস্ক প্রোটোকল ও ইন্টারভিউ জয়',
      phaseSubtitle_en: 'Day 71 to 90: Ticketing SLAs, asset management, and job interviews in Bangladesh.',
      phaseSubtitle_bn: '৭১ থেকে ৯০ দিন: সাপোর্ট টিকিট ম্যানেজমেন্ট ও বাংলাদেশি প্রতিষ্ঠানে ভাইভা প্রস্তুতি।',
      durationWeeks: 3,
      modules: [
        {
          id: 'mod-it-asset-mgmt',
          title_en: 'IT Asset Inventory and Ticketing Lifecycle',
          title_bn: 'আইটি ইনভেন্টরি ম্যানেজমেন্ট ও হেল্পডেস্ক টিকেটিং',
          description_en: 'Logging company hardware serial numbers, warranty tracking, and resolving tickets within service-level agreements.',
          description_bn: 'কোম্পানির সকল পিসি ও যন্ত্রাংশের সিরিয়াল নম্বর সংরক্ষণ, ওয়ারেন্টি ট্র্যাকিং ও টিকিট ক্লোজিং।',
          estimatedDays: 8,
          mobileAccessible: true,
          keyTopics: ['Service Level Agreements (SLA)', 'GLPI asset management', 'Standard Operating Procedures (SOP)'],
          practicalTask_en: 'Build a sample Google Sheets or GLPI inventory tracker for 50 company workstations.',
          practicalTask_bn: '৫০টি অফিস কম্পিউটারের জন্য একটি সম্পূর্ণ হার্ডওয়্যার ইনভেন্টরি ট্র্যাকার তৈরি করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'hw-q1',
      question_en: 'A user calls complaining that their computer powers on, fan spins, but monitor shows a black screen and no beep. How do you isolate the problem?',
      question_bn: 'ইউজার অভিযোগ করলেন পিসি চালু হচ্ছে, ফ্যান ঘুরছে, কিন্তু মনিটরে কোনো ডিসপ্লে নেই এবং কোনো বিপ শব্দ নেই। সমস্যা কীভাবে বের করবে?',
      category: 'Diagnostic',
      whyAsked_en: 'Standard hardware diagnostic scenario faced daily by IT executives.',
      whyAsked_bn: 'প্রতিদিন অফিসে ঘটা এই মৌলিক সমস্যার সিস্টেমেটিক সমাধান প্রার্থী জানে কিনা দেখতে।',
      howToAnswer_en: 'First, check if monitor input source (HDMI/VGA) is correct. Test if keyboard NumLock responds. If not posting, disconnect power cord, discharge motherboard capacitor by holding power button 10 seconds. Remove RAM, clean pins with an eraser, reseat in a different slot. If still failing, disconnect graphics card and secondary drives to test minimum viable post.',
      howToAnswer_bn: 'প্রথমে মনিটরের ক্যাবল ও ইনপুট সোর্স দেখব। কিবোর্ডের নামলক বাতি রেসপন্স করে কিনা দেখব। না করলে পাওয়ার ক্যাবল খুলে ১০ সেকেন্ড পাওয়ার বাটন চেপে রেখে ড্রেন করব। এরপর র‍্যাম খুলে পিন পরিষ্কার করে অন্য স্লটে বসাব। তাতেও না হলে অপ্রয়োজনীয় ড্রাইভ খুলে শুধু মাদারবোর্ড-সিপিইউ-র‍্যাম দিয়ে পোস্ট পরীক্ষা করব।',
      commonMistakes_en: 'Immediately assuming CPU failure when 80 percent of display issues are caused by oxidised RAM contacts.',
      commonMistakes_bn: 'শুরুতেই প্রসেসর বা মাদারবোর্ড নষ্ট হয়ে গেছে বলে বসা।'
    },
    {
      id: 'hw-q2',
      question_en: 'What is the purpose of an NVR in a surveillance camera network and how does it differ from a DVR?',
      question_bn: 'সিসিটিভি ক্যামেরায় এনভিআর (NVR)-এর কাজ কী এবং এটি সাধারণ ডিভিআরের (DVR) চেয়ে কীভাবে আলাদা?',
      category: 'Surveillance',
      whyAsked_en: 'Tests candidate familiarity with modern IP camera deployments.',
      whyAsked_bn: 'আধুনিক আইপি ক্যামেরা ও পুরোনো এনালগ ক্যামেরার পার্থক্য পরিষ্কার কিনা জানতে।',
      howToAnswer_en: 'A DVR (Digital Video Recorder) connects to analog cameras via coaxial cables and processes video encoding inside the DVR box. An NVR (Network Video Recorder) connects to IP cameras over standard Ethernet/PoE cables, where encoding is handled directly by each camera processor, providing higher resolutions and flexible network placement.',
      howToAnswer_bn: 'ডিভিআর এনালগ ক্যামেরার সাথে কোঅক্সিয়াল তার দিয়ে যুক্ত থাকে এবং ভিডিও প্রসেসিং মেশিনের ভেতরে হয়। আর এনভিআর ল্যান তার দিয়ে ডিজিটাল আইপি ক্যামেরার সাথে যুক্ত থাকে, যেখানে ক্যামেরার ভেতরেই ভিডিও এনকোড হয় এবং অনেক বেশি রেজোলিউশন পাওয়া যায়।',
      commonMistakes_en: 'Thinking NVR cameras must always have individual 220V power plugs instead of understanding PoE.',
      commonMistakes_bn: 'পিওই প্রযুক্তির কথা উল্লেখ না করে প্রতিটি আইপি ক্যামেরার জন্য আলাদা পাওয়ার লাইন লাগবে মনে করা।'
    },
    {
      id: 'hw-q3',
      question_en: 'A corporate laptop displays a Blue Screen with "INACCESSIBLE_BOOT_DEVICE". What could have caused this after an update?',
      question_bn: 'উইন্ডোজ আপডেটের পর ল্যাপটপে ব্লু স্ক্রিনে "INACCESSIBLE_BOOT_DEVICE" দেখালে কী কারণে এটি হতে পারে?',
      category: 'Operating System',
      whyAsked_en: 'Validates BIOS storage controller and driver knowledge.',
      whyAsked_bn: 'বায়োসের সেটিংস এবং স্টোরেজ ড্রাইভার সমস্যা বোঝার গভীরতা যাচাই।',
      howToAnswer_en: 'This usually occurs when the BIOS/UEFI SATA mode flips between AHCI and RAID/IDE, or storage controller drivers become corrupted during a Windows update. Enter BIOS, verify SATA controller mode matches original installation (typically AHCI), and check if boot drive is detected.',
      howToAnswer_bn: 'সাধারণত বায়োসে সাটা (SATA) মোড বদলে গেলে (যেমন AHCI থেকে RAID অন হলে) অথবা স্টোরেজ ড্রাইভার ক্র্যাশ করলে উইন্ডোজ ড্রাইভ খুঁজে পায় না। বায়োসে ঢুকে সাটা মোড ঠিক করতে হবে এবং বুট অর্ডার যাচাই করতে হবে।',
      commonMistakes_en: 'Immediately formatting the entire hard drive without checking BIOS SATA controller settings.',
      commonMistakes_bn: 'বায়োস সেটিংস চেক না করেই সম্পূর্ণ ড্রাইভ ফরম্যাট করে ফেলা।'
    },
    {
      id: 'hw-q4',
      question_en: 'How do you assign a static IP to a network printer and share it across 20 office PCs without print server crashes?',
      question_bn: 'একটি নেটওয়ার্ক প্রিন্টারে কীভাবে স্ট্যাটিক আইপি বসাবে এবং ২০টি পিসিতে কীভাবে এটি ঝামেলাহীন শেয়ার করবে?',
      category: 'Peripherals',
      whyAsked_en: 'Printers cause the most frequent support tickets in corporate offices.',
      whyAsked_bn: 'অফিসে সবচেয়ে বেশি অভিযোগ আসে প্রিন্টার নিয়ে, তাই এর টেকসই সেটআপ জানা অত্যন্ত জরুরি।',
      howToAnswer_en: 'Access the printer web management console by typing its temporary DHCP IP into a browser. Set a static IP outside the local DHCP pool to avoid IP conflict. On each user PC, install printer driver via TCP/IP Port targeting that static IP rather than relying on brittle Windows USB sharing.',
      howToAnswer_bn: 'প্রিন্টারের মেন্যু বা ওয়েব পোর্টাল থেকে রাউটারের ডিএইচসিপি রেঞ্জের বাইরে একটি ফিক্সড আইপি বসাব। এরপর প্রতিটি পিসিতে কোনো পিসির মাধ্যমে শেয়ার না করে সরাসরি "TCP/IP Port" সিলেক্ট করে প্রিন্টারের আইপি দিয়ে ড্রাইভার ইনস্টল করব।',
      commonMistakes_en: 'Sharing the printer through one employee PC, which stops printing as soon as that person turns off their PC.',
      commonMistakes_bn: 'কারো ব্যক্তিগত পিসিতে প্রিন্টার লাগিয়ে শেয়ার দেওয়া, ফলে সে পিসি বন্ধ করলেই বাকিদের প্রিন্ট বন্ধ হয়ে যায়।'
    },
    {
      id: 'hw-q5',
      question_en: 'What is the function of thermal paste on a CPU and what happens if too much or too little is applied?',
      question_bn: 'প্রসেসরে থার্মাল পেস্টের কাজ কী এবং এটি বেশি বা কম দিলে কী পরিণতি হয়?',
      category: 'Hardware Servicing',
      whyAsked_en: 'Basic physical assembly and heat management test.',
      whyAsked_bn: 'সিপিইউ গরম হওয়া ও ফিজিক্যাল কুলিং ব্যবস্থাপনার সঠিক নিয়ম জানা আছে কিনা দেখা।',
      howToAnswer_en: 'Thermal paste fills microscopic air gaps between the CPU heat spreader and cooler base to conduct heat efficiently. Too little leaves air pockets causing rapid overheating and thermal throttling. Too much can spill over motherboard capacitors or act as an insulating blanket.',
      howToAnswer_bn: 'থার্মাল পেস্ট প্রসেসর ও কুলারের মাঝের অদৃশ্য ফাঁকা জায়গা পূরণ করে যাতে দ্রুত তাপ ছড়িয়ে যেতে পারে। কম দিলে সিপিইউ দ্রুত গরম হয়ে পিসি বন্ধ হবে। আর মাত্রাতিরিক্ত দিলে মাদারবোর্ডে ছড়িয়ে শর্টসার্কিট হতে পারে বা তাপ নিঃসরণে বাধা দিতে পারে।',
      commonMistakes_en: 'Spreading thermal paste like butter with a ruler instead of a small pea-sized dot in the center.',
      commonMistakes_bn: 'মটরদানার মতো পরিমিত না দিয়ে পুরো মাদারবোর্ডে আঠার মতো লেপে দেওয়া।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-hp-it-support',
      title_en: 'HP LIFE: Effective IT Support and Servicing',
      title_bn: 'এইচপি লাইফ: কার্যকর আইটি সাপোর্ট ও গ্রাহক সেবা',
      provider: 'HP LIFE Foundation',
      url: 'https://www.life-global.org/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 10,
      cost: '100% Free',
      relevance_en: 'Global corporate IT troubleshooting workflows and helpdesk management badge.',
      relevance_bn: 'এইচপির অফিশিয়াল ফ্রি সার্টিফিকেট যা হেল্পডেস্ক কাজের জন্য চমৎকার।'
    },
    {
      id: 'cert-cisco-hardware',
      title_en: 'Cisco Networking Academy: Computer Hardware Basics',
      title_bn: 'সিসকো নেটওয়ার্কিং একাডেমি: কম্পিউটার হার্ডওয়্যার বেসিকস',
      provider: 'Cisco Networking Academy',
      url: 'https://www.netacad.com/courses/os-it/computer-hardware-basics',
      mobileAccessible: true,
      language: 'en',
      durationHours: 15,
      cost: '100% Free',
      relevance_en: 'Covers physical components, connectors, motherboard architecture, and safe technician protocols.',
      relevance_bn: 'সিসকো নেটঅ্যাকাডের ফ্রি হার্ডওয়্যার কোর্স যা টেকনিক্যাল পদের জন্য দারুণ কার্যকরী।'
    }
  ]
};
