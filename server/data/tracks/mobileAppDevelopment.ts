import type { CareerTrack } from '../../../shared/types.js';

export const mobileAppDevelopmentTrack: Omit<CareerTrack, 'id'> = {
  slug: 'mobile-app-development',
  title_en: 'Mobile App Engineering: Flutter 3.24+, Riverpod & Offline-First Architecture (2026 Edition)',
  title_bn: 'মোবাইল অ্যাপ ইঞ্জিনিয়ারিং: ফ্লাটার ৩.২৪, রিভারপড ও অফলাইন-ফার্স্ট আর্কিটেকচার (২০২৬ এডিশন)',
  summary_en: 'Calibrated for late 2026. Cross-platform engineering with Dart 3 and Flutter 3.24+, Riverpod 2 / Bloc reactive state management, offline-first SQLite with Drift, on-device AI inference with MediaPipe/ONNX, and automated CI/CD deployment.',
  summary_bn: '২০২৬ সালের আধুনিক মোবাইল অ্যাপ্লিকেশন ডেভেলপমেন্ট। ডার্ট ৩ ও ফ্লাটার ৩.২৪, রিভারপড ২ স্টেট ম্যানেজমেন্ট, ড্রিফট দিয়ে অফলাইন-ফার্স্ট ডেটাবেস, অন-ডিভাইস এআই মডেল এবং স্বয়ংক্রিয় প্লে-স্টোর ডিপ্লয়মেন্ট।',
  pivotAdvice_en: 'In 2026, copy-pasting basic Flutter UI widgets is solved instantly by AI. Companies in Dhaka, Singapore, and remote studios hire mobile engineers who master offline-first data sync architectures, smooth 120Hz frame rendering, secure keystore storage for auth tokens, and robust automated testing.',
  pivotAdvice_bn: '২০২৬ সালে সাধারণ মোবাইল স্ক্রিন ডিজাইন এআই দিয়ে মুহূর্তেই তৈরি করা যায়। ঢাকা ও বিদেশি কোম্পানিগুলো এখন এমন মোবাইল ইঞ্জিনিয়ার খোঁজে যারা অফলাইনেও ইন্টারনেট ছাড়াই নিরবচ্ছিন্ন অ্যাপ চলা নিশ্চিত করতে পারে, মসৃণ ১২০ হার্টজ রিফ্রেশ রেট আর্কিটেকচার বোঝে এবং ফোনে অন-ডিভাইস এআই যুক্ত করতে পারে।',
  minPcRequired: 'standard',
  dayToDay_en: [
    'Writing high-performance Dart 3 code with strict null safety and clean architectural separation of UI and business logic.',
    'Managing reactive state machines and asynchronous data streams using Riverpod 2 or Bloc pattern.',
    'Implementing offline-first mobile architecture using Drift/SQLite with background bidirectional sync workers.',
    'Integrating on-device edge AI models using MediaPipe or ONNX Runtime for local OCR, face detection, and smart filters.',
    'Automating signed Android APK / App Bundle generation and iOS builds using Fastlane within GitHub Actions.'
  ],
  dayToDay_bn: [
    'ডার্ট ৩ এবং ফ্লাটার ৩.২৪ দিয়ে উচ্চগতির ও মসৃণ ১২০ হার্টজ রেসপনসিভ মোবাইল অ্যাপ তৈরি করা।',
    'রিভারপড ২ (Riverpod) দিয়ে স্টেট ম্যানেজমেন্ট পরিচালনা ও অ্যাসিনক্রোনাস ডেটা স্ট্রিম হ্যান্ডেল করা।',
    'ড্রিফট ও এসকিউলাইট দিয়ে অফলাইন-ফার্স্ট আর্কিটেকচার তৈরি যা নেটওয়ার্ক না থাকলেও ডাটা সেভ রাখে ও পরে সিঙ্ক করে।',
    'মিডিয়াপাইপ ও ওএনএনএক্স দিয়ে মোবাইলের নিজস্ব চিপসেই অফলাইন এআই ও ইমেজ প্রসেসিং চালানো।',
    'ফাস্টলেন (Fastlane) ও গিটহাব দিয়ে স্বয়ংক্রিয়ভাবে প্লে-স্টোরে রিলিজ ও এপিকে বিল্ড অটোমেশন নিশ্চিত করা।'
  ],
  mustHaveSkills: [
    {
      id: 'dart3-flutter-core',
      name: 'Dart 3 & Flutter 3.24+ Framework',
      category: 'Core Mobile',
      importance: 'Essential',
      description_en: 'Pattern matching, records, sealed classes, widget tree rendering, CustomPainter, and 120Hz smooth scrolling.',
      description_bn: 'ডার্ট ৩ প্যাটার্ন ম্যাচিং, রেকর্ডস, কাস্টম পেইন্টার এবং মসৃণ ১২০ হার্টজ অ্যানিমেশন উইজেট।'
    },
    {
      id: 'riverpod-bloc-state',
      name: 'Riverpod 2 / Bloc State Architecture',
      category: 'State Architecture',
      importance: 'Essential',
      description_en: 'AsyncValue handling, auto-dispose providers, family modifiers, and unidirectional data flow (UDF).',
      description_bn: 'রিভারপড ২ দিয়ে ইউনিডিরেকশনাল ডেটা ফ্লো এবং মেমরি লিক ছাড়া ক্যাশিং ও স্টেট কন্ট্রোল।'
    },
    {
      id: 'offline-first-drift-sqlite',
      name: 'Offline-First Architecture & Drift/SQLite',
      category: 'Local Persistence',
      importance: 'Essential',
      description_en: 'Relational local SQLite schemas, reactive stream queries, optimistic UI updates, and conflict resolution.',
      description_bn: 'ড্রিফট রিলেশনাল ডেটাবেস দিয়ে নেটওয়ার্ক ছাড়াই অ্যাপের কাজ চলা এবং লাইভ ডেটাবেস সিঙ্ক।'
    },
    {
      id: 'mobile-ai-fastlane-cicd',
      name: 'On-Device AI & Fastlane CI/CD Automation',
      category: 'Advanced Mobile',
      importance: 'Essential',
      description_en: 'MediaPipe / ONNX on-device vision inference, secure flutter_secure_storage, and automated Fastlane deployments.',
      description_bn: 'মোবাইলের ভেতরেই লোকাল এআই প্রসেসিং এবং ফাস্টলেন দিয়ে গুগল প্লে-স্টোরে অটোমেটেড রিলিজ।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Uttara, Banani, Mirpur, Kawran Bazar Tech Hubs) & Remote BD',
      entrySalary: { min: 30000, max: 50000, currency: 'BDT', formatted: '30,000 - 50,000 BDT' },
      midSalary: { min: 65000, max: 135000, currency: 'BDT', formatted: '65,000 - 135,000 BDT' },
      seniorSalary: { min: 150000, max: 320000, currency: 'BDT', formatted: '150,000 - 320,000 BDT' },
      hiringSectors: [
        'Ride Sharing, Delivery & Logistics Giants (Pathao, Shohoz, Chaldal, Foodpanda)',
        'Fintech Wallets & Digital Commercial Banking (bKash, Nagad, Cellfin, Upay)',
        'Mobile Product Startups & Offshore Software Agencies in Dhaka'
      ],
      cvExpectations: [
        'At least one published app on Google Play Store or verifiable signed APK link in GitHub README',
        'Clean implementation of Riverpod 2 or Bloc state management separating UI from business logic',
        'Demonstrated offline-first caching capability handling zero-connectivity gracefully',
        'Diploma in CST with clear architectural communication during technical viva'
      ],
      localDemandSummary_en: 'Over 85% of internet users in Bangladesh access services exclusively through smartphones. Companies investing in mobile commerce and fintech prioritize cross-platform Flutter engineers who can ship reliable apps on both Android and iOS simultaneously, rewarding CST graduates with competitive remuneration.',
      localDemandSummary_bn: 'বাংলাদেশে অধিকাংশ মানুষ মোবাইলের মাধ্যমেই কেনাকাটা ও ব্যাংকিং লেনদেন করে। ফলে ফ্লাটার দিয়ে একসাথে অ্যান্ড্রয়েড ও আইওএস অ্যাপ বানাতে পারা প্রকৌশলীদের চাকরির বাজারে সবসময় প্রচণ্ড চাহিদা থাকে।'
    },
    targetCountries: [
      {
        region: 'Southeast Asia',
        countryName_en: 'Singapore, Malaysia & Indonesia',
        countryName_bn: 'সিঙ্গাপুর, মালয়েশিয়া ও ইন্দোনেশিয়া',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Super-app platforms actively recruit mobile developers with strong state management and performance optimization portfolios.',
        visaReality_bn: 'দক্ষ মোবাইল অ্যাপ ডেভেলপারদের জন্য দক্ষিণ-পূর্ব এশিয়ার সুপার-অ্যাপ কোম্পানিগুলোতে আকর্ষণীয় কাজের সুযোগ রয়েছে।',
        averageSalaryUsdOrLocal: '$2,600 - $5,200 USD / month',
        requiredExperienceYears: '2 to 4 years'
      },
      {
        region: 'Middle East',
        countryName_en: 'United Arab Emirates & Saudi Arabia',
        countryName_bn: 'সংযুক্ত আরব আমিরাত ও সৌদি আরব',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Retail brands and government service apps in Dubai hire Flutter developers with published store apps.',
        visaReality_bn: 'দুবাই ও সৌদি আরবের বিভিন্ন করপোরেট অ্যাপ তৈরিতে আন্তর্জাতিক মোবাইল প্রকৌশলীদের দ্রুত ভিসা স্পনসর করা হয়।',
        averageSalaryUsdOrLocal: '12,000 - 22,000 AED / month (approx 380,000 - 700,000 BDT)',
        requiredExperienceYears: '2 to 4 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$1,200 - $4,500 USD',
      competitionLevel: 'Moderate to High',
      competitionLevel_bn: 'মাঝারি থেকে তীব্র',
      englishRequirement: 'Professional English to collaborate in mobile sprint planning and explain performance profiling benchmarks',
      englishRequirement_bn: 'অ্যাপের পারফরম্যান্স ও ট্রাবলশুটিং নিয়ে বিদেশি দলের সাথে নিয়মিত যোগাযোগ করার মতো সাবলীল ইংরেজি',
      realities_en: [
        'Global startups hire remote Flutter engineers to build their MVP cross-platform apps at low development costs.',
        'A working Google Play Store link or TestFlight link on your CV gives you instant priority over 90% of applicants.'
      ],
      realities_bn: [
        'বিদেশি কোম্পানিগুলো তাদের নতুন মোবাইল অ্যাপ দ্রুত লঞ্চ করার জন্য দূরবর্তী ফ্লাটার ডেভেলপার হায়ার করে।',
        'সিভিতে সরাসরি গুগল প্লে-স্টোরের লাইভ অ্যাপ লিংক থাকলে তা যেকোনো ইন্টারভিউতে সবচেয়ে বড় শক্তি হিসেবে কাজ করে।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Dart 3 Core, Null Safety, Flutter 3.24+ Widgets & Clean UI',
      phaseTitle_bn: 'ডার্ট ৩ কোর, নাল সেফটি, ফ্লাটার ৩.২৪ উইজেট ও মসৃণ ইউআই',
      phaseSubtitle_en: 'Master modern Dart syntax, widget lifecycles, and 120Hz smooth layouts.',
      phaseSubtitle_bn: 'ডার্ট প্রোগ্রামিং, উইজেট লাইফসাইকেল ও রেসপনসিভ মোবাইল লেআউট।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mob-p1-m1',
          title_en: 'Modern Dart 3: Pattern Matching, Records & Sound Null Safety',
          title_bn: 'আধুনিক ডার্ট ৩: প্যাটার্ন ম্যাচিং, রেকর্ডস ও সাউন্ড নাল সেফটি',
          description_en: 'Learn Dart 3 records for multiple returns, sealed classes for state modeling, switch expressions with pattern matching, and null safety.',
          description_bn: 'ডার্ট ৩-এর নতুন রেকর্ডস ফিচার, সিলড ক্লাসেস এবং নাল পয়েন্টার এক্সেপশন প্রতিরোধ করার নিয়ম।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['Dart 3 Records & Patterns', 'Sealed Classes for State', 'Sound Null Safety (? and !)', 'Asynchronous Streams & Futures'],
          practicalTask_en: 'Write a modular Dart 3 data parsing library that uses sealed classes and pattern matching to handle Loading, Success, and Error states cleanly.',
          practicalTask_bn: 'ডার্ট ৩ দিয়ে একটি স্টেট মডেল বানাও যা প্যাটার্ন ম্যাচিং ব্যবহার করে লোডিং, সাকসেস ও এরর হ্যান্ডেল করে।'
        },
        {
          id: 'mob-p1-m2',
          title_en: 'Flutter 3.24+ Widget Hierarchy, CustomPainter & 120Hz Scrolling',
          title_bn: 'ফ্লাটার ৩.২৪ উইজেট ট্রি, কাস্টম পেইন্টার ও মসৃণ স্ক্রলিং',
          description_en: 'Master stateless vs stateful lifecycles, CustomScrollView, Sliver widgets, avoid unnecessary widget rebuilds with const constructors, and use RepaintBoundary.',
          description_bn: 'উইজেট লাইফসাইকেল, স্লিভার স্ক্রলিং এবং ১২০ হার্টজ স্ক্রিনে মসৃণ ফ্রেম ধরে রাখার মেমরি অপ্টিমাইজেশন।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Widget Tree vs Element Tree', 'CustomScrollView & Slivers', 'RepaintBoundary optimization', 'Const constructors & build methods'],
          practicalTask_en: 'Build a high-performance eCommerce product feed with sliver app bars, hero animations, and smooth 120fps scrolling verified on Flutter DevTools.',
          practicalTask_bn: 'ফ্লাটার দিয়ে একটি ই-কমার্স ফিড স্ক্রিন বানাও যা দ্রুত স্ক্রল করলেও এক ফ্রেমও ড্রপ করে না।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Reactive State Management (Riverpod / Bloc) & REST/WebSockets',
      phaseTitle_bn: 'রিভারপড ২ / ব্লক স্টেট ম্যানেজমেন্ট ও লাইভ এপিআই নেটওয়ার্কিং',
      phaseSubtitle_en: 'Decouple business logic from widgets and manage asynchronous states.',
      phaseSubtitle_bn: 'ইউআই থেকে বিজনেস লজিক আলাদা করা এবং লাইভ এপিআই কানেকশন।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mob-p2-m1',
          title_en: 'Riverpod 2 Architecture: Providers, AsyncNotifier & Modifiers',
          title_bn: 'রিভারপড ২ আর্কিটেকচার: প্রভাইডার্স, অ্যাসিঙ্ক নোটিফায়ার ও মডিফায়ার',
          description_en: 'Implement unidirectional data flow using Riverpod 2 code generation (@riverpod), AsyncValue.when() pattern, and autoDispose to prevent memory leaks.',
          description_bn: 'রিভারপড ২ দিয়ে অ্যাপের ডেটা ম্যানেজ করা এবং মেমরি লিক এড়াতে অটো-ডিসপোজ ব্যবহার।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Riverpod 2 CodeGen', 'AsyncNotifierProvider', 'family & autoDispose modifiers', 'AsyncValue.when pattern'],
          practicalTask_en: 'Build a shopping cart feature using Riverpod AsyncNotifier that persists across screens and handles optimistic quantity updates.',
          practicalTask_bn: 'রিভারপড ব্যবহার করে একটি শপিং কার্ট বানাও যেখানে প্রডাক্টের সংখ্যা পরিবর্তন করলে তাৎক্ষণিক ইউআই আপডেট হয়।'
        },
        {
          id: 'mob-p2-m2',
          title_en: 'REST APIs with Dio, JWT Interceptors & WebSocket Streams',
          title_bn: 'ডিও (Dio) দিয়ে এপিআই কল, ইন্টারসেপ্টর ও ওয়েব-সকেট স্ট্রিমিং',
          description_en: 'Configure Dio HTTP client with logging, automatic 401 token refresh interceptors, and subscribe to real-time WebSocket price updates.',
          description_bn: 'ডিও দিয়ে এপিআই কল করা, টোকেন মেয়াদ শেষ হলে ব্যাকগ্রাউন্ডে স্বয়ংক্রিয় রিফ্রেশ করা এবং লাইভ ওয়েব-সকেট ডাটা দেখানো।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Dio HTTP Client', 'QueuedInterceptors for Token Refresh', 'flutter_secure_storage', 'WebSocketChannel for Live Feeds'],
          practicalTask_en: 'Implement an authentication repository that stores JWTs in Android Keystore / iOS Keychain and auto-refreshes tokens transparently.',
          practicalTask_bn: 'একটি নিরাপদ অথেনটিকেশন মডিউল বানাও যা মোবাইলের সুরক্ষিত স্টোরেজে টোকেন সেভ রাখে এবং মেয়াদ ফুরালে নিজে নিজে রিনিউ করে।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Offline-First Architecture (Drift/SQLite) & Local Caching',
      phaseTitle_bn: 'অফলাইন-ফার্স্ট আর্কিটেকচার (Drift/SQLite) ও লোকাল ক্যাশিং',
      phaseSubtitle_en: 'Build apps that function with zero internet and sync automatically.',
      phaseSubtitle_bn: 'ইন্টারনেট ছাড়াই কাজ করা অফলাইন অ্যাপ তৈরি ও স্বয়ংক্রিয় ব্যাকগ্রাউন্ড সিঙ্ক।',
      durationWeeks: 5,
      modules: [
        {
          id: 'mob-p3-m1',
          title_en: 'Local Relational Database with Drift (Type-Safe SQLite for Flutter)',
          title_bn: 'ড্রিফট (Drift) দিয়ে টাইপ-সেফ এসকিউলাইট রিলেশনাল ডেটাবেস',
          description_en: 'Define type-safe tables, foreign key relations, DAOs (Data Access Objects), and watch queries that emit reactive streams on data updates.',
          description_bn: 'ড্রিফট লাইব্রেরি দিয়ে মোবাইলের ভেতর নিজস্ব রিলেশনাল ডেটাবেস তৈরি ও ডেটা বদলানোর সাথে সাথে ইউআইতে রিয়েল-টাইম আপডেট পাওয়া।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Drift Schema Tables', 'DAOs & Reactive Streams', 'Database Migrations', 'Transactions in SQLite'],
          practicalTask_en: 'Create a local task management schema with Projects and Tasks tables in Drift, with reactive stream queries updating the UI instantly.',
          practicalTask_bn: 'ড্রিফট দিয়ে একটি অফলাইন টাস্ক ম্যানেজার তৈরি করো যা কোনো ইন্টারনেট ছাড়াই সম্পূর্ণ কাজ করতে পারে।'
        },
        {
          id: 'mob-p3-m2',
          title_en: 'Bidirectional Sync, Conflict Resolution & Connectivity Audits',
          title_bn: 'দ্বিমুখী ডেটা সিঙ্ক, কনফ্লিক্ট সমাধান ও কানেক্টিভিটি চেকার',
          description_en: 'Detect network drops using connectivity_plus, queue outgoing mutations in local storage, and sync to backend with last-write-wins timestamps.',
          description_bn: 'ইন্টারনেট চলে গেলে কাজ জমিয়ে রাখা এবং নেটওয়ার্ক ফিরে আসার সাথে সাথে ব্যাকগ্রাউন্ডে সার্ভারের সাথে মিলিয়ে নেওয়া।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['connectivity_plus plugin', 'Offline Mutation Queue', 'Timestamp Conflict Resolution', 'Optimistic UI Updates'],
          practicalTask_en: 'Build an offline-first notes app that allows creating and editing notes offline, then syncs automatically once an internet connection is re-established.',
          practicalTask_bn: 'একটি অফলাইন নোটস অ্যাপ বানাও যা ইন্টারনেট আসার সাথে সাথে নিজে নিজে সার্ভারের ডেটার সাথে সিঙ্ক হয়ে যায়।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Push Notifications, On-Device AI, Fastlane CI/CD & Viva',
      phaseTitle_bn: 'পুশ নোটিফিকেশন, অন-ডিভাইস এআই, ফাস্টলেন সিআই/সিডি ও ভাইভা',
      phaseSubtitle_en: 'Implement background messaging, edge AI, automated store deployment, and viva prep.',
      phaseSubtitle_bn: 'ব্যাকগ্রাউন্ড নোটিফিকেশন, লোকাল এআই প্রসেসিং, প্লে-স্টোর রিলিজ ও চাকরি ভাইভা।',
      durationWeeks: 5,
      modules: [
        {
          id: 'mob-p4-m1',
          title_en: 'Firebase Cloud Messaging (FCM) & Local Notifications',
          title_bn: 'ফায়ারবেস ক্লাউড মেসেজিং (FCM) ও লোকাল ব্যাকগ্রাউন্ড নোটিফিকেশন',
          description_en: 'Configure APNs for iOS and FCM for Android. Handle foreground, background, and terminated push notification payloads with deep-linking.',
          description_bn: 'অ্যান্ড্রয়েড ও আইওএসে ব্যাকগ্রাউন্ড পুশ নোটিফিকেশন সেট করা এবং নোটিফিকেশনে ক্লিক করলে নির্দিষ্ট পেজে নিয়ে যাওয়ার ডিপ-লিংকিং।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['Firebase Cloud Messaging', 'flutter_local_notifications', 'Handling Background Messages', 'Deep Linking (go_router)'],
          practicalTask_en: 'Configure push notifications with action buttons and deep linking so tapping a promo notification navigates directly to the specific deal page.',
          practicalTask_bn: 'একটি নোটিফিকেশন সিস্টেম বানাও যা অ্যাপ বন্ধ থাকলেও নোটিফিকেশন দেখায় এবং ক্লিক করলে নির্দিষ্ট প্রোডাক্ট পেজে নিয়ে যায়।'
        },
        {
          id: 'mob-p4-m2',
          title_en: 'On-Device Mobile AI Inference with MediaPipe / ONNX',
          title_bn: 'মোবাইলে অন-ডিভাইস এআই ইনফারেন্স (MediaPipe / ONNX)',
          description_en: 'Run lightweight vision and NLP models on the smartphone chip without internet or cloud API costs using Google MediaPipe or ONNX Runtime.',
          description_bn: 'কোনো ইন্টারনেট ও ক্লাউড খরচ ছাড়াই সরাসরি মোবাইলের প্রসেসরে এআই মডেল চালিয়ে টেক্সট রিকগনিশন বা ফেস ডিটেকশন করা।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['Google MediaPipe in Flutter', 'ONNX Runtime Mobile', 'Camera Controller Streams', 'Low-Latency Local Inference'],
          practicalTask_en: 'Build a document card scanner using on-device OCR that detects text and ID numbers directly from live camera frames without cloud calls.',
          practicalTask_bn: 'একটি লাইভ কার্ড স্ক্যানার বানাও যা ক্যামেরা থেকে কোনো ইন্টারনেট ছাড়াই অফলাইনে আইডি কার্ডের টেক্সট পড়ে দিতে পারে।'
        },
        {
          id: 'mob-p4-m3',
          title_en: 'Fastlane CI/CD Automation, Play Store Release & Mobile Viva',
          title_bn: 'ফাস্টলেন সিআই/সিডি অটোমেশন, প্লে-স্টোর রিলিজ ও মোবাইল ভাইভা',
          description_en: 'Automate signed AAB bundle builds using Fastlane in GitHub Actions, publish to Google Play Console testing tracks, and ace technical mobile viva.',
          description_bn: 'গিটহাবে কোড পুশ করলেই স্বয়ংক্রিয়ভাবে প্লে-স্টোর টেস্ট ট্র্যাকে অ্যাপ আপলোড হওয়া এবং ইন্টারভিউয়ের সেরা প্রস্তুতি।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Fastlane Match and Supply', 'Google Play Developer API', 'Mobile Architecture Viva', 'CV Play Store Links'],
          practicalTask_en: 'Publish a functional Flutter app on Google Play Store or distribute signed APK releases via GitHub Releases with clear documentation.',
          practicalTask_bn: 'তোমার ফ্লাটার অ্যাপটি সফলভাবে গুগল প্লে-স্টোরে অথবা গিটহাব রিলিজে পাবলিশ করে তার লিংক সিভিতে যুক্ত করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'mob-q1',
      question_en: 'What is the relationship between the Widget Tree, Element Tree, and RenderObject Tree in Flutter, and how does RepaintBoundary optimize rendering?',
      question_bn: 'ফ্লাটারে উইজেট ট্রি, এলিমেন্ট ট্রি ও রেন্ডারঅবজেক্ট ট্রির মধ্যকার সম্পর্ক কী এবং RepaintBoundary কীভাবে স্ক্রলিং পারফরম্যান্স উন্নত করে?',
      category: 'Flutter Internals',
      whyAsked_en: 'Separates basic widget designers from genuine engineers who understand Flutter underlying graphics pipeline and frame budget.',
      whyAsked_bn: 'প্রার্থী ফ্লাটারের অভ্যন্তরীণ গ্রাফিক্স ইঞ্জিন ও ফ্রেম ড্রপ প্রতিরোধের গণিত বোঝে কি না তা পরীক্ষা করতে।',
      howToAnswer_en: '1) Widget Tree is lightweight and immutable: configurations declaring how UI should look, recreated frequently with minimal cost. 2) Element Tree is the long-lived structural spine managing widget lifecycles and holding references to parent/child and underlying RenderObjects. Elements compare old and new widget configurations via canUpdate() (matching runtimeType and key) to decide whether to update or create a new RenderObject. 3) RenderObject Tree handles heavy visual calculations: layout (constraints go down, sizes go up) and painting pixels onto the Skia/Impeller canvas. Wrapping an intensive animated or scrolling subtree with RepaintBoundary creates an isolated painting layer. When that child rebuilds, Flutter repaints only that specific isolated layer rather than repainting the entire ancestor screen, preserving the 16.6ms (60fps) or 8.3ms (120fps) frame budget.',
      howToAnswer_bn: '১) উইজেট ট্রি হলো লাইটওয়েট কনফিগারেশন যা প্রতিবার স্ক্রিন পরিবর্তনের সাথে পুনর্নির্মিত হয়। ২) এলিমেন্ট ট্রি হলো দীর্ঘস্থায়ী কাঠামো যা উইজেট ও রেন্ডারঅবজেক্টের সংযোগ রক্ষা করে। এটি চেক করে দেখে পুরো অবজেক্ট নতুন করে বানাতে হবে নাকি শুধু মান আপডেট করলেই চলবে। ৩) রেন্ডারঅবজেক্ট ট্রি হলো ভারী ইঞ্জিন যা স্ক্রিনের সাইজ হিসাব করে এবং পিক্সেল ড্র করে। কোনো অ্যানিমেটেড বা স্ক্রলিং উইজেটকে RepaintBoundary দিয়ে ঘিরে দিলে এটি একটি আলাদা পেইন্টিং লেয়ার তৈরি করে। ফলে ভেতরে পরিবর্তন হলেও পুরো স্ক্রিন রি-পেইন্ট হয় না, যার ফলে ১২০ হার্টজ স্ক্রিনেও এক ফ্রেম ড্রপ ছাড়া মাখনের মতো মসৃণ স্ক্রলিং পাওয়া যায়।',
      commonMistakes_en: 'Thinking widgets directly paint pixels onto the phone screen, ignoring Elements and RenderObjects.',
      commonMistakes_bn: 'মনে করা যে উইজেট নিজেই সরাসরি স্ক্রিনে পিক্সেল আঁকে, এর পেছনের রেন্ডারঅবজেক্টের কথা না জানা।'
    },
    {
      id: 'mob-q2',
      question_en: 'Why is Riverpod 2 preferred over traditional ChangeNotifier/Provider in modern production applications?',
      question_bn: 'আধুনিক প্রোডাকশন অ্যাপ্লিকেশনে সনাতন ChangeNotifier বা Provider-এর চেয়ে রিভারপড ২ (Riverpod) কেন বেশি নির্ভরযোগ্য ও জনপ্রিয়?',
      category: 'State Architecture',
      whyAsked_en: 'Tests candidate experience with architectural maintainability and avoiding common memory leaks.',
      whyAsked_bn: 'অ্যাপ যাতে বড় হওয়ার সাথে সাথে স্লো বা মেমরি লিকের শিকার না হয় তা নিশ্চিত করার বাস্তব জ্ঞান দেখতে।',
      howToAnswer_en: 'Traditional Provider relies entirely on the Flutter BuildContext widget tree. If you attempt to read a provider without a valid context (e.g. inside background services or navigation callbacks), it throws runtime ProviderNotFoundException. Riverpod is completely compile-safe and independent of BuildContext, catching dependency errors at compile time. Secondly, Riverpod introduces AsyncValue with built-in pattern matching (.when(data, error, loading)), eliminating messy manual boolean flags (isLoading, errorMessage). Thirdly, Riverpod provides autoDispose, which automatically garbage-collects providers and closes open database/stream connections the moment the associated screen is popped, completely eliminating memory leaks.',
      howToAnswer_bn: 'আগের প্রোভাইডার পুরোপুরি বিল্ড-কনটেক্সটের (BuildContext) ওপর নির্ভরশীল ছিল, যার ফলে ব্যাকগ্রাউন্ডে বা পেজ পরিবর্তনের সময় ProviderNotFoundException এরর দিয়ে অ্যাপ ক্র্যাশ করত। রিভারপড কনটেক্সটের ওপর নির্ভরশীল নয়, ফলে কোড রান করার আগেই কম্পাইল টাইমে যেকোনো ভুল ধরা পড়ে। এছাড়া এতে AsyncValue থাকায় আলাদা করে isLoading ভ্যারিয়েবল নিয়ে মাথা ঘামাতে হয় না। আর সবচেয়ে বড় সুবিধা হলো autoDispose, যা দিয়ে স্ক্রিন বন্ধ করার সাথে সাথে মেমরি ও ডেটাবেস কানেকশন নিজে থেকেই পরিষ্কার হয়ে যায়, ফলে অ্যাপ কখনো স্লো হয় না।',
      commonMistakes_en: 'Storing mutable state directly in global variables without provider encapsulation.',
      commonMistakes_bn: 'গ্লোবাল ভ্যারিয়েবলে ডাটা রেখে মেমরি লিক তৈরি করা।'
    },
    {
      id: 'mob-q3',
      question_en: 'How do you architect an offline-first mobile app using Drift / SQLite, and how do you resolve data synchronization conflicts?',
      question_bn: 'ড্রিফট / এসকিউলাইট দিয়ে অফলাইন-ফার্স্ট মোবাইল অ্যাপ কীভাবে ডিজাইন করবেন এবং ডাটা সিঙ্ক করার সময় কনফ্লিক্ট কীভাবে সমাধান করা হয়?',
      category: 'Offline Architecture',
      whyAsked_en: 'Crucial for real-world reliability in emerging markets like Bangladesh where mobile internet connectivity is frequently interrupted.',
      whyAsked_bn: 'বাংলাদেশে দুর্বল নেটওয়ার্কেও যাতে অ্যাপ সবসময় বাগমুক্ত ও নিরবচ্ছিন্ন কাজ করে তা নিশ্চিত করার কৌশল জানতে।',
      howToAnswer_en: 'In an offline-first architecture, the local Drift/SQLite database is the Single Source of Truth (SSOT). When a user creates or edits a record, the app writes immediately to local SQLite and updates the UI optimistically, marking the record sync_status = "PENDING". A background synchronization service (using WorkManager or connectivity listeners) detects when internet connectivity is active and pushes queued changes to the backend API. To resolve conflicts (where the same record was edited on another device offline), we employ a Last-Write-Wins (LWW) strategy using UTC updated_at timestamps, or version vector counters. The backend processes the mutation, updates its state, and returns the canonical record, which updates the local database with sync_status = "SYNCED".',
      howToAnswer_bn: 'অফলাইন-ফার্স্ট আর্কিটেকচারে ক্লাউড সার্ভারের বদলে মোবাইলের ভেতরের ড্রিফট ডেটাবেসকে মূল ভিত্তি হিসেবে ধরা হয়। ব্যবহারকারী কিছু পরিবর্তন করলে তা তৎক্ষণাৎ লোকাল ডেটাবেসে সেভ হয়ে যায় এবং স্ক্রিনে ফলাফল দেখা যায়, সাথে স্ট্যাটাস PENDING মার্ক করা থাকে। ব্যাকগ্রাউন্ডে নেটওয়ার্ক কানেকশন পেলেই এই পেন্ডিং ডাটা সার্ভারে চলে যায়। যদি অন্য কোনো ডিভাইস থেকেও একই সময়ে পরিবর্তন আসে, তবে UTC টাইমস্ট্যাম্প দেখে যেটি সবচেয়ে শেষে তৈরি হয়েছে (Last-Write-Wins) সেটিকে বিজয়ী ধরে সার্ভার ডাটাবেস আপডেট করে এবং মোবাইলে SYNCED স্ট্যাটাস নিশ্চিত করে।',
      commonMistakes_en: 'Waiting for network HTTP responses before updating the UI, causing annoying freezing spinner dialogues for users on slow 3G networks.',
      commonMistakes_bn: 'ইন্টারনেট থেকে উত্তর না আসা পর্যন্ত স্ক্রিন লোডিং আটকে রাখা, যা দুর্বল নেটওয়ার্কে ব্যবহারকারীকে বিরক্ত করে।'
    },
    {
      id: 'mob-q4',
      question_en: 'In late 2026, when should you execute on-device AI inference using MediaPipe/ONNX versus calling cloud-hosted LLM endpoints in mobile apps?',
      question_bn: '২০২৬ সালে মোবাইল অ্যাপে কখন লোকাল অন-ডিভাইস এআই (MediaPipe/ONNX) এবং কখন ক্লাউড এআই এপিআই ব্যবহার করা উচিত?',
      category: 'Mobile AI Engineering',
      whyAsked_en: 'Assesses architectural maturity balancing smartphone battery, privacy, latency, and cloud API costs.',
      whyAsked_bn: 'মোবাইলের ব্যাটারি, ইন্টারনেটের খরচ ও সুরক্ষার ভারসাম্য রক্ষা করে সঠিক এআই সিদ্ধান্ত নেওয়ার সক্ষমতা যাচাই করতে।',
      howToAnswer_en: 'On-device AI (via MediaPipe, ONNX Runtime, or TFLite) is essential for: 1) Real-time computer vision processing camera frames at 30fps (e.g. barcode reading, live document edge detection, face tracking) where uploading video frames over cellular networks introduces fatal 1000ms+ latency and burns cellular data; 2) Zero-connectivity offline tasks (e.g. offline OCR on national ID cards); 3) Privacy-critical data where transmitting biometric images off the device violates privacy regulations. Conversely, cloud-hosted endpoints are preferred for heavy reasoning tasks (7B+ parameter models), complex RAG knowledge synthesis, and dynamic data that exceeds the thermal and RAM limits of consumer smartphones.',
      howToAnswer_bn: 'ক্যামেরা দিয়ে রিয়েল-টাইম ফ্রেম প্রসেসিং (যেমন প্রতি সেকেন্ডে ৩০ বার বারকোড বা এনআইডি কার্ড স্ক্যান করা) এর জন্য অন-ডিভাইস এআই আবশ্যক। কারণ প্রতি সেকেন্ডে ভিডিও ক্লাউডে পাঠালে প্রচুর ইন্টারনেট খরচ হবে এবং অ্যাপ মারাত্মক ল্যাগ করবে। এছাড়া যেখানে কোনো ইন্টারনেট নেই সেখানে কাজ করার জন্য এবং গ্রাহকের ব্যক্তিগত ছবি মোবাইলের বাইরে না পাঠানোর গোপনীয়তার স্বার্থে অন-ডিভাইস এআই সেরা। তবে যেখানে বিশাল নলেজ বেস থেকে বড় কোনো উত্তর তৈরি করতে হবে যা সাধারণ ফোনের র‍্যামের ধারণক্ষমতার বাইরে, কেবল সেখানেই ক্লাউড এআই এপিআই কল করা বুদ্ধিমানের কাজ।',
      commonMistakes_en: 'Sending raw camera video frames continuously over mobile cellular data to cloud APIs for simple OCR scanning.',
      commonMistakes_bn: 'সাধারণ ডকুমেন্ট স্ক্যানের জন্য সব ফ্রেম ক্লাউড সার্ভারে পাঠিয়ে বিল ও ল্যাটেন্সি হাজার গুণ বাড়িয়ে ফেলা।'
    }
  ],
  freeCerts: [
    {
      id: 'google-flutter-codelabs',
      title_en: 'Google Official Flutter & Dart Developer Learning Path',
      title_bn: 'গুগল অফিশিয়াল ফ্লাটার ও ডার্ট ডেভেলপার লার্নিং পাথ',
      provider: 'Google Developers',
      url: 'https://docs.flutter.dev/get-started/codelab',
      mobileAccessible: true,
      language: 'en',
      durationHours: 35,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official interactive codelabs directly from the creators of Flutter covering layout architecture, state, and animations.',
      relevance_bn: 'গুগলের নিজস্ব অফিশিয়াল ইন্টারঅ্যাক্টিভ কোডল্যাব ও বাস্তব প্রজেক্ট গাইড।'
    },
    {
      id: 'google-mediapipe-on-device-ai',
      title_en: 'Google MediaPipe: On-Device Machine Learning for Mobile',
      title_bn: 'গুগল মিডিয়াপাইপ: মোবাইলে অন-ডিভাইস মেশিন লার্নিং',
      provider: 'Google AI',
      url: 'https://developers.google.com/mediapipe',
      mobileAccessible: true,
      language: 'en',
      durationHours: 20,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Hands-on training covering on-device computer vision, text classification, and offline OCR integration into mobile apps.',
      relevance_bn: 'মোবাইলের ভেতরেই অফলাইন এআই চালানোর অফিশিয়াল গুগল প্রশিক্ষণ।'
    },
    {
      id: 'android-basics-kotlin',
      title_en: 'Android Developers: Android Basics & Architecture',
      title_bn: 'অ্যান্ড্রয়েড ডেভেলপারস: অ্যান্ড্রয়েড আর্কিটেকচার ফাউন্ডেশনস',
      provider: 'Google for Developers',
      url: 'https://developer.android.com/courses',
      mobileAccessible: true,
      language: 'en',
      durationHours: 40,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official Google curriculum covering native Android fundamentals, lifecycle, intents, and background tasks.',
      relevance_bn: 'অ্যান্ড্রয়েড অপারেটিং সিস্টেমের নিজস্ব অফিশিয়াল ফান্ডামেন্টাল আর্কিটেকচার কোর্স।'
    }
  ]
};
