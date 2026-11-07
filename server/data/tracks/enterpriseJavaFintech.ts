import type { CareerTrack } from '../../../shared/types.js';

export const enterpriseJavaFintechTrack: Omit<CareerTrack, 'id'> = {
  slug: 'enterprise-java-fintech',
  title_en: 'Enterprise Java, FinTech and Core Banking Systems',
  title_bn: 'এন্টারপ্রাইজ জাভা, ফিনটেক ও কোর ব্যাংকিং সফটওয়্যার',
  summary_en: 'High-reliability enterprise backend development with Java 21, Spring Boot, Spring Security, Hibernate/JPA, PostgreSQL, and financial payment gateway integrations (bKash, Nagad, Visa, Mastercard).',
  summary_bn: 'জাভা ২১, স্প্রিং বুট (Spring Boot), স্প্রিং সিকিউরিটি ও পোস্টগ্রেস দিয়ে দেশের ব্যাংক ও ফিনটেক প্রতিষ্ঠানের জন্য উচ্চ নিরাপত্তার লেনদেন সফটওয়্যার তৈরির নির্ভরযোগ্য ক্যারিয়ার ট্র্যাক।',
  pivotAdvice_en: 'Enterprise Java powers 90% of core banking, telecom, and national payment networks in Bangladesh. While modern frontend frameworks change rapidly, Java skills remain stable, prestigious, and highly compensated for decades.',
  pivotAdvice_bn: 'বাংলাদেশের প্রায় সকল ব্যাংক, টেলিকম ও বড় কর্পোরেট হাউজের মূল সফটওয়্যার জাভাতে তৈরি। অন্যান্য ট্রেন্ডি ফ্রেমওয়ার্ক দ্রুত পরিবর্তন হলেও জাভা ও স্প্রিং বুটের চাকরি অত্যন্ত নিরাপদ, দীর্ঘমেয়াদী এবং আকর্ষণীয় স্কেলের হয়ে থাকে।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Developing transactional microservices using Spring Boot, REST APIs, and JSON/XML payloads.',
    'Implementing strict token authentication, role-based authorization, and encryption with Spring Security.',
    'Writing relational database queries, Hibernate entity mappings, and database migration scripts in Flyway.',
    'Integrating financial payment gateways (bKash Checkout, Nagad, SSLCommerz, Card APIs).',
    'Writing automated JUnit 5 and Mockito unit test suites to prevent calculation bugs in accounting ledgers.'
  ],
  dayToDay_bn: [
    'স্প্রিং বুট দিয়ে নিরাপদ মাইক্রোসার্ভিস ও এপিআই তৈরি করা যা হাজার হাজার লেনদেন একসাথে প্রসেস করতে পারে।',
    'স্প্রিং সিকিউরিটি ও জেডব্লিউটি (JWT) দিয়ে গ্রাহকের অ্যাকাউন্ট ও ব্যাংকিং ডেটা সুরক্ষিত রাখা।',
    'হাইবারনেট ও পোস্টগ্রেস দিয়ে ব্যাংকিং অ্যাকাউন্টের ব্যালেন্স ও লেজার ডেটাবেস স্কিমা ডিজাইন করা।',
    'বিকাশ, নগদ, এসএসএলকমার্জ ও ভিসা/মাস্টারকার্ডের পেমেন্ট গেটওয়ে এপিআই ইন্টিগ্রেট করা।',
    'টাকা লেনদেনের ক্যালকুলেশনে যেন এক পয়সারও ভুল না হয় সেজন্য জুনিট (JUnit) দিয়ে স্বয়ংক্রিয় টেস্ট লেখা।'
  ],
  mustHaveSkills: [
    {
      id: 'java-core-oop',
      name: 'Java 21 Core OOP and Collections Framework',
      category: 'Core Language',
      importance: 'Essential',
      description_en: 'Memory management, multi-threading basics, Collections (List, Map, Set), Generics, and Streams API.',
      description_bn: 'জাভার অবজেক্ট ওরিয়েন্টেড কনসেপ্ট, কালেকশনস ফ্রেমওয়ার্ক ও স্ট্রিম এপিআইয়ের গভীর জ্ঞান।'
    },
    {
      id: 'spring-boot-framework',
      name: 'Spring Boot, Spring MVC and REST APIs',
      category: 'Backend Framework',
      importance: 'Essential',
      description_en: 'Dependency Injection, Inversion of Control, Spring annotations (@RestController, @Service), and error handling.',
      description_bn: 'ডিপেন্ডেন্সি ইনজেকশন, রেস্ট কন্ট্রোলার তৈরি এবং সেন্ট্রালাইজড গ্লোবাল এক্সেপশন হ্যান্ডলিং।'
    },
    {
      id: 'spring-data-jpa-hibernate',
      name: 'Spring Data JPA, Hibernate and PostgreSQL',
      category: 'Databases & ORM',
      importance: 'Essential',
      description_en: 'Entity relationships (@OneToMany, @ManyToOne), ACID transactions (@Transactional), and repository methods.',
      description_bn: 'হাইবারনেট দিয়ে রিলেশনাল ডেটাবেস ম্যাপিং ও নিরাপদ ব্যাংকিং ডেটাবেস ট্রানজ্যাকশন।'
    },
    {
      id: 'payment-gateway-integration',
      name: 'FinTech Payment Integration (bKash / Nagad / SSL)',
      category: 'FinTech Integrations',
      importance: 'Recommended',
      description_en: 'Merchant credentials, webhook listener verification, callback signature hashing, and refund APIs.',
      description_bn: 'বিকাশ ও নগদের মার্চেন্ট এপিআই দিয়ে পেমেন্ট গ্রহণ, ওটিপি ভেরিফিকেশন ও ওয়েবহুক ট্রানজ্যাকশন নিশ্চিতকরণ।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Motijheel Commercial Area, Karwan Bazar, Gulshan, Mohakhali)',
      entrySalary: { min: 25000, max: 45000, currency: 'BDT', formatted: '25,000 - 45,000 BDT' },
      midSalary: { min: 65000, max: 130000, currency: 'BDT', formatted: '65,000 - 130,000 BDT' },
      seniorSalary: { min: 150000, max: 300000, currency: 'BDT', formatted: '150,000 - 300,000 BDT' },
      hiringSectors: [
        'Commercial Banks (City Bank, Dutch-Bangla Bank, BRAC Bank, Eastern Bank IT)',
        'Mobile Financial Services (bKash, Nagad, Upay core engineering teams)',
        'Top Software Exporters (Brain Station 23, LeadSoft, Kona Software, Walton IT)'
      ],
      cvExpectations: [
        'Solid mastery of Java OOP fundamentals, Collections, and Exception handling',
        'Demonstrated working project in Spring Boot with PostgreSQL and JWT authentication',
        'Understanding of financial transaction ACID guarantees and ledger integrity',
        'Knowledge of build tools like Maven or Gradle and Git version control'
      ],
      localDemandSummary_en: 'Motijheel and Gulshan banking headquarters recruit Java developers continuously. Diploma engineers with strong Java fundamentals frequently transition into permanent officer and senior software roles.',
      localDemandSummary_bn: 'মতিঝিল ও গুলশানের বাণিজ্যিক ব্যাংকগুলো প্রতি বছর জাভা ডেভেলপার নিয়োগ দেয়। পলিটেকনিক শিক্ষার্থীদের জন্য ব্যাংকের আইটি অফিসার পদে প্রবেশের সবচেয়ে শক্ত সিঁড়ি হলো স্প্রিং বুট।'
    },
    targetCountries: [
      {
        region: 'North America and Europe',
        countryName_en: 'Germany, United Kingdom, and Canada',
        countryName_bn: 'জার্মানি, যুক্তরাজ্য ও কানাডা',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ',
        visaReality_en: 'Enterprise Java is the highest-volume work-permit sponsorship skill in Europe. Financial institutions in Frankfurt and London sponsor international talent.',
        visaReality_bn: 'ইউরোপের ব্যাংকিং খাতগুলোতে এন্টারপ্রাইজ জাভা ডেভেলপারদের সবচেয়ে বেশি কাজের ভিসা ও স্পনসরশিপ দেওয়া হয়।',
        averageSalaryUsdOrLocal: '55,000 - 90,000 EUR / year (approx 6,500,000 - 11,000,000 BDT)',
        requiredExperienceYears: '3+ years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$1,200 - $4,500 / month',
      competitionLevel: 'Corporate offshore contracts, won through architectural clarity and testing discipline',
      competitionLevel_bn: 'নিখুঁত কোড কোয়ালিটি ও জুনিট টেস্টের প্রমাণ দিয়ে দূরবর্তী এন্টারপ্রাইজ প্রজেক্টে যুক্ত হওয়া যায়',
      englishRequirement: 'Professional English to participate in daily standups and sprint planning with European leads',
      englishRequirement_bn: 'আন্তর্জাতিক টিমের সাথে স্প্রিন্ট প্ল্যানিং ও টেকনিক্যাল সিদ্ধান্ত ইংরেজিতে নেওয়ার দক্ষতা',
      realities_en: [
        'Banks care 100 times more about zero data loss and security than about fancy animations',
        'Once you master Java and Spring Boot, learning any other backend framework takes just a few days'
      ],
      realities_bn: [
        'ব্যাংকগুলোর কাছে দৃষ্টিনন্দন ডিজাইনের চেয়ে এক পয়সা ডেটা লস না হওয়া ও নিরাপত্তা শতগুণ বেশি গুরুত্বপূর্ণ',
        'জাভা ও স্প্রিং বুট একবার ভালো করে আয়ত্ত করলে পৃথিবীর অন্য যেকোনো ব্যাকএন্ড ফ্রেমওয়ার্ক শেখা একদম সহজ হয়ে যায়'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Java 21 Core OOP and Memory Architecture',
      phaseTitle_bn: 'প্রথম পর্ব: জাভা ২১ অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং ও মেমোরি',
      phaseSubtitle_en: 'Day 1 to 25: Classes, polymorphism, interfaces, exceptions, and the Collections framework.',
      phaseSubtitle_bn: '১ থেকে ২৫ দিন: ক্লাস, ইন্টারফেস, এক্সেপশন হ্যান্ডলিং ও কালেকশনস ফ্রেমওয়ার্ক (ArrayList, HashMap)।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-java-oop-collections',
          title_en: 'Core Java OOP and Collections API',
          title_bn: 'কোর জাভা অবজেক্ট ওরিয়েন্টেড কোডিং',
          description_en: 'Encapsulation, inheritance, abstract classes, ArrayList vs LinkedList, HashMap key lookups, and Streams API.',
          description_bn: 'মেমোরি রেফারেন্স, ইন্টারফেস, হ্যাশম্যাপ দিয়ে দ্রুত ডেটা রিট্রিভাল এবং ল্যাম্বডা স্ট্রিম।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Encapsulation & Polymorphism', 'Java Collections (List, Set, Map)', 'Custom Checked vs Unchecked Exceptions'],
          practicalTask_en: 'Build a console-based bank account simulation with deposit, withdrawal, interest calculation, and ledger history.',
          practicalTask_bn: 'জাভা দিয়ে একটি সম্পূর্ণ কনসোল ব্যাংকিং সিস্টেম বানাও যা লেনদেন হিস্ট্রি ও ব্যালেন্স নিখুঁতভাবে হিসাব করবে।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: Spring Boot REST APIs and Maven Architecture',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: স্প্রিং বুট রেস্ট এপিআই ও মাভেন আর্কিটেকচার',
      phaseSubtitle_en: 'Day 26 to 50: Maven build scripts, Spring controllers, service layers, and validation.',
      phaseSubtitle_bn: '২৬ থেকে ৫০ দিন: মাভেন প্যাকেজ ম্যানেজমেন্ট, স্প্রিং বুট কন্ট্রোলার ও সার্ভিস লেয়ার ডিজাইন।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-spring-boot-rest',
          title_en: 'Spring Boot REST Controller and Validation',
          title_bn: 'স্প্রিং বুট রেস্ট সার্ভিস ও রিকোয়েস্ট ভ্যালিডেশন',
          description_en: '@RestController, @RequestMapping, @Autowired dependency injection, DTO mapping, and @Valid annotations.',
          description_bn: 'স্প্রিং অ্যানোটেশন, ডিপেন্ডেন্সি ইনজেকশন ও জাকার্তা ভ্যালিডেশন দিয়ে নিশ্ছিদ্র এপিআই তৈরি।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Inversion of Control (IoC)', '@Service and @Repository layering', 'GlobalExceptionHandler with @ControllerAdvice'],
          practicalTask_en: 'Create a Spring Boot customer management REST API with complete CRUD operations and input field validation.',
          practicalTask_bn: 'স্প্রিং বুট দিয়ে একটি ব্যাংক গ্রাহক ম্যানেজমেন্ট এপিআই তৈরি করো যা ভুল ইনপুট আসলে উপযুক্ত এরর কোড দেবে।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: Spring Data JPA, PostgreSQL and Transactions',
      phaseTitle_bn: 'তৃতীয় পর্ব: স্প্রিং ডেটা জেপিএ, পোস্টগ্রেস ও নিরাপদ ট্রানজ্যাকশন',
      phaseSubtitle_en: 'Day 51 to 75: Relational entities, ACID transactions, database indexing, and Spring Security.',
      phaseSubtitle_bn: '৫১ থেকে ৭৫ দিন: হাইবারনেট দিয়ে পোস্টগ্রেস কানেকশন, ব্যাংকিং ট্রানজ্যাকশন ও স্প্রিং সিকিউরিটি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-jpa-postgresql-security',
          title_en: 'Hibernate Relational Mapping and Spring Security JWT',
          title_bn: 'হাইবারনেট ও স্প্রিং সিকিউরিটি জেডব্লিউটি',
          description_en: '@Entity relationships, @Transactional rollback on error, password hashing with BCrypt, and JWT filter chains.',
          description_bn: 'লেনদেনে এরর আসলে পুরো ট্রানজ্যাকশন রোলব্যাক করা এবং পাসওয়ার্ড হ্যাশ করে নিরাপদ টোকেন তৈরি।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['@Transactional ACID safety', 'Spring Data JpaRepository queries', 'Spring Security 6 SecurityFilterChain'],
          practicalTask_en: 'Build a secure fund transfer API between two bank accounts that automatically rolls back if balance is insufficient.',
          practicalTask_bn: 'একটি নিরাপদ ব্যাংক ট্রান্সফার এপিআই তৈরি করো যা পর্যাপ্ত ব্যালেন্স না থাকলে স্বয়ংক্রিয়ভাবে লেনদেন বাতিল করে ডেটাবেস রক্ষা করবে।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: FinTech Integration, Unit Testing and Banking Portfolio',
      phaseTitle_bn: 'চতুর্থ পর্ব: ফিনটেক পেমেন্ট ইন্টিগ্রেশন, জুনিট টেস্টিং ও জব ইন্টারভিউ',
      phaseSubtitle_en: 'Day 76 to 90: bKash/Nagad mock integration, Mockito unit tests, and Docker container packaging.',
      phaseSubtitle_bn: '৭৬ থেকে ৯০ দিন: বিকাশ/নগদ পেমেন্ট এপিআই কল, জুনিট টেস্ট ও ডকার দিয়ে সার্ভার ডিপ্লয়।',
      durationWeeks: 2,
      modules: [
        {
          id: 'mod-fintech-junit-docker',
          title_en: 'FinTech Checkout Flow, JUnit 5 Testing and Dockerization',
          title_bn: 'পেমেন্ট গেটওয়ে ইন্টিগ্রেশন ও টেস্ট অটোমেশন',
          description_en: 'Calling external payment APIs with RestClient, writing Mockito mocks for banking tests, and creating lightweight Docker images.',
          description_bn: 'রেস্টক্লায়েন্ট দিয়ে পেমেন্ট গেটওয়ে কল করা, মকিটো দিয়ে টেস্ট চালানো ও ডকারে এন্টারপ্রাইজ জার ফাইল প্যাকেজ করা।',
          estimatedDays: 10,
          mobileAccessible: false,
          keyTopics: ['RestClient and WebClient', 'JUnit 5 and Mockito mock tests', 'Multi-stage Docker build for Spring Boot'],
          practicalTask_en: 'Develop an e-wallet system with user registration, wallet deposit simulation via payment webhook, and 90%+ JUnit test coverage.',
          practicalTask_bn: 'একটি পূর্ণাঙ্গ ই-ওয়ালেট প্রজেক্ট তৈরি করো যেখানে পেমেন্ট ওয়েবহুক ও ৯০% টেস্ট কভারেজ থাকবে।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'java-q1',
      question_en: 'What does the @Transactional annotation do in Spring Boot? What happens if an unchecked exception occurs during execution?',
      question_bn: 'স্প্রিং বুটে @Transactional অ্যানোটেশনের কাজ কী? কোড এক্সিকিউশনের সময় আনচেকড এক্সেপশন (যেমন RuntimeException) ঘটলে কী ঘটে?',
      category: 'Enterprise Java Architecture',
      whyAsked_en: 'Standard technical question in banking software interviews in Dhaka to test data integrity knowledge.',
      whyAsked_bn: 'ব্যাংকিং সফটওয়্যার ইন্টারভিউয়ের প্রধান প্রশ্ন যা প্রার্থীর আর্থিক ডেটার নিরাপত্তা ও ট্রানজ্যাকশন বোঝার গভীরতা যাচাই করে।',
      howToAnswer_en: 'The @Transactional annotation in Spring manages database transactions according to ACID properties. When applied to a method, Spring starts a transaction before method execution and commits it once the method finishes successfully. If an unchecked exception (such as RuntimeException or Error) is thrown during execution, Spring automatically triggers a complete rollback, reverting all database modifications made inside that method to their original state. This is critical in banking: for example, if Account A is debited 1,000 BDT but the credit to Account B throws an exception, the debit is rolled back immediately, ensuring no money is lost.',
      howToAnswer_bn: '@Transactional অ্যানোটেশন স্প্রিং ফ্রেমওয়ার্কে ডেটাবেসের প্রতিটি অ্যাকশনকে একটি অবিভাজ্য ট্রানজ্যাকশন হিসেবে পরিচালনা করে। মেথডের ভেতরে কোনো আনচেকড এক্সেপশন (যেমন RuntimeException বা ব্যালেন্স সংক্রান্ত এরর) দেখা দিলে স্প্রিং স্বয়ংক্রিয়ভাবে পুরো ট্রানজ্যাকশনকে রোলব্যাক (Rollback) করে পূর্বাবস্থায় ফিরিয়ে নেয়। ব্যাংকিং লেনদেনের জন্য এটি অপরিহার্য: যেমন একজনের অ্যাকাউন্ট থেকে ১,০০০ টাকা মাইনাস হওয়ার পর যদি অন্যজনের অ্যাকাউন্টে টাকা যোগ হওয়ার সময় সার্ভার ক্র্যাশ করে, তবে আগের টাকা কাটার কোডটিও বাতিল হয়ে ব্যালেন্স সুরক্ষিত থাকবে।',
      commonMistakes_en: 'Believing that Spring rolls back on checked exceptions by default without specifying rollbackFor.',
      commonMistakes_bn: 'মনে করা যে কোনো কনফিগারেশন ছাড়াই চেকড এক্সেপশনেও (Checked Exception) স্প্রিং ডিফল্টভাবে রোলব্যাক করে।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-oracle-java-foundations',
      title_en: 'Oracle Java Explorer and Foundations Credential',
      title_bn: 'ওরাকল জাভা ফাউন্ডেশনস অফিশিয়াল ফ্রি কোর্স ও ব্যাজ',
      provider: 'Oracle University',
      url: 'https://mylearn.oracle.com/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 25,
      cost: '100% Free',
      relevance_en: 'Official learning path directly from Oracle, the creator and maintainer of Java.',
      relevance_bn: 'জাভার মূল উদ্ভাবক ওরাকলের নিজস্ব অফিসিয়াল ট্রেনিং ও ডিজিটাল ব্যাজ।'
    }
  ]
};
