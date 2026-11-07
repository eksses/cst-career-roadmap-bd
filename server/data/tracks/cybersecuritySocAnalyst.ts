import type { CareerTrack } from '../../../shared/types.js';

export const cybersecuritySocAnalystTrack: Omit<CareerTrack, 'id'> = {
  slug: 'cybersecurity-soc-analyst',
  title_en: 'Cyber Security, Ethical Hacking & SOC Analyst',
  title_bn: 'সাইবার সিকিউরিটি, এথিক্যাল হ্যাকিং ও এসওসি অ্যানালিস্ট',
  summary_en: 'Network security defense, vulnerability scanning, Linux penetration testing tools, OWASP Top 10 web vulnerabilities, and security operations center incident analysis.',
  summary_bn: 'নেটওয়ার্ক নিরাপত্তা, ভালনারেবিলিটি স্ক্যানিং, কালিলিনাক্স ও ওয়্যারশার্ক দিয়ে পেনেট্রেশন টেস্টিং এবং আর্থিক প্রতিষ্ঠানের সিকিউরিটি অ্যানালিস্ট ট্র্যাক।',
  pivotAdvice_en: 'If you are naturally curious about investigating system loopholes, defending computers against malicious attacks, and exploring network packets, cybersecurity offers rapid career advancement and prestige across banks and tech firms in Bangladesh.',
  pivotAdvice_bn: 'তুমি যদি সিস্টেমের খুঁটিনাটি ভুল খুঁজে বের করতে পছন্দ করো এবং হ্যাকিং থেকে সার্ভার ও নেটওয়ার্ক নিরাপদ রাখার চ্যালেঞ্জ উপভোগ করো, তবে সাইবার সিকিউরিটি তোমার জন্য সেরা পছন্দ। বাংলাদেশের ব্যাংক ও ফিনটেক প্রতিষ্ঠানে এই পদের চাহিদা অত্যন্ত বেশি।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Analyzing network traffic packets using Wireshark to identify suspicious port scans.',
    'Conducting vulnerability assessments on web servers using Nmap, Burp Suite, and OWASP ZAP.',
    'Reviewing firewall logs, SSH auth failures, and configuring fail2ban security rules.',
    'Writing clear vulnerability reports explaining discovered security flaws and mitigation steps.',
    'Practicing legal capture-the-flag exercises and bug bounty testing on authorized platforms.'
  ],
  dayToDay_bn: [
    'ওয়্যারশার্ক দিয়ে নেটওয়ার্ক ট্র্যাফিক পর্যবেক্ষণ করে সন্দেহজনক কার্যক্রম শনাক্ত করা।',
    'এনম্যাপ ও বার্প স্যুট ব্যবহার করে ওয়েবসাইট ও সার্ভারের দুর্বলতা স্ক্যান করা।',
    'ফায়ারওয়াল ও সার্ভার লগ পর্যালোচনা করে অননুমোদিত লগইন প্রচেষ্টা প্রতিরোধ করা।',
    'কোম্পানির আইটি কর্মকর্তাদের জন্য সহজ ভাষায় সিকিউরিটি অডিট রিপোর্ট তৈরি করা।',
    'অনুমোদিত প্ল্যাটফর্মে ক্যাপচার-দ্য-ফ্ল্যাগ ও বাগ বাউন্টি প্র্যাকটিস করা।'
  ],
  mustHaveSkills: [
    {
      id: 'network-protocols-security',
      name: 'TCP/IP & Network Protocols',
      category: 'Networking',
      importance: 'Essential',
      description_en: 'Packet analysis with Wireshark, DNS, DHCP, HTTP/HTTPS, SSL/TLS, and subnetting.',
      description_bn: 'ওয়্যারশার্ক দিয়ে প্যাকেট অ্যানালাইসিস ও নেটওয়ার্ক প্রোটোকল বিশ্লেষণ।'
    },
    {
      id: 'kali-linux-tools',
      name: 'Kali Linux Security Toolkit',
      category: 'Security Tools',
      importance: 'Essential',
      description_en: 'Nmap, Netcat, Gobuster, Metasploit basics, Hydra, and Bash scripting.',
      description_bn: 'কালিলিনাক্স টার্মিনাল, পোর্ট স্ক্যানিং ও সিকিউরিটি টেস্টিং টুলস পরিচালনা।'
    },
    {
      id: 'owasp-top-10',
      name: 'OWASP Top 10 Web Vulnerabilities',
      category: 'Application Security',
      importance: 'Essential',
      description_en: 'SQL Injection, XSS, CSRF, broken access control, and security misconfigurations.',
      description_bn: 'এসকিউএল ইনজেকশন, এক্সএসএস ও ওয়েব অ্যাপ্লিকেশনের প্রধান নিরাপত্তা ত্রুটি শনাক্তকরণ।'
    },
    {
      id: 'soc-siem-monitoring',
      name: 'SOC Log Analysis & SIEM Tools',
      category: 'Defense Operations',
      importance: 'Recommended',
      description_en: 'Wazuh, Splunk basics, Windows event logs, and Linux auth logs monitoring.',
      description_bn: 'সার্ভার লগ বিশ্লেষণ ও অনুপ্রবেশ শনাক্তকরণ সিস্টেম পরিচালনা।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Motijheel Banking Sector, Gulshan Fintech, Mohakhali Data Centers)',
      entrySalary: { min: 30000, max: 50000, currency: 'BDT', formatted: '30,000 - 50,000 BDT' },
      midSalary: { min: 65000, max: 130000, currency: 'BDT', formatted: '65,000 - 130,000 BDT' },
      seniorSalary: { min: 150000, max: 320000, currency: 'BDT', formatted: '150,000 - 320,000 BDT' },
      hiringSectors: [
        'Commercial Banks & Mobile Financial Services (bKash, Nagad, Sonali Bank, City Bank)',
        'Telecommunication Network Operators (Grameenphone, Banglalink, Robi)',
        'Cyber Security Consultancies & Managed Security Providers (Beetles Cyber Security, etc.)',
        'Government ICT & Cyber Crime Units'
      ],
      cvExpectations: [
        'Hands-on comfort with Linux command line and networking packet analysis in Wireshark',
        'Documented TryHackMe or PortSwigger Web Security Academy lab completions',
        'Strong understanding of OWASP Top 10 and ability to explain fixes in simple terms',
        'Diploma in CST with clear technical ethical standards'
      ],
      localDemandSummary_en: 'Commercial banks and financial institutions in Bangladesh are legally mandated to maintain dedicated Security Operations Centers. CST diploma holders with solid networking and Linux skills find high-paying entry roles with low competition.',
      localDemandSummary_bn: 'বাংলাদেশ ব্যাংকের নির্দেশনায় সকল ব্যাংক ও আর্থিক প্রতিষ্ঠানে নিজস্ব সাইবার সিকিউরিটি টিম থাকা বাধ্যতামূলক। লিনাক্স ও নেটওয়ার্কিং জানা ডিপ্লোমা শিক্ষার্থীদের জন্য এটি অত্যন্ত মর্যাদাপূর্ণ চাকরির সুযোগ তৈরি করেছে।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'UAE & Saudi Arabia',
        countryName_bn: 'সংযুক্ত আরব আমিরাত ও সৌদি আরব',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Commercial firms recruit security analysts with practical lab certifications and networking experience.',
        visaReality_bn: 'সিসকো ও প্র্যাকটিক্যাল ল্যাব সার্টিফিকেটধারীদের টেকনিক্যাল ভিসায় অগ্রাধিকার দেওয়া হয়।',
        averageSalaryUsdOrLocal: '$2,500 - $4,800 USD/month',
        requiredExperienceYears: '2 - 4 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$800 - $2,800 USD',
      competitionLevel: 'Moderate to High',
      competitionLevel_bn: 'মাঝারি থেকে প্রতিযোগিতাপূর্ণ',
      englishRequirement: 'Professional written English for security flaw reports and bug bounty submissions',
      englishRequirement_bn: 'বাগ বাউন্টি ও অডিট রিপোর্ট লেখার উপযোগী পেশাদার ইংরেজি',
      realities_en: [
        'HackerOne and Bugcrowd allow direct income from Bangladesh via responsible vulnerability disclosure.',
        'Remote entry jobs require verifiable lab ranking on platforms like TryHackMe and Hack The Box.'
      ],
      realities_bn: [
        'হ্যাকারওয়ান ও বাগক্রাউড প্ল্যাটফর্মে নিরাপত্তা ত্রুটি খুঁজে ডলার আয় করা সম্ভব।',
        'রিমোট চাকরির জন্য ট্রাইহ্যাকমি বা পোর্টসুইগার ল্যাবের প্র্যাকটিক্যাল প্রোফাইল প্রয়োজন হয়।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Networking Defense & Linux Command Fundamentals',
      phaseTitle_bn: 'নেটওয়ার্কিং ডিফেন্স ও লিনাক্স কমান্ডের ভিত্তি',
      phaseSubtitle_en: 'Master packet sniffing, subnetting, and Linux CLI navigation.',
      phaseSubtitle_bn: 'প্যাকেট স্নিফিং, আইপি সাবনেটিং ও লিনাক্স টার্মিনাল আয়ত্ত করো।',
      durationWeeks: 4,
      modules: [
        {
          id: 'sec-p1-m1',
          title_en: 'TCP/IP Packet Inspection with Wireshark',
          title_bn: 'ওয়্যারশার্ক দিয়ে টিসিপি/আইপি প্যাকেট পর্যবেক্ষণ',
          description_en: 'Learn how data travels over networks, capture live packets, inspect three-way handshakes, and identify unencrypted passwords.',
          description_bn: 'নেটওয়ার্কে ডেটা আদান-প্রদান পর্যবেক্ষণ, হ্যান্ডশেক অ্যানালাইসিস ও অসুরক্ষিত ট্র্যাফিক শনাক্তকরণ।',
          estimatedDays: 8,
          mobileAccessible: true,
          keyTopics: ['Wireshark Filters', 'TCP Handshake', 'DNS & HTTP Analysis', 'Subnetting'],
          practicalTask_en: 'Capture your local network traffic in Wireshark and filter all DNS queries generated by your browser.',
          practicalTask_bn: 'ওয়্যারশার্ক চালু করে ব্রাউজারের সকল ডিএনএস রিকোয়েস্ট ফিল্টার করে লগ সংরক্ষণ করো।'
        },
        {
          id: 'sec-p1-m2',
          title_en: 'Linux Security CLI & Port Scanning with Nmap',
          title_bn: 'লিনাক্স সিকিউরিটি সিএলআই ও এনম্যাপ দিয়ে পোর্ট স্ক্যানিং',
          description_en: 'Learn Kali Linux command essentials, file permissions, and discover open ports and services using Nmap scan types.',
          description_bn: 'কালিলিনাক্স কমান্ড, ফাইল পারমিশন এবং এনম্যাপ দিয়ে ওপেন পোর্ট ও সার্ভিস স্ক্যানিং।',
          estimatedDays: 10,
          mobileAccessible: false,
          keyTopics: ['Nmap SYN Scan', 'Service Versioning', 'UFW Firewall', 'SSH Key Auth'],
          practicalTask_en: 'Run an Nmap scan on a local polytechnic lab computer to identify all open listening services.',
          practicalTask_bn: 'ল্যাব কম্পিউটারে এনম্যাপ স্ক্যান চালিয়ে কোন কোন সার্ভিস ওপেন আছে তার তালিকা তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Web Application Vulnerabilities & OWASP Testing',
      phaseTitle_bn: 'ওয়েব অ্যাপ্লিকেশন দুর্বলতা ও ওওয়াস্প টেস্টিং',
      phaseSubtitle_en: 'Inspect and fix critical web security vulnerabilities.',
      phaseSubtitle_bn: 'ওয়েব অ্যাপ্লিকেশনের মারাত্মক নিরাপত্তা ত্রুটি শনাক্ত ও সমাধান।',
      durationWeeks: 5,
      modules: [
        {
          id: 'sec-p2-m1',
          title_en: 'Intercepting Web Traffic with Burp Suite',
          title_bn: 'বার্প স্যুট দিয়ে ওয়েব ট্র্যাফিক ইন্টারসেপ্ট ও বিশ্লেষণ',
          description_en: 'Configure proxy in browser, capture HTTP requests, manipulate parameters, and examine server responses.',
          description_bn: 'ব্রাউজার প্রক্সি কনফিগার করে এইচটিটিপি রিকোয়েস্ট ইন্টারসেপ্ট ও প্যারামিটার পরিবর্তনের প্র্যাকটিস।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['Burp Proxy', 'Repeater', 'HTTP Headers', 'Cookie Security'],
          practicalTask_en: 'Intercept a test web form using Burp Suite and successfully modify the submitted price parameter.',
          practicalTask_bn: 'বার্প স্যুট দিয়ে টেস্ট ফর্মের ডাটা ইন্টারসেপ্ট করে সফলভাবে ভ্যালু পরিবর্তন করো।'
        },
        {
          id: 'sec-p2-m2',
          title_en: 'OWASP Top 10: SQL Injection & XSS Lab Drills',
          title_bn: 'ওওয়াস্প টপ ১০: এসকিউএল ইনজেকশন ও ক্রস সাইট স্ক্রিপ্টিং',
          description_en: 'Understand how unvalidated user inputs allow attackers to bypass login forms or steal user cookies, and learn how to patch them.',
          description_bn: 'ইনপুট ভ্যালিডেশন না থাকলে কীভাবে লগইন বাইপাস করা যায় এবং কোডিংয়ে তা সমাধানের উপায়।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['SQLi Authentication Bypass', 'Stored vs Reflected XSS', 'Input Sanitization', 'Prepared Statements'],
          practicalTask_en: 'Solve the first 5 free SQL injection and XSS labs on PortSwigger Web Security Academy.',
          practicalTask_bn: 'পোর্টসুইগার ওয়েব সিকিউরিটি একাডেমির প্রথম ৫টি এসকিউএল ইনজেকশন ল্যাব সফলভাবে সম্পন্ন করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'SOC Monitoring, Log Analysis & Incident Defense',
      phaseTitle_bn: 'এসওসি মনিটরিং, লগ অ্যানালাইসিস ও ইনসিডেন্ট ডিফেন্স',
      phaseSubtitle_en: 'Detect intrusions and harden servers against brute-force attacks.',
      phaseSubtitle_bn: 'অনধিকার প্রবেশ শনাক্তকরণ ও ব্রুট-ফোর্স হ্যাক থেকে সার্ভার রক্ষা।',
      durationWeeks: 5,
      modules: [
        {
          id: 'sec-p3-m1',
          title_en: 'Linux Auth Logs, SSH Hardening & Fail2ban',
          title_bn: 'লিনাক্স লগ অ্যানালাইসিস, এসএসএইচ ও ফেইলটুব্যান',
          description_en: 'Inspect /var/log/auth.log, identify brute-force password guessing, configure Fail2ban to ban attacking IPs automatically.',
          description_bn: 'সার্ভার লগ পরীক্ষা করে পাসওয়ার্ড হ্যাকিং প্রচেষ্টা শনাক্ত ও আক্রমণকারীর আইপি স্বয়ংক্রিয়ভাবে ব্লক করা।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['Auth Logs Inspection', 'Fail2ban Jails', 'SSH Port Changing', 'IP Tables Rules'],
          practicalTask_en: 'Install Fail2ban on a Linux server and verify that 3 failed login attempts trigger a 24-hour IP ban.',
          practicalTask_bn: 'লিনাক্স সার্ভারে ফেইলটুব্যান কনফিগার করে ৩ বার ভুল পাসওয়ার্ড দিলে আইপি ব্যান নিশ্চিত করো।'
        },
        {
          id: 'sec-p3-m2',
          title_en: 'SIEM Overview & Incident Triage with Wazuh',
          title_bn: 'এসআইইএম ওভারভিউ ও ওয়াজুহ দিয়ে সিকিউরিটি মনিটরিং',
          description_en: 'Understand how enterprise Security Operations Centers collect events across 100+ servers into a single dashboard for alerting.',
          description_bn: 'কর্পোরেট নেটওয়ার্কের শত শত কম্পিউটারের লগ একটি ড্যাশবোর্ডে এনে মনিটর করার কৌশল।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Wazuh Agent', 'Alert Severities', 'Incident Triage', 'Evidence Collection'],
          practicalTask_en: 'Write an incident response report describing a simulated malware outbreak in a corporate office network.',
          practicalTask_bn: 'একটি কাল্পনিক ম্যালওয়্যার অ্যাটাকের ওপর ভিত্তি করে প্রাতিষ্ঠানিক ইনসিডেন্ট রিপোর্ট লেখো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Practical Bug Bounty, CV Building & Industry Interview',
      phaseTitle_bn: 'প্র্যাকটিক্যাল বাগ বাউন্টি, সিভি প্রস্তুতি ও চাকরি ভাইভা',
      phaseSubtitle_en: 'Build verifiable credentials and master cybersecurity technical interviews.',
      phaseSubtitle_bn: 'ভেরিফায়েড সার্টিফিকেট অর্জন ও টেকনিক্যাল ভাইভায় শতভাগ প্রস্তুতি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'sec-p4-m1',
          title_en: 'TryHackMe Pre-Security & Cisco Cyber Badges',
          title_bn: 'ট্রাইহ্যাকমি প্র্যাকটিস ও সিসকো সাইবার সিকিউরিটি ব্যাজ',
          description_en: 'Complete foundational rooms on TryHackMe and claim verified 100% free Cisco Network Academy digital credentials.',
          description_bn: 'ট্রাইহ্যাকমি প্ল্যাটফর্মে প্র্যাকটিক্যাল ল্যাব সম্পন্ন করে সিসকোর ডিজিটাল ব্যাজ অর্জন।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['TryHackMe Rank', 'Cisco Badges', 'LinkedIn Credential', 'Ethical Standards'],
          practicalTask_en: 'Earn the Cisco Junior Cybersecurity Analyst badge and add the verified credential URL to your CV.',
          practicalTask_bn: 'সিসকো জুনিয়র সাইবার সিকিউরিটি ব্যাজ অর্জন করে ভেরিফায়েড লিংক সিভিতে যুক্ত করো।'
        },
        {
          id: 'sec-p4-m2',
          title_en: 'Technical Interview Mastery for Banking SOC Roles',
          title_bn: 'ব্যাংকিং এসওসি পদের টেকনিক্যাল ইন্টারভিউ প্রস্তুতি',
          description_en: 'Practice answering technical viva questions regarding TCP flags, handshakes, OWASP remediation, and ethical boundaries.',
          description_bn: 'ব্যাংক ও কর্পোরেট ভাইভায় সচরাচর জিজ্ঞাসিত টিসিপি ফ্ল্যাগ, ওওয়াস্প ও লগ সংক্রান্ত প্রশ্নের উত্তর চর্চা।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['3-Way Handshake Viva', 'SQLi Defense Explanation', 'Salary Negotiation', 'Confidentiality'],
          practicalTask_en: 'Record a 3-minute video explaining how a parameterized query stops SQL injection attacks.',
          practicalTask_bn: 'প্যারামিটারাইজড কোয়েরি কীভাবে এসকিউএল ইনজেকশন ঠেকায় তা ৩ মিনিটে রেকর্ড করে অনুশীলন করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'sec-q1',
      question_en: 'Explain the TCP 3-Way Handshake step by step. Which flags are sent?',
      question_bn: 'টিসিপি থ্রি-ওয়ে হ্যান্ডশেক কীভাবে কাজ করে? কোন কোন ফ্ল্যাগ পাঠানো হয়?',
      category: 'Networking Security',
      whyAsked_en: 'Tests if the candidate genuinely understands low-level packet communication, which is required for firewall rules and Wireshark analysis.',
      whyAsked_bn: 'প্রার্থী সত্যিই নেটওয়ার্কের মৌলিক ট্র্যাফিক বোঝে কি না তা যাচাই করার জন্য এই প্রশ্ন করা হয়।',
      howToAnswer_en: 'Explain: 1. Client sends SYN (Synchronize). 2. Server replies with SYN-ACK (Synchronize-Acknowledge). 3. Client responds with ACK. Then connection is ESTABLISHED.',
      howToAnswer_bn: '১. ক্লায়েন্ট সিন (SYN) পাঠায়। ২. সার্ভার সিন-অ্যাক (SYN-ACK) দিয়ে সাড়া দেয়। ৩. ক্লায়েন্ট অ্যাক (ACK) পাঠালে কানেকশন সম্পন্ন হয়।',
      commonMistakes_en: 'Confusing SYN with ACK order, or not knowing that SYN flood attacks exploit step 1 by never sending the final ACK.',
      commonMistakes_bn: 'সিন ও অ্যাকের ধারাবাহিকতা গুলিয়ে ফেলা বা সিন ফ্লাড ডস অ্যাটাকের সাথে এর সম্পর্ক না জানা।'
    },
    {
      id: 'sec-q2',
      question_en: 'What is SQL Injection and how do you prevent it in backend code?',
      question_bn: 'এসকিউএল ইনজেকশন কী এবং ব্যাকএন্ড কোডে এটি কীভাবে প্রতিরোধ করতে হয়?',
      category: 'Web Security',
      whyAsked_en: 'SQLi is one of the most dangerous vulnerabilities in databases. Every security analyst must understand both exploitation and code-level defense.',
      whyAsked_bn: 'ডেটাবেস হ্যাকিংয়ের সবচেয়ে পরিচিত উপায় হলো এসকিউএল ইনজেকশন। এর প্রতিকার জানা বাধ্যতামূলক।',
      howToAnswer_en: 'State that SQLi occurs when untrusted user input is directly concatenated into a SQL query. The only robust defense is Parameterized Queries (Prepared Statements) and ORMs.',
      howToAnswer_bn: 'ইউজার ইনপুট সরাসরি কোয়েরিতে জোড়া লাগালে এই সমস্যা হয়। একমাত্র কার্যকর সমাধান হলো প্যারামিটারাইজড কোয়েরি (প্রিপেয়ার্ড স্টেটমেন্ট) বা ওআরএম ব্যবহার করা।',
      commonMistakes_en: 'Claiming that client-side JavaScript validation or regex filtering alone is enough.',
      commonMistakes_bn: 'শুধুমাত্র ফ্রন্টএন্ড ভ্যালিডেশন দিয়ে এটি আটকানো সম্ভব মনে করা।'
    }
  ],
  freeCerts: [
    {
      id: 'cisco-intro-cyber',
      title_en: 'Cisco Introduction to Cybersecurity',
      title_bn: 'সিসকো নেটঅ্যাকাড: ইন্ট্রোডাকশন টু সাইবার সিকিউরিটি',
      provider: 'Cisco Networking Academy',
      url: 'https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity',
      mobileAccessible: true,
      language: 'en',
      durationHours: 15,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official verified digital badge from Cisco verifying foundational cybersecurity and defense literacy.',
      relevance_bn: 'সিসকোর অফিশিয়াল ফ্রি ডিজিটাল ব্যাজ যা সিভিতে পেশাদার প্রমাণ হিসেবে কাজ করে।'
    },
    {
      id: 'cisco-jr-cyber-analyst',
      title_en: 'Cisco Junior Cybersecurity Analyst Career Path',
      title_bn: 'সিসকো জুনিয়র সাইবার সিকিউরিটি অ্যানালিস্ট',
      provider: 'Cisco Networking Academy',
      url: 'https://www.netacad.com/career-paths/cybersecurity',
      mobileAccessible: true,
      language: 'en',
      durationHours: 120,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Comprehensive 120-hour verified pathway preparing for real-world entry SOC analyst positions.',
      relevance_bn: 'এসওসি অ্যানালিস্ট পদের জন্য সিসকোর ১২০ ঘণ্টার বিশদ ও ফ্রি আন্তর্জাতিক পাথওয়ে।'
    },
    {
      id: 'portswigger-academy',
      title_en: 'PortSwigger Web Security Academy Practitioner',
      title_bn: 'পোর্টসুইগার ওয়েব সিকিউরিটি একাডেমি',
      provider: 'PortSwigger (Burp Suite Creators)',
      url: 'https://portswigger.net/web-security',
      mobileAccessible: true,
      language: 'en',
      durationHours: 60,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'The gold standard worldwide for learning OWASP Top 10 vulnerabilities with free cloud labs.',
      relevance_bn: 'ওওয়াস্প টপ ১০ শেখার জন্য বিশ্বের সবচেয়ে সম্মানিত ফ্রি প্র্যাকটিক্যাল ল্যাব প্ল্যাটফর্ম।'
    },
    {
      id: 'muktopaath-cyber-awareness',
      title_en: 'National Cyber Security Awareness Credential',
      title_bn: 'জাতীয় সাইবার নিরাপত্তা ও সচেতনতা কোর্স',
      provider: 'Muktopaath / a2i Bangladesh',
      url: 'https://muktopaath.gov.bd',
      mobileAccessible: true,
      language: 'bn',
      durationHours: 10,
      cost: '100% Free',
      isBdLocal: true,
      category: 'bd_national',
      relevance_en: 'Bangladesh Government certified credential verifying local IT security rules and national digital compliance.',
      relevance_bn: 'বাংলাদেশ সরকারের মুক্তপাঠ প্ল্যাটফর্মের অফিশিয়াল ভেরিফায়েড সার্টিফিকেট।'
    }
  ]
};
