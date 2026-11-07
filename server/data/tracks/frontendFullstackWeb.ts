import type { CareerTrack } from '../../../shared/types.js';

export const frontendFullstackWebTrack: Omit<CareerTrack, 'id'> = {
  slug: 'frontend-fullstack-web',
  title_en: 'Frontend and Full-Stack Software Engineering',
  title_bn: 'ফ্রন্টএন্ড ও ফুল-স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ারিং (২০২৬ এডিশন)',
  summary_en: 'Calibrated for the 2026 post-AI software landscape. Master React 19, TypeScript strict mode, Next.js 15, Node.js 22, PostgreSQL with pgvector, and AI agent integration tools.',
  summary_bn: '২০২৬ সালের পোস্ট-এআই সফটওয়্যার শিল্পের চাহিদানুযায়ী সাজানো। রিয়্যাক্ট ১৯, টাইপস্ক্রিপ্ট, নেক্সট.জেএস ১৫, পোস্টগ্রেসকিউএল ও এআই টুলিং দিয়ে আধুনিক ফুল-স্ট্যাক অ্যাপ্লিকেশন তৈরির ট্র্যাক।',
  pivotAdvice_en: 'In 2026, writing repetitive boilerplate code is handled in seconds by AI assistants like Cursor and Claude. Companies in Dhaka and remote firms hire engineers who understand system architecture, data modeling, security auditing, and automated testing. If you lack a PC (8GB RAM), start with Linux or ISP networking first.',
  pivotAdvice_bn: '২০২৬ সালে সাধারণ কোড লেখার কাজ এআই সহকারীরা নিমেষেই করে ফেলে। তাই ঢাকার আধুনিক সফটওয়্যার কোম্পানি ও রিমোট ফার্মগুলো এখন সিস্টেম আর্কিটেকচার, সিকিউরিটি অডিট ও টেস্টিং বোঝে এমন প্রকৌশলীদের নিয়োগ দেয়। তোমার যদি বর্তমানে পিসি না থাকে, তবে প্রথমে আইএসপি নেটওয়ার্কিং বা লিনাক্স দিয়ে শুরু করা সুবিধাজনক।',
  minPcRequired: 'standard',
  dayToDay_en: [
    'Architecting React 19 Server and Client Components with Next.js 15 App Router and Tailwind v4.',
    'Designing type-safe REST and streaming endpoints using Node.js 22, Fastify/Express, and Zod validation.',
    'Building relational schemas and vector search queries in PostgreSQL 17 using Drizzle ORM and pgvector.',
    'Auditing and verifying AI-assisted code for security flaws, race conditions, and performance bottlenecks.',
    'Writing automated unit and integration tests with Vitest and Playwright within GitHub Actions CI/CD pipelines.'
  ],
  dayToDay_bn: [
    'রিয়্যাক্ট ১৯ ও নেক্সট.জেএস ১৫ অ্যাপ রাউটার দিয়ে আধুনিক ওয়েব কম্পোনেন্ট তৈরি করা।',
    'নোড.জেএস ২২ ও ড্রপ-ইন ওআরএম (Drizzle) দিয়ে টাইপ-সেফ ব্যাকএন্ড এপিআই ও স্ট্রিমিং এন্ডপয়েন্ট তৈরি।',
    'পোস্টগ্রেসকিউএল ১৭ ডেটাবেস ডিজাইন এবং এআই সিমিলারিটি সার্চের জন্য pgvector পরিচালনা।',
    'এআই-উৎপাদিত কোডের ভুলত্রুটি ও নিরাপত্তা ঝুঁকি যাচাই (Code Audit) এবং ডিবাগিং করা।',
    'ভাইটেস্ট (Vitest) ও প্লে-রাইট (Playwright) দিয়ে স্বয়ংক্রিয় টেস্টিং ও সিআই/সিডি অটোমেশন নিশ্চিত করা।'
  ],
  mustHaveSkills: [
    {
      id: 'js-ts-2026',
      name: 'TypeScript Strict & Modern JavaScript (ES2026)',
      category: 'Language Core',
      importance: 'Essential',
      description_en: 'Strict type inference, generics, async generators, promises, and modern memory patterns.',
      description_bn: 'কঠোর টাইপস্ক্রিপ্ট, জেনেরিক্স ও আধুনিক অ্যাসিনক্রোনাস জাভাস্ক্রিপ্ট প্যাটার্ন।'
    },
    {
      id: 'react-19-next-15',
      name: 'React 19 & Next.js 15 App Architecture',
      category: 'Frontend',
      importance: 'Essential',
      description_en: 'React Server Components, Actions, optimistic mutations, Suspense boundaries, and Tailwind v4.',
      description_bn: 'রিয়্যাক্ট ১৯ সার্ভার কম্পোনেন্টস, একশনস ও টেইলউইন্ড সিএসএস ভার্সন ৪।'
    },
    {
      id: 'backend-pg-drizzle',
      name: 'Node.js 22 & PostgreSQL 17 (Drizzle + pgvector)',
      category: 'Backend',
      importance: 'Essential',
      description_en: 'Type-safe Drizzle schema modeling, migrations, connection pooling, and semantic vector indexing.',
      description_bn: 'পোস্টগ্রেসকিউএল রিলেশনাল টেবিল মডেলিং, মাইগ্রেশন ও ড্রপ-ইন ওআরএম কুয়েরি।'
    },
    {
      id: 'ai-tooling-audit',
      name: 'AI Agent Tooling & Code Auditing (2026 Baseline)',
      category: 'Modern Workflow',
      importance: 'Essential',
      description_en: 'Orchestrating AI tools, prompt context management, Model Context Protocol (MCP), and security auditing.',
      description_bn: 'এআই কোডিং এজেন্টের সঠিক ব্যবহার, কোড ভেরিফিকেশন ও নিরাপত্তা নিশ্চিতকরণ।'
    },
    {
      id: 'automated-testing-cicd',
      name: 'Automated Testing (Vitest & Playwright) & CI/CD',
      category: 'Quality Assurance',
      importance: 'Essential',
      description_en: 'Test-driven development, end-to-end browser tests, Docker containerization, and GitHub Actions.',
      description_bn: 'স্বয়ংক্রিয় টেস্ট তৈরি, ডকার কনটেইনার ও গিটহাব একশন সিআই/সিডি অটোমেশন।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Gulshan, Banani, Uttara, Dhanmondi) & Hybrid/Remote BD',
      entrySalary: { min: 30000, max: 50000, currency: 'BDT', formatted: '30,000 - 50,000 BDT' },
      midSalary: { min: 65000, max: 135000, currency: 'BDT', formatted: '65,000 - 135,000 BDT' },
      seniorSalary: { min: 150000, max: 300000, currency: 'BDT', formatted: '150,000 - 300,000 BDT' },
      hiringSectors: [
        'Fintech Platforms & Mobile Wallets (bKash, Nagad, Upay)',
        'E-Commerce & Logistics Giants (Chaldal, Pathao, Daraz)',
        'Offshore Software Houses & AI Agencies in Dhaka (Brain Station 23, Enosis, TigerIT)',
        'HealthTech, EdTech & Enterprise SaaS Startups'
      ],
      cvExpectations: [
        'Live deployed Next.js 15 / React 19 full-stack applications with public GitHub source code',
        'Ability to explain database relations, index optimizations, and architectural tradeoffs in person',
        'Demonstrated automated test suites (Vitest/Playwright) to prove code reliability',
        'Effective use of modern AI engineering tools combined with rock-solid security awareness'
      ],
      localDemandSummary_en: 'In late 2026, Dhaka software companies evaluate candidates by technical depth, problem-solving reasoning, and practical GitHub repositories. A CST diploma holder with verified live full-stack projects is recruited on equal terms with university graduates.',
      localDemandSummary_bn: '২০২৬ সালের সফটওয়্যার বাজারে সনদের চেয়ে বাস্তব প্রজেক্টের গভীরতা বেশি মূল্যবান। তোমার গিটহাবে যদি টেস্ট-কাভার্ড, সুরক্ষিত ও লাইভ ফুল-স্ট্যাক প্রজেক্ট থাকে, তবে ডিপ্লোমা শেষ করেই সম্মানজনক বেতনে সফটওয়্যার ইঞ্জিনিয়ার হিসেবে ক্যারিয়ার শুরু করা সম্ভব।'
    },
    targetCountries: [
      {
        region: 'Europe',
        countryName_en: 'Germany, Netherlands, and Estonia',
        countryName_bn: 'জার্মানি, নেদারল্যান্ডস ও এস্তোনিয়া',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ',
        visaReality_en: 'EU Blue Card available for skilled developers with 3+ years demonstrable experience and English proficiency, irrespective of diploma degree status if portfolio demonstrates high architectural standard.',
        visaReality_bn: 'ইংরেজি দক্ষতা ও ৩ বছরের বাস্তব প্রজেক্ট পোর্টফোলিও থাকলে ইউরোপীয় ব্লু-কার্ড টেক ভিসার চমৎকার সুযোগ রয়েছে।',
        averageSalaryUsdOrLocal: '50,000 - 85,000 EUR / year (approx 6,500,000 - 11,000,000 BDT)',
        requiredExperienceYears: '3 to 5 years'
      },
      {
        region: 'Middle East',
        countryName_en: 'UAE (Dubai) and Saudi Arabia (Riyadh)',
        countryName_bn: 'সংযুক্ত আরব আমিরাত (দুবাই) ও সৌদি আরব (রিয়াদ)',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ',
        visaReality_en: 'Rapid digitization and fintech expansion in Riyadh and Dubai with direct tax-free employment contracts for full-stack and cloud engineers.',
        visaReality_bn: 'দুবাই ও রিয়াদে ট্যাক্স-ফ্রি আকর্ষণীয় বেতনে পূর্ণাঙ্গ কর্মসংস্থানের সুযোগ।',
        averageSalaryUsdOrLocal: '12,000 - 24,000 AED / month (approx 400,000 - 800,000 BDT)',
        requiredExperienceYears: '2 to 4 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$1,000 - $4,000 USD',
      competitionLevel: 'Moderate to High',
      competitionLevel_bn: 'মাঝারি থেকে তীব্র',
      englishRequirement: 'Professional English for code reviews, architecture syncs, and pull requests',
      englishRequirement_bn: 'কোড রিভিউ ও টেকনিক্যাল মিটিংয়ের উপযোগী পেশাদার ইংরেজি',
      realities_en: [
        'Remote startups in the US, Europe, and Singapore hire full-stack developers on asynchronous contracts.',
        'A verified Next.js 15 app with passing Playwright and Vitest test suites on GitHub earns immediate trust.'
      ],
      realities_bn: [
        'আমেরিকা, ইউরোপ ও সিঙ্গাপুরের স্টার্টআপগুলো ফুল-স্ট্যাক রিমোট ডেভেলপার নিয়মিত হায়ার করে।',
        'গিটহাবে টেস্ট-কাভার্ড নেক্সট.জেএস ১৫ প্রজেক্ট থাকলে ইন্টারভিউ কল নিশ্চিত করা সহজ হয়।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Modern JavaScript, TypeScript Strict & DOM Mastery',
      phaseTitle_bn: 'প্রথম পর্ব: আধুনিক জাভাস্ক্রিপ্ট ও টাইপস্ক্রিপ্ট ফান্ডামেন্টালস',
      phaseSubtitle_en: 'Day 1 to 30: ES2026, TypeScript strict mode, responsive Tailwind v4, and Git.',
      phaseSubtitle_bn: '১ থেকে ৩০ দিন: আধুনিক জাভাস্ক্রিপ্ট, কঠোর টাইপস্ক্রিপ্ট, টেইলউইন্ড ও গিটহাব।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-html-css-tailwind-v4',
          title_en: 'Semantic Markup, Responsive Layouts & Tailwind CSS v4',
          title_bn: 'সিমান্টিক এইচটিএমএল ও আধুনিক টেইলউইন্ড সিএসএস ভার্সন ৪',
          description_en: 'Building high-performance mobile-first responsive web interfaces with modern CSS grid, flexbox, and Tailwind v4 engine.',
          description_bn: 'মোবাইল ও ডেসকটপে নিখুঁত রেসপনসিভ ওয়েব ইন্টারফেস ও টেইলউইন্ড ডিজাইন তৈরি।',
          estimatedDays: 10,
          mobileAccessible: false,
          keyTopics: ['Flexbox and CSS Grid layout', 'Tailwind v4 theme variables', 'Mobile-first breakpoints'],
          practicalTask_en: 'Build an accessible, high-speed polytechnic student portal landing page with dark mode support.',
          practicalTask_bn: 'একটি ডার্ক-মোড সমৃদ্ধ আধুনিক পলিটেকনিক স্টুডেন্ট পোর্টাল হোমপেজ তৈরি করো।'
        },
        {
          id: 'mod-ts-js-core-2026',
          title_en: 'TypeScript Strict Mode & Async JavaScript Foundations',
          title_bn: 'টাইপস্ক্রিপ্ট স্ট্রিক্ট মোড ও আধুনিক অ্যাসিনক্রোনাস প্রোগ্রামিং',
          description_en: 'Variables, closures, array methods, async/await, promises, generics, and strict type safety without using any.',
          description_bn: 'টাইপস্ক্রিপ্ট ইন্টারফেস, জেনেরিক্স, এরে মেথড ও অ্যাসিনক্রোনাস প্রমিজ হ্যান্ডলিং।',
          estimatedDays: 20,
          mobileAccessible: false,
          keyTopics: ['TypeScript interfaces & types', 'Promises and async/await error handling', 'Array methods (map, filter, reduce)'],
          practicalTask_en: 'Build an offline-first CST Semester CGPA & Credit calculator with LocalStorage type-safe schema.',
          practicalTask_bn: 'টাইপস্ক্রিপ্ট ব্যবহার করে একটি নির্ভুল সেমিস্টার জিপিএ ও ক্রেডিট ক্যালকুলেটর বানাও।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: React 19 Architecture, Server Components & Testing',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: রিয়্যাক্ট ১৯ আর্কিটেকচার, স্টেট ও স্বয়ংক্রিয় টেস্টিং',
      phaseSubtitle_en: 'Day 31 to 60: React 19 hooks, Server Actions, Vitest testing, and API integration.',
      phaseSubtitle_bn: '৩১ থেকে ৬০ দিন: রিয়্যাক্ট ১৯ হুকস, অপটিমিস্টিক মিউটেশন ও লাইভ এপিআই হ্যান্ডলিং।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-react-19-actions',
          title_en: 'React 19 Components, Server Actions & Modern State',
          title_bn: 'রিয়্যাক্ট ১৯ কম্পোনেন্ট আর্কিটেকচার ও সার্ভার একশনস',
          description_en: 'Component modularity, useActionState, useOptimistic, custom hooks, and clean state separation.',
          description_bn: 'রিয়্যাক্ট ১৯ এর নতুন হুকস, অপটিমিস্টিক ইউআই আপডেট ও স্টেট ম্যানেজমেন্ট।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['useActionState and useOptimistic', 'Custom reusable hooks', 'Form validation with Zod'],
          practicalTask_en: 'Build an interactive job board for CST engineers featuring instant optimistic bookmarking and filters.',
          practicalTask_bn: 'সিএসটি প্রকৌশলীদের জন্য একটি ক্যাটাগরিভিত্তিক লাইভ রিয়্যাক্ট ১৯ জব বোর্ড তৈরি করো।'
        },
        {
          id: 'mod-vitest-api-query',
          title_en: 'Data Fetching, Cache Invalidation & Unit Testing with Vitest',
          title_bn: 'এপিআই ক্যাশিং, ডাটা ফেচিং ও ভাইটেস্ট (Vitest) ইউনিট টেস্ট',
          description_en: 'Using TanStack Query for cache synchronization and writing automated unit test suites with Vitest.',
          description_bn: 'ট্যানস্ট্যাক কুয়েরি দিয়ে ব্যাকএন্ডের সাথে ক্যাশ সিঙ্ক এবং স্বয়ংক্রিয় ইউনিট টেস্ট লেখা।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['TanStack Query cache management', 'Vitest assertions & component tests', 'Skeleton loading states'],
          practicalTask_en: 'Write unit tests for a full-featured e-commerce shopping cart and connect it to a live API.',
          practicalTask_bn: 'একটি শপিং কার্ট মডিউলের জন্য স্বয়ংক্রিয় টেস্ট লিখো এবং লাইভ এপিআইতে যুক্ত করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: Backend APIs with Node.js 22, PostgreSQL 17 & Vector Search',
      phaseTitle_bn: 'তৃতীয় পর্ব: নোড ২২, পোস্টগ্রেসকিউএল ১৭ ও ভেক্টর সার্চ ব্যাকএন্ড',
      phaseSubtitle_en: 'Day 61 to 90: REST & streaming endpoints, Drizzle ORM, pgvector, and JWT security.',
      phaseSubtitle_bn: '৬১ থেকে ৯০ দিন: সিকিউর ব্যাকএন্ড এপিআই, রিলেশনাল ডেটাবেস ও এআই সার্চ।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-node-22-express-zod',
          title_en: 'Node.js 22 Backend Architecture & Secure REST/Streaming APIs',
          title_bn: 'নোড ২২ ব্যাকএন্ড আর্কিটেকচার ও সিকিউর রেস্ট এপিআই',
          description_en: 'Controller-service separation, middleware pipelines, JWT auth with refresh rotation, and rate limiting with Redis.',
          description_bn: 'পরিচ্ছন্ন ব্যাকএন্ড কোড স্ট্রাকচার, রিফ্রেশ টোকেন রোটেশন ও রেডিস দিয়ে রেট লিমিটিং।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['Controller-service architecture', 'JWT auth & bcrypt password hashing', 'Server-Sent Events (SSE) streaming'],
          practicalTask_en: 'Build an authentication API with secure password hashing, email verification tokens, and session refresh.',
          practicalTask_bn: 'পাসওয়ার্ড হ্যাশিং ও সিকিউর রিফ্রেশ টোকেন সহ সম্পূর্ণ প্রমাণীকৃত ব্যাকএন্ড তৈরি করো।'
        },
        {
          id: 'mod-postgres-17-pgvector',
          title_en: 'PostgreSQL 17 Relational Schema, Drizzle ORM & pgvector Indexing',
          title_bn: 'পোস্টগ্রেসকিউএল ১৭ স্কিমা ডিজাইন, ওআরএম ও pgvector ভেক্টর সার্চ',
          description_en: 'Foreign key relations, composite indexing, Drizzle type-safe queries, migrations, and semantic vector embeddings.',
          description_bn: 'পোস্টগ্রেস টেবিল রিলেশনশিপ, ইনডেক্সিং, ডেটাবেস মাইগ্রেশন ও এআই সার্চ ইন্ডেক্স।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['Foreign key cascades and indexes', 'Drizzle ORM relations and joins', 'pgvector cosine distance queries'],
          practicalTask_en: 'Design, seed, and query a polytechnic campus management database supporting semantic student search.',
          practicalTask_bn: 'একটি পলিটেকনিক ম্যানেজমেন্ট ডেটাবেস তৈরি করো যাতে সেমান্টিক ভেক্টর সার্চ কাজ করে।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: Cloud Deployment, Docker, AI Workflows & Viva Preparation',
      phaseTitle_bn: 'চতুর্থ পর্ব: ক্লাউড ডিপ্লয়মেন্ট, ডকার, এআই কোডিং টুলস ও ভাইভা',
      phaseSubtitle_en: 'Day 91 to 120: Docker containers, Vercel/VPS deploy, CI/CD, and Dhaka tech viva simulations.',
      phaseSubtitle_bn: '৯১ থেকে ১২০ দিন: ডকার কনটেইনার, লাইভ ক্লাউড পাবলিকেশন ও সফটওয়্যার ভাইভা প্রস্তুতি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-docker-cloud-deploy',
          title_en: 'Docker Containerization & Production Cloud Deployment',
          title_bn: 'ডকার কনটেইনার তৈরি ও প্রোডাকশন ক্লাউডে লাইভ ডিপ্লয়মেন্ট',
          description_en: 'Multi-stage Dockerfiles, Docker Compose local environments, Vercel frontend deployment, and cloud VPS hosting.',
          description_bn: 'ডকার কনটেইনারাইজেশন, ক্লাউড সার্ভারে ডিপ্লয়মেন্ট ও ডোমেন-এসএসএল কনফিগারেশন।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['Multi-stage Docker build', 'Docker Compose service orchestration', 'Environment secrets and SSL setup'],
          practicalTask_en: 'Containerize and deploy your full-stack web application with live production URLs on custom domain.',
          practicalTask_bn: 'তোমার তৈরি করা সম্পূর্ণ ফুল-স্ট্যাক প্রজেক্ট ডকার ও ক্লাউড সার্ভারে লাইভ হোস্ট করো।'
        },
        {
          id: 'mod-2026-viva-simulation',
          title_en: '2026 Post-AI Technical Interview & Architecture Defense',
          title_bn: '২০২৬ টেকনিক্যাল ইন্টারভিউ ও আর্কিটেকচার ডিফেন্স সিমুলেশন',
          description_en: 'Defending code architecture, auditing AI code, explaining database query plans (EXPLAIN ANALYZE), and live coding.',
          description_bn: 'কোড আর্কিটেকচার ডিফেন্স, এআই কোড ভেরিফিকেশন ও লাইভ কোডিং ইন্টারভিউয়ের প্রস্তুতি।',
          estimatedDays: 18,
          mobileAccessible: true,
          keyTopics: ['Explaining system tradeoffs', 'Auditing AI generated code', 'PostgreSQL EXPLAIN ANALYZE profiling'],
          practicalTask_en: 'Conduct a recorded mock interview walking through your schema decisions, test coverage, and security audit.',
          practicalTask_bn: 'নিজের প্রজেক্টের কোড, সিকিউরিটি ও ডেটাবেস ডিজাইন নিয়ে পূর্ণাঙ্গ টেকনিক্যাল ভাইভা দাও।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'dev-2026-q1',
      question_en: 'When using AI coding assistants to generate code, what specific security vulnerabilities and bugs do you check for before committing to production?',
      question_bn: 'এআই কোডিং অ্যাসিস্ট্যান্ট দিয়ে কোড তৈরি করার সময় প্রোডাকশনে কমিট করার আগে তুমি কী কী নিরাপত্তা ত্রুটি বিশেষভাবে চেক করো?',
      category: '2026 Post-AI Security',
      whyAsked_en: 'In late 2026, companies assume candidates use AI tools. This question separates engineers who blind-paste code from engineers who critically audit and verify code.',
      whyAsked_bn: '২০২৬ সালের ইন্টারভিউতে প্রার্থীর এআই কোড যাচাই ও অডিট করার সক্ষমতা পরীক্ষার জন্য এটি করা হয়।',
      howToAnswer_en: '1) SQL Injection: Check that all database queries use parameterized inputs rather than string concatenation. 2) Missing Authentication / Authorization: Verify that protected routes enforce JWT token verification and tenant boundaries (IDOR prevention). 3) Input Validation: Ensure all request bodies are parsed through strict Zod schemas. 4) Resource Exhaustion: Check for missing pagination limits or unindexed database queries that could crash the server. 5) Secrets Exposure: Ensure no API keys or environment secrets are hardcoded in client-side bundles.',
      howToAnswer_bn: '১) এসকিউএল ইনজেকশন: ডেটাবেস কুয়েরিতে প্যারামিটারাইজড কুয়েরি ব্যবহৃত হয়েছে কিনা দেখা। ২) অনুমোদন ও অথেনটিকেশন: সব রাউটে টোকেন ভ্যালিডেশন এবং আইডিওআর (IDOR) প্রিভেনশন নিশ্চিত করা। ৩) ইনপুট ভ্যালিডেশন: জেড (Zod) দিয়ে কঠোরভাবে টাইপ চেক করা। ৪) সার্ভার ওভারলোড: পেজিনেশন ও আন-ইনডেক্সড কুয়েরি চেক করা। ৫) সিক্রেট লিক: ফ্রন্টএন্ড কোডে কোনো এপিআই কি বা টোকেন সরাসরি হার্ডকোড করা আছে কিনা তা নিরীক্ষা করা।',
      commonMistakes_en: 'Saying you never use AI tools, or stating that AI generated code is automatically bug-free and tested.',
      commonMistakes_bn: 'এআই কোড সবসময় নির্ভুল দাবি করা অথবা কোড অডিটের কোনো সুনির্দিষ্ট ধাপ না বলতে পারা।'
    },
    {
      id: 'dev-2026-q2',
      question_en: 'In React 19 and Next.js 15, what is the exact difference between Server Components and Client Components, and when should you use each?',
      question_bn: 'রিয়্যাক্ট ১৯ ও নেক্সট.জেএস ১৫-এ সার্ভার কম্পোনেন্টস ও ক্লায়েন্ট কম্পোনেন্টসের মধ্যে মূল পার্থক্য কী এবং কখন কোনটি ব্যবহার করবে?',
      category: 'React 19 Architecture',
      whyAsked_en: 'Tests whether candidate understands modern component execution environments and client bundle optimization.',
      whyAsked_bn: 'রিয়্যাক্ট ১৯ এর নতুন এক্সিকিউশন মডেল ও ব্রাউজার বান্ডেল অপটিমাইজেশন সম্পর্কে ধারণা যাচাই।',
      howToAnswer_en: 'React Server Components (RSC) execute exclusively on the server at request or build time. They can directly query databases, read environment secrets, and produce zero client JavaScript bundle size. Client Components (declared with "use client") execute on both server (for initial SSR HTML) and hydrate on the browser, allowing event listeners (onClick), browser APIs, and state hooks (useState, useEffect). The rule of thumb: Default to Server Components for data fetching and layout; use Client Components only at the leaves of the component tree where interactivity is strictly required.',
      howToAnswer_bn: 'সার্ভার কম্পোনেন্টস শুধু সার্ভারে চলে, সরাসরি ডেটাবেস কুয়েরি করতে পারে এবং ক্লায়েন্ট বান্ডেল সাইজ শূন্য রাখে। ক্লায়েন্ট কম্পোনেন্টস ("use client") ব্রাউজারে ইন্টারঅ্যাকশন (যেমন ক্লিক ইভেন্ট, useState, useEffect) পরিচালনার জন্য ব্যবহৃত হয়। নিয়ম হলো: ডেটা আনা ও পেজ লেআউটের জন্য সার্ভার কম্পোনেন্ট ব্যবহার করা এবং শুধুমাত্র যেখানে ক্লিক বা ফর্ম ইন্টারেকশন দরকার সেখানে ক্লায়েন্ট কম্পোনেন্ট ব্যবহার করা।',
      commonMistakes_en: 'Putting "use client" at the top of every file or assuming Server Components cannot pass data to Client Components.',
      commonMistakes_bn: 'সব ফাইলের উপরে অযথা "use client" বসিয়ে দেওয়া বা সার্ভার কম্পোনেন্ট কীভাবে কাজ করে তা না জানা।'
    },
    {
      id: 'dev-2026-q3',
      question_en: 'What is vector search with pgvector in PostgreSQL 17, and how does it enable AI similarity search in a full-stack application?',
      question_bn: 'পোস্টগ্রেসকিউএল ১৭-এ pgvector ভেক্টর সার্চ কী এবং এটি একটি ফুল-স্ট্যাক অ্যাপে কীভাবে এআই সিমিলারিটি সার্চ নিশ্চিত করে?',
      category: 'Modern Databases & AI',
      whyAsked_en: 'Evaluates if developer understands semantic search and RAG knowledge retrieval in modern software systems.',
      whyAsked_bn: 'আধুনিক ফুল-স্ট্যাক সিস্টেমে এআই ভেক্টর এমবেডিং ও সিমিলারিটি কুয়েরি পরিচালনার দক্ষতা যাচাই।',
      howToAnswer_en: 'Traditional SQL searches exact text keywords using LIKE or full-text tsvector. Vector search stores numerical embeddings (dense float vectors generated by AI embedding models like text-embedding-3 or local Ollama models) representing semantic meaning. Using the pgvector extension, PostgreSQL indexes these vectors using HNSW (Hierarchical Navigable Small World) and calculates cosine distance (<=>) to find the most contextually relevant documents or products in milliseconds.',
      howToAnswer_bn: 'সাধারণ এসকিউএল শুধু নির্দিষ্ট শব্দ খোঁজে (LIKE কুয়েরি)। আর ভেক্টর সার্চ হলো এআই মডেলের মাধ্যমে শব্দের অর্থকে সংখ্যাসূচক ভেক্টরে রূপান্তর করে রাখা। পোস্টগ্রেসের pgvector এক্সটেনশন দিয়ে HNSW ইনডেক্সিং এবং কোসাইন ডিসট্যান্স মেপে মিল থাকা কনটেন্ট বা ডেটা দ্রুততম সময়ে খুঁজে বের করা যায়।',
      commonMistakes_en: 'Confusing traditional relational indexing (B-Tree) with vector distance indexing (HNSW/IVFFlat).',
      commonMistakes_bn: 'সাধারণ বি-ট্রি ইনডেক্সের সাথে এআই ভেক্টর ইনডেক্সের পার্থক্য না বোঝা।'
    },
    {
      id: 'dev-2026-q4',
      question_en: 'How do you implement streaming AI responses using Server-Sent Events (SSE) in a Node.js Express backend and consume them in React 19?',
      question_bn: 'নোড.জেএস এক্সপ্রেস ব্যাকএন্ডে সার্ভার-সেন্ট ইভেন্টস (SSE) দিয়ে কীভাবে স্ট্রিমিং রেসপন্স তৈরি করবে এবং রিয়্যাক্টে তা প্রদর্শন করবে?',
      category: 'API Streaming',
      whyAsked_en: 'Streaming token generation is the standard UX pattern for modern AI web apps to eliminate multi-second loading latency.',
      whyAsked_bn: 'ব্যবহারকারী যাতে এআই উত্তরের জন্য দীর্ঘক্ষণ অপেক্ষা না করে টাইপিং ইফেক্টে লাইভ উত্তর পায় সেই দক্ষতা দেখা।',
      howToAnswer_en: 'In Express, set headers Content-Type to text/event-stream, Cache-Control to no-cache, and Connection to keep-alive. Flush incoming AI model tokens to the response stream using res.write(`data: ${JSON.stringify(chunk)}\\n\\n`). In React 19, consume the stream using fetch and getReader() on response.body, appending chunks to state as they arrive without waiting for the full response to finish.',
      howToAnswer_bn: 'এক্সপ্রেস ব্যাকএন্ডে হেডার সেট করতে হয় text/event-stream। এরপর এআই থেকে আসা প্রতিটি টোকেন res.write() দিয়ে রিয়েলটাইমে ক্লায়েন্টে পুশ করা হয়। ফ্রন্টএন্ডে response.body.getReader() দিয়ে প্রতিটি খণ্ড আশা মাত্রই স্ক্রিনে লাইভ যুক্ত করে দেখানো হয়।',
      commonMistakes_en: 'Using standard JSON responses that buffer the entire text before returning to the user.',
      commonMistakes_bn: 'পুরো লেখা শেষ হওয়া পর্যন্ত অপেক্ষা করে সাধারণ রেসপন্স পাঠানো যাতে ইউজার ফ্রাস্ট্রেটেড হয়।'
    },
    {
      id: 'dev-2026-q5',
      question_en: 'How do you optimize an application experiencing slow database queries using PostgreSQL EXPLAIN ANALYZE?',
      question_bn: 'একটি ধীরগতির ডেটাবেস কুয়েরির কারণ নির্ণয় ও সমাধান করার জন্য পোস্টগ্রেসকিউএল EXPLAIN ANALYZE কীভাবে ব্যবহার করবে?',
      category: 'Database Performance',
      whyAsked_en: 'Distinguishes practical engineers who understand database query execution plans from junior coders who guess.',
      whyAsked_bn: 'ডেটাবেস পারফরম্যান্স সমস্যা অনুমান না করে বৈজ্ঞানিক উপায়ে সমাধান করার সক্ষমতা যাচাই।',
      howToAnswer_en: 'Prepend EXPLAIN (ANALYZE, BUFFERS) before the SQL query. Look for: 1) Sequential Scans (Seq Scan) on large tables, which indicates missing indexes. 2) Cost discrepancies between estimated rows and actual rows, which indicates outdated table statistics (run ANALYZE table_name). 3) Nested Loop joins on large datasets without indexed foreign keys. Resolve bottlenecks by creating targeted composite or partial B-Tree indexes, restructuring joins, or adding Redis caching for read-heavy hotspots.',
      howToAnswer_bn: 'কুয়েরির আগে EXPLAIN ANALYZE বসিয়ে এক্সিকিউশন প্ল্যান দেখতে হয়। যদি বড় টেবিলে "Seq Scan" দেখায়, তার মানে প্রয়োজনীয় ইনডেক্স নেই। তখন নির্দিষ্ট কলামের উপর বি-ট্রি (B-Tree) ইনডেক্স তৈরি করতে হয় এবং ঘনঘন পঠিত ডেটাতে রেডিস ক্যাশিং যুক্ত করতে হয়।',
      commonMistakes_en: 'Blindly adding indexes on every table column without checking read vs write performance tradeoffs.',
      commonMistakes_bn: 'সব কলামে না বুঝে ইনডেক্স বসিয়ে দেওয়া যা রাইট ও ইনসার্ট অপারেশনকে ধীরগতির করে ফেলে।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-fcc-fullstack-2026',
      title_en: 'freeCodeCamp Full Stack Developer Professional Certification (2026 Edition)',
      title_bn: 'ফ্রি-কোড-ক্যাম্প ফুল স্ট্যাক প্রফেশনাল ভেরিফায়েড সার্টিফিকেট',
      provider: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/learn/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 80,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Globally recognized project-based credential covering modern responsive UI, TypeScript algorithms, Node APIs, and databases.',
      relevance_bn: 'বিশ্বখ্যাত ফ্রি-কোড-ক্যাম্পের সম্পূর্ণ ফ্রি আন্তর্জাতিক ডিজিটাল সার্টিফিকেট।'
    },
    {
      id: 'cert-harvard-cs50x-2026',
      title_en: 'Harvard CS50x: Computer Science Foundations (2026 Edition)',
      title_bn: 'হার্ভার্ড সিএস৫০ কম্পিউটার সায়েন্স ভেরিফায়েড সার্টিফিকেট',
      provider: 'Harvard University',
      url: 'https://cs50.harvard.edu/x/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 60,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'World-renowned foundational computer science and algorithmic problem-solving course by Harvard University.',
      relevance_bn: 'হার্ভার্ড ইউনিভার্সিটির সম্পূর্ণ ফ্রি বিশ্বমানের সিএস কোর্স ও ভেরিফায়েড ডিজিটাল সার্টিফিকেট।'
    },
    {
      id: 'cert-basis-seip-2026',
      title_en: 'BASIS SEIP Professional Software Engineering Certification',
      title_bn: 'বেসিস এসইআইপি প্রফেশনাল সফটওয়্যার ইঞ্জিনিয়ারিং জাতীয় সার্টিফিকেট',
      provider: 'BASIS & Finance Ministry Bangladesh',
      url: 'https://seip-fd.gov.bd/',
      mobileAccessible: false,
      language: 'both',
      durationHours: 120,
      cost: 'BD Gov 100% Free',
      isBdLocal: true,
      category: 'bd_national',
      relevance_en: 'Bangladesh Government funded industrial training with daily stipend and national IT employment placement.',
      relevance_bn: 'বাংলাদেশ সরকারের অর্থায়নে পরিচালিত বিনামূল্যে আইটি প্রশিক্ষণ, শিক্ষাবৃত্তি ও লোকাল চাকরির প্লেসমেন্ট।'
    },
    {
      id: 'cert-postman-api-2026',
      title_en: 'Postman API Fundamentals Student Expert',
      title_bn: 'পোস্টম্যান এপিআই ফান্ডামেন্টালস অফিশিয়াল ব্যাজ',
      provider: 'Postman Academy',
      url: 'https://academy.postman.com/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 10,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Proves practical mastery of REST API testing, authorization tokens, and automated test collections.',
      relevance_bn: 'এপিআই টেস্টিং ও ব্যাকএন্ডের জন্য বহুল সমাদৃত অফিশিয়াল ডিজিটাল ব্যাজ।'
    }
  ]
};
