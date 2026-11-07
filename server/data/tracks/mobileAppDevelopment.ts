import type { CareerTrack } from '../../../shared/types.js';

export const mobileAppDevelopmentTrack: Omit<CareerTrack, 'id'> = {
  slug: 'mobile-app-development',
  title_en: 'Mobile App Development (Flutter & Android / iOS)',
  title_bn: 'মোবাইল অ্যাপ ডেভেলপমেন্ট (ফ্লাটার ও অ্যান্ড্রয়েড)',
  summary_en: 'Cross-platform mobile application engineering using Dart and Flutter, responsive UI widgets, state management with Provider or Riverpod, Firebase backend integration, and Play Store deployment.',
  summary_bn: 'ডার্ট (Dart) ও ফ্লাটার (Flutter) দিয়ে অ্যান্ড্রয়েড ও আইওএস মোবাইল অ্যাপ তৈরি, ফায়ারবেস ইন্টিগ্রেশন ও প্লে স্টোর ডিপ্লয়মেন্টের পূর্ণাঙ্গ ট্র্যাক।',
  pivotAdvice_en: 'If you want to build native smartphone apps that your family and friends can install directly on their phones, Flutter offers the highest local software agency hiring rate and direct freelancing potential.',
  pivotAdvice_bn: 'তুমি যদি এমন অ্যাপ তৈরি করতে চাও যা সরাসরি নিজের ফোনে বা বন্ধুদের ফোনে ইনস্টল করে চালানো যায়, তবে ফ্লাটার তোমার জন্য সেরা পছন্দ। বাংলাদেশের সফটওয়্যার ফার্মগুলোতে ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ নির্মাতাদের ব্যাপক চাহিদা রয়েছে।',
  minPcRequired: 'standard',
  dayToDay_en: [
    'Writing clean, modular Dart code and crafting pixel-perfect responsive Flutter UI widgets.',
    'Managing application state and reactive data flow using Provider, Riverpod, or Bloc.',
    'Integrating REST APIs to fetch, parse, and cache backend JSON data inside mobile apps.',
    'Configuring Firebase Authentication, Firestore databases, and push notifications.',
    'Testing apps on real Android devices, building signed APKs, and publishing to Google Play Store.'
  ],
  dayToDay_bn: [
    'ডার্ট ভাষায় কোড লিখে ফ্লাটার দিয়ে আকর্ষণীয় ও রেসপনসিভ মোবাইল অ্যাপ স্ক্রিন তৈরি করা।',
    'স্টেট ম্যানেজমেন্ট ব্যবহার করে অ্যাপের ডেটা পরিচালনা ও স্ক্রিন ট্রানজিশন মসৃণ রাখা।',
    'ব্যাকএন্ড এপিআই কানেক্ট করে অ্যাপে লাইভ ডেটা দেখানো ও অফলাইনে ক্যাশিং করা।',
    'ফায়ারবেস দিয়ে গুগল লগইন, ফোন ওটিপি ও পুশ নোটিফিকেশন যুক্ত করা।',
    'প্রকৃত অ্যান্ড্রয়েড ফোনে অ্যাপ টেস্ট করা ও গুগল প্লে স্টোরে রিলিজের জন্য এপিকে তৈরি করা।'
  ],
  mustHaveSkills: [
    {
      id: 'dart-programming-core',
      name: 'Dart Programming Language',
      category: 'Language',
      importance: 'Essential',
      description_en: 'Object-oriented programming, null safety, async/await, Futures, and Streams.',
      description_bn: 'ডার্ট ওওপি, নাল সেফটি, অ্যাসিঙ্ক/অ্যাওয়েট ও স্ট্রিম হ্যান্ডলিং।'
    },
    {
      id: 'flutter-ui-widgets',
      name: 'Flutter Framework & Widgets',
      category: 'Mobile Framework',
      importance: 'Essential',
      description_en: 'Stateless/Stateful widgets, Column, Row, ListView, CustomPaint, and animations.',
      description_bn: 'ফ্লাটার উইজেট ট্রি, কাস্টম ইউআই লেআউট ও মসৃণ অ্যানিমেশন তৈরি।'
    },
    {
      id: 'state-management-mobile',
      name: 'State Management (Provider / Riverpod)',
      category: 'Architecture',
      importance: 'Essential',
      description_en: 'Separating business logic from UI, managing cart states, and reactive listeners.',
      description_bn: 'প্রোভাইডার বা রিভারপড দিয়ে অ্যাপের স্টেট ও বিজনেস লজিক নিয়ন্ত্রণ।'
    },
    {
      id: 'firebase-rest-apis',
      name: 'Firebase & REST API Integration',
      category: 'Backend & Cloud',
      importance: 'Essential',
      description_en: 'HTTP package, JSON serialization, Firebase Auth, Firestore, and Cloud Messaging.',
      description_bn: 'রেস্ট এপিআই কল করা এবং ফায়ারবেস দিয়ে অথেনটিকেশন ও ডাটাবেস পরিচালনা।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Uttara, Banani, Mirpur Software Hubs)',
      entrySalary: { min: 25000, max: 45000, currency: 'BDT', formatted: '25,000 - 45,000 BDT' },
      midSalary: { min: 60000, max: 120000, currency: 'BDT', formatted: '60,000 - 120,000 BDT' },
      seniorSalary: { min: 140000, max: 280000, currency: 'BDT', formatted: '140,000 - 280,000 BDT' },
      hiringSectors: [
        'Ride Sharing & Delivery Apps (Pathao, Shohoz, Chaldal, Foodpanda)',
        'Fintech & Digital Banking (bKash, Nagad, Upay, Cellfin)',
        'Software Development Agencies & Product Companies in Dhaka',
        'Direct Freelance App Contracts from Global Clients'
      ],
      cvExpectations: [
        'At least one published app on Google Play Store or functional APK download link in GitHub',
        'Clean implementation of state management (Provider or Riverpod) in public repository',
        'Demonstrated ability to fetch REST APIs and handle offline connectivity states gracefully',
        'Diploma in CST with clear mobile app enthusiasm'
      ],
      localDemandSummary_en: 'Every business in Bangladesh wants a mobile app on their customer phones. Flutter enables CST graduates to build both Android and iOS apps from a single codebase, making them highly desirable to local software firms.',
      localDemandSummary_bn: 'একটিমাত্র কোডবেস দিয়ে অ্যান্ড্রয়েড ও আইওএস উভয় প্ল্যাটফর্মের অ্যাপ তৈরি করা যায় বলে বাংলাদেশের সফটওয়্যার কোম্পানিগুলো ফ্লাটার ডেভেলপারদের সর্বোচ্চ অগ্রাধিকার দেয়।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'Saudi Arabia & Qatar',
        countryName_bn: 'সৌদি আরব ও কাতার',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'High recruitment for Flutter engineers to build regional retail, delivery, and municipal mobile apps.',
        visaReality_bn: 'প্লে স্টোর পোর্টফোলিও থাকা ফ্লাটার ডেভেলপারদের টেকনিক্যাল ভিসায় দ্রুত নিয়োগ দেওয়া হয়।',
        averageSalaryUsdOrLocal: '$2,400 - $4,500 USD/month',
        requiredExperienceYears: '2 - 3 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$800 - $3,000 USD',
      competitionLevel: 'Moderate to High',
      competitionLevel_bn: 'মাঝারি থেকে তীব্র',
      englishRequirement: 'Conversational written English for feature specifications and client feedback',
      englishRequirement_bn: 'ফিচার আলোচনা ও বাগ ফিক্সিংয়ের উপযোগী সাধারণ লিখিত ইংরেজি',
      realities_en: [
        'Building niche mobile apps for small overseas businesses on Upwork pays $20 to $35 per hour.',
        'A working live Play Store app link on your CV beats 50 applicants who only have code on paper.'
      ],
      realities_bn: [
        'সিভিতে একটিমাত্র লাইভ প্লে স্টোর অ্যাপের লিংক থাকা প্রার্থীকে অন্য ৫০ জন কাগুজে প্রার্থীর চেয়ে এগিয়ে রাখে।',
        'আপওয়ার্কে ছোট ব্যবসার জন্য ফ্লাটার অ্যাপ তৈরি করে চমৎকার রিমোট আয় করা সম্ভব।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Dart Language Mastery & Basic Flutter Widgets',
      phaseTitle_bn: 'ডার্ট ভাষা ও ফ্লাটার মৌলিক উইজেট',
      phaseSubtitle_en: 'Build your first functional smartphone user interfaces.',
      phaseSubtitle_bn: 'স্মার্টফোনের স্ক্রিন ডিজাইন ও ডার্ট প্রোগ্রামিংয়ের হাতে-কলমে শুরু।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mob-p1-m1',
          title_en: 'Dart OOP, Null Safety & Collections',
          title_bn: 'ডার্ট ওওপি, নাল সেফটি ও কালেকশনস',
          description_en: 'Master Dart classes, constructors, methods, null safety, lists, maps, and async programming with Futures.',
          description_bn: 'ডার্ট অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং, নাল সেফটি এবং অ্যাসিনক্রোনাস ফাংশন আয়ত্ত করা।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['Classes & Constructors', 'Sound Null Safety', 'Future & async/await', 'Dartpad in Browser'],
          practicalTask_en: 'Create a Dart console program that manages student course enrollments using classes and maps.',
          practicalTask_bn: 'ডার্ট ভাষায় ক্লাস ও ম্যাপ ব্যবহার করে একটি ছাত্রভর্তি তথ্য পরিচালনাকারী প্রোগ্রাম তৈরি করো।'
        },
        {
          id: 'mob-p1-m2',
          title_en: 'Flutter Widget Tree: Container, Row, Column & Forms',
          title_bn: 'ফ্লাটার উইজেট ট্রি: কন্টেইনার, রো, কলাম ও ফর্ম',
          description_en: 'Assemble responsive mobile layouts, input text fields, buttons, scrollable views, and scaffold navigation bars.',
          description_bn: 'মোবাইল স্ক্রিনে বাটন, টেক্সট ইনপুট, লিস্ট ও কন্টেইনার সাজিয়ে সুন্দর ইন্টারফেস তৈরি।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['Scaffold & AppBar', 'Column & Row Alignment', 'TextFormField & Validation', 'ElevatedButton'],
          practicalTask_en: 'Build a mobile login and signup screen in Flutter with form validation for email and password.',
          practicalTask_bn: 'ফ্লাটার দিয়ে ইমেইল ও পাসওয়ার্ড ভ্যালিডেশন সহ একটি সুন্দর লগইন ও রেজিস্ট্রেশন পেজ বানাও।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'State Management & Multi-Screen App Navigation',
      phaseTitle_bn: 'স্টেট ম্যানেজমেন্ট ও মাল্টি-স্ক্রিন অ্যাপ নেভিগেশন',
      phaseSubtitle_en: 'Manage application data across multiple screens without page reloads.',
      phaseSubtitle_bn: 'স্ক্রিন থেকে স্ক্রিনে ডেটা আদান-প্রদান ও স্টেট ম্যানেজমেন্ট।',
      durationWeeks: 5,
      modules: [
        {
          id: 'mob-p2-m1',
          title_en: 'Provider / Riverpod Reactive State Architecture',
          title_bn: 'প্রোভাইডার ও রিভারপড দিয়ে স্টেট নিয়ন্ত্রণ',
          description_en: 'Understand why setState fails in large apps, implement ChangeNotifier, Consumers, and reactive UI updates.',
          description_bn: 'অ্যাপ বড় হলে কীভাবে প্রোভাইডার দিয়ে কার্ট ও ইউজার প্রোফাইল ডাটা নিয়ন্ত্রণ করতে হয়।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['ChangeNotifierProvider', 'Consumer Widget', 'Cart State Management', 'Theme Switching'],
          practicalTask_en: 'Build an e-commerce shopping cart screen where adding items instantly updates the total price badge across screens.',
          practicalTask_bn: 'একটি শপিং কার্ট অ্যাপ তৈরি করো যেখানে প্রডাক্ট যুক্ত করলে মোট দাম স্বয়ংক্রিয়ভাবে আপডেট হয়।'
        },
        {
          id: 'mob-p2-m2',
          title_en: 'Custom Animations & Persistent Local Storage',
          title_bn: 'কাস্টম অ্যানিমেশন ও লোকাল স্টোরেজ',
          description_en: 'Add hero transitions, animated containers, and save user settings locally using SharedPreferences and Hive.',
          description_bn: 'স্ক্রিন পরিবর্তনে মসৃণ অ্যানিমেশন দেওয়া এবং শেয়ার্ড প্রেফারেন্সেস দিয়ে ফোন মেমরিতে ডাটা সেভ রাখা।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['Hero Widget', 'AnimatedContainer', 'SharedPreferences', 'Dark Mode Persistence'],
          practicalTask_en: 'Add a dark/light mode toggle to your app that persists its state even after the app is completely closed and reopened.',
          practicalTask_bn: 'অ্যাপ বন্ধ করে আবার চালু করলেও ডার্ক মোড অন থাকে এমন লোকাল সেভ ব্যবস্থা তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'REST API Integration & Firebase Cloud Backend',
      phaseTitle_bn: 'রেস্ট এপিআই ও ফায়ারবেস ক্লাউড ব্যাকএন্ড',
      phaseSubtitle_en: 'Connect your mobile frontend to live servers and authentication.',
      phaseSubtitle_bn: 'লাইভ সার্ভার থেকে ডেটা লোড ও গুগল/ফোন লগইন যুক্ত করা।',
      durationWeeks: 5,
      modules: [
        {
          id: 'mob-p3-m1',
          title_en: 'Fetching & Parsing JSON Data with HTTP Package',
          title_bn: 'এইচটিটিপি প্যাকেজ দিয়ে এপিআই ডেটা লোড ও পার্সিং',
          description_en: 'Send GET and POST requests, handle loading spinners, display network errors, and convert JSON arrays into Dart objects.',
          description_bn: 'সার্ভার থেকে লাইভ তথ্য এনে মোবাইল স্ক্রিনে দেখানো এবং ইন্টারনেট না থাকলে এরর মেসেজ প্রদর্শন।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['http package', 'jsonDecode', 'FutureBuilder', 'Pull-to-Refresh'],
          practicalTask_en: 'Build a live weather or news app in Flutter that fetches data from a free public API and displays it in a card list.',
          practicalTask_bn: 'পাবলিক এপিআই ব্যবহার করে রিয়েল-টাইম আবহাওয়া বা খবরের একটি মোবাইল অ্যাপ তৈরি করো।'
        },
        {
          id: 'mob-p3-m2',
          title_en: 'Firebase Authentication & Cloud Firestore DB',
          title_bn: 'ফায়ারবেস অথেনটিকেশন ও ক্লাউড ফায়ারস্টোর ডাটাবেস',
          description_en: 'Setup Firebase CLI, implement Google Sign-In, store user profiles in Firestore, and trigger push notifications.',
          description_bn: 'গুগল লগইন, ফায়ারস্টোর ক্লাউডে ডেটা সংরক্ষণ ও পুশ নোটিফিকেশন সেটআপ।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Firebase Core', 'FirebaseAuth', 'Cloud Firestore Streams', 'Push Notifications'],
          practicalTask_en: 'Create a personal task manager app with Google Sign-In where tasks sync in real-time to the cloud.',
          practicalTask_bn: 'গুগল সাইন-ইন সহ একটি টাস্ক ম্যানেজার অ্যাপ বানাও যার তথ্য রিয়েল-টাইমে ক্লাউডে সেভ হয়।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Play Store Publishing, Portfolio App & Job Viva',
      phaseTitle_bn: 'প্লে স্টোর পাবলিশিং, পোর্টফোলিও অ্যাপ ও চাকরি ভাইভা',
      phaseSubtitle_en: 'Build release APKs and prepare for mobile software engineer interviews.',
      phaseSubtitle_bn: 'রিলিজ এপিকে তৈরি, গুগল প্লে স্টোরে আপলোড ও চাকরি ভাইভা প্রস্তুতি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mob-p4-m1',
          title_en: 'Building Release APKs & Google Play Store Setup',
          title_bn: 'রিলিজ এপিকে তৈরি ও প্লে স্টোর প্রস্তুতি',
          description_en: 'Generate keystores, sign Android App Bundles (AAB), optimize assets, and prepare store screenshots and privacy policies.',
          description_bn: 'ডিজিটাল কি-স্টোর তৈরি, এএবি বান্ডল বিল্ড করা ও প্লে স্টোরে অ্যাপ জমার প্রয়োজনীয় প্রস্তুতি।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['Keytool & Keystore', 'Android App Bundle (AAB)', 'ProGuard / Obfuscation', 'App Permissions'],
          practicalTask_en: 'Generate a signed release APK of your capstone app, test install it on a physical smartphone, and host the download link on GitHub.',
          practicalTask_bn: 'তোমার অ্যাপের রিলিজ এপিকে বানিয়ে স্মার্টফোনে টেস্ট করো এবং গিটহাবে ডাউনলোডের ব্যবস্থা করো।'
        },
        {
          id: 'mob-p4-m2',
          title_en: 'Technical Interview Mastery for Mobile Roles',
          title_bn: 'মোবাইল ডেভেলপার পদের টেকনিক্যাল ভাইভা প্রস্তুতি',
          description_en: 'Practice answering technical questions on widget lifecycles, memory leak prevention, async streams, and native platform channels.',
          description_bn: 'উইজেট লাইফসাইকেল, মেমোরি লিক ও এপিআই সম্পর্কিত ভাইভা প্রশ্নের উত্তর চর্চা।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Widget Lifecycle', 'State Management Viva', 'Salary Benchmarks in Dhaka', 'Live Coding Walkthrough'],
          practicalTask_en: 'Record a screen recording explaining the code architecture of your capstone Flutter app.',
          practicalTask_bn: 'তোমার তৈরি করা অ্যাপের কোড ও আর্কিটেকচার বুঝিয়ে ৩ মিনিটের একটি ডেমো ভিডিও তৈরি করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'mob-q1',
      question_en: 'What is the difference between a StatelessWidget and a StatefulWidget in Flutter?',
      question_bn: 'ফ্লাটারে স্টেটলেস উইজেট (StatelessWidget) ও স্টেটফুল উইজেটের (StatefulWidget) মধ্যে পার্থক্য কী?',
      category: 'Flutter Fundamentals',
      whyAsked_en: 'Fundamental architectural question asked in every single mobile development technical interview in Bangladesh.',
      whyAsked_bn: 'ফ্লাটারের সবচেয়ে মৌলিক ধারণার ওপর প্রার্থীর দখল যাচাই করার জন্য এই প্রশ্ন করা হয়।',
      howToAnswer_en: 'StatelessWidget is immutable: its UI is built once from input configuration and cannot change at runtime (e.g., Text, Icon). StatefulWidget is mutable: it maintains internal State across its lifecycle that can be modified using setState() to trigger UI re-renders (e.g., Checkbox, TextField, dynamic lists).',
      howToAnswer_bn: 'স্টেটলেস উইজেট অপরিবর্তনীয়, তৈরির পর এর কনটেন্ট রানটাইমে পরিবর্তন করা যায় না (যেমন সাধারণ টেক্সট বা আইকন)। স্টেটফুল উইজেটে স্টেট ক্লাসের মাধ্যমে অভ্যন্তরীণ পরিবর্তন ধরে রাখা যায় এবং setState() কল করে নতুন করে স্ক্রিন রেন্ডার করা যায় (যেমন ইনপুট বক্স বা চেকবক্স)।',
      commonMistakes_en: 'Not knowing the build() lifecycle or claiming setState() rebuilds the entire application instead of just the widget subtree.',
      commonMistakes_bn: 'মনে করা যে setState() পুরো অ্যাপ রিস্টার্ট করে, যখন এটি কেবল ওই উইজেটের সাব-ট্রি রেন্ডার করে।'
    },
    {
      id: 'mob-q2',
      question_en: 'Why is sound null safety important in modern Dart and Flutter?',
      question_bn: 'আধুনিক ডার্ট ও ফ্লাটারে সাউন্ড নাল সেফটি (Sound Null Safety) কেন জরুরি?',
      category: 'Dart Language',
      whyAsked_en: 'Tests whether the candidate writes modern Dart code or relies on outdated tutorials with crash-prone null pointer exceptions.',
      whyAsked_bn: 'প্রার্থী আধুনিক ডার্ট কোড লেখে কি না এবং রানটাইম ক্র্যাশ এড়াতে জানে কি না তা নিশ্চিত করা।',
      howToAnswer_en: 'Sound null safety ensures that variables cannot contain null values unless explicitly declared with a question mark (e.g., String?). This eliminates null pointer exception crashes at runtime, optimizes compiled machine code, and ensures app stability.',
      howToAnswer_bn: 'সাউন্ড নাল সেফটি নিশ্চিত করে যে কোনো ভেরিয়েবল ইচ্ছাকৃতভাবে ? চিহ্ন না দিলে কখনোই নাল হতে পারবে না। এর ফলে রানটাইমে অ্যাপ হঠাৎ ক্র্যাশ করার সম্ভাবনা দূর হয় এবং অ্যাপ অনেক বেশি স্থিতিশীল থাকে।',
      commonMistakes_en: 'Overusing the exclamation bang operator (!) to silence the compiler instead of properly handling possible null values.',
      commonMistakes_bn: 'নাল হ্যান্ডেল না করে সব জায়গায় জোরপূর্বক বিস্ময়সূচক (!) চিহ্ন ব্যবহার করা।'
    }
  ],
  freeCerts: [
    {
      id: 'google-flutter-badges',
      title_en: 'Google Developers: Flutter & Dart Foundations',
      title_bn: 'গুগল ডেভেলপার্স: ফ্লাটার ও ডার্ট ফাউন্ডেশনস',
      provider: 'Google Developers',
      url: 'https://developers.google.com/learn/pathways/intro-to-flutter',
      mobileAccessible: true,
      language: 'en',
      durationHours: 20,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official verified digital pathways and developer profile badges directly from Google.',
      relevance_bn: 'গুগল ডেভেলপার্স প্ল্যাটফর্মের অফিশিয়াল ভেরিফায়েড ডিজিটাল ব্যাজ ও সার্টিফিকেট।'
    },
    {
      id: 'fcc-flutter-course',
      title_en: 'freeCodeCamp: Flutter & Dart Mobile App Certification',
      title_bn: 'ফ্রি-কোড-ক্যাম্প: ফ্লাটার ও ডার্ট মোবাইল অ্যাপ',
      provider: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/news/tag/flutter/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 40,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Practical step-by-step project build guide verified by the world largest free tech learning community.',
      relevance_bn: 'বাস্তব প্রজেক্ট তৈরির মাধ্যমে ফ্রি-কোড-ক্যাম্পের উন্মুক্ত আন্তর্জাতিক সার্টিফিকেট।'
    },
    {
      id: 'muktopaath-mobile-app',
      title_en: 'Muktopaath: Basics of Mobile App Development',
      title_bn: 'মুক্তপাঠ: মোবাইল অ্যাপ ডেভেলপমেন্ট পরিচিতি',
      provider: 'Muktopaath / a2i Bangladesh',
      url: 'https://muktopaath.gov.bd',
      mobileAccessible: true,
      language: 'bn',
      durationHours: 12,
      cost: '100% Free',
      isBdLocal: true,
      category: 'bd_national',
      relevance_en: 'Official Bangladesh Government certified credential verifying mobile app fundamentals.',
      relevance_bn: 'বাংলাদেশ সরকারের মুক্তপাঠ প্ল্যাটফর্মের অফিশিয়াল ভেরিফায়েড সার্টিফিকেট।'
    }
  ]
};
