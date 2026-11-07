import type { CareerTrack } from '../../../shared/types.js';

export const bpoTechSupportDataTrack: Omit<CareerTrack, 'id'> = {
  slug: 'bpo-tech-support-data',
  title_en: 'BPO, Technical Customer Support and Data Operations',
  title_bn: 'বিপিও, টেকনিক্যাল কাস্টমার সাপোর্ট ও ডেটা অপারেশনস',
  summary_en: 'Inbound/outbound technical support, live chat assistance, CRM management, data cleansing, Excel spreadsheet automation, and night-shift international BPO services.',
  summary_bn: 'আন্তর্জাতিক কল সেন্টার ও বিপিও সাপোর্ট, লাইভ চ্যাট সহায়তা, সিআরএম সফটওয়্যার পরিচালনা এবং এক্সেল ডেটা এন্ট্রির কর্মসংস্থানমুখী ট্র্যাক।',
  pivotAdvice_en: 'If you need immediate employment to fund your polytechnic education or family needs, BPO and call centers in Dhaka (Mirpur, Mohakhali, Uttara) hire CST students rapidly with starting salaries and nighttime shifts that do not conflict with daytime classes.',
  pivotAdvice_bn: 'তোমার যদি পড়াশোনার খরচ চালাতে তাৎক্ষণিক চাকরি দরকার হয়, তবে ঢাকার মিরপুর, মহাখালী বা উত্তরায় অবস্থিত আন্তর্জাতিক বিপিও সেন্টারগুলো রাতের শিফটে প্রচুর ডিপ্লোমা শিক্ষার্থীকে নিয়োগ দেয়। দিনে ক্লাস করে রাতে কাজ করা যায়।',
  minPcRequired: 'none',
  dayToDay_en: [
    'Handling live customer chat tickets and solving software setup inquiries with polite empathy.',
    'Managing customer records, lead status, and ticket updates inside HubSpot or Zendesk CRM.',
    'Cleaning dirty datasets, eliminating duplicates, and running VLOOKUP / XLOOKUP in Microsoft Excel.',
    'Conducting outbound verification calls in professional English or Bangla following scripted guidelines.',
    'Logging quality assurance metrics and participating in weekly empathy and de-escalation training.'
  ],
  dayToDay_bn: [
    'লাইভ চ্যাট সফটওয়্যারে গ্রাহকদের বিভিন্ন কারিগরি সমস্যা ধৈর্য সহকারে শুনে সমাধান দেওয়া।',
    'জেনডেস্ক বা হাবস্পট সিআরএমে (CRM) গ্রাহকের তথ্য ও অভিযোগের স্ট্যাটাস আপডেট রাখা।',
    'মাইক্রোসফট এক্সেলে ডেটা সাজানো, ডুপ্লিকেট দূর করা এবং ফর্মুলা দিয়ে হিসাব করা।',
    'পেশাদার শিষ্টাচার মেনে আন্তর্জাতিক গ্রাহকদের সাথে ফোনে যোগাযোগ রক্ষা করা।',
    'কাস্টমার স্যাটিসফ্যাকশন (CSAT) স্কোর বৃদ্ধি এবং সমস্যা দ্রুত সমাধানের নিয়ম মেনে চলা।'
  ],
  mustHaveSkills: [
    {
      id: 'touch-typing-chat-speed',
      name: 'High-Speed Live Chat Typing',
      category: 'Support Agility',
      importance: 'Essential',
      description_en: 'Sustained 40+ words per minute typing while handling 2 to 3 concurrent live chat windows.',
      description_bn: 'একসাথে একাধিক কাস্টমার চ্যাটে মিনিটে অন্তত ৪০ শব্দ নির্ভুল টাইপ করার দক্ষতা।'
    },
    {
      id: 'crm-zendesk-hubspot',
      name: 'Zendesk and CRM Ticket Workflows',
      category: 'Software Systems',
      importance: 'Essential',
      description_en: 'Ticket statuses (New, Open, Pending, Solved), macros, canned responses, and SLA timers.',
      description_bn: 'সিআরএম সফটওয়্যারে দ্রুত রেডিমেড উত্তর দেওয়া ও সময়সীমা মেনে কাজ করা।'
    },
    {
      id: 'excel-data-functions',
      name: 'Advanced Microsoft Excel and Google Sheets',
      category: 'Data Operations',
      importance: 'Essential',
      description_en: 'VLOOKUP, XLOOKUP, Pivot Tables, conditional formatting, and data validation rules.',
      description_bn: 'এক্সেলে ভি-লুকআপ, পিভট টেবিল ও ডেটা ক্লিন করার টেকনিক।'
    },
    {
      id: 'verbal-english-empathy',
      name: 'Professional Workplace English Communication',
      category: 'Communication',
      importance: 'Essential',
      description_en: 'Neutral accent, polite customer de-escalation, and professional email correspondence.',
      description_bn: 'ভদ্র ও আত্মবিশ্বাসী ভঙ্গিতে কথা বলা এবং শান্তভাবে পরিস্থিতি সামাল দেওয়া।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Mirpur DOHS, Mohakhali, Banani, Uttara)',
      entrySalary: { min: 18000, max: 30000, currency: 'BDT', formatted: '18,000 - 30,000 BDT' },
      midSalary: { min: 32000, max: 55000, currency: 'BDT', formatted: '32,000 - 55,000 BDT' },
      seniorSalary: { min: 60000, max: 110000, currency: 'BDT', formatted: '60,000 - 110,000 BDT' },
      hiringSectors: [
        'International BPO Centers in Dhaka (Genex Infosys, Digicon, Augmedix, Quantanite)',
        'Local Ride-Sharing and Food Delivery Customer Desks (Pathao, foodpanda)',
        'E-commerce Customer Care and After-Sales Support Centers'
      ],
      cvExpectations: [
        'Clear, polite verbal communication in English or Bangla',
        'Demonstrated typing speed test results (40+ WPM)',
        'Willingness to work night shifts (matching US/European time zones)',
        'High school or polytechnic diploma credentials'
      ],
      localDemandSummary_en: 'The BPO industry in Bangladesh is one of the fastest expanding employers. Companies in Dhaka provide air-conditioned office environments, meals, and pickup services for night shift agents.',
      localDemandSummary_bn: 'ঢাকায় বিপিও এবং কাস্টমার কেয়ার সেক্টরে প্রতি মাসে শত শত তরুণ নিয়োগ পাচ্ছে। বিশেষ করে রাতের শিফটে কাজের জন্য ট্রান্সপোর্ট ও খাবারের সুবিধাসহ আকর্ষণীয় বেতন দেওয়া হয়।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'United Arab Emirates and Qatar',
        countryName_bn: 'সংযুক্ত আরব আমিরাত ও কাতার',
        demandLevel: 'Moderate',
        demandLevel_bn: 'মাঝারি',
        visaReality_en: 'Aviation, hotels, and telecom operators recruit bilingual customer service agents with clear spoken English.',
        visaReality_bn: 'এয়ারলাইন্স, হোটেল ও টেলিকম কোম্পানিতে কাস্টমার সার্ভিস এজেন্ট হিসেবে কাজের ভালো সুযোগ থাকে।',
        averageSalaryUsdOrLocal: '3,000 - 5,500 AED / month (approx 95,000 - 175,000 BDT)',
        requiredExperienceYears: '1 to 2 years'
      }
    ],
    remote: {
      entryBarrier: 'Low',
      entryBarrier_bn: 'সহজ',
      monthlyRangeUsd: '$300 - $1,000 / month',
      competitionLevel: 'High competition for general chat, but lower for technical helpdesk positions',
      competitionLevel_bn: 'টেকনিক্যাল নলেজ সহ চ্যাট সাপোর্ট দিতে পারলে সহজে রিমোট কাজ মেলে',
      englishRequirement: 'Fluent written English with correct grammar and polite tone',
      englishRequirement_bn: 'সঠিক ব্যাকরণ ও নম্র ভাষায় চ্যাট করার মতো ইংরেজি জানা আবশ্যক',
      realities_en: [
        'Global SaaS companies hire remote chat agents to cover 24/7 support shifts',
        'Speed and customer empathy directly generate performance bonuses'
      ],
      realities_bn: [
        'আন্তর্জাতিক সফটওয়্যার কোম্পানিগুলো ২৪ ঘণ্টা সেবা নিশ্চিত করতে রিমোট চ্যাট এজেন্ট নেয়',
        'দ্রুত সমস্যা সমাধান করতে পারলে মাসিক বেতনের সাথে ভালো পারফরম্যান্স বোনাস মেলে'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Typing Speed and Workplace English Confidence',
      phaseTitle_bn: 'প্রথম পর্ব: টাইপিং স্পিড ও কর্মক্ষেত্রের ইংরেজি প্রস্তুতি',
      phaseSubtitle_en: 'Day 1 to 25: 40 WPM chat drills, business vocabulary, and phone etiquette.',
      phaseSubtitle_bn: '১ থেকে ২৫ দিন: দ্রুত চ্যাট টাইপিং, প্রাতিষ্ঠানিক ইংরেজি ও ফোন কথোপকথন।',
      durationWeeks: 3,
      modules: [
        {
          id: 'mod-chat-speed-40wpm',
          title_en: 'Multi-Task Live Chat Simulation Drills',
          title_bn: 'লাইভ চ্যাট সিমুলেশন ও দ্রুত টাইপিং ড্রিল',
          description_en: 'Typing at 40+ WPM without grammar errors, utilizing text expanders and handling multiple concurrent inquiries.',
          description_bn: 'একসাথে একাধিক কাস্টমারের উত্তর দ্রুত ও নির্ভুল বানানে টাইপ করার ড্রিল।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['10FastFingers speed test', 'TextExpander shortcuts', 'Standard empathetic customer greetings'],
          practicalTask_en: 'Achieve 40 WPM on 10FastFingers and record a 2-minute mock phone resolution script.',
          practicalTask_bn: 'কিবোর্ডে ৪০ শব্দ প্রতি মিনিট স্পিড অর্জন করো এবং একটি গ্রাহক সমস্যার সমাধান ফোনে বলো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: Microsoft Excel and Data Operations Mastery',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: মাইক্রোসফট এক্সেল ও ডেটা অ্যানালিসিস',
      phaseSubtitle_en: 'Day 26 to 50: VLOOKUP, pivot tables, deduplication, and data entry speed.',
      phaseSubtitle_bn: '২৬ থেকে ৫০ দিন: এক্সেল ভি-লুকআপ, পিভট টেবিল ও ডেটা ফিল্টারিং।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-excel-mastery-bpo',
          title_en: 'Excel Formulas and Data Cleansing Protocols',
          title_bn: 'এক্সেল ফর্মুলা ও ডেটা ক্লিনিং প্র্যাকটিস',
          description_en: 'VLOOKUP, TRIM, PROPER, removing duplicate rows, and generating pivot summary tables.',
          description_bn: 'অগোছালো ডেটাসেট থেকে ডুপ্লিকেট তথ্য বাদ দেওয়া ও পিভট টেবিল দিয়ে সামারি তৈরি।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['VLOOKUP and XLOOKUP', 'Pivot table grouping', 'Data validation dropdowns'],
          practicalTask_en: 'Clean a 1,000-row student dataset in Excel by eliminating duplicates and formatting phone numbers.',
          practicalTask_bn: 'এক হাজার তথ্যের একটি অগোছালো এক্সেল ফাইল ফর্মুলা ব্যবহার করে পরিষ্কার ও নির্ভুল করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: CRM Software and Ticket Handling (Zendesk / HubSpot)',
      phaseTitle_bn: 'তৃতীয় পর্ব: জেনডেস্ক ও সিআরএম সফটওয়্যার পরিচালনা',
      phaseSubtitle_en: 'Day 51 to 75: Ticket routing, macro automation, and SLA management.',
      phaseSubtitle_bn: '৫১ থেকে ৭৫ দিন: কাস্টমার টিকিট ম্যানেজমেন্ট ও কুইক রেসপন্স ম্যাক্রো।',
      durationWeeks: 3,
      modules: [
        {
          id: 'mod-zendesk-workflows',
          title_en: 'Zendesk Ticket Lifecycle and De-escalation',
          title_bn: 'জেনডেস্ক টিকিট লাইফসাইকেল ও কাস্টমার ম্যানেজমেন্ট',
          description_en: 'Handling angry customers calmly, adhering to response time targets, and writing concise internal notes.',
          description_bn: 'ক্ষুব্ধ গ্রাহকের সাথে মার্জিত ব্যবহার ও সফটওয়্যারে সঠিক ট্যাগ দিয়ে টিকিট ক্লোজ করা।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Customer satisfaction CSAT calculation', 'First response time (FRT)', 'Writing internal ticket notes'],
          practicalTask_en: 'Resolve 10 mock support ticket scenarios using polite, solution-oriented replies.',
          practicalTask_bn: '১০টি জটিল কাস্টমার কমপ্লেইনের পেশাদার ও মার্জিত লিখিত সমাধান তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: BPO Voice and Chat Interviews in Dhaka',
      phaseTitle_bn: 'চতুর্থ পর্ব: ঢাকার বিপিও সেন্টারে ইন্টারভিউ জয়',
      phaseSubtitle_en: 'Day 76 to 90: Mock assessment tests, grammar drills, and interview selection.',
      phaseSubtitle_bn: '৭৬ থেকে ৯০ দিন: বিপিও লিখিত ও ভাইভা টেস্টের বাস্তব সিমুলেশন।',
      durationWeeks: 2,
      modules: [
        {
          id: 'mod-bpo-interview-selection',
          title_en: 'BPO Selection Rounds and Versant Test Preparation',
          title_bn: 'বিপিও ভার্সেন্ট (Versant) ও ভাইভা টেস্ট প্রস্তুতি',
          description_en: 'Preparing for computer-based voice aptitude tests, sentence repetition, and answering behavioral questions.',
          description_bn: 'কম্পিউটারাইজড ভয়েস টেস্ট ও ভাইভাতে আত্মবিশ্বাসের সাথে ইংরেজি উত্তর দেওয়ার কৌশল।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['Versant test formats', 'Situational interview questions (STAR method)', 'Shift flexibility agreements'],
          practicalTask_en: 'Complete a recorded 3-minute mock interview demonstrating why you are suited for night-shift support.',
          practicalTask_bn: 'রাতের শিফটে কাজের একাগ্রতা ও ইংরেজি কমিউনিকেশন নিয়ে একটি মক ইন্টারভিউ দাও।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'bpo-q1',
      question_en: 'An angry customer calls complaining that their service has been down for 4 hours and demands an immediate refund. How do you respond?',
      question_bn: 'একজন ক্ষুব্ধ গ্রাহক অভিযোগ করলেন ৪ ঘণ্টা ধরে তার সার্ভিস বন্ধ এবং টাকা ফেরত দাবি করলেন। তুমি কীভাবে পরিস্থিতি সামাল দেবে?',
      category: 'Customer De-escalation',
      whyAsked_en: 'The number one behavioral test in BPO interviews to check emotional composure.',
      whyAsked_bn: 'বিপিও ভাইভার প্রধান প্রশ্ন যা প্রার্থীর মানসিক ধৈর্য ও নম্রতা প্রমাণ করে।',
      howToAnswer_en: 'First, listen without interrupting and acknowledge their frustration with genuine empathy ("I completely understand how frustrating it is to have your service interrupted during important work"). Second, apologize for the inconvenience without blaming colleagues. Third, take ownership by checking their account immediately, explaining the current restoration status, and offering concrete next steps.',
      howToAnswer_bn: 'প্রথমে কোনো বাধা না দিয়ে শান্তভাবে তার কথা শুনব এবং তার বিরক্তির কারণ উপলব্ধি করে সহানুভূতি জানাব ("আপনার বিরক্তি আমি পুরোপুরি বুঝতে পারছি এবং এই অসুবিধার জন্য আন্তরিক দুঃখিত")। কারো ওপর দোষ না চাপিয়ে সাথে সাথে তার অ্যাকাউন্ট চেক করব, বর্তমান অবস্থা স্পষ্ট করে জানাব এবং সমাধান দিতে কত সময় লাগবে তা দায়িত্ব নিয়ে বুঝিয়ে বলব।',
      commonMistakes_en: 'Arguing with the customer, interrupting them, or saying "It is not my fault, talk to management".',
      commonMistakes_bn: 'গ্রাহকের সাথে তর্কে জড়ানো বা "এটা আমার দোষ না, অন্য কাউকে বলুন" এমন দায়িত্বজ্ঞানহীন কথা বলা।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-hubspot-service',
      title_en: 'HubSpot Service Hub Customer Service Certification',
      title_bn: 'হাবস্পট কাস্টমার সার্ভিস ভেরিফায়েড সার্টিফিকেট',
      provider: 'HubSpot Academy',
      url: 'https://academy.hubspot.com/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 8,
      cost: '100% Free',
      relevance_en: 'Global certification in helpdesk ticketing, customer onboarding, and relationship management.',
      relevance_bn: 'আন্তর্জাতিকভাবে সমাদৃত কাস্টমার সার্ভিস ও সিআরএম ম্যানেজমেন্টের সেরা ফ্রি কোর্স।'
    }
  ]
};
