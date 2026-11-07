import type { CareerTrack } from '../../../shared/types.js';

export const linuxDevopsAdminTrack: Omit<CareerTrack, 'id'> = {
  slug: 'linux-devops-admin',
  title_en: 'Server Administration, Linux and DevOps',
  title_bn: 'সার্ভার অ্যাডমিনিস্ট্রেশন, লিনাক্স ও ডেভঅপ্স',
  summary_en: 'Linux command-line mastery, Nginx web servers, Docker containerization, Bash scripting, system monitoring, cloud VPS hosting, and CI/CD automation.',
  summary_bn: 'লিনাক্স টার্মিনাল কমান্ড, এনজিনএক্স (Nginx) ওয়েব সার্ভার, ডকার কনটেইনার, ব্যাশ অটোমেশন ও ক্লাউড সার্ভার ব্যবস্থাপনার পূর্ণাঙ্গ ট্র্যাক।',
  pivotAdvice_en: 'If you love terminals, black screens, server architecture, and operating systems over visual frontend pixels, Linux administration and DevOps have incredible long-term market demand and high salary ceilings in Dhaka and internationally.',
  pivotAdvice_bn: 'তুমি যদি স্ক্রিনের রঙ বা বাটনের চেয়ে টার্মিনাল, কালো স্ক্রিনের কমান্ড ও সার্ভার কনফিগারেশনে রোমাঞ্চ খুঁজে পাও, তবে লিনাক্স ও ডেভঅপ্স ট্র্যাক তোমার জন্য সেরা। দেশীয় সফটওয়্যার ফার্ম ও ব্যাংকগুলোতে এর বেতন অন্য যেকোনো পদের চেয়ে দ্রুত বাড়ে।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Managing Ubuntu/Debian production servers over SSH with public key authentication.',
    'Configuring Nginx as reverse proxy with Let\'s Encrypt automated SSL certificate renewals.',
    'Containerizing full-stack microservices with Docker, Docker Compose, and optimizing multi-stage builds.',
    'Writing Bash shell scripts to automate database backups, disk cleanups, and cron jobs.',
    'Monitoring CPU loads, memory leaks, and disk I/O metrics with htop, Prometheus, and Grafana.'
  ],
  dayToDay_bn: [
    'নিরাপদ এসএসএইচ (SSH) দিয়ে উবুন্টু ক্লাউড সার্ভারে লগইন ও ফাইল পরিচালনা করা।',
    'এনজিনএক্স (Nginx) রিভার্স প্রক্সি কনফিগার করা এবং ফ্রি এসএসএল সার্টিফিকেট সেট করা।',
    'ডকার দিয়ে অ্যাপ্লিকেশন কনটেইনারাইজ করা ও ডকার কম্পোজ দিয়ে সার্ভিস পরিচালনা।',
    'ব্যাশ (Bash) স্ক্রিপ্ট ও ক্রনজব দিয়ে স্বয়ংক্রিয় ডেটাবেস ব্যাকআপ তৈরি করা।',
    'সার্ভারের র‍্যাম, সিপিইউ ও ডিস্কের ব্যবহার পর্যবেক্ষণ করে যেকোনো ক্র্যাশ প্রতিরোধ করা।'
  ],
  mustHaveSkills: [
    {
      id: 'linux-terminal-cli',
      name: 'Linux Shell Mastery (Bash)',
      category: 'Operating System',
      importance: 'Essential',
      description_en: 'File permissions (chmod, chown), grep, awk, sed, systemctl, journalctl, and process management.',
      description_bn: 'ফাইল পারমিশন, প্রসেস নিয়ন্ত্রণ, সিস্টেমডি সার্ভিস ও টার্মিনাল পাইপিং।'
    },
    {
      id: 'nginx-reverse-proxy',
      name: 'Nginx Web Server and SSL',
      category: 'Web Servers',
      importance: 'Essential',
      description_en: 'Server blocks, upstream load balancing, reverse proxying Node/Python ports, and Certbot automation.',
      description_bn: 'এনজিনএক্স দিয়ে ব্যাকএন্ড পোর্ট ফরোয়ার্ড করা ও ফ্রি এসএসএল অটোমেশন।'
    },
    {
      id: 'docker-containers',
      name: 'Docker and Containerization',
      category: 'DevOps',
      importance: 'Essential',
      description_en: 'Writing Dockerfiles, managing volumes, container networking, and docker-compose orchestration.',
      description_bn: 'ডকারফাইল তৈরি, পারসিস্টেন্ট ভলিউম এবং মাল্টি-কনটেইনার কম্পোজ পরিচালনা।'
    },
    {
      id: 'cloud-vps-hosting',
      name: 'Cloud VPS Management and Security',
      category: 'Cloud',
      importance: 'Essential',
      description_en: 'Configuring UFW firewalls, fail2ban, disabling SSH root passwords, and managing DigitalOcean/AWS instances.',
      description_bn: 'ক্লাউড ভিপিএস ফায়ারওয়াল, ব্রুট-ফোর্স হ্যাক প্রতিরোধ ও সার্ভার সিকিউরিটি হার্ডেনিং।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Software parks and Corporate Data Centers)',
      entrySalary: { min: 25000, max: 45000, currency: 'BDT', formatted: '25,000 - 45,000 BDT' },
      midSalary: { min: 60000, max: 120000, currency: 'BDT', formatted: '60,000 - 120,000 BDT' },
      seniorSalary: { min: 140000, max: 280000, currency: 'BDT', formatted: '140,000 - 280,000 BDT' },
      hiringSectors: [
        'Fintech Platforms, Commercial Banks, and Payment Gateways (bKash, Nagad, SSLCOMMERZ)',
        'Cloud Hosting Providers and Managed Service Providers in Bangladesh',
        'Large Tech Export Firms (Therap, Brain Station 23, Kona Software)'
      ],
      cvExpectations: [
        'Fluent terminal navigation and practical experience hosting real apps on Linux',
        'Demonstrated ability to write Dockerfiles and automate server backups with Bash',
        'Understanding of system security: SSH hardening, UFW firewalls, and fail2ban',
        'Diploma in CST with hands-on lab demonstration during technical interview'
      ],
      localDemandSummary_en: 'Every software company with paying customers needs system engineers to keep servers from crashing. Because few college students master Linux, competent CST graduates with terminal skills face very low hiring competition.',
      localDemandSummary_bn: 'সবাই যখন সাধারণ কোডিংয়ের পেছনে ছোটে, তখন লিনাক্স জানা শিক্ষার্থীর সংখ্যা থাকে হাতেগোনা। তাই যারা টার্মিনাল ও ক্লাউড সার্ভার ভালোভাবে শেখে, সফটওয়্যার কোম্পানিগুলো তাদের লুফে নেয়।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'United Arab Emirates and Saudi Arabia',
        countryName_bn: 'সংযুক্ত আরব আমিরাত ও সৌদি আরব',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ',
        visaReality_en: 'Massive government digitisation initiatives in Riyadh and Dubai actively sponsor Linux system administrators and cloud engineers with RHCSA or AWS certifications.',
        visaReality_bn: 'সৌদি আরবের ভিশন ২০৩০ ও দুবাইয়ের স্মার্ট সিটি প্রজেক্টে লিনাক্স সিস্টেম অ্যাডমিনদের প্রচুর স্পনসরশিপ ভিসা দেওয়া হয়।',
        averageSalaryUsdOrLocal: '12,000 - 22,000 AED / month (approx 380,000 - 700,000 BDT)',
        requiredExperienceYears: '3+ years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$800 - $3,500 / month',
      competitionLevel: 'Moderate to high, won through Docker, Kubernetes, and Terraform automation skills',
      competitionLevel_bn: 'ডকার ও ক্লাউড অটোমেশনের মাধ্যমে রিমোট আন্তর্জাতিক কাজ পাওয়া যায়',
      englishRequirement: 'Fluent written technical communication for incident postmortems and Jira tickets',
      englishRequirement_bn: 'সার্ভার ইনসিডেন্ট রিপোর্ট ও চ্যাট কমিউনিকেশনের জন্য স্পষ্ট ইংরেজি জানা জরুরি',
      realities_en: [
        'DevOps is 100% remote-friendly because server infrastructure exists entirely in the cloud',
        'On-call rotations require rapid responsiveness when alerts trigger'
      ],
      realities_bn: [
        'ক্লাউড সার্ভার শতভাগ অনলাইনে থাকায় বিশ্বজুড়ে বসে রিমোট জব করা একদম স্বাভাবিক',
        'কোনো সার্ভার ডাউন হলে দ্রুত নোটিশে সমাধানের মানসিকতা থাকতে হয়'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Linux CLI and Shell Mastery',
      phaseTitle_bn: 'প্রথম পর্ব: লিনাক্স টার্মিনাল ও কমান্ড লাইন দক্ষতা',
      phaseSubtitle_en: 'Day 1 to 30: File management, permissions, users, and process monitoring.',
      phaseSubtitle_bn: '১ থেকে ৩০ দিন: লিনাক্স ফাইল সিস্টেম, পারমিশন, ইউজার ম্যানেজমেন্ট ও কমান্ড।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-linux-commands',
          title_en: 'Essential Linux Command-Line Drills',
          title_bn: 'লিনাক্স প্রয়োজনীয় কমান্ড ও ফাইল অপারেশনস',
          description_en: 'grep, find, tar, rsync, tail -f, head, piping, and managing file ownership with chmod and chown.',
          description_bn: 'সার্ভারের ফাইল খোঁজা, টেক্সট ফিল্টার করা, কম্প্রেস করা ও ফাইল পারমিশন নিয়ন্ত্রণ।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Linux directory hierarchy', 'Standard input, output, and redirection (> and |)', 'File permissions 755 vs 644'],
          practicalTask_en: 'Install Ubuntu inside VirtualBox or Termux and execute 30 core terminal administrative exercises.',
          practicalTask_bn: 'টার্মাক্স বা ভার্চুয়াল মেশিনে উবুন্টু চালিয়ে ৩০টি কোর লিনাক্স কমান্ড অনুশীলন সম্পন্ন করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: Nginx Web Server, DNS and Hardening',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: এনজিনএক্স ওয়েব সার্ভার ও সিকিউরিটি হার্ডেনিং',
      phaseSubtitle_en: 'Day 31 to 60: Domain records, reverse proxying, UFW, and SSL encryption.',
      phaseSubtitle_bn: '৩১ থেকে ৬০ দিন: ডোমেইন ডিএনএস, রিভার্স প্রক্সি, ফায়ারওয়াল ও এসএসএল সার্টিফিকেট।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-nginx-proxy',
          title_en: 'Nginx Configuration and Automated Certbot SSL',
          title_bn: 'এনজিনএক্স রিভার্স প্রক্সি ও লেটস-এনক্রিপ্ট এসএসএল',
          description_en: 'Routing domains to specific local ports, custom error pages, and Let\'s Encrypt automatic renewal cron.',
          description_bn: 'ডোমেইন দিয়ে লোকাল পোর্টে ট্রাফিক পাঠানো এবং ফ্রি এসএসএল লক নিশ্চিত করা।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['Nginx sites-available and sites-enabled', 'Reverse proxy directives', 'Certbot automation'],
          practicalTask_en: 'Point a real domain to a live Linux VPS and serve an application through Nginx with HTTPS enabled.',
          practicalTask_bn: 'একটি ক্লাউড সার্ভারে এনজিনএক্স ও ফ্রি এসএসএল দিয়ে একটি লাইভ ওয়েব অ্যাপ্লিকেশন হোস্ট করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: Docker and Container Orchestration',
      phaseTitle_bn: 'তৃতীয় পর্ব: ডকার ও কনটেইনার প্রযুক্তি',
      phaseSubtitle_en: 'Day 61 to 90: Dockerfiles, Docker Compose, persistent volumes, and networking.',
      phaseSubtitle_bn: '৬১ থেকে ৯০ দিন: ডকারফাইল, ডকার কম্পোজ, ভলিউম ব্যাকআপ ও কনটেইনার নেটওয়ার্ক।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-docker-compose-stack',
          title_en: 'Containerizing Applications with Docker and Compose',
          title_bn: 'ডকার কম্পোজ দিয়ে পূর্ণাঙ্গ স্ট্যাক পরিচালনা',
          description_en: 'Running Node/React apps connected to PostgreSQL and Redis containers with persistent volume mounts.',
          description_bn: 'অ্যাপ্লিকেশন, ডেটাবেস ও ক্যাশ সার্ভিসকে একটিমাত্র ডকার কম্পোজ ফাইল দিয়ে রান করা।',
          estimatedDays: 18,
          mobileAccessible: false,
          keyTopics: ['Multi-stage Docker builds', 'Named volumes vs bind mounts', 'Docker container logs'],
          practicalTask_en: 'Write a docker-compose.yml file that launches an Express API and a PostgreSQL database seamlessly.',
          practicalTask_bn: 'একটি এক্সপ্রেস এপিআই ও পোস্টগ্রেসকিউএল ডেটাবেসের জন্য সমন্বিত ডকার কম্পোজ ফাইল তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: Bash Automation and DevOps Interviews',
      phaseTitle_bn: 'চতুর্থ পর্ব: ব্যাশ অটোমেশন ও সিস্টেম ইঞ্জিনিয়ারিং ভাইভা',
      phaseSubtitle_en: 'Day 91 to 120: Automated shell backup scripts and Linux technical interviews.',
      phaseSubtitle_bn: '৯১ থেকে ১২০ দিন: স্বয়ংক্রিয় ব্যাকআপ স্ক্রিপ্ট ও লিনাক্স অ্যাডমিন ইন্টারভিউ প্রস্তুতি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-bash-backup-script',
          title_en: 'Automating Database Backups with Bash Scripts',
          title_bn: 'ব্যাশ স্ক্রিপ্ট দিয়ে ডেটাবেস অটো-ব্যাকআপ তৈরি',
          description_en: 'Writing shell scripts with variables, if/else conditions, pg_dump, tar compression, and cron scheduling.',
          description_bn: 'প্রতিদিন রাত ২টায় স্বয়ংক্রিয়ভাবে ডেটাবেসের ব্যাকআপ নিয়ে গুগল ড্রাইভে পাঠানোর স্ক্রিপ্ট তৈরি।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Bash script shebang and error handling (set -e)', 'Crontab scheduling', 'pg_dump automation'],
          practicalTask_en: 'Build and deploy a Bash script that runs nightly via cron and rotates older backup files.',
          practicalTask_bn: 'একটি কার্যকর ব্যাশ স্ক্রিপ্ট লেখ যা পুরোনো ব্যাকআপ স্বয়ংক্রিয়ভাবে মুছে সার্ভারের জায়গা বাঁচাবে।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'lx-q1',
      question_en: 'What is the difference between a Hard Link and a Soft Link (Symlink) in Linux?',
      question_bn: 'লিনাক্সে হার্ড লিংক (Hard Link) এবং সফট লিংকের (Soft Link/Symlink) মধ্যে মূল পার্থক্য কী?',
      category: 'Linux Architecture',
      whyAsked_en: 'Classic Linux fundamentals question testing candidate understanding of inodes.',
      whyAsked_bn: 'লিনাক্সের ইনোড (Inode) ও ফাইল সিস্টেমের গভীর বোঝাপড়া যাচাই করতে।',
      howToAnswer_en: 'A Hard Link points directly to the file inode on the filesystem; deleting the original file does not delete the data as long as a hard link exists. Hard links cannot span across different partitions. A Soft Link (Symlink) points to the file path like a Windows shortcut; if the original target file is deleted or moved, the symlink breaks.',
      howToAnswer_bn: 'হার্ড লিংক সরাসরি ফাইলের ইনোডে পয়েন্ট করে, তাই মূল ফাইল ডিলিট হলেও হার্ড লিংক দিয়ে ডেটা অক্ষত থাকে। এটি ভিন্ন ড্রাইভ বা পার্টিশনে কাজ করে না। আর সফট লিংক হলো শর্টকাটের মতো যা ফাইলের পাথে নির্দেশ করে, মূল ফাইল মুছে ফেললে সফট লিংকটি অকেজো হয়ে যায়।',
      commonMistakes_en: 'Confusing symlinks with duplicate file copies or not knowing about inodes.',
      commonMistakes_bn: 'সফট লিংককে ফাইলের কপি বা ক্লোন মনে করা।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-linux-foundation-free',
      title_en: 'Introduction to Linux (LFS101x)',
      title_bn: 'ইন্ট্রোডাকশন টু লিনাক্স ভেরিফায়েড ফ্রি কোর্স',
      provider: 'The Linux Foundation (edX)',
      url: 'https://www.edx.org/course/introduction-to-linux',
      mobileAccessible: true,
      language: 'en',
      durationHours: 35,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official curriculum from the Linux Foundation covering Linux architecture, shells, and administration.',
      relevance_bn: 'লিনাক্স ফাউন্ডেশনের অফিশিয়াল ফ্রি কোর্স যা বিশ্বজুড়ে গ্রহণযোগ্য।'
    },
    {
      id: 'cert-aws-cloud-practitioner',
      title_en: 'AWS Cloud Practitioner Essentials',
      title_bn: 'এডব্লিউএস ক্লাউড প্র্যাকটিশনার এসেনশিয়ালস ভেরিফায়েড ব্যাজ',
      provider: 'AWS Skill Builder',
      url: 'https://explore.skillbuilder.aws/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 12,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official Amazon Web Services foundational cloud computing credential proving understanding of cloud security, storage, and EC2.',
      relevance_bn: 'অ্যামাজনের অফিশিয়াল ক্লাউড ফান্ডামেন্টালস সার্টিফিকেট যা ক্লাউড জবে বড় অগ্রাধিকার দেয়।'
    },
    {
      id: 'cert-edge-ict-devops',
      title_en: 'EDGE ICT Cloud & Cybersecurity Training Certificate',
      title_bn: 'এজ আইসিটি ক্লাউড ও সাইবারসিকিউরিটি সরকারি সার্টিফিকেট',
      provider: 'ICT Division Bangladesh',
      url: 'https://edge.gov.bd/',
      mobileAccessible: false,
      language: 'both',
      durationHours: 80,
      cost: 'BD Gov 100% Free',
      isBdLocal: true,
      category: 'bd_national',
      relevance_en: 'Bangladesh ICT Division initiative providing hands-on cloud and Linux training for polytechnic engineers.',
      relevance_bn: 'বাংলাদেশ আইসিটি ডিভিশন পরিচালিত সম্পূর্ণ বিনামূল্যে লিনাক্স ও ক্লাউড প্রশিক্ষণ সনদ।'
    }
  ]
};
