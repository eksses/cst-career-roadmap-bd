import type { CareerTrack } from '../../../shared/types.js';

export const ethicalHackingBugBountyTrack: Omit<CareerTrack, 'id'> = {
  slug: 'ethical-hacking-bug-bounty',
  title_en: 'Ethical Hacking, Penetration Testing and Bug Bounty Hunting',
  title_bn: 'এথিক্যাল হ্যাকিং, পেনিট্রেশন টেস্টিং ও বাগ বাউন্টি হান্টার',
  summary_en: 'Offensive cybersecurity, vulnerability assessment, Burp Suite web interception, OWASP Top 10 exploits, reconnaissance scripting, and hunting bounties on HackerOne and Bugcrowd.',
  summary_bn: 'অফেনসিভ সাইবার সিকিউরিটি, ওয়েব ভালনারেবিলিটি নির্ণয়, বার্প স্যুট (Burp Suite), ওওয়াস্প টপ ১০ (OWASP Top 10) এবং হ্যাকারওয়ান ও বাগক্রাউডে বৈধভাবে ত্রুটি ধরে বাউন্টি উপার্জনের ক্যারিয়ার গাইড।',
  pivotAdvice_en: 'Ethical hacking channels high-energy curiosity into lucrative, legally protected cybersecurity roles. If you love discovering hidden logical flaws in web software and exploring attack surfaces, this path offers global prestige and bounties.',
  pivotAdvice_bn: 'ওয়েবসাইট ও সার্ভারের দুর্বলতা খুঁজে বের করার তীব্র আগ্রহকে আইনসম্মত ও সম্মানজনক ক্যারিয়ারে রূপ দেওয়ার সেরা মাধ্যম হলো এথিক্যাল হ্যাকিং। দেশীয় ব্যাংক ও সফটওয়্যার কোম্পানিতে পেনিট্রেশন টেস্টার হিসেবে এবং আন্তর্জাতিকভাবে বাগ বাউন্টি হান্টার হিসেবে এর বিশাল সুযোগ রয়েছে।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Performing automated and manual reconnaissance on target domain subdomains and exposed API ports.',
    'Intercepting and manipulating HTTP/WebSocket traffic in Burp Suite to test for authentication bypasses.',
    'Testing for SQL Injection, Cross-Site Scripting (XSS), IDOR, and Server-Side Request Forgery (SSRF).',
    'Writing clear Proof of Concept (PoC) vulnerability writeups with remediation steps for engineering teams.',
    'Submitting responsible disclosure vulnerability reports to company bug bounty programs on HackerOne.'
  ],
  dayToDay_bn: [
    'টার্গেট ডোমেইনের সব সাব-ডোমেন ও খোলা পোর্ট খুঁজে বের করার প্রাথমিক রিকন (Recon) চালানো।',
    'বার্প স্যুট (Burp Suite) দিয়ে ব্রাউজারের রিকোয়েস্ট আটকে আইডি বা পাসওয়ার্ড বাইপাস করার চেষ্টা করা।',
    'এসকিউএল ইনজেকশন, এক্সএসএস (XSS), আইডিওআর (IDOR) ও সার্ভার রিকোয়েস্ট ফোরজারির মতো ফাঁকফোকর পরীক্ষা করা।',
    'কোম্পানির ইঞ্জিনিয়ারদের বোঝার জন্য স্পষ্ট প্রুফ-অব-কনসেপ্ট (PoC) ও সমাধানের উপায় লিখে রিপোর্ট তৈরি করা।',
    'হ্যাকারওয়ান (HackerOne) বা বাগক্রাউডে দায়িত্বশীলভাবে সিকিউরিটি বাগ রিপোর্ট জমা দিয়ে রিওয়ার্ড সংগ্রহ করা।'
  ],
  mustHaveSkills: [
    {
      id: 'burp-suite-proxy',
      name: 'Burp Suite Professional Interception and Repeater',
      category: 'Web Penetration Testing',
      importance: 'Essential',
      description_en: 'Configuring proxy certificates, Repeater request tampering, Intruder fuzzing, and match-replace rules.',
      description_bn: 'বার্প স্যুট প্রক্সি কনফিগারেশন, রিপিটার দিয়ে ডেটা পরিবর্তন এবং ইন্ট্রুডার দিয়ে ফাজিং পরীক্ষা।'
    },
    {
      id: 'owasp-top-10',
      name: 'OWASP Top 10 Vulnerabilities and Exploitation',
      category: 'Security Assessment',
      importance: 'Essential',
      description_en: 'Broken Object Level Authorization (BOLA/IDOR), SQLi, Stored/Reflected XSS, CSRF, and SSRF.',
      description_bn: 'আইডিওআর (IDOR), এসকিউএল ইনজেকশন, ক্রস-সাইট স্ক্রিপ্টিং ও অথেন্টিকেশন দুর্বলতার মেকানিক্স।'
    },
    {
      id: 'recon-subdomain-enumeration',
      name: 'Reconnaissance and Subdomain Enumeration Tools',
      category: 'Recon & OSINT',
      importance: 'Essential',
      description_en: 'Using Sublist3r, Amass, httpx, naabu, and gau to discover obscure hidden staging servers.',
      description_bn: 'কোম্পানির অননুমোদিত বা টেস্ট সাবডোমেন খুঁজে বের করার টুলস ও কমান্ড লাইন অটোমেশন।'
    },
    {
      id: 'python-bash-exploit-scripting',
      name: 'Python and Bash Security Automation Scripting',
      category: 'Automation',
      importance: 'Recommended',
      description_en: 'Automating multi-threaded HTTP requests, parsing JSON API tokens, and brute-force testing.',
      description_bn: 'পাইথন দিয়ে দ্রুত হাজার হাজার এন্ডপয়েন্ট টেস্ট করার নিজস্ব অটোমেশন স্ক্রিপ্ট তৈরি।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Motijheel, Gulshan, Banani, Karwan Bazar)',
      entrySalary: { min: 25000, max: 45000, currency: 'BDT', formatted: '25,000 - 45,000 BDT' },
      midSalary: { min: 60000, max: 120000, currency: 'BDT', formatted: '60,000 - 120,000 BDT' },
      seniorSalary: { min: 140000, max: 280000, currency: 'BDT', formatted: '140,000 - 280,000 BDT' },
      hiringSectors: [
        'Commercial Banks and Financial Services Security Assessment Divisions (BAPLC, bKash Security)',
        'Cybersecurity Consulting and Audit Firms in Dhaka (Beetles Cyber Security, BGD e-GOV CIRT)',
        'E-Commerce and Payment Gateway Platforms'
      ],
      cvExpectations: [
        'Demonstrated Hall of Fame acknowledgments or HackerOne reputation score profile link',
        'Clear understanding of ethical boundaries and legal permissions (responsible disclosure strictly)',
        'Strong knowledge of web protocols (HTTP headers, cookies, CORS, CSP)',
        'Ability to write structured remediation guidance for backend developers'
      ],
      localDemandSummary_en: 'Bangladeshi banks and fintech firms are legally mandated by Bangladesh Bank to run regular penetration tests. Certified ethical hackers and bug bounty achievers are highly prized.',
      localDemandSummary_bn: 'বাংলাদেশ ব্যাংকের কঠোর নিয়মের কারণে দেশের প্রতিটি ব্যাংক ও আর্থিক প্রতিষ্ঠানে নিয়মিত পেনিট্রেশন টেস্ট করাতে হয়। স্বীকৃত হ্যাকারদের চাকরির বাজারে বিপুল সম্মান ও চাহিদা রয়েছে।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'Saudi Arabia and UAE (Dubai)',
        countryName_bn: 'সৌদি আরব ও সংযুক্ত আরব আমিরাত (দুবাই)',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ',
        visaReality_en: 'Gulf nations are investing billions into national cyber defense. Offensive security testers with recognized certifications qualify for high-paying employment visas.',
        visaReality_bn: 'মধ্যপ্রাচ্যের দেশগুলো জাতীয় সাইবার সুরক্ষায় কোটি কোটি ডলার বিনিয়োগ করছে। সার্টিফাইড পেনিট্রেশন টেস্টারদের সরাসরি কাজের ভিসা দেওয়া হয়।',
        averageSalaryUsdOrLocal: '$50,000 - $95,000 USD / year (approx 6,000,000 - 11,500,000 BDT)',
        requiredExperienceYears: '2+ years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$500 - $5,000 / month (via Bounties and Retainers)',
      competitionLevel: 'Global crowd on HackerOne, won by finding high-impact business logic flaws over common scanners',
      competitionLevel_bn: 'স্বয়ংক্রিয় স্ক্যানারের চেয়ে মানুষের মস্তিষ্কের তীক্ষ্ণ বিজনেস লজিক বাগ বের করে সবচেয়ে বড় ডলার বাউন্টি জেতা যায়',
      englishRequirement: 'Clear written technical English to communicate vulnerability severity in vulnerability reports',
      englishRequirement_bn: 'কোম্পানির সিকিউরিটি টিমের কাছে বাগের ভয়াবহতা নিখুঁত ইংরেজিতে লিখে ব্যাখ্যা করার ক্ষমতা',
      realities_en: [
        'Never test any server without explicit written permission or an active public bug bounty program',
        'A single well-documented IDOR vulnerability on an e-commerce platform can award $500 to $2,000 USD'
      ],
      realities_bn: [
        'লিখিত অনুমতি বা অফিশিয়াল বাউন্টি পলিসি ছাড়া কারও ওয়েবসাইটে কোনো টেস্ট চালানো সম্পূর্ণ বেআইনি ও দণ্ডনীয় অপরাধ',
        'একটি সাধারণ কাস্টমার অ্যাকাউন্ট থেকে অন্যের ডেটা দেখার (IDOR) বাগ খুঁজে পেলে কোম্পানিগুলো ৫০০ থেকে ২,০০০ ডলার পর্যন্ত পুরস্কার দেয়'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Web Protocols, Linux and Burp Suite Setup',
      phaseTitle_bn: 'প্রথম পর্ব: ওয়েব প্রোটোকল, লিনাক্স ও বার্প স্যুট কনফিগারেশন',
      phaseSubtitle_en: 'Day 1 to 25: HTTP requests, cookies, sessions, installing Kali Linux, and proxying traffic.',
      phaseSubtitle_bn: '১ থেকে ২৫ দিন: এইচটিটিপি প্রোটোকল, ব্রাউজার সেশন ও বার্প স্যুট প্রক্সি দিয়ে ট্র্যাফিক দেখা।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-burp-http-foundations',
          title_en: 'HTTP Inspection and Burp Suite Repeater',
          title_bn: 'এইচটিটিপি হেডার ও বার্প স্যুট রিপিটার',
          description_en: 'GET vs POST headers, authorization bearer tokens, setting up Burp CA certificates in Firefox.',
          description_bn: 'ব্রাউজারে ফায়ারফক্স ও বার্প স্যুট কানেক্ট করে ওয়েবের প্রতিটি রিকোয়েস্ট পর্যবেক্ষণ ও সম্পাদনা করা।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['HTTP status codes (200, 302, 401, 403, 500)', 'Burp Suite CA Certificate installation', 'Burp Repeater request editing'],
          practicalTask_en: 'Intercept your own login request in Burp Suite, modify the user ID header in Repeater, and observe server response.',
          practicalTask_bn: 'বার্প স্যুট দিয়ে নিজের ব্রাউজারের লগইন রিকোয়েস্ট আটকে ফিল্ড পরিবর্তন করে রেসপন্স পর্যবেক্ষণ করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: PortSwigger Web Security Academy and OWASP Top 10',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: পোর্টসুইগার একাডেমি ল্যাব ও ওওয়াস্প দুর্বলতাসমূহ',
      phaseSubtitle_en: 'Day 26 to 50: Hands-on virtual hacking labs on SQLi, XSS, CSRF, and authentication bypasses.',
      phaseSubtitle_bn: '২৬ থেকে ৫০ দিন: পোর্টসুইগার ফ্রি ল্যাবে এসকিউএল ইনজেকশন, এক্সএসএস ও অ্যাকাউন্ট বাইপাস প্র্যাকটিস।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-portswigger-sqli-xss',
          title_en: 'Hands-on Web Exploits (SQLi, XSS and IDOR)',
          title_bn: 'বাস্তব ওয়েব ল্যাব এক্সপ্লয়েট (SQLi, XSS ও IDOR)',
          description_en: 'UNION SQL injection, reflected/stored cross-site scripting, and insecure direct object references (IDOR).',
          description_bn: 'পোর্টসুইগার ফ্রি ল্যাবে নিরাপদে বিভিন্ন দুর্বলতা প্র্যাকটিস করে পাসওয়ার্ড উদ্ধার ও প্রিভিলেজ এসকেলেশন করা।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['Insecure Direct Object Reference (IDOR)', 'Reflected and Stored XSS payloads', 'SQL Injection login bypass'],
          practicalTask_en: 'Solve 15 official Apprentice and Practitioner labs on the PortSwigger Web Security Academy.',
          practicalTask_bn: 'পোর্টসুইগার একাডেমির ১৫টি অফিশিয়াল ল্যাব সমাধান করে ব্যাজ অর্জন করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: Reconnaissance Scripting and Surface Mapping',
      phaseTitle_bn: 'তৃতীয় পর্ব: রিকন স্ক্রিপ্টিং ও টার্গেট সার্ভার ম্যাপিং',
      phaseSubtitle_en: 'Day 51 to 75: Automating subdomain discovery, live host probing, and directory fuzzing.',
      phaseSubtitle_bn: '৫১ থেকে ৭৫ দিন: সাবডোমেন খোঁজা, লাইভ হোস্ট যাচাই ও লুকানো অ্যাডমিন প্যানেল স্ক্যান করার টুলস।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-recon-enumeration',
          title_en: 'Target Asset Discovery and Command Automation',
          title_bn: 'টার্গেট সাবডোমেন ডিসকভারি ও অটোমেশন',
          description_en: 'Chaining subfinder, httpx, and ffuf to discover exposed developer staging sites and API docs.',
          description_bn: 'টার্মিনাল পাইপিং দিয়ে হাজার হাজার সাবডোমেন থেকে সচল ওয়েবসাইট ও দুর্বল ডিরেক্টরি আলাদা করা।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Subfinder and Assetfinder', 'httpx status code filtering', 'ffuf web path fuzzing'],
          practicalTask_en: 'Run a passive non-intrusive recon scan on a permitted scope target and list all active subdomains in a clean markdown report.',
          practicalTask_bn: 'অনুমোদিত বাউন্টি প্রোগ্রামের আওতায় একটি টার্গেটের সব সাবডোমেন ম্যাপ করে ফাইল আকারে সাজাও।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: Responsible Disclosure, Report Writing and HackerOne',
      phaseTitle_bn: 'চতুর্থ পর্ব: দায়িত্বশীল ডিসক্লোজার, রিপোর্ট রাইটিং ও হ্যাকারওয়ান',
      phaseSubtitle_en: 'Day 76 to 90: Crafting professional bug bounty reports with CVSS severity scoring.',
      phaseSubtitle_bn: '৭৬ থেকে ৯০ দিন: আন্তর্জাতিক মানের বাগ রিপোর্ট লেখা ও হ্যাকারওয়ানে প্রথম সাবমিশন।',
      durationWeeks: 2,
      modules: [
        {
          id: 'mod-poc-report-writing',
          title_en: 'Vulnerability Writeup and Responsible Disclosure',
          title_bn: 'প্রুফ-অব-কনসেপ্ট (PoC) তৈরি ও প্রাতিষ্ঠানিক রিপোর্ট',
          description_en: 'Writing step-by-step reproduction guidelines, calculating CVSS 3.1 base score, and submitting on HackerOne.',
          description_bn: 'কোম্পানির জন্য নিখুঁত স্ক্রিনশট ও স্টেপস সহ প্রফেশনাল রিপোর্ট ড্রাফট করা।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['CVSS 3.1 Calculator', 'Writing PoC steps without damaging data', 'HackerOne program rules and scope'],
          practicalTask_en: 'Draft a complete mock vulnerability report for an IDOR bug adhering to HackerOne professional guidelines.',
          practicalTask_bn: 'হ্যাকারওয়ানের স্ট্যান্ডার্ড অনুযায়ী একটি সম্পূর্ণ বাগ রিপোর্ট ড্রাফট করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'hack-q1',
      question_en: 'What is an IDOR (Insecure Direct Object Reference) vulnerability? How do you test for it and how should developers fix it?',
      question_bn: 'আইডিওআর (Insecure Direct Object Reference) দুর্বলতা কী? কীভাবে এটি টেস্ট করা যায় এবং ডেভেলপাররা কীভাবে এটি সমাধান করবেন?',
      category: 'Web Application Security',
      whyAsked_en: 'IDOR is the most common and highest-reward vulnerability in modern bug bounty programs worldwide.',
      whyAsked_bn: 'বাগ বাউন্টি ও সাইবার সিকিউরিটি ইন্টারভিউয়ের সবচেয়ে পছন্দের প্রশ্ন যা প্রার্থীর লজিক্যাল অ্যাটাক ধরার চোখ পরীক্ষা করে।',
      howToAnswer_en: 'An IDOR occurs when an application exposes a reference to an internal database object (such as a user ID, invoice number, or document URL in the request parameters) and fails to verify if the currently authenticated user actually has authorization to view or edit that object. To test for it: Log in with Account A, capture the profile request (e.g., GET /api/user?id=101), change the parameter to Account B (id=102) in Burp Repeater, and check if Account B data is returned. To remediate: Developers must implement server-side access control checks on every database query ensuring that the requesting session user ID strictly owns the target resource.',
      howToAnswer_bn: 'আইডিওআর (IDOR) দুর্বলতা তখন দেখা যায় যখন কোনো ওয়েবসাইটে ইউজার আইডি বা অর্ডার নম্বর সরাসরি ইউআরএল বা প্যারামিটারে দেওয়া থাকে (যেমন /profile?id=50) এবং সার্ভার চেক করে না যে বর্তমান লগইন করা ব্যবহারকারীর ওই ডেটা দেখার অধিকার আছে কি না। টেস্টিং পদ্ধতি: দুটি আলাদা অ্যাকাউন্ট (A এবং B) খুলতে হবে। অ্যাকাউন্ট A থেকে প্রোফাইল দেখতে গিয়ে বার্প স্যুট দিয়ে id=50 বদলে id=51 (অ্যাকাউন্ট B এর আইডি) দিলে যদি অন্যজনের ব্যক্তিগত তথ্য দেখা যায়, তবে সেটি একটি মারাত্মক IDOR বাগ। সমাধান: সার্ভার সাইডে ডেটাবেস কুয়েরি করার আগে অবশ্যই সেশনের ইউজার আইডি দিয়ে মালিকানা ভেরিফাই করতে হবে।',
      commonMistakes_en: 'Confusing authentication (who you are) with authorization (what you are allowed to access).',
      commonMistakes_bn: 'অথেনটিকেশন (ইউজার লগইন করা আছে কি না) এবং অথরাইজেশন (ওই ফাইলে তার পারমিশন আছে কি না)-এর পার্থক্য গুলিয়ে ফেলা।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-portswigger-certified',
      title_en: 'PortSwigger Web Security Academy Practitioner Badge',
      title_bn: 'পোর্টসুইগার ওয়েব সিকিউরিটি একাডেমি ফ্রি সার্টিফিকেট',
      provider: 'PortSwigger (Creators of Burp Suite)',
      url: 'https://portswigger.net/web-security',
      mobileAccessible: true,
      language: 'en',
      durationHours: 35,
      cost: '100% Free',
      relevance_en: 'The global gold standard training curriculum for web application penetration testing.',
      relevance_bn: 'বার্প স্যুটের অফিসিয়াল ল্যাব থেকে বিশ্বের সবচেয়ে মর্যাদাপূর্ণ ওয়েব পেনিট্রেশন টেস্টিং ফ্রি কোর্স।'
    }
  ]
};
