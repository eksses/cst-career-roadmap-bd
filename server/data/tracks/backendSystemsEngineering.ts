import type { CareerTrack } from '../../../shared/types.js';

export const backendSystemsEngineeringTrack: Omit<CareerTrack, 'id'> = {
  slug: 'backend-systems-engineering',
  title_en: 'Backend API Systems & Database Architecture',
  title_bn: 'ব্যাকএন্ড এপিআই সিস্টেমস ও ডেটাবেস আর্কিটেকচার',
  summary_en: 'High-concurrency server applications, RESTful APIs using Node.js and Express, relational database schema design with PostgreSQL, Redis in-memory caching, and microservices.',
  summary_bn: 'উচ্চ গতির সার্ভার লজিক, নোড.জেএস (Node.js) দিয়ে এপিআই তৈরি, পোস্টগ্রেস ডেটাবেস ডিজাইন, রেডিস ক্যাশিং ও নিরাপদ ব্যাকএন্ড আর্কিটেকচার।',
  pivotAdvice_en: 'If you love solving pure business logic, database queries, authentication security, and server optimization without wrestling with CSS styling or visual layout bugs, Backend Engineering is the most rewarding technical software path.',
  pivotAdvice_bn: 'তুমি যদি ফ্রন্টএন্ডের রঙ বা সিএসএস লেআউট নিয়ে মাথা না ঘামিয়ে খাঁটি কোডিং লজিক, ডেটাবেস অপ্টিমাইজেশন ও সার্ভারের গতি বাড়াতে আনন্দ পাও, তবে ব্যাকএন্ড ইঞ্জিনিয়ারিং তোমার জন্য সেরা। সফটওয়্যার ইন্ডাস্ট্রিতে ব্যাকএন্ড ডেভেলপারদের সবসময় উচ্চ মূল্যায়ন করা হয়।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Designing robust RESTful endpoints with input validation using Zod and Express middleware.',
    'Writing complex SQL queries, migrations, and database schema relationships in PostgreSQL.',
    'Implementing secure user authentication with JWT tokens, HTTP-only refresh cookies, and bcrypt hashing.',
    'Optimizing heavy server bottlenecks using Redis in-memory key-value caching.',
    'Writing automated unit and integration tests with Jest or Vitest, and documenting endpoints in Postman.'
  ],
  dayToDay_bn: [
    'নোড.জেএস ও এক্সপ্রেস দিয়ে নিরাপদ ও দ্রুতগতির রেস্ট এপিআই (REST API) এন্ডপয়েন্ট তৈরি করা।',
    'পোস্টগ্রেস ডেটাবেসের টেবিল স্কিমা ডিজাইন ও কুয়েরি অপ্টিমাইজেশন করা।',
    'জেডব্লিউটি (JWT) টোকেন ও পাসওয়ার্ড হ্যাশিং দিয়ে নিরাপদ ইউজার লগইন সিস্টেম তৈরি।',
    'রেডিস (Redis) ক্যাশিং ব্যবহার করে সার্ভারের লোড কমানো ও গতি বহুগুণ বাড়ানো।',
    'পোস্টম্যান দিয়ে এপিআই ডকুমেন্টেশন তৈরি ও স্বয়ংক্রিয় টেস্টিং নিশ্চিত করা।'
  ],
  mustHaveSkills: [
    {
      id: 'nodejs-express-core',
      name: 'Node.js & Express.js Engine',
      category: 'Backend Framework',
      importance: 'Essential',
      description_en: 'Event loop architecture, non-blocking I/O, middleware pipeline, and error handling.',
      description_bn: 'নোড.জেএস ইভেন্ট লুপ, নন-ব্লকিং কোড ও এক্সপ্রেস মিডলওয়্যার চেইন।'
    },
    {
      id: 'postgresql-drizzle-orm',
      name: 'PostgreSQL & ORM Architecture',
      category: 'Database',
      importance: 'Essential',
      description_en: 'Relational modeling, indexing, foreign keys, transactions, and Drizzle/Prisma ORMs.',
      description_bn: 'পোস্টগ্রেস ডেটাবেস ইনডেক্সিং, ট্রানজ্যাকশন ও ওআরএম দিয়ে কুয়েরি পরিচালনা।'
    },
    {
      id: 'jwt-auth-security',
      name: 'API Security & JWT Authentication',
      category: 'Security',
      importance: 'Essential',
      description_en: 'Access & refresh tokens, bcrypt salt hashing, CORS configuration, and rate limiting.',
      description_bn: 'পাসওয়ার্ড হ্যাশিং, টোকেন রিনিউয়াল ও এপিআই রেট লিমিটিং নিরাপত্তা।'
    },
    {
      id: 'redis-caching-queues',
      name: 'Redis In-Memory Caching',
      category: 'Performance',
      importance: 'Recommended',
      description_en: 'Key-value cache eviction, session storage, rate limit counters, and queue workers.',
      description_bn: 'রেডিস দিয়ে ইন-মেমরি ক্যাশিং ও দ্রুততম রেসপন্স টাইম নিশ্চিতকরণ।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Software parks in Banani, Dhanmondi, Uttara, Kawran Bazar)',
      entrySalary: { min: 28000, max: 48000, currency: 'BDT', formatted: '28,000 - 48,000 BDT' },
      midSalary: { min: 65000, max: 130000, currency: 'BDT', formatted: '65,000 - 130,000 BDT' },
      seniorSalary: { min: 150000, max: 320000, currency: 'BDT', formatted: '150,000 - 320,000 BDT' },
      hiringSectors: [
        'Fintech Platforms & Microfinance Softwares (bKash, Nagad, Sheba.xyz)',
        'ERP & Enterprise Software Providers in Bangladesh (IBCS-PRIMAX, Southtech)',
        'Offshore Software Export Firms (Brain Station 23, Kaz Software, Enosis Solutions)',
        'Global Remote SaaS & Product Companies'
      ],
      cvExpectations: [
        'Clean GitHub repository with a production-ready REST API featuring authentication and database relations',
        'Published Postman collection link documenting endpoints with sample request/response payloads',
        'Clear understanding of SQL transactions, database indexing, and API security headers',
        'Diploma in CST with solid logical problem-solving ability'
      ],
      localDemandSummary_en: 'Backend systems are the core engine of every software firm. CST graduates who prove they can design clean databases and secure APIs without UI distractions are recruited with exceptional hiring urgency.',
      localDemandSummary_bn: 'প্রতিটি সফটওয়্যার কোম্পানির আসল প্রাণ হলো তাদের ব্যাকএন্ড ও ডেটাবেস। সিএসটি শিক্ষার্থীরা যারা নিটোল ডেটাবেস ডিজাইন ও এপিআই তৈরি করতে পারে, তাদের নিয়োগ পাওয়ার সম্ভাবনা ও সম্মান সবসময় বেশি থাকে।'
    },
    targetCountries: [
      {
        region: 'Europe',
        countryName_en: 'Germany & Netherlands',
        countryName_bn: 'জার্মানি ও নেদারল্যান্ডস',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'EU Blue Card actively recruits backend engineers with proven Node/Postgres production experience.',
        visaReality_bn: 'ইউরোপের ইইউ ব্লু কার্ড ভিসায় ব্যাকএন্ড ও ডেটাবেস ইঞ্জিনিয়ারদের সর্বোচ্চ মূল্যায়ন করা হয়।',
        averageSalaryUsdOrLocal: '€3,800 - €6,200 EUR/month',
        requiredExperienceYears: '3 - 5 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$900 - $3,200 USD',
      competitionLevel: 'Moderate to High',
      competitionLevel_bn: 'মাঝারি থেকে তীব্র',
      englishRequirement: 'Professional written English for API documentation, GitHub pull request reviews, and technical standups',
      englishRequirement_bn: 'এপিআই ডকুমেন্টেশন লেখা ও টেকনিক্যাল মিটিংয়ের উপযোগী পেশাদার ইংরেজি',
      realities_en: [
        'Remote companies in the US and Europe hire backend contractors to build and maintain their microservice APIs.',
        'A public Postman collection link demonstrating working authentication on your CV immediately sets you apart.'
      ],
      realities_bn: [
        'আমেরিকা ও ইউরোপের কোম্পানিগুলো তাদের এপিআই তৈরির জন্য নিয়মিত রিমোট ইঞ্জিনিয়ার হায়ার করে।',
        'সিভিতে লাইভ পোস্টম্যান ডকুমেন্টেশনের লিংক থাকলে তা নিয়োগদাতার কাছে তৎক্ষণাৎ গ্রহণযোগ্যতা তৈরি করে।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Advanced JavaScript, Node.js Core & Asynchronous Flow',
      phaseTitle_bn: 'অ্যাডভান্সড জাভাস্ক্রিপ্ট, নোড.জেএস ও অ্যাসিঙ্ক কোডিং',
      phaseSubtitle_en: 'Understand how Node.js handles thousands of concurrent connections.',
      phaseSubtitle_bn: 'নোড.জেএস ইভেন্ট লুপ ও নন-ব্লকিং কোডিংয়ের গভীরে প্রবেশ।',
      durationWeeks: 4,
      modules: [
        {
          id: 'be-p1-m1',
          title_en: 'The Node.js Event Loop, Callbacks, Promises & Async/Await',
          title_bn: 'ইভেন্ট লুপ, প্রমিজেস ও অ্যাসিঙ্ক/অ্যাওয়েট লজিক',
          description_en: 'Learn how single-threaded JavaScript handles heavy I/O operations without freezing, write modular ES modules, and parse JSON.',
          description_bn: 'কীভাবে নোড.জেএস এক থ্রেড দিয়ে হাজার হাজার রিকোয়েস্ট হ্যান্ডেল করে এবং অ্যাসিঙ্ক কোড পরিচালনার নিয়ম।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['Event Loop Call Stack', 'Promise.all & Promise.race', 'fs/promises module', 'ES Modules import/export'],
          practicalTask_en: 'Write a Node.js script that reads 5 separate files asynchronously using Promise.all and calculates total word counts.',
          practicalTask_bn: 'প্রমিজ ব্যবহার করে ৫টি আলাদা টেক্সট ফাইল একসাথে পড়ে মোট শব্দ গণনা করার স্ক্রিপ্ট লেখো।'
        },
        {
          id: 'be-p1-m2',
          title_en: 'Express.js Framework, Routing & Custom Middlewares',
          title_bn: 'এক্সপ্রেস.জেএস ফ্রেমওয়ার্ক, রাউটিং ও কাস্টম মিডলওয়্যার',
          description_en: 'Create an HTTP server, handle GET, POST, PUT, DELETE routes, parse request body, and create authentication logging middlewares.',
          description_bn: 'এক্সপ্রেস দিয়ে সার্ভার চালু করা, রাউটিং হ্যান্ডেল করা ও কাস্টম লগিং মিডলওয়্যার তৈরি।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Express App & Router', 'req.params vs req.query', 'Custom Middleware next()', 'Global Error Handler'],
          practicalTask_en: 'Build a modular Express server with request logging middleware that records timestamp, method, and response status.',
          practicalTask_bn: 'একটি এক্সপ্রেস সার্ভার বানাও যা প্রতিটি রিকোয়েস্টের সময় ও স্ট্যাটাস কনসোলে লগ করে।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'RESTful API Architecture & Secure JWT Authentication',
      phaseTitle_bn: 'রেস্ট এপিআই আর্কিটেকচার ও নিরাপদ জেডব্লিউটি অথেনটিকেশন',
      phaseSubtitle_en: 'Build production-grade APIs with validation and password hashing.',
      phaseSubtitle_bn: 'পাসওয়ার্ড হ্যাশিং, টোকেন ও ইনপুট ভ্যালিডেশন সহ পেশাদার এপিআই।',
      durationWeeks: 5,
      modules: [
        {
          id: 'be-p2-m1',
          title_en: 'Password Hashing with Bcrypt & JWT Access Tokens',
          title_bn: 'বিক্রিপ্ট দিয়ে পাসওয়ার্ড হ্যাশিং ও জেডব্লিউটি টোকেন',
          description_en: 'Never store plain text passwords: hash passwords with salt rounds, generate signed JWT tokens, and verify token middlewares.',
          description_bn: 'সল্ট রাউন্ড দিয়ে পাসওয়ার্ড হ্যাশ করা, জেডব্লিউটি টোকেন ইস্যু করা ও সুরক্ষিত রুট তৈরি।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['bcrypt.hash and compare', 'jwt.sign and verify', 'Bearer Token Authorization Header', 'Role-Based Access (Admin/User)'],
          practicalTask_en: 'Build a secure /api/login endpoint that verifies email and hashed password and returns a signed 24-hour JWT token.',
          practicalTask_bn: 'একটি নিরাপদ লগইন এপিআই বানাও যা ইমেইল-পাসওয়ার্ড চেক করে ভেরিফায়েড টোকেন প্রদান করে।'
        },
        {
          id: 'be-p2-m2',
          title_en: 'Request Validation with Zod & Rate Limiting',
          title_bn: 'জড (Zod) দিয়ে ইনপুট ভ্যালিডেশন ও রেট লিমিটিং',
          description_en: 'Block malformed inputs before they hit your database using Zod schemas, and protect endpoints against spam attacks with express-rate-limit.',
          description_bn: 'ভুল ডাটা ডেটাবেসে যাওয়ার আগেই আটকে দেওয়া এবং স্প্যাম রিকোয়েস্ট থেকে সার্ভার রক্ষা।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Zod Schema Definitions', 'Validation Middleware', 'express-rate-limit', 'Clean Error JSON Responses'],
          practicalTask_en: 'Add a Zod validation schema to a user registration endpoint that enforces strong passwords (8+ chars, numbers, symbols).',
          practicalTask_bn: 'রেজিস্ট্রেশন এপিআইতে জড ভ্যালিডেশন যুক্ত করো যা শক্তিশালী পাসওয়ার্ড নিশ্চিত করে।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'PostgreSQL Relational Schema Design & Drizzle ORM',
      phaseTitle_bn: 'পোস্টগ্রেস ডেটাবেস ডিজাইন ও ড্রজল ওআরএম',
      phaseSubtitle_en: 'Model enterprise database relationships with indexes and transactions.',
      phaseSubtitle_bn: 'ডেটাবেস টেবিল রিলেশনশিপ, ইনডেক্সিং ও নিরাপদ ট্রানজ্যাকশন।',
      durationWeeks: 5,
      modules: [
        {
          id: 'be-p3-m1',
          title_en: 'PostgreSQL Tables, Foreign Keys & Schema Migrations',
          title_bn: 'পোস্টগ্রেস টেবিল, ফরেন কি ও স্কিমা মাইগ্রেশন',
          description_en: 'Design normalized tables (Users, Orders, Products), define one-to-many and many-to-many relationships, and run migrations.',
          description_bn: 'ইউজার ও অর্ডার টেবিল তৈরি করে ফরেন কি দিয়ে যুক্ত করা এবং মাইগ্রেশন চালানো।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['PostgreSQL Data Types', 'Primary & Foreign Keys', 'Drizzle ORM Schema', 'drizzle-kit push/generate'],
          practicalTask_en: 'Define a normalized relational database schema for an online book store with Users, Books, and Orders tables.',
          practicalTask_bn: 'একটি অনলাইন বুকস্টোরের জন্য পোস্টগ্রেস ডেটাবেস স্কিমা তৈরি করো।'
        },
        {
          id: 'be-p3-m2',
          title_en: 'Database Indexing, Transactions & Query Speed',
          title_bn: 'ডেটাবেস ইনডেক্সিং, ট্রানজ্যাকশন ও কুয়েরির গতি বৃদ্ধি',
          description_en: 'Learn how B-tree indexes speed up search queries from seconds to milliseconds, and wrap financial balance updates in ACID transactions.',
          description_bn: 'ইনডেক্স ব্যবহার করে সার্চের গতি বাড়ানো এবং ব্যাংকিং ব্যালেন্স আপডেটে ট্রানজ্যাকশনের ব্যবহার।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['CREATE INDEX on email', 'ACID Transactions', 'EXPLAIN ANALYZE', 'N+1 Query Problem Solution'],
          practicalTask_en: 'Write a bank transfer endpoint wrapped in a database transaction that debits Account A and credits Account B atomically.',
          practicalTask_bn: 'একটি মানি ট্রান্সফার এপিআই বানাও যা উভয় অ্যাকাউন্টের টাকা সফলভাবে আপডেট না হলে রোলব্যাক করে।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Redis Caching, Dockerization, Postman & Job Viva',
      phaseTitle_bn: 'রেডিস ক্যাশিং, ডকার, পোস্টম্যান ও চাকরি ভাইভা প্রস্তুতি',
      phaseSubtitle_en: 'Optimize server speed and publish professional API documentation.',
      phaseSubtitle_bn: 'সার্ভারের গতি বৃদ্ধি, পোস্টম্যান ডকুমেন্টেশন ও চাকরি ভাইভা প্রস্তুতি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'be-p4-m1',
          title_en: 'Redis In-Memory Caching & Response Time Optimization',
          title_bn: 'রেডিস ক্যাশিং দিয়ে রেসপন্স টাইম অপ্টিমাইজেশন',
          description_en: 'Store frequently requested database results in Redis RAM with Time-To-Live (TTL) expiration, reducing database load by 80%.',
          description_bn: 'জনপ্রিয় ডেটা রেডিস মেমরিতে ক্যাশ করে রেখে এপিআইয়ের স্পিড ১০ গুণ বাড়ানোর প্র্যাকটিস।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['ioredis client', 'Cache-Aside Pattern', 'TTL Expiration', 'Cache Invalidation on Update'],
          practicalTask_en: 'Implement Redis caching on a /api/products endpoint so subsequent requests return in under 10 milliseconds.',
          practicalTask_bn: 'প্রডাক্ট এপিআইতে রেডিস ক্যাশ যুক্ত করে রেসপন্স টাইম ১০ মিলিসেকেন্ডের নিচে নিয়ে আসো।'
        },
        {
          id: 'be-p4-m2',
          title_en: 'Postman Collection Documentation & Technical Viva',
          title_bn: 'পোস্টম্যান কালেকশন ডকুমেন্টেশন ও টেকনিক্যাল ভাইভা',
          description_en: 'Export clean Postman collections with environment variables, test assertions, and practice explaining backend tradeoffs in viva.',
          description_bn: 'পোস্টম্যানে টেস্ট স্ক্রিপ্ট সহ এপিআই ডকুমেন্টেশন তৈরি ও চাকরি ভাইভায় সফলতার কৌশল।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Postman Environments & Tests', 'Docker Compose Setup', 'HTTP Status Codes Viva', 'Architecture Explanation'],
          practicalTask_en: 'Publish a public Postman documentation link for your complete backend project and add the link to your CV.',
          practicalTask_bn: 'তোমার ব্যাকএন্ড প্রজেক্টের লাইভ পোস্টম্যান ডকুমেন্টেশনের লিংক বানিয়ে সিভিতে যুক্ত করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'be-q1',
      question_en: 'What is the Node.js Event Loop? How does single-threaded JavaScript handle asynchronous non-blocking I/O?',
      question_bn: 'নোড.জেএস ইভেন্ট লুপ কী? সিঙ্গেল থ্রেডেড জাভাস্ক্রিপ্ট কীভাবে নন-ব্লকিং কাজ সম্পন্ন করে?',
      category: 'Node.js Core',
      whyAsked_en: 'The definitive architectural question asked in every backend technical interview to separate copy-paste coders from true engineers.',
      whyAsked_bn: 'প্রার্থী নোড.জেএসের অভ্যন্তরীণ কাজের পদ্ধতি সত্যিই বোঝে কি না তা যাচাই করার সবচেয়ে গুরুত্বপূর্ণ প্রশ্ন।',
      howToAnswer_en: 'Explain: Node.js runs on a single main thread using the V8 engine and libuv library. When an asynchronous operation (like reading a database or file) occurs, Node delegates the task to the underlying operating system kernel or libuv worker thread pool. The main thread continues executing other code. Once the I/O finishes, its callback is placed in the task queue, and the Event Loop pushes it to the call stack as soon as the stack is empty.',
      howToAnswer_bn: 'নোড.জেএস সিঙ্গেল থ্রেডেড হলেও এর পেছনে লিবইউভি (libuv) লাইব্রেরির ওয়ার্কার থ্রেড পুল কাজ করে। যখন কোনো ফাইল বা ডেটাবেস কুয়েরি আসে, নোড মূল থ্রেড না থামিয়ে কাজটি ব্যাকগ্রাউন্ডে পাঠিয়ে দেয় এবং পরের কোড চালাতে থাকে। ব্যাকগ্রাউন্ডের কাজ শেষ হলে ইভেন্ট লুপ কলব্যাক ফাংশনটিকে মেইন স্ট্যাকে এনে কার্যকর করে।',
      commonMistakes_en: 'Saying Node.js is multi-threaded for user code execution, or failing to mention libuv and the call stack.',
      commonMistakes_bn: 'মনে করা যে জাভাস্ক্রিপ্ট কোড মাল্টি-থ্রেডে চলে, যখন কেবল ব্যাকগ্রাউন্ড আই/ও পুল মাল্টি-থ্রেডেড।'
    },
    {
      id: 'be-q2',
      question_en: 'Why should passwords never be stored in plain text or MD5, and how does bcrypt prevent rainbow table attacks?',
      question_bn: 'পাসওয়ার্ড কখনোই প্লেইন টেক্সট বা এমডি৫ (MD5) তে সেভ করা উচিত নয় কেন? বিক্রিপ্ট কীভাবে রেইনবো টেবিল অ্যাটাক প্রতিরোধ করে?',
      category: 'Backend Security',
      whyAsked_en: 'Critical security question verifying that the candidate will not compromise user passwords in a production database breach.',
      whyAsked_bn: 'ডেটাবেস হ্যাক হলেও ইউজারের পাসওয়ার্ড যাতে নিরাপদ থাকে তা নিশ্চিত করার মৌলিক জ্ঞান যাচাই করতে।',
      howToAnswer_en: 'MD5 and SHA-1 are fast and deterministic: precomputed lookup tables ("rainbow tables") can reverse billions of hashes in seconds. Bcrypt is intentionally slow and computationally expensive (work factor/cost). Crucially, bcrypt adds a unique random cryptographic "salt" to every password before hashing, ensuring that two users with the exact same password will have completely different stored hashes, rendering rainbow tables completely useless.',
      howToAnswer_bn: 'এমডি৫ অত্যন্ত দ্রুত এবং একই পাসওয়ার্ডের হ্যাশ সবসময় একই হয়, ফলে হ্যাকাররা আগে থেকে তৈরি করা "রেইনবো টেবিল" দিয়ে নিমেষেই পাসওয়ার্ড বের করে ফেলে। বিক্রিপ্ট ইচ্ছাকৃতভাবে কিছুটা স্লো এবং প্রতিটি পাসওয়ার্ডের সাথে একটি সম্পূর্ণ ইউনিক র‍্যান্ডম "সল্ট" যুক্ত করে। ফলে দুই ইউজারের পাসওয়ার্ড একই হলেও তাদের সংরক্ষিত হ্যাশ ভিন্ন হয় এবং রেইনবো টেবিল দিয়ে তা ভাঙা অসম্ভব হয়ে পড়ে।',
      commonMistakes_en: 'Thinking hashing and encryption are the same thing (encryption is two-way reversible with a key; hashing is one-way).',
      commonMistakes_bn: 'হ্যাশিং এবং এনক্রিপশনকে এক মনে করা (এনক্রিপশন রিভার্স করা যায়, হ্যাশিং একমুখী)।'
    }
  ],
  freeCerts: [
    {
      id: 'fcc-backend-apis',
      title_en: 'freeCodeCamp: Back End Development and APIs Certification',
      title_bn: 'ফ্রি-কোড-ক্যাম্প: ব্যাকএন্ড ডেভেলপমেন্ট ও এপিআই',
      provider: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 300,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'World-renowned 300-hour verified credential testing real Node.js, Express, and MongoDB/PostgreSQL microservice projects.',
      relevance_bn: 'বিশ্বজুড়ে স্বীকৃত ৩০০ ঘণ্টার ফ্রি প্র্যাকটিক্যাল ব্যাকএন্ড এপিআই সার্টিফিকেশন।'
    },
    {
      id: 'harvard-cs50-backend',
      title_en: 'Harvard University CS50x: Computer Science Backend Module',
      title_bn: 'হার্ভার্ড ইউনিভার্সিটি সিএস৫০: কম্পিউটার সায়েন্স ব্যাকএন্ড',
      provider: 'Harvard University / edX',
      url: 'https://cs50.harvard.edu/x/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 60,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Harvard foundational credential verifying algorithms, SQL database architecture, and network HTTP sockets.',
      relevance_bn: 'হার্ভার্ড বিশ্ববিদ্যালয়ের অফিশিয়াল উন্মুক্ত কম্পিউটার সায়েন্স কোর্স ও ভেরিফায়েড প্রজেক্ট।'
    },
    {
      id: 'postman-api-fundamentals',
      title_en: 'Postman Student Expert Certification',
      title_bn: 'পোস্টম্যান স্টুডেন্ট এক্সপার্ট ভেরিফায়েড ব্যাজ',
      provider: 'Postman',
      url: 'https://academy.postman.com',
      mobileAccessible: true,
      language: 'en',
      durationHours: 15,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official verified digital badge directly from Postman validating practical REST API request testing and assertions.',
      relevance_bn: 'পোস্টম্যানের নিজস্ব অফিশিয়াল স্টুডেন্ট এক্সপার্ট ব্যাজ যা এপিআই টেস্টিং দক্ষতার সরাসরি প্রমাণ।'
    }
  ]
};
