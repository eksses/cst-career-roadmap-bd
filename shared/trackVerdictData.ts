export interface TrackVerdictInfo {
  slug: string;
  competitionLevel: 'Low' | 'Low to Moderate' | 'Moderate' | 'Moderate to High' | 'High' | 'High (Global)' | 'High / Global' | 'Very High' | 'Fierce / Academic' | 'Foundational Bridge';
  competitionLevel_bn: string;
  competitors_en: string;
  competitors_bn: string;
  degreeGatekeeping_en: string;
  degreeGatekeeping_bn: string;
  diplomaWinningStrategy_en: string;
  diplomaWinningStrategy_bn: string;
  estimatedMonths: number;
  timeframe_en: string;
  timeframe_bn: string;
  dailyCommitment_en: string;
  dailyCommitment_bn: string;
  timelineVerdict_en: string;
  timelineVerdict_bn: string;
  milestones_en: string[];
  milestones_bn: string[];
}

export const TRACK_VERDICTS: Record<string, TrackVerdictInfo> = {
  'ai-ml-engineer': {
    slug: 'ai-ml-engineer',
    competitionLevel: 'Fierce / Academic',
    competitionLevel_bn: 'তীব্র প্রাতিষ্ঠানিক প্রতিযোগিতা (রিসার্চ ও থিওরি)',
    competitors_en: 'You are competing with PhD scholars, MSc degree holders, and premier university BSc graduates (BUET, DU, IUT, BRACU) who studied advanced calculus, linear algebra, and publish academic research papers.',
    competitors_bn: 'এখানে তোমার প্রধান প্রতিদ্বন্দ্বী হলেন পিএইচডি গবেষক, এমএসসি ডিগ্রিধারী এবং শীর্ষ বিশ্ববিদ্যালয়ের (বুয়েট, ঢাবি, আইইউটি) সিএস গ্র্যাজুয়েটরা, যারা অ্যাডভান্সড ক্যালকুলাস, লিনিয়ার অ্যালজেব্রা এবং আন্তর্জাতিক রিসার্চ পেপার নিয়ে কাজ করেন।',
    degreeGatekeeping_en: 'Extremely High for fundamental research and training foundation models from scratch; Low for Applied AI Engineering and deployment.',
    degreeGatekeeping_bn: 'স্ক্র্যাচ থেকে নতুন এআই মডেল তৈরি বা গবেষণার ক্ষেত্রে প্রাতিষ্ঠানিক ডিগ্রি কঠোরভাবে দেখা হয়; তবে অ্যাপ্লায়েড এআই ইন্টিগ্রেশন ও ডিপ্লয়মেন্টে প্রজেক্টই প্রধান।',
    diplomaWinningStrategy_en: 'Do not compete on theoretical math or model training from scratch. Win with Applied AI: master vLLM inference serving, private pgvector RAG systems, Unsloth LoRA fine-tuning, and LangGraph autonomous agent pipelines. Companies in Dhaka and remote teams urgently need engineers who can connect LLMs to real production APIs and databases.',
    diplomaWinningStrategy_bn: 'তাত্ত্বিক গণিত বা স্ক্র্যাচ থেকে মডেল ট্রেইনিংয়ে প্রতিযোগিতা করার দরকার নেই। অ্যাপ্লায়েড এআই-তে বাজিমাত করো: vLLM মডেল সার্ভিং, pgvector দিয়ে প্রাইভেট RAG ডেটাবেস, Unsloth দিয়ে কম খরচে LoRA ফাইন-টিউনিং এবং LangGraph মাল্টি-এজেন্ট পাইপলাইনে পারদর্শী হও। দেশীয় সফটওয়্যার ফার্ম ও রিমোট টিমে এমন প্র্যাকটিক্যাল ইঞ্জিনিয়ারের চরম সংকট।',
    estimatedMonths: 8,
    timeframe_en: '8 to 10 Months',
    timeframe_bn: '৮ থেকে ১০ মাস',
    dailyCommitment_en: '3.0 to 3.5 Hours daily (Lab & GPU experiments)',
    dailyCommitment_bn: 'প্রতিদিন ৩.০ থেকে ৩.৫ ঘণ্টা (ল্যাব ও জিপিইউ এক্সপেরিমেন্ট)',
    timelineVerdict_en: 'In late 2026, landing an AI role without a master degree requires 8 to 10 months of disciplined focus. Month 1 to 3 on Python, PyTorch, and vector databases; Month 4 to 6 on building 2 production-grade RAG and agent systems; Month 7 to 10 on open-source contributions, Hugging Face benchmarks, and technical viva preparation.',
    timelineVerdict_bn: '২০২৬ সালের এআই বিপ্লবের বাজারে মাস্টার্স ছাড়া অ্যাপ্লায়েড এআই ইঞ্জিনিয়ার হিসেবে কাজ পেতে ৮ থেকে ১০ মাসের সুনির্দিষ্ট পরিকল্পনা দরকার। প্রথম ৩ মাস পাইথন ও পাইটর্চ; পরবর্তী ৩ মাস দুটি স্বয়ংক্রিয় RAG ও মাল্টি-এজেন্ট সিস্টেম তৈরি; শেষ কয়েকমাস হাগিংফেস মডেল ফাইন-টিউনিং ও ইন্টারভিউ প্রস্তুতি।',
    milestones_en: [
      'Month 1 to 3: Python, PyTorch basics, PostgreSQL pgvector',
      'Month 4 to 6: Production RAG, vLLM inference, LangGraph agents',
      'Month 7 to 10: Unsloth LoRA fine-tuning, portfolio demo on Hugging Face'
    ],
    milestones_bn: [
      '১ থেকে ৩ মাস: পাইথন, পাইটর্চ বেসিক ও পোস্টগ্রেস পিজিভেক্টর',
      '৪ থেকে ৬ মাস: প্রোডাকশন RAG, ভিএলএলএম সার্ভিং ও ল্যাংগ্রাফ এজেন্ট',
      '৭ থেকে ১০ মাস: আনস্লথ লোরা ফাইন-টিউনিং ও হাগিংফেসে লাইভ প্রজেক্ট'
    ]
  },

  'backend-systems-engineering': {
    slug: 'backend-systems-engineering',
    competitionLevel: 'Low to Moderate',
    competitionLevel_bn: 'কম থেকে মাঝারি প্রতিযোগিতা (প্র্যাকটিক্যাল কোডারদের বড় সুযোগ)',
    competitors_en: 'You are competing mostly against general university CS graduates who know academic theory and basic CRUD, but have almost never touched Go concurrency, Redis locks, or production database indexing. PhDs do not compete for these backend positions.',
    competitors_bn: 'এখানে তোমার প্রতিযোগিতা মূলত সাধারণ বিশ্ববিদ্যালয়ের গ্র্যাজুয়েটদের সাথে, যারা শুধু বেসিক সিআরইউডি ও থিওরি জানেন। তবে গো-ল্যাংয়ের গোরুটিন, চ্যানেল, রেডিস ক্যাশিং বা ডেটাবেস ইনডেক্সিং নিয়ে প্র্যাকটিক্যাল কাজ করা মানুষ খুবই কম। কোনো পিএইচডি হোল্ডার এই পদের জন্য আসেন না।',
    degreeGatekeeping_en: 'Very Low. Backend hiring is determined by live coding tasks, transaction isolation understanding, and API benchmarks, not certificates.',
    degreeGatekeeping_bn: 'খুবই কম। ব্যাকএন্ডে ডিগ্রি দেখার চেয়ে সরাসরি টেকনিক্যাল পরীক্ষা নেওয়া হয়: ডেটাবেস ট্রানজ্যাকশন লক, কুয়েরি অপ্টিমাইজেশন ও এপিআই পারফরম্যান্স।',
    diplomaWinningStrategy_en: 'Master Go (goroutines, channels, sync.Mutex, context pooling) or Node.js with strict TypeScript. Build high-concurrency APIs backed by PostgreSQL with connection pooling and Redis caching. Demonstrate mastery of ACID transactions and Docker deployment. A GitHub repo handling 5,000 requests/second instantly beats theoretical degrees.',
    diplomaWinningStrategy_bn: 'গো-ল্যাং (গোরুটিন, চ্যানেল, মিউটেক্স) অথবা টাইপস্ক্রিপ্ট নোড.জেএস-এ দক্ষ হও। পোস্টগ্রেস ও রেডিস দিয়ে হাই-কনকারেন্সি ব্যাকএন্ড তৈরি করো যা প্রতি সেকেন্ডে ৫,০০০ রিকোয়েস্ট সামলাতে পারে। ডেটাবেসের ACID প্রোপার্টি ও ট্রানজ্যাকশন লকিং বোঝাতে পারলে যেকোনো প্রাতিষ্ঠানিক ডিগ্রির চেয়ে এগিয়ে থাকবে।',
    estimatedMonths: 6,
    timeframe_en: '5 to 7 Months',
    timeframe_bn: '৫ থেকে ৭ মাস',
    dailyCommitment_en: '2.5 to 3.0 Hours daily (Coding & Benchmarking)',
    dailyCommitment_bn: 'প্রতিদিন ২.৫ থেকে ৩.০ ঘণ্টা (কোডিং ও এপিআই বেঞ্চমার্কিং)',
    timelineVerdict_en: 'A pragmatic 5 to 7 month timeline lands junior backend or API developer roles in Dhaka software firms or remote teams. By Month 4, your portfolio must showcase an API with authentication, rate limiting, and database stress testing.',
    timelineVerdict_bn: '৫ থেকে ৭ মাস নিয়ম মেনে প্র্যাকটিস করলে ঢাকা শহরের সফটওয়্যার প্রতিষ্ঠান অথবা রিমোট টিমে জুনিয়র ব্যাকএন্ড বা এপিআই ডেভেলপার হিসেবে চাকরি নিশ্চিত করা সম্ভব। চতুর্থ মাসের মধ্যে রেট লিমিটিং ও ডেটাবেস অপ্টিমাইজ করা প্রজেক্ট গিটহাবে থাকতে হবে।',
    milestones_en: [
      'Month 1 to 2: Core Go or TypeScript, HTTP standards, complex SQL queries',
      'Month 3 to 4: Concurrency, Redis cache, JWT auth, Docker containers',
      'Month 5 to 7: 5K req/s benchmarked API, CI/CD pipeline, technical interviews'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: গো বা টাইপস্ক্রিপ্ট কোর, এইচটিটিপি প্রটোকল ও জটিল এসকিউএল',
      '৩ থেকে ৪ মাস: কনকারেন্সি, রেডিস ক্যাশ, জেডব্লিউটি অথ ও ডকার কনটেইনার',
      '৫ থেকে ৭ মাস: ৫০০০ রিকোয়েস্ট/সেকেন্ড লোড টেস্টেড এপিআই ও ভাইভা প্রস্তুতি'
    ]
  },

  'isp-mikrotik-networking': {
    slug: 'isp-mikrotik-networking',
    competitionLevel: 'Low',
    competitionLevel_bn: 'সবচেয়ে কম প্রতিযোগিতা (পলিটেকনিক শিক্ষার্থীদের একক প্রাধান্য)',
    competitors_en: 'University BSc/MSc graduates almost never compete in this space. They actively avoid field optical fiber work, tower climbing, and 24/7 rotating NOC shifts. This entire sector across Bangladesh is powered by polytechnic CST and telecommunication diploma holders.',
    competitors_bn: 'বিশ্ববিদ্যালয়ের সিএস গ্র্যাজুয়েটরা এই সেক্টরে প্রায় আসেনই না। তারা মাঠপর্যায়ের ফাইবার অপটিক টানা, টাওয়ার ক্যাবলিং বা ২৪/৭ এনওসি শিফটে কাজ করতে চান না। সমগ্র বাংলাদেশের আইএসপি ও এনওসি নেটওয়ার্ক পলিটেকনিকের ডিপ্লোমা ইঞ্জিনিয়ারদের ওপর নির্ভর করে চলে।',
    degreeGatekeeping_en: 'Zero. CST diploma is the industry gold standard for ISP and NOC recruitment.',
    degreeGatekeeping_bn: 'একদম শূন্য। আইএসপি ও টেলিকম খাতে পলিটেকনিকের ডিপ্লোমা ইঞ্জিনিয়াররাই সবচেয়ে বেশি পছন্দনীয় ও গ্রহণযোগ্য।',
    diplomaWinningStrategy_en: 'Combine hands-on MikroTik RouterOS configuration (WinBox, BGP peering, OSPF, VLAN segmentation, Simple Queues) with physical optical fiber splicing and OTDR testing. Obtain MikroTik MTCNA knowledge and practice on real router hardware or GNS3/EVE-NG virtual labs.',
    diplomaWinningStrategy_bn: 'উইনবক্স দিয়ে মাইক্রোটিক রাউটারওএস কনফিগারেশন (BGP, OSPF, VLAN, ব্যান্ডউইথ কিউ) শেখার পাশাপাশি অপটিক্যাল ফাইবার স্প্লাইসিং ও ওটিডিআর রিডিং প্র্যাকটিস করো। পলিটেকনিক ল্যাবের রাউটার বা ইভি-এনজি ভার্চুয়াল ল্যাব ব্যবহার করো।',
    estimatedMonths: 3,
    timeframe_en: '2 to 3 Months',
    timeframe_bn: '২ থেকে ৩ মাস',
    dailyCommitment_en: '2.0 to 2.5 Hours daily (Hands-on Lab)',
    dailyCommitment_bn: 'প্রতিদিন ২.০ থেকে ২.৫ ঘণ্টা (হাতে-কলমে ল্যাব প্র্যাকটিস)',
    timelineVerdict_en: 'The fastest employment route in Bangladesh tech. CST students can secure ISP Support Engineer or NOC Technician jobs within 2 to 3 months of hands-on lab practice, even before final diploma graduation.',
    timelineVerdict_bn: 'বাংলাদেশে সবচেয়ে দ্রুত নিশ্চিত উপার্জনের সেরা পথ। ২ থেকে ৩ মাস নিষ্ঠার সাথে ল্যাব প্র্যাকটিস করলে ডিপ্লোমা পরীক্ষা শেষ হওয়ার আগেই স্থানীয় আইএসপি বা এনওসি সেন্টারে চাকরি পাওয়া যায়।',
    milestones_en: [
      'Month 1: IP subnetting, WinBox setup, DHCP & NAT routing',
      'Month 2: BGP, OSPF, Bandwidth Queues, Optical Fiber OTDR testing',
      'Month 3: Free Cisco NetAcad badge, walk-in interview at local ISPs'
    ],
    milestones_bn: [
      '১ম মাস: আইপি সাবনেটিং, উইনবক্স, ডিএইচসিপি ও ন্যাট রাউটিং',
      '২য় মাস: বিজিপি, ওএসপিএফ, ব্যান্ডউইথ ম্যানেজমেন্ট ও ফাইবার স্প্লাইসিং',
      '৩য় মাস: সিসকো নেটঅ্যাকাড ব্যাজ ও সরাসরি স্থানীয় আইএসপিতে আবেদন'
    ]
  },

  'cybersecurity-soc-analyst': {
    slug: 'cybersecurity-soc-analyst',
    competitionLevel: 'Moderate',
    competitionLevel_bn: 'মাঝারি প্রতিযোগিতা (দক্ষ প্র্যাকটিক্যাল অ্যানালিস্টের তীব্র অভাব)',
    competitors_en: 'You are competing with general IT administrators and networking staff. Most candidates only know theoretical security terms and have never analyzed live network packets in Wireshark or built SIEM detection rules in Wazuh.',
    competitors_bn: 'এখানে তোমার প্রতিদ্বন্দ্বী মূলত সাধারণ আইটি সাপোর্ট ও নেটওয়ার্ক কর্মী। অধিকাংশ প্রার্থী কেবল তাত্ত্বিক সাইবার সিকিউরিটি জানেন, কিন্তু ওয়্যারশার্কে লাইভ প্যাকেট ক্যাপচার বা ওয়াজুহ এসআইইএম-এ অ্যালার্ট ডিটেক্ট করার কোনো ব্যবহারিক অভিজ্ঞতা তাদের নেই।',
    degreeGatekeeping_en: 'Low to Moderate. Commercial banks and financial institutions in Bangladesh face strict Bangladesh Bank SOC mandates and desperately need analysts who can spot anomalies.',
    degreeGatekeeping_bn: 'কম থেকে মাঝারি। বাংলাদেশ ব্যাংকের সাইবার সিকিউরিটি সার্কুলার অনুযায়ী সব ব্যাংক ও আর্থিক প্রতিষ্ঠানে ২৪/৭ এসওসি টিম থাকা বাধ্যতামূলক, তাই প্র্যাকটিক্যাল দক্ষতাই প্রধান মাপকাঠি।',
    diplomaWinningStrategy_en: 'Build demonstrable Blue Team skills: analyze real malicious PCAP files in Wireshark, deploy a local Wazuh SIEM cluster in VirtualBox, learn Linux log analysis (/var/log/auth.log, syslog), and complete free TryHackMe rooms. Earn the free Cisco Introduction to Cybersecurity badge.',
    diplomaWinningStrategy_bn: 'ব্লু টিম ও ডিফেন্সিভ সিকিউরিটিতে ফোকাস করো: ওয়্যারশার্কে ম্যালিসিয়াস পিসিএপি ফাইল অ্যানালাইসিস, ভার্চুয়াল মেশিনে ওয়াজুহ এসআইইএম ইনস্টল করে আক্রমণ শনাক্তকরণ এবং লিনাক্স লগ তদন্তের প্রজেক্ট তৈরি করো।',
    estimatedMonths: 7,
    timeframe_en: '6 to 8 Months',
    timeframe_bn: '৬ থেকে ৮ মাস',
    dailyCommitment_en: '2.5 to 3.0 Hours daily (Virtual Labs)',
    dailyCommitment_bn: 'প্রতিদিন ২.৫ থেকে ৩.০ ঘণ্টা (ভার্চুয়াল ল্যাব অনুশীলন)',
    timelineVerdict_en: 'A steady 6 to 8 month journey prepares you for Tier 1 SOC Analyst and Security Operations roles across commercial banks, telcos, and MSSP firms in Dhaka.',
    timelineVerdict_bn: '৬ থেকে ৮ মাসের নিয়মতান্ত্রিক প্রস্তুতিতে দেশের বাণিজ্যিক ব্যাংক, টেলিকম ও সিকিউরিটি অপারেশন সেন্টারে টায়ার-১ এসওসি অ্যানালিস্ট পদের জন্য পুরোপুরি প্রস্তুত হওয়া সম্ভব।',
    milestones_en: [
      'Month 1 to 2: Network fundamentals, TCP/IP handshakes, Linux CLI',
      'Month 3 to 4: Wireshark packet analysis, Wazuh SIEM installation, Log hunting',
      'Month 5 to 8: OWASP Top 10 defenses, incident report writing, bank mock vivas'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: নেটওয়ার্কিং ফান্ডামেন্টালস, টিসিপি হ্যান্ডশেক ও লিনাক্স ওএস',
      '৩ থেকে ৪ মাস: ওয়্যারশার্ক প্যাকেট অ্যানালাইসিস ও ওয়াজুহ এসআইইএম ল্যাব',
      '৫ থেকে ৮ মাস: ওওয়াস্প শীর্ষ ১০ আক্রমণ প্রতিরোধ, ইনসিডেন্ট রিপোর্ট ও ভাইভা'
    ]
  },

  'linux-devops-admin': {
    slug: 'linux-devops-admin',
    competitionLevel: 'Low to Moderate',
    competitionLevel_bn: 'কম থেকে মাঝারি প্রতিযোগিতা (টার্মিনাল ভীতি না থাকলে নিশ্চিত সাফল্য)',
    competitors_en: 'General CS graduates mostly develop on GUI tools and Windows/Mac; very few are comfortable living inside an SSH terminal or debugging Nginx reverse proxies. No PhD researchers compete for DevOps operations.',
    competitors_bn: 'বেশিরভাগ বিশ্ববিদ্যালয় গ্র্যাজুয়েট গ্রাফিক্যাল ইউজার ইন্টারফেস ও উইন্ডোজ/ম্যাকে কাজ করেন; এসএসএইচ টার্মিনাল বা লিনাক্স ব্যাশ স্ক্রিপ্টিং নিয়ে ঘাটাঘাটি করতে তারা ভয় পান। পিএইচডি গবেষকরা কখনোই এই ফিল্ডে আসেন না।',
    degreeGatekeeping_en: 'Very Low. Employers give you a broken Linux container or failing deployment pipeline; if you fix it, you are hired on the spot.',
    degreeGatekeeping_bn: 'খুবই কম। ইন্টারভিউতে একটি নষ্ট কনটেইনার বা অকার্যকর সিআই/সিডি পাইপলাইন দিয়ে ফিক্স করতে বলা হয়; সমাধান করতে পারলেই চাকরি চূড়ান্ত।',
    diplomaWinningStrategy_en: 'Master Linux administration (Bash scripting, cron jobs, systemd services, SSH hardening, UFW firewall). Learn Docker multi-stage builds and automate continuous integration with GitHub Actions. Build a self-hosted cloud server on an inexpensive VPS.',
    diplomaWinningStrategy_bn: 'লিনাক্স সিস্টেমে ভয় দূর করো (ব্যাশ স্ক্রিপ্ট, ক্রন জব, সিস্টেমডি সার্ভিস, এসএসএইচ সিকিউরিটি)। ডকারের মাল্টি-স্টেজ বিল্ড এবং গিটহাব একশন দিয়ে স্বয়ংক্রিয় ডিপ্লয়মেন্ট তৈরি করে কম দামি ভিপিএসে নিজের প্রজেক্ট হোস্ট করে দেখাও।',
    estimatedMonths: 7,
    timeframe_en: '6 to 8 Months',
    timeframe_bn: '৬ থেকে ৮ মাস',
    dailyCommitment_en: '2.5 to 3.0 Hours daily (Terminal & CI/CD)',
    dailyCommitment_bn: 'প্রতিদিন ২.৫ থেকে ৩.০ ঘণ্টা (টার্মিনাল ও অটোমেশন ল্যাব)',
    timelineVerdict_en: 'In 6 to 8 months, CST students who build automated GitHub Actions pipelines and Dockerized deployments reliably secure Junior DevOps or Linux SysAdmin roles.',
    timelineVerdict_bn: '৬ থেকে ৮ মাসের একাগ্র সাধনায় ডকারাইজড ডিপ্লয়মেন্ট ও গিটহাব একশন সিআই/সিডি পাইপলাইন তৈরি করতে পারলে জুনিয়র ডেভঅপ্স বা সিস্টেম অ্যাডমিন হিসেবে ক্যারিয়ার শুরু করা যায়।',
    milestones_en: [
      'Month 1 to 2: Linux terminal mastery, Bash scripting, SSH & systemd',
      'Month 3 to 4: Docker containerization, Nginx reverse proxy, SSL certs',
      'Month 5 to 8: GitHub Actions CI/CD, OpenTofu basics, VPS live server setup'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: লিনাক্স কমান্ডলাইন, ব্যাশ স্ক্রিপ্ট ও সিস্টেমডি সার্ভিস',
      '৩ থেকে ৪ মাস: ডকার কনটেইনারাইজেশন, এনজিনএক্স রিভার্স প্রক্সি ও এসএসএল',
      '৫ থেকে ৮ মাস: গিটহাব একশন পাইপলাইন, ওপেনটোফু বেসিক ও লাইভ সার্ভার ডিপ্লয়'
    ]
  },

  'cloud-solutions-architecture': {
    slug: 'cloud-solutions-architecture',
    competitionLevel: 'Moderate',
    competitionLevel_bn: 'মাঝারি প্রতিযোগিতা (ক্লাউড ইনফ্রাস্ট্রাকচার দক্ষতা)',
    competitors_en: 'Competing against traditional on-premise system administrators and mid-level web developers. Few junior applicants have real hands-on Infrastructure-as-Code experience.',
    competitors_bn: 'এখানে তোমার প্রতিদ্বন্দ্বী মূলত সনাতন অন-প্রেমিসিস সিস্টেম অ্যাডমিন এবং মিড-লেভেল ডেভেলপাররা। তবে জুনিয়রদের মধ্যে সরাসরি কোড লিখে ক্লাউড সার্ভার বানানোর অভিজ্ঞতা খুব কম প্রার্থীর থাকে।',
    degreeGatekeeping_en: 'Low. AWS certifications and live Terraform/OpenTofu code repositories outweigh formal university transcripts.',
    degreeGatekeeping_bn: 'কম। অফিশিয়াল এডব্লিউএস সার্টিফিকেট এবং গিটহাবে টেরাফর্ম কোডের মান দেখে কোম্পানিগুলো সিদ্ধান্ত নেয়।',
    diplomaWinningStrategy_en: 'Avoid clicking around AWS console buttons. Write reproducible Infrastructure-as-Code (Terraform/OpenTofu) scripts provisioning VPC subnets, security groups, EC2 autoscaling, and RDS databases with cost-allocation tags.',
    diplomaWinningStrategy_bn: 'এডব্লিউএস কনসোলে শুধু মাউস দিয়ে ক্লিক না করে টেরাফর্ম বা ওপেনটোফু দিয়ে স্বয়ংক্রিয়ভাবে ক্লাউড সার্ভার, ভিপিসি সাবনেট ও ডেটাবেস তৈরি করার স্ক্রিপ্ট বানিয়ে গিটহাবে আপলোড করো।',
    estimatedMonths: 7,
    timeframe_en: '6 to 8 Months',
    timeframe_bn: '৬ থেকে ৮ মাস',
    dailyCommitment_en: '2.5 to 3.0 Hours daily (Cloud Labs)',
    dailyCommitment_bn: 'প্রতিদিন ২.৫ থেকে ৩.০ ঘণ্টা (ক্লাউড আর্কিটেকচার অনুশীলন)',
    timelineVerdict_en: '6 to 8 months of systematic cloud architecture study leads to Cloud Support Associate and Junior DevOps engineer positions in local fintechs and international remote teams.',
    timelineVerdict_bn: '৬ থেকে ৮ মাস সুনির্দিষ্ট সিলেবাস মেনে পড়াশোনা করলে ক্লাউড অ্যাসোসিয়েট হিসেবে দেশীয় বড় প্রতিষ্ঠান ও রিমোট কোম্পানিতে আকর্ষণীয় বেতনের সুযোগ তৈরি হয়।',
    milestones_en: [
      'Month 1 to 2: Linux CLI, Networking (CIDR, Subnets, DNS), AWS Core (EC2, S3)',
      'Month 3 to 4: AWS IAM security, VPC architecture, RDS relational databases',
      'Month 5 to 8: Terraform/OpenTofu IaC, AWS CloudWatch monitoring, mock architecture vivas'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: লিনাক্স, আইপি নেটওয়ার্কিং ও এডব্লিউএস বেসিক সার্ভিস (EC2, S3)',
      '৩ থেকে ৪ মাস: এডব্লিউএস সিকিউরিটি (IAM), ভিপিসি নেটওয়ার্ক ও ক্লাউড ডেটাবেস',
      '৫ থেকে ৮ মাস: টেরাফর্ম দিয়ে অটোমেশন, সার্ভার মনিটরিং ও ভাইভা প্রস্তুতি'
    ]
  },

  'laravel-php-agency-dev': {
    slug: 'laravel-php-agency-dev',
    competitionLevel: 'Moderate',
    competitionLevel_bn: 'মাঝারি প্রতিযোগিতা (লোকাল সফটওয়্যার ফার্মে সর্বোচ্চ নিয়োগ)',
    competitors_en: 'Junior self-taught developers and freelance web coders. Many build outdated procedural PHP without modern frameworks or strict coding standards.',
    competitors_bn: 'ইউটিউব দেখে শেখা ফ্রিল্যান্সার ও জুনিয়র কোডার। তবে অধিকাংশ প্রার্থী এখনো মানহীন পুরনো নিয়মে পিএইচপি কোড লেখেন এবং আধুনিক লারাভেল ১১ আর্কিটেকচার জানেন না।',
    degreeGatekeeping_en: 'Zero. Software agencies in Dhaka, Chattogram, and Sylhet care solely about rapid delivery and clean MVC architecture.',
    degreeGatekeeping_bn: 'একদম শূন্য। ঢাকা, চট্টগ্রাম ও সিলেটের শত শত সফটওয়্যার এজেন্সির একমাত্র চাহিদা দ্রুত ও নির্ভুলভাবে প্রজেক্ট ডেলিভারি দেওয়ার ক্ষমতা।',
    diplomaWinningStrategy_en: 'Build with Modern Laravel 11/12, Livewire 3, and Filament Admin v3. Create a complete multi-vendor e-commerce platform with automated bKash/Nagad checkout, invoice PDF generation, and queued email notifications.',
    diplomaWinningStrategy_bn: 'আধুনিক লারাভেল ১১, লাইভওয়্যার ৩ ও ফিলামেন্ট অ্যাডমিন ভি৩ আয়ত্ত করো। বিকাশ ও নগদ পেমেন্ট গেটওয়ে, ইনভয়েস পিডিএফ ও স্বয়ংক্রিয় ইমেইল নোটিফিকেশন সহ একটি পূর্ণাঙ্গ ই-কমার্স প্রজেক্ট তৈরি করো।',
    estimatedMonths: 5,
    timeframe_en: '4 to 5 Months',
    timeframe_bn: '৪ থেকে ৫ মাস',
    dailyCommitment_en: '2.5 to 3.0 Hours daily (Agency Projects)',
    dailyCommitment_bn: 'প্রতিদিন ২.৫ থেকে ৩.০ ঘণ্টা (বাস্তব প্রজেক্ট কোডিং)',
    timelineVerdict_en: '4 to 5 months to junior agency developer employment. Local agencies hire year-round for Laravel developers who can build business dashboards quickly.',
    timelineVerdict_bn: '৪ থেকে ৫ মাসের গভীর অনুশীলনে দেশীয় এজেন্সিতে জুনিয়র ওয়েব ডেভেলপার পদে চাকরি পাওয়া যায়। সারা বছরই দেশের বিভিন্ন সফটওয়্যার ফার্মে লারাভেল জানা প্রার্থীদের ব্যাপক চাহিদা থাকে।',
    milestones_en: [
      'Month 1 to 2: Modern PHP 8.3 OOP, MySQL relational schema, Composer',
      'Month 3: Laravel 11 MVC, Blade, Eloquent relationships, Authentication',
      'Month 4 to 5: Livewire 3, Filament admin, bKash payment gateway, VPS deployment'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: আধুনিক পিএইচপি অবজেক্ট ওরিয়েন্টেড কনসেপ্ট ও মাইএসকিউএল',
      '৩য় মাস: লারাভেল ১১ এমভিসি, এলোকোয়েন্ট রিলেশনশিপ ও ইউজার অথেন্টিকেশন',
      '৪ থেকে ৫ মাস: লাইভওয়্যার ৩, ফিলামেন্ট অ্যাডমিন ও বিকাশ পেমেন্ট গেটওয়ে প্রজেক্ট'
    ]
  },

  'frontend-fullstack-web': {
    slug: 'frontend-fullstack-web',
    competitionLevel: 'High',
    competitionLevel_bn: 'উচ্চ প্রতিযোগিতা (বুটক্যাম্প ও সেলফ-টট লার্নারদের ভিড়)',
    competitors_en: 'Extremely crowded with bootcamp graduates, university students, and tutorial followers building identical clone apps. Recruiters receive hundreds of generic resumes.',
    competitors_bn: 'এখানে প্রতিযোগিতা অনেক বেশি, কারণ হাজার হাজার শিক্ষার্থী ইউটিউব ও বুটক্যাম্প থেকে একই ধরনের সাধারণ ক্লোন প্রজেক্ট (যেমন: সাধারণ টু-ডু অ্যাপ বা ব্লগ) বানিয়ে সিভি জমা দেন।',
    degreeGatekeeping_en: 'Low to Moderate. Degree does not matter, but your code quality must stand out above generic applicants.',
    degreeGatekeeping_bn: 'কম থেকে মাঝারি। প্রতিষ্ঠান কোনো সার্টিফিকেট খোঁজে না, তবে শত শত আবেদনকারীর ভিড়ে তোমার কোডের মান অনন্য হতে হবে।',
    diplomaWinningStrategy_en: 'Break out of the tutorial trap. Use strict TypeScript without any bypasses, build with Next.js 15 App Router, write unit and integration tests with Vitest and Playwright, and implement enterprise-grade state management and accessibility.',
    diplomaWinningStrategy_bn: 'টিউটোরিয়াল কপি করার ফাঁদ থেকে বের হয়ে এসো। কোনো ছাড় ছাড়া খাঁটি টাইপস্ক্রিপ্ট ব্যবহার করো, নেক্সট.জেএস ১৫ অ্যাপ রাউটার শেখো এবং ভিট বা প্লে-রাইট দিয়ে অটোমেটেড টেস্টিং করা প্রজেক্ট গিটহাবে জমা দাও।',
    estimatedMonths: 6,
    timeframe_en: '5 to 7 Months',
    timeframe_bn: '৫ থেকে ৭ মাস',
    dailyCommitment_en: '2.5 to 3.0 Hours daily (Production Code)',
    dailyCommitment_bn: 'প্রতিদিন ২.৫ থেকে ৩.০ ঘণ্টা (টাইপস্ক্রিপ্ট ও ফুলস্ট্যাক প্র্যাকটিস)',
    timelineVerdict_en: '5 to 7 months of structured daily coding. By Month 5, having 2 fully deployed fullstack SaaS apps with strict TypeScript and automated tests guarantees job interviews.',
    timelineVerdict_bn: '৫ থেকে ৭ মাসের একনিষ্ঠ পরিশ্রমে ফুলস্ট্যাক ডেভেলপার হিসেবে চাকরি পাওয়া সম্ভব। পঞ্চম মাসের মধ্যে টাইপস্ক্রিপ্ট ও অটোমেটেড টেস্ট সমৃদ্ধ দুটি পূর্ণাঙ্গ লাইভ প্রজেক্ট সিভিতে যুক্ত করতে হবে।',
    milestones_en: [
      'Month 1 to 2: Modern JavaScript (ES6+), DOM, Tailwind CSS, Strict TypeScript',
      'Month 3 to 4: React 19, Next.js 15 App Router, Server Actions, PostgreSQL integration',
      'Month 5 to 7: Vitest/Playwright tests, Auth.js security, Vercel deployment, portfolio polish'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: আধুনিক জাভাস্ক্রিপ্ট, টেইলউইন্ড সিএসএস ও খাঁটি টাইপস্ক্রিপ্ট',
      '৩ থেকে ৪ মাস: রিয়্যাক্ট ১৯, নেক্সট.জেএস ১৫ ও পোস্টগ্রেস ডেটাবেস কানেকশন',
      '৫ থেকে ৭ মাস: অটোমেটেড টেস্টিং, অথেন্টিকেশন সিকিউরিটি ও লাইভ ডিপ্লয়মেন্ট'
    ]
  },

  'mobile-app-development': {
    slug: 'mobile-app-development',
    competitionLevel: 'Moderate to High',
    competitionLevel_bn: 'মাঝারি থেকে উচ্চ প্রতিযোগিতা',
    competitors_en: 'Junior cross-platform developers and freelance coders who frequently create single-screen demos.',
    competitors_bn: 'ফ্রিল্যান্সার ও জুনিয়র ডেভেলপার যারা ছোটখাটো ডেমো অ্যাপ তৈরি করেন।',
    degreeGatekeeping_en: 'Low. Employers test your APK or look at your live published Google Play apps.',
    degreeGatekeeping_bn: 'কম। কোম্পানিগুলো সরাসরি মোবাইলে তোমার তৈরি অ্যাপের এপিকে চালিয়ে পারফরম্যান্স পরীক্ষা করে।',
    diplomaWinningStrategy_en: 'Publish at least one full-featured Flutter app with Clean Architecture (Bloc or Riverpod), offline SQLite/Hive caching, push notifications, and background location services on GitHub with direct APK download links.',
    diplomaWinningStrategy_bn: 'ব্লক (Bloc) বা রিভারপড স্টেট ম্যানেজমেন্ট, অফলাইন ক্যাশিং এবং পুশ নোটিফিকেশন সহ অন্তত একটি পূর্ণাঙ্গ ফ্লাটার অ্যাপ তৈরি করে সরাসরি ইনস্টলযোগ্য এপিকে লিংক গিটহাবে যুক্ত করো।',
    estimatedMonths: 6,
    timeframe_en: '5 to 7 Months',
    timeframe_bn: '৫ থেকে ৭ মাস',
    dailyCommitment_en: '2.5 to 3.0 Hours daily (App Testing)',
    dailyCommitment_bn: 'প্রতিদিন ২.৫ থেকে ৩.০ ঘণ্টা (অ্যাপ ডিজাইন ও এপিআই কানেকশন)',
    timelineVerdict_en: '5 to 7 months to land a Junior Flutter Developer role across software agencies and tech startups in Bangladesh.',
    timelineVerdict_bn: '৫ থেকে ৭ মাসে জুনিয়র ফ্লাটার বা মোবাইল অ্যাপ ডেভেলপার হিসেবে সফটওয়্যার এজেন্সিতে চাকরি শুরু করার সুনির্দিষ্ট রূপরেখা।',
    milestones_en: [
      'Month 1 to 2: Dart OOP, Flutter widget architecture, responsive layout',
      'Month 3 to 4: REST API consumption, State Management (Bloc/Riverpod), Hive local storage',
      'Month 5 to 7: Push notifications, Play Store build packaging, portfolio showcase'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: ডার্ট প্রোগ্রামিং, ফ্লাটার উইজেট ও রেসপনসিভ ইউআই ডিজাইন',
      '৩ থেকে ৪ মাস: রেস্ট এপিআই ইন্টিগ্রেশন, স্টেট ম্যানেজমেন্ট ও অফলাইন স্টোরেজ',
      '৫ থেকে ৭ মাস: পুশ নোটিফিকেশন, এপিকে বিল্ড তৈরি ও ইন্টারভিউ প্রস্তুতি'
    ]
  },

  'enterprise-java-fintech': {
    slug: 'enterprise-java-fintech',
    competitionLevel: 'Moderate',
    competitionLevel_bn: 'মাঝারি প্রতিযোগিতা (ব্যাংক ও ফিনটেক খাত)',
    competitors_en: 'Competing with CS graduates from private and public universities targeting banking software providers (Brain Station 23, BJIT, Leads Corporation, Southtech).',
    competitors_bn: 'শীর্ষ বেসরকারি ও পাবলিক বিশ্ববিদ্যালয়ের সিএস গ্র্যাজুয়েট যারা বড় বড় ব্যাংকিং সফটওয়্যার কোম্পানিতে চাকরি করতে চান।',
    degreeGatekeeping_en: 'Moderate. Some traditional banks request degrees, but fintech software providers prioritize strong Spring Boot microservices and transaction reliability.',
    degreeGatekeeping_bn: 'মাঝারি। কিছু সনাতন ব্যাংক বিএসসি ডিগ্রি চাইতে পারে, তবে ফিনটেক সফটওয়্যার ভেন্ডররা স্প্রিং বুট মাইক্রোসার্ভিস দক্ষতাকে সবচেয়ে বেশি গুরুত্ব দেয়।',
    diplomaWinningStrategy_en: 'Specialize in modern Java 21 (Virtual Threads, Pattern Matching) and Spring Boot 3.4. Build an enterprise payment settlement engine with optimistic/pessimistic DB locking, Kafka event queues, and mock bKash checkout APIs.',
    diplomaWinningStrategy_bn: 'আধুনিক জাভা ২১ (ভার্চুয়াল থ্রেড) ও স্প্রিং বুট ৩.৪ আয়ত্ত করো। ডেটাবেস ট্রানজ্যাকশন লক, কাফকা মেসেজ কিউ এবং বিকাশ পেমেন্ট গেটওয়ে সমৃদ্ধ ফিনটেক মাইক্রোসার্ভিস প্রজেক্ট বানিয়ে দেখাও।',
    estimatedMonths: 7,
    timeframe_en: '6 to 8 Months',
    timeframe_bn: '৬ থেকে ৮ মাস',
    dailyCommitment_en: '3.0 Hours daily (Core Java & Spring Boot)',
    dailyCommitment_bn: 'প্রতিদিন ৩.০ ঘণ্টা (জাভা ও স্প্রিং বুট মাইক্রোসার্ভিস)',
    timelineVerdict_en: '6 to 8 months to enter banking software solutions providers as a Junior Java Engineer with stable long-term career progression.',
    timelineVerdict_bn: '৬ থেকে ৮ মাসের একনিষ্ঠ প্রস্তুতিতে দেশের ফিনটেক ও ব্যাংকিং সফটওয়্যার কোম্পানিতে স্থায়ী জুনিয়র জাভা ইঞ্জিনিয়ার হিসেবে ক্যারিয়ার গড়া সম্ভব।',
    milestones_en: [
      'Month 1 to 2: Java 21 fundamentals, OOP design patterns, JDBC & SQL',
      'Month 3 to 4: Spring Boot 3, Spring Data JPA, Spring Security with JWT tokens',
      'Month 5 to 8: Microservices architecture, Docker, Kafka integration, fintech interview vault'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: জাভা ২১ কোর কনসেপ্ট, অবজেক্ট ওরিয়েন্টেড ডিজাইন ও এসকিউএল',
      '৩ থেকে ৪ মাস: স্প্রিং বুট ৩, স্প্রিং জেপিএ, স্প্রিং সিকিউরিটি ও জেডব্লিউটি',
      '৫ থেকে ৮ মাস: মাইক্রোসার্ভিস আর্কিটেকচার, ডকার ও ফিনটেক ভাইভা প্রস্তুতি'
    ]
  },

  'python-data-ai': {
    slug: 'python-data-ai',
    competitionLevel: 'Moderate to High',
    competitionLevel_bn: 'মাঝারি থেকে উচ্চ প্রতিযোগিতা',
    competitors_en: 'Business administration, economics, and mathematics graduates who know Excel and basic statistics, plus CS students.',
    competitors_bn: 'ব্যবসায় প্রশাসন (BBA), অর্থনীতি ও গণিতের গ্র্যাজুয়েট যারা এক্সেল ও বেসিক পরিসংখ্যান জানেন, তাদের সাথে সিএস শিক্ষার্থীরা।',
    degreeGatekeeping_en: 'Moderate for pure data science roles; Very Low for practical corporate data analysis, SQL reporting, and ETL scraping.',
    degreeGatekeeping_bn: 'বিশুদ্ধ ডেটা সায়েন্সে কিছুটা কড়াকড়ি থাকলেও প্র্যাকটিক্যাল ডেটা ক্লিন করা, এসকিউএল রিপোর্টিং ও ওয়েব স্ক্র্যাপিংয়ে ডিগ্রি বাধা নয়।',
    diplomaWinningStrategy_en: 'Focus on actionable business automation: write web scrapers to gather market intelligence, automate complex Excel reports using Pandas, and build interactive SQL dashboards in Power BI or Metabase.',
    diplomaWinningStrategy_bn: 'কর্পোরেট বিজনেসের বাস্তব কাজে ফোকাস করো: পাইথন দিয়ে স্বয়ংক্রিয়ভাবে ওয়েব থেকে তথ্য সংগ্রহ, প্যান্ডাস দিয়ে অগোছালো এক্সেল ফাইল ক্লিন করা এবং পাওয়ার বিআই-তে ড্যাশবোর্ড তৈরি।',
    estimatedMonths: 5,
    timeframe_en: '4 to 6 Months',
    timeframe_bn: '৪ থেকে ৬ মাস',
    dailyCommitment_en: '2.0 to 2.5 Hours daily (SQL & Pandas)',
    dailyCommitment_bn: 'প্রতিদিন ২.০ থেকে ২.৫ ঘণ্টা (এসকিউএল ও ডেটা ভিজ্যুয়ালাইজেশন)',
    timelineVerdict_en: '4 to 6 months of disciplined practice qualifies CST students for Junior Data Analyst and MIS Executive roles across FMCG, retail, and e-commerce companies.',
    timelineVerdict_bn: '৪ থেকে ৬ মাসের নিয়মিত প্র্যাকটিসে দেশের বড় বড় রিটেইল চেইন, ই-কমার্স ও করপোরেট প্রতিষ্ঠানে জুনিয়র ডেটা অ্যানালিস্ট বা এমআইএস অফিসার হিসেবে কাজ শুরু করা যায়।',
    milestones_en: [
      'Month 1 to 2: Advanced Excel formulas, SQL joins, aggregations, window functions',
      'Month 3 to 4: Python programming, Pandas data wrangling, Matplotlib/Seaborn charts',
      'Month 5 to 6: Power BI interactive dashboard creation, automated web scraping'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: অ্যাডভান্সড এক্সেল, এসকিউএল জয়েন ও জটিল কুয়েরি সমাধান',
      '৩ থেকে ৪ মাস: পাইথন প্রোগ্রামিং, প্যান্ডাস ডেটা প্রসেসিং ও ভিজ্যুয়ালাইজেশন',
      '৫ থেকে ৬ মাস: পাওয়ার বিআই ড্যাশবোর্ড ও স্বয়ংক্রিয় ওয়েব স্ক্র্যাপিং প্রজেক্ট'
    ]
  },

  'data-engineering-big-data': {
    slug: 'data-engineering-big-data',
    competitionLevel: 'Moderate',
    competitionLevel_bn: 'মাঝারি প্রতিযোগিতা (উচ্চ কারিগরি মান)',
    competitors_en: 'Mid-level database administrators and university CS grads with strong systems background. Generic bootcampers cannot pass these technical interviews.',
    competitors_bn: 'অভিজ্ঞ ডেটাবেস অ্যাডমিন এবং সিএস গ্র্যাজুয়েটরা। সাধারণ কোনো শর্ট-কোর্স করা শিক্ষার্থী এই টেকনিক্যাল ইন্টারভিউতে টিকতে পারে না।',
    degreeGatekeeping_en: 'Low to Moderate. Practical mastery of Apache Kafka, distributed Spark processing, and Airflow DAGs wins the role.',
    degreeGatekeeping_bn: 'কম থেকে মাঝারি। অ্যাপাচি কাফকা, স্পার্ক ক্লাস্টার ও এয়ারফ্লো দিয়ে পাইপলাইন চালানোর বাস্তব জ্ঞান থাকলেই কোম্পানিগুলো লুফে নেয়।',
    diplomaWinningStrategy_en: 'Build end-to-end distributed data pipelines: ingest high-volume mock telecom/fintech streams using Apache Kafka, process with PySpark, and orchestrate automated ETL schedules via Apache Airflow.',
    diplomaWinningStrategy_bn: 'পূর্ণাঙ্গ ডেটা পাইপলাইন বানাও: কাফকা দিয়ে রিয়েল-টাইম ডেটা রিসিভ, পাইস্পার্ক দিয়ে প্রসেসিং এবং এয়ারফ্লো ড্যাগ দিয়ে অটোমেশন করে গিটহাবে স্থাপত্য চিত্র সহ আপলোড করো।',
    estimatedMonths: 8,
    timeframe_en: '7 to 9 Months',
    timeframe_bn: '৭ থেকে ৯ মাস',
    dailyCommitment_en: '2.5 to 3.0 Hours daily (Data Pipelines)',
    dailyCommitment_bn: 'প্রতিদিন ২.৫ থেকে ৩.০ ঘণ্টা (বিগ ডেটা ল্যাব অনুশীলন)',
    timelineVerdict_en: '7 to 9 months of dedicated engineering work leads to high-paying Data Engineering roles in telcos, ride-sharing firms, and data consulting companies.',
    timelineVerdict_bn: '৭ থেকে ৯ মাসের নিবিড় পরিশ্রমে টেলিকম, রাইড শেয়ারিং ও ক্লাউড কনসাল্টিং প্রতিষ্ঠানে আকর্ষণীয় বেতনের ডেটা ইঞ্জিনিয়ার পদে কাজ শুরু করা যায়।',
    milestones_en: [
      'Month 1 to 2: Advanced PostgreSQL, data modeling, indexing, Python scripts',
      'Month 3 to 5: Apache Kafka message streaming, PySpark batch & streaming transformations',
      'Month 6 to 9: Apache Airflow pipeline orchestration, ClickHouse/Snowflake analytics'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: ডেটাবেস আর্কিটেকচার, জটিল কুয়েরি ও পাইথন স্ক্রিপ্টিং',
      '৩ থেকে ৫ মাস: অ্যাপাচি কাফকা স্ট্রিমিং ও পাইস্পার্ক ডিস্ট্রিবিউটেড প্রসেসিং',
      '৬ থেকে ৯ মাস: অ্যাপাচি এয়ারফ্লো অর্কেস্ট্রেশন ও লাইভ পাইপলাইন ডেপ্লয়'
    ]
  },

  'embedded-iot-robotics': {
    slug: 'embedded-iot-robotics',
    competitionLevel: 'Low to Moderate',
    competitionLevel_bn: 'কম থেকে মাঝারি প্রতিযোগিতা',
    competitors_en: 'EEE and Mechatronics university graduates. However, many university students only simulate in MATLAB and lack low-level C firmware debugging or IoT cloud protocol skills.',
    competitors_bn: 'পাবলিক বিশ্ববিদ্যালয়ের ট্রিপল-ই ও মেকাট্রনিক্স গ্র্যাজুয়েটরা। তবে তাদের অনেকেই শুধু তাত্ত্বিক পেপার ও ম্যাটল্যাব নিয়ে থাকেন; লো-লেভেল সি ফার্মওয়্যার বা আইওটি ক্লাউড কানেক্টিভিটিতে তারা অনভিজ্ঞ।',
    degreeGatekeeping_en: 'Low to Moderate. Garment factories, electronics manufacturers, and IoT startups need hands-on tinkerers who can flash chips and solder hardware.',
    degreeGatekeeping_bn: 'কম থেকে মাঝারি। গার্মেন্টসের অটোমেশন, দেশীয় ইলেকট্রনিক্স কোম্পানি ও স্মার্ট হোম প্রতিষ্ঠানে সরাসরি বোর্ডে কোড ফ্ল্যাশ ও তার জোড়া দিতে পারা কর্মী প্রয়োজন।',
    diplomaWinningStrategy_en: 'Master embedded C/C++ on ESP32 microcontrollers, FreeRTOS multi-threading, sensor bus protocols (I2C, SPI, UART, Modbus), and stream telemetry over MQTT to cloud dashboards.',
    diplomaWinningStrategy_bn: 'ইএসপি৩২-তে এমবেডেড সি/সি++, ফ্রিআরটিওএস (FreeRTOS) মাল্টি-টাস্কিং, সেন্সর প্রটোকল (I2C, SPI) এবং এমকিউটিটি দিয়ে ক্লাউডে ডেটা পাঠানোর প্রজেক্ট ভিডিও তৈরি করে লিংকডইনে দাও।',
    estimatedMonths: 7,
    timeframe_en: '6 to 8 Months',
    timeframe_bn: '৬ থেকে ৮ মাস',
    dailyCommitment_en: '2.5 to 3.0 Hours daily (Circuits & Code)',
    dailyCommitment_bn: 'প্রতিদিন ২.৫ থেকে ৩.০ ঘণ্টা (সার্কিট ও সি প্রোগ্রামিং)',
    timelineVerdict_en: '6 to 8 months of hands-on electronics and embedded programming unlocks Automation Specialist and IoT Hardware Engineer roles across Bangladesh industries.',
    timelineVerdict_bn: '৬ থেকে ৮ মাসের সার্কিট ও কোডিং চর্চায় দেশীয় ইলেকট্রনিক্স ব্র্যান্ড ও কারখানাগুলোতে অটোমেশন বা আইওটি হার্ডওয়্যার ইঞ্জিনিয়ার হিসেবে কর্মসংস্থান নিশ্চিত হয়।',
    milestones_en: [
      'Month 1 to 2: C/C++ memory management, digital electronics, GPIO interfacing',
      'Month 3 to 4: ESP32 WiFi/Bluetooth, FreeRTOS multitasking, I2C/SPI sensor drivers',
      'Month 5 to 8: Industrial Modbus/RS485, MQTT cloud telemetry, hardware portfolio video'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: সি/সি++ মেমোরি পয়েন্টার, ডিজিটাল ইলেকট্রনিক্স ও জিপিআইও',
      '৩ থেকে ৪ মাস: ইএসপি৩২ ওয়াইফাই, ফ্রিআরটিওএস ও সেন্সর ড্রাইভার তৈরি',
      '৫ থেকে ৮ মাস: ইন্ডাস্ট্রিয়াল মডবাস ও এমকিউটিটি ক্লাউড ড্যাশবোর্ড কানেকশন'
    ]
  },

  'qa-software-testing': {
    slug: 'qa-software-testing',
    competitionLevel: 'Moderate',
    competitionLevel_bn: 'মাঝারি প্রতিযোগিতা (অটোমেশন জানলে চাকরি নিশ্চিত)',
    competitors_en: 'Non-technical career switchers and manual click-testers. Almost 80% of candidates cannot write automation code in Playwright or Cypress.',
    competitors_bn: 'নন-টেক ব্যাকগ্রাউন্ড থেকে আসা মানুষ এবং সাধারণ ম্যানুয়াল টেস্টাররা। এই ফিল্ডের প্রায় ৮০% প্রার্থী নিজে কোড লিখে অটোমেটেড টেস্ট রান করতে পারেন না।',
    degreeGatekeeping_en: 'Low. Demonstrating automated E2E test suites with continuous integration bypasses degree requirements immediately.',
    degreeGatekeeping_bn: 'খুবই কম। কোড লিখে স্বয়ংক্রিয়ভাবে ওয়েব ও এপিআই টেস্ট করার প্রমাণ দিতে পারলে কোনো ডিগ্রি বাধা হয়ে দাঁড়ায় না।',
    diplomaWinningStrategy_en: 'Skip basic manual testing only. Learn Playwright with TypeScript for cross-browser testing, Postman/Newman for REST API validation, and embed test scripts into GitHub Actions to run on every commit.',
    diplomaWinningStrategy_bn: 'শুধুমাত্র ম্যানুয়াল টেস্টে সীমাবদ্ধ থেকো না। টাইপস্ক্রিপ্ট ও প্লে-রাইট (Playwright) দিয়ে অটোমেটেড টেস্ট স্ক্রিপ্ট এবং পোস্টম্যান দিয়ে এপিআই টেস্ট লিখে গিটহাবে অটোমেশন তৈরি করো।',
    estimatedMonths: 5,
    timeframe_en: '4 to 5 Months',
    timeframe_bn: '৪ থেকে ৫ মাস',
    dailyCommitment_en: '2.0 to 2.5 Hours daily (Writing Tests)',
    dailyCommitment_bn: 'প্রতিদিন ২.০ থেকে ২.৫ ঘণ্টা (অটোমেশন স্ক্রিপ্ট অনুশীলন)',
    timelineVerdict_en: '4 to 5 months of hands-on automated testing training allows CST diploma holders to secure QA Automation Engineer and Software Tester positions in Dhaka.',
    timelineVerdict_bn: '৪ থেকে ৫ মাসে অটোমেটেড টেস্টিং শিখে সফটওয়্যার কোম্পানিগুলোতে জুনিয়র কিউএ অটোমেশন ইঞ্জিনিয়ার হিসেবে কাজ শুরু করা সম্ভব।',
    milestones_en: [
      'Month 1 to 2: Software testing lifecycle (STLC), bug reporting, Postman API testing',
      'Month 3 to 4: Modern TypeScript, Playwright E2E browser automation, test assertion design',
      'Month 5: CI/CD integration with GitHub Actions, ISTQB foundation mock exams'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: সফটওয়্যার টেস্টিং লাইফসাইকেল, বাগ রিপোর্ট তৈরি ও পোস্টম্যান এপিআই টেস্ট',
      '৩ থেকে ৪ মাস: টাইপস্ক্রিপ্ট ও প্লে-রাইট দিয়ে ব্রাউজার অটোমেশন স্ক্রিপ্ট তৈরি',
      '৫ম মাস: গিটহাব একশনে টেস্ট অটোমেশন এবং ভাইভা প্রস্তুতি'
    ]
  },

  'it-hardware-support': {
    slug: 'it-hardware-support',
    competitionLevel: 'Low',
    competitionLevel_bn: 'সবচেয়ে কম প্রতিযোগিতা (সব প্রতিষ্ঠানে সরাসরি নিয়োগ)',
    competitors_en: 'Local computer shop mechanics and office assistants without formal engineering education.',
    competitors_bn: 'লোকাল দোকানের টেকনিশিয়ান এবং সাধারণ পিয়ন বা অফিস সহকারী যাদের কোনো প্রাতিষ্ঠানিক কারিগরি ডিগ্রি নেই।',
    degreeGatekeeping_en: 'Zero. A 4-year CST diploma is treated as the premier educational qualification for IT Officers and System Support Staff.',
    degreeGatekeeping_bn: 'একদম শূন্য। যেকোনো ব্যাংক, করপোরেট অফিস বা কারখানায় আইটি অফিসার পদের জন্য ৪ বছরের সিএসটি ডিপ্লোমাকেই সেরা যোগ্যতা বিবেচনা করা হয়।',
    diplomaWinningStrategy_en: 'Combine physical hardware diagnostics (motherboards, RAM, power supplies, thermal paste) with enterprise Windows Active Directory administration, local LAN cabling, and automated printer sharing.',
    diplomaWinningStrategy_bn: 'মাদারবোর্ড, র‍্যাম ও পাওয়ার সাপ্লাই সার্ভিসিংয়ের পাশাপাশি উইন্ডোজ অ্যাক্টিভ ডিরেক্টরি, অফিস ল্যান ক্যাবলিং এবং প্রিন্টার নেটওয়ার্কিং সেটআপে দক্ষতা অর্জন করো।',
    estimatedMonths: 2,
    timeframe_en: '1 to 2 Months',
    timeframe_bn: '১ থেকে ২ মাস',
    dailyCommitment_en: '1.5 to 2.0 Hours daily (Hands-on Fixes)',
    dailyCommitment_bn: 'প্রতিদিন ১.৫ থেকে ২.০ ঘণ্টা (হার্ডওয়্যার ও অপারেটিং সিস্টেম ল্যাব)',
    timelineVerdict_en: 'Immediate local employment in 1 to 2 months. Every bank branch, school, garment factory, and corporate office in Bangladesh needs permanent IT support technicians.',
    timelineVerdict_bn: 'মাত্র ১ থেকে ২ মাসের প্রস্তুতিতেই স্থায়ী চাকরি। দেশের প্রতিটি ব্যাংক শাখা, হাসপাতাল, স্কুল ও পোশাক কারখানায় সার্বক্ষণিক আইটি সাপোর্ট টেকনিশিয়ান প্রয়োজন।',
    milestones_en: [
      'Month 1: PC assembly, component diagnostics, Windows OS installation, driver setups',
      'Month 2: Office LAN crimping, switch setup, printer sharing, Windows Active Directory basics'
    ],
    milestones_bn: [
      '১ম মাস: কম্পিউটার অ্যাসেম্বলি, যন্ত্রাংশ ট্রাবলশুটিং ও উইন্ডোজ ইনস্টলেশন',
      '২য় মাস: অফিস ল্যান ক্যাবল ক্রিপিং, নেটওয়ার্ক প্রিন্টার সেটআপ ও ভাইভা প্রস্তুতি'
    ]
  },

  'ui-ux-design': {
    slug: 'ui-ux-design',
    competitionLevel: 'High',
    competitionLevel_bn: 'উচ্চ প্রতিযোগিতা (পোর্টফোলিওতে স্বাতন্ত্র্য জরুরি)',
    competitors_en: 'Self-taught graphic designers and fine arts graduates who design artistic but technically unfeasible screens.',
    competitors_bn: 'সেলফ-টট গ্রাফিক ডিজাইনার এবং চারুকলার শিক্ষার্থীরা। তবে তাদের অনেকেই এমন ডিজাইন বানান যা কোডিং করে তৈরি করা অবাস্তব।',
    degreeGatekeeping_en: 'Zero. Recruitment in design agencies is 100% determined by your Figma case studies.',
    degreeGatekeeping_bn: 'একদম শূন্য। ডিজাইন এজেন্সিতে কোনো সার্টিফিকেট দেখা হয় না; কেবল তোমার ফিগমা কেস স্টাডি ও প্রোটোটাইপ দেখে নিয়োগ দেওয়া হয়।',
    diplomaWinningStrategy_en: 'Design like a software engineer. Master Figma Auto Layout, Design Systems, component variants, and WCAG accessibility standards. Show before-and-after UX problem solving rather than just pretty colors.',
    diplomaWinningStrategy_bn: 'কোড বোঝে এমন ডিজাইনার হও। ফিগমা অটো-লেআউট, কম্পোনেন্ট ভ্যারিয়েন্ট এবং পূর্ণাঙ্গ ডিজাইন সিস্টেম তৈরি করো। শুধু সুন্দর রঙ নয়, ব্যবহারকারীর আসল সমস্যা সমাধানের কেস স্টাডি উপস্থাপন করো।',
    estimatedMonths: 5,
    timeframe_en: '4 to 6 Months',
    timeframe_bn: '৪ থেকে ৬ মাস',
    dailyCommitment_en: '2.0 to 2.5 Hours daily (Figma Case Studies)',
    dailyCommitment_bn: 'প্রতিদিন ২.০ থেকে ২.৫ ঘণ্টা (ফিগমা ও ইউএক্স রিসার্চ)',
    timelineVerdict_en: '4 to 6 months to craft 3 comprehensive UX case studies and land UI/UX Design positions in product companies.',
    timelineVerdict_bn: '৪ থেকে ৬ মাসে ৩টি পূর্ণাঙ্গ ও বাস্তবসম্মত ইউএক্স কেস স্টাডি তৈরি করতে পারলে দেশীয় প্রোডাক্ট কোম্পানি ও সফটওয়্যার এজেন্সিতে চাকরি পাওয়া নিশ্চিত।',
    milestones_en: [
      'Month 1 to 2: Design principles, typography, grid systems, Figma Auto Layout',
      'Month 3 to 4: Design tokens, responsive components, mobile & desktop wireframing',
      'Month 5 to 6: User research, interactive prototyping, Behance case study portfolio'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: ডিজাইনের মূলনীতি, টাইপোগ্রাফি ও ফিগমা অটো-লেআউট',
      '৩ থেকে ৪ মাস: ডিজাইন সিস্টেম, রেসপনসিভ ইউআই ও ইন্টারেক্টিভ প্রোটোটাইপ',
      '৫ থেকে ৬ মাস: ইউজার ইন্টারভিউ, ৩টি পূর্ণাঙ্গ কেস স্টাডি ও বিহ্যান্স পোর্টফোলিও'
    ]
  },

  'ethical-hacking-bug-bounty': {
    slug: 'ethical-hacking-bug-bounty',
    competitionLevel: 'High (Global)',
    competitionLevel_bn: 'উচ্চ বৈশ্বিক প্রতিযোগিতা',
    competitors_en: 'Global security researchers from India, Russia, Europe, and US hunting vulnerabilities on HackerOne and Bugcrowd.',
    competitors_bn: 'হ্যাকারওয়ান ও বাগক্রাউডে সারা বিশ্বের হাজার হাজার অভিজ্ঞ হ্যাকার প্রতিদিন ত্রুটি খুঁজছেন।',
    degreeGatekeeping_en: 'Zero. Bug bounty platforms and offensive penetration testing teams only care about valid vulnerability disclosures.',
    degreeGatekeeping_bn: 'একদম শূন্য। আন্তর্জাতিক বাগ বাউন্টি প্ল্যাটফর্ম বা সাইবার সিকিউরিটি ফার্মে ডিগ্রি নয়, তোমার সাবমিট করা বৈধ বাগের রিপোর্টই আসল।',
    diplomaWinningStrategy_en: 'Specialize in a high-impact niche: Web Application API security (IDOR, Broken Object Level Authorization, SSRF, Business Logic Flaws) using Burp Suite Pro, asset reconnaissance automation, and well-written vulnerability reports.',
    diplomaWinningStrategy_bn: 'সবকিছু একসঙ্গে না শিখে ওয়েব এপিআই সিকিউরিটিতে স্পেশালাইজ করো: বার্প স্যুট দিয়ে আইডিবাউআর (IDOR), এসএসআরএফ (SSRF) এবং বিজনেস লজিক ত্রুটি শনাক্তকরণে দক্ষ হও।',
    estimatedMonths: 7,
    timeframe_en: '6 to 9 Months',
    timeframe_bn: '৬ থেকে ৯ মাস',
    dailyCommitment_en: '2.5 to 3.5 Hours daily (Vulnerability Hunting)',
    dailyCommitment_bn: 'প্রতিদিন ২.৫ থেকে ৩.৫ ঘণ্টা (ল্যাব ও বাউন্টি হান্টিং)',
    timelineVerdict_en: '6 to 9 months of rigorous lab practice (PortSwigger Web Security Academy) before submitting your first verified international bounty or landing Junior Pentester roles.',
    timelineVerdict_bn: '৬ থেকে ৯ মাস পোর্টসুইগার ওয়েব সিকিউরিটি একাডেমিতে একাগ্র অনুশীলনের পর প্রথম আন্তর্জাতিক বাউন্টি বা জুনিয়র পেনিট্রেশন টেস্টার হিসেবে কাজ শুরু করা সম্ভব।',
    milestones_en: [
      'Month 1 to 3: HTTP protocol, OWASP Top 10, PortSwigger Web Academy apprentice labs',
      'Month 4 to 6: Burp Suite Pro automation, IDOR, SSRF, SQL injection practical exploitation',
      'Month 7 to 9: HackerOne public asset reconnaissance, reporting, junior pentester vivas'
    ],
    milestones_bn: [
      '১ থেকে ৩ মাস: এইচটিটিপি প্রটোকল, ওওয়াস্প শীর্ষ ১০ ও পোর্টসুইগার ল্যাব',
      '৪ থেকে ৬ মাস: বার্প স্যুট প্র্যাকটিস, আইডিবাউআর ও বিজনেস লজিক ত্রুটি নির্ণয়',
      '৭ থেকে ৯ মাস: পাবলিক অ্যাসেট হান্টিং, বাগ রিপোর্ট তৈরি ও ভাইভা প্রস্তুতি'
    ]
  },

  'desktop-app-development': {
    slug: 'desktop-app-development',
    competitionLevel: 'Low',
    competitionLevel_bn: 'কম প্রতিযোগিতা (দোকান ও ফার্মেসির অফলাইন সফটওয়্যার)',
    competitors_en: 'Legacy Windows desktop coders using outdated Visual Basic or old .NET forms.',
    competitors_bn: 'পুরনো ভিজ্যুয়াল বেসিক বা সনাতন .নেট ফর্মের ডেভেলপাররা, যারা আধুনিক টেকনোলজি জানেন না।',
    degreeGatekeeping_en: 'Low. Retail stores, pharmacy chains, and hospitals need fast offline-first software that prints thermal receipts without crashing.',
    degreeGatekeeping_bn: 'কম। সুপারশপ, ফার্মেসি ও ক্লিনিকগুলোর প্রয়োজন বিদ্যুৎ বা ইন্টারনেট ছাড়া চলতে পারে এমন অফলাইন পিওএস সফটওয়্যার।',
    diplomaWinningStrategy_en: 'Build modern, lightweight desktop apps with Tauri (Rust + HTML/TS) or Electron. Implement offline SQLite sync, barcode scanner inputs, and direct thermal printer ESC/POS receipt generation.',
    diplomaWinningStrategy_bn: 'তাউরি (Tauri) বা ইলেকট্রন দিয়ে হালকা ও দ্রুতগতির সফটওয়্যার বানাও। অফলাইন এসকিউলাইট ডেটাবেস, বারকোড স্ক্যানার এবং থার্মাল রসিদ প্রিন্টারের ড্রাইভার যুক্ত করে দেখাও।',
    estimatedMonths: 5,
    timeframe_en: '4 to 6 Months',
    timeframe_bn: '৪ থেকে ৬ মাস',
    dailyCommitment_en: '2.0 to 2.5 Hours daily (Desktop UI & SQLite)',
    dailyCommitment_bn: 'প্রতিদিন ২.০ থেকে ২.৫ ঘণ্টা (অফলাইন পিওএস কোডিং)',
    timelineVerdict_en: '4 to 6 months to build and sell commercial POS applications directly to local businesses or join enterprise software vendors in Bangladesh.',
    timelineVerdict_bn: '৪ থেকে ৬ মাসে বাণিজ্যিক পিওএস সফটওয়্যার তৈরি করে সরাসরি স্থানীয় দোকানে বিক্রি করা অথবা দেশীয় সফটওয়্যার ফার্মে চাকরি নেওয়া সম্ভব।',
    milestones_en: [
      'Month 1 to 2: TypeScript / C# basics, SQLite local database schema & queries',
      'Month 3 to 4: Tauri / Electron UI, offline-first data sync, ESC/POS thermal printing',
      'Month 5 to 6: Barcode scanning, automated installer packaging (.exe/MSI), client demo'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: টাইপস্ক্রিপ্ট বা সি-শার্প বেসিক, অফলাইন এসকিউলাইট ডেটাবেস',
      '৩ থেকে ৪ মাস: তাউরি বা ইলেকট্রন ইউআই এবং থার্মাল ক্যাশ রসিদ প্রিন্ট সিস্টেম',
      '৫ থেকে ৬ মাস: বারকোড রিডার সেটআপ ও কমার্শিয়াল ইনস্টলার তৈরি'
    ]
  },

  'blockchain-web3-developer': {
    slug: 'blockchain-web3-developer',
    competitionLevel: 'High / Global',
    competitionLevel_bn: 'উচ্চ বৈশ্বিক প্রতিযোগিতা',
    competitors_en: 'International remote developers and crypto-native engineers with years of Solidity experience.',
    competitors_bn: 'আন্তর্জাতিক রিমোট ডেভেলপার ও ক্রিপ্টো ইঞ্জিনিয়াররা যারা বহু বছর ধরে সলিডিটি কোডিং করছেন।',
    degreeGatekeeping_en: 'Zero. Web3 protocols and DAOs hire remotely based strictly on audited GitHub smart contract repositories.',
    degreeGatekeeping_bn: 'একদম শূন্য। আন্তর্জাতিক ওয়েব৩ টিমে কোনো ডিগ্রি দেখা হয় না; স্মার্ট কন্ট্রাক্টের নিরাপত্তা ও অডিট রিপোর্টই একমাত্র মাপকাঠি।',
    diplomaWinningStrategy_en: 'Focus obsessively on Smart Contract Security. Master Solidity 0.8+, write automated unit tests using Foundry, protect against reentrancy attacks, and deploy dApps interacting with verified Ethereum or Polygon testnets.',
    diplomaWinningStrategy_bn: 'স্মার্ট কন্ট্রাক্ট সিকিউরিটিতে শতভাগ মনোযোগ দাও: ফাউন্ড্রি (Foundry) দিয়ে সলিডিটি কোড টেস্ট করো, রি-এন্ট্রান্সি আক্রমণ প্রতিরোধ করো এবং টেস্টনেটে লাইভ অ্যাপ চালাও।',
    estimatedMonths: 8,
    timeframe_en: '7 to 9 Months',
    timeframe_bn: '৭ থেকে ৯ মাস',
    dailyCommitment_en: '3.0 Hours daily (Solidity & Foundry)',
    dailyCommitment_bn: 'প্রতিদিন ৩.০ ঘণ্টা (স্মার্ট কন্ট্রাক্ট ও সিকিউরিটি ল্যাব)',
    timelineVerdict_en: '7 to 9 months of rigorous smart contract testing and development to land international remote grants or Junior Web3 Engineer positions.',
    timelineVerdict_bn: '৭ থেকে ৯ মাসের গভীর অনুশীলনে আন্তর্জাতিক ওয়েব৩ কমিউনিটি থেকে রিমোট প্রজেক্ট ও জুনিয়র কন্ট্রাক্ট ডেভেলপার হিসেবে কাজ পাওয়া সম্ভব।',
    milestones_en: [
      'Month 1 to 2: Ethereum virtual machine (EVM), Solidity syntax, ERC20 tokens',
      'Month 3 to 5: Foundry smart contract testing, OpenZeppelin security standards, Hardhat',
      'Month 6 to 9: Decentralized frontend with Wagmi/Viem, security auditing practice'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: ইথেরিয়াম ভার্চুয়াল মেশিন, সলিডিটি কোড ও ইআরসি-২০ টোকেন',
      '৩ থেকে ৫ মাস: ফাউন্ড্রি দিয়ে টেস্ট অটোমেশন ও ওপেনজেপেলিন সিকিউরিটি',
      '৬ থেকে ৯ মাস: ডিসেন্ট্রালাইজড ওয়েব অ্যাপ তৈরি ও অডিট পোর্টফোলিও'
    ]
  },

  'game-development-unity': {
    slug: 'game-development-unity',
    competitionLevel: 'Moderate to High',
    competitionLevel_bn: 'মাঝারি থেকে উচ্চ প্রতিযোগিতা',
    competitors_en: 'Indie hobbyists and passionate gamers who often fail to finish complete, optimized playable games.',
    competitors_bn: 'শখের বসে গেম বানাতে আসা গেমাররা, তবে তাদের অধিকাংশই অসম্পূর্ণ প্রজেক্টে আটকে যান।',
    degreeGatekeeping_en: 'Low. Game studios in Dhaka judge applicants purely on playable builds.',
    degreeGatekeeping_bn: 'কম। দেশের গেম স্টুডিওগুলো কেবল তোমার বানানো গেমটি নিজেরা খেলে দেখে সিদ্ধান্ত নেয়।',
    diplomaWinningStrategy_en: 'Finish 2 small, highly polished mobile games with complete game loops, sound effects, particle systems, and Google Play Store exports, rather than dreaming of an unfinished giant multiplayer game.',
    diplomaWinningStrategy_bn: 'বিশাল ড্রিম গেমের পেছনে না ছুটে ২টি ছোট কিন্তু নিখুঁত মোবাইল গেম শেষ করো। সাউন্ড, লেভেল কমপ্লিশন ও অপ্টিমাইজড অ্যান্ড্রয়েড এপিকে বানিয়ে দেখাও।',
    estimatedMonths: 7,
    timeframe_en: '6 to 8 Months',
    timeframe_bn: '৬ থেকে ৮ মাস',
    dailyCommitment_en: '2.5 to 3.0 Hours daily (Unity & C#)',
    dailyCommitment_bn: 'প্রতিদিন ২.৫ থেকে ৩.০ ঘণ্টা (ইউনিটি ও সি-শার্প স্ক্রিপ্টিং)',
    timelineVerdict_en: '6 to 8 months to build 2 published playable prototypes and join local game development studios as a Junior Unity Programmer.',
    timelineVerdict_bn: '৬ থেকে ৮ মাসের সাধনায় ২টি প্লে-যোগ্য গেম বানিয়ে দেশের শীর্ষ গেম স্টুডিওগুলোতে জুনিয়র ইউনিটি প্রোগ্রামার হিসেবে চাকরি নেওয়া যায়।',
    milestones_en: [
      'Month 1 to 2: C# OOP programming, Unity Editor interface, 2D physics & sprites',
      'Month 3 to 5: UI menus, audio managers, particle effects, mobile touch controls',
      'Month 6 to 8: Android APK optimization, AdMob integration, itch.io playable demos'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: সি-শার্প কোডিং, ইউনিটি ইন্টারফেস ও ২ডি ফিজিক্স ইঞ্জিন',
      '৩ থেকে ৪ মাস: ইউআই মেনু, সাউন্ড ইফেক্ট ও মোবাইল টাচ কন্ট্রোল সিস্টেম',
      '৫ থেকে ৮ মাস: অ্যান্ড্রয়েড এপিকে অপ্টিমাইজেশন ও প্লে-স্টোরে লাইভ গেম'
    ]
  },

  'digital-marketing-ecommerce': {
    slug: 'digital-marketing-ecommerce',
    competitionLevel: 'Very High',
    competitionLevel_bn: 'খুবই বেশি প্রতিযোগিতা (টেকনিক্যাল মার্কেটিং জরুরি)',
    competitors_en: 'Thousands of general social media boosters and informal freelancers with basic Facebook boost experience.',
    competitors_bn: 'ফেসবুক পেজ বুস্ট করা হাজার হাজার সাধারণ ফ্রিল্যান্সার।',
    degreeGatekeeping_en: 'Zero. Performance and return on ad spend (ROAS) are all that matter.',
    degreeGatekeeping_bn: 'একদম শূন্য। বিজ্ঞাপনের লাভজনক ফলাফল ও সেলস এনে দেওয়াই একমাত্র যোগ্যতা।',
    diplomaWinningStrategy_en: 'Stand out through Technical Marketing: implement Meta Conversions API (CAPI) server-side tracking, Google Tag Manager server containers, GA4 event architecture, and Shopify/WooCommerce conversion optimization.',
    diplomaWinningStrategy_bn: 'সাধারণ বুস্টার না হয়ে টেকনিক্যাল মার্কেটার হও: মেটা কনভার্শন এপিআই (CAPI) সার্ভার-সাইড ট্র্যাকিং, গুগল ট্যাগ ম্যানেজার ও জিএ৪ ইভেন্ট ট্র্যাকিংয়ে দক্ষ হও।',
    estimatedMonths: 4,
    timeframe_en: '3 to 4 Months',
    timeframe_bn: '৩ থেকে ৪ মাস',
    dailyCommitment_en: '2.0 Hours daily (Ad Analytics & Funnels)',
    dailyCommitment_bn: 'প্রতিদিন ২.০ ঘণ্টা (অ্যাডস অ্যানালিটিক্স ও ট্র্যাকিং ল্যাব)',
    timelineVerdict_en: '3 to 4 months to master technical ad tracking and run profitable acquisition campaigns for e-commerce brands in Bangladesh.',
    timelineVerdict_bn: '৩ থেকে ৪ মাসে সার্ভার ট্র্যাকিং ও ডেটা-ড্রিভেন মার্কেটিং শিখে ই-কমার্স প্রতিষ্ঠানে গ্রোথ মার্কেটার হিসেবে কাজ শুরু করা যায়।',
    milestones_en: [
      'Month 1: Google Analytics 4 (GA4), Google Tag Manager, event triggers',
      'Month 2: Meta Ads Manager, CAPI server-side tracking, pixel troubleshooting',
      'Month 3 to 4: E-commerce conversion rate optimization (CRO), ROAS dashboarding'
    ],
    milestones_bn: [
      '১ম মাস: গুগল অ্যানালিটিক্স ৪ (GA4) ও গুগল ট্যাগ ম্যানেজার সেটআপ',
      '২য় মাস: মেটা অ্যাডস ম্যানেজার ও সিএপিআই (CAPI) সার্ভার ট্র্যাকিং',
      '৩ থেকে ৪ মাস: ই-কমার্স সেলস ফানেল তৈরি ও রিটার্ন অন ইনভেস্টমেন্ট বৃদ্ধি'
    ]
  },

  'graphic-design-motion': {
    slug: 'graphic-design-motion',
    competitionLevel: 'Very High',
    competitionLevel_bn: 'খুবই বেশি প্রতিযোগিতা (মোশন ডিজাইনে বড় সুযোগ)',
    competitors_en: 'Tens of thousands of static banner designers in Bangladesh.',
    competitors_bn: 'দেশের লক্ষাধিক স্ট্যাটিক ব্যানার ও পোস্টার ডিজাইনার।',
    degreeGatekeeping_en: 'Zero. Visual showreel and creative portfolio dictate hiring.',
    degreeGatekeeping_bn: 'একদম শূন্য। তোমার ভিডিও শোরিল ও ডিজাইনের আকর্ষণীয় উপস্থাপনাই যথেষ্ট।',
    diplomaWinningStrategy_en: 'Escape the saturated static banner market. Specialize in Motion Graphics (Adobe After Effects) and interactive Lottie animations for mobile apps and modern SaaS landing pages.',
    diplomaWinningStrategy_bn: 'স্থির ব্যানারের ভিড় ছেড়ে মোশন গ্রাফিক্সে এসো: আফটার ইফেক্টস এবং ওয়েবসাইট বা মোবাইল অ্যাপের জন্য ইন্টারেক্টিভ লটি (Lottie) অ্যানিমেশন তৈরিতে পারদর্শী হও।',
    estimatedMonths: 5,
    timeframe_en: '4 to 5 Months',
    timeframe_bn: '৪ থেকে ৫ মাস',
    dailyCommitment_en: '2.0 to 2.5 Hours daily (Animation Practice)',
    dailyCommitment_bn: 'প্রতিদিন ২.০ থেকে ২.৫ ঘণ্টা (আফটার ইফেক্টস ও ইলাস্ট্রেশন)',
    timelineVerdict_en: '4 to 5 months of motion graphic practice prepares you for agency motion design and tech startup marketing roles.',
    timelineVerdict_bn: '৪ থেকে ৫ মাসের মোশন গ্রাফিক্স চর্চায় দেশের অ্যাডভার্টাইজিং এজেন্সি ও টেক কোম্পানিতে মোশন ডিজাইনার হিসেবে ভালো বেতনে কাজ শুরু করা যায়।',
    milestones_en: [
      'Month 1 to 2: Adobe Illustrator vector asset creation, typography rules',
      'Month 3: Adobe After Effects keyframing, speed curves, kinetic typography',
      'Month 4 to 5: 30-second motion showreel, Lottie web animations, Behance portfolio'
    ],
    milestones_bn: [
      '১ থেকে ২ মাস: ইলাস্ট্রেটরে ভেক্টর আর্ট ও ব্র্যান্ড কালার তৈরি',
      '৩য় মাস: আফটার ইফেক্টস কি-ফ্রেম, স্পিড গ্রাফ ও টাইপোগ্রাফি অ্যানিমেশন',
      '৪ থেকে ৫ মাস: ৩০ সেকেন্ডের প্রফেশনাল শোরিল ও বিহ্যান্স শোকেস'
    ]
  },

  'bpo-tech-support-data': {
    slug: 'bpo-tech-support-data',
    competitionLevel: 'Moderate',
    competitionLevel_bn: 'মাঝারি প্রতিযোগিতা (ইংরেজি ও টাইপিং প্রধান)',
    competitors_en: 'General college and university students seeking customer support or data entry jobs.',
    competitors_bn: 'সাধারণ কলেজ ও বিশ্ববিদ্যালয়ের শিক্ষার্থীরা যারা পার্ট-টাইম কল সেন্টার বা ডেটা এন্ট্রি কাজ করতে চান।',
    degreeGatekeeping_en: 'Zero. Clear spoken English communication and touch typing speed (40+ WPM) decide selection.',
    degreeGatekeeping_bn: 'একদম শূন্য। শুদ্ধ ও সাবলীল স্পোকেন ইংরেজি এবং মিনিটে ৪০+ শব্দের টাইপিং স্পিড থাকলেই সরাসরি অফার লেটার পাওয়া যায়।',
    diplomaWinningStrategy_en: 'Combine fluent conversational English with enterprise ticketing CRM tools (Zendesk, Freshdesk), Google Sheets pivot tables, and professional email etiquette.',
    diplomaWinningStrategy_bn: 'ভালো ইংরেজির সাথে জেনডেস্ক বা ফ্রেশডেস্কের মতো সফটওয়্যার এবং এক্সেলে দ্রুত রিপোর্ট তৈরির দক্ষতা অর্জন করে আন্তর্জাতিক বিপিও প্রতিষ্ঠানে আবেদন করো।',
    estimatedMonths: 3,
    timeframe_en: '2 to 3 Months',
    timeframe_bn: '২ থেকে ৩ মাস',
    dailyCommitment_en: '2.0 Hours daily (Spoken Practice & Typing)',
    dailyCommitment_bn: 'প্রতিদিন ২.০ ঘণ্টা (স্পোকেন ইংরেজি ও টাইপিং প্র্যাকটিস)',
    timelineVerdict_en: '2 to 3 months to train spoken fluency and land international BPO or technical customer support executive jobs in Dhaka.',
    timelineVerdict_bn: '২ থেকে ৩ মাস টানা স্পোকেন ও লিসেনিং প্র্যাকটিস করলে ঢাকার আন্তর্জাতিক বিপিও সেন্টারগুলোতে ২৫ থেকে ৩৫ হাজার টাকা বেতনে কাজ শুরু করা সম্ভব।',
    milestones_en: [
      'Month 1: Touch typing (40+ WPM), business email drafting, customer tone',
      'Month 2: Zendesk CRM practice, call handling scripts, live mock scenarios',
      'Month 3: Walk-in interviews at Dhaka BPO firms (Genex, Digicon, Augmedix)'
    ],
    milestones_bn: [
      '১ম মাস: টাচ টাইপিং গতি বৃদ্ধি ও প্রফেশনাল ইমেইল লেখার নিয়ম',
      '২য় মাস: জেনডেস্ক সিআরএম ও গ্রাহক সেবার আন্তর্জাতিক স্ক্রিপ্ট মক টেস্ট',
      '৩য় মাস: ঢাকার প্রধান প্রধান বিপিও কোম্পানিতে সরাসরি ইন্টারভিউ'
    ]
  },

  'digital-literacy-foundation': {
    slug: 'digital-literacy-foundation',
    competitionLevel: 'Foundational Bridge',
    competitionLevel_bn: 'প্রাথমিক ভিত্তি তৈরি (কোনো প্রতিযোগিতা নেই)',
    competitors_en: 'You are competing with no one. This is a 30-day confidence-building bridge before you transition into one of the 23 technical career tracks.',
    competitors_bn: 'এখানে কারও সাথে প্রতিযোগিতা নেই। এটি হলো কম্পিউটারের ভয় দূর করে পরবর্তী ২৩টি প্রফেশনাল ট্র্যাকে আত্মবিশ্বাসের সাথে প্রবেশের ৩০ দিনের প্রস্তুতি।',
    degreeGatekeeping_en: 'Zero.',
    degreeGatekeeping_bn: 'একদম শূন্য।',
    diplomaWinningStrategy_en: 'Build 35+ WPM typing speed, learn proper Windows/Linux filesystem management, master Git version control fundamentals, and transition into your primary career track within 30 days.',
    diplomaWinningStrategy_bn: 'কিবোর্ডে না তাকিয়ে মিনিটে ৩৫ শব্দের টাইপিং গতি অর্জন করো, উইন্ডোজ ও লিনাক্স ফাইল ম্যানেজমেন্ট শেখো এবং ৩০ দিনের মধ্যে নিজের পছন্দের ক্যারিয়ার ট্র্যাক শুরু করো।',
    estimatedMonths: 1,
    timeframe_en: '1 Month',
    timeframe_bn: '১ মাস (ফাউন্ডেশন ব্রিজ)',
    dailyCommitment_en: '1.5 to 2.0 Hours daily (Keyboard & Basics)',
    dailyCommitment_bn: 'প্রতিদিন ১.৫ থেকে ২.০ ঘণ্টা (কিবোর্ড ও কম্পিউটার বেসিক)',
    timelineVerdict_en: 'A focused 30-day bridge to build keyboard muscle memory and technical curiosity before choosing your professional roadmap.',
    timelineVerdict_bn: '৩০ দিনের কার্যকর অনুশীলনে কম্পিউটারের ভয় দূর করে পরবর্তী প্রফেশনাল রোড়ম্যাপে সফলভাবে প্রবেশের সেরা সূচনা।',
    milestones_en: [
      'Week 1 to 2: Touch typing training (35+ WPM), computer anatomy, OS navigation',
      'Week 3 to 4: Git version control basics, web research skills, choosing your career track'
    ],
    milestones_bn: [
      '১ থেকে ২ সপ্তাহ: টাচ টাইপিং প্র্যাকটিস ও কম্পিউটার ওএস নেভিগেশন',
      '৩ থেকে ৪ সপ্তাহ: গিট বেসিক ও নিজের মূল ক্যারিয়ার ট্র্যাক চূড়ান্ত করা'
    ]
  }
};

export function getTrackVerdict(slug?: string): TrackVerdictInfo {
  if (slug && TRACK_VERDICTS[slug]) {
    return TRACK_VERDICTS[slug];
  }
  return TRACK_VERDICTS['frontend-fullstack-web'];
}
