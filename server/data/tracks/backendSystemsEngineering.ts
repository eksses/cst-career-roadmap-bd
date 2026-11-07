import type { CareerTrack } from '../../../shared/types.js';

export const backendSystemsEngineeringTrack: Omit<CareerTrack, 'id'> = {
  slug: 'backend-systems-engineering',
  title_en: 'Backend Systems Engineering, Cloud APIs & Database Architecture (2026 Edition)',
  title_bn: 'ব্যাকএন্ড সিস্টেমস ইঞ্জিনিয়ারিং, ক্লাউড এপিআই ও ডেটাবেস আর্কিটেকচার (২০২৬ এডিশন)',
  summary_en: 'Calibrated for late 2026. Architect high-throughput REST and streaming SSE endpoints, Node.js 22 LTS, Fastify / Express 5, PostgreSQL 17 with pgvector, Redis 7 caching, Docker containerization, and AI tool calling pipelines.',
  summary_bn: '২০২৬ সালের আধুনিক ব্যাকএন্ড চাহিদা অনুযায়ী সাজানো। নোড.জেএস ২২, ফাস্টিফাই/এক্সপ্রেস ৫, পোস্টগ্রেসকিউএল ১৭ ও pgvector, রেডিস ক্যাশিং এবং এআই ফাংশন কলিং ইন্টিগ্রেশন।',
  pivotAdvice_en: 'In 2026, simple CRUD boilerplate is generated instantly by AI tools like Cursor and Claude. Companies in Dhaka, Singapore, and remote tech hubs hire backend engineers who master transaction isolation, race condition mitigation, streaming protocols, vector search indexing, and automated Vitest test coverage.',
  pivotAdvice_bn: '২০২৬ সালে সাধারণ এপিআই কোড এআই দিয়ে সেকেন্ডের মধ্যে তৈরি করা যায়। ঢাকা ও গ্লোবাল রিমোট কোম্পানিগুলো এখন এমন ব্যাকএন্ড ইঞ্জিনিয়ার খোঁজে যারা ডেটাবেস ট্রানজ্যাকশন, রেস কন্ডিশন প্রতিরোধ, স্ট্রিমিং ডাটা এবং সিকিউরিটি অডিট গভীরভাবে বোঝে।',
  minPcRequired: 'standard',
  dayToDay_en: [
    'Architecting type-safe REST, gRPC, and Server-Sent Event (SSE) endpoints with Node.js 22, Fastify, and Zod.',
    'Designing normalized relational schemas, multi-table joins, and semantic vector indexes in PostgreSQL 17 using Drizzle ORM and pgvector.',
    'Preventing concurrency race conditions and deadlocks using ACID transactions and Redis distributed locks.',
    'Integrating AI agent tool calling protocols, Model Context Protocol (MCP) servers, and streaming completions.',
    'Writing comprehensive automated unit and integration test suites with Vitest and testcontainers in Docker.'
  ],
  dayToDay_bn: [
    'নোড.জেএস ২২ ও ফাস্টিফাই দিয়ে টাইপ-সেফ রেস্ট এবং স্ট্রিমিং এপিআই এন্ডপয়েন্ট তৈরি করা।',
    'পোস্টগ্রেসকিউএল ১৭ ও ড্রজল ওআরএম দিয়ে রিলেশনাল স্কিমা এবং pgvector সিমিলারিটি ইনডেক্সিং পরিচালনা।',
    'এসিআইডি ট্রানজ্যাকশন ও রেডিস ডিস্ট্রিবিউটেড লক ব্যবহার করে ফিনান্সিয়াল ব্যালেন্সের রেস কন্ডিশন প্রতিরোধ।',
    'এআই এজেন্ট টুল কলিং প্রোটোকল ও স্ট্রিমিং কমপ্লিশন ব্যাকএন্ডে ইন্টিগ্রেট করা।',
    'ভাইটেস্ট ও ডকার টেস্টকনটেইনার দিয়ে স্বয়ংক্রিয় ইন্টিগ্রেশন টেস্টিং নিশ্চিত করা।'
  ],
  mustHaveSkills: [
    {
      id: 'nodejs-fastify-core',
      name: 'Node.js 22 LTS & Modern Fastify/Express',
      category: 'Backend Framework',
      importance: 'Essential',
      description_en: 'Event loop phases, libuv worker threads, AsyncLocalStorage, streaming pipelines, and custom middleware pipelines.',
      description_bn: 'নোড.জেএস ২২ ইভেন্ট লুপ, অ্যাসিনক্রোনাস স্ট্রিম ও ফাস্টিফাই/এক্সপ্রেস মিডলওয়্যার আর্কিটেকচার।'
    },
    {
      id: 'pg-drizzle-pgvector',
      name: 'PostgreSQL 17 & Drizzle ORM (with pgvector)',
      category: 'Database Architecture',
      importance: 'Essential',
      description_en: 'Relational schema modeling, foreign keys, B-tree indexes, ACID transactions, and semantic vector search with HNSW indexes.',
      description_bn: 'পোস্টগ্রেসকিউএল রিলেশনাল মডেলিং, ট্রানজ্যাকশন আইসোলেশন ও এআই ভেক্টর কুয়েরি।'
    },
    {
      id: 'redis-distributed-caching',
      name: 'Redis 7 Caching & Concurrency Control',
      category: 'High Performance',
      importance: 'Essential',
      description_en: 'Cache-aside patterns, TTL expiration, distributed rate limiting, and pub/sub background message queues.',
      description_bn: 'রেডিস ইন-মেমরি ক্যাশিং, রেট লিমিটিং এবং ব্যাকগ্রাউন্ড কিউ প্রসেসিং।'
    },
    {
      id: 'ai-tool-calling-sse',
      name: 'AI Agent Function Calling & Streaming SSE',
      category: 'Modern Backend',
      importance: 'Essential',
      description_en: 'Structured JSON output schema routing, Server-Sent Events for LLM token streaming, and Model Context Protocol endpoints.',
      description_bn: 'এআই ফাংশন কলিং, টোকেন স্ট্রিমিং এসএসই এন্ডপয়েন্ট ও এমসিপি প্রোটোকল।'
    },
    {
      id: 'testing-vitest-docker',
      name: 'Automated Testing (Vitest) & Docker Compose',
      category: 'DevOps & Reliability',
      importance: 'Essential',
      description_en: 'Integration testing using real ephemeral database containers, continuous validation, and production Dockerfile builds.',
      description_bn: 'ভাইটেস্ট টেস্ট সুইট, ডকার কনটেইনার ও সিআই/সিডি অটোমেশন পাইপলাইন।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Gulshan, Banani, Uttara, Dhanmondi, Kawran Bazar) & Remote BD',
      entrySalary: { min: 32000, max: 55000, currency: 'BDT', formatted: '32,000 - 55,000 BDT' },
      midSalary: { min: 70000, max: 145000, currency: 'BDT', formatted: '70,000 - 145,000 BDT' },
      seniorSalary: { min: 160000, max: 340000, currency: 'BDT', formatted: '160,000 - 340,000 BDT' },
      hiringSectors: [
        'Fintech Platforms & Digital Banking Gateways (bKash, Nagad, SSLCOMMERZ, Upay)',
        'Offshore Software Development Centers (Brain Station 23, Enosis Solutions, Kaz Software)',
        'Enterprise SaaS & Logistics Engines (Pathao, Chaldal, Shohoz)',
        'Global Remote Engineering Teams hiring from Bangladesh'
      ],
      cvExpectations: [
        'Live deployed backend application on VPS/cloud with public Swagger or Postman documentation',
        'Production PostgreSQL schema featuring migrations, relational joins, and ACID transactions',
        'Automated test suites written in Vitest demonstrating integration test coverage',
        'Demonstrated ability to explain race condition prevention and database indexing tradeoffs'
      ],
      localDemandSummary_en: 'In late 2026, Bangladeshi tech firms prioritize backend engineers who ensure zero data loss, rock-solid security, and high throughput. Diploma engineers with practical Drizzle, PostgreSQL, and Vitest test suites receive rapid interview callbacks.',
      localDemandSummary_bn: '২০২৬ সালের সফটওয়্যার বাজারে সার্ভারের নিরাপত্তা ও ডেটাবেসের স্থায়িত্ব নিশ্চিত করতে ব্যাকএন্ড ইঞ্জিনিয়ারদের বিকল্প নেই। তোমার যদি লাইভ এপিআই, নিখুঁত ডেটাবেস ট্রানজ্যাকশন ও টেস্ট সুইট থাকে, তবে সম্মানজনক ক্যারিয়ার নিশ্চিত।'
    },
    targetCountries: [
      {
        region: 'Europe',
        countryName_en: 'Germany, Netherlands & Estonia',
        countryName_bn: 'জার্মানি, নেদারল্যান্ডস ও এস্তোনিয়া',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'EU Blue Card actively recruits backend engineers with proven Node/Postgres production experience and strong English communication skills.',
        visaReality_bn: 'ইউরোপের ইইউ ব্লু কার্ড ভিসায় ব্যাকএন্ড ও ডেটাবেস ইঞ্জিনিয়ারদের সর্বোচ্চ মূল্যায়ন করা হয়।',
        averageSalaryUsdOrLocal: '55,000 - 95,000 EUR / year (approx 7,200,000 - 12,500,000 BDT)',
        requiredExperienceYears: '3 to 5 years'
      },
      {
        region: 'Southeast Asia',
        countryName_en: 'Singapore & Malaysia',
        countryName_bn: 'সিঙ্গাপুর ও মালয়েশিয়া',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Fintech and e-commerce regional hubs sponsor skilled backend engineers with high-concurrency database experience.',
        visaReality_bn: 'দক্ষ ব্যাকএন্ড ডেভেলপারদের জন্য সিঙ্গাপুর ও মালয়েশিয়ায় আকর্ষণীয় টেক স্পনসরশিপ সুবিধা রয়েছে।',
        averageSalaryUsdOrLocal: '4,500 - 8,000 SGD / month',
        requiredExperienceYears: '2 to 4 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$1,200 - $4,500 USD',
      competitionLevel: 'Moderate to High',
      competitionLevel_bn: 'মাঝারি থেকে তীব্র',
      englishRequirement: 'Professional technical English for API contracts, architectural design reviews, and GitHub pull requests',
      englishRequirement_bn: 'এপিআই চুক্তি, সিস্টেম আর্কিটেকচার পর্যালোচনা ও গিটহাব কোড পর্যালোচনার জন্য সাবলীল ইংরেজি',
      realities_en: [
        'Global startups hire remote backend engineers to maintain microservices, streaming LLM endpoints, and data pipelines.',
        'A public Postman collection link with automated assertions and working authentication sets your profile apart instantly.'
      ],
      realities_bn: [
        'আন্তর্জাতিক কোম্পানিগুলো মাইক্রোসার্ভিস ও স্ট্রিমিং এপিআই পরিচালনার জন্য রিমোট ব্যাকএন্ড ইঞ্জিনিয়ার নিয়োগ দেয়।',
        'সিভিতে লাইভ পোস্টম্যান কালেকশন ও পাবলিক গিটহাব রিপোজিটরি থাকলে ইন্টারভিউ কল নিশ্চিত হয়।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Node.js 22 Runtime, Asynchronous Flow & Fastify/Express Core',
      phaseTitle_bn: 'নোড.জেএস ২২ রানটাইম, অ্যাসিঙ্ক কোডিং ও ফাস্টিফাই/এক্সপ্রেস কোর',
      phaseSubtitle_en: 'Master the event loop, worker threads, and low-latency HTTP handling.',
      phaseSubtitle_bn: 'ইভেন্ট লুপ, ওয়ার্কার থ্রেড ও উচ্চগতির সার্ভার তৈরির ভিত্তি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'be-p1-m1',
          title_en: 'The Node.js 22 Event Loop, Microtasks & Streams',
          title_bn: 'নোড.জেএস ২২ ইভেন্ট লুপ, মাইক্রোটাস্ক ও স্ট্রিম প্রসেসিং',
          description_en: 'Understand the internal phases of the Event Loop: timers, pending callbacks, poll, check, and close. Master async/await, Promise combinators, and stream backpressure.',
          description_bn: 'ইভেন্ট লুপের বিভিন্ন ধাপ, প্রমিজ কম্বিনেটর ও মেমরি সেভ করে বড় ফাইল স্ট্রিম করার পদ্ধতি।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['Event Loop Phases', 'process.nextTick vs setImmediate', 'Readable & Writable Streams', 'AsyncLocalStorage'],
          practicalTask_en: 'Write a Node.js 22 streaming utility that processes a 100MB CSV file line by line with backpressure, keeping memory usage below 30MB.',
          practicalTask_bn: '১০০ মেগাবাইটের একটি সিএসভি ফাইল স্ট্রিম করে লাইন ধরে প্রসেস করার কোড লেখো যাতে মেমরি ৩০ মেগাবাইটের নিচে থাকে।'
        },
        {
          id: 'be-p1-m2',
          title_en: 'Modern Fastify & Express 5 Routing & Middleware Architecture',
          title_bn: 'আধুনিক ফাস্টিফাই ও এক্সপ্রেস ৫ রাউটিং ও মিডলওয়্যার আর্কিটেকচার',
          description_en: 'Construct clean REST servers with dependency injection, typed plugin architecture, lifecycle hooks, and centralized error logging middleware.',
          description_bn: 'ফাস্টিফাই ও এক্সপ্রেস ৫ দিয়ে প্লাগইন আর্কিটেকচার, লাইফসাইকেল হুক ও সেন্ট্রালাইজড এরর হ্যান্ডলার তৈরি।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Fastify vs Express 5', 'Route Plugins', 'preHandler Hooks', 'Custom Error Inheritance'],
          practicalTask_en: 'Build a modular Fastify server with structured JSON logging, execution time headers, and custom exception handler.',
          practicalTask_bn: 'একটি ফাস্টিফাই সার্ভার বানাও যা প্রতিটি রিকোয়েস্টে এক্সিকিউশন টাইম হেডার ও স্ট্রাকচার্ড এরর রিটার্ন করে।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Production REST APIs, Strict Zod Validation & Cryptographic JWT',
      phaseTitle_bn: 'প্রোডাকশন রেস্ট এপিআই, জড ভ্যালিডেশন ও নিরাপদ জেডব্লিউটি অথেনটিকেশন',
      phaseSubtitle_en: 'Build hardened APIs with token rotation, salt hashing, and rate limiting.',
      phaseSubtitle_bn: 'টোকেন রোটেশন, সল্ট হ্যাশিং ও রেট লিমিটিং সহ সুরক্ষিত ব্যাকএন্ড।',
      durationWeeks: 4,
      modules: [
        {
          id: 'be-p2-m1',
          title_en: 'Cryptographic Password Hashing & Refresh Token Rotation',
          title_bn: 'পাসওয়ার্ড হ্যাশিং ও রিফ্রেশ টোকেন রোটেশন সিস্টেম',
          description_en: 'Hash passwords with argon2/bcrypt salt rounds. Implement short-lived access tokens (15 mins) and rotating refresh tokens stored in HTTP-only secure cookies.',
          description_bn: 'আর্গন২ বা বিক্রিপ্ট দিয়ে পাসওয়ার্ড হ্যাশ করা এবং নিরাপদ রিফ্রেশ টোকেন রোটেশন মেকানিজম বাস্তবায়ন।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Argon2 & Bcrypt Salts', 'JWT Access Tokens', 'HTTP-Only SameSite Cookies', 'Refresh Token Reuse Detection'],
          practicalTask_en: 'Implement an authentication service where logging in issues a 15-minute access token and an encrypted rotating refresh token.',
          practicalTask_bn: 'একটি পূর্ণাঙ্গ অথেনটিকেশন সার্ভিস বানাও যা টোকেন পাইরেসি রোধে রিফ্রেশ টোকেন রোটেশন নিশ্চিত করে।'
        },
        {
          id: 'be-p2-m2',
          title_en: 'Strict Request Validation with Zod & DDoS Rate Limiting',
          title_bn: 'জড দিয়ে কঠোর ইনপুট ভ্যালিডেশন ও ডিডস প্রতিরোধে রেট লিমিটিং',
          description_en: 'Enforce schema types on headers, params, query, and request body. Protect endpoints against brute force using token bucket rate limiting.',
          description_bn: 'রিকোয়েস্টের প্রতিটি ফিল্ড কঠোরভাবে যাচাই করা এবং ব্রুট-ফোর্স রোধে এপিআই রেট লিমিট বসানো।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['Zod Schema Inference', 'Validation Middleware', 'Rate Limiting Algorithms', 'CORS & Helmet Headers'],
          practicalTask_en: 'Add a strict Zod validator and IP-based rate limiter (10 requests per minute) to an OTP authentication endpoint.',
          practicalTask_bn: 'একটি ওটিপি এপিআইতে জড ভ্যালিডেশন ও প্রতি মিনিটে সর্বোচ্চ ১০ রিকোয়েস্টের রেট লিমিট যুক্ত করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'PostgreSQL 17 Relational Schema, ACID Transactions & Drizzle ORM',
      phaseTitle_bn: 'পোস্টগ্রেস ১৭ রিলেশনাল স্কিমা, এসিআইডি ট্রানজ্যাকশন ও ড্রজল ওআরএম',
      phaseSubtitle_en: 'Model enterprise database relations, indexes, and concurrency locks.',
      phaseSubtitle_bn: 'ডেটাবেস রিলেশনশিপ, ইনডেক্সিং, লক ও ট্রানজ্যাকশন পরিচালনা।',
      durationWeeks: 5,
      modules: [
        {
          id: 'be-p3-m1',
          title_en: 'PostgreSQL 17 Schemas, Foreign Keys & Drizzle Migrations',
          title_bn: 'পোস্টগ্রেস ১৭ স্কিমা, ফরেন কি ও ড্রজল মাইগ্রেশন',
          description_en: 'Design normalized tables (Users, Wallets, Ledgers), define foreign key cascade policies, write drizzle schema files, and manage automated migrations.',
          description_bn: 'ইউজার ও ওয়ালেট লেজার টেবিল তৈরি করে ফরেন কি যুক্ত করা এবং ড্রজল-কিট দিয়ে মাইগ্রেশন চালানো।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['PostgreSQL 17 Features', 'Foreign Key Constraints', 'Drizzle Schema Relations', 'drizzle-kit generate/migrate'],
          practicalTask_en: 'Define a double-entry ledger schema with Users, Accounts, and JournalEntries tables enforcing non-negative balances.',
          practicalTask_bn: 'একটি ডাবল-এন্ট্রি একাউন্টিং লেজার স্কিমা তৈরি করো যা কখনো নেগেটিভ ব্যালেন্স হতে দেবে না।'
        },
        {
          id: 'be-p3-m2',
          title_en: 'ACID Transactions, Row Locks & Query Optimization (EXPLAIN)',
          title_bn: 'এসিআইডি ট্রানজ্যাকশন, রো লক ও কুয়েরি অপ্টিমাইজেশন (EXPLAIN)',
          description_en: 'Prevent balance double-spend vulnerabilities using SELECT FOR UPDATE row locking and atomic ACID transactions. Optimize queries using B-Tree and GiST indexes.',
          description_bn: 'রো লকিং ও এসিআইডি ট্রানজ্যাকশন দিয়ে ব্যালেন্স চুরির রেস কন্ডিশন প্রতিরোধ ও ইনডেক্স দিয়ে কুয়েরির গতি বৃদ্ধি।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['ACID Isolation Levels', 'Row Locking (SELECT FOR UPDATE)', 'EXPLAIN ANALYZE', 'Composite & Partial Indexes'],
          practicalTask_en: 'Build a money transfer endpoint that uses an atomic database transaction with row locks, verified by concurrent Vitest load scripts.',
          practicalTask_bn: 'একটি মানি ট্রান্সফার এপিআই তৈরি করো যা একই সময়ে একাধিক রিকোয়েস্ট আসলেও ব্যালেন্সে কোনো গড়মিল হতে দেয় না।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Redis 7 Caching, AI Tool Endpoints, Docker & Production Viva',
      phaseTitle_bn: 'রেডিস ৭ ক্যাশিং, এআই টুল এন্ডপয়েন্ট, ডকার ও চাকরি ভাইভা প্রস্তুতি',
      phaseSubtitle_en: 'Scale APIs with memory caches, streaming SSE, and automated CI/CD.',
      phaseSubtitle_bn: 'ইন-মেমরি ক্যাশ, স্ট্রিমিং এআই এপিআই এবং ডকার সিআই/সিডি অটোমেশন।',
      durationWeeks: 5,
      modules: [
        {
          id: 'be-p4-m1',
          title_en: 'Redis 7 In-Memory Caching & Distributed Locks',
          title_bn: 'রেডিস ৭ ইন-মেমরি ক্যাশিং ও ডিস্ট্রিবিউটেড লক মেকানিজম',
          description_en: 'Implement the Cache-Aside pattern with TTL expiration. Use Redis distributed locks (Redlock) for multi-instance cron jobs and queue workers.',
          description_bn: 'রেডিস দিয়ে ডাটা ক্যাশ করা ও একাধিক সার্ভার ইনস্ট্যান্সের মধ্যে ক্রনজব সমন্বয়ের জন্য লক ব্যবহার।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['Cache-Aside Strategy', 'TTL and Stale-While-Revalidate', 'BullMQ Background Queues', 'Redis Distributed Locks'],
          practicalTask_en: 'Attach Redis caching and BullMQ background email jobs to an order checkout endpoint, cutting response times to under 15ms.',
          practicalTask_bn: 'অর্ডার চেকআউট এপিআইতে রেডিস ক্যাশ ও ব্যাকগ্রাউন্ড ইমেইল কিউ যুক্ত করে রেসপন্স টাইম ১৫ মিলি-সেকেন্ডের নিচে আনো।'
        },
        {
          id: 'be-p4-m2',
          title_en: 'AI Agent Function Calling & Streaming SSE Endpoints',
          title_bn: 'এআই এজেন্ট ফাংশন কলিং ও স্ট্রিমিং এসএসই এন্ডপয়েন্ট',
          description_en: 'Build backend routes that stream LLM tokens to clients using Server-Sent Events (SSE). Implement JSON tool routing where an AI model executes database lookup functions safely.',
          description_bn: 'এসএসই দিয়ে লাইভ টোকেন স্ট্রিমিং এবং নিরাপদ ডাটাবেস লুকআপের জন্য এআই ফাংশন কলিং এন্ডপয়েন্ট তৈরি।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['Server-Sent Events (SSE)', 'Structured Output Tool Calling', 'Sanitizing AI Tool Inputs', 'Model Context Protocol (MCP)'],
          practicalTask_en: 'Create a streaming API endpoint /api/ai/chat that streams answers via SSE and allows the model to query product stock levels safely.',
          practicalTask_bn: 'একটি স্ট্রিমিং চ্যাট এপিআই বানাও যা এসএসই দিয়ে ডাটা পাঠায় এবং এআই মডেলকে নিরাপদে স্টক চেক করার সুযোগ দেয়।'
        },
        {
          id: 'be-p4-m3',
          title_en: 'Docker Compose, Vitest Integration Tests & Senior Viva',
          title_bn: 'ডকার কম্পোজ, ভাইটেস্ট ইন্টিগ্রেশন টেস্ট ও সিনিয়র ভাইভা',
          description_en: 'Containerize backend and PostgreSQL with multi-stage Dockerfiles. Write integration tests with Vitest, generate Postman documentation, and master technical interview scenarios.',
          description_bn: 'ডকারফাইল তৈরি, ভাইটেস্ট দিয়ে অটোমেটেড টেস্ট রান করা ও টেকনিক্যাল ভাইভায় আত্মবিশ্বাসের সাথে উত্তর দেওয়া।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Multi-Stage Dockerfile', 'Vitest with Testcontainers', 'Postman Collections with Tests', 'System Design Viva'],
          practicalTask_en: 'Publish a public GitHub repository with a complete Dockerized backend, Vitest test suite, and live Postman collection documentation.',
          practicalTask_bn: 'তোমার ব্যাকএন্ড প্রজেক্টের সম্পূর্ণ ডকারাইজড রিপোজিটরি ও পোস্টম্যান কালেকশন লিংক সিভিতে যুক্ত করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'be-q1',
      question_en: 'What are the Event Loop phases in Node.js, and how does the microtask queue differ from the macrotask timers phase?',
      question_bn: 'নোড.জেএস ইভেন্ট লুপের মূল ধাপগুলো কী কী এবং মাইক্রোটাস্ক কিউ কীভাবে টাইমার ফেজের চেয়ে ভিন্নভাবে কাজ করে?',
      category: 'Node.js Internals',
      whyAsked_en: 'Distinguishes senior engineers who understand asynchronous execution ordering from junior developers who only use async/await blindly.',
      whyAsked_bn: 'প্রার্থী অ্যাসিঙ্ক কোডের এক্সিকিউশন অর্ডার সত্যিই বোঝে কি না তা যাচাই করার সবচেয়ে গুরুত্বপূর্ণ প্রশ্ন।',
      howToAnswer_en: 'Explain that the Node.js Event Loop operates across distinct phases: Timers (setTimeout/setInterval), Pending Callbacks, Poll (I/O events), Check (setImmediate), and Close callbacks. Between every individual phase, Node.js exhausts the Microtask Queue (which holds process.nextTick callbacks first, followed by resolved Promise callbacks). Because microtasks run immediately before returning to the event loop, recursive microtasks can starve the I/O poll phase.',
      howToAnswer_bn: 'নোড.জেএস ইভেন্ট লুপ টাইমারস, পেন্ডিং কলব্যাকস, পোল ও চেক ফেজ অতিক্রম করে চলে। প্রতিটি ফেজ শেষ হওয়ার পরপরই নোড মাইক্রোটাস্ক কিউ (process.nextTick এবং Promise.then) আগে এক্সিকিউট করে। ফলে মাইক্রোটাস্কের কাজ আগে সম্পন্ন না হওয়া পর্যন্ত ইভেন্ট লুপ পরবর্তী ফেজে যায় না।',
      commonMistakes_en: 'Thinking setTimeout(fn, 0) executes before Promise.resolve().then(fn). Microtasks always take precedence.',
      commonMistakes_bn: 'মনে করা যে setTimeout(0) প্রমিজের আগে চলে। বাস্তবে মাইক্রোটাস্ক সবসময় আগে কার্যকর হয়।'
    },
    {
      id: 'be-q2',
      question_en: 'How do database ACID transactions prevent race conditions during concurrent financial balance transfers?',
      question_bn: 'ডেটাবেস এসিআইডি ট্রানজ্যাকশন কীভাবে একই সময়ে হওয়া একাধিক ব্যালেন্স ট্রান্সফারের রেস কন্ডিশন প্রতিরোধ করে?',
      category: 'Database Concurrency',
      whyAsked_en: 'Vital for fintech, banking, and e-commerce platforms to avoid double-spending bugs where users transfer more money than they possess.',
      whyAsked_bn: 'ব্যাংকিং ও ফিনটেক অ্যাপে একই ব্যালেন্স দুবার খরচ করার বাগ প্রতিরোধে প্রার্থীর অভিজ্ঞতা যাচাই করতে।',
      howToAnswer_en: 'Explain Atomicity, Consistency, Isolation, and Durability. In a balance transfer between Account A and Account B, wrapping both queries in a transaction ensures either both succeed or both rollback (Atomicity). To prevent two simultaneous transactions from reading the old balance at the same time, we use row locking with SELECT ... FOR UPDATE or Serializable isolation level. This locks Account A row until the transaction commits, serializing concurrent requests safely.',
      howToAnswer_bn: 'এসিআইডি হলো অ্যাটোমিসিটি, কনসিস্টেন্সি, আইসোলেশন ও ডিউরেবিলিটি। ব্যালেন্স ট্রান্সফারে উভয় একাউন্ট সফলভাবে আপডেট না হলে পুরো ট্রানজ্যাকশন রোলব্যাক হয়ে যায়। আর একই সময়ে দুটি রিকোয়েস্ট আসলে SELECT FOR UPDATE দিয়ে সংশ্লিষ্ট রো লক করে রাখা হয়, যাতে প্রথম ট্রান্সফার শেষ না হওয়া পর্যন্ত দ্বিতীয়টি অপেক্ষা করতে বাধ্য হয়।',
      commonMistakes_en: 'Thinking simple IF checks in Node.js code can prevent race conditions without database row locks.',
      commonMistakes_bn: 'মনে করা যে সাধারণ জাভাস্ক্রিপ্ট if-else দিয়েই কনকারেন্সি সমস্যা আটকানো সম্ভব।'
    },
    {
      id: 'be-q3',
      question_en: 'Why are JWT access tokens kept short-lived (e.g. 15 minutes), and why must refresh tokens use HTTP-only cookies with rotation?',
      question_bn: 'জেডব্লিউটি অ্যাক্সেস টোকেনের মেয়াদ কেন কম রাখা হয় এবং রিফ্রেশ টোকেন কেন এইচটিটিপি-অনলি কুকি ও রোটেশনে রাখা বাধ্যতামূলক?',
      category: 'Backend Security',
      whyAsked_en: 'Tests whether candidate understands stateless authentication vulnerabilities and defense against Cross-Site Scripting (XSS).',
      whyAsked_bn: 'টোকেন চুরি ও ক্রস-সাইট স্ক্রিপ্টিং (XSS) আক্রমণ প্রতিরোধের বাস্তব জ্ঞান যাচাই করতে।',
      howToAnswer_en: 'JWT access tokens cannot be easily invalidated without database lookups because they are stateless. If a token is stolen, the attacker has access until expiration; hence, keeping it short-lived (10-15 minutes) minimizes the vulnerability window. Refresh tokens are stored in HTTP-only, Secure, SameSite cookies so JavaScript running in the browser (even malicious XSS injections) cannot read them. Refresh token rotation ensures that each time a refresh token is exchanged, a new one is issued and the old one is invalidated; if an old token is reused, the server detects token theft and revokes all active sessions for that user.',
      howToAnswer_bn: 'জেডব্লিউটি টোকেন সার্ভারে সেভ থাকে না, তাই একবার ইস্যু হলে মেয়াদ শেষ না হওয়া পর্যন্ত সহজে বাতিল করা যায় না। মেয়াদ ১৫ মিনিট রাখলে টোকেন চুরি হলেও ক্ষতি সীমিত থাকে। রিফ্রেশ টোকেন এইচটিটিপি-অনলি কুকিতে রাখলে কোনো এক্সএসএস স্ক্রিপ্ট তা পড়তে পারে না। আর রোটেশন ব্যবহারের ফলে একবার ব্যবহার হওয়া টোকেন পুনরায় আসলে সার্ভার বুঝতে পারে যে চুরি হয়েছে এবং সমস্ত সেশন স্বয়ংক্রিয়ভাবে বন্ধ করে দেয়।',
      commonMistakes_en: 'Storing long-lived JWTs in localStorage where any malicious frontend npm package or XSS script can steal it.',
      commonMistakes_bn: 'লোকাল স্টোরেজে আনপ্রোটেক্টেড টোকেন রাখা যা যেকোনো থার্ড পার্টি স্ক্রিপ্ট সহজেই চুরি করতে পারে।'
    },
    {
      id: 'be-q4',
      question_en: 'In 2026, how do you architect low-latency Server-Sent Events (SSE) for AI streaming responses compared to WebSockets or standard REST?',
      question_bn: '২০২৬ সালে এআই টোকেন স্ট্রিমিংয়ের জন্য ওয়েব-সকেটের তুলনায় সার্ভার-সেন্ট ইভেন্টস (SSE) কেন বেশি কার্যকর এবং কীভাবে এটি তৈরি করতে হয়?',
      category: 'Modern Protocols',
      whyAsked_en: 'Demonstrates modern 2026 AI product integration capability, contrasting HTTP/1.1 vs HTTP/2 streaming protocols.',
      whyAsked_bn: 'আধুনিক এআই প্রোডাক্টে টোকেন স্ট্রিমিং ও সার্ভার প্রোটোকল সম্পর্কে প্রার্থীর বাস্তব অভিজ্ঞতা দেখতে।',
      howToAnswer_en: 'Server-Sent Events (SSE) use standard HTTP with Content-Type: text/event-stream, Transfer-Encoding: chunked, and Connection: keep-alive. Unlike WebSockets, SSE is unidirectional (server to client), works seamlessly over standard HTTP/2 multiplexing, traverses corporate firewalls and proxies without custom protocols, and includes built-in browser reconnection logic (EventSource). For streaming generative AI token responses, client-to-server data is only the initial prompt (standard POST), while server-to-client requires streaming tokens, making SSE lighter, cheaper, and more reliable than full-duplex WebSockets.',
      howToAnswer_bn: 'এসএসই হলো স্ট্যান্ডার্ড এইচটিটিপি প্রোটোকল ভিত্তিক ইউনি-ডিরেকশনাল স্ট্রিমিং। এআই চ্যাটবটে ক্লায়েন্ট শুধু একবার প্রম্পট পাঠায়, আর সার্ভার একটানা টোকেন পাঠাতে থাকে। ওয়েব-সকেটের মতো ভারী ডুপ্লেক্স কানেকশন না বানিয়ে এসএসই ব্যবহার করলে প্রক্সি বা ফায়ারওয়ালে কোনো ঝামেলা হয় না, মেমরি খরচ অনেক কম হয় এবং ব্রাউজারে স্বয়ংক্রিয় রিকানেকশন সুবিধা পাওয়া যায়।',
      commonMistakes_en: 'Thinking WebSockets are required for all real-time streaming, ignoring the simpler, more resilient SSE standard.',
      commonMistakes_bn: 'মনে করা যে স্ট্রিমিং মানেই ভারী ওয়েব-সকেট ব্যবহার করতে হবে, এসএসইর কার্যকারিতা না জানা।'
    }
  ],
  freeCerts: [
    {
      id: 'fcc-backend-apis',
      title_en: 'freeCodeCamp: Back End Development and APIs Certification',
      title_bn: 'ফ্রি-কোড-ক্যাম্প: ব্যাকএন্ড ডেভেলপমেন্ট ও এপিআই ভেরিফায়েড সার্টিফিকেশন',
      provider: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 300,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'World-renowned 300-hour verified credential testing real Node.js, Express, and microservice projects.',
      relevance_bn: 'বিশ্বজুড়ে স্বীকৃত ৩০০ ঘণ্টার ফ্রি প্র্যাকটিক্যাল ব্যাকএন্ড এপিআই সার্টিফিকেশন।'
    },
    {
      id: 'harvard-cs50-backend',
      title_en: 'Harvard University CS50x: Computer Science Backend & Database Module',
      title_bn: 'হার্ভার্ড ইউনিভার্সিটি সিএস৫০: কম্পিউটার সায়েন্স ব্যাকএন্ড ও ডেটাবেস',
      provider: 'Harvard University / edX',
      url: 'https://cs50.harvard.edu/x/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 60,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Harvard foundational credential verifying algorithms, SQL database architecture, memory management, and HTTP sockets.',
      relevance_bn: 'হার্ভার্ড বিশ্ববিদ্যালয়ের অফিশিয়াল উন্মুক্ত কম্পিউটার সায়েন্স কোর্স ও ভেরিফায়েড প্রজেক্ট।'
    },
    {
      id: 'postman-api-fundamentals',
      title_en: 'Postman Student Expert Verified Certification',
      title_bn: 'পোস্টম্যান স্টুডেন্ট এক্সপার্ট ভেরিফায়েড ব্যাজ',
      provider: 'Postman',
      url: 'https://academy.postman.com',
      mobileAccessible: true,
      language: 'en',
      durationHours: 15,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official verified digital badge directly from Postman validating practical REST API request testing, assertions, and environments.',
      relevance_bn: 'পোস্টম্যানের নিজস্ব অফিশিয়াল স্টুডেন্ট এক্সপার্ট ব্যাজ যা এপিআই টেস্টিং দক্ষতার সরাসরি প্রমাণ।'
    }
  ]
};
