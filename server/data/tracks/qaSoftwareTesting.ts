import type { CareerTrack } from '../../../shared/types.js';

export const qaSoftwareTestingTrack: Omit<CareerTrack, 'id'> = {
  slug: 'qa-software-testing',
  title_en: 'Software QA, Test Automation & SDET Engineering (2026 Edition)',
  title_bn: 'সফটওয়্যার কিউএ, টেস্ট অটোমেশন ও এসডিইটি ইঞ্জিনিয়ারিং (২০২৬ এডিশন)',
  summary_en: 'Calibrated for late 2026. Modern QA has evolved beyond manual clicking. Master Playwright test automation with TypeScript, Postman/Newman API CI/CD testing, k6 high-concurrency load testing, and edge-case auditing for AI features.',
  summary_bn: '২০২৬ সালের আধুনিক কিউএ চাহিদা অনুযায়ী সাজানো। সাধারণ ম্যানুয়াল ক্লিকের দিন শেষ। টাইপস্ক্রিপ্ট ও প্লে-রাইট দিয়ে ব্রাউজার অটোমেশন, পোস্টম্যান নিউম্যান এপিআই টেস্টিং, কে-সিক্স (k6) লোড টেস্টিং এবং সিআই/সিডি অটোমেশন।',
  pivotAdvice_en: 'In 2026, purely manual clicking jobs are being replaced by automated test suites. Software houses in Dhaka and global remote teams hire Software Development Engineers in Test (SDET) who can code automated Playwright tests, run headless API tests in CI/CD, and stress-test high-traffic fintech endpoints with k6.',
  pivotAdvice_bn: '২০২৬ সালে শুধু চোখ দিয়ে দেখে ম্যানুয়াল টেস্ট করার চাকরির সুযোগ সংকুচিত হচ্ছে। ঢাকার বড় সফটওয়্যার ফার্ম ও বিদেশি রিমোট কোম্পানিগুলো এখন এসডিইটি (SDET) বা অটোমেশন ইঞ্জিনিয়ার খোঁজে যারা প্লে-রাইট দিয়ে অটোমেটেড টেস্ট লিখতে পারে এবং k6 দিয়ে সার্ভারের লোড পরীক্ষা করতে পারে।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Writing end-to-end browser automation scripts using Playwright, TypeScript, and the Page Object Model (POM).',
    'Executing automated API regression tests in GitHub Actions using Postman and Newman CLI.',
    'Designing stress and load testing scripts with k6 to verify server behavior under 5,000 concurrent virtual users.',
    'Logging reproducible defect reports in Jira with network logs, screenshots, and automated test reproduction steps.',
    'Verifying security boundaries, edge cases, and non-deterministic behavior in AI-assisted software features.'
  ],
  dayToDay_bn: [
    'প্লে-রাইট (Playwright) ও টাইপস্ক্রিপ্ট দিয়ে ব্রাউজারে স্বয়ংক্রিয় টেস্ট স্ক্রিপ্ট লেখা যা নিজে নিজে পুরো ওয়েবসাইট পরীক্ষা করে।',
    'পোস্টম্যান ও নিউম্যান সিএলআই দিয়ে ব্যাকএন্ড এপিআইয়ের শত শত টেস্ট প্রতি পুশে স্বয়ংক্রিয়ভাবে চালানো।',
    'কে-সিক্স (k6) দিয়ে একসাথে হাজার হাজার ভার্চুয়াল ইউজারের লোড তৈরি করে সার্ভারের ধারণক্ষমতা পরীক্ষা করা।',
    'জিরা বোর্ডে স্ক্রিনশট, এরর লগ ও স্বয়ংক্রিয় টেস্ট সহ মানসম্মত বাগ রিপোর্ট সাবমিট করা।',
    'সফটওয়্যারের এজ-কেস ও এআই ফিচারের কার্যকারিতা যাচাই করে বাগমুক্ত প্রোডাকশন রিলিজ নিশ্চিত করা।'
  ],
  mustHaveSkills: [
    {
      id: 'playwright-typescript-pom',
      name: 'Playwright & TypeScript Test Automation',
      category: 'E2E Automation',
      importance: 'Essential',
      description_en: 'Page Object Model (POM), auto-waiting, parallel test execution, multi-browser testing (Chromium/Firefox/WebKit).',
      description_bn: 'প্লে-রাইট দিয়ে পেজ অবজেক্ট মডেল, প্যারালাল টেস্ট রান এবং একাধিক ব্রাউজারে স্বয়ংক্রিয় টেস্টিং।'
    },
    {
      id: 'postman-newman-cicd',
      name: 'API Testing & Newman CLI Automation',
      category: 'API Quality',
      importance: 'Essential',
      description_en: 'JavaScript test assertions, dynamic environment variables, JSON schema validation, and headless Newman runs.',
      description_bn: 'পোস্টম্যান দিয়ে এপিআই টেস্ট স্ক্রিপ্ট এবং সিআই/সিডিতে নিউম্যান সিএলআই দিয়ে অটোমেশন।'
    },
    {
      id: 'k6-load-performance',
      name: 'k6 High-Concurrency Load Testing',
      category: 'Performance',
      importance: 'Essential',
      description_en: 'Virtual users (VUs), threshold checks, latency percentiles (p95, p99), and identifying server bottlenecks.',
      description_bn: 'কে-সিক্স দিয়ে লোড টেস্টিং, রেসপন্স টাইম পরিমাপ এবং সার্ভারের সীমাবদ্ধতা চিহ্নিতকরণ।'
    },
    {
      id: 'jira-stlc-defect-tracking',
      name: 'Modern STLC & Jira Defect Lifecycle',
      category: 'Quality Governance',
      importance: 'Essential',
      description_en: 'Test case matrices, boundary value analysis, equivalence partitioning, and actionable Jira reports.',
      description_bn: 'টেস্ট কেস ম্যাট্রিক্স তৈরি, বাউন্ডারি ভ্যালু অ্যানালাইসিস এবং জিরার মাধ্যমে বাগ ট্র্যাকিং।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Mohakhali, Banani, Mirpur DOHS, Kawran Bazar) & Hybrid BD',
      entrySalary: { min: 28000, max: 45000, currency: 'BDT', formatted: '28,000 - 45,000 BDT' },
      midSalary: { min: 60000, max: 120000, currency: 'BDT', formatted: '60,000 - 120,000 BDT' },
      seniorSalary: { min: 135000, max: 270000, currency: 'BDT', formatted: '135,000 - 270,000 BDT' },
      hiringSectors: [
        'Fintech Platforms & Mobile Wallets (bKash, Nagad, Upay, SureCash QA divisions)',
        'Offshore Software Exporters in Dhaka (Brain Station 23, Kaz Software, Enosis Solutions, Cefalo)',
        'Telecom Companies and Commercial Bank Digital Banking QA Divisions'
      ],
      cvExpectations: [
        'Working GitHub repository with automated Playwright test scripts covering a real web application',
        'Published Postman collection link with automated status, schema, and latency assertions',
        'Demonstrated understanding of boundary value analysis, regression suites, and load test metrics',
        'Diploma in CST with clear technical defect communication during viva'
      ],
      localDemandSummary_en: 'Financial and enterprise platforms cannot afford bugs in production. CST diploma holders who bridge testing theory with real Playwright and Postman automation code stand head-and-shoulders above manual testers, winning rapid placement.',
      localDemandSummary_bn: 'আর্থিক প্রতিষ্ঠান ও বড় সফটওয়্যার কোম্পানিতে একটি ছোট বাগে কোটি টাকার ক্ষতি হতে পারে। তাই যারা শুধু ম্যানুয়াল না করে প্লে-রাইট ও পোস্টম্যান দিয়ে কোডিং অটোমেশন করতে পারে, সফটওয়্যার কোম্পানিগুলো তাদের ফ্রেশার হিসেবেও দ্রুত নিয়োগ দেয়।'
    },
    targetCountries: [
      {
        region: 'Europe',
        countryName_en: 'Germany, Poland & Sweden',
        countryName_bn: 'জার্মানি, পোল্যান্ড ও সুইডেন',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'SDET and Test Automation Engineers with Playwright and CI/CD skills are actively sponsored under European skilled work permits.',
        visaReality_bn: 'প্লে-রাইট ও সিআই/সিডি অটোমেশন জানা এসডিইটি ইঞ্জিনিয়ারদের জন্য ইউরোপে কাজের চমৎকার সুযোগ রয়েছে।',
        averageSalaryUsdOrLocal: '48,000 - 75,000 EUR / year (approx 6,200,000 - 9,800,000 BDT)',
        requiredExperienceYears: '2 to 4 years'
      },
      {
        region: 'Southeast Asia',
        countryName_en: 'Singapore & Malaysia',
        countryName_bn: 'সিঙ্গাপুর ও মালয়েশিয়া',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Fintech and e-commerce companies sponsor test engineers who can write automated regression suites.',
        visaReality_bn: 'দক্ষ টেস্ট অটোমেশন ইঞ্জিনিয়ারদের জন্য সিঙ্গাপুর ও মালয়েশিয়ার টেক ফার্মে স্পনসরশিপ পাওয়া যায়।',
        averageSalaryUsdOrLocal: '$2,200 - $4,200 USD / month',
        requiredExperienceYears: '2 to 3 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$1,000 - $3,800 USD',
      competitionLevel: 'Moderate',
      competitionLevel_bn: 'মাঝারি',
      englishRequirement: 'Professional written English for detailed defect descriptions, test documentation, and sprint standups',
      englishRequirement_bn: 'নিখুঁত ও পরিষ্কার ভাষায় ত্রুটি বা বাগের বিবরণ এবং টেস্ট রিপোর্ট লেখার ইংরেজি দক্ষতা',
      realities_en: [
        'Global remote startups hire offshore QA automation engineers to ensure stable weekly releases.',
        'A public GitHub repository hosting a clean Playwright test suite with CI execution badge on the README is the best possible CV.'
      ],
      realities_bn: [
        'আন্তর্জাতিক স্টার্টআপগুলো তাদের কোড স্থিতিশীল রাখতে দূরবর্তী কিউএ অটোমেশন ইঞ্জিনিয়ার নিয়োগ দেয়।',
        'সিভিতে লাইভ প্লে-রাইট অটোমেশন কোড ও গিটহাব একশন ব্যাজ থাকলে নিয়োগদাতার বিশ্বাসযোগ্যতা তৎক্ষণাৎ অর্জন করা যায়।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Modern STLC, Test Design & Comprehensive Jira Bug Reporting',
      phaseTitle_bn: 'আধুনিক এসটিএলসি, টেস্ট কেস ডিজাইন ও জিরা বাগ রিপোর্টিং',
      phaseSubtitle_en: 'Master black-box test methodologies, equivalence classes, and defect lifecycles.',
      phaseSubtitle_bn: 'টেস্ট কেস লেখার নিয়ম, বাউন্ডারি অ্যানালাইসিস ও প্রফেশনাল বাগ রিপোর্টিং।',
      durationWeeks: 4,
      modules: [
        {
          id: 'qa-p1-m1',
          title_en: 'Software Testing Fundamentals & Black-Box Techniques',
          title_bn: 'সফটওয়্যার টেস্টিং ফান্ডামেন্টালস ও ব্ল্যাক-বক্স টেকনিক্স',
          description_en: 'Learn STLC phases, Equivalence Partitioning (EP), Boundary Value Analysis (BVA), Decision Table testing, and State Transition diagrams.',
          description_bn: 'ইকুইভ্যালেন্স পার্টিশনিং ও বাউন্ডারি ভ্যালু অ্যানালাইসিস ব্যবহার করে নিখুঁত টেস্ট কেস ডিজাইন।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['STLC vs SDLC', 'Equivalence Partitioning (EP)', 'Boundary Value Analysis (BVA)', 'Negative & Edge Case Testing'],
          practicalTask_en: 'Write a comprehensive 20-case test matrix for a banking fund transfer form covering boundary limits, invalid inputs, and security edge cases.',
          practicalTask_bn: 'একটি ব্যাংকিং ফান্ড ট্রান্সফার স্ক্রিনের জন্য ২০টি বাস্তব টেস্ট কেসের ম্যাট্রিক্স তৈরি করো।'
        },
        {
          id: 'qa-p1-m2',
          title_en: 'Jira Defect Lifecycle & Professional Bug Reports',
          title_bn: 'জিরা ডিফেক্ট লাইফসাইকেল ও প্রফেশনাল বাগ রিপোর্ট তৈরি',
          description_en: 'Write reproducible bug tickets with clear reproduction steps, environment details, Chrome DevTools console logs, and priority vs severity rating.',
          description_bn: 'জিরোতে ডেভেলপারদের সহজে বোঝার উপযোগী স্টেপ-বাই-স্টেপ বাগ রিপোর্ট ও নেটওয়ার্ক লগ যুক্ত করার নিয়ম।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['Severity vs Priority Matrix', 'Steps to Reproduce', 'Capturing Network HAR & Logs', 'Bug Lifecycle States'],
          practicalTask_en: 'Find and log 3 real bugs on a public web application in Jira format, complete with expected/actual results, HAR logs, and console traces.',
          practicalTask_bn: 'একটি লাইভ ওয়েবসাইটে ৩টি ত্রুটি খুঁজে বের করে প্রফেশনাল জিরা ফরম্যাটে বিস্তারিত বাগ রিপোর্ট তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Postman API Testing, Newman CLI & Automated Assertions',
      phaseTitle_bn: 'পোস্টম্যান এপিআই টেস্টিং, নিউম্যান সিএলআই ও অটোমেটেড অ্যাসারশন',
      phaseSubtitle_en: 'Test REST endpoints, validate JSON schemas, and automate test runs.',
      phaseSubtitle_bn: 'রেস্ট এপিআই পরীক্ষা, জেএসএন স্কিমা ভ্যালিডেশন ও হেডলেস অটোমেশন।',
      durationWeeks: 4,
      modules: [
        {
          id: 'qa-p2-m1',
          title_en: 'Postman Assertions, Dynamic Variables & Auth Tokens',
          title_bn: 'পোস্টম্যান অ্যাসারশন, ডাইনামিক ভ্যারিয়েবল ও অথেনটিকেশন টেস্ট',
          description_en: 'Write JavaScript tests in Postman pm.test(), assert status codes (200/201/400/401), validate response time < 200ms, and chain login bearer tokens automatically.',
          description_bn: 'পোস্টম্যানে জাভাস্ক্রিপ্ট কোড লিখে এপিআই রেসপন্স কোড ও স্পিড স্বয়ংক্রিয়ভাবে যাচাই করা।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['pm.test & pm.expect', 'Chaining Tokens between Requests', 'JSON Schema Validation (Ajv)', 'Status Code Assertions'],
          practicalTask_en: 'Build a Postman collection that logs in, saves bearer token to environment, creates a product, and asserts 201 Created and schema validity.',
          practicalTask_bn: 'একটি পোস্টম্যান কালেকশন তৈরি করো যা লগইন করে টোকেন দিয়ে স্বয়ংক্রিয়ভাবে নতুন ডাটা তৈরি ও ভ্যালিডেট করে।'
        },
        {
          id: 'qa-p2-m2',
          title_en: 'Headless Newman CLI & Automated Test Reports',
          title_bn: 'হেডলেস নিউম্যান সিএলআই ও অটোমেটেড টেস্ট রিপোর্ট তৈরি',
          description_en: 'Run Postman collections from the command line using Newman, generate clean HTML test summary reports, and catch regressions headless.',
          description_bn: 'টার্মিনাল থেকে নিউম্যান সিএলআই দিয়ে সমস্ত এপিআই টেস্ট এক ক্লিকে রান করা এবং এইচটিএমএল রিপোর্ট তৈরি।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Newman CLI execution', 'newman-reporter-htmlextra', 'Data-driven testing via CSV', 'Exit Codes on test failure'],
          practicalTask_en: 'Export your Postman test collection, run it with Newman via CLI, and generate a beautiful interactive HTML extra test report.',
          practicalTask_bn: 'নিউম্যান সিএলআই দিয়ে তোমার এপিআই টেস্ট রান করে একটি দৃষ্টিনন্দন এইচটিএমএল রিপোর্ট জেনারেট করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Playwright Automation with TypeScript & Page Object Model',
      phaseTitle_bn: 'প্লে-রাইট ও টাইপস্ক্রিপ্ট দিয়ে পেজ অবজেক্ট মডেল টেস্ট অটোমেশন',
      phaseSubtitle_en: 'Build resilient browser test suites with locator best practices.',
      phaseSubtitle_bn: 'টাইপস্ক্রিপ্ট দিয়ে রোবাস্ট ব্রাউজার টেস্ট অটোমেশন ও পেজ অবজেক্ট মডেল।',
      durationWeeks: 5,
      modules: [
        {
          id: 'qa-p3-m1',
          title_en: 'Playwright Setup, Locators & Auto-Waiting Mechanism',
          title_bn: 'প্লে-রাইট সেটআপ, লোকেটরস ও অটো-ওয়েটিং মেকানিজম',
          description_en: 'Set up Playwright with TypeScript. Master robust user-facing locators (getByRole, getByText, getByLabel), auto-waiting, and assertions.',
          description_bn: 'প্লে-রাইট সেটআপ করা, আধুনিক ইউজার-ফেসিং লোকেটর ব্যবহার এবং ফ্ল্যাকি টেস্ট এড়াতে অটো-ওয়েটিং মেকানিজম।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Playwright Test Runner', 'getByRole & Accessibility Locators', 'expect(page).toBeVisible()', 'Auto-waiting vs hardcoded sleep'],
          practicalTask_en: 'Write a Playwright test script in TypeScript that navigates to an e-commerce website, searches for a product, and adds it to the cart.',
          practicalTask_bn: 'প্লে-রাইট দিয়ে একটি স্বয়ংক্রিয় স্ক্রিপ্ট লেখো যা ই-কমার্স সাইটে ঢুকে প্রডাক্ট সার্চ করে কার্টে যোগ করে।'
        },
        {
          id: 'qa-p3-m2',
          title_en: 'Page Object Model (POM) Architecture & Fixtures',
          title_bn: 'পেজ অবজেক্ট মডেল (POM) আর্কিটেকচার ও টেস্ট ফিক্সচার্স',
          description_en: 'Refactor tests into maintainable Page Object classes. Separate selectors and UI actions from assertions to guarantee long-term test maintainability.',
          description_bn: 'পেজ অবজেক্ট মডেল দিয়ে কোড গুছিয়ে রাখা যাতে ওয়েবসাইট পরিবর্তন হলেও টেস্ট স্ক্রিপ্ট সহজে আপডেট করা যায়।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Page Object Model Design', 'Playwright Custom Fixtures', 'Visual Regression (toHaveScreenshot)', 'Trace Viewer Debugging'],
          practicalTask_en: 'Refactor an end-to-end checkout test suite into LoginPage and CheckoutPage classes conforming to strict POM architecture.',
          practicalTask_bn: 'তোমার টেস্ট স্ক্রিপ্টগুলোকে প্রফেশনাল পেজ অবজেক্ট মডেল প্যাটার্নে রূপান্তর করে গিটহাবে পুশ করো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'k6 Performance Testing, CI/CD Integration & SDET Viva',
      phaseTitle_bn: 'কে-সিক্স লোড টেস্টিং, সিআই/সিডি অটোমেশন ও এসডিইটি চাকরি ভাইভা',
      phaseSubtitle_en: 'Stress-test servers, automate testing in GitHub Actions, and pass interviews.',
      phaseSubtitle_bn: 'সার্ভারের লোড পরীক্ষা, সিআই/সিডি পাইপলাইনে অটোমেশন ও চাকরি ভাইভা প্রস্তুতি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'qa-p4-m1',
          title_en: 'High-Concurrency Load Testing with k6',
          title_bn: 'কে-সিক্স (k6) দিয়ে হাই-কনকারেন্সি লোড টেস্টিং',
          description_en: 'Write load test scripts in JavaScript with k6. Simulate ramp-up to 1,000 Virtual Users, measure p95 latency, and enforce failure thresholds.',
          description_bn: 'কে-সিক্স দিয়ে ১০০০ ভার্চুয়াল ইউজারের চাপ তৈরি করে সার্ভার কত দ্রুত উত্তর দেয় তা মেপে দেখা।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['k6 Virtual Users & Stages', 'Thresholds (http_req_duration)', 'p95 and p99 percentiles', 'Analyzing bottlenecks'],
          practicalTask_en: 'Write a k6 script that ramps up to 500 virtual users over 2 minutes, verifying that 95% of API responses complete under 250ms.',
          practicalTask_bn: 'একটি k6 স্ক্রিপ্ট লেখো যা ৫০০ ইউজারের চাপে সার্ভারের রেসপন্স টাইম ২৫০ মিলি-সেকেন্ডের নিচে থাকে কি না তা যাচাই করে।'
        },
        {
          id: 'qa-p4-m2',
          title_en: 'CI/CD Pipeline Integration & QA Automation Viva',
          title_bn: 'সিআই/সিডি পাইপলাইনে অটোমেশন ও এসডিইটি টেকনিক্যাল ভাইভা',
          description_en: 'Run Playwright and Newman automated tests inside GitHub Actions workflows. Practice core QA automation viva questions with confidence.',
          description_bn: 'গিটহাবে কোড পুশ করার সাথে সাথে প্লে-রাইট টেস্ট স্বয়ংক্রিয়ভাবে রান করা এবং টেকনিক্যাল ইন্টারভিউয়ের প্রস্তুতি।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Playwright in GitHub Actions', 'Publishing Test Artifacts (HTML report)', 'SDET System Design Viva', 'CV Highlights'],
          practicalTask_en: 'Publish an end-to-end GitHub repo with Playwright tests running automatically on every push, complete with a passing CI badge in the README.',
          practicalTask_bn: 'তোমার গিটহাবে স্বয়ংক্রিয় প্লে-রাইট টেস্ট ও সিআই/সিডি ব্যাজ সহ কমপ্লিট রিপোজিটরি সাজিয়ে সিভিতে যুক্ত করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'qa-q1',
      question_en: 'What is the Page Object Model (POM) pattern in Playwright, and why is it preferred over inline test scripts in enterprise projects?',
      question_bn: 'প্লে-রাইটে পেজ অবজেক্ট মডেল (POM) প্যাটার্ন কী এবং বড় প্রজেক্টে সাধারণ ইনলাইন স্ক্রিপ্টের চেয়ে এটি কেন বেশি গ্রহণযোগ্য?',
      category: 'Test Automation Design',
      whyAsked_en: 'Differentiates amateur script writers from professional test automation engineers who write maintainable code.',
      whyAsked_bn: 'প্রার্থী দীর্ঘমেয়াদে সফটওয়্যার পরিবর্তনের সাথে তাল মিলিয়ে টেকসই টেস্ট কোড লিখতে পারে কি না তা যাচাই করতে।',
      howToAnswer_en: 'The Page Object Model (POM) is an architectural design pattern that encapsulates a web page or component UI interactions into dedicated classes. Web elements (locators) and operations (e.g. login, fillForm, checkout) are defined within the page class, completely decoupled from the test assertions. If the frontend UI design changes (for instance, an ID or button class changes), you only update the locator in one single page class file, rather than having to rewrite dozens of broken test scripts. This reduces code duplication, eliminates test fragility, and keeps test specifications clean and readable like natural business logic.',
      howToAnswer_bn: 'পেজ অবজেক্ট মডেল হলো এমন একটি ডিজাইন প্যাটার্ন যেখানে প্রতিটি ওয়েব পেজের বাটন, ইনপুট ফিল্ড ও কার্যক্রমকে আলাদা ক্লাসের ভেতরে গুছিয়ে রাখা হয়। টেস্ট ফাইলের ভেতরে সরাসরি ক্লিকের কোড না লিখে পেজ ক্লাস থেকে মেথড কল করা হয়। ভবিষ্যতে ওয়েবসাইটের বাটন বা ডিজাইনে পরিবর্তন আসলেও মূল টেস্ট ফাইলগুলোর কোনো ক্ষতি হয় না, শুধু সংশ্লিষ্ট পেজ ক্লাসে একবার পরিবর্তন করলেই সব টেস্ট ঠিকভাবে কাজ করে। এটি কোডের অপচয় রোধ করে এবং প্রজেক্টকে দীর্ঘমেয়াদে টিকিয়ে রাখে।',
      commonMistakes_en: 'Putting test assertions inside Page Object methods instead of keeping assertions within test files.',
      commonMistakes_bn: 'পেজ অবজেক্ট ক্লাসের ভেতরেই টেস্ট অ্যাসারশন ঢুকিয়ে দেওয়া যা এই প্যাটার্নের নিয়মের পরিপন্থী।'
    },
    {
      id: 'qa-q2',
      question_en: 'How do you integrate Postman collections with Newman CLI into a GitHub Actions CI/CD pipeline, and how does the pipeline handle test failures?',
      question_bn: 'গিটহাব একশনস সিআই/সিডি পাইপলাইনে নিউম্যান সিএলআই দিয়ে পোস্টম্যান কালেকশন কীভাবে ইন্টিগ্রেট করবেন এবং টেস্ট ফেইল করলে পাইপলাইন কীভাবে আচরণ করে?',
      category: 'API CI/CD Automation',
      whyAsked_en: 'Verifies continuous integration competency where automated tests gate production deployments.',
      whyAsked_bn: 'ডেভেলপারের কোডে বাগ থাকলে তা সার্ভারে ডিপ্লয় হওয়া স্বয়ংক্রিয়ভাবে আটকে দেওয়ার বাস্তব জ্ঞান দেখতে।',
      howToAnswer_en: 'In our GitHub Actions workflow YAML file, we add a step that installs Newman (npm install -g newman newman-reporter-htmlextra). We execute the test run via newman run ./tests/api_collection.json -e ./tests/env.json -r cli,htmlextra. If any assertion fails in the collection, Newman exits with a non-zero exit code (e.g. exit 1). GitHub Actions detects this non-zero status code and immediately flags the workflow run as failed, halting downstream deployment steps and blocking the pull request merge until the regression is resolved. The workflow also uploads the generated HTML test report as an artifact for inspection.',
      howToAnswer_bn: 'গিটহাব অ্যাকশনস ফাইলে আমরা একটি স্টেপে নিউম্যান ইনস্টল করে newman run কমান্ডের সাহায্যে পোস্টম্যান কালেকশন ও এনভায়রনমেন্ট ফাইল রান করি। কোনো একটি এপিআই টেস্টের অ্যাসারশন ফেইল করার সাথে সাথে নিউম্যান একটি নন-জিরো এক্সিট কোড প্রদান করে। গিটহাব এটি ডিটেক্ট করে তৎক্ষণাৎ পাইপলাইন ফেইল ঘোষণা করে এবং সার্ভারে বাগযুক্ত কোড ডিপ্লয় হওয়া আটকে দেয়। একই সাথে এটি বিস্তারিত এইচটিএমএল রিপোর্ট আপলোড করে যাতে টিম সহজেই সমস্যা চিহ্নিত করতে পারে।',
      commonMistakes_en: 'Using flags that suppress error codes (like suppress-exit-code), which makes failing tests look successful in CI.',
      commonMistakes_bn: 'ভুল ফ্ল্যাগ ব্যবহার করে এরর কোড হাইড করে ফেলা যার ফলে টেস্ট ফেইল করলেও সিআই সবুজ টিক দেখায়।'
    },
    {
      id: 'qa-q3',
      question_en: 'In k6 load testing, what is the significance of the 95th percentile (p95) response time compared to simple mathematical average latency?',
      question_bn: 'কে-সিক্স (k6) লোড টেস্টিংয়ে সাধারণ গড় (Average) রেসপন্স টাইমের তুলনায় ৯৫তম পার্সেন্টাইল (p95) কেন অনেক বেশি গুরুত্বপূর্ণ?',
      category: 'Performance Engineering',
      whyAsked_en: 'Tests whether candidate understands latency distribution curves and real user experience degradation under stress.',
      whyAsked_bn: 'প্রার্থী সাধারণ গড়ের ধোঁকা বুঝতে পেরে বাস্তব ইউজারদের ভোগান্তি বৈজ্ঞানিকভাবে বিশ্লেষণ করতে পারে কি না তা পরীক্ষা করতে।',
      howToAnswer_en: 'Mathematical averages (mean) are deceptive because extreme outliers are masked. For example, if 90 requests take 10ms but 10 requests take 5,000ms due to database locks, the average might look like an acceptable 509ms, completely hiding the fact that 10% of users suffered an intolerable 5-second freeze. The 95th percentile (p95) states that 95% of all requests completed faster than this specific threshold, and only 5% were slower. In production SLAs, enterprise fintech and e-commerce platforms enforce thresholds on p95 and p99 (e.g. p95 < 300ms) to guarantee that virtually every paying user experiences rapid responses regardless of traffic spikes.',
      howToAnswer_bn: 'গড় মান অনেক সময় বাস্তব পরিস্থিতিকে আড়াল করে ফেলে। যেমন: ৯০ জন ব্যবহারকারী যদি ১০ মিলি-সেকেন্ডে পেজ পায় আর ১০ জন যদি ডেটাবেস জ্যামের কারণে ৫ সেকেন্ড বসে থাকে, তবে গড় মান আসবে ৫০০ মিলি-সেকেন্ড যা দেখে মনে হতে পারে সিস্টেম ভালো আছে। কিন্তু বাস্তবে ১০% গ্রাহক মারাত্মক সমস্যায় পড়েছে। ৯৫তম পার্সেন্টাইল (p95) নিশ্চিত করে যে ৯৫% গ্রাহক ঠিক কত সময়ের মধ্যে সেবা পেয়েছে। তাই বড় বড় প্ল্যাটফর্মে গড়ের বদলে p95 বা p99 দেখে পারফরম্যান্সের মানদণ্ড নির্ধারণ করা হয়।',
      commonMistakes_en: 'Relying exclusively on the average latency metric when presenting performance audit reports.',
      commonMistakes_bn: 'রিপোর্টে শুধু গড় ল্যাটেন্সি উল্লেখ করা যা সার্ভারের মারাত্মক স্লোডাউনকে লুকিয়ে রাখে।'
    },
    {
      id: 'qa-q4',
      question_en: 'In late 2026, how do you approach testing software that incorporates generative AI features where outputs are inherently non-deterministic?',
      question_bn: '২০২৬ সালের আধুনিক সফটওয়্যারে এআই ফিচারের নন-ডিটারমিনিস্টিক (প্রতিবার ভিন্ন ভিন্ন) আউটপুট কীভাবে কার্যকরভাবে টেস্ট করতে হয়?',
      category: 'AI Feature Testing',
      whyAsked_en: 'Evaluates the candidate preparedness for 2026 software quality challenges involving LLM integration.',
      whyAsked_bn: 'এআই ফিচারের মতো অপ্রত্যাশিত আউটপুট সম্পন্ন আধুনিক ফিচার টেস্ট করার আধুনিক কৌশল প্রার্থীর জানা আছে কি না দেখতে।',
      howToAnswer_en: 'Traditional QA expects exact string matching (assert text == "Hello"). For LLMs whose generated text naturally varies, we adopt modern AI testing strategies: 1) Structural & Schema Validation: assert that JSON outputs strictly conform to predefined Pydantic/Zod schemas; 2) Semantic Assertion: use embedding cosine distance or lightweight evaluator models (LLM-as-a-judge) with golden prompt-response benchmarks to verify factual relevance; 3) Guardrail Verification: execute negative adversarial test suites attempting prompt injections, profanity, and sensitive credential extraction to assert that safety filters block them; 4) Latency & Streaming assertions: test that time-to-first-token (TTFT) via Server-Sent Events remains below 800ms.',
      howToAnswer_bn: 'সনাতন টেস্টিংয়ে হুবহু লেখা মিলেছে কি না তা দেখা হতো। কিন্তু এআইয়ের ক্ষেত্রে প্রতিবার ভাষা সামান্য বদলাতে পারে। তাই আধুনিক নিয়মে: ১) স্কিমা ভ্যালিডেশন করা হয় যাতে আউটপুট নির্ধারিত জেএসএন ফরম্যাট মেনে চলে; ২) সেমান্টিক টেস্ট করা হয় যেখানে এআই দিয়ে ভাবার্থ ঠিক আছে কি না তা যাচাই করা হয়; ৩) অ্যাডভারসারিয়াল বা নেগেটিভ টেস্ট চালানো হয় যেখানে খারাপ প্রম্পট দিয়ে পরীক্ষা করা হয় যে সিস্টেমের সিকিউরিটি গার্ডরেইল তা সফলভাবে ব্লক করে কি না; ৪) এবং স্ট্রিমিং স্পিড ঠিক আছে কি না তা স্বয়ংক্রিয়ভাবে মেপে দেখা হয়।',
      commonMistakes_en: 'Attempting hardcoded string equality assertions on generative AI conversational responses.',
      commonMistakes_bn: 'এআই চ্যাটবটের উত্তরে হুবহু স্ট্রিং মেলানোর চেষ্টা করা যা সামান্য শব্দ পরিবর্তনেই টেস্ট ফেইল করাবে।'
    }
  ],
  freeCerts: [
    {
      id: 'postman-api-fundamentals-student',
      title_en: 'Postman Student Expert Certification',
      title_bn: 'পোস্টম্যান স্টুডেন্ট এক্সপার্ট ভেরিফায়েড ব্যাজ',
      provider: 'Postman Academy',
      url: 'https://academy.postman.com',
      mobileAccessible: true,
      language: 'en',
      durationHours: 15,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official verified credential directly from Postman validating automated REST API request testing, scripts, and assertions.',
      relevance_bn: 'পোস্টম্যানের নিজস্ব অফিশিয়াল স্টুডেন্ট এক্সপার্ট ব্যাজ যা এপিআই টেস্টিং দক্ষতার সরাসরি প্রমাণ।'
    },
    {
      id: 'k6-grafana-load-testing',
      title_en: 'k6 Performance Testing by Grafana Labs (Free Certification)',
      title_bn: 'কে-সিক্স পারফরম্যান্স টেস্টিং বাই গ্রাফানা ল্যাবস',
      provider: 'Grafana Labs',
      url: 'https://k6.io/docs/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 20,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official interactive modules teaching high-concurrency load testing, threshold metrics, and virtual user scripts.',
      relevance_bn: 'গ্রাফানা ল্যাবসের অফিশিয়াল লোড টেস্টিং ও পারফরম্যান্স ইঞ্জিনিয়ারিং প্রশিক্ষণ।'
    },
    {
      id: 'istqb-ctfl-free-prep',
      title_en: 'ISTQB Certified Tester Foundation Level (CTFL) Open Syllabus',
      title_bn: 'আইএসটিকিউবি ফাউন্ডেশন লেভেল সিলেবাস ও স্টাডি গাইড',
      provider: 'ISTQB Open Resources',
      url: 'https://www.istqb.org',
      mobileAccessible: true,
      language: 'en',
      durationHours: 40,
      cost: '100% Free Materials',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'The global standard framework defining software quality principles, test levels, defect lifecycles, and risk analysis.',
      relevance_bn: 'আন্তর্জাতিকভাবে স্বীকৃত সফটওয়্যার টেস্টিং স্ট্যান্ডার্ড সিলেবাস ও নির্দেশিকা।'
    }
  ]
};
