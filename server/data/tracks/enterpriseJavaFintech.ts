import type { CareerTrack } from '../../../shared/types.js';

export const enterpriseJavaFintechTrack: Omit<CareerTrack, 'id'> = {
  slug: 'enterprise-java-fintech',
  title_en: 'Enterprise Java 21+, Spring Boot 3.4 & Core FinTech Systems (2026 Edition)',
  title_bn: 'এন্টারপ্রাইজ জাভা ২১, স্প্রিং বুট ৩.৪ ও কোর ফিনটেক সিস্টেমস (২০২৬ এডিশন)',
  summary_en: 'Calibrated for late 2026. Architect mission-critical banking backends using Java 21 LTS with Virtual Threads (Project Loom), Spring Boot 3.4, Apache Kafka event-driven streaming, PostgreSQL 17 ACID ledgers, and Spring Security 6.',
  summary_bn: '২০২৬ সালের আধুনিক কোর ব্যাংকিং ও ফিনটেক ব্যাকএন্ড। জাভা ২১ ভার্চুয়াল থ্রেডস, স্প্রিং বুট ৩.৪, অ্যাপাচি কাফকা ইভেন্ট স্ট্রিমিং, পোস্টগ্রেসকিউএল ১৭ এসিআইডি ট্রানজ্যাকশন এবং স্প্রিং সিকিউরিটি ৬।',
  pivotAdvice_en: 'Enterprise Java powers 90% of core banking, telecommunication billing, and national payment infrastructure across Bangladesh. While frontend JavaScript libraries evolve rapidly, Java and Spring Boot remain the bedrock of high-paying, recession-proof enterprise engineering careers.',
  pivotAdvice_bn: 'বাংলাদেশের প্রায় সকল তফসিলি ব্যাংক, টেলিকম বিলিং ও জাতীয় পেমেন্ট সুইচ জাভার ওপর প্রতিষ্ঠিত। অন্যান্য ট্রেন্ডি ফ্রেমওয়ার্ক দ্রুত পরিবর্তন হলেও এন্টারপ্রাইজ জাভা ও স্প্রিং বুটের চাকরি দেশের সবচেয়ে স্থিতিশীল, মর্যাদাপূর্ণ ও দীর্ঘমেয়াদী সম্মানজনক ক্যারিয়ার উপহার দেয়।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Developing high-concurrency banking microservices with Spring Boot 3.4 leveraging Java 21 Virtual Threads.',
    'Designing double-entry accounting ledgers and financial schemas in PostgreSQL 17 with strict ACID transactions.',
    'Orchestrating asynchronous event streaming and transaction decoupling using Apache Kafka clusters.',
    'Implementing token authorization, PKCE OAuth2 flows, and encryption using Spring Security 6.',
    'Writing comprehensive unit and integration test suites using JUnit 5, Mockito, and Testcontainers.'
  ],
  dayToDay_bn: [
    'জাভা ২১ ভার্চুয়াল থ্রেডস ও স্প্রিং বুট ৩.৪ দিয়ে উচ্চগতির ব্যাংকিং মাইক্রোসার্ভিস তৈরি করা।',
    'পোস্টগ্রেসকিউএল ১৭ ডেটাবেসে ডাবল-এন্ট্রি একাউন্টিং লেজার স্কিমা ও এসিআইডি ট্রানজ্যাকশন পরিচালনা।',
    'অ্যাপাচি কাফকা (Apache Kafka) দিয়ে রিয়েল-টাইম ব্যাংকিং লেনদেনের ইভেন্ট স্ট্রিমিং ও প্রসেসিং করা।',
    'স্প্রিং সিকিউরিটি ৬ ও ও-অথ২ (OAuth2) দিয়ে ফিনটেক এপিআইয়ের শতভাগ নিরাপত্তা নিশ্চিত করা।',
    'জুনিট ৫ (JUnit 5) ও টেস্টকনটেইনার দিয়ে স্বয়ংক্রিয় টেস্ট লিখে কোটি টাকার লেনদেনে এক পয়সার ভুলও প্রতিরোধ করা।'
  ],
  mustHaveSkills: [
    {
      id: 'java-21-virtual-threads',
      name: 'Java 21 LTS & Virtual Threads (Project Loom)',
      category: 'Core Language',
      importance: 'Essential',
      description_en: 'Records, sealed classes, pattern matching, memory model, and high-concurrency Virtual Threads.',
      description_bn: 'জাভা ২১ রেকর্ডস, প্যাটার্ন ম্যাচিং এবং প্রজেক্ট লুমের ভার্চুয়াল থ্রেডস দিয়ে লক্ষাধিক রিকোয়েস্ট হ্যান্ডেল করা।'
    },
    {
      id: 'spring-boot-34-rest',
      name: 'Spring Boot 3.4 & Spring MVC REST APIs',
      category: 'Enterprise Framework',
      importance: 'Essential',
      description_en: 'Dependency Injection, Inversion of Control, AOP, Bean lifecycles, and centralized exception handling.',
      description_bn: 'স্প্রিং ডিপেন্ডেন্সি ইনজেকশন, রেস্ট কন্ট্রোলার ও সেন্ট্রালাইজড গ্লোবাল এরর হ্যান্ডলিং।'
    },
    {
      id: 'spring-data-jpa-acid',
      name: 'Spring Data JPA, Hibernate & ACID Ledgers',
      category: 'Database Architecture',
      importance: 'Essential',
      description_en: 'Optimistic vs pessimistic row locking (@Transactional), Hibernate N+1 resolution, and Flyway migrations.',
      description_bn: 'হাইবারনেট দিয়ে রিলেশনাল ম্যাপিং, রো লকিং এবং নিরাপদ ফিনান্সিয়াল ট্রানজ্যাকশন পরিচালনা।'
    },
    {
      id: 'kafka-event-streaming',
      name: 'Apache Kafka & Payment Gateway Integrations',
      category: 'Distributed FinTech',
      importance: 'Essential',
      description_en: 'Kafka producers/consumers, idempotent processing, bKash Checkout, Nagad, and SSLCommerz webhooks.',
      description_bn: 'অ্যাপাচি কাফকা দিয়ে ইভেন্ট ডিস্ট্রিবিউশন এবং বিকাশ, নগদ ও কার্ড পেমেন্ট গেটওয়ে ইন্টিগ্রেশন।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Motijheel Financial District, Karwan Bazar, Gulshan, Mohakhali) & Hybrid BD',
      entrySalary: { min: 32000, max: 55000, currency: 'BDT', formatted: '32,000 - 55,000 BDT' },
      midSalary: { min: 75000, max: 150000, currency: 'BDT', formatted: '75,000 - 150,000 BDT' },
      seniorSalary: { min: 170000, max: 360000, currency: 'BDT', formatted: '170,000 - 360,000 BDT' },
      hiringSectors: [
        'Commercial Scheduled Banks (City Bank, BRAC Bank, Dutch-Bangla Bank, Eastern Bank IT divisions)',
        'Mobile Financial Services & Payment Switches (bKash, Nagad, Upay, SSLCOMMERZ core teams)',
        'Large Enterprise IT Exporters (Brain Station 23 Enterprise FinTech, LeadSoft, Kona Software, Walton IT)'
      ],
      cvExpectations: [
        'Rock-solid understanding of Java OOP, memory references, and the Collections Framework',
        'Working GitHub repository featuring a Spring Boot 3+ REST microservice with JPA and PostgreSQL',
        'Demonstrated understanding of database transaction isolation and ledger consistency',
        'Familiarity with Maven/Gradle build pipelines and Docker containerization'
      ],
      localDemandSummary_en: 'Banking and telecommunications in Bangladesh run on Spring Boot. A polytechnic CST graduate with clear OOP fundamentals, Spring Boot REST controllers, and PostgreSQL schema understanding receives enthusiastic interview attention from corporate banking hiring committees.',
      localDemandSummary_bn: 'দেশের ব্যাংকিং ও টেলিকম খাত স্প্রিং বুটের ওপর নির্ভরশীল। সিএসটি শিক্ষার্থীরা যারা নিটোল অবজেক্ট ওরিয়েন্টেড জাভা কোড ও ডেটাবেস ট্রানজ্যাকশন বোঝে, তাদের বাণিজ্যিক ব্যাংক ও সফটওয়্যার কোম্পানিগুলো সম্মানজনক বেতনে নিয়োগ দেয়।'
    },
    targetCountries: [
      {
        region: 'Europe',
        countryName_en: 'Germany, Poland & Netherlands',
        countryName_bn: 'জার্মানি, পোল্যান্ড ও নেদারল্যান্ডস',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Enterprise Java and Spring Boot engineers are the most recruited profile under EU Blue Card schemes across European banking and insurance hubs.',
        visaReality_bn: 'ইউরোপের ব্যাংকিং ও ইন্স্যুরেন্স হাবগুলোতে স্প্রিং বুট ডেভেলপারদের ব্লু কার্ড ভিসা স্পনসরশিপের সর্বোচ্চ সুযোগ রয়েছে।',
        averageSalaryUsdOrLocal: '55,000 - 95,000 EUR / year (approx 7,200,000 - 12,500,000 BDT)',
        requiredExperienceYears: '3 to 5 years'
      },
      {
        region: 'Southeast Asia',
        countryName_en: 'Singapore & Malaysia',
        countryName_bn: 'সিঙ্গাপুর ও মালয়েশিয়া',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Regional investment banks and fintech unicorns hire Java backend engineers with high-concurrency microservice experience.',
        visaReality_bn: 'সিঙ্গাপুর ও মালয়েশিয়ার আন্তর্জাতিক ব্যাংকে জাভা ব্যাকএন্ড ইঞ্জিনিয়ারদের নিয়মিত কাজের ভিসা দেওয়া হয়।',
        averageSalaryUsdOrLocal: '5,000 - 9,000 SGD / month',
        requiredExperienceYears: '2 to 4 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$1,400 - $5,000 USD',
      competitionLevel: 'Moderate',
      competitionLevel_bn: 'মাঝারি',
      englishRequirement: 'Clear professional English to explain financial transactions, system architecture, and API documentation',
      englishRequirement_bn: 'ব্যাংকিং সিস্টেম আর্কিটেকচার ও এপিআই ডাটা ফ্লো আন্তর্জাতিক ক্লায়েন্টদের কাছে তুলে ধরার উপযোগী ইংরেজি',
      realities_en: [
        'Global fintech platforms hire remote Java engineers to build microservices and maintain core payment processing engines.',
        'A public GitHub repository hosting a clean Spring Boot project with automated JUnit test suites commands immediate respect.'
      ],
      realities_bn: [
        'আন্তর্জাতিক ফিনটেক কোম্পানিগুলো পেমেন্ট প্রসেসিং ইঞ্জিন তৈরির জন্য দূরবর্তী স্প্রিং বুট ইঞ্জিনিয়ার নিয়োগ দেয়।',
        'সিভিতে জুনিট টেস্ট কাভার্ড স্প্রিং বুট রিপোজিটরি লিংক থাকলে রিমোট ইন্টারভিউ পাওয়া অনেক সহজ হয়।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Java 21 LTS Mastery: OOP, Generics, Virtual Threads & Streams',
      phaseTitle_bn: 'জাভা ২১ কোর অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং ও ভার্চুয়াল থ্রেডস',
      phaseSubtitle_en: 'Master memory models, Collections Framework, and high-concurrency Virtual Threads.',
      phaseSubtitle_bn: 'মেমরি রেফারেন্স, কালেকশনস ফ্রেমওয়ার্ক ও ভার্চুয়াল থ্রেডের বাস্তব প্রয়োগ।',
      durationWeeks: 4,
      modules: [
        {
          id: 'java-p1-m1',
          title_en: 'OOP Pillars, Java Memory Model & Collections Framework',
          title_bn: 'ওওপি পিলার্স, জাভা মেমরি মডেল ও কালেকশনস ফ্রেমওয়ার্ক',
          description_en: 'Master Encapsulation, Polymorphism, Abstract classes vs Interfaces, Heap vs Stack memory, List, Set, and Map implementations (HashMap buckets).',
          description_bn: 'জাভার ইনক্যাপসুলেশন, পলিমরফিজম, হিপ ও স্ট্যাক মেমরি এবং হ্যাশম্যাপের অভ্যন্তরীণ কাজের কৌশল।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Encapsulation & Polymorphism', 'Heap vs Stack Memory Allocation', 'HashMap Buckets & equals/hashCode', 'Generics & Custom Exceptions'],
          practicalTask_en: 'Build a memory-efficient in-memory transaction registry using HashMaps and ConcurrentLinkedQueue with thread-safe additions.',
          practicalTask_bn: 'হ্যাশম্যাপ ও কনকারেন্ট কিউ ব্যবহার করে একটি থ্রেড-সেফ ইন-মেমরি ট্রানজ্যাকশন রেজিস্ট্রি তৈরি করো।'
        },
        {
          id: 'java-p1-m2',
          title_en: 'Java 21 Modern Syntax & Virtual Threads (Project Loom)',
          title_bn: 'জাভা ২১ রেকর্ডস, প্যাটার্ন ম্যাচিং ও ভার্চুয়াল থ্রেডস',
          description_en: 'Learn immutable Records, sealed classes, pattern matching switches, and launch 100,000 lightweight Virtual Threads with Executors.newVirtualThreadPerTaskExecutor().',
          description_bn: 'রেকর্ডস, সিলড ক্লাস এবং ভার্চুয়াল থ্রেড দিয়ে মেমরি ক্র্যাশ ছাড়াই একসাথে ১ লাখ থ্রেড চালানোর পদ্ধতি।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Java Records & Sealed Classes', 'Pattern Matching for Switch', 'Platform vs Virtual Threads', 'Structured Concurrency basics'],
          practicalTask_en: 'Write a Java benchmark spawning 50,000 Virtual Threads executing simulated HTTP requests without exhausting system RAM.',
          practicalTask_bn: '৫০ হাজার ভার্চুয়াল থ্রেড একসাথে চালু করে মেমরি পরীক্ষা করার একটি জাভা প্রোগ্রাম লেখো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Spring Boot 3.4 Core, Spring Data JPA & PostgreSQL 17 Ledgers',
      phaseTitle_bn: 'স্প্রিং বুট ৩.৪ কোর, স্প্রিং ডাটা জেপিএ ও পোস্টগ্রেসকিউএল ১৭ লেজার',
      phaseSubtitle_en: 'Build enterprise REST endpoints with dependency injection and ACID transactions.',
      phaseSubtitle_bn: 'ডিপেন্ডেন্সি ইনজেকশন, হাইবারনেট স্কিমা ম্যাপিং ও ব্যাংকিং ট্রানজ্যাকশন।',
      durationWeeks: 4,
      modules: [
        {
          id: 'java-p2-m1',
          title_en: 'Spring Boot Architecture, Inversion of Control & REST APIs',
          title_bn: 'স্প্রিং বুট আর্কিটেকচার, আইওসি ও রেস্ট এপিআই তৈরি',
          description_en: 'Understand Bean lifecycles, Inversion of Control, @RestController, @Service, @Repository layers, and centralized @ControllerAdvice exception handling.',
          description_bn: 'স্প্রিং বিন লাইফসাইকেল, কন্ট্রোলার ও সার্ভিস লেয়ার আলাদা করা এবং সেন্ট্রালাইজড এরর হ্যান্ডলিং।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Dependency Injection (@Autowired)', 'ControllerAdvice & Global Exception Handling', 'DTO Pattern & MapStruct', 'Jakarta Validation (@Valid)'],
          practicalTask_en: 'Build a modular Spring Boot REST API for account registration with strict Jakarta DTO validations and centralized JSON error responses.',
          practicalTask_bn: 'একটি স্প্রিং বুট অ্যাকাউন্ট সার্ভিস বানাও যা ইনপুট ভ্যালিডেশন করে স্ট্যান্ডার্ড জেএসএন এরর প্রদান করে।'
        },
        {
          id: 'java-p2-m2',
          title_en: 'Spring Data JPA, Hibernate Relationships & ACID Transactions',
          title_bn: 'স্প্রিং ডাটা জেপিএ, হাইবারনেট রিলেশন ও এসিআইডি ট্রানজ্যাকশন',
          description_en: 'Model @Entity relationships (@OneToMany, @ManyToOne), manage transactions with @Transactional, solve N+1 query problems with JOIN FETCH, and use Flyway.',
          description_bn: 'হাইবারনেট এনটিটি রিলেশনশিপ, @Transactional দিয়ে টাকা লেনদেনের সুরক্ষা এবং ফ্লাইওয়ে মাইগ্রেশন।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['JPA Entity Mappings', '@Transactional Propagation & Isolation', 'JOIN FETCH query optimization', 'Flyway Database Migrations'],
          practicalTask_en: 'Build a double-entry ledger service where transferring funds between two accounts runs in an atomic transaction with row-level locks.',
          practicalTask_bn: 'একটি ফান্ড ট্রান্সফার সার্ভিস তৈরি করো যা ট্রানজ্যাকশন ও রো লক ব্যবহার করে ব্যালেন্সের শতভাগ নির্ভুলতা নিশ্চিত করে।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Spring Security 6, JWT, Apache Kafka Event-Driven Architecture',
      phaseTitle_bn: 'স্প্রিং সিকিউরিটি ৬, জেডব্লিউটি ও অ্যাপাচি কাফকা ইভেন্ট আর্কিটেকচার',
      phaseSubtitle_en: 'Secure endpoints with role-based tokens and decouple microservices with Kafka.',
      phaseSubtitle_bn: 'রোল-ভিত্তিক সিকিউরিটি টোকেন এবং কাফকা দিয়ে ডিস্ট্রিবিউটেড ইভেন্ট স্ট্রিমিং।',
      durationWeeks: 5,
      modules: [
        {
          id: 'java-p3-m1',
          title_en: 'Spring Security 6 Filter Chains & Stateless JWT Authentication',
          title_bn: 'স্প্রিং সিকিউরিটি ৬ ফিল্টার চেইন ও স্টেটলেস জেডব্লিউটি অথেনটিকেশন',
          description_en: 'Configure SecurityFilterChain bean, disable CSRF for stateless REST, implement custom OncePerRequestFilter for JWT parsing, and enforce @PreAuthorize roles.',
          description_bn: 'স্প্রিং সিকিউরিটি ফিল্টার চেইন কনফিগারেশন, কাস্টম টোকেন ভ্যালিডেশন এবং রোল-ভিত্তিক পারমিশন।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['SecurityFilterChain Configuration', 'OncePerRequestFilter for JWT', 'BCryptPasswordEncoder', '@PreAuthorize("hasRole(\'ADMIN\')")'],
          practicalTask_en: 'Build a complete Spring Security 6 authentication module with role-based access control protecting customer banking endpoints.',
          practicalTask_bn: 'একটি স্প্রিং সিকিউরিটি মডিউল বানাও যা ইউজার ও অ্যাডমিনের রোল অনুযায়ী ব্যাংকিং এপিআই সুরক্ষিত রাখে।'
        },
        {
          id: 'java-p3-m2',
          title_en: 'Apache Kafka Event Streaming & Idempotent Consumer Processing',
          title_bn: 'অ্যাপাচি কাফকা ইভেন্ট স্ট্রিমিং ও আইডেমপোটেন্ট কনজিউমার প্রসেসিং',
          description_en: 'Publish transaction events with KafkaTemplate. Build consumers with @KafkaListener, handle network retries, and prevent duplicate balance processing with idempotency keys.',
          description_bn: 'কাফকাতে ট্রানজ্যাকশন ইভেন্ট পাঠানো, কনজিউমার দিয়ে ইভেন্ট ধরা এবং ডুপ্লিকেট পেমেন্ট প্রতিরোধ করার কৌশল।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Kafka Topics, Partitions & Offsets', 'KafkaTemplate Producer', '@KafkaListener Consumer', 'Idempotency Keys for Payments'],
          practicalTask_en: 'Implement an asynchronous payment processing pipeline where successful payments publish a Kafka event consumed by a notification worker.',
          practicalTask_bn: 'কাফকা ব্যবহার করে এমন সিস্টেম বানাও যেখানে পেমেন্ট সফল হওয়ার সাথে সাথে নোটিফিকেশন সার্ভিসে ইভেন্ট চলে যায়।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'FinTech Payment Gateways (bKash/SSL), Docker & Core Banking Viva',
      phaseTitle_bn: 'বিকাশ ও পেমেন্ট গেটওয়ে ইন্টিগ্রেশন, ডকার ও ব্যাংকিং চাকরি ভাইভা',
      phaseSubtitle_en: 'Integrate real merchant APIs, containerize with Docker, and ace banking interviews.',
      phaseSubtitle_bn: 'বাস্তব পেমেন্ট এপিআই ইন্টিগ্রেশন, ডকার বিল্ড ও ব্যাংক টেকনিক্যাল ভাইভা প্রস্তুতি।',
      durationWeeks: 5,
      modules: [
        {
          id: 'java-p4-m1',
          title_en: 'FinTech Merchant Integration: bKash Checkout & SSLCommerz',
          title_bn: 'ফিনটেক পেমেন্ট গেটওয়ে ইন্টিগ্রেশন: বিকাশ চেকআউট ও এসএসএলকমার্জ',
          description_en: 'Implement bKash Tokenized Checkout API: Grant Token, Create Payment, Execute Payment, and verify encrypted webhook callback signatures.',
          description_bn: 'বিকাশ টোকেনাইজড পেমেন্ট এপিআই ইন্টিগ্রেট করা, ওটিপি ভেরিফিকেশন ও ডিজিটাল সিগনেচার যাচাই।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['bKash Merchant Token APIs', 'HMAC SHA256 Webhook Verification', 'Idempotent Payment Callbacks', 'Handling Refund APIs'],
          practicalTask_en: 'Integrate the bKash Sandbox Checkout API in Spring Boot, handling token generation, execution, and callback verification.',
          practicalTask_bn: 'স্প্রিং বুটে বিকাশ স্যান্ডবক্স পেমেন্ট গেটওয়ে যুক্ত করে সফল লেনদেনের টেস্ট সম্পন্ন করো।'
        },
        {
          id: 'java-p4-m2',
          title_en: 'Dockerizing Spring Boot, Testcontainers & Banking Technical Viva',
          title_bn: 'ডকারাইজেশন, টেস্টকনটেইনার দিয়ে ইন্টিগ্রেশন টেস্ট ও ব্যাংক ভাইভা',
          description_en: 'Package Spring Boot applications into optimized multi-stage Docker images. Write integration tests with real PostgreSQL containers via Testcontainers, and master viva scenarios.',
          description_bn: 'স্প্রিং বুট অ্যাপ ডকারাইজ করা, টেস্টকনটেইনার দিয়ে বাস্তব ডেটাবেসে টেস্ট চালানো এবং ব্যাংক ইন্টারভিউ প্রস্তুতি।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Multi-Stage Dockerfile for Spring Boot', 'Testcontainers with PostgreSQL', 'Core Banking System Design Viva', 'CV Highlights'],
          practicalTask_en: 'Publish an end-to-end GitHub repository featuring your complete Spring Boot banking service with Docker Compose and passing JUnit test suites.',
          practicalTask_bn: 'তোমার স্প্রিং বুট ব্যাংকিং প্রজেক্টের সম্পূর্ণ ডকারাইজড রিপোজিটরি ও জুনিট টেস্ট লিংক সিভিতে যুক্ত করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'java-q1',
      question_en: 'How do Java 21 Virtual Threads (Project Loom) differ from traditional platform OS threads, and how do they scale Spring Boot 3.4 to 100k+ concurrent requests?',
      question_bn: 'জাভা ২১ ভার্চুয়াল থ্রেডস (Project Loom) সনাতন প্ল্যাটফর্ম ওএস থ্রেডের চেয়ে কীভাবে আলাদা এবং স্প্রিং বুট ৩.৪-এ এটি কীভাবে লক্ষাধিক রিকোয়েস্ট স্কেল করে?',
      category: 'Java Concurrency',
      whyAsked_en: 'The definitive Java 21 architectural question distinguishing modern engineers from legacy Java 8/11 developers.',
      whyAsked_bn: 'প্রার্থী আধুনিক জাভা ২১-এর মেমরি মডেল ও ভার্চুয়াল থ্রেডের কার্যকারিতা বোঝে কি না তা পরীক্ষা করতে।',
      howToAnswer_en: 'Traditional platform threads are thin 1:1 wrappers around operating system kernel threads. Each platform thread consumes roughly 1MB of stack memory and incurs expensive kernel context-switching overhead, practically capping a server at 2,000 to 5,000 threads before running out of memory. Java 21 Virtual Threads are lightweight M:N threads managed directly by the Java Virtual Machine (JVM). Thousands of virtual threads are multiplexed onto a tiny pool of carrier OS threads. When a virtual thread executes a blocking I/O operation (such as waiting for a PostgreSQL query or external API HTTP response), the JVM unmounts the virtual thread from its carrier thread and parks its tiny stack in heap memory, allowing the carrier thread to execute other virtual tasks. By simply configuring spring.threads.virtual.enabled=true in Spring Boot 3.4, a standard server can handle 50,000 to 100,000+ concurrent I/O-bound requests using clean, readable synchronous imperative code without complex reactive programming (WebFlux).',
      howToAnswer_bn: 'সনাতন প্ল্যাটফর্ম থ্রেড সরাসরি অপারেটিং সিস্টেমের কার্নেল থ্রেডের সাথে ১:১ যুক্ত থাকে। প্রতিটি ওএস থ্রেড প্রায় ১ মেগাবাইট মেমরি নেয়, ফলে ২-৩ হাজার থ্রেড হলেই সার্ভার মেমরি শেষ হয়ে ক্র্যাশ করে। জাভা ২১ ভার্চুয়াল থ্রেড হলো জেভিএম (JVM) পরিচালিত লাইটওয়েট থ্রেড। এটি অল্প কয়েকটি মূল ক্যারিয়ার থ্রেডের ওপর লক্ষাধিক ভার্চুয়াল থ্রেড পরিচালনা করতে পারে। যখন কোনো ভার্চুয়াল থ্রেড ডেটাবেস বা এপিআইয়ের জন্য অপেক্ষা (ব্লকিং আই/ও) করে, জেভিএম তৎক্ষণাৎ সেটিকে সরিয়ে ক্যারিয়ার থ্রেডকে অন্য কাজে ব্যবহার করে। ফলে স্প্রিং বুট ৩.৪-এ মাত্র এক লাইন কনফিগারেশন দিয়েই কোনো জটিল রিঅ্যাক্টিভ কোড ছাড়াই সাধারণ কোডে লক্ষাধিক রিকোয়েস্ট অনায়াসে হ্যান্ডেল করা যায়।',
      commonMistakes_en: 'Thinking virtual threads speed up CPU-bound cryptographic calculations (they optimize I/O wait times, not raw CPU mathematical execution).',
      commonMistakes_bn: 'মনে করা যে ভার্চুয়াল থ্রেড ভারী সিপিইউ ক্যালকুলেশনের গতি বাড়ায় (এটি মূলত ডেটাবেস ও নেটওয়ার্কের অপেক্ষার সময় মেমরি অপচয় রোধ করে)।'
    },
    {
      id: 'java-q2',
      question_en: 'In Spring Data JPA, how does @Transactional with database isolation levels prevent Dirty Reads and Non-Repeatable Reads in financial ledger transfers?',
      question_bn: 'স্প্রিং ডাটা জেপিএ-তে @Transactional এবং আইসোলেশন লেভেল কীভাবে আর্থিক লেনদেনে ডার্টি রিড ও নন-রিপিটেবল রিড প্রতিরোধ করে?',
      category: 'FinTech Data Integrity',
      whyAsked_en: 'Critical banking exam question to ensure candidate will never cause financial discrepancies or accounting balance corruption.',
      whyAsked_bn: 'ব্যাংকিং সফটওয়্যারে গ্রাহকের টাকার ব্যালেন্সে গরমিল প্রতিরোধ করার বাস্তব দক্ষতা নিশ্চিত করতে।',
      howToAnswer_en: 'Financial ledgers require strict ACID guarantees. A Dirty Read occurs when Transaction A reads uncommitted data written by Transaction B (which may subsequently rollback). A Non-Repeatable Read occurs when Transaction A reads a row, Transaction B commits an update to that row, and Transaction A re-reads the row finding different data. In Spring, annotating @Transactional(isolation = Isolation.READ_COMMITTED) prevents dirty reads by only reading data that has already been permanently committed. For sensitive balance transfers, we use Isolation.REPEATABLE_READ or explicit pessimistic row locking with @Lock(LockModeType.PESSIMISTIC_WRITE). This issues a SELECT ... FOR UPDATE at the database level, ensuring no other concurrent transaction can modify the customer account row until the first transaction finishes, ensuring absolute mathematical ledger balance consistency.',
      howToAnswer_bn: 'ব্যাংকিং অ্যাপ্লিকেশনে ব্যালেন্স সঠিক রাখা সবচেয়ে জরুরি। ডার্টি রিড হলো অন্য একটি অসম্পূর্ণ ট্রানজ্যাকশনের ভুল ব্যালেন্স পড়ে ফেলা যা পরবর্তীতে বাতিল হয়ে যেতে পারে। স্প্রিং-এ @Transactional(isolation = Isolation.READ_COMMITTED) ব্যবহার করলে কেবল ফাইনাল হওয়া ডেটা পড়া যায়। আর ব্যালেন্স ট্রান্সফারের ক্ষেত্রে আমরা পেসিমিস্টিক রো লক (@Lock(LockModeType.PESSIMISTIC_WRITE)) ব্যবহার করি যা ডেটাবেসে SELECT FOR UPDATE চালায়। ফলে প্রথম ব্যক্তির লেনদেন শেষ না হওয়া পর্যন্ত অন্য কোনো রিকোয়েস্ট সেই রো পরিবর্তন করতে পারে না এবং ব্যালেন্সে কখনো এক টাকারও গরমিল হয় না।',
      commonMistakes_en: 'Assuming all @Transactional annotations automatically apply row-level locks without specifying isolation levels or LockModeType.',
      commonMistakes_bn: 'মনে করা যে শুধু @Transactional লিখলেই ডেটাবেসের রো স্বয়ংক্রিয়ভাবে লক হয়ে যায়।'
    },
    {
      id: 'java-q3',
      question_en: 'How do you design an idempotent Kafka consumer in Spring Boot to ensure a financial payment is never processed twice if the network drops?',
      question_bn: 'নেটওয়ার্ক ড্রপ করলেও যাতে একটি পেমেন্ট কখনোই দুবার প্রসেস না হয়, সেজন্য স্প্রিং বুটে একটি আইডেমপোটেন্ট কাফকা কনজিউমার কীভাবে ডিজাইন করবেন?',
      category: 'Distributed Systems & Banking',
      whyAsked_en: 'Tests whether candidate understands at-least-once delivery guarantees and distributed payment processing reliability.',
      whyAsked_bn: 'ডিস্ট্রিবিউটেড সিস্টেমে নেটওয়ার্ক বিভ্রাটে গ্রাহকের অ্যাকাউন্ট থেকে দুবার টাকা কেটে নেওয়ার মারাত্মক বাগ প্রতিরোধ করতে।',
      howToAnswer_en: 'Apache Kafka guarantees at-least-once message delivery by default: if a consumer processes a payment but crashes right before committing its offset, Kafka will re-deliver the exact same message upon consumer restart. To prevent double-crediting customer accounts, the consumer must be strictly idempotent. 1) Every payment event carries a unique cryptographic idempotency_key (or transaction reference ID) generated at payment creation; 2) When the Spring @KafkaListener receives the message, it checks a dedicated processed_transactions table in PostgreSQL within a database transaction; 3) If the idempotency key already exists, the consumer acknowledges the offset and skips execution immediately; 4) If not present, it executes the ledger debit/credit and inserts the key into the processed table atomically in the exact same transaction, guaranteeing exactly-once business outcome.',
      howToAnswer_bn: 'কাফকাতে সাধারণত অ্যাট-লিস্ট-ওয়ান্স ডেলিভারি নীতি থাকে, অর্থাৎ কোনো কারণে কনজিউমার সার্ভার ক্র্যাশ করলে একই পেমেন্ট মেসেজ পুনরায় আসতে পারে। কাস্টমারের অ্যাকাউন্ট থেকে দুবার টাকা কাটা ঠেকাতে আইডেমপোটেন্সি ব্যবহার করা হয়। প্রতিটি পেমেন্টের একটি ইউনিক আইডি থাকে। স্প্রিং কাফকা লিসেনার মেসেজ পাওয়ার পর প্রথমে ডেটাবেসে চেক করে এই ইউনিক আইডি দিয়ে কাজ সম্পন্ন হয়েছে কি না। আইডি ইতিমধ্যে থাকলে এটি কোনো কাজ না করে এড়িয়ে যায়। আর না থাকলে একই ট্রানজ্যাকশনের ভেতর টাকা আপডেট করে এবং আইডিটি সেভ করে নেয়। ফলে একই রিকোয়েস্ট দশবার আসলেও কাজ কেবল একবারই সম্পন্ন হয়।',
      commonMistakes_en: 'Relying solely on Kafka offset management without database-level idempotency key deduplication.',
      commonMistakes_bn: 'মনে করা যে শুধু কাফকার অফসেট কমিট করলেই ডুপ্লিকেট পেমেন্ট ১০০% আটকানো সম্ভব।'
    },
    {
      id: 'java-q4',
      question_en: 'How does Spring Security 6 configure stateless OAuth2 Resource Servers with JWT validation, and why was WebSecurityConfigurerAdapter deprecated?',
      question_bn: 'স্প্রিং সিকিউরিটি ৬ কীভাবে স্টেটলেস ও-অথ২ ও জেডব্লিউটি ভ্যালিডেশন কনফিগার করে এবং পুরানো WebSecurityConfigurerAdapter কেন বাতিল করা হয়েছে?',
      category: 'Enterprise Security Architecture',
      whyAsked_en: 'Identifies candidates who build on modern Spring Security 6 architecture vs those copying deprecated decade-old StackOverflow snippets.',
      whyAsked_bn: 'প্রার্থী আধুনিক স্প্রিং সিকিউরিটি ৬-এর কম্পোনেন্ট-বেসড কনফিগারেশন জানে কি না তা যাচাই করতে।',
      howToAnswer_en: 'In Spring Security 5.7+ and 6+, WebSecurityConfigurerAdapter was completely deprecated in favor of component-based SecurityFilterChain bean configuration. This improves modularity, testability, and avoids extending heavyweight inheritance classes. For a stateless REST / FinTech API, we register a @Bean SecurityFilterChain where we disable session management (SessionCreationPolicy.STATELESS), disable CSRF (since stateless APIs using Bearer headers are immune to browser cross-site request forgery), configure public authorization endpoints (.requestMatchers("/api/auth/**").permitAll()), and secure remaining routes with .anyRequest().authenticated(). For OAuth2, we configure http.oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults())), which automatically parses incoming Bearer tokens and validates cryptographic RSA signatures and expiration against the authorization server JWKS endpoint.',
      howToAnswer_bn: 'স্প্রিং সিকিউরিটি ৬-এ পুরনো WebSecurityConfigurerAdapter বাদ দিয়ে আধুনিক SecurityFilterChain বিন ব্যবহার বাধ্যতামূলক করা হয়েছে। স্টেটলেস এপিআইতে আমরা সেশন বন্ধ করে দিই (STATELESS) এবং সিএসআরএফ (CSRF) বন্ধ রাখা হয় কারণ টোকেন নির্ভর এপিআইতে কুকি থাকে না। এর মাধ্যমে লগইন রুট বাদে অন্য সব রুট নিরাপদ করা হয়। আর ও-অথ২ এর ক্ষেত্রে oauth2ResourceServer কনফিগারেশনের মাধ্যমে আগত জেডব্লিউটি টোকেনের ডিজিটাল সিগনেচার ও মেয়াদ স্বয়ংক্রিয়ভাবে যাচাই করা হয়, যা ব্যাংকিং সফটওয়্যারে সর্বোচ্চ পর্যায়ের নিরাপত্তা দেয়।',
      commonMistakes_en: 'Using deprecated WebSecurityConfigurerAdapter code in late 2026 technical submissions or viva.',
      commonMistakes_bn: '২০২৬ সালের ভাইভায় স্প্রিং সিকিউরিটির বাতিল হওয়া পুরনো ক্লাসের কোড লেখা।'
    }
  ],
  freeCerts: [
    {
      id: 'oracle-java-foundations',
      title_en: 'Oracle University: Java Explorer Learning Path',
      title_bn: 'ওরাকল ইউনিভার্সিটি: জাভা এক্সপ্লোরার অফিশিয়াল পাথ',
      provider: 'Oracle University',
      url: 'https://mylearn.oracle.com',
      mobileAccessible: true,
      language: 'en',
      durationHours: 30,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official interactive training from Oracle covering core Java syntax, object-oriented concepts, and memory structures.',
      relevance_bn: 'স্বয়ং ওরাকলের নিজস্ব অফিশিয়াল উন্মুক্ত জাভা লার্নিং পাথ।'
    },
    {
      id: 'spring-academy-boot-core',
      title_en: 'Spring Academy: Building a REST API with Spring Boot (Official Free Tier)',
      title_bn: 'স্প্রিং একাডেমি: বিল্ডিং রেস্ট এপিআই উইথ স্প্রিং বুট',
      provider: 'VMware Tanzu / Spring Academy',
      url: 'https://spring.academy/courses',
      mobileAccessible: true,
      language: 'en',
      durationHours: 20,
      cost: '100% Free Tier',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'The definitive official learning path directly from the creators of Spring Boot covering controllers, JPA, and dependency injection.',
      relevance_bn: 'স্প্রিং বুটের অফিশিয়াল ক্রিয়েটরদের নিজস্ব ট্রেনিং প্ল্যাটফর্মের ফ্রি কোর্স।'
    },
    {
      id: 'amigoscode-java-spring',
      title_en: 'Software Engineering with Java & Spring Boot (Open Curriculum)',
      title_bn: 'সফটওয়্যার ইঞ্জিনিয়ারিং উইথ জাভা ও স্প্রিং বুট',
      provider: 'Amigoscode / Open YouTube Platform',
      url: 'https://amigoscode.com',
      mobileAccessible: true,
      language: 'en',
      durationHours: 25,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Renowned industry curriculum teaching production Spring Boot architecture, Docker packaging, and PostgreSQL connections.',
      relevance_bn: 'আন্তর্জাতিকভাবে সমাদৃত প্র্যাকটিক্যাল স্প্রিং বুট ও ডেটাবেস প্রজেক্ট টিউটোরিয়াল।'
    }
  ]
};
