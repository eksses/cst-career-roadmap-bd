import type { CareerTrack } from '../../../shared/types.js';

export const laravelPhpAgencyDevTrack: Omit<CareerTrack, 'id'> = {
  slug: 'laravel-php-agency-dev',
  title_en: 'Laravel, PHP and Agency Full-Stack Web Development',
  title_bn: 'লারাভেল, পিএইচপি ও এজেন্সি ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট',
  summary_en: 'Full-stack commercial web application engineering using modern PHP 8+, Laravel 11, Blade templates, Livewire, MySQL, and customized WordPress themes for local business agencies and global freelancing.',
  summary_bn: 'আধুনিক পিএইচপি ৮+, লারাভেল ১১ (Laravel 11), লাইভওয়্যার, মাইএসকিউএল ও ওয়ার্ডপ্রেস দিয়ে দেশীয় সফটওয়্যার এজেন্সি ও বৈশ্বিক মার্কেটপ্লেসে দ্রুত কাজের উপযোগী ফুল-স্ট্যাক ট্র্যাক।',
  pivotAdvice_en: 'Laravel offers the most accessible path into paid employment across hundreds of software agencies in Dhaka and regional divisional cities. If you want rapid tangible results and high job placement volume, Laravel is unbeatable.',
  pivotAdvice_bn: 'ঢাকা সহ বাংলাদেশের প্রায় প্রতিটি শহরের সফটওয়্যার ফার্মগুলোতে লারাভেল ও পিএইচপি ডেভেলপারের বিপুল চাহিদা রয়েছে। দ্রুত বাস্তব ওয়েবসাইট বানিয়ে দেশীয় কোম্পানিতে ইন্টার্নশিপ বা চাকরি শুরু করার জন্য এটি একটি নির্ভরযোগ্য ও প্রমাণিত পথ।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Building database-driven web applications with Laravel MVC architecture, Eloquent ORM, and Blade templates.',
    'Designing MySQL relational schemas, database migrations, and seeders.',
    'Creating dynamic reactive user interfaces with Laravel Livewire and Alpine.js without complex React setups.',
    'Integrating local SMS gateways, bKash merchant checkout, and automated PDF invoice generation.',
    'Deploying Laravel and WordPress sites to cPanel shared hosting and Ubuntu VPS cloud servers.'
  ],
  dayToDay_bn: [
    'লারাভেল ফ্রেমওয়ার্ক ও মাইএসকিউএল দিয়ে ই-কমার্স, স্কুল ম্যানেজমেন্ট ও ডায়াগনস্টিক সেন্টারের পূর্ণাঙ্গ ওয়েবসাইট বানানো।',
    'এলকুয়েন্ট ওআরএম (Eloquent ORM) দিয়ে ডেটাবেস কুয়েরি ও রিলেশনশিপ হ্যান্ডেল করা।',
    'লাইভওয়্যার (Livewire) ও আলপাইন.জেএস দিয়ে পেজ রিলোড ছাড়া ডায়নামিক ফিল্টার ও ফর্ম তৈরি করা।',
    'লোকাল এসএমএস গেটওয়ে, বিকাশ পেমেন্ট ও ইনভয়েস ডাউনলোড ফিচার ইন্টিগ্রেট করা।',
    'সিপ্যানেল (cPanel) বা উবুন্টু ভিপিএস ক্লাউডে ওয়েবসাইট লাইভ ডিপ্লয় করা ও এসএসএল সার্টিফিকেট সেট করা।'
  ],
  mustHaveSkills: [
    {
      id: 'php8-oop-fundamentals',
      name: 'Modern PHP 8+ and OOP Concepts',
      category: 'Core Language',
      importance: 'Essential',
      description_en: 'Strict typing, constructor promotion, arrow functions, interfaces, abstract classes, and traits in PHP.',
      description_bn: 'পিএইচপি ৮-এর টাইপিং, অবজেক্ট ওরিয়েন্টেড ক্লাস, ইন্টারফেস ও ট্রেইট ব্যবহারের নিয়ম।'
    },
    {
      id: 'laravel-eloquent-orm',
      name: 'Laravel 11 MVC and Eloquent Database ORM',
      category: 'Web Framework',
      importance: 'Essential',
      description_en: 'Routing, controllers, middleware, request validation, database migrations, and Eloquent model relationships.',
      description_bn: 'লারাভেল রাউটিং, মিডলওয়্যার, রিকোয়েস্ট ভ্যালিডেশন এবং মডেল রিলেশনশিপ (hasMany, belongsTo)।'
    },
    {
      id: 'mysql-database-design',
      name: 'MySQL Schema Architecture and Indexing',
      category: 'Databases',
      importance: 'Essential',
      description_en: 'Foreign keys, inner/left joins, index optimization, and transaction handling in MySQL.',
      description_bn: 'টেবিল ফরেন কি, ইন্ডেক্স অপ্টিমাইজেশন ও দ্রুত ডেটা লোড করার এসকিউএল কুয়েরি।'
    },
    {
      id: 'cpanel-vps-deployment',
      name: 'cPanel and Ubuntu VPS Server Deployment',
      category: 'Deployment',
      importance: 'Recommended',
      description_en: 'Configuring domain DNS, PHP extensions, Composer on SSH, environment files, and free Let us Encrypt SSL.',
      description_bn: 'ডোমেন-হোস্টিং কানেক্ট করা, সিপ্যানেল বা ভিপিএসে কম্পোজার দিয়ে সাইট লাইভ রান করা।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Mirpur, Panthapath, Dhanmondi, Uttara, Chittagong, Sylhet)',
      entrySalary: { min: 20000, max: 35000, currency: 'BDT', formatted: '20,000 - 35,000 BDT' },
      midSalary: { min: 45000, max: 85000, currency: 'BDT', formatted: '45,000 - 85,000 BDT' },
      seniorSalary: { min: 95000, max: 190000, currency: 'BDT', formatted: '95,000 - 190,000 BDT' },
      hiringSectors: [
        'Local Web Software Agencies in Dhaka, Chittagong, and Rajshahi',
        'E-Commerce Companies and Multi-Vendor Marketplace Operations',
        'ERP Providers for Garments, Manufacturing, and Healthcare Clinics'
      ],
      cvExpectations: [
        'At least 2 live working full-stack Laravel websites deployed with real database interactions',
        'Clean adherence to Laravel MVC architecture and separation of concerns',
        'Understanding of Eloquent relationships and eager loading to prevent N+1 queries',
        'Familiarity with Git branching and responsive mobile frontend layouts'
      ],
      localDemandSummary_en: 'Laravel represents the highest volume of junior web developer openings in Bangladesh. Polytechnic graduates with clean projects and deployment experience frequently secure offers.',
      localDemandSummary_bn: 'বাংলাদেশে ফ্রেশার ও ডিপ্লোমা শিক্ষার্থীদের জন্য লারাভেলে সবচেয়ে বেশি চাকরির সুযোগ রয়েছে। দুটি লাইভ ওয়েবসাইট পোর্টফোলিওতে থাকলে ঢাকার এজেন্সিগুলোতে সহজেই চাকরি শুরু করা যায়।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'Saudi Arabia and UAE (Dubai)',
        countryName_bn: 'সৌদি আরব ও সংযুক্ত আরব আমিরাত (দুবাই)',
        demandLevel: 'Moderate',
        demandLevel_bn: 'মাঝারি',
        visaReality_en: 'SMEs across Dubai and Riyadh hire full-stack PHP/Laravel engineers with 3+ years of commercial agency experience.',
        visaReality_bn: '৩ বছরের বাস্তব প্রজেক্টের অভিজ্ঞতা থাকলে দুবাই ও রিয়াদের ছোট-মাঝারি প্রতিষ্ঠানে কাজের ভিসা পাওয়া যায়।',
        averageSalaryUsdOrLocal: '$36,000 - $60,000 USD / year (approx 4,300,000 - 7,200,000 BDT)',
        requiredExperienceYears: '3+ years'
      }
    ],
    remote: {
      entryBarrier: 'Low',
      entryBarrier_bn: 'সহজ থেকে মাঝারি',
      monthlyRangeUsd: '$600 - $2,800 / month',
      competitionLevel: 'Active freelance market on Upwork/Fiverr, won through fast turnaround and clean communication',
      competitionLevel_bn: 'আপওয়ার্ক ও ফাইভারে লারাভেল বাগ ফিক্স ও নতুন ফিচারের জন্য প্রতিদিন শত শত ক্লায়েন্ট কাজ পোস্ট করে',
      englishRequirement: 'Conversational English to understand client feature briefs and explain deliverables',
      englishRequirement_bn: 'ক্লায়েন্টের চাহিদা বুঝতে পারা ও কাজের অগ্রগতি জানানোর মতো সাধারণ ইংরেজি দক্ষতা',
      realities_en: [
        'Local agency clients value speed to market; Laravel allows you to deliver in days what takes weeks in Java',
        'WordPress maintenance and custom plugin tweaks provide steady secondary freelance income'
      ],
      realities_bn: [
        'দেশীয় এজেন্সিগুলোর কাছে দ্রুত কাজ ডেলিভারি দেওয়া সবচেয়ে গুরুত্বপূর্ণ, যা লারাভেলে খুব সহজে সম্ভব',
        'লারাভেলের পাশাপাশি ওয়ার্ডপ্রেসের খুঁটিনাটি কাজ জানলে বাড়তি ফ্রিল্যান্সিং আয় করা সহজ হয়'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Modern PHP 8+ and MySQL Database Design',
      phaseTitle_bn: 'প্রথম পর্ব: আধুনিক পিএইচপি ৮+ ও মাইএসকিউএল ডেটাবেস ডিজাইন',
      phaseSubtitle_en: 'Day 1 to 25: PHP OOP classes, session authentication, and relational SQL queries.',
      phaseSubtitle_bn: '১ থেকে ২৫ দিন: পিএইচপির অবজেক্ট ওরিয়েন্টেড কোডিং, লগইন সেশন ও মাইএসকিউএল কুয়েরি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-php-mysql-core',
          title_en: 'PHP OOP and PDO Prepared Statements',
          title_bn: 'পিএইচপি অবজেক্ট ওরিয়েন্টেড কোড ও নিরাপদ পিডিও',
          description_en: 'Classes, methods, inheritance, PDO database connections, prepared statements to prevent SQL injection, and password_hash.',
          description_bn: 'এসকিউএল ইনজেকশন প্রতিরোধে পিডিও প্রিপেয়ার্ড স্টেটমেন্ট ও পাসওয়ার্ড হ্যাশিংয়ের বাস্তব প্র্যাকটিস।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['PHP 8 typed properties', 'PDO connection and prepared statements', 'password_hash and password_verify'],
          practicalTask_en: 'Build a raw PHP and MySQL user authentication system with secure login, signup, and session timeout.',
          practicalTask_bn: 'পিএইচপি ও মাইএসকিউএল দিয়ে একটি নিরাপদ ইউজার লগইন ও রেজিস্ট্রেশন সিস্টেম তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: Laravel 11 MVC, Routing and Blade Templates',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: লারাভেল ১১ এমভিসি, রাউটিং ও ব্লেড টেমপ্লেট',
      phaseSubtitle_en: 'Day 26 to 50: Artisan CLI, migrations, controllers, middleware, and Tailwind integration.',
      phaseSubtitle_bn: '২৬ থেকে ৫০ দিন: আর্টিসান কমান্ড, ডেটাবেস মাইগ্রেশন, ব্লেড ভিউ ও টেইলউইন্ড ডিজাইন।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-laravel-artisan-mvc',
          title_en: 'Laravel Routing, Middleware and Blade Layouts',
          title_bn: 'লারাভেল রাউটিং, মিডলওয়্যার ও ভিউ লেআউট',
          description_en: 'Resource routes, form request validation, authentication scaffolding (Laravel Breeze), and Blade component layouts.',
          description_bn: 'রিসোর্স রাউটিং, রিকোয়েস্ট ভ্যালিডেশন, লারাভেল ব্রিজ দিয়ে ইউজার লগইন ও কম্পোনেন্ট লেআউট।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Artisan CLI commands', 'Form Request Validation rules', 'Blade components (@props, @slot)'],
          practicalTask_en: 'Create a multi-user blog or news portal where admins can publish articles with categories and image uploads.',
          practicalTask_bn: 'লারাভেল দিয়ে একটি পূর্ণাঙ্গ ব্লগ বা নিউজ পোর্টাল বানাও যেখানে ছবি আপলোড ও ক্যাটাগরি ফিল্টার থাকবে।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: Eloquent ORM, Livewire and Payment Integration',
      phaseTitle_bn: 'তৃতীয় পর্ব: এলকুয়েন্ট রিলেশনশিপ, লাইভওয়্যার ও বিকাশ পেমেন্ট',
      phaseSubtitle_en: 'Day 51 to 75: Advanced database joins, dynamic reactive cart, and online payments.',
      phaseSubtitle_bn: '৫১ থেকে ৭৫ দিন: অ্যাডভান্সড ডেটাবেস রিলেশনশিপ, পেজ রিলোড ছাড়া শপিং কার্ট ও পেমেন্ট গেটওয়ে।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-eloquent-livewire-bkash',
          title_en: 'Eloquent Relationships, Livewire 3 and bKash Checkout',
          title_bn: 'এলকুয়েন্ট ওআরএম, লাইভওয়্যার ও বিকাশ পেমেন্ট',
          description_en: 'One-to-many, many-to-many relationships, eager loading with(), Livewire real-time search, and payment callbacks.',
          description_bn: 'এন প্লাস ওয়ান (N+1) সমস্যা সমাধান, লাইভওয়্যার দিয়ে ইনস্ট্যান্ট সার্চ ও পেমেন্ট কনফার্মেশন।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['Eloquent Relationships (hasMany, belongsToMany)', 'Livewire 3 wire:model and real-time updates', 'bKash merchant API checkout flow'],
          practicalTask_en: 'Build an e-commerce online store with product filtering, dynamic cart updates via Livewire, and bKash mock checkout.',
          practicalTask_bn: 'লাইভওয়্যার দিয়ে একটি পূর্ণাঙ্গ অনলাইন শপ তৈরি করো যাতে কার্ট আপডেট ও বিকাশ পেমেন্ট সফলভাবে কাজ করে।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: cPanel & VPS Cloud Deployment and Agency Interview Prep',
      phaseTitle_bn: 'চতুর্থ পর্ব: সিপ্যানেল ও ক্লাউড হোস্টিং এবং জব ইন্টারভিউ',
      phaseSubtitle_en: 'Day 76 to 90: Live hosting on cPanel/VPS, domain DNS configuration, and agency portfolio.',
      phaseSubtitle_bn: '৭৬ থেকে ৯০ দিন: সিপ্যানেল বা ক্লাউড ভিপিএসে সাইট লাইভ করা ও দেশীয় সফটওয়্যার ফার্মের ইন্টারভিউ প্রস্তুতি।',
      durationWeeks: 2,
      modules: [
        {
          id: 'mod-cpanel-hosting-portfolio',
          title_en: 'Live Domain Deployment and Performance Tuning',
          title_bn: 'লাইভ ডোমেন হোস্টিং ও প্রজেক্ট শোকেস',
          description_en: 'Setting up public folder root, Composer install, .env production secrets, database import, and SSL certificate installation.',
          description_bn: 'সিপ্যানেলে বা ভিপিএসে লাইভ ডোমেনে সাইট হোস্ট করা, ফ্রি এসএসএল সক্রিয় করা ও স্পিড বাড়ানো।',
          estimatedDays: 10,
          mobileAccessible: false,
          keyTopics: ['cPanel public_html document root configuration', 'Environment caching (config:cache, route:cache)', 'Live Let us Encrypt SSL activation'],
          practicalTask_en: 'Deploy your completed Laravel e-commerce application to a live domain or sub-domain with full HTTPS encryption.',
          practicalTask_bn: 'তোমার তৈরি করা ওয়েবসাইটটি ইন্টারনেটে একটি লাইভ ডোমেনে ডিপ্লয় করো যাতে সবাই ভিজিট করতে পারে।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'laravel-q1',
      question_en: 'What is the N+1 query problem in Laravel Eloquent? How do you detect and fix it?',
      question_bn: 'লারাভেল এলকুয়েন্ট ওআরএম-এ N+1 কুয়েরি সমস্যা কী? এটি কীভাবে শনাক্ত করা যায় এবং কীভাবে সমাধান করতে হয়?',
      category: 'Database Optimization',
      whyAsked_en: 'The most popular Laravel interview question in Bangladeshi software agencies to test database optimization skills.',
      whyAsked_bn: 'লারাভেল ইন্টারভিউয়ের সবচেয়ে গুরুত্বপূর্ণ প্রশ্ন যা প্রার্থীর ডেটাবেস পারফরম্যান্স ও সার্ভার অপ্টিমাইজেশনের দক্ষতা প্রমাণ করে।',
      howToAnswer_en: 'The N+1 problem occurs when an application executes 1 initial database query to fetch a list of N records, and then inside a loop executes N additional queries to fetch related data for each record, resulting in N+1 total queries that crash the database under high traffic. For example, Post::all() followed by accessing $post->author in a foreach loop runs 1 query for posts and 100 separate queries for authors if there are 100 posts. To fix it: Use Eloquent Eager Loading with the with() method, such as Post::with(author)->get(). This reduces the entire operation to strictly 2 queries total, regardless of whether there are 10 or 10,000 records.',
      howToAnswer_bn: 'N+1 কুয়েরি সমস্যা তখন তৈরি হয় যখন ডেটাবেস থেকে কোনো লিস্ট আনার পর লুপের ভেতর প্রতিটি আইটেমের সম্পর্কযুক্ত ডেটা আনতে আলাদা আলাদা কুয়েরি চালানো হয়। উদাহরণস্বরূপ: ১০০টি পোস্টের লেখক দেখানোর জন্য যদি প্রথমে সব পোস্ট আনা হয় (১টি কুয়েরি) এবং লুপের ভেতর প্রতিটি পোস্টের জন্য লেখকের নাম চাওয়া হয়, তবে ডেটাবেসে মোট ১০১টি (১+১০০) কুয়েরি রান হবে। হাজার হাজার ভিজিটর আসলে সার্ভার সাথে সাথে ক্র্যাশ করবে। সমাধান: লারাভেলের ইগার লোডিং (Eager Loading) মেথড with() ব্যবহার করতে হবে। যেমন: Post::with("author")->get()। এটি মাত্র ২টি কুয়েরিতে সব ডেটা মেমোরিতে নিয়ে আসে এবং ডেটাবেসের ওপর ৯০% চাপ কমিয়ে দেয়।',
      commonMistakes_en: 'Thinking that Eloquent automatically joins tables behind the scenes for every relationship.',
      commonMistakes_bn: 'মনে করা যে এলকুয়েন্ট নিজে থেকেই সবসময় জয়েন কুয়েরি চালিয়ে ডেটা আনে।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-laravel-bootcamp',
      title_en: 'Official Laravel Bootcamp and Laracasts Foundations',
      title_bn: 'লারাভেল অফিশিয়াল বুটক্যাম্প ফ্রি কোর্স ও গাইড',
      provider: 'Laravel LLC and Laracasts',
      url: 'https://bootcamp.laravel.com/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 20,
      cost: '100% Free',
      relevance_en: 'Official step-by-step full-stack tutorial directly from Taylor Otwell and the Laravel core team.',
      relevance_bn: 'লারাভেলের প্রতিষ্ঠাতা টেইলর অটওয়েলের অফিশিয়াল বুটক্যাম্প ও লাইভ প্রজেক্ট গাইড।'
    }
  ]
};
