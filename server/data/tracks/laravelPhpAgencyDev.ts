import type { CareerTrack } from '../../../shared/types.js';

export const laravelPhpAgencyDevTrack: Omit<CareerTrack, 'id'> = {
  slug: 'laravel-php-agency-dev',
  title_en: 'Laravel 11/12, Modern PHP 8.4 & Full-Stack Agency Engineering (2026 Edition)',
  title_bn: 'লারাভেল ১১/১২, আধুনিক পিএইচপি ৮.৪ ও এজেন্সি ফুল-স্ট্যাক ইঞ্জিনিয়ারিং (২০২৬ এডিশন)',
  summary_en: 'Calibrated for late 2026. Full-stack commercial application engineering using PHP 8.4, Laravel 11/12 streamlined architecture, Livewire 3 / Inertia.js React, Filament Admin v3, MySQL / PostgreSQL, Redis queues, and bKash/SSLCommerz integrations.',
  summary_bn: '২০২৬ সালের আধুনিক পিএইচপি ও লারাভেল ফুল-স্ট্যাক ক্যারিয়ার ট্র্যাক। পিএইচপি ৮.৪, লারাভেল ১১/১২ এর নতুন আর্কিটেকচার, লাইভওয়্যার ৩, ফিলামেন্ট এডমিন প্যানেল ৩, রেডিস ব্যাকগ্রাউন্ড কিউ এবং বিকাশ-নগদ পেমেন্ট ইন্টিগ্রেশন।',
  pivotAdvice_en: 'Laravel offers the highest hiring volume and fastest path into paid software engineering across hundreds of digital agencies and SaaS houses in Dhaka, Chittagong, and Sylhet. In 2026, developers who combine Laravel with modern Livewire 3 and Filament Admin deliver client projects 5x faster than pure JavaScript stacks.',
  pivotAdvice_bn: 'ঢাকা, চট্টগ্রাম সহ দেশের বিভিন্ন সফটওয়্যার ফার্ম ও ডিজিটাল এজেন্সিতে লারাভেলের প্রচুর নিয়মিত কর্মসংস্থান রয়েছে। ২০২৬ সালে যারা লারাভেলের সাথে লাইভওয়্যার ৩ ও ফিলামেন্ট এডমিন প্যানেল ব্যবহার করে দ্রুত বাণিজ্যিক ওয়েবসাইট বানাতে পারে, সফটওয়্যার এজেন্সিগুলো তাদের সরাসরি ফ্রেশার হিসেবেও অগ্রাধিকার দিয়ে নিয়োগ দেয়।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Building database-driven SaaS applications using Laravel 11/12 streamlined routing, controllers, and FormRequests.',
    'Modeling relational schemas with Eloquent ORM, handling eager loading, polymorphic relationships, and migrations.',
    'Creating dynamic reactive user interfaces with Livewire 3 and Alpine.js without wrestling with heavy React boilerplate.',
    'Constructing enterprise admin dashboards in hours using Filament Admin v3 with built-in filters and actions.',
    'Integrating payment gateways (bKash Tokenized, SSLCommerz, Stripe) and queuing invoice jobs in Redis.'
  ],
  dayToDay_bn: [
    'লারাভেল ১১/১২ ফ্রেমওয়ার্ক দিয়ে ই-কমার্স, স্কুল ম্যানেজমেন্ট ও ডায়াগনস্টিক সেন্টারের স্বয়ংক্রিয় সফটওয়্যার বানানো।',
    'এলকুয়েন্ট ওআরএম (Eloquent ORM) দিয়ে ডেটাবেস রিলেশনশিপ ও ইগার লোডিংয়ের মাধ্যমে দ্রুতগতির কুয়েরি চালানো।',
    'লাইভওয়্যার ৩ ও আলপাইন.জেএস দিয়ে পেজ রিলোড ছাড়া সিঙ্গেল পেজ অ্যাপের মতো দ্রুতগতির ফর্ম ও ফিল্টার তৈরি।',
    'ফিলামেন্ট ৩ (Filament) এডমিন প্যানেল দিয়ে চমৎকার ড্যাশবোর্ড ও এক্সেল এক্সপোর্ট সিস্টেম অল্প সময়ে রেডি করা।',
    'বিকাশ, নগদ, এসএসএলকমার্জ ও স্ট্রাইপ পেমেন্ট গেটওয়ে যুক্ত করা এবং রেডিস কিউ দিয়ে ব্যাকগ্রাউন্ডে ইমেইল পাঠানো।'
  ],
  mustHaveSkills: [
    {
      id: 'php-84-oop-typing',
      name: 'Modern PHP 8.4 & Clean OOP',
      category: 'Core Language',
      importance: 'Essential',
      description_en: 'Constructor property promotion, match expressions, strict typing (declare(strict_types=1)), and traits.',
      description_bn: 'পিএইচপি ৮.৪-এর আধুনিক অবজেক্ট ওরিয়েন্টেড কনসেপ্ট, টাইপ সেফটি ও ম্যাচ এক্সপ্রেশন।'
    },
    {
      id: 'laravel-11-streamlined',
      name: 'Laravel 11/12 Streamlined Architecture & Eloquent',
      category: 'Backend Framework',
      importance: 'Essential',
      description_en: 'Consolidated bootstrap/app.php, middleware routing, FormRequest validation, and Eloquent relationships.',
      description_bn: 'লারাভেল ১১/১২-এর নতুন স্ট্রিমলাইন্ড আর্কিটেকচার, মিডলওয়্যার ও এলকুয়েন্ট মডেল রিলেশনশিপ।'
    },
    {
      id: 'livewire-filament-stack',
      name: 'Livewire 3 & Filament Admin v3',
      category: 'Full-Stack Rapid Dev',
      importance: 'Essential',
      description_en: 'Reactive single-file components, wire:navigate, Filament resource tables, form builders, and widgets.',
      description_bn: 'লাইভওয়্যার ৩ দিয়ে রিঅ্যাক্টিভ ফ্রন্টএন্ড এবং ফিলামেন্ট ৩ দিয়ে কয়েক ঘণ্টায় প্রফেশনাল এডমিন ড্যাশবোর্ড তৈরি।'
    },
    {
      id: 'redis-queues-payment-gateways',
      name: 'Redis Queues & BD Payment Gateways',
      category: 'Integrations & Scaling',
      importance: 'Essential',
      description_en: 'Redis queue workers, Horizon monitoring, bKash Checkout APIs, SSLCommerz webhooks, and Stripe.',
      description_bn: 'রেডিস ব্যাকগ্রাউন্ড কিউ প্রসেসিং এবং বিকাশ, নগদ ও কার্ড পেমেন্ট গেটওয়ে ইন্টিগ্রেশন।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Mirpur, Panthapath, Dhanmondi, Uttara), Chittagong, Sylhet & Rajshahi',
      entrySalary: { min: 25000, max: 45000, currency: 'BDT', formatted: '25,000 - 45,000 BDT' },
      midSalary: { min: 55000, max: 110000, currency: 'BDT', formatted: '55,000 - 110,000 BDT' },
      seniorSalary: { min: 120000, max: 250000, currency: 'BDT', formatted: '120,000 - 250,000 BDT' },
      hiringSectors: [
        'Commercial Software Agencies in Dhaka, Chittagong, and Regional Hubs',
        'E-Commerce Companies, Courier Services & Wholesale Marketplaces',
        'ERP Providers for Garments, Manufacturing, Hospitals & Real Estate'
      ],
      cvExpectations: [
        'At least two live deployed full-stack Laravel websites with functional database storage and login',
        'Public GitHub repositories demonstrating clean Laravel coding standards and separation of concerns',
        'Demonstrated understanding of Eloquent eager loading preventing N+1 database queries',
        'Diploma in CST with clear technical ability to walk through controllers and models during viva'
      ],
      localDemandSummary_en: 'Laravel powers the vast majority of local business applications, inventory softwares, and client agency projects across Bangladesh. CST graduates who master Laravel 11 alongside Livewire 3 and Filament build functioning client systems with breathtaking speed, making them immediate assets for digital agencies.',
      localDemandSummary_bn: 'দেশের বাণিজ্যিক প্রতিষ্ঠান ও এজেন্সিতে লারাভেলের প্রচুর নিয়মিত প্রজেক্ট রয়েছে। সিএসটি শিক্ষার্থীরা যারা লারাভেলের সাথে লাইভওয়্যার ৩ ও ফিলামেন্ট দিয়ে পূর্ণাঙ্গ ম্যানেজমেন্ট সফটওয়্যার বানাতে পারে, তারা সহজেই সফটওয়্যার ফার্মগুলোতে ফুল-স্ট্যাক ডেভেলপার হিসেবে স্থান করে নেয়।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'United Arab Emirates & Saudi Arabia',
        countryName_bn: 'সংযুক্ত আরব আমিরাত ও সৌদি আরব',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Retail, logistics, and real estate portals across Dubai and Riyadh heavily hire Laravel backend developers under skilled work visas.',
        visaReality_bn: 'দুবাই ও রিয়াদে রিয়েল এস্টেট ও ই-কমার্স সাইটগুলোতে লারাভেল ডেভেলপারদের নিয়মিত স্পনসরশিপ দেওয়া হয়।',
        averageSalaryUsdOrLocal: '10,000 - 18,000 AED / month (approx 320,000 - 580,000 BDT)',
        requiredExperienceYears: '2 to 4 years'
      },
      {
        region: 'Europe',
        countryName_en: 'United Kingdom & Netherlands',
        countryName_bn: 'যুক্তরাজ্য ও নেদারল্যান্ডস',
        demandLevel: 'Moderate',
        demandLevel_bn: 'মাঝারি থেকে উচ্চ',
        visaReality_en: 'Strong demand for modern PHP 8.4 and Laravel specialists in European SaaS scale-ups.',
        visaReality_bn: 'ইউরোপের স্টার্টআপ ও এজেন্সিতে লারাভেল বিশেষজ্ঞদের জন্য ভালো বেতনের চুক্তিভিত্তিক কাজের সুযোগ রয়েছে।',
        averageSalaryUsdOrLocal: '45,000 - 70,000 EUR / year',
        requiredExperienceYears: '3 to 5 years'
      }
    ],
    remote: {
      entryBarrier: 'Low',
      entryBarrier_bn: 'সহজ থেকে মাঝারি',
      monthlyRangeUsd: '$1,000 - $3,500 USD',
      competitionLevel: 'Moderate',
      competitionLevel_bn: 'মাঝারি',
      englishRequirement: 'Professional English to gather requirements from clients and submit code pull requests',
      englishRequirement_bn: 'বিদেশি ক্লায়েন্টের কাজের রিকোয়ারমেন্ট বুঝে নেওয়া ও ডেলিভারি দেওয়ার মতো প্রয়োজনীয় ইংরেজি',
      realities_en: [
        'Upwork, Fiverr, and global agencies continuously contract Laravel specialists to maintain and extend existing client web applications.',
        'A public GitHub portfolio featuring a live deployed multi-tenant SaaS or e-commerce shop wins remote freelance contracts rapidly.'
      ],
      realities_bn: [
        'আন্তর্জাতিক মার্কেটপ্লেসে লারাভেল ও লাইভওয়্যার প্রজেক্টের নিয়মিত বিপুল কাজ পাওয়া যায়।',
        'সিভিতে লাইভ ই-কমার্স বা স্কুল ম্যানেজমেন্ট সফটওয়্যারের লাইভ ডেমো লিংক থাকলে দূরবর্তী ক্লায়েন্টের কাজ পাওয়া সহজ হয়।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Modern PHP 8.4 Core, OOP Principles & Database Normalization',
      phaseTitle_bn: 'আধুনিক পিএইচপি ৮.৪, ওওপি কনসেপ্ট ও ডেটাবেস নরম্যালাইজেশন',
      phaseSubtitle_en: 'Master strict typing, classes, inheritance, traits, and relational MySQL.',
      phaseSubtitle_bn: 'পিএইচপি টাইপ সিস্টেম, অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং ও মাইএসকিউএল ডিজাইন।',
      durationWeeks: 4,
      modules: [
        {
          id: 'lar-p1-m1',
          title_en: 'PHP 8.4 Language Features, Strict Typing & Composer',
          title_bn: 'পিএইচপি ৮.৪ ফিচার্স, স্ট্রিক্ট টাইপিং ও কম্পোজার প্যাকেজ ম্যানেজার',
          description_en: 'Enable declare(strict_types=1), master constructor property promotion, match expressions, null-safe operators (?->), and manage libraries with Composer.',
          description_bn: 'পিএইচপির আধুনিক সিনট্যাক্স, নাল-সেফ অপারেটর এবং কম্পোজার দিয়ে থার্ড পার্টি প্যাকেজ ব্যবহারের নিয়ম।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['Constructor Property Promotion', 'Match Expressions vs Switch', 'declare(strict_types=1)', 'Composer autoload & PSR-4'],
          practicalTask_en: 'Write an object-oriented invoice generator in pure PHP 8.4 using interfaces, traits, and Composer PDF rendering packages.',
          practicalTask_bn: 'পিএইচপি ৮.৪ দিয়ে অবজেক্ট ওরিয়েন্টেড নিয়মে একটি ইনভয়েস ক্যালকুলেটর লাইব্রেরি তৈরি করো।'
        },
        {
          id: 'lar-p1-m2',
          title_en: 'Relational Database Schema Design & Normalization in MySQL',
          title_bn: 'মাইএসকিউএল রিলেশনাল টেবিল ডিজাইন ও নরম্যালাইজেশন (3NF)',
          description_en: 'Design normalized tables (Users, Orders, OrderItems, Products), foreign key cascade behaviors, and write complex JOIN queries with indexes.',
          description_bn: '৩য় নরমাল ফর্ম (3NF) মেনে ই-কমার্স ডেটাবেস ডিজাইন এবং ফরেন কি দিয়ে টেবিলগুলোর মধ্যে সম্পর্ক তৈরি।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['1NF, 2NF, 3NF Normalization', 'Primary & Foreign Key Constraints', 'INNER & LEFT JOINs', 'Index Creation for Fast Search'],
          practicalTask_en: 'Design a normalized 5-table relational database for an inventory management system and write queries to report daily total sales.',
          practicalTask_bn: 'একটি ইনভেন্টরি ম্যানেজমেন্ট সিস্টেমের জন্য ৫টি সম্পর্কিত টেবিলের ডেটাবেস ডিজাইন করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Laravel 11/12 Streamlined Architecture, Eloquent & Auth',
      phaseTitle_bn: 'লারাভেল ১১/১২ স্ট্রিমলাইন্ড আর্কিটেকচার, এলকুয়েন্ট ও অথেনটিকেশন',
      phaseSubtitle_en: 'Master the unified bootstrap file, FormRequests, Breeze auth, and relationships.',
      phaseSubtitle_bn: 'লারাভেলের নতুন কনফিগারেশন, রিকোয়েস্ট ভ্যালিডেশন ও ইউজার লগইন সিস্টেম।',
      durationWeeks: 4,
      modules: [
        {
          id: 'lar-p2-m1',
          title_en: 'Laravel 11/12 Streamlined Routing, Controllers & FormRequests',
          title_bn: 'লারাভেল ১১/১২ রাউটিং, কন্ট্রোলার ও ফর্ম রিকোয়েস্ট ভ্যালিডেশন',
          description_en: 'Understand the new bootstrap/app.php setup (replacing legacy Kernel.php), resource controllers, route model binding, and strict FormRequest validation.',
          description_bn: 'লারাভেল ১১-এর নতুন আর্কিটেকচার, রিসোর্স কন্ট্রোলার এবং ফর্ম রিকোয়েস্ট দিয়ে শক্তিশালী ইনপুট ভ্যালিডেশন।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Streamlined bootstrap/app.php', 'Route Model Binding', 'FormRequest Validation Rules', 'Laravel Breeze / Starter Kits'],
          practicalTask_en: 'Create a complete CRUD application with FormRequest validation that blocks malformed inputs and redirects with error flashes.',
          practicalTask_bn: 'লারাভেল দিয়ে একটি নিরাপদ ফর্ম ভ্যালিডেশন সহ ক্রাড (CRUD) অ্যাপ্লিকেশন তৈরি করো।'
        },
        {
          id: 'lar-p2-m2',
          title_en: 'Eloquent ORM Relationships & Solving the N+1 Query Problem',
          title_bn: 'এলকুয়েন্ট ওআরএম রিলেশনশিপ ও N+1 কুয়েরি সমস্যা সমাধান',
          description_en: 'Define hasMany, belongsTo, and belongsToMany relationships. Prevent severe database slowdowns by enforcing eager loading (with()) over lazy loading.',
          description_bn: 'মডেল রিলেশনশিপ তৈরি এবং ইগার লোডিং (with()) ব্যবহার করে ডেটাবেসের শত শত অপ্রয়োজনীয় কুয়েরি রোধ করা।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['hasMany and belongsTo', 'Many-to-Many with Pivot Tables', 'Eager Loading with() vs Lazy Loading', 'Model::preventLazyLoading()'],
          practicalTask_en: 'Build an author-books catalog application and use Laravel Debugbar to prove that eager loading cuts query counts from 101 to just 2.',
          practicalTask_bn: 'লারাভেল ডিবাগবার দিয়ে প্রমাণ করো যে ইগার লোডিং ব্যবহারের ফলে ১০১টি কুয়েরির বদলে মাত্র ২টি কুয়েরিতে ডাটা লোড হয়।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Dynamic Full-Stack with Livewire 3 & Filament Admin v3',
      phaseTitle_bn: 'লাইভওয়্যার ৩ দিয়ে ডায়নামিক ইউআই ও ফিলামেন্ট এডমিন প্যানেল',
      phaseSubtitle_en: 'Build dynamic single-page experiences and enterprise back-offices fast.',
      phaseSubtitle_bn: 'পেজ রিলোড ছাড়া রিঅ্যাক্টিভ ইন্টারফেস ও আধুনিক এডমিন প্যানেল তৈরি।',
      durationWeeks: 5,
      modules: [
        {
          id: 'lar-p3-m1',
          title_en: 'Laravel Livewire 3: Reactive Components & Real-Time Filtering',
          title_bn: 'লাইভওয়্যার ৩: রিঅ্যাক্টিভ কম্পোনেন্ট ও রিয়েল-টাইম ফিল্টারিং',
          description_en: 'Build dynamic interactive UIs without writing custom JavaScript. Use wire:model.live, real-time search, wire:navigate, and Alpine.js transitions.',
          description_bn: 'কোনো জটিল জাভাস্ক্রিপ্ট ছাড়াই লারাভেলে লাইভ সার্চ, ডাইনামিক ফিল্টার এবং পেজ রিলোড ছাড়া মসৃণ ইউআই তৈরি।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Livewire 3 Component Lifecycles', 'wire:model.live for instant search', 'wire:navigate for SPA transitions', 'Alpine.js micro-interactions'],
          practicalTask_en: 'Build a live eCommerce product filter with instant price sliders, category checkboxes, and zero full-page browser reloads.',
          practicalTask_bn: 'লাইভওয়্যার ৩ দিয়ে একটি লাইভ প্রডাক্ট ফিল্টার বানাও যা পেজ রিলোড ছাড়াই সাথে সাথে রেজাল্ট আপডেট করে।'
        },
        {
          id: 'lar-p3-m2',
          title_en: 'Filament Admin v3: Resource Tables, Forms & Metrics Cards',
          title_bn: 'ফিলামেন্ট ৩: রিসোর্স টেবিল, ফর্ম বিল্ডার ও বিজনেস ড্যাশবোর্ড',
          description_en: 'Construct comprehensive administrative dashboards using Filament v3. Implement data tables with search, bulk actions, modal forms, and revenue charts.',
          description_bn: 'ফিলামেন্ট ৩ দিয়ে অল্প পরিশ্রমে বিশ্বমানের এডমিন প্যানেল তৈরি, এক্সেল এক্সপোর্ট এবং মাসিক সেলস চার্ট যুক্ত করা।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Filament Resource Generation', 'Table Columns, Filters & Actions', 'Form Schemas & File Uploads', 'Dashboard KPI Widgets'],
          practicalTask_en: 'Build an enterprise agency admin panel in Filament v3 allowing administrators to manage orders, update statuses via modals, and view analytics charts.',
          practicalTask_bn: 'ফিলামেন্ট ৩ দিয়ে একটি পূর্ণাঙ্গ অর্ডার ম্যানেজমেন্ট এডমিন প্যানেল তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Redis Queues, Payment Gateways (bKash/Stripe), Docker & Viva',
      phaseTitle_bn: 'রেডিস ব্যাকগ্রাউন্ড কিউ, বিকাশ পেমেন্ট, ডকার ও চাকরি ভাইভা',
      phaseSubtitle_en: 'Offload heavy email jobs to Redis, accept real money, and pass interviews.',
      phaseSubtitle_bn: 'ব্যাকগ্রাউন্ডে ইমেইল পাঠানো, বিকাশ পেমেন্ট ইন্টিগ্রেশন ও চাকরি ভাইভা প্রস্তুতি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'lar-p4-m1',
          title_en: 'Asynchronous Redis Queues & Horizon Worker Monitoring',
          title_bn: 'রেডিস অ্যাসিনক্রোনাস কিউ ও লারাভেল হরাইজন মনিটরিং',
          description_en: 'Dispatch heavy jobs (PDF invoices, customer emails) to background queues using Redis. Monitor throughput and failed retries with Laravel Horizon.',
          description_bn: 'ইনভয়েস পিডিএফ তৈরি ও ইমেইল পাঠানোর ভারী কাজ ব্যাকগ্রাউন্ডে রেডিসে পাঠানো যাতে ইউজার কোনো স্লোডাউন না দেখে।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['Queue Drivers (database vs redis)', 'Dispatching Jobs & Queued Mailables', 'Laravel Horizon Dashboard', 'Exponential Backoff on Failure'],
          practicalTask_en: 'Dispatch order confirmation PDF generation to a Redis background queue so the checkout HTTP response completes in under 100ms.',
          practicalTask_bn: 'অর্ডার করার সাথে সাথে ব্যাকগ্রাউন্ড কিউতে পিডিএফ ইনভয়েস জেনারেট করে ইমেইল পাঠানোর সিস্টেম বানাও।'
        },
        {
          id: 'lar-p4-m2',
          title_en: 'bKash Tokenized Checkout, Docker Deployment & Agency Viva',
          title_bn: 'বিকাশ টোকেনাইজড পেমেন্ট গেটওয়ে, ডকার ও এজেন্সি ভাইভা প্রস্তুতি',
          description_en: 'Integrate bKash Merchant APIs, verify callbacks, containerize with Docker, and practice answering full-stack technical interview questions.',
          description_bn: 'বিকাশের পেমেন্ট গেটওয়ে যুক্ত করা, ডকার দিয়ে অ্যাপ হোস্ট করা এবং সফটওয়্যার ফার্মের ইন্টারভিউয়ের সেরা প্রস্তুতি।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['bKash Merchant Sandbox Integration', 'Handling Payment Callbacks & Webhooks', 'Dockerizing Laravel (Nginx + PHP-FPM)', 'Technical Agency Viva Questions'],
          practicalTask_en: 'Deploy your complete Laravel eCommerce project with live bKash sandbox checkout on a VPS/cloud server and add the link to your CV.',
          practicalTask_bn: 'তোমার লারাভেল ই-কমার্স প্রজেক্টটি বিকাশ স্যান্ডবক্স পেমেন্ট সহ লাইভ সার্ভারে ডিপ্লয় করে সিভিতে যুক্ত করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'lar-q1',
      question_en: 'How does the streamlined application skeleton in Laravel 11/12 differ from legacy Laravel, and where are middlewares and exception handlers configured?',
      question_bn: 'লারাভেল ১১/১২-এর নতুন স্ট্রিমলাইন্ড স্কেলেটন আগের ভার্সনগুলোর চেয়ে কীভাবে আলাদা এবং মিডলওয়্যার ও এরর হ্যান্ডলার এখন কোথায় কনফিগার করা হয়?',
      category: 'Laravel 11 Architecture',
      whyAsked_en: 'Verifies whether candidate is coding on modern late-2026 Laravel architecture or regurgitating outdated legacy structures.',
      whyAsked_bn: 'প্রার্থী লারাভেলের আধুনিকতম ভার্সনে কাজ করে কি না তা নিশ্চিত করতে।',
      howToAnswer_en: 'Laravel 11 introduced a massively streamlined directory structure to reduce file clutter. Legacy directories and files like app/Http/Kernel.php, app/Console/Kernel.php, and app/Exceptions/Handler.php have been completely removed. Routing, global middlewares, route aliases, scheduled console commands, and centralized exception handling are now all configured fluently inside the single unified bootstrap/app.php file using builder chains: Application::configure(basePath: dirname(__DIR__))->withRouting(...)->withMiddleware(function (Middleware $middleware) { ... })->withExceptions(function (Exceptions $exceptions) { ... })->create(). Config files are also consolidated and can be published only on demand.',
      howToAnswer_bn: 'লারাভেল ১১-এ ফাইলের সংখ্যা কমিয়ে কোড স্ট্রাকচার অত্যন্ত হালকা ও পরিষ্কার করা হয়েছে। পুরনো Kernel.php এবং Handler.php ফাইলগুলো পুরোপুরি বাদ দেওয়া হয়েছে। এখন সমস্ত গ্লোবাল মিডলওয়্যার, রাউটিং, শিডিউল্ড কমান্ড এবং সেন্ট্রালাইজড এক্সেপশন হ্যান্ডলিং সরাসরি bootstrap/app.php ফাইলের ভেতরে ফ্লুয়েন্ট মেথড চেইনিং দিয়ে এক জায়গায় কনফিগার করা হয়। এছাড়া কনফিগ ফাইলগুলো অপ্রয়োজনীয়ভাবে ছড়িয়ে না রেখে শুধু প্রয়োজনমতো পাবলিশ করার অপশন রাখা হয়েছে।',
      commonMistakes_en: 'Searching for Kernel.php in Laravel 11/12 to register custom middlewares.',
      commonMistakes_bn: 'লারাভেল ১১-এর ভাইভায় মিডলওয়্যার যুক্ত করতে Kernel.php-এর কথা বলা।'
    },
    {
      id: 'lar-q2',
      question_en: 'What is the Eloquent N+1 Query Problem, how does eager loading (with()) solve it, and how do you automatically prevent it during local development?',
      question_bn: 'এলকুয়েন্ট N+1 কুয়েরি সমস্যা কী, ইগার লোডিং (with()) কীভাবে এটি সমাধান করে এবং ডেভেলপমেন্টের সময় এটি স্বয়ংক্রিয়ভাবে কীভাবে রোধ করা যায়?',
      category: 'Database Performance',
      whyAsked_en: 'The benchmark database performance question asked in every Laravel technical interview.',
      whyAsked_bn: 'ডেটাবেসের গতি শত গুণ বাড়িয়ে সার্ভার ক্র্যাশ প্রতিরোধ করার বাস্তব জ্ঞান দেখতে।',
      howToAnswer_en: 'The N+1 query problem occurs when you fetch N parent records (e.g. 100 Books) with 1 SQL query, and then access a related model in a loop (e.g. foreach ($books as $book) { echo $book->author->name; }). This executes 1 initial query plus N additional queries (101 total database queries), causing severe database bottleneck and latency. Eager loading solves this by pre-loading relationships using Book::with("author")->get(). Eloquent executes exactly 2 queries: one for all books, and a single WHERE author_id IN (...) query for all authors, mapping them in memory. In local development, we prevent accidental lazy loading by adding Model::preventLazyLoading(!app()->isProduction()) inside AppServiceProvider boot(), which throws an immediate exception during testing if any unoptimized N+1 query is introduced.',
      howToAnswer_bn: 'N+1 সমস্যা হলো ১০০টি বই ডেটাবেস থেকে আনার পর লুপের ভেতর প্রতিটি বইয়ের লেখকের নাম প্রিন্ট করতে গিয়ে আরও ১০০ বার আলাদা আলাদা ডেটাবেস কুয়েরি চালানো। এতে মোট ১০১টি কুয়েরি রান হয়ে সার্ভার মারাত্মক স্লো হয়ে যায়। ইগার লোডিং সমাধান করে Book::with("author")->get() দিয়ে। এটি প্রথমে সব বই আনে এবং দ্বিতীয় কুয়েরিতে WHERE IN দিয়ে একবারে সব লেখকের ডাটা মেমরিতে লোড করে, ফলে মাত্র ২টি কুয়েরিতেই সব কাজ শেষ হয়। আর ডেভেলপমেন্টের সময় অসাবধানতাবশত যেন কেউ এই ভুল না করে, সেজন্য AppServiceProvider-এ Model::preventLazyLoading() চালু রাখলে কোড রান করার সাথে সাথেই এরর দিয়ে ভুল ধরিয়ে দেয়।',
      commonMistakes_en: 'Using load() inside loops instead of eager loading with() before executing the query.',
      commonMistakes_bn: 'লুপের ভেতরে load() চালানো যা সমস্যা সমাধান না করে কুয়েরি সংখ্যা বাড়িয়ে দেয়।'
    },
    {
      id: 'lar-q3',
      question_en: 'What are the architectural differences between Laravel Livewire 3 and Inertia.js with React, and when should an agency choose each?',
      question_bn: 'লারাভেল লাইভওয়্যার ৩ ও ইনারশিয়া.জেএস (রিয়্যাক্ট) এর মধ্যকার পার্থক্য কী এবং এজেন্সির প্রজেক্টে কখন কোনটি বেছে নেওয়া উচিত?',
      category: 'Full-Stack Architecture',
      whyAsked_en: 'Assesses whether candidate can select the most cost-effective and productive stack for client requirements.',
      whyAsked_bn: 'ক্লায়েন্টের বাজেট ও প্রোজেক্টের ধরনের ওপর ভিত্তি করে সঠিক প্রযুক্তি বেছে নেওয়ার সিদ্ধান্ত নেওয়ার ক্ষমতা যাচাই করতে।',
      howToAnswer_en: 'Livewire 3 is a server-driven reactive framework where component logic and state live entirely in PHP on the server. User interactions trigger lightweight AJAX morphing requests that return updated HTML snippets, accompanied by wire:navigate for single-page app feel without writing JavaScript. It is the fastest choice for internal portals, admin systems, and rapid MVPs with small development teams. Inertia.js acts as an adapter allowing you to build a true single-page application (SPA) using React or Vue on the frontend while using classic Laravel controllers and routing on the backend without building a REST API. Inertia is preferred for complex, highly interactive, animations-heavy consumer web apps where client-side state manipulation (offline support, dragging, complex canvas) justifies a dedicated JavaScript component tree.',
      howToAnswer_bn: 'লাইভওয়্যার ৩ হলো সার্ভার-চালিত ফ্রেমওয়ার্ক যেখানে সমস্ত লজিক পিএইচপিতে থাকে এবং পেজ রিলোড ছাড়াই সার্ভার থেকে সরাসরি এইচটিএমএল আপডেট হয়ে যায়। আলাদা কোনো জাভাস্ক্রিপ্ট না লিখে দ্রুত ই-কমার্স, স্কুল বা হাসপাতাল ম্যানেজমেন্টের মতো প্রজেক্ট ডেলিভারি দেওয়ার জন্য লাইভওয়্যার সেরা। অন্যদিকে ইনারশিয়া.জেএস ক্লাসিক লারাভেল কন্ট্রোলারের সাথে ফ্রন্টএন্ডে রিয়্যাক্ট বা ভিউ যুক্ত করে দেয় কোনো আলাদা এপিআই বানানো ছাড়াই। যেসব কনজিউমার অ্যাপে প্রচুর ক্লায়েন্ট-সাইড ড্র্যাগ অ্যান্ড ড্রপ বা জটিল অ্যানিমেশন থাকে, সেখানে ইনারশিয়া রিয়্যাক্ট ব্যবহার করা বেশি কার্যকর।',
      commonMistakes_en: 'Thinking Livewire requires React or Vue; it relies purely on PHP and lightweight Alpine.js.',
      commonMistakes_bn: 'মনে করা যে লাইভওয়্যার চালাতে রিয়্যাক্ট জানা জরুরি, এটি সম্পূর্ণ পিএইচপি ও ব্লেডের ওপর চলে।'
    },
    {
      id: 'lar-q4',
      question_en: 'How do background queues in Laravel work with Redis, and how does Laravel Horizon help monitor job retries and failed transactions?',
      question_bn: 'লারাভেল ব্যাকগ্রাউন্ড কিউ কীভাবে রেডিসের সাথে কাজ করে এবং ফেইল্ড ট্রানজ্যাকশন ও রিট্রাই মনিটর করতে লারাভেল হরাইজন কীভাবে সাহায্য করে?',
      category: 'Queues & Scaling',
      whyAsked_en: 'Tests whether candidate understands asynchronous processing so slow operations like payment processing or email dispatch never freeze the UI.',
      whyAsked_bn: 'ভারী কাজের কারণে ওয়েবসাইট যাতে গ্রাহকদের জন্য ধীরগতির না হয় তা নিশ্চিত করার আর্কিটেকচারাল জ্ঞান দেখতে।',
      howToAnswer_en: 'When a controller dispatches a job (e.g. GenerateInvoicePdf::dispatch($order)), Laravel serializes the job payload and pushes it onto an in-memory Redis list rather than executing it synchronously. Background queue workers (php artisan queue:work redis) continuously pop jobs and execute them independently from the user HTTP request, keeping API response latency under 100ms. If an external SMS gateway or payment webhook fails, the job can be configured with automatic retries ($tries = 3) and exponential backoff ($backoff = [10, 60, 300] seconds). Laravel Horizon provides an enterprise dashboard for Redis queues displaying real-time job throughput, memory utilization, runtime metrics, and allowing one-click retries for failed jobs directly from a clean web UI.',
      howToAnswer_bn: 'লারাভেলে কোনো ভারী কাজ আসলে (যেমন পিডিএফ ইনভয়েস তৈরি বা ইমেইল পাঠানো) কন্ট্রোলার কাজটি সাথে সাথে না করে রেডিস মেমরিতে জমা করে দেয় এবং ব্যবহারকারীকে তৎক্ষণাৎ সাকসেস মেসেজ দেখিয়ে দেয়। ব্যাকগ্রাউন্ডে কিউ ওয়ার্কার রেডিস থেকে এক এক করে কাজ সম্পন্ন করে। যদি কোনো কারণে এসএমএস পাঠানো ব্যর্থ হয়, তবে অটো-রিট্রাই কনফিগার করে ১০ সেকেন্ড বা ১ মিনিট পর পুনরায় চেষ্টা করার নিয়ম রাখা যায়। আর লারাভেল হরাইজন একটি দৃষ্টিনন্দন রিয়েল-টাইম ড্যাশবোর্ড দেয় যার মাধ্যমে কোন জব ফেইল করল তা এক ক্লিকে দেখা যায় এবং পুনরায় রিট্রাই করা যায়।',
      commonMistakes_en: 'Running synchronous database queue drivers in high-traffic production environments instead of Redis in-memory queues.',
      commonMistakes_bn: 'লাইভ সাইটে রেডিসের বদলে ডেটাবেস কিউ ড্রাইভার ব্যবহার করে ডেটাবেস সার্ভার স্লো করে ফেলা।'
    }
  ],
  freeCerts: [
    {
      id: 'laracasts-laravel-beginner',
      title_en: 'Laracasts: Laravel 11 from Scratch (Comprehensive Free Course)',
      title_bn: 'ল্যারাকাস্টস: লারাভেল ১১ ফ্রম স্ক্র্যাচ অফিশিয়াল কোর্স',
      provider: 'Laracasts',
      url: 'https://laracasts.com/series/30-days-to-learn-laravel-11',
      mobileAccessible: true,
      language: 'en',
      durationHours: 30,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'The global benchmark learning platform for PHP and Laravel created by Jeffrey Way covering modern routing, Blade, and Eloquent.',
      relevance_bn: 'বিশ্বখ্যাত জেফরি ওয়ে পরিচালিত লারাভেলের অফিশিয়াল স্ট্যান্ডার্ড প্র্যাকটিক্যাল কোর্স।'
    },
    {
      id: 'php-the-right-way',
      title_en: 'PHP: The Right Way (Modern PHP 8+ Standards)',
      title_bn: 'পিএইচপি: দ্য রাইট ওয়ে (আধুনিক স্ট্যান্ডার্ড গাইড)',
      provider: 'The PHP League',
      url: 'https://phptherightway.com/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 20,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'The official community guide for clean OOP coding standards, PSR adherence, dependency injection, and secure practices in modern PHP.',
      relevance_bn: 'আধুনিক পিএইচপির সেরা কোডিং প্র্যাকটিস ও অবজেক্ট ওরিয়েন্টেড গাইডলাইন।'
    },
    {
      id: 'filament-official-course',
      title_en: 'Filament Official: Rapid Admin Dashboard Development',
      title_bn: 'ফিলামেন্ট অফিশিয়াল: র‍্যাপিড এডমিন ড্যাশবোর্ড কোর্স',
      provider: 'FilamentPHP',
      url: 'https://filamentphp.com/docs',
      mobileAccessible: true,
      language: 'en',
      durationHours: 15,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official interactive documentation and tutorials for building rapid full-stack dashboards, tables, and form builders.',
      relevance_bn: 'ফিলামেন্টের নিজস্ব অফিশিয়াল ডকুমেন্টেশন ও এডমিন প্যানেল প্রজেক্ট টিউটোরিয়াল।'
    }
  ]
};
