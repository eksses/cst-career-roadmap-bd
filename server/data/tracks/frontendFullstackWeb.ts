import type { CareerTrack } from '../../../shared/types.js';

export const frontendFullstackWebTrack: Omit<CareerTrack, 'id'> = {
  slug: 'frontend-fullstack-web',
  title_en: 'Frontend and Full-Stack Web Development',
  title_bn: 'ফ্রন্টএন্ড ও ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট',
  summary_en: 'Modern JavaScript, TypeScript, React, Node.js, Express, PostgreSQL, and RESTful API architecture built for scalable web applications and SaaS platforms.',
  summary_bn: 'আধুনিক জাভাস্ক্রিপ্ট, টাইপস্ক্রিপ্ট, রিয়্যাক্ট, নোড, এক্সপ্রেস ও পোস্টগ্রেসকিউএল ডেটাবেস দিয়ে পূর্ণাঙ্গ ওয়েব অ্যাপ্লিকেশন ও সফটওয়্যার তৈরির ট্র্যাক।',
  pivotAdvice_en: 'Full-stack development has high career ceiling and remote earning potential, but requires at least 8 to 12 months of daily coding discipline. If you do not have a standard computer (8GB RAM) or need to earn money within 90 days, start with ISP networking or IT support first.',
  pivotAdvice_bn: 'ফুল-স্ট্যাক ডেভেলপমেন্টে উচ্চ বেতন ও রিমোট জবের দারুণ সুযোগ রয়েছে, তবে এজন্য প্রতিদিন কয়েক ঘণ্টা কোডিংয়ের ধৈর্য প্রয়োজন। তোমার যদি বর্তমানে ল্যাপটপ না থাকে কিংবা ৩ মাসের মধ্যে আয় করা অত্যন্ত জরুরি হয়, তবে প্রথমে আইটি সাপোর্ট বা নেটওয়ার্কিং দিয়ে শুরু করা বুদ্ধিমানের কাজ হবে।',
  minPcRequired: 'standard',
  dayToDay_en: [
    'Writing responsive UI components in React with Tailwind CSS and state management.',
    'Designing RESTful APIs and middleware using Node.js, Express, and Zod schema validation.',
    'Connecting PostgreSQL or MongoDB databases with Drizzle ORM or Prisma for reliable data persistence.',
    'Debugging client errors in Chrome DevTools, network tab, and server-side logs.',
    'Writing clean Git commits, managing GitHub pull requests, and deploying to Vercel or cloud VPS.'
  ],
  dayToDay_bn: [
    'রিয়্যাক্ট ও টেইলউইন্ড সিএসএস দিয়ে আধুনিক ও রেসপনসিভ ইউজার ইন্টারফেস তৈরি করা।',
    'নোড এবং এক্সপ্রেস দিয়ে সিকিউর রেস্টফুল এপিআই (REST API) ও ডেটা ভ্যালিডেশন লেখা।',
    'পোস্টগ্রেসকিউএল ডেটাবেসের টেবিল ডিজাইন এবং ওআরএম দিয়ে ডেটাবেস কুয়েরি পরিচালনা করা।',
    'ব্রাউজারের কনসোল ও নেটওয়ার্ক ট্যাব দেখে এরর ডিবাগিং করা।',
    'গিট ও গিটহাব ব্যবহার করে কোড ভার্সন কন্ট্রোল করা এবং ক্লাউড হোস্টিংয়ে ওয়েবসাইট ডিপ্লয় করা।'
  ],
  mustHaveSkills: [
    {
      id: 'js-ts-core',
      name: 'JavaScript (ES6+) and TypeScript Foundations',
      category: 'Language Core',
      importance: 'Essential',
      description_en: 'Async/await, closures, promises, array methods (map, filter, reduce), and static type interfaces.',
      description_bn: 'প্রমিজ, অ্যাসিনক্রোনাস জাভাস্ক্রিপ্ট, এরে মেথড এবং টাইপস্ক্রিপ্ট টাইপ সিস্টেম।'
    },
    {
      id: 'react-ecosystem',
      name: 'React and Modern Component Architecture',
      category: 'Frontend',
      importance: 'Essential',
      description_en: 'Hooks (useState, useEffect, useMemo), custom hooks, context API, and Framer Motion transitions.',
      description_bn: 'রিয়্যাক্ট হুকস, স্টেট ম্যানেজমেন্ট, কনটেক্সট এপিআই ও মসৃণ ইউআই ট্রানজিশন।'
    },
    {
      id: 'node-express-backend',
      name: 'Node.js, Express and RESTful APIs',
      category: 'Backend',
      importance: 'Essential',
      description_en: 'Router modularity, JWT authentication, CORS, error handling middleware, and rate limiting.',
      description_bn: 'নোড ও এক্সপ্রেস দিয়ে সিকিউর রাউটিং, জেডব্লিউটি অথেনটিকেশন ও এরর হ্যান্ডলিং।'
    },
    {
      id: 'relational-database-orm',
      name: 'PostgreSQL and Drizzle/Prisma ORM',
      category: 'Database',
      importance: 'Essential',
      description_en: 'Foreign key relations, indexing, migrations, ACID transactions, and query optimization.',
      description_bn: 'পোস্টগ্রেসকিউএল রিলেশনশিপ, ইনডেক্সিং, ডেটাবেস মাইগ্রেশন ও দ্রুতগতির কুয়েরি।'
    },
    {
      id: 'git-collaboration',
      name: 'Git Version Control and GitHub Workflows',
      category: 'DevOps',
      importance: 'Essential',
      description_en: 'Branching, resolving merge conflicts, pulling, pushing, and writing descriptive commit messages.',
      description_bn: 'গিটহাব ব্রাঞ্চ তৈরি, কনফ্লিক্ট সমাধান ও দলগতভাবে কোড শেয়ার করার নিয়ম।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Banani, Gulshan, Uttara, Dhanmondi) and Remote BD',
      entrySalary: { min: 25000, max: 45000, currency: 'BDT', formatted: '25,000 - 45,000 BDT' },
      midSalary: { min: 55000, max: 110000, currency: 'BDT', formatted: '55,000 - 110,000 BDT' },
      seniorSalary: { min: 120000, max: 250000, currency: 'BDT', formatted: '120,000 - 250,000 BDT' },
      hiringSectors: [
        'Software Development Agencies and Offshore IT firms in Dhaka',
        'Fintech and Digital Wallet Platforms (bKash, Nagad, Pathao, Chaldal)',
        'E-Commerce Companies, EdTech Startups, and Corporate Tech Divisions',
        'Enterprise ERP and HealthTech Vendors'
      ],
      cvExpectations: [
        'Live, deployed full-stack portfolio projects with GitHub source code links',
        'Deep understanding of JavaScript fundamentals without copying code blindly',
        'Clean component structure and responsive mobile design capability',
        'Basic understanding of SQL queries and REST endpoints'
      ],
      localDemandSummary_en: 'Software companies in Dhaka care very little about whether you studied in a university or polytechnic. If your GitHub repository shows well-architected full-stack apps with clean commits, you will get technical interview calls.',
      localDemandSummary_bn: 'ঢাকার আধুনিক সফটওয়্যার কোম্পানিগুলো ডিগ্রির চেয়ে বাস্তব কোডিং দক্ষতা বেশি মূল্যায়ন করে। তোমার গিটহাবে যদি ৩-৪টি লাইভ ও গোছানো ফুল-স্ট্যাক প্রজেক্ট থাকে, তবে ডিপ্লোমা পাশ করেই আকর্ষণীয় বেতনে চাকরি পাওয়া সম্ভব।'
    },
    targetCountries: [
      {
        region: 'Europe',
        countryName_en: 'Germany, Netherlands and Estonia',
        countryName_bn: 'জার্মানি, নেদারল্যান্ডস ও এস্তোনিয়া',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ',
        visaReality_en: 'EU Blue Card or Tech Visa available for skilled developers with 3+ years experience and English fluency, even with polytechnic credentials if portfolio is exceptional.',
        visaReality_bn: 'ইংরেজি দক্ষতা ও ৩ বছরের প্রজেক্ট অভিজ্ঞতা থাকলে ইউরোপীয় টেক ভিসার দারুণ সুযোগ রয়েছে।',
        averageSalaryUsdOrLocal: '45,000 - 75,000 EUR / year (approx 5,000,000 - 8,500,000 BDT)',
        requiredExperienceYears: '3 to 5 years'
      },
      {
        region: 'North America',
        countryName_en: 'United States and Canada (Remote Contract)',
        countryName_bn: 'যুক্তরাষ্ট্র ও কানাডা (রিমোট কন্ট্রাক্ট)',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ',
        visaReality_en: 'Direct immigration requires degree equivalence, but remote independent contractor hiring via Deel or Remote.com is widespread.',
        visaReality_bn: 'রিমোট কন্ট্রাক্টর হিসেবে আন্তর্জাতিক প্ল্যাটফর্মের মাধ্যমে সরাসরি কাজ করার সুযোগ অবারিত।',
        averageSalaryUsdOrLocal: '$2,500 - $6,000 / month (approx 300,000 - 720,000 BDT)',
        requiredExperienceYears: '2+ years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$800 - $3,500 / month',
      competitionLevel: 'High global competition, won by building specialized full-stack products',
      competitionLevel_bn: 'বৈশ্বিক প্রতিযোগিতা থাকে, যা নিজস্ব ইউনিক প্রজেক্ট দিয়ে জয় করতে হয়',
      englishRequirement: 'Fluent written technical communication and clear asynchronous video updates',
      englishRequirement_bn: 'চমৎকার লিখিত ইংরেজি ও মিটিংয়ে স্পষ্ট কথা বলার দক্ষতা আবশ্যক',
      realities_en: [
        'Clients hire for problem solving rather than hours logged',
        'TypeScript and modern React frameworks dominate remote job boards',
        'Portfolio quality matters 10x more than certifications'
      ],
      realities_bn: [
        'ক্লায়েন্টরা কেবল কত ঘণ্টা কাজ করছ তা দেখে না, কত দ্রুত সমাধান দিচ্ছ তা দেখে',
        'আন্তর্জাতিক বাজারে টাইপস্ক্রিপ্ট ও রিয়্যাক্টের চাহিদা সবচেয়ে বেশি',
        'সার্টিফিকেটের চেয়ে লাইভ প্রজেক্ট ও পরিষ্কার গিটহাব কোড দশগুণ বেশি গুরুত্বপূর্ণ'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Semantic HTML, Modern CSS and JavaScript Foundations',
      phaseTitle_bn: 'প্রথম পর্ব: এইচটিএমএল, আধুনিক সিএসএস ও জাভাস্ক্রিপ্ট ভিত্তি',
      phaseSubtitle_en: 'Day 1 to 30: Layout systems, DOM manipulation, and ES6+ programming.',
      phaseSubtitle_bn: '১ থেকে ৩০ দিন: ফ্লেক্সবক্স, গ্রিড, ডম ম্যানিপুলেশন ও আধুনিক জাভাস্ক্রিপ্ট।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-html-css-flex',
          title_en: 'Semantic HTML5 and Modern CSS Flexbox/Grid',
          title_bn: 'সিমান্টিক এইচটিএমএল ও আধুনিক ফ্লেক্সবক্স/গ্রিড লেআউট',
          description_en: 'Accessible web markup, responsive media queries, CSS variables, and modern flexbox layouts.',
          description_bn: 'মোবাইল ও পিসিতে সুন্দরভাবে ফিট হওয়া রেসপনসিভ ওয়েবসাইট স্ট্রাকচার তৈরি।',
          estimatedDays: 10,
          mobileAccessible: false,
          keyTopics: ['Flexbox justify/align', 'CSS Grid template areas', 'Mobile-first media queries'],
          practicalTask_en: 'Recreate a clean Bangladeshi university or newspaper homepage layout from scratch.',
          practicalTask_bn: 'একটি পরিচ্ছন্ন বাংলাদেশি নিউজ পোর্টাল বা কলেজের হোমপেজ লেআউট তৈরি করো।'
        },
        {
          id: 'mod-js-engine-basics',
          title_en: 'JavaScript Fundamentals and DOM Interactivity',
          title_bn: 'জাভাস্ক্রিপ্ট ফান্ডামেন্টালস ও ব্রাউজার ইন্টারেকশন',
          description_en: 'Variables, loops, array methods (map, filter, reduce), event listeners, and local storage persistence.',
          description_bn: 'ডাটা টাইপ, ফাংশন, এরে ফিল্টার, ক্লিক ইভেন্ট এবং ব্রাউজারের লোকাল স্টোরেজ ব্যবহার।',
          estimatedDays: 20,
          mobileAccessible: false,
          keyTopics: ['Arrow functions', 'Destructuring and spread operator', 'Localstorage state saving'],
          practicalTask_en: 'Build an offline-capable CST Student CGPA and Semester Credit Calculator with local storage save.',
          practicalTask_bn: 'সিএসটি শিক্ষার্থীদের সেমিস্টার জিপিএ ও ক্রেডিট হিসাব করার কার্যকর ক্যালকুলেটর বানাও।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: React Component Architecture and State Mastery',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: রিয়্যাক্ট ফ্রন্টএন্ড আর্কিটেকচার ও স্টেট হ্যান্ডলিং',
      phaseSubtitle_en: 'Day 31 to 60: React 19, TypeScript, Tailwind CSS, and API consumption.',
      phaseSubtitle_bn: '৩১ থেকে ৬০ দিন: রিয়্যাক্ট হুকস, টাইপস্ক্রিপ্ট, টেইলউইন্ড সিএসএস ও এপিআই কল।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-react-hooks-tailwind',
          title_en: 'React Hooks and Tailwind CSS Design Systems',
          title_bn: 'রিয়্যাক্ট হুকস ও টেইলউইন্ড সিএসএস ডিজাইন',
          description_en: 'Building scalable reusable components with Tailwind utility classes and managing complex forms.',
          description_bn: 'পুনর্ব্যবহারযোগ্য কম্পোনেন্ট তৈরি, টেইলউইন্ড সিএসএস ও ডায়নামিক ফর্ম হ্যান্ডলিং।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['useState and useEffect lifecycles', 'Props typing with TypeScript', 'Tailwind mobile responsiveness'],
          practicalTask_en: 'Build an interactive Job Board for Bangladeshi diploma holders with category filtering.',
          practicalTask_bn: 'ডিপ্লোমা প্রকৌশলীদের জন্য একটি ক্যাটাগরিভিত্তিক রিয়্যাক্ট জব পোর্টাল ইন্টারফেস তৈরি করো।'
        },
        {
          id: 'mod-async-api-fetching',
          title_en: 'Asynchronous API Consumption and Error Handling',
          title_bn: 'এপিআই থেকে ডেটা ফেচ ও লোডিং/এরর স্টেট ম্যানেজমেন্ট',
          description_en: 'Using fetch and TanStack Query to load live JSON APIs, handle loading skeletons, and retry on failure.',
          description_bn: 'লাইভ এপিআই থেকে ডেটা আনা, লোডিং কঙ্কাল (Skeleton) দেখানো এবং ইন্টারনেট অফলাইনে এরর হ্যান্ডলিং।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['Try/catch error boundaries', 'Debounced search inputs', 'Pagination and infinite scrolling'],
          practicalTask_en: 'Connect to an open weather API and display real-time weather alerts for all 64 districts of Bangladesh.',
          practicalTask_bn: 'বাংলাদেশের ৬৪ জেলার আবহাওয়া তথ্য প্রদর্শনকারী একটি লাইভ এপিআই ড্যাশবোর্ড তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: Backend APIs with Node.js, Express and PostgreSQL',
      phaseTitle_bn: 'তৃতীয় পর্ব: নোড, এক্সপ্রেস ও পোস্টগ্রেসকিউএল ব্যাকএন্ড',
      phaseSubtitle_en: 'Day 61 to 90: REST architecture, JWT auth, Drizzle ORM, and database indexing.',
      phaseSubtitle_bn: '৬১ থেকে ৯০ দিন: রেস্ট এপিআই, জেডব্লিউটি লগইন সিস্টেম ও রিলেশনাল ডেটাবেস।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-express-rest-zod',
          title_en: 'Express REST API Architecture and Zod Validation',
          title_bn: 'এক্সপ্রেস ব্যাকএন্ড আর্কিটেকচার ও জেড ভ্যালিডেশন',
          description_en: 'Clean controller-service separation, middleware pipelines, CORS security, and request payload schema validation.',
          description_bn: 'পরিচ্ছন্ন ব্যাকএন্ড কোড স্ট্রাকচার, সিকিউর মিডলওয়্যার ও জেড (Zod) দিয়ে ইনপুট ভ্যালিডেশন।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['Express route grouping', 'Zod parse and safeParse', 'Global error middleware handler'],
          practicalTask_en: 'Build an authentication API supporting secure user registration, bcrypt password hashing, and JWT tokens.',
          practicalTask_bn: 'পাসওয়ার্ড হ্যাশিং ও জেডব্লিউটি টোকেন সহ একটি সিকিউর ইউজার অথেনটিকেশন ব্যাকএন্ড তৈরি করো।'
        },
        {
          id: 'mod-postgres-drizzle',
          title_en: 'PostgreSQL Relational Schema Design and Drizzle ORM',
          title_bn: 'পোস্টগ্রেসকিউএল ডেটাবেস ডিজাইন ও ওআরএম কুয়েরি',
          description_en: 'Designing one-to-many and many-to-many schemas, running database migrations, and executing type-safe queries.',
          description_bn: 'টেবিল রিলেশনশিপ, ফরেন কি, ডেটাবেস মাইগ্রেশন এবং ড্রপ-ইন ওআরএম কুয়েরি।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['Foreign key cascades', 'PostgreSQL indexing basics', 'Drizzle ORM relations and joins'],
          practicalTask_en: 'Design and seed a multi-table database schema for an inventory or polytechnic student portal.',
          practicalTask_bn: 'একটি পলিটেকনিক স্টুডেন্ট পোর্টালের জন্য সম্পূর্ণ রিলেশনাল ডেটাবেস ডিজাইন ও সিড করো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: Full-Stack Integration, Deployment and Technical Interviews',
      phaseTitle_bn: 'চতুর্থ পর্ব: ফুল-স্ট্যাক লাইভ ডিপ্লয়মেন্ট ও সফটওয়্যার ইন্টারভিউ',
      phaseSubtitle_en: 'Day 91 to 120: Monorepo deployment, Docker basics, and technical coding interviews.',
      phaseSubtitle_bn: '৯১ থেকে ১২০ দিন: ক্লাউড ডিপ্লয়মেন্ট, সিকিউরিটি অডিট ও সফটওয়্যার কোম্পানির ইন্টারভিউ।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-fullstack-deploy',
          title_en: 'Production Cloud Deployment and Environment Security',
          title_bn: 'প্রোডাকশন ক্লাউডে লাইভ ডিপ্লয়মেন্ট ও সিকিউরিটি',
          description_en: 'Deploying frontend on Vercel, backend on Render/Railway/VPS, configuring environment variables, and SSL.',
          description_bn: 'ভার্সেল ও ক্লাউড সার্ভারে লাইভ ওয়েবসাইট পাবলিশ করা এবং পরিবেশ ভ্যারিয়েবল গোপন রাখা।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['Vercel and Render deployment', 'CORS origin whitelisting', 'Handling production database connection pooling'],
          practicalTask_en: 'Ship a complete full-stack web application with live production URLs and custom domain.',
          practicalTask_bn: 'তোমার তৈরি করা একটি পূর্ণাঙ্গ ফুল-স্ট্যাক প্রজেক্ট ইন্টারনেটে লাইভ হোস্ট করো।'
        },
        {
          id: 'mod-frontend-interview-prep',
          title_en: 'Software Engineering Interview Simulation',
          title_bn: 'সফটওয়্যার ইঞ্জিনিয়ারিং ইন্টারভিউ ও কোডিং রাউন্ড প্রস্তুতি',
          description_en: 'Handling closures, event loop questions, database joins, and live coding challenges in Dhaka tech firms.',
          description_bn: 'ইন্টারভিউয়ের ইভেন্ট লুপ, ক্লোজার, অপটিমাইজেশন ও লাইভ কোডিং টেস্টের বাস্তবমুখী অনুশীলন।',
          estimatedDays: 18,
          mobileAccessible: true,
          keyTopics: ['Event loop and microtask queue', 'React re-render optimization', 'Explaining architectural tradeoffs'],
          practicalTask_en: 'Conduct a recorded mock interview walking through your code architecture and database decisions.',
          practicalTask_bn: 'নিজের প্রজেক্টের কোড ও ডেটাবেস আর্কিটেকচার নিয়ে একটি পূর্ণাঙ্গ টেকনিক্যাল প্রেজেন্টেশন দাও।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'dev-q1',
      question_en: 'What is the JavaScript Event Loop and how does it handle asynchronous operations like setTimeout and fetch?',
      question_bn: 'জাভাস্ক্রিপ্ট ইভেন্ট লুপ (Event Loop) কী এবং এটি কীভাবে অ্যাসিনক্রোনাস কাজ পরিচালনা করে?',
      category: 'JavaScript Core',
      whyAsked_en: 'The single most common core question in software interviews to separate superficial coders from deep thinkers.',
      whyAsked_bn: 'জাভাস্ক্রিপ্ট ইন্টারভিউয়ের প্রধানতম মৌলিক প্রশ্ন যা প্রার্থীর ইঞ্জিন বোঝার গভীরতা প্রমাণ করে।',
      howToAnswer_en: 'JavaScript is single-threaded with one call stack. Synchronous code executes immediately on the stack. Asynchronous tasks (like fetch or timers) are offloaded to Web APIs. When completed, their callbacks enter the Microtask Queue (promises) or Macrotask Queue (setTimeout). The Event Loop constantly monitors if the call stack is empty, pushing pending tasks to the stack in priority order.',
      howToAnswer_bn: 'জাভাস্ক্রিপ্ট সিঙ্গেল থ্রেডেড। সিঙ্ক্রোনাস কোড সরাসরি কল স্ট্যাকে চলে। আর ফেচ বা টাইমারের মতো অ্যাসিনক্রোনাস কাজগুলো ব্রাউজার এপিআইতে চলে যায়। কাজ শেষ হলে সেগুলো মাইক্রোটাস্ক বা ম্যাক্রোটাস্ক কিউতে জমা হয়। কল স্ট্যাক ফাঁকা হলে ইভেন্ট লুপ অগ্রাধিকার ভিত্তিতে এগুলোকে এক্সিকিউট করার জন্য পাঠায়।',
      commonMistakes_en: 'Saying JavaScript is multi-threaded or that setTimeout pauses the entire CPU browser thread.',
      commonMistakes_bn: 'জাভাস্ক্রিপ্টকে মাল্টি-থ্রেডেড ভাষা বলা অথবা সেটটাইমআউট ব্রাউজারকে ফ্রিজ করে দেয় মনে করা।'
    },
    {
      id: 'dev-q2',
      question_en: 'Why should you never mutate React state directly and how does React detect re-renders?',
      question_bn: 'রিয়্যাক্ট স্টেট সরাসরি মিউটেট (পরিবর্তন) করা উচিত নয় কেন এবং রিয়্যাক্ট কীভাবে রি-রেন্ডার নির্ধারণ করে?',
      category: 'React Internals',
      whyAsked_en: 'Tests whether candidate understands immutability and shallow reference comparison in React.',
      whyAsked_bn: 'ইমিউটেবিলিটি ও রিয়্যাক্টের ভার্চুয়াল ডম ট্র্যাকিংয়ের সঠিক ধারণা প্রার্থীর আছে কিনা জানতে।',
      howToAnswer_en: 'React relies on shallow object reference equality (Object.is) to know when state has changed. If you mutate an existing array or object directly (e.g. state.push()), the memory reference remains identical, so React assumes nothing changed and skips re-rendering. Using setState with new spread copies triggers the render cycle cleanly.',
      howToAnswer_bn: 'রিয়্যাক্ট মেমোরি রেফারেন্স (Shallow comparison) দেখে বোঝে স্টেট পরিবর্তন হয়েছে কিনা। সরাসরি অবজেক্ট বা এরে মডিফাই করলে মেমোরি অ্যাড্রেস একই থাকে, ফলে রিয়্যাক্ট পরিবর্তন ধরতে পারে না এবং স্ক্রিন রি-রেন্ডার হয় না। তাই সবসময় নতুন কপি (spread operator) তৈরি করে স্টেট আপডেট করতে হয়।',
      commonMistakes_en: 'Using push() or directly reassigning state variables without setState.',
      commonMistakes_bn: 'এরেতে সরাসরি push() ব্যবহার করা এবং স্টেট ফাংশন কল না করা।'
    },
    {
      id: 'dev-q3',
      question_en: 'What is the difference between SQL and NoSQL databases and when would you choose PostgreSQL over MongoDB?',
      question_bn: 'এসকিউএল এবং নো-এসকিউএল ডেটাবেসের মধ্যে পার্থক্য কী এবং কখন মঙ্গোডিবি-র চেয়ে পোস্টগ্রেসকিউএল বেছে নেবে?',
      category: 'Databases',
      whyAsked_en: 'Evaluates architectural judgment when designing real-world backend applications.',
      whyAsked_bn: 'বাস্তব সফটওয়্যার তৈরিতে সঠিক ডেটাবেস নির্বাচনের সক্ষমতা যাচাই।',
      howToAnswer_en: 'PostgreSQL is a relational database enforcing strict schemas, ACID transactions, and foreign key integrity, ideal for financial transactions, e-commerce orders, and structured student records. MongoDB is a document database storing JSON-like BSON, flexible for rapidly shifting unstructured schemas or raw logging.',
      howToAnswer_bn: 'পোস্টগ্রেসকিউএল হলো রিলেশনাল ডেটাবেস যা কঠোর স্কিমা, ফরেন কি ও এসিড (ACID) ট্রানজাকশন নিশ্চিত করে। ব্যাংকিং, পেমেন্ট ও ছাত্র রেকর্ডের মতো গুরুত্বপূর্ণ ডেটার জন্য এটি আদর্শ। অপরদিকে মঙ্গোডিবি ফ্লেক্সিবল ডকুমেন্ট স্টোরেজ যেখানে স্কিমা বারবার পরিবর্তন হতে পারে বা আনস্ট্রাকচার্ড লগ রাখা হয়।',
      commonMistakes_en: 'Claiming MongoDB is always faster than SQL or SQL is outdated.',
      commonMistakes_bn: 'মঙ্গোডিবি আধুনিক আর এসকিউএল পুরোনো ও অকেজো এমন অজ্ঞতামূলক মন্তব্য করা।'
    },
    {
      id: 'dev-q4',
      question_en: 'What is CORS and how do you resolve CORS errors securely in an Express application?',
      question_bn: 'করস (CORS) কী এবং একটি এক্সপ্রেস ব্যাকএন্ডে কীভাবে নিরাপদে করস এরর সমাধান করবে?',
      category: 'Web Security',
      whyAsked_en: 'Every web developer runs into CORS during development; tests security understanding.',
      whyAsked_bn: 'ব্রাউজার সিকিউরিটি ও এপিআই যোগাযোগের অপরিহার্য নিরাপত্তা নীতি সম্পর্কে সচেতনতা দেখা।',
      howToAnswer_en: 'CORS (Cross-Origin Resource Sharing) is a browser security mechanism blocking scripts from requesting resources from a different origin (domain, protocol, or port). In Express, use the cors middleware configuring explicit allowed origins (e.g. your specific frontend domain) and credentials rather than blindly setting origin to wildcard * in production.',
      howToAnswer_bn: 'করস হলো ব্রাউজারের সিকিউরিটি পলিসি যা এক ডোমেইন থেকে অন্য ডোমেইনে অননুমোদিত ডেটা নেওয়া বন্ধ করে। এক্সপ্রেস অ্যাপে "cors" প্যাকেজ দিয়ে নির্দিষ্ট ফ্রন্টএন্ড ডোমেইনকে হোয়াইটলিস্ট করে দিতে হয়। প্রোডাকশনে কখনো ওয়াইল্ডকার্ড (*) দিয়ে সব ডোমেইনের জন্য উন্মুক্ত রাখা নিরাপদ নয়।',
      commonMistakes_en: 'Setting Access-Control-Allow-Origin to * for financial or authenticated endpoints.',
      commonMistakes_bn: 'ঝামেলা এড়াতে ওয়াইল্ডকার্ড (*) দিয়ে সবার জন্য এপিআই উন্মুক্ত করে দেওয়া।'
    },
    {
      id: 'dev-q5',
      question_en: 'How do you optimize a slow React application with multiple heavy lists?',
      question_bn: 'অনেক বড় তালিকা ও ভারী ডেটা থাকা একটি ধীরগতির রিয়্যাক্ট অ্যাপকে কীভাবে অপটিমাইজ করবে?',
      category: 'Performance',
      whyAsked_en: 'Differentiates junior frontend developers from mid-level engineers.',
      whyAsked_bn: 'অ্যাপের পারফরম্যান্স ও স্মুথনেস নিশ্চিত করার বাস্তবমুখী অভিজ্ঞতা যাচাই।',
      howToAnswer_en: '1) Virtualize long lists using react-window or tanstack-virtual so only visible items are rendered in DOM. 2) Memoize expensive computations with useMemo. 3) Wrap child components in React.memo and pass stable callbacks with useCallback. 4) Code-split routes with React.lazy and Suspense.',
      howToAnswer_bn: '১) ভার্চুয়ালাইজেশন (react-window) ব্যবহার করে শুধু স্ক্রিনে থাকা উপাদানগুলো রেন্ডার করব। ২) ভারী ক্যালকুলেশনে useMemo ব্যবহার করব। ৩) অপ্রয়োজনীয় রি-রেন্ডার ঠেকাতে React.memo ও useCallback ব্যবহার করব। ৪) কোড-স্প্লিটিং (React.lazy) করে ইনিশিয়াল বান্ডেল সাইজ ছোট রাখব।',
      commonMistakes_en: 'Wrapping every single function blindly in useCallback without measuring overhead.',
      commonMistakes_bn: 'কোনো কারণ ছাড়াই প্রতিটি ছোট ফাংশনে useCallback মেমোরাইজেশন চাপিয়ে দেওয়া।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-fcc-responsive-web',
      title_en: 'Responsive Web Design Certification',
      title_bn: 'রেসপনসিভ ওয়েব ডিজাইন ভেরিফায়েড সার্টিফিকেট',
      provider: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 40,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Globally recognized hands-on projects teaching HTML5, modern CSS flexbox, and mobile responsiveness.',
      relevance_bn: 'বিশ্বখ্যাত ফ্রি-কোড-ক্যাম্পের শতভাগ ফ্রি সার্টিফিকেট যা সিভিতে আন্তর্জাতিক গ্রহণযোগ্যতা দেয়।'
    },
    {
      id: 'cert-fcc-js-algorithms',
      title_en: 'JavaScript Algorithms and Data Structures',
      title_bn: 'জাভাস্ক্রিপ্ট অ্যালগরিদম ও ডেটা স্ট্রাকচার',
      provider: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 50,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Master core JavaScript ES6+, functional programming, and algorithmic problem solving.',
      relevance_bn: 'কোডিং ইন্টারভিউতে ভালো করার জন্য প্র্যাকটিক্যাল জাভাস্ক্রিপ্টের সেরা ফ্রি ভেরিফায়েড কোর্স।'
    },
    {
      id: 'cert-harvard-cs50',
      title_en: 'CS50x: Introduction to Computer Science',
      title_bn: 'হার্ভার্ড সিএস৫০ কম্পিউটার সায়েন্স ভেরিফায়েড সার্টিফিকেট',
      provider: 'Harvard University',
      url: 'https://cs50.harvard.edu/x/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 60,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'World-renowned foundational computer science and algorithmic problem-solving course by Harvard.',
      relevance_bn: 'হার্ভার্ড ইউনিভার্সিটির সম্পূর্ণ ফ্রি বিশ্বমানের সিএস কোর্স ও ভেরিফায়েড ডিজিটাল সার্টিফিকেট।'
    },
    {
      id: 'cert-basis-seip-web',
      title_en: 'BASIS SEIP Professional Web Development Certification',
      title_bn: 'বেসিস এসইআইপি প্রফেশনাল ওয়েব ডেভেলপমেন্ট জাতীয় সার্টিফিকেট',
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
      id: 'cert-postman-api-expert',
      title_en: 'Postman Student Expert Certification',
      title_bn: 'পোস্টম্যান স্টুডেন্ট এক্সপার্ট ব্যাজ',
      provider: 'Postman Academy',
      url: 'https://academy.postman.com/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 8,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Proves mastery of REST API testing, authorization tokens, and API automation.',
      relevance_bn: 'এপিআই টেস্টিং ও ব্যাকএন্ডের জন্য বহুল সমাদৃত অফিশিয়াল ডিজিটাল ব্যাজ।'
    }
  ]
};
