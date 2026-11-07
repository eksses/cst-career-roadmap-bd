import type { CareerTrack } from '../../../shared/types.js';

export const qaSoftwareTestingTrack: Omit<CareerTrack, 'id'> = {
  slug: 'qa-software-testing',
  title_en: 'Software QA and Manual/Automated Testing',
  title_bn: 'সফটওয়্যার কিউএ ও ম্যানুয়াল/অটোমেটেড টেস্টিং',
  summary_en: 'Test case design, bug lifecycle tracking, exploratory testing, Postman API testing, and introduction to automated browser testing with Cypress and Playwright.',
  summary_bn: 'সফটওয়্যারের ত্রুটি নির্ণয়, টেস্ট কেস রাইটিং, বাগ ট্র্যাকিং, পোস্টম্যান দিয়ে এপিআই টেস্ট ও প্লে-রাইট/সাইপ্রেস দিয়ে স্বয়ংক্রিয় টেস্টিংয়ের ট্র্যাক।',
  pivotAdvice_en: 'Software Quality Assurance has a lower initial barrier to entry than full-stack development while keeping you inside high-paying software companies. If you are meticulous and logical, this path provides rapid placement.',
  pivotAdvice_bn: 'ফুল-স্ট্যাক কোডিংয়ের চেয়ে সফটওয়্যার কিউএ-তে প্রবেশের বাধা অনেক কম। তোমার যদি খুঁটিনাটি ভুল ধরার তীক্ষ্ণ চোখ ও নিয়মানুবর্তিতা থাকে, তবে সফটওয়্যার ফার্মগুলোতে দ্রুত এন্ট্রি নেওয়ার জন্য এটি সেরা চয়েস।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Reading software requirements specifications (SRS) and writing comprehensive test cases.',
    'Executing manual regression tests across web browsers, Android, and iOS devices.',
    'Logging reproducible bug reports in Jira with clear reproduction steps, screenshots, and console logs.',
    'Testing backend REST APIs using Postman collections and validating JSON payload schemas.',
    'Participating in sprint retrospectives and verifying hotfixes before production releases.'
  ],
  dayToDay_bn: [
    'সফটওয়্যারের রিকোয়ারমেন্ট ডকুমেন্ট পড়ে বিস্তারিত টেস্ট কেস তৈরি করা।',
    'কম্পিউটার ও মোবাইলের বিভিন্ন ব্রাউজারে অ্যাপ চালিয়ে ম্যানুয়াল টেস্ট করা।',
    'জিরা (Jira) বা ট্রেলোতে স্ক্রিনশট ও এরর লগ সহ বিস্তারিত বাগ রিপোর্ট লেখা।',
    'পোস্টম্যান দিয়ে ব্যাকএন্ড এপিআই পরীক্ষা করা ও স্ট্যাটাস কোড (২০০, ৪০০, ৪MD, ৫০০) যাচাই করা।',
    'সফটওয়্যার রিলিজের আগে ডেভেলপারদের ফিক্স করা বাগগুলো পুনরায় রি-টেস্ট করা।'
  ],
  mustHaveSkills: [
    {
      id: 'test-case-design',
      name: 'Test Case Writing and Bug Reporting',
      category: 'Core QA',
      importance: 'Essential',
      description_en: 'Drafting structured test scenarios with preconditions, test steps, expected vs actual results.',
      description_bn: 'প্রি-কন্ডিশন, স্টেপস, এক্সপেক্টেড ও একচুয়াল রেজাল্ট দিয়ে মানসম্মত টেস্ট কেস লেখা।'
    },
    {
      id: 'api-testing-postman',
      name: 'API Testing with Postman',
      category: 'API Testing',
      importance: 'Essential',
      description_en: 'Testing GET, POST, PUT, DELETE requests, writing assertions in JavaScript, and managing environment variables.',
      description_bn: 'পোস্টম্যান দিয়ে এপিআই টেস্ট করা, হেডারের টোকেন যাচাই ও অটোমেটেড অ্যাসারশন স্ক্রিপ্ট লেখা।'
    },
    {
      id: 'jira-bug-tracking',
      name: 'Jira and Bug Lifecycle Management',
      category: 'Project Management',
      importance: 'Essential',
      description_en: 'Bug severity vs priority categorization, Kanban sprint boards, and regression tracking.',
      description_bn: 'বাগের তীব্রতা (Severity) ও গুরুত্ব (Priority) নির্ধারণ এবং জিরা বোর্ডে স্ট্যাটাস আপডেট।'
    },
    {
      id: 'cypress-playwright-basics',
      name: 'Automated E2E Testing (Cypress / Playwright)',
      category: 'Automation',
      importance: 'Recommended',
      description_en: 'Writing end-to-end user journey tests that simulate real user clicks and form submissions.',
      description_bn: 'প্লে-রাইট বা সাইপ্রেস দিয়ে ব্রাউজারে স্বয়ংক্রিয় ক্লিক ও ফর্ম পূরণ করার অটোমেশন স্ক্রিপ্ট।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Mohakhali, Banani, Mirpur, Kawran Bazar)',
      entrySalary: { min: 20000, max: 35000, currency: 'BDT', formatted: '20,000 - 35,000 BDT' },
      midSalary: { min: 45000, max: 85000, currency: 'BDT', formatted: '45,000 - 85,000 BDT' },
      seniorSalary: { min: 90000, max: 180000, currency: 'BDT', formatted: '90,000 - 180,000 BDT' },
      hiringSectors: [
        'Fintech Companies (bKash, Nagad, SureCash QA teams)',
        'Offshore Software Export Firms in Dhaka (Brain Station 23, Kaz Software, Enosis)',
        'Telecom Companies and Bank IT Quality Assurance Divisions'
      ],
      cvExpectations: [
        'Demonstrated understanding of SDLC and STLC methodologies',
        'Ability to write structured, flawless bug reports in English',
        'Familiarity with Postman API collections and Chrome DevTools',
        'Attention to detail and constructive communication with developers'
      ],
      localDemandSummary_en: 'Fintech and enterprise software firms in Dhaka maintain dedicated QA engineering teams. Diploma holders with strong testing documentation skills and analytical thinking are regularly hired.',
      localDemandSummary_bn: 'ব্যাংকিং ও ফিনটেক অ্যাপে সামান্য ভুলের কারণে কোটি টাকার ক্ষতি হতে পারে, তাই সফটওয়্যার কোম্পানিগুলোতে কিউএ ইঞ্জিনিয়ারদের অনেক গুরুত্ব ও সম্মান দেওয়া হয়।'
    },
    targetCountries: [
      {
        region: 'Europe',
        countryName_en: 'Germany and Poland',
        countryName_bn: 'জার্মানি ও পোল্যান্ড',
        demandLevel: 'Moderate',
        demandLevel_bn: 'মাঝারি',
        visaReality_en: 'Automated QA engineers skilled in Playwright or Selenium with English communication qualify for European tech worker visas.',
        visaReality_bn: 'অটোমেশন টেস্টিং (Playwright বা Selenium) জানলে ইউরোপীয় টেক কোম্পানিতে কাজের সুযোগ তৈরি হয়।',
        averageSalaryUsdOrLocal: '40,000 - 65,000 EUR / year (approx 4,500,000 - 7,500,000 BDT)',
        requiredExperienceYears: '3+ years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$500 - $2,200 / month',
      competitionLevel: 'Moderate to high, won through API automation and clear bug reports',
      competitionLevel_bn: 'এপিআই টেস্টিং ও পরিষ্কার লিখিত রিপোর্টের মাধ্যমে আন্তর্জাতিক ক্লায়েন্ট পাওয়া যায়',
      englishRequirement: 'Strong written English to document bug steps and communicate with overseas engineering teams',
      englishRequirement_bn: 'ভুলত্রুটি পরিষ্কারভাবে লিখে বোঝানোর মতো প্রাতিষ্ঠানিক লিখিত ইংরেজি থাকা জরুরি',
      realities_en: [
        'Bug hunting bounty platforms (Testlio, uTest) allow students to earn while learning',
        'Remote teams value concise reproduction steps that save developers debugging time'
      ],
      realities_bn: [
        'ইউটেস্ট (uTest) বা টেস্টলিও-এর মতো প্ল্যাটফর্মে ছাত্রাবস্থাতেই প্র্যাকটিস করে ডলার আয় করা সম্ভব',
        'ডেভেলপারের সময় বাঁচানোর জন্য স্পষ্ট বাগ রিপোর্ট দেওয়ার সক্ষমতাই রিমোট কিউএ-এর মূল শক্তি'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Software Testing Principles and STLC',
      phaseTitle_bn: 'প্রথম পর্ব: সফটওয়্যার টেস্টিংয়ের মূলনীতি ও এসটিএলসি',
      phaseSubtitle_en: 'Day 1 to 25: Bug lifecycle, black-box techniques, and writing test cases.',
      phaseSubtitle_bn: '১ থেকে ২৫ দিন: বাগ লাইফসাইকেল, ব্ল্যাক-বক্স টেকনিক ও টেস্ট কেস তৈরির নিয়ম।',
      durationWeeks: 3,
      modules: [
        {
          id: 'mod-stlc-bug-life',
          title_en: 'Software Testing Life Cycle (STLC) and Test Scenarios',
          title_bn: 'সফটওয়্যার টেস্টিং লাইফ সাইকেল ও টেস্ট কেস ডিজাইন',
          description_en: 'Boundary value analysis, equivalence partitioning, error guessing, and writing actionable bug reports.',
          description_bn: 'বাউন্ডারি ভ্যালু অ্যানালাইসিস, সমমান বিভাজন এবং নিখুঁত টেস্ট সিনারিও লেখা।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Equivalence Partitioning', 'Boundary Value Analysis (BVA)', 'Severity vs Priority matrix'],
          practicalTask_en: 'Write 15 detailed test cases for a Bangladeshi mobile banking money transfer flow.',
          practicalTask_bn: 'মোবাইল ব্যাংকিংয়ের সেন্ড-মানি ফিচারের জন্য ১৫টি বাস্তবসম্মত টেস্ট কেস তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: API Testing and Postman Automation',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: এপিআই টেস্টিং ও পোস্টম্যান অটোমেশন',
      phaseSubtitle_en: 'Day 26 to 50: REST endpoints, HTTP status codes, and test assertions.',
      phaseSubtitle_bn: '২৬ থেকে ৫০ দিন: রেস্ট এপিআই, এইচটিটিপি স্ট্যাটাস কোড ও অটোমেটেড টেস্ট রান।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-postman-api-test',
          title_en: 'Postman Test Scripts and Environment Variables',
          title_bn: 'পোস্টম্যান টেস্ট স্ক্রিপ্ট ও এনভায়রনমেন্ট ভ্যারিয়েবল',
          description_en: 'Validating response body, checking response time under 500ms, and chaining authentication tokens across requests.',
          description_bn: 'পোস্টম্যানে টেস্ট স্ক্রিপ্ট লিখে রেসপন্স টাইম ও জেএসন ডেটা স্বয়ংক্রিয়ভাবে যাচাই করা।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['pm.expect assertions', 'Bearer token chaining', 'Postman runner and collection export'],
          practicalTask_en: 'Create an automated Postman test collection with 10 passing test assertions on a public REST API.',
          practicalTask_bn: 'একটি পাবলিক এপিআইয়ের জন্য ১০টি অটোমেটেড টেস্ট স্ক্রিপ্ট সহ পোস্টম্যান কালেকশন তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: Web and Mobile Exploratory Testing in Jira',
      phaseTitle_bn: 'তৃতীয় পর্ব: ওয়েব ও মোবাইল এক্সপ্লোরেটরি টেস্ট এবং জিরা',
      phaseSubtitle_en: 'Day 51 to 75: Jira Kanban boards, responsive device matrices, and screen recording bugs.',
      phaseSubtitle_bn: '৫১ থেকে ৭৫ দিন: জিরা বোর্ড পরিচালনা, বিভিন্ন স্ক্রিন সাইজে টেস্টিং ও বাগ ট্র্যাকিং।',
      durationWeeks: 3,
      modules: [
        {
          id: 'mod-jira-reporting',
          title_en: 'Professional Bug Reporting in Jira',
          title_bn: 'জিরাতে প্রফেশনাল বাগ রিপোর্টিং ও ট্র্যাকিং',
          description_en: 'Steps to reproduce, environment specs, console logs, network payloads, and severity labeling.',
          description_bn: 'ব্রাউজার কনসোল লগ ও নেটওয়ার্ক এরর যুক্ত করে প্রাতিষ্ঠানিক মানের বাগ টিকিট তৈরি।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Steps to reproduce', 'Attaching network HAR logs', 'Defect density metrics'],
          practicalTask_en: 'Find and document 5 real bugs on live Bangladeshi university or government portals in Jira format.',
          practicalTask_bn: 'লাইভ কোনো ওয়েবসাইটে ৫টি বাস্তব সমস্যা বা বাগ খুঁজে বের করে প্রফেশনাল ফরম্যাটে রিপোর্ট করো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: Automation Basics with Playwright and Job Vault',
      phaseTitle_bn: 'চতুর্থ পর্ব: প্লে-রাইট অটোমেশন বেসিকস ও জব ইন্টারভিউ',
      phaseSubtitle_en: 'Day 76 to 90: Playwright browser scripts and QA interview preparation.',
      phaseSubtitle_bn: '৭৬ থেকে ৯০ দিন: ব্রাউজার অটোমেশন স্ক্রিপ্ট ও সফটওয়্যার কিউএ ইন্টারভিউ প্রস্তুতি।',
      durationWeeks: 2,
      modules: [
        {
          id: 'mod-playwright-e2e',
          title_en: 'Playwright Browser Automation Foundations',
          title_bn: 'প্লে-রাইট ব্রাউজার অটোমেশন পরিচিতি',
          description_en: 'Writing automated scripts that open browsers, type credentials, click buttons, and assert page redirects.',
          description_bn: 'কোড লিখে স্বয়ংক্রিয়ভাবে ব্রাউজারে লগইন ও ফর্ম সাবমিট টেস্ট চালানোর উপায়।',
          estimatedDays: 10,
          mobileAccessible: false,
          keyTopics: ['Page locators and selectors', 'Expect assertions', 'Headless vs headed browser execution'],
          practicalTask_en: 'Write an automated Playwright test that logs into a mock portal and verifies dashboard title.',
          practicalTask_bn: 'প্লে-রাইট দিয়ে একটি স্বয়ংক্রিয় স্ক্রিপ্ট রান করো যা একা একাই ফর্ম পূরণ করে টেস্ট সফল করবে।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'qa-q1',
      question_en: 'What is the difference between Bug Severity and Bug Priority? Give a real-world example.',
      question_bn: 'বাগের তীব্রতা (Severity) এবং গুরুত্বের (Priority) মধ্যে পার্থক্য কী? একটি বাস্তব উদাহরণ দাও।',
      category: 'QA Fundamentals',
      whyAsked_en: 'The golden question in every QA interview in Dhaka to test business versus technical understanding.',
      whyAsked_bn: 'কিউএ ইন্টারভিউয়ের সবচেয়ে প্রচলিত প্রশ্ন যা প্রার্থীর টেকনিক্যাল ও বিজনেস সেন্স যাচাই করে।',
      howToAnswer_en: 'Severity measures the technical impact of the defect on system operation (Critical, Major, Minor). Priority measures how urgently the business needs it resolved for users (High, Medium, Low). Example of High Severity, Low Priority: An obscure admin report crashes the entire server, but the report is only run once a year. Example of Low Severity, High Priority: The company logo on the homepage has a typo or wrong brand color; it breaks no code but damages brand reputation immediately.',
      howToAnswer_bn: 'সিভিয়ারিটি (Severity) হলো সফটওয়্যারের ওপর ত্রুটির টেকনিক্যাল প্রভাব (যেমন সিস্টেম ক্র্যাশ বা ডেটা লস)। আর প্রায়োরিটি (Priority) হলো ব্যবসার প্রয়োজনে ত্রুটিটি কত দ্রুত ঠিক করা দরকার। উদাহরণ: হোমপেজে কোম্পানির নামের বানান ভুল থাকলে কোনো কোড ক্র্যাশ করে না (লো সিভিয়ারিটি), কিন্তু দ্রুত ঠিক না করলে সুনাম নষ্ট হয় (হাই প্রায়োরিটি)।',
      commonMistakes_en: 'Assuming high severity always equals high priority.',
      commonMistakes_bn: 'সব হাই সিভিয়ারিটি বাগকে সবসময় অবিলম্বে ঠিক করতে হবে এমন ভুল যুক্তি দেওয়া।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-postman-qa',
      title_en: 'Postman API Testing and Automation Certification',
      title_bn: 'পোস্টম্যান এপিআই টেস্টিং ভেরিফায়েড সার্টিফিকেট',
      provider: 'Postman Academy',
      url: 'https://academy.postman.com/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 10,
      cost: '100% Free',
      relevance_en: 'Recognized industry badge for manual and automated API quality assurance.',
      relevance_bn: 'এপিআই কোয়ালিটি নিশ্চিত করার জন্য আন্তর্জাতিকভাবে স্বীকৃত ফ্রি সার্টিফিকেট।'
    }
  ]
};
