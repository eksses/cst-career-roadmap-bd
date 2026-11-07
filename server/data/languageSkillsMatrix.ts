import type { LanguageItem, SkillMatrixItem, InterestMatrixItem } from '../../shared/types.js';

export const languagesMatrix: LanguageItem[] = [
  {
    id: 'javascript',
    name: 'JavaScript (JS / ES6+)',
    category: 'Web, Full-Stack & Desktop',
    iconName: 'Code2',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'The universal language of the web. Powers dynamic frontend browsers, high-speed Node.js servers, and cross-platform Electron desktop apps.',
    description_bn: 'ওয়েবের সর্বজনীন ভাষা। ব্রাউজারের ভিজুয়াল ইন্টারফেস, নোড.জেএস সার্ভার ও ইলেকট্রন ডেস্কটপ অ্যাপের মূল ভিত্তি।',
    associatedRoadmaps: [
      {
        trackSlug: 'frontend-fullstack-web',
        trackTitle_en: 'Frontend & Full-Stack Web Development',
        trackTitle_bn: 'ফ্রন্টএন্ড ও ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট',
        roleInRoadmap_en: 'Core foundation for React, Next.js, and browser DOM manipulation.',
        roleInRoadmap_bn: 'রিয়্যাক্ট, নেক্সট.জেএস ও ডম ম্যানিপুলেশনের প্রধান ভাষা।',
        importance: 'Essential'
      },
      {
        trackSlug: 'backend-systems-engineering',
        trackTitle_en: 'Backend API Systems & Database Architecture',
        trackTitle_bn: 'ব্যাকএন্ড এপিআই সিস্টেমস ও ডেটাবেস আর্কিটেকচার',
        roleInRoadmap_en: 'Asynchronous event-loop server logic using Node.js and Express.',
        roleInRoadmap_bn: 'নোড.জেএস ও এক্সপ্রেস দিয়ে অ্যাসিনক্রোনাস সার্ভার লজিক।',
        importance: 'Essential'
      },
      {
        trackSlug: 'desktop-app-development',
        trackTitle_en: 'Cross-Platform Desktop Apps and POS Systems',
        trackTitle_bn: 'ডেস্কটপ অ্যাপ্লিকেশন ও পিওএস সফটওয়্যার',
        roleInRoadmap_en: 'Renderer UI logic and local IPC calls inside Electron.js.',
        roleInRoadmap_bn: 'ইলেকট্রন ডেস্কটপ উইন্ডো ও ইউজার ইন্টারফেস পরিচালনা।',
        importance: 'Essential'
      },
      {
        trackSlug: 'qa-software-testing',
        trackTitle_en: 'Software QA & Bug Testing',
        trackTitle_bn: 'সফটওয়্যার টেস্টিং ও কোয়ালিটি নিশ্চিতকরণ',
        roleInRoadmap_en: 'Writing automated end-to-end browser tests in Cypress and Playwright.',
        roleInRoadmap_bn: 'সাইপ্রেস ও প্লেরাইট দিয়ে স্বয়ংক্রিয় ওয়েব ব্রাউজার টেস্টিং।',
        importance: 'Essential'
      },
      {
        trackSlug: 'blockchain-web3-developer',
        trackTitle_en: 'Blockchain, Web3 and Smart Contract Engineering',
        trackTitle_bn: 'ব্লকচেইন, ওয়েব৩ ও স্মার্ট কন্ট্রাক্ট ইঞ্জিনিয়ারিং',
        roleInRoadmap_en: 'Connecting MetaMask wallet transactions via Ethers.js in dApps.',
        roleInRoadmap_bn: 'ইথারস.জেএস দিয়ে ব্রাউজারে মেটামাস্ক ট্রানজ্যাকশন কল করা।',
        importance: 'Essential'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'typescript',
        nextLanguageName: 'TypeScript',
        targetRoadmapSlug: 'frontend-fullstack-web',
        reason_en: 'TypeScript adds compile-time type safety to your JavaScript, making you instantly eligible for senior software agency roles.',
        reason_bn: 'জাভাস্ক্রিপ্ট শেখার পর টাইপস্ক্রিপ্ট শিখলে কোডের বাগ কমে এবং দেশি-বিদেশি সফটওয়্যার ফার্মে সিনিয়র পদে সুযোগ বাড়ে।'
      },
      {
        nextLanguageId: 'solidity',
        nextLanguageName: 'Solidity',
        targetRoadmapSlug: 'blockchain-web3-developer',
        reason_en: 'If you know JS and Ethers.js, learning Solidity allows you to write the backend smart contracts that your web apps interact with.',
        reason_bn: 'জেএস দিয়ে ওয়েব ইন্টারফেস বানানোর পর সলিডিটি শিখলে সম্পূর্ণ ডিসেন্ট্রালাইজড ওয়েব৩ অ্যাপের স্মার্ট কন্ট্রাক্ট লিখতে পারবে।'
      }
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript (TS)',
    category: 'Enterprise Software & Cloud',
    iconName: 'Code2',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'JavaScript with strict compile-time types. The industry standard across modern software engineering firms in Dhaka and globally.',
    description_bn: 'জাভাস্ক্রিপ্টের টাইপ-সেফ রূপ। দেশি-বিদেশি বড় সফটওয়্যার কোম্পানিতে বাগ প্রতিরোধে ব্যবহৃত প্রধান ভাষা।',
    associatedRoadmaps: [
      {
        trackSlug: 'frontend-fullstack-web',
        trackTitle_en: 'Frontend & Full-Stack Web Development',
        trackTitle_bn: 'ফ্রন্টএন্ড ও ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট',
        roleInRoadmap_en: 'Defines strict component props, API response interfaces, and state types.',
        roleInRoadmap_bn: 'রিয়্যাক্ট কম্পোনেন্ট ও এপিআই ডেটার টাইপ সেফটি নিশ্চিতকরণ।',
        importance: 'Essential'
      },
      {
        trackSlug: 'backend-systems-engineering',
        trackTitle_en: 'Backend API Systems & Database Architecture',
        trackTitle_bn: 'ব্যাকএন্ড এপিআই সিস্টেমস ও ডেটাবেস আর্কিটেকচার',
        roleInRoadmap_en: 'Typesafe database schemas with Drizzle ORM and Zod request validation.',
        roleInRoadmap_bn: 'ড্রজল ওআরএম ও জড দিয়ে নিশ্ছিদ্র টাইপসেফ ব্যাকএন্ড।',
        importance: 'Essential'
      },
      {
        trackSlug: 'cloud-solutions-architecture',
        trackTitle_en: 'Cloud Solutions & AWS Infrastructure Engineering',
        trackTitle_bn: 'ক্লাউড সল্যুশনস ও এডব্লিউএস ইনফ্রাস্ট্রাকচার ইঞ্জিনিয়ারিং',
        roleInRoadmap_en: 'AWS Cloud Development Kit (CDK) programmatic infrastructure definitions.',
        roleInRoadmap_bn: 'এডব্লিউএস সিডিকে দিয়ে ক্লাউড রিসোর্স কোডিং।',
        importance: 'Recommended'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'golang',
        nextLanguageName: 'Go (Golang)',
        targetRoadmapSlug: 'backend-systems-engineering',
        reason_en: 'If you want to transition from Node.js microservices into ultra-high-throughput concurrent cloud backends.',
        reason_bn: 'নোড.জেএস ব্যাকএন্ডের পর উচ্চগতির মাইক্রোসার্ভিস তৈরিতে গো (Golang) সেরা সঙ্গী।'
      }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Data, AI, Cyber Security & Automation',
    iconName: 'Cpu',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'Readable, versatile syntax powering data analytics, artificial intelligence, cybersecurity exploits, and big data pipelines.',
    description_bn: 'সহজবোধ্য ও বহুমুখী ভাষা। ডেটা সায়েন্স, এআই টুলস, ডিপ লার্নিং ও সাইবার সিকিউরিটির অবিচ্ছেদ্য অংশ।',
    associatedRoadmaps: [
      {
        trackSlug: 'ai-ml-engineer',
        trackTitle_en: 'AI and Machine Learning Engineering',
        trackTitle_bn: 'এআই ও মেশিন লার্নিং ইঞ্জিনিয়ারিং',
        roleInRoadmap_en: 'Primary language for PyTorch neural networks, Hugging Face transformers, and RAG pipelines.',
        roleInRoadmap_bn: 'পাইটর্চ মডেল তৈরি, ট্রান্সফরমার ও এলএলএম অ্যাপ্লিকেশন বানানোর মূল হাতিয়ার।',
        importance: 'Essential'
      },
      {
        trackSlug: 'python-data-ai',
        trackTitle_en: 'Python Programming, Data Analytics & AI Associate',
        trackTitle_bn: 'পাইথন প্রোগ্রামিং, ডেটা অ্যানালিটিক্স ও এআই অ্যাসোসিয়েট',
        roleInRoadmap_en: 'Primary tool for data wrangling with Pandas, NumPy, and automation.',
        roleInRoadmap_bn: 'প্যান্ডাস দিয়ে ডেটা প্রসেসিং, এআই কল ও স্বয়ংক্রিয় স্ক্রিপ্ট তৈরি।',
        importance: 'Essential'
      },
      {
        trackSlug: 'data-engineering-big-data',
        trackTitle_en: 'Data Engineering, ETL Pipelines & Big Data Systems',
        trackTitle_bn: 'ডেটা ইঞ্জিনিয়ারিং, ইটিএল পাইপলাইন ও বিগ ডেটা',
        roleInRoadmap_en: 'Writing distributed data extraction and PySpark transformation pipelines.',
        roleInRoadmap_bn: 'পাইস্পার্ক দিয়ে কোটি কোটি ডেটা প্রসেস ও এয়ারফ্লো ডিএজি স্ক্রিপ্ট লেখা।',
        importance: 'Essential'
      },
      {
        trackSlug: 'ethical-hacking-bug-bounty',
        trackTitle_en: 'Ethical Hacking, Penetration Testing and Bug Bounty',
        trackTitle_bn: 'এথিক্যাল হ্যাকিং ও বাগ বাউন্টি হান্টার',
        roleInRoadmap_en: 'Writing custom network reconnaissance scripts and vulnerability exploit scanners.',
        roleInRoadmap_bn: 'টার্গেট সার্ভারে রিকন ও কাস্টম এক্সপ্লয়েট অটোমেশন স্ক্রিপ্ট তৈরি।',
        importance: 'Essential'
      },
      {
        trackSlug: 'cybersecurity-soc-analyst',
        trackTitle_en: 'Cyber Security, Ethical Hacking & SOC Analyst',
        trackTitle_bn: 'সাইবার সিকিউরিটি, এথিক্যাল হ্যাকিং ও এসওসি অ্যানালিস্ট',
        roleInRoadmap_en: 'Parsing firewall security logs and writing automated threat detection scripts.',
        roleInRoadmap_bn: 'ফায়ারওয়াল লগ ফিল্টার করা ও সাইবার থ্রেট ডিটেকশন অটোমেশন।',
        importance: 'Essential'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'sql',
        nextLanguageName: 'SQL',
        targetRoadmapSlug: 'data-engineering-big-data',
        reason_en: 'Python combined with SQL is the unbeatable industry combo for high-paying Data Engineering and AI roles.',
        reason_bn: 'পাইথনের সাথে এসকিউএল যুক্ত করলে ডেটা ইঞ্জিনিয়ারিং ও এআই ট্র্যাকে চাকরির সুযোগ দ্বিগুণ হয়ে যায়।'
      },
      {
        nextLanguageId: 'bash_shell',
        nextLanguageName: 'Bash Scripting',
        targetRoadmapSlug: 'ethical-hacking-bug-bounty',
        reason_en: 'Essential for chaining command-line tools in security audits and automating Linux cloud servers.',
        reason_bn: 'সিকিউরিটি অডিট ও সার্ভার অটোমেশনের জন্য পাইথনের পর ব্যাশ স্ক্রিপ্টিং সবচেয়ে কার্যকর।'
      }
    ]
  },
  {
    id: 'csharp',
    name: 'C# (.NET / Unity)',
    category: 'Game Development, Windows Apps & Enterprise',
    iconName: 'Layers',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Modern, powerful object-oriented language developed by Microsoft. The standard engine language for Unity 2D/3D games and Windows desktop software.',
    description_bn: 'মাইক্রোসফটের আধুনিক অবজেক্ট ওরিয়েন্টেড ভাষা। ইউনিটি ২ডি/৩ডি গেম ও উইন্ডোজ ডেস্কটপ সফটওয়্যার তৈরির শীর্ষ পছন্দ।',
    associatedRoadmaps: [
      {
        trackSlug: 'game-development-unity',
        trackTitle_en: 'Game Development (Unity Engine & C#)',
        trackTitle_bn: 'গেম ডেভেলপমেন্ট (ইউনিটি ইঞ্জিন ও সি-শার্প)',
        roleInRoadmap_en: 'Writing player physics controllers, enemy AI logic, audio mixers, and UI screens.',
        roleInRoadmap_bn: 'গেমের নিয়ম, ক্যারেক্টার ফিজিক্স ও কৃত্রিম বুদ্ধিমত্তার সমস্ত কোডিং।',
        importance: 'Essential'
      },
      {
        trackSlug: 'desktop-app-development',
        trackTitle_en: 'Cross-Platform Desktop Apps and POS Systems',
        trackTitle_bn: 'ডেস্কটপ অ্যাপ্লিকেশন ও পিওএস সফটওয়্যার',
        roleInRoadmap_en: 'Building high-performance native Windows WPF billing and retail software.',
        roleInRoadmap_bn: 'উইন্ডোজের জন্য সুপারশপ ও ফার্মেসি পিওএস বিলিং সফটওয়্যার তৈরি।',
        importance: 'Recommended'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'c_cpp',
        nextLanguageName: 'C / C++',
        targetRoadmapSlug: 'game-development-unity',
        reason_en: 'Learning C++ after C# allows you to explore custom 3D game engines and Unreal Engine.',
        reason_bn: 'সি-শার্পের পর সি++ শিখলে আনরিয়েল ইঞ্জিন ও হাই-এন্ড ৩ডি গ্রাফিক্স প্রোগ্রামিংয়ে যাওয়া যায়।'
      }
    ]
  },
  {
    id: 'java',
    name: 'Java (Java 21 / Spring Boot)',
    category: 'Enterprise Backend & Core Banking',
    iconName: 'Code2',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Object-oriented enterprise powerhouse running 90% of core banking networks, fintech microservices, and telecom billing in Bangladesh.',
    description_bn: 'বাংলাদেশের প্রায় সকল ব্যাংক, টেলিকম ও বড় কর্পোরেট প্রতিষ্ঠানের কোর সফটওয়্যারের মূল ভাষা।',
    associatedRoadmaps: [
      {
        trackSlug: 'enterprise-java-fintech',
        trackTitle_en: 'Enterprise Java, FinTech and Core Banking Systems',
        trackTitle_bn: 'এন্টারপ্রাইজ জাভা, ফিনটেক ও কোর ব্যাংকিং সফটওয়্যার',
        roleInRoadmap_en: 'Core foundation for Spring Boot microservices, transaction safety, and payment gateways.',
        roleInRoadmap_bn: 'স্প্রিং বুট মাইক্রোসার্ভিস ও ব্যাংকিং আর্থিক লেনদেনের মূল ভিত্তি।',
        importance: 'Essential'
      },
      {
        trackSlug: 'backend-systems-engineering',
        trackTitle_en: 'Backend API Systems & Database Architecture',
        trackTitle_bn: 'ব্যাকএন্ড এপিআই সিস্টেমস ও ডেটাবেস আর্কিটেকচার',
        roleInRoadmap_en: 'High-reliability concurrent banking backend architecture.',
        roleInRoadmap_bn: 'নিরাপদ ব্যাংকিং ও এন্টারপ্রাইজ সিস্টেম আর্কিটেকচার।',
        importance: 'Recommended'
      },
      {
        trackSlug: 'qa-software-testing',
        trackTitle_en: 'Software QA & Bug Testing',
        trackTitle_bn: 'সফটওয়্যার টেস্টিং ও কোয়ালিটি নিশ্চিতকরণ',
        roleInRoadmap_en: 'Automated banking regression suites with Selenium WebDriver.',
        roleInRoadmap_bn: 'সেলেনিয়াম দিয়ে ব্যাংকিং সফটওয়্যারের স্বয়ংক্রিয় টেস্টিং।',
        importance: 'Recommended'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'sql',
        nextLanguageName: 'SQL (PostgreSQL)',
        targetRoadmapSlug: 'enterprise-java-fintech',
        reason_en: 'Enterprise Java developers must master relational ACID database queries and joins to design banking ledgers.',
        reason_bn: 'ব্যাংকিং লেজার ও ফিনটেক ডেটাবেস সুরক্ষার জন্য জাভার সাথে এসকিউএল আয়ত্ত করা অপরিহার্য।'
      }
    ]
  },
  {
    id: 'php',
    name: 'PHP (PHP 8+ / Laravel)',
    category: 'Commercial Web Agencies & Freelancing',
    iconName: 'Globe',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'Server-side language driving Laravel and WordPress, accounting for the highest volume of junior web developer jobs across Dhaka.',
    description_bn: 'লারাভেল ও ওয়ার্ডপ্রেসের মূল ভিত্তি। ঢাকার সফটওয়্যার এজেন্সিগুলোতে ফ্রেশারদের জন্য সবচেয়ে বেশি চাকরির সুযোগ এর মাধ্যমেই তৈরি হয়।',
    associatedRoadmaps: [
      {
        trackSlug: 'laravel-php-agency-dev',
        trackTitle_en: 'Laravel, PHP and Agency Full-Stack Web Development',
        trackTitle_bn: 'লারাভেল, পিএইচপি ও এজেন্সি ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট',
        roleInRoadmap_en: 'Core language for Laravel 11 MVC, Livewire, and database Eloquent ORM.',
        roleInRoadmap_bn: 'লারাভেল ১১ ফ্রেমওয়ার্ক ও লাইভওয়্যার দিয়ে দ্রুত ওয়েব অ্যাপ্লিকেশন তৈরি।',
        importance: 'Essential'
      },
      {
        trackSlug: 'digital-marketing-ecommerce',
        trackTitle_en: 'Digital Marketing & E-Commerce Operations',
        trackTitle_bn: 'ডিজিটাল মার্কেটিং ও ই-কমার্স অপারেশনস',
        roleInRoadmap_en: 'WooCommerce online store setup, plugin modifications, and checkout flows.',
        roleInRoadmap_bn: 'উকমার্স দিয়ে দেশীয় অনলাইন শপ পরিচালনা ও প্লাগিন কাস্টমাইজেশন।',
        importance: 'Recommended'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'javascript',
        nextLanguageName: 'JavaScript',
        targetRoadmapSlug: 'laravel-php-agency-dev',
        reason_en: 'Combining PHP/Laravel with JavaScript and Alpine.js enables building dynamic single-page web experiences.',
        reason_bn: 'লারাভেলের সাথে জাভাস্ক্রিপ্ট যুক্ত করলে পেজ রিলোড ছাড়া আকর্ষণীয় সিঙ্গেল পেজ অ্যাপ্লিকেশন বানানো যায়।'
      }
    ]
  },
  {
    id: 'solidity',
    name: 'Solidity',
    category: 'Web3 & Smart Contracts',
    iconName: 'Database',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Statically typed smart contract language for the Ethereum Virtual Machine (EVM). Powers decentralized finance (DeFi), token contracts, and Web3 protocols.',
    description_bn: 'ইথেরিয়াম ব্লকচেইনের স্মার্ট কন্ট্রাক্ট ভাষা। ডিসেন্ট্রালাইজড ফিনান্স (DeFi) ও ডিজিটাল টোকেনের স্বয়ংক্রিয় চুক্তির কোড।',
    associatedRoadmaps: [
      {
        trackSlug: 'blockchain-web3-developer',
        trackTitle_en: 'Blockchain, Web3 and Smart Contract Engineering',
        trackTitle_bn: 'ব্লকচেইন, ওয়েব৩ ও স্মার্ট কন্ট্রাক্ট ইঞ্জিনিয়ারিং',
        roleInRoadmap_en: 'Writing gas-optimized, immutable financial smart contracts on EVM Layer 2 networks.',
        roleInRoadmap_bn: 'ইভিএম ব্লকচেইনে নিরাপদ ও অপরিবর্তনীয় আর্থিক স্মার্ট কন্ট্রাক্ট তৈরি।',
        importance: 'Essential'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'rust',
        nextLanguageName: 'Rust',
        targetRoadmapSlug: 'blockchain-web3-developer',
        reason_en: 'Rust powers modern high-speed Layer 1 blockchains like Solana, Near, and Polkadot.',
        reason_bn: 'সলিডিটি জানার পর রাস্ট শিখলে সোলানা ও উচ্চগতির নতুন ব্লকচেইনে কাজ করার সুযোগ পাওয়া যায়।'
      }
    ]
  },
  {
    id: 'sql',
    name: 'SQL (Structured Query Language)',
    category: 'Databases & Big Data',
    iconName: 'Database',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'The universal language of structured data. Used to query, join, and optimize tables across PostgreSQL, MySQL, Snowflake, and BigQuery.',
    description_bn: 'রিলেশনাল ডেটাবেসের বিশ্বজনীন ভাষা। পোস্টগ্রেস, মাইএসকিউএল ও ক্লাউড ডেটা ওয়্যারহাউসে তথ্য বিশ্লেষণের প্রধান হাতিয়ার।',
    associatedRoadmaps: [
      {
        trackSlug: 'backend-systems-engineering',
        trackTitle_en: 'Backend API Systems & Database Architecture',
        trackTitle_bn: 'ব্যাকএন্ড এপিআই সিস্টেমস ও ডেটাবেস আর্কিটেকচার',
        roleInRoadmap_en: 'Designing schemas, foreign key joins, indexing, and ACID transactions.',
        roleInRoadmap_bn: 'টেবিল স্কিমা ডিজাইন, ইনডেক্সিং ও নিরাপদ ব্যাংকিং ট্রানজ্যাকশন।',
        importance: 'Essential'
      },
      {
        trackSlug: 'data-engineering-big-data',
        trackTitle_en: 'Data Engineering, ETL Pipelines & Big Data Systems',
        trackTitle_bn: 'ডেটা ইঞ্জিনিয়ারিং, ইটিএল পাইপলাইন ও বিগ ডেটা',
        roleInRoadmap_en: 'Complex window calculations, partitioning, and dimensional warehouse modeling.',
        roleInRoadmap_bn: 'উইন্ডো ফাংশন, টেবিল পার্টিশনিং ও অ্যানালিটিক্যাল ডেটা ওয়্যারহাউস কুয়েরি।',
        importance: 'Essential'
      },
      {
        trackSlug: 'enterprise-java-fintech',
        trackTitle_en: 'Enterprise Java, FinTech and Core Banking Systems',
        trackTitle_bn: 'এন্টারপ্রাইজ জাভা, ফিনটেক ও কোর ব্যাংকিং সফটওয়্যার',
        roleInRoadmap_en: 'Financial ledger records and ACID transaction balance integrity.',
        roleInRoadmap_bn: 'ব্যাংকিং ব্যালেন্স হিসাব ও আর্থিক লেনদেন ডেটাবেস অখণ্ডতা।',
        importance: 'Essential'
      },
      {
        trackSlug: 'laravel-php-agency-dev',
        trackTitle_en: 'Laravel, PHP and Agency Full-Stack Web Development',
        trackTitle_bn: 'লারাভেল, পিএইচপি ও এজেন্সি ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট',
        roleInRoadmap_en: 'MySQL relational databases for e-commerce and local portals.',
        roleInRoadmap_bn: 'মাইএসকিউএল রিলেশনাল ডেটাবেসে ই-কমার্স পণ্যের তথ্য সংরক্ষণ।',
        importance: 'Essential'
      },
      {
        trackSlug: 'python-data-ai',
        trackTitle_en: 'Python Programming, Data Analytics & AI Associate',
        trackTitle_bn: 'পাইথন প্রোগ্রামিং, ডেটা অ্যানালিটিক্স ও এআই অ্যাসোসিয়েট',
        roleInRoadmap_en: 'Extracting and aggregating business sales metrics from data warehouses.',
        roleInRoadmap_bn: 'কোম্পানির ডেটাবেস থেকে সেলস ও অডিট রিপোর্ট তৈরি।',
        importance: 'Essential'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'python',
        nextLanguageName: 'Python (Pandas / PySpark)',
        targetRoadmapSlug: 'data-engineering-big-data',
        reason_en: 'Combining SQL with Python unlocks automated data engineering pipelines and machine learning.',
        reason_bn: 'এসকিউএলের পর পাইথন শিখলে সম্পূর্ণ স্বয়ংক্রিয় ডেটা পাইপলাইন ও এআই প্রজেক্ট তৈরি করা যায়।'
      }
    ]
  },
  {
    id: 'dart',
    name: 'Dart (Flutter)',
    category: 'Mobile Cross-Platform',
    iconName: 'Smartphone',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'Modern client-optimized programming language developed by Google. Powers the Flutter framework for iOS, Android, and web apps.',
    description_bn: 'গুগলের তৈরি ক্লায়েন্ট-অপ্টিমাইজড ভাষা। একটি কোডবেস দিয়ে অ্যান্ড্রয়েড ও আইওএস অ্যাপ বানানোর ফ্লাটার ফ্রেমওয়ার্কের ভাষা।',
    associatedRoadmaps: [
      {
        trackSlug: 'mobile-app-development',
        trackTitle_en: 'Mobile App Development (Flutter & Android / iOS)',
        trackTitle_bn: 'মোবাইল অ্যাপ ডেভেলপমেন্ট (ফ্লাটার ও অ্যান্ড্রয়েড)',
        roleInRoadmap_en: 'Writing all mobile UI widgets, state logic, and async networking.',
        roleInRoadmap_bn: 'মোবাইল অ্যাপ ইন্টারফেস, স্টেট ম্যানেজমেন্ট ও এপিআই কলিং।',
        importance: 'Essential'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'kotlin',
        nextLanguageName: 'Kotlin',
        targetRoadmapSlug: 'mobile-app-development',
        reason_en: 'Kotlin deepens your Android native knowledge for custom platform channel plugins.',
        reason_bn: 'ডার্টের পর কোটলিন শিখলে অ্যান্ড্রয়েডের নেটিভ ফিচার ও হার্ডওয়্যার সেন্সর সহজে নিয়ন্ত্রণ করা যায়।'
      }
    ]
  },
  {
    id: 'c_cpp',
    name: 'C / C++',
    category: 'Hardware, Embedded & Systems',
    iconName: 'Cpu',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'High-speed, low-level language with direct memory control. Powers microcontrollers, operating system kernels, IoT hardware, and game engines.',
    description_bn: 'কম্পিউটারের সরাসরি মেমোরি নিয়ন্ত্রণের শক্তিশালী ভাষা। মাইক্রোকন্ট্রোলার ও আইওটি ডিভাইসের মূল কোড।',
    associatedRoadmaps: [
      {
        trackSlug: 'embedded-iot-robotics',
        trackTitle_en: 'Embedded Systems, IoT & Industrial Automation',
        trackTitle_bn: 'এমবেডেড সিস্টেমস, আইওটি ও ইন্ডাস্ট্রিয়াল অটোমেশন',
        roleInRoadmap_en: 'Writing firmware for Arduino, ESP32 microcontrollers, and reading hardware sensors.',
        roleInRoadmap_bn: 'আরডুইনো ও ইএসপি৩২ মাইক্রোকন্ট্রোলারের ফার্মওয়্যার তৈরি।',
        importance: 'Essential'
      },
      {
        trackSlug: 'game-development-unity',
        trackTitle_en: 'Game Development (Unity Engine & C#)',
        trackTitle_bn: 'গেম ডেভেলপমেন্ট (ইউনিটি ইঞ্জিন ও সি-শার্প)',
        roleInRoadmap_en: 'Low-level performance optimization and custom game engine plugins.',
        roleInRoadmap_bn: 'উচ্চগতির গেম ইঞ্জিন ও ফিজিক্স অপ্টিমাইজেশন।',
        importance: 'Recommended'
      },
      {
        trackSlug: 'ethical-hacking-bug-bounty',
        trackTitle_en: 'Ethical Hacking, Penetration Testing and Bug Bounty',
        trackTitle_bn: 'এথিক্যাল হ্যাকিং ও বাগ বাউন্টি হান্টার',
        roleInRoadmap_en: 'Understanding memory buffer overflows, pointer exploits, and reverse engineering.',
        roleInRoadmap_bn: 'মেমোরি বাফার ওভারফ্লো ও সফটওয়্যার রিভার্স ইঞ্জিনিয়ারিং বিশ্লেষণ।',
        importance: 'Recommended'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'csharp',
        nextLanguageName: 'C#',
        targetRoadmapSlug: 'game-development-unity',
        reason_en: 'Polytechnic students who know C in 1st/2nd semester can transition to C# seamlessly to build 3D games.',
        reason_bn: '১ম বা ২য় সেমিস্টারে সি প্রোগ্রামিং জানা শিক্ষার্থীরা সি-শার্প শিখে খুব সহজেই গেম ডেভেলপমেন্টে যেতে পারে।'
      },
      {
        nextLanguageId: 'rust',
        nextLanguageName: 'Rust',
        targetRoadmapSlug: 'backend-systems-engineering',
        reason_en: 'Rust offers the speed of C++ without its memory crashes and vulnerabilities.',
        reason_bn: 'সি++ এর মতো উচ্চগতি এবং নিরাপদ মেমোরি সুরক্ষার জন্য আধুনিক রাস্ট (Rust) সেরা বিকল্প।'
      }
    ]
  },
  {
    id: 'bash_shell',
    name: 'Bash / Linux Shell Scripting',
    category: 'DevOps, Servers & Security',
    iconName: 'Terminal',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'The standard command-line language of Unix and Linux. Essential for controlling servers, cron jobs, and cloud deployment pipelines.',
    description_bn: 'লিনাক্স টার্মিনালের স্ট্যান্ডার্ড কমান্ড ভাষা। সার্ভার পরিচালনা ও ক্লাউড অটোমেশনের জন্য আবশ্যক।',
    associatedRoadmaps: [
      {
        trackSlug: 'linux-devops-admin',
        trackTitle_en: 'Server Administration, Linux and DevOps',
        trackTitle_bn: 'সার্ভার অ্যাডমিনিস্ট্রেশন, লিনাক্স ও ডেভঅপ্স',
        roleInRoadmap_en: 'Automating database backups, server monitoring, and systemctl services.',
        roleInRoadmap_bn: 'স্বয়ংক্রিয় ব্যাকআপ, সার্ভার রিস্টার্ট ও ক্রনজব পরিচালনা।',
        importance: 'Essential'
      },
      {
        trackSlug: 'cloud-solutions-architecture',
        trackTitle_en: 'Cloud Solutions & AWS Infrastructure Engineering',
        trackTitle_bn: 'ক্লাউড সল্যুশনস ও এডব্লিউএস ইনফ্রাস্ট্রাকচার ইঞ্জিনিয়ারিং',
        roleInRoadmap_en: 'EC2 user-data initialization scripts and cloud environment setup.',
        roleInRoadmap_bn: 'এডব্লিউএস সার্ভার প্রভিশনিং ও বুটস্ট্র্যাপ স্ক্রিপ্ট।',
        importance: 'Essential'
      },
      {
        trackSlug: 'ethical-hacking-bug-bounty',
        trackTitle_en: 'Ethical Hacking, Penetration Testing and Bug Bounty',
        trackTitle_bn: 'এথিক্যাল হ্যাকিং ও বাগ বাউন্টি হান্টার',
        roleInRoadmap_en: 'Chaining terminal tools (subfinder, httpx, ffuf) during reconnaissance scans.',
        roleInRoadmap_bn: 'টার্মিনাল পাইপিং দিয়ে রিকন টুলস ও সিকিউরিটি লগ বিশ্লেষণ।',
        importance: 'Essential'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'python',
        nextLanguageName: 'Python',
        targetRoadmapSlug: 'linux-devops-admin',
        reason_en: 'Python expands shell scripts into enterprise automation tools and cloud monitoring microservices.',
        reason_bn: 'ব্যাশ স্ক্রিপ্টের সাথে পাইথন জানলে বড় ক্লাউড সার্ভারের সম্পূর্ণ অটোমেশন করা সহজ হয়।'
      }
    ]
  },
  {
    id: 'golang',
    name: 'Go (Golang)',
    category: 'Cloud Microservices & High-Performance',
    iconName: 'Server',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Fast, statically typed compiled language engineered by Google for concurrent cloud microservices, Docker tooling, and Kubernetes operators.',
    description_bn: 'গুগলের তৈরি উচ্চগতির ভাষা। ক্লাউড মাইক্রোসার্ভিস, ডকার টুলস ও অতি দ্রুতগতির এপিআই তৈরিতে বহুল ব্যবহৃত।',
    associatedRoadmaps: [
      {
        trackSlug: 'backend-systems-engineering',
        trackTitle_en: 'Backend API Systems & Database Architecture',
        trackTitle_bn: 'ব্যাকএন্ড এপিআই সিস্টেমস ও ডেটাবেস আর্কিটেকচার',
        roleInRoadmap_en: 'Ultra-low latency APIs and concurrent network workers.',
        roleInRoadmap_bn: 'কম মেমোরিতে বিপুল রিকোয়েস্ট হ্যান্ডেলিংয়ের আধুনিক বিকল্প।',
        importance: 'Recommended'
      },
      {
        trackSlug: 'cloud-solutions-architecture',
        trackTitle_en: 'Cloud Solutions & AWS Infrastructure Engineering',
        trackTitle_bn: 'ক্লাউড সল্যুশনস ও এডব্লিউএস ইনফ্রাস্ট্রাকচার ইঞ্জিনিয়ারিং',
        roleInRoadmap_en: 'Writing high-throughput microservices and custom Kubernetes operators.',
        roleInRoadmap_bn: 'উচ্চগতির ক্লাউড মাইক্রোসার্ভিস ও সার্ভার ব্যাকএন্ড।',
        importance: 'Recommended'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'rust',
        nextLanguageName: 'Rust',
        targetRoadmapSlug: 'backend-systems-engineering',
        reason_en: 'For low-level memory control and zero-garbage-collection systems engineering.',
        reason_bn: 'মেমোরি সেফটি ও সর্বোচ্চ স্পিডের জন্য গো-এর পর রাস্ট একটি দারুণ পছন্দের ভাষা।'
      }
    ]
  },
  {
    id: 'html_css',
    name: 'HTML5 & CSS3 / Tailwind',
    category: 'Web Foundations',
    iconName: 'Layers',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'The foundational markup and styling languages of every website and web app across the world.',
    description_bn: 'বিশ্বের প্রতিটি ওয়েবসাইট ও ওয়েব অ্যাপের দৃশ্যমান কঙ্কাল ও ডিজাইনের ভাষা।',
    associatedRoadmaps: [
      {
        trackSlug: 'frontend-fullstack-web',
        trackTitle_en: 'Frontend & Full-Stack Web Development',
        trackTitle_bn: 'ফ্রন্টএন্ড ও ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট',
        roleInRoadmap_en: 'Semantic page structure, responsive Tailwind utilities, and accessible layouts.',
        roleInRoadmap_bn: 'ওয়েব পেজের গঠন, টেইলউইন্ড সিএসএস ও রেসপনসিভ ডিজাইন।',
        importance: 'Essential'
      },
      {
        trackSlug: 'ui-ux-design',
        trackTitle_en: 'UI/UX and Product Design',
        trackTitle_bn: 'ইউআই/ইউএক্স ও প্রোডাক্ট ডিজাইন',
        roleInRoadmap_en: 'Understanding developer flexbox and CSS grids during handoff from Figma.',
        roleInRoadmap_bn: 'ফিগমা থেকে কোডে রূপান্তরের জন্য ফ্লেক্সবক্স ও গ্রিডের জ্ঞান।',
        importance: 'Essential'
      },
      {
        trackSlug: 'laravel-php-agency-dev',
        trackTitle_en: 'Laravel, PHP and Agency Full-Stack Web Development',
        trackTitle_bn: 'লারাভেল, পিএইচপি ও এজেন্সি ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট',
        roleInRoadmap_en: 'Styling Blade templates and Livewire e-commerce shopping components.',
        roleInRoadmap_bn: 'ব্লেড ভিউ ও ই-কমার্স কম্পোনেন্ট রেসপনসিভ স্টাইলিং।',
        importance: 'Essential'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'javascript',
        nextLanguageName: 'JavaScript',
        targetRoadmapSlug: 'frontend-fullstack-web',
        reason_en: 'Once you understand HTML and CSS, JavaScript brings your pages to life with interactivity.',
        reason_bn: 'এইচটিএমএল ও সিএসএসের পর জাভাস্ক্রিপ্ট শিখলে ওয়েবসাইটে ইন্টারঅ্যাক্টিভ প্রাণ যুক্ত হয়।'
      }
    ]
  },
  {
    id: 'rust',
    name: 'Rust',
    category: 'Systems, Web3 & High Performance',
    iconName: 'Cpu',
    difficulty: 'Advanced',
    difficulty_bn: 'উন্নত',
    description_en: 'Blazingly fast, memory-efficient systems language with zero garbage collector pauses. Powers modern blockchain nodes, browser engines, and high-performance CLIs.',
    description_bn: 'স্মৃতি সুরক্ষাসম্পন্ন উচ্চগতির আধুনিক ভাষা। ব্লকচেইন প্রোটোকল, ব্রাউজার ইঞ্জিন ও সার্ভার টুলস তৈরিতে শীর্ষে।',
    associatedRoadmaps: [
      {
        trackSlug: 'blockchain-web3-developer',
        trackTitle_en: 'Blockchain, Web3 and Smart Contract Engineering',
        trackTitle_bn: 'ব্লকচেইন, ওয়েব৩ ও স্মার্ট কন্ট্রাক্ট ইঞ্জিনিয়ারিং',
        roleInRoadmap_en: 'Writing high-throughput Solana and Near protocol smart contracts.',
        roleInRoadmap_bn: 'সোলানা ব্লকচেইনে উচ্চগতির স্মার্ট কন্ট্রাক্ট তৈরি।',
        importance: 'Recommended'
      },
      {
        trackSlug: 'desktop-app-development',
        trackTitle_en: 'Cross-Platform Desktop Apps and POS Systems',
        trackTitle_bn: 'ডেস্কটপ অ্যাপ্লিকেশন ও পিওএস সফটওয়্যার',
        roleInRoadmap_en: 'Native lightweight backend engine powering Tauri desktop applications.',
        roleInRoadmap_bn: 'টরি ডেস্কটপ সফটওয়্যারের লাইটওয়েট ব্যাকএন্ড ইঞ্জিন তৈরি।',
        importance: 'Recommended'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'solidity',
        nextLanguageName: 'Solidity',
        targetRoadmapSlug: 'blockchain-web3-developer',
        reason_en: 'Expand into multi-chain EVM protocols across Ethereum, Arbitrum, and Polygon.',
        reason_bn: 'রাস্টের পাশাপাশি সলিডিটি জানলে ইথেরিয়াম ও পলিগন নেটওয়ার্কেও কাজ করা যায়।'
      }
    ]
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    category: 'Native Android & Multiplatform',
    iconName: 'Smartphone',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Modern, concise language fully supported by Google for native Android app development and backend services.',
    description_bn: 'গুগলের অফিসিয়াল অ্যান্ড্রয়েড প্রোগ্রামিং ভাষা। আধুনিক অ্যান্ড্রয়েড অ্যাপ ও ব্যাকএন্ড সার্ভিসের শক্তিশালী ল্যাঙ্গুয়েজ।',
    associatedRoadmaps: [
      {
        trackSlug: 'mobile-app-development',
        trackTitle_en: 'Mobile App Development (Flutter & Android / iOS)',
        trackTitle_bn: 'মোবাইল অ্যাপ ডেভেলপমেন্ট (ফ্লাটার ও অ্যান্ড্রয়েড)',
        roleInRoadmap_en: 'Writing native Android plugins and background location services for Flutter.',
        roleInRoadmap_bn: 'অ্যান্ড্রয়েডের নেটিভ সার্ভিস ও ব্যাকগ্রাউন্ড লোকেশন হ্যান্ডলিং।',
        importance: 'Recommended'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'dart',
        nextLanguageName: 'Dart (Flutter)',
        targetRoadmapSlug: 'mobile-app-development',
        reason_en: 'Learn Flutter to publish cross-platform apps to both iOS and Android simultaneously.',
        reason_bn: 'কোটলিনের সাথে ডার্ট ফ্লাটার শিখলে একই কোডে আইওএস ও অ্যান্ড্রয়েড দুটি অ্যাপই তৈরি করা যায়।'
      }
    ]
  },
  {
    id: 'r_lang',
    name: 'R Language',
    category: 'Statistics & Research',
    iconName: 'Database',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'Statistical programming language designed for clinical trials, demographic analytics, and academic research papers.',
    description_bn: 'পরিসংখ্যান ও গবেষণার ভাষা। ডেমোগ্রাফিক অ্যানালাইসিস ও শিক্ষামূলক গবেষণায় ব্যবহৃত হয়।',
    associatedRoadmaps: [
      {
        trackSlug: 'python-data-ai',
        trackTitle_en: 'Python Programming, Data Analytics & AI Associate',
        trackTitle_bn: 'পাইথন প্রোগ্রামিং, ডেটা অ্যানালিটিক্স ও এআই অ্যাসোসিয়েট',
        roleInRoadmap_en: 'Statistical significance testing and demographic modeling.',
        roleInRoadmap_bn: 'পরিসংখ্যানগত ডেটা বিশ্লেষণ ও রিসার্চ মডেলিং।',
        importance: 'Recommended'
      }
    ],
    nextLanguageSuggestions: [
      {
        nextLanguageId: 'python',
        nextLanguageName: 'Python',
        targetRoadmapSlug: 'python-data-ai',
        reason_en: 'Transitioning from R to Python opens up enterprise production pipelines and AI engineering.',
        reason_bn: 'আর ল্যাঙ্গুয়েজের পর পাইথন শিখলে সরাসরি এআই ইঞ্জিনিয়ারিং ও প্রোডাকশন কোডিংয়ে যাওয়া যায়।'
      }
    ]
  }
];

export const skillsMatrix: SkillMatrixItem[] = [
  {
    id: 'docker',
    name: 'Docker & Containerization',
    category: 'DevOps & Systems',
    iconName: 'Layers',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Package applications into lightweight, isolated containers that run reliably across development laptops and production cloud servers.',
    description_bn: 'সফটওয়্যার ও তার প্রয়োজনীয় প্যাকেজগুলোকে একটি স্বয়ংসম্পূর্ণ কনটেইনারে বন্দি করে যেকোনো সার্ভারে চালানো।',
    associatedRoadmaps: [
      { trackSlug: 'linux-devops-admin', trackTitle_en: 'Linux & DevOps Admin', trackTitle_bn: 'লিনাক্স ও ডেভঅপ্স', importance: 'Essential' },
      { trackSlug: 'cloud-solutions-architecture', trackTitle_en: 'Cloud Solutions (AWS)', trackTitle_bn: 'ক্লাউড সল্যুশনস (AWS)', importance: 'Essential' },
      { trackSlug: 'backend-systems-engineering', trackTitle_en: 'Backend Systems', trackTitle_bn: 'ব্যাকএন্ড সিস্টেমস', importance: 'Essential' },
      { trackSlug: 'data-engineering-big-data', trackTitle_en: 'Data Engineering & Big Data', trackTitle_bn: 'ডেটা ইঞ্জিনিয়ারিং', importance: 'Essential' },
      { trackSlug: 'enterprise-java-fintech', trackTitle_en: 'Enterprise Java & FinTech', trackTitle_bn: 'এন্টারপ্রাইজ জাভা', importance: 'Recommended' },
      { trackSlug: 'frontend-fullstack-web', trackTitle_en: 'Full-Stack Web', trackTitle_bn: 'ফুল-স্ট্যাক ওয়েব', importance: 'Recommended' }
    ]
  },
  {
    id: 'git_github',
    name: 'Git & GitHub Version Control',
    category: 'Core Engineering',
    iconName: 'Code2',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'Branching, commits, pull requests, and remote repositories. The universal collaboration standard for all tech roles.',
    description_bn: 'কোড ব্যাকআপ, ভার্সন কন্ট্রোল ও টিমওয়ার্কের সর্বজনীন প্রযুক্তি। সব টেক পেশার জন্য এটি বাধ্যতামূলক।',
    associatedRoadmaps: [
      { trackSlug: 'frontend-fullstack-web', trackTitle_en: 'Full-Stack Web', trackTitle_bn: 'ফুল-স্ট্যাক ওয়েব', importance: 'Essential' },
      { trackSlug: 'backend-systems-engineering', trackTitle_en: 'Backend Systems', trackTitle_bn: 'ব্যাকএন্ড সিস্টেমস', importance: 'Essential' },
      { trackSlug: 'mobile-app-development', trackTitle_en: 'Mobile Apps (Flutter)', trackTitle_bn: 'মোবাইল অ্যাপস', importance: 'Essential' },
      { trackSlug: 'enterprise-java-fintech', trackTitle_en: 'Enterprise Java', trackTitle_bn: 'এন্টারপ্রাইজ জাভা', importance: 'Essential' },
      { trackSlug: 'laravel-php-agency-dev', trackTitle_en: 'Laravel Full-Stack', trackTitle_bn: 'লারাভেল ফুল-স্ট্যাক', importance: 'Essential' },
      { trackSlug: 'blockchain-web3-developer', trackTitle_en: 'Blockchain Web3', trackTitle_bn: 'ব্লকচেইন ওয়েব৩', importance: 'Essential' },
      { trackSlug: 'game-development-unity', trackTitle_en: 'Game Dev Unity', trackTitle_bn: 'গেম ডেভেলপমেন্ট', importance: 'Essential' },
      { trackSlug: 'ai-ml-engineer', trackTitle_en: 'AI & ML Engineer', trackTitle_bn: 'এআই ও মেশিন লার্নিং', importance: 'Essential' }
    ]
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL Relational Database',
    category: 'Databases',
    iconName: 'Database',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'The world most advanced open source database. Powers enterprise financial transactions, ACID compliance, and relational queries.',
    description_bn: 'বিশ্বের শীর্ষস্থানীয় ওপেন সোর্স রিলেশনাল ডেটাবেস। আর্থিক লেনদেন ও জটিল ডেটা নিরাপদে সংরক্ষণ করে।',
    associatedRoadmaps: [
      { trackSlug: 'backend-systems-engineering', trackTitle_en: 'Backend Systems', trackTitle_bn: 'ব্যাকএন্ড সিস্টেমস', importance: 'Essential' },
      { trackSlug: 'enterprise-java-fintech', trackTitle_en: 'Enterprise Java', trackTitle_bn: 'এন্টারপ্রাইজ জাভা', importance: 'Essential' },
      { trackSlug: 'data-engineering-big-data', trackTitle_en: 'Data Engineering', trackTitle_bn: 'ডেটা ইঞ্জিনিয়ারিং', importance: 'Essential' },
      { trackSlug: 'frontend-fullstack-web', trackTitle_en: 'Full-Stack Web', trackTitle_bn: 'ফুল-স্ট্যাক ওয়েব', importance: 'Essential' }
    ]
  },
  {
    id: 'unity_engine',
    name: 'Unity Engine & 2D/3D Game Mechanics',
    category: 'Game Engines',
    iconName: 'Layers',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Scene composition, Rigidbody physics, camera controllers, particle effects, UI canvases, and Android APK export.',
    description_bn: 'ইউনিটি এডিটর দিয়ে গেমের সিন সাজানো, ক্যারেক্টার ফিজিক্স ও প্লে-স্টোরে গেম রিলিজ করা।',
    associatedRoadmaps: [
      { trackSlug: 'game-development-unity', trackTitle_en: 'Game Dev Unity', trackTitle_bn: 'গেম ডেভেলপমেন্ট', importance: 'Essential' }
    ]
  },
  {
    id: 'pytorch_deep_learning',
    name: 'PyTorch Neural Networks & Transformers',
    category: 'AI & Deep Learning',
    iconName: 'Cpu',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Building custom neural networks, loss functions, GPU acceleration, Hugging Face transformer models, and RAG search.',
    description_bn: 'পাইটর্চ দিয়ে নিউরাল নেটওয়ার্ক তৈরি, ট্রান্সফরমার ও নিজস্ব ডেটায় এআই মডেল ফাইন-টিউনিং।',
    associatedRoadmaps: [
      { trackSlug: 'ai-ml-engineer', trackTitle_en: 'AI & Machine Learning', trackTitle_bn: 'এআই ও মেশিন লার্নিং', importance: 'Essential' },
      { trackSlug: 'python-data-ai', trackTitle_en: 'Python Data & AI', trackTitle_bn: 'পাইথন ডেটা ও এআই', importance: 'Recommended' }
    ]
  },
  {
    id: 'burp_suite',
    name: 'Burp Suite Web Vulnerability Interception',
    category: 'Ethical Hacking & Security',
    iconName: 'ShieldCheck',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Proxying HTTP traffic, Repeater request tampering, Intruder fuzzing, and identifying OWASP Top 10 vulnerabilities.',
    description_bn: 'বার্প স্যুট প্রক্সি দিয়ে ওয়েবের ট্র্যাফিক পরীক্ষা করা ও সিকিউরিটি বাগ খুঁজে বাউন্টি নেওয়া।',
    associatedRoadmaps: [
      { trackSlug: 'ethical-hacking-bug-bounty', trackTitle_en: 'Ethical Hacking', trackTitle_bn: 'এথিক্যাল হ্যাকিং', importance: 'Essential' },
      { trackSlug: 'cybersecurity-soc-analyst', trackTitle_en: 'Cyber Security & SOC', trackTitle_bn: 'সাইবার সিকিউরিটি', importance: 'Essential' }
    ]
  },
  {
    id: 'spring_boot',
    name: 'Spring Boot & Enterprise Microservices',
    category: 'Backend Frameworks',
    iconName: 'Server',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Dependency Injection, Spring Data JPA, Spring Security, Flyway migrations, and core banking microservice APIs.',
    description_bn: 'স্প্রিং বুট ফ্রেমওয়ার্ক দিয়ে ব্যাংকিং ও এন্টারপ্রাইজ সিস্টেমের নিরাপদ ব্যাকএন্ড তৈরি।',
    associatedRoadmaps: [
      { trackSlug: 'enterprise-java-fintech', trackTitle_en: 'Enterprise Java', trackTitle_bn: 'এন্টারপ্রাইজ জাভা', importance: 'Essential' },
      { trackSlug: 'backend-systems-engineering', trackTitle_en: 'Backend Systems', trackTitle_bn: 'ব্যাকএন্ড সিস্টেমস', importance: 'Recommended' }
    ]
  },
  {
    id: 'laravel_framework',
    name: 'Laravel MVC & Eloquent Database ORM',
    category: 'Web Frameworks',
    iconName: 'Globe',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'Artisan CLI, Eloquent relationships, Blade templating, Livewire 3 reactive interfaces, and MySQL integration.',
    description_bn: 'লারাভেল ফ্রেমওয়ার্ক ও লাইভওয়্যার দিয়ে দ্রুত আধুনিক ই-কমার্স ও ওয়েব অ্যাপ্লিকেশন তৈরি।',
    associatedRoadmaps: [
      { trackSlug: 'laravel-php-agency-dev', trackTitle_en: 'Laravel Full-Stack', trackTitle_bn: 'লারাভেল ফুল-স্ট্যাক', importance: 'Essential' }
    ]
  },
  {
    id: 'apache_spark_kafka',
    name: 'Apache Spark & Kafka Event Streaming',
    category: 'Big Data & Streaming',
    iconName: 'Database',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Distributed big data processing with PySpark, real-time message streaming with Kafka, and Parquet column storage.',
    description_bn: 'স্পার্ক দিয়ে কোটি কোটি ডেটা নিমেষে প্রসেস করা ও কাফকা দিয়ে রিয়েল-টাইম মেসেজ স্ট্রিমিং।',
    associatedRoadmaps: [
      { trackSlug: 'data-engineering-big-data', trackTitle_en: 'Data Engineering', trackTitle_bn: 'ডেটা ইঞ্জিনিয়ারিং', importance: 'Essential' }
    ]
  },
  {
    id: 'electron_desktop',
    name: 'Electron.js & Desktop POS Hardware Integration',
    category: 'Desktop Development',
    iconName: 'Layers',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'Building cross-platform offline desktop software with SQLite, thermal receipt printers, and barcode scanners.',
    description_bn: 'ইলেকট্রন দিয়ে অফলাইন ডেস্কটপ সফটওয়্যার, থার্মাল প্রিন্টার ও বারকোড স্ক্যানার পরিচালনা।',
    associatedRoadmaps: [
      { trackSlug: 'desktop-app-development', trackTitle_en: 'Desktop POS Apps', trackTitle_bn: 'ডেস্কটপ পিওএস অ্যাপস', importance: 'Essential' }
    ]
  },
  {
    id: 'hardhat_solidity',
    name: 'Hardhat & Smart Contract Security (Solidity)',
    category: 'Blockchain & Web3',
    iconName: 'Database',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Compiling, testing, and deploying secure Solidity contracts to Ethereum testnets with OpenZeppelin libraries.',
    description_bn: 'হার্ডহ্যাট দিয়ে ব্লকচেইনে স্মার্ট কন্ট্রাক্ট টেস্ট ও ইথারস্ক্যানে কোড ভেরিফিকেশন।',
    associatedRoadmaps: [
      { trackSlug: 'blockchain-web3-developer', trackTitle_en: 'Blockchain Web3', trackTitle_bn: 'ব্লকচেইন ওয়েব৩', importance: 'Essential' }
    ]
  },
  {
    id: 'linux_cli',
    name: 'Linux Command Line (CLI)',
    category: 'Operating Systems',
    iconName: 'Terminal',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'Terminal navigation, file permissions (chmod/chown), process control (htop/systemctl), and SSH remote administration.',
    description_bn: 'টার্মিনাল কমান্ড দিয়ে রিমোট সার্ভার পরিচালনা, ফাইল পারমিশন ও প্রসেস নিয়ন্ত্রণ।',
    associatedRoadmaps: [
      { trackSlug: 'linux-devops-admin', trackTitle_en: 'Linux & DevOps', trackTitle_bn: 'লিনাক্স ও ডেভঅপ্স', importance: 'Essential' },
      { trackSlug: 'cybersecurity-soc-analyst', trackTitle_en: 'Cyber Security & SOC', trackTitle_bn: 'সাইবার সিকিউরিটি', importance: 'Essential' },
      { trackSlug: 'ethical-hacking-bug-bounty', trackTitle_en: 'Ethical Hacking', trackTitle_bn: 'এথিক্যাল হ্যাকিং', importance: 'Essential' },
      { trackSlug: 'cloud-solutions-architecture', trackTitle_en: 'Cloud Solutions (AWS)', trackTitle_bn: 'ক্লাউড সল্যুশনস', importance: 'Essential' }
    ]
  },
  {
    id: 'wireshark',
    name: 'Wireshark Packet Analysis',
    category: 'Networking & Security',
    iconName: 'Network',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Capturing and inspecting network packets in real-time. Crucial for diagnosing network drops and cybersecurity intrusions.',
    description_bn: 'নেটওয়ার্কের ডেটা প্যাকেট লাইভ পর্যবেক্ষণ করা। নেটওয়ার্কিং সমস্যা ও সাইবার অ্যাটাক ধরতে ব্যবহৃত হয়।',
    associatedRoadmaps: [
      { trackSlug: 'cybersecurity-soc-analyst', trackTitle_en: 'Cyber Security & SOC', trackTitle_bn: 'সাইবার সিকিউরিটি', importance: 'Essential' },
      { trackSlug: 'isp-mikrotik-networking', trackTitle_en: 'ISP & Networking', trackTitle_bn: 'আইএসপি ও নেটওয়ার্কিং', importance: 'Essential' },
      { trackSlug: 'it-hardware-support', trackTitle_en: 'IT Hardware Support', trackTitle_bn: 'আইটি সাপোর্ট', importance: 'Recommended' }
    ]
  },
  {
    id: 'mikrotik_winbox',
    name: 'MikroTik RouterOS & WinBox',
    category: 'ISP & Networking',
    iconName: 'Network',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'Configuring bandwidth queues, BDIX local routing, IP pools, PPPoE users, and firewall rules in graphical WinBox.',
    description_bn: 'উইনবক্স দিয়ে ব্যান্ডউইথ নিয়ন্ত্রণ, বিডিআইএক্স লোকাল ট্র্যাফিক রাউটিং ও আইএসপি ইউজার ম্যানেজমেন্ট।',
    associatedRoadmaps: [
      { trackSlug: 'isp-mikrotik-networking', trackTitle_en: 'ISP & Networking', trackTitle_bn: 'আইএসপি ও নেটওয়ার্কিং', importance: 'Essential' },
      { trackSlug: 'it-hardware-support', trackTitle_en: 'IT Hardware Support', trackTitle_bn: 'আইটি সাপোর্ট', importance: 'Recommended' }
    ]
  },
  {
    id: 'figma',
    name: 'Figma & Design Systems',
    category: 'Design & UI/UX',
    iconName: 'Palette',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'Vector-based collaborative interface design, auto layout, reusable component libraries, and interactive prototyping.',
    description_bn: 'মোবাইল অ্যাপ ও ওয়েবসাইটের ইন্টারফেস ডিজাইন, অটো-লেআউট ও কম্পোনেন্ট সিস্টেম তৈরি।',
    associatedRoadmaps: [
      { trackSlug: 'ui-ux-design', trackTitle_en: 'UI/UX Product Design', trackTitle_bn: 'ইউআই/ইউএক্স ডিজাইন', importance: 'Essential' },
      { trackSlug: 'frontend-fullstack-web', trackTitle_en: 'Full-Stack Web', trackTitle_bn: 'ফুল-স্ট্যাক ওয়েব', importance: 'Recommended' },
      { trackSlug: 'graphic-design-motion', trackTitle_en: 'Graphic Design', trackTitle_bn: 'গ্রাফিক্স ডিজাইন', importance: 'Recommended' }
    ]
  },
  {
    id: 'aws_cloud',
    name: 'AWS Core (EC2, S3, RDS, VPC)',
    category: 'Cloud Services',
    iconName: 'Layers',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Amazon Web Services global cloud infrastructure. Launching scalable servers, encrypted storage, and private cloud networks.',
    description_bn: 'আমাজন ক্লাউড সার্ভার, ভার্চুয়াল প্রাইভেট নেটওয়ার্ক (VPC) ও ম্যানেজড ক্লাউড স্টোরেজ।',
    associatedRoadmaps: [
      { trackSlug: 'cloud-solutions-architecture', trackTitle_en: 'Cloud Solutions (AWS)', trackTitle_bn: 'ক্লাউড সল্যুশনস', importance: 'Essential' },
      { trackSlug: 'linux-devops-admin', trackTitle_en: 'Linux & DevOps', trackTitle_bn: 'লিনাক্স ও ডেভঅপ্স', importance: 'Essential' },
      { trackSlug: 'data-engineering-big-data', trackTitle_en: 'Data Engineering', trackTitle_bn: 'ডেটা ইঞ্জিনিয়ারিং', importance: 'Recommended' }
    ]
  },
  {
    id: 'terraform',
    name: 'Terraform (Infrastructure as Code)',
    category: 'DevOps Automation',
    iconName: 'Server',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Writing declarative configuration code to provision, change, and version cloud infrastructure across AWS, Azure, and Google Cloud.',
    description_bn: 'কোড লিখে স্বয়ংক্রিয়ভাবে ক্লাউড সার্ভার তৈরি ও মুছে ফেলার আধুনিক ডেভঅপ্স টুল।',
    associatedRoadmaps: [
      { trackSlug: 'cloud-solutions-architecture', trackTitle_en: 'Cloud Solutions (AWS)', trackTitle_bn: 'ক্লাউড সল্যুশনস', importance: 'Essential' },
      { trackSlug: 'linux-devops-admin', trackTitle_en: 'Linux & DevOps', trackTitle_bn: 'লিনাক্স ও ডেভঅপ্স', importance: 'Recommended' }
    ]
  },
  {
    id: 'rest_apis_postman',
    name: 'RESTful APIs & Postman Testing',
    category: 'Backend & Testing',
    iconName: 'Globe',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'HTTP verbs (GET, POST, PUT, DELETE), JSON payloads, authentication headers, and automated endpoint testing with Postman.',
    description_bn: 'রেস্ট এপিআই কল করা, পোস্টম্যান দিয়ে ডেটা পরীক্ষা ও স্বয়ংক্রিয় টেস্ট স্ক্রিপ্ট তৈরি।',
    associatedRoadmaps: [
      { trackSlug: 'backend-systems-engineering', trackTitle_en: 'Backend Systems', trackTitle_bn: 'ব্যাকএন্ড সিস্টেমস', importance: 'Essential' },
      { trackSlug: 'frontend-fullstack-web', trackTitle_en: 'Full-Stack Web', trackTitle_bn: 'ফুল-স্ট্যাক ওয়েব', importance: 'Essential' },
      { trackSlug: 'mobile-app-development', trackTitle_en: 'Mobile Apps (Flutter)', trackTitle_bn: 'মোবাইল অ্যাপস', importance: 'Essential' },
      { trackSlug: 'qa-software-testing', trackTitle_en: 'Software QA Testing', trackTitle_bn: 'সফটওয়্যার টেস্টিং', importance: 'Essential' }
    ]
  },
  {
    id: 'arduino_esp32',
    name: 'Arduino & ESP32 Microcontrollers',
    category: 'Hardware & IoT',
    iconName: 'Cpu',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'Interfacing physical microcontrollers with sensors, relays, Wi-Fi chips, and breadboard circuit electronics.',
    description_bn: 'মাইক্রোকন্ট্রোলারের সাথে সেন্সর, রিলে ও ওয়াইফাই চিপের সার্কিট কানেকশন ও কোডিং।',
    associatedRoadmaps: [
      { trackSlug: 'embedded-iot-robotics', trackTitle_en: 'Embedded Systems & IoT', trackTitle_bn: 'এমবেডেড ও আইওটি', importance: 'Essential' },
      { trackSlug: 'it-hardware-support', trackTitle_en: 'IT Hardware Support', trackTitle_bn: 'আইটি সাপোর্ট', importance: 'Recommended' }
    ]
  },
  {
    id: 'power_bi',
    name: 'Power BI & Business Analytics',
    category: 'Data & Analytics',
    iconName: 'Cpu',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'Interactive business charts, DAX formulas, executive KPI metrics, and converting raw database numbers into visual insights.',
    description_bn: 'কোম্পানির ব্যবসায়িক ডেটা থেকে আকর্ষণীয় চার্ট, গ্রাফ ও এক্সিকিউটিভ ড্যাশবোর্ড তৈরি।',
    associatedRoadmaps: [
      { trackSlug: 'python-data-ai', trackTitle_en: 'Python Data & AI', trackTitle_bn: 'পাইথন ডেটা ও এআই', importance: 'Essential' },
      { trackSlug: 'digital-marketing-ecommerce', trackTitle_en: 'Digital Marketing', trackTitle_bn: 'ডিজিটাল মার্কেটিং', importance: 'Recommended' }
    ]
  },
  {
    id: 'jira_bug_tracking',
    name: 'Jira & Bug Life Cycle Management',
    category: 'QA & Management',
    iconName: 'CheckCircle2',
    difficulty: 'Beginner',
    difficulty_bn: 'সহজ',
    description_en: 'Documenting reproducible software defects, managing sprint backlogs, and communicating bug severity to developers.',
    description_bn: 'সফটওয়্যারের ভুলত্রুটির স্পষ্ট বিবরণ লিখে ডেভেলপার টিমের জন্য জিরাতে বাগ রিপোর্ট করা।',
    associatedRoadmaps: [
      { trackSlug: 'qa-software-testing', trackTitle_en: 'Software QA Testing', trackTitle_bn: 'সফটওয়্যার টেস্টিং', importance: 'Essential' },
      { trackSlug: 'frontend-fullstack-web', trackTitle_en: 'Full-Stack Web', trackTitle_bn: 'ফুল-স্ট্যাক ওয়েব', importance: 'Recommended' }
    ]
  },
  {
    id: 'cisco_packet_tracer',
    name: 'Cisco Packet Tracer & Enterprise Routing',
    category: 'Networking',
    iconName: 'Network',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Simulating complex enterprise networks with Cisco routers, switches, VLANs, and OSPF routing protocols.',
    description_bn: 'সিসকো রাউটার, সুইচ ও ভিল্যান (VLAN) দিয়ে বড় কর্পোরেট নেটওয়ার্ক সিমুলেশন করা।',
    associatedRoadmaps: [
      { trackSlug: 'isp-mikrotik-networking', trackTitle_en: 'ISP & Networking', trackTitle_bn: 'আইএসপি ও নেটওয়ার্কিং', importance: 'Essential' },
      { trackSlug: 'it-hardware-support', trackTitle_en: 'IT Hardware Support', trackTitle_bn: 'আইটি সাপোর্ট', importance: 'Recommended' }
    ]
  },
  {
    id: 'redis_caching',
    name: 'Redis In-Memory Key-Value Caching',
    category: 'Backend & High-Performance',
    iconName: 'Server',
    difficulty: 'Intermediate',
    difficulty_bn: 'মাঝারি',
    description_en: 'Storing hot data in high-speed RAM to eliminate database bottlenecks and achieve sub-10ms server responses.',
    description_bn: 'র‍্যামে ডেটা ক্যাশ করে সার্ভারের গতি বহুগুণ বাড়ানো ও ডেটাবেসের ওপর চাপ কমানো।',
    associatedRoadmaps: [
      { trackSlug: 'backend-systems-engineering', trackTitle_en: 'Backend Systems', trackTitle_bn: 'ব্যাকএন্ড সিস্টেমস', importance: 'Essential' },
      { trackSlug: 'enterprise-java-fintech', trackTitle_en: 'Enterprise Java', trackTitle_bn: 'এন্টারপ্রাইজ জাভা', importance: 'Essential' }
    ]
  },
  {
    id: 'kubernetes_orchestration',
    name: 'Kubernetes (K8s) Cluster Orchestration',
    category: 'DevOps & SRE',
    iconName: 'Layers',
    difficulty: 'Advanced',
    difficulty_bn: 'উন্নত',
    description_en: 'Automated container scheduling, self-healing pods, ingress controllers, horizontal pod autoscaling, and helm charts.',
    description_bn: 'কুবারনেটিস ক্লাস্টার পরিচালনা, স্বয়ংক্রিয় ট্র্যাফিক স্কেলিং ও হাই-অ্যাভেইলেবিলিটি নিশ্চিতকরণ।',
    associatedRoadmaps: [
      { trackSlug: 'cloud-solutions-architecture', trackTitle_en: 'Cloud Solutions (AWS)', trackTitle_bn: 'ক্লাউড সল্যুশনস', importance: 'Essential' },
      { trackSlug: 'linux-devops-admin', trackTitle_en: 'Linux & DevOps', trackTitle_bn: 'লিনাক্স ও ডেভঅপ্স', importance: 'Essential' }
    ]
  }
];

export const interestsMatrix: InterestMatrixItem[] = [
  {
    id: 'game_dev',
    title_en: 'Video Games & 3D Interactive Media',
    title_bn: 'ভিডিও গেম খেলতে ও নতুন গেম তৈরি করতে ভালো লাগে',
    tagline_en: 'Passionate about gaming physics, character control, graphics, and interactive worlds.',
    tagline_bn: 'গেমের গ্রাফিক্স, ক্যারেক্টার পরিচালনা ও ভার্চুয়াল জগৎ তৈরির প্রতি তীব্র ভালোলাগা।',
    iconName: 'Layers',
    recommendedStarterLanguage: 'C# (Unity)',
    matchingRoadmaps: [
      {
        trackSlug: 'game-development-unity',
        trackTitle_en: 'Game Development (Unity Engine & C#)',
        trackTitle_bn: 'গেম ডেভেলপমেন্ট (ইউনিটি ইঞ্জিন ও সি-শার্প)',
        fitReason_en: 'Direct fit: write physics scripts in C#, design 2D/3D scenes, and export playable Android games.',
        fitReason_bn: 'একদম সরাসরি ট্র্যাক: সি-শার্প দিয়ে কোড লিখে ২ডি/৩ডি গেম ও প্লে-স্টোর এপিকে তৈরি।',
        difficultyTier: 'Moderate',
        difficultyTier_bn: 'মাঝারি'
      },
      {
        trackSlug: 'mobile-app-development',
        trackTitle_en: 'Mobile App Development (Flutter)',
        trackTitle_bn: 'মোবাইল অ্যাপ ডেভেলপমেন্ট (ফ্লাটার)',
        fitReason_en: 'Alternative path: build gamified mobile utility apps and casual interactive widgets in Dart.',
        fitReason_bn: 'বিকল্প ট্র্যাক: ডার্ট দিয়ে মোবাইল অ্যাপস ও ইন্টারঅ্যাক্টিভ অ্যানিমেশন তৈরি।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      }
    ]
  },
  {
    id: 'ethical_hacking',
    title_en: 'Ethical Hacking, Bug Hunting & Cyber Defense',
    title_bn: 'হ্যাকিং, বাগ হান্টিং ও সাইবার সিকিউরিটি পছন্দ',
    tagline_en: 'Curious about discovering vulnerabilities, breaking defenses, and securing banking networks.',
    tagline_bn: 'ওয়েবসাইটের ত্রুটি বা দুর্বলতা খুঁজে বের করা ও সাইবার অ্যাটাক ঠেকানোর প্রতি আগ্রহ।',
    iconName: 'ShieldCheck',
    recommendedStarterLanguage: 'Python & Bash',
    matchingRoadmaps: [
      {
        trackSlug: 'ethical-hacking-bug-bounty',
        trackTitle_en: 'Ethical Hacking & Bug Bounty Hunting',
        trackTitle_bn: 'এথিক্যাল হ্যাকিং ও বাগ বাউন্টি হান্টার',
        fitReason_en: 'Direct offensive fit: intercept traffic in Burp Suite, test OWASP Top 10, and earn bounties on HackerOne.',
        fitReason_bn: 'অফেনসিভ নিরাপত্তা: বার্প স্যুট দিয়ে ওয়েবসাইট টেস্ট ও হ্যাকারওয়ানে বাউন্টি অর্জন।',
        difficultyTier: 'Moderate',
        difficultyTier_bn: 'মাঝারি'
      },
      {
        trackSlug: 'cybersecurity-soc-analyst',
        trackTitle_en: 'Cyber Security & SOC Analyst',
        trackTitle_bn: 'সাইবার সিকিউরিটি ও এসওসি অ্যানালিস্ট',
        fitReason_en: 'Defensive enterprise fit: monitor network packets in Wireshark, analyze SIEM logs, and guard bank servers.',
        fitReason_bn: 'ডিফেন্সিভ নিরাপত্তা: ওয়্যারশার্ক দিয়ে নেটওয়ার্ক প্যাকেট মনিটরিং ও ব্যাংকিং সার্ভার সুরক্ষা।',
        difficultyTier: 'Moderate',
        difficultyTier_bn: 'মাঝারি'
      }
    ]
  },
  {
    id: 'ai_deep_learning',
    title_en: 'Artificial Intelligence, Neural Networks & Chatbots',
    title_bn: 'কৃত্রিম বুদ্ধিমত্তা, নিউরাল নেটওয়ার্ক ও এআই চ্যাটবট ভালো লাগে',
    tagline_en: 'Eager to build intelligent agents, RAG search engines, and computer vision systems.',
    tagline_bn: 'স্মার্ট এআই মডেল, নিজস্ব ডেটার চ্যাটবট ও ছবি চেনার নিউরাল নেটওয়ার্ক বানানোর স্বপ্ন।',
    iconName: 'Cpu',
    recommendedStarterLanguage: 'Python (PyTorch)',
    matchingRoadmaps: [
      {
        trackSlug: 'ai-ml-engineer',
        trackTitle_en: 'AI and Machine Learning Engineering',
        trackTitle_bn: 'এআই ও মেশিন লার্নিং ইঞ্জিনিয়ারিং',
        fitReason_en: 'Cutting-edge AI: build neural networks in PyTorch, fine-tune LLMs, and deploy RAG vector search apps.',
        fitReason_bn: 'আধুনিক এআই: পাইটর্চ দিয়ে ডিপ লার্নিং মডেল, হাগিং ফেস ও আরএজি চ্যাটবট তৈরি।',
        difficultyTier: 'Challenging',
        difficultyTier_bn: 'উচ্চমানের'
      },
      {
        trackSlug: 'python-data-ai',
        trackTitle_en: 'Python Data Analytics & AI Associate',
        trackTitle_bn: 'পাইথন ডেটা অ্যানালিটিক্স ও এআই অ্যাসোসিয়েট',
        fitReason_en: 'Practical analytical fit: clean business data with Pandas and build Power BI executive charts.',
        fitReason_bn: 'ব্যবহারিক ডেটা অ্যানালিসিস: প্যান্ডাস ও পাওয়ার বিআই দিয়ে বিজনেস ড্যাশবোর্ড তৈরি।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      }
    ]
  },
  {
    id: 'mobile_apps',
    title_en: 'Mobile Apps for Smartphone & Google Play',
    title_bn: 'স্মার্টফোনের মোবাইল অ্যাপ বানিয়ে প্লে-স্টোরে প্রকাশ করতে চাই',
    tagline_en: 'Passionate about mobile touch UX, notifications, offline storage, and consumer apps.',
    tagline_bn: 'নিজের তৈরি অ্যাপ বন্ধুদের ফোনে ইনস্টল করে দেখাতে ও প্লে-স্টোরে লাইভ ছাড়তে আগ্রহী।',
    iconName: 'Smartphone',
    recommendedStarterLanguage: 'Dart (Flutter)',
    matchingRoadmaps: [
      {
        trackSlug: 'mobile-app-development',
        trackTitle_en: 'Mobile App Development (Flutter)',
        trackTitle_bn: 'মোবাইল অ্যাপ ডেভেলপমেন্ট (ফ্লাটার)',
        fitReason_en: 'Google Flutter: single codebase compiling to native Android APKs and iOS apps with Firebase.',
        fitReason_bn: 'একটি কোড দিয়েই অ্যান্ড্রয়েড ও আইওএস অ্যাপ রিলিজ ও ফায়ারবেস ব্যাকএন্ড।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      },
      {
        trackSlug: 'game-development-unity',
        trackTitle_en: 'Game Development (Unity Engine)',
        trackTitle_bn: 'গেম ডেভেলপমেন্ট (ইউনিটি)',
        fitReason_en: 'If you want mobile 2D/3D casual games with touch controls and AdMob monetization.',
        fitReason_bn: 'মোবাইলের জন্য আকর্ষণীয় ২ডি বা ৩ডি ক্যাজুয়াল গেম তৈরি।',
        difficultyTier: 'Moderate',
        difficultyTier_bn: 'মাঝারি'
      }
    ]
  },
  {
    id: 'web_software',
    title_en: 'Websites, E-Commerce & Full-Stack Portals',
    title_bn: 'ওয়েবসাইট, ইকমার্স ও পূর্ণাঙ্গ ওয়েব সফটওয়্যার বানাতে চাই',
    tagline_en: 'Want to build modern SaaS web apps, dynamic customer portals, and e-commerce checkouts.',
    tagline_bn: 'অনলাইন শপ, নিউজ পোর্টাল বা কোম্পানির ইন্টারনাল সফটওয়্যার তৈরি করতে আগ্রহী।',
    iconName: 'Globe',
    recommendedStarterLanguage: 'JavaScript or PHP',
    matchingRoadmaps: [
      {
        trackSlug: 'frontend-fullstack-web',
        trackTitle_en: 'Frontend & Full-Stack Web (React & Next.js)',
        trackTitle_bn: 'ফ্রন্টএন্ড ও ফুল-স্ট্যাক ওয়েব (রিয়্যাক্ট ও নেক্সট.জেএস)',
        fitReason_en: 'Modern high-tech stack: TypeScript, Next.js 15, Tailwind, and Node.js backend.',
        fitReason_bn: 'সর্বাধুনিক স্ট্যাক: টাইপস্ক্রিপ্ট, নেক্সট.জেএস, টেইলউইন্ড ও নোড.জেএস।',
        difficultyTier: 'Moderate',
        difficultyTier_bn: 'মাঝারি'
      },
      {
        trackSlug: 'laravel-php-agency-dev',
        trackTitle_en: 'Laravel, PHP and Agency Web Development',
        trackTitle_bn: 'লারাভেল, পিএইচপি ও এজেন্সি ফুল-স্ট্যাক',
        fitReason_en: 'Fastest placement track: build database apps with Laravel 11 and Livewire for local agencies.',
        fitReason_bn: 'দ্রুত চাকরির সুযোগ: লারাভেল ১১ ও লাইভওয়্যার দিয়ে দেশীয় এজেন্সিতে এন্ট্রি।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      },
      {
        trackSlug: 'backend-systems-engineering',
        trackTitle_en: 'Backend API Systems & Database Architecture',
        trackTitle_bn: 'ব্যাকএন্ড এপিআই সিস্টেমস ও ডেটাবেস আর্কিটেকচার',
        fitReason_en: 'For deep focus on Node.js, PostgreSQL relational queries, and Redis caching.',
        fitReason_bn: 'সার্ভার সাইড আর্কিটেকচার, পোস্টগ্রেস ডেটাবেস ও রেডিস ক্যাশিংয়ে গভীর ফোকাস।',
        difficultyTier: 'Moderate',
        difficultyTier_bn: 'মাঝারি'
      }
    ]
  },
  {
    id: 'servers_cloud',
    title_en: 'Servers, Cloud Infrastructure, Linux & DevOps',
    title_bn: 'সার্ভার, টার্মিনাল, ক্লাউড ও অটোমেশন পছন্দ',
    tagline_en: 'Love configuring Linux VPS machines, automated CI/CD deployments, and cloud architectures.',
    tagline_bn: 'ইউআই ডিজাইনের চেয়ে লিনাক্স টার্মিনাল কমান্ড ও ক্লাউড সার্ভার ডিপ্লয়মেন্ট বেশি টানে।',
    iconName: 'Server',
    recommendedStarterLanguage: 'Bash & Python',
    matchingRoadmaps: [
      {
        trackSlug: 'linux-devops-admin',
        trackTitle_en: 'Linux Server Administration & DevOps',
        trackTitle_bn: 'লিনাক্স সার্ভার অ্যাডমিনিস্ট্রেশন ও ডেভঅপ্স',
        fitReason_en: 'Hands-on server control: Ubuntu terminal, Docker containers, Nginx, and GitHub Actions CI/CD.',
        fitReason_bn: 'সার্ভার পরিচালনা: উবুন্টু কমান্ড, ডকার কনটেইনার, এনজিনএক্স ও স্বয়ংক্রিয় ডিপ্লয়মেন্ট।',
        difficultyTier: 'Moderate',
        difficultyTier_bn: 'মাঝারি'
      },
      {
        trackSlug: 'cloud-solutions-architecture',
        trackTitle_en: 'Cloud Solutions & AWS Infrastructure',
        trackTitle_bn: 'ক্লাউড সল্যুশনস ও এডব্লিউএস ইনফ্রাস্ট্রাকচার',
        fitReason_en: 'Global cloud architecture: Amazon Web Services (EC2, S3, RDS, VPC) and Terraform.',
        fitReason_bn: 'আমাজন ওয়েব সার্ভিসেস (AWS) ও টেরাফর্ম দিয়ে ক্লাউড ইনফ্রাস্ট্রাকচার কোডিং।',
        difficultyTier: 'Moderate',
        difficultyTier_bn: 'মাঝারি'
      }
    ]
  },
  {
    id: 'networking_isp',
    title_en: 'Routers, Fiber Optics, Local Internet & ISP',
    title_bn: 'রাউটার কনফিগারেশন, আইএসপি ও লোকাল নেটওয়ার্কিং ভালোবাসি',
    tagline_en: 'Passionate about network cables, BDIX local routing, Wi-Fi towers, and IP pools.',
    tagline_bn: 'কম্পিউটার নেটওয়ার্ক, লোকাল ব্যান্ডউইথ নিয়ন্ত্রণ ও আইএসপি সেটআপে কাজ করার আনন্দ।',
    iconName: 'Network',
    recommendedStarterLanguage: 'RouterOS & CLI',
    matchingRoadmaps: [
      {
        trackSlug: 'isp-mikrotik-networking',
        trackTitle_en: 'ISP & MikroTik Network Engineering',
        trackTitle_bn: 'আইএসপি ও মিক্রোটিক নেটওয়ার্ক ইঞ্জিনিয়ারিং',
        fitReason_en: 'Dominant local BD hardware job: configure bandwidth queues, BDIX traffic, and WinBox routers.',
        fitReason_bn: 'দেশীয় আইএসপি জব: উইনবক্স, ব্যান্ডউইথ কিউ, বিডিআইএক্স রাউটিং ও ফায়ারওয়াল কনফিগ।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      },
      {
        trackSlug: 'it-hardware-support',
        trackTitle_en: 'IT Hardware Support & Maintenance',
        trackTitle_bn: 'আইটি হার্ডওয়্যার সাপোর্ট ও মেইনটেন্যান্স',
        fitReason_en: 'Office LAN cabling, crimping RJ45, switch setups, and hardware diagnostics.',
        fitReason_bn: 'অফিস ল্যান কেবলিং, আরজে৪৫ ক্রিমিং, সুইচ সেটআপ ও পিসি মেরামত।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      }
    ]
  },
  {
    id: 'hardware_iot',
    title_en: 'Electronics, Microcontrollers, Robotics & IoT',
    title_bn: 'সার্কিট, রোবট, আরডুইনো ও হার্ডওয়্যার ডিভাইস পছন্দ',
    tagline_en: 'Love breadboards, sensors, ESP32 chips, soldering, and writing firmware in C/C++.',
    tagline_bn: 'শারীরিক ইলেকট্রনিক্স সার্কিট, সেন্সর ও চিপ কোডিং করে স্মার্ট গ্যাজেট বানানোর শখ।',
    iconName: 'Cpu',
    recommendedStarterLanguage: 'C / C++ (Arduino)',
    matchingRoadmaps: [
      {
        trackSlug: 'embedded-iot-robotics',
        trackTitle_en: 'Embedded Systems & IoT Engineering',
        trackTitle_bn: 'এমবেডেড সিস্টেমস ও আইওটি ইঞ্জিনিয়ারিং',
        fitReason_en: 'Microcontroller programming: Arduino, ESP32 Wi-Fi chips, MQTT, and factory automation.',
        fitReason_bn: 'মাইক্রোকন্ট্রোলার কোডিং: আরডুইনো, ইএসপি৩২ ওয়াইফাই চিপ ও ইন্ডাস্ট্রিয়াল অটোমেশন।',
        difficultyTier: 'Moderate',
        difficultyTier_bn: 'মাঝারি'
      }
    ]
  },
  {
    id: 'fintech_banking',
    title_en: 'Banks, Financial Services & Safe Lifelong Corporate Careers',
    title_bn: 'ব্যাংক, পেমেন্ট গেটওয়ে ও বড় এন্টারপ্রাইজে নিরাপদ ক্যারিয়ার চাই',
    tagline_en: 'Value high job security, respected officer positions, stable compensation, and financial systems.',
    tagline_bn: 'চাকরির স্থায়িত্ব, ব্যাংকিং সম্মানজনক পদ ও ফিনটেক পেমেন্ট সিস্টেমস পরিচালনায় আগ্রহ।',
    iconName: 'Briefcase',
    recommendedStarterLanguage: 'Java 21 (Spring Boot)',
    matchingRoadmaps: [
      {
        trackSlug: 'enterprise-java-fintech',
        trackTitle_en: 'Enterprise Java, FinTech and Core Banking Systems',
        trackTitle_bn: 'এন্টারপ্রাইজ জাভা, ফিনটেক ও কোর ব্যাংকিং সফটওয়্যার',
        fitReason_en: 'Golden path to banking IT: Spring Boot, PostgreSQL ACID transactions, and bKash APIs.',
        fitReason_bn: 'ব্যাংক আইটির নিশ্চিত পথ: স্প্রিং বুট, পোস্টগ্রেস লেনদেন ও বিকাশ পেমেন্ট ইন্টিগ্রেশন।',
        difficultyTier: 'Moderate',
        difficultyTier_bn: 'মাঝারি'
      },
      {
        trackSlug: 'qa-software-testing',
        trackTitle_en: 'Software QA & Bug Testing',
        trackTitle_bn: 'সফটওয়্যার টেস্টিং ও কোয়ালিটি নিশ্চিতকরণ',
        fitReason_en: 'Banking QA verification: test mobile banking send-money flows and API schemas with Postman.',
        fitReason_bn: 'ব্যাংকিং কিউএ: মোবাইল ব্যাংকিং লেনদেন টেস্ট করা ও পোস্টম্যান দিয়ে এপিআই ভ্যালিডেশন।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      }
    ]
  },
  {
    id: 'design_creative',
    title_en: 'Visual Design, UI/UX, Logos & Creative Media',
    title_bn: 'কোডিংয়ের চেয়ে ভিজ্যুয়াল ডিজাইন, লোগো ও ইউআই পছন্দ',
    tagline_en: 'Love colors, typography, vector drawing, user interfaces, and mobile wireframes.',
    tagline_bn: 'জটিল কোড লেখার চেয়ে মানুষের ব্যবহারের জন্য সুন্দর স্ক্রিন ও গ্রাফিক্স আঁকা বেশি ভালো লাগে।',
    iconName: 'Palette',
    recommendedStarterLanguage: 'Figma & Design Systems',
    matchingRoadmaps: [
      {
        trackSlug: 'ui-ux-design',
        trackTitle_en: 'UI/UX and Product Design',
        trackTitle_bn: 'ইউআই/ইউএক্স ও প্রোডাক্ট ডিজাইন',
        fitReason_en: 'App product design: Figma vector frames, user research, wireframing, and interactive prototypes.',
        fitReason_bn: 'অ্যাপের প্রোডাক্ট ডিজাইন: ফিগমাতে স্ক্রিন লেআউট, অটো-লেআউট ও প্রোটোটাইপিং।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      },
      {
        trackSlug: 'graphic-design-motion',
        trackTitle_en: 'Graphic Design & Visual Production',
        trackTitle_bn: 'গ্রাফিক্স ডিজাইন ও ভিজ্যুয়াল প্রোডাকশন',
        fitReason_en: 'Creative marketing media: Adobe Photoshop, Illustrator, logos, and promotional motion graphics.',
        fitReason_bn: 'মার্কেটিং মিডিয়া: ফটোশপ, ইলাস্ট্রেটর দিয়ে লোগো ও সোশ্যাল মিডিয়া ব্যানার ডিজাইন।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      }
    ]
  },
  {
    id: 'no_heavy_coding',
    title_en: 'No Heavy Coding, Fast Tech Industry Entry',
    title_bn: 'ভারী জটিল কোডিং পছন্দ করি না, কিন্তু ভালো টেক পেশা চাই',
    tagline_en: 'Prefer structured testing, customer support, SEO, hardware maintenance over complex algorithms.',
    tagline_bn: 'অ্যালগরিদমের প্যারা না নিয়ে দ্রুত শিখে দেশীয় ফার্ম বা কর্পোরেটে কাজ করার আগ্রহ।',
    iconName: 'CheckCircle2',
    recommendedStarterLanguage: 'No Coding Required',
    matchingRoadmaps: [
      {
        trackSlug: 'qa-software-testing',
        trackTitle_en: 'Software QA & Bug Testing',
        trackTitle_bn: 'সফটওয়্যার টেস্টিং ও কোয়ালিটি নিশ্চিতকরণ',
        fitReason_en: 'Meticulous testing: write bug tickets in Jira, test apps manually, and verify API responses in Postman.',
        fitReason_bn: 'সফটওয়্যারের ভুলত্রুটি ধরা: জিরাতে বাগ রিপোর্ট করা ও পোস্টম্যান দিয়ে এপিআই টেস্ট।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      },
      {
        trackSlug: 'digital-marketing-ecommerce',
        trackTitle_en: 'Digital Marketing & SEO Operations',
        trackTitle_bn: 'ডিজিটাল মার্কেটিং ও এসইও অপারেশনস',
        fitReason_en: 'Business growth: Google search ranking (SEO), Meta ads targeting, and Shopify e-commerce.',
        fitReason_bn: 'গুগল সার্চ র‍্যাঙ্কিং (SEO), ফেসবুক বিজ্ঞাপন ও অনলাইন শপ পরিচালনা।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      },
      {
        trackSlug: 'it-hardware-support',
        trackTitle_en: 'IT Support, Hardware & Maintenance',
        trackTitle_bn: 'আইটি সাপোর্ট ও হার্ডওয়্যার মেইনটেন্যান্স',
        fitReason_en: 'Physical hands-on work: PC assembly, troubleshooting Windows, thermal paste, and office networking.',
        fitReason_bn: 'হাতে-কলমে কাজ: কম্পিউটার অ্যাসেম্বল, উইন্ডোজ ট্রাবলশুটিং ও অফিস ল্যান সংযোগ।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      },
      {
        trackSlug: 'bpo-tech-support-data',
        trackTitle_en: 'BPO, Tech Support & Data Operations',
        trackTitle_bn: 'বিপিও, টেকনিক্যাল কাস্টমার সাপোর্ট ও ডেটা',
        fitReason_en: 'Office tech support: Zendesk helpdesk, customer communication, and advanced Excel management.',
        fitReason_bn: 'অফিস সাপোর্ট: হেল্পডেস্ক সফটওয়্যার পরিচালনা ও এক্সেল ডেটা ম্যানেজমেন্ট।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      }
    ]
  },
  {
    id: 'low_spec_mobile',
    title_en: 'No PC / Low Spec Laptop, Mobile & Lab Friendly',
    title_bn: 'নিজের ভালো পিসি নেই, ফোন বা পলিটেকনিক ল্যাব দিয়ে শুরু করতে চাই',
    tagline_en: 'Realistic starting path designed for students without personal laptops or with 4GB budget PCs.',
    tagline_bn: 'ব্যক্তিগত ল্যাপটপ না থাকলেও পলিটেকনিক ল্যাব বা মোবাইল দিয়ে শুরু করার বাস্তব রোডম্যাপ।',
    iconName: 'Smartphone',
    recommendedStarterLanguage: 'Browser Based / Mobile Friendly',
    matchingRoadmaps: [
      {
        trackSlug: 'digital-literacy-foundation',
        trackTitle_en: 'Digital & Computer Literacy Foundation',
        trackTitle_bn: 'ডিজিটাল ও কম্পিউটার লিটারেসি ফাউন্ডেশন',
        fitReason_en: 'Day 1 Bridge: touch-typing on phone with OTG keyboard, Google Docs, and lab PC basics.',
        fitReason_bn: 'প্রথম ধাপ: ফোনে ওটিজি কিবোর্ড দিয়ে টাইপিং ও পলিটেকনিক ল্যাবের বেসিক শেখা।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      },
      {
        trackSlug: 'it-hardware-support',
        trackTitle_en: 'IT Hardware Support & Maintenance',
        trackTitle_bn: 'আইটি সাপোর্ট ও হার্ডওয়্যার মেইনটেন্যান্স',
        fitReason_en: 'Can be learned directly in polytechnic hardware labs on physical machines.',
        fitReason_bn: 'পলিটেকনিকের ল্যাব পিসিতে প্র্যাকটিস করেই সরাসরি শেখা যায়।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      },
      {
        trackSlug: 'qa-software-testing',
        trackTitle_en: 'Software QA & Bug Testing',
        trackTitle_bn: 'সফটওয়্যার টেস্টিং ও কোয়ালিটি নিশ্চিতকরণ',
        fitReason_en: 'Manual testing cases can be written on mobile or lab computers; bug hunting on uTest.',
        fitReason_bn: 'মোবাইল বা ল্যাব পিসি থেকেই টেস্ট কেস লিখে ইউটেস্টে বাউন্টি প্র্যাকটিস করা যায়।',
        difficultyTier: 'Easy',
        difficultyTier_bn: 'সহজ'
      }
    ]
  }
];
