import type { CareerTrack } from '../../../shared/types.js';

export const linuxDevopsAdminTrack: Omit<CareerTrack, 'id'> = {
  slug: 'linux-devops-admin',
  title_en: 'Server Administration, Linux Engineering & DevOps (2026 Edition)',
  title_bn: 'সার্ভার অ্যাডমিনিস্ট্রেশন, লিনাক্স ইঞ্জিনিয়ারিং ও ডেভঅপ্স (২০২৬ এডিশন)',
  summary_en: 'Calibrated for late 2026. Master Ubuntu 24.04 LTS, Docker containerization, OpenTofu / Terraform Infrastructure as Code, automated GitHub Actions CI/CD pipelines, Nginx/Caddy reverse proxies, and Prometheus/Grafana observability.',
  summary_bn: '২০২৬ সালের আধুনিক লিনাক্স ও ডেভঅপ্স চাহিদা অনুযায়ী সাজানো। উবুন্টু ২৪.০৪ এলটিএস, ডকার কনটেইনার, ওপেন-টোফু ইনফ্রাস্ট্রাকচার-অ্যাজ-কোড, গিটহাব একশনস সিআই/সিডি অটোমেশন এবং প্রমিথিউস-গ্রাফানা মনিটরিং।',
  pivotAdvice_en: 'In 2026, writing a simple one-line Dockerfile or Bash script is solved instantly by AI. Cloud infrastructure and software export companies in Dhaka hire Linux and DevOps engineers who understand high-availability cluster architectures, zero-downtime deployments, immutable infrastructure, and telemetry observability.',
  pivotAdvice_bn: '২০২৬ সালে সাধারণ স্ক্রিপ্ট বা ডকারফাইল এআই লিখে দিতে পারে। কিন্তু সার্ভার যাতে কখনো ডাউন না হয়, কোটি ইউজারের লোডে অ্যাপ্লিকেশন কীভাবে স্কেল করবে এবং শূন্য ডাউনটাইমে কীভাবে কোড ডিপ্লয় হবে, তা নিশ্চিত করতে বাস্তব লিনাক্স ও ডেভঅপ্স ইঞ্জিনিয়ারদের বিকল্প নেই। এর বেতন বৃদ্ধি প্রযুক্তি খাতের অন্যতম দ্রুতগতির।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Managing and hardening production Ubuntu 24.04 LTS and Debian cloud instances over secure SSH.',
    'Orchestrating multi-service environments with Docker, Docker Compose, and multi-stage build optimization.',
    'Configuring Nginx and Caddy reverse proxies with HTTP/3 QUIC, rate limiting, and Let\'s Encrypt SSL automation.',
    'Writing robust GitHub Actions CI/CD workflows for automated testing, container builds, and zero-downtime rollouts.',
    'Building metrics dashboards with Prometheus and Grafana to track CPU, memory, network latency, and disk I/O.'
  ],
  dayToDay_bn: [
    'উবুন্টু ২৪.০৪ এলটিএস ক্লাউড সার্ভার পরিচালনা ও এসএসএইচ সিকিউরিটি হার্ডেনিং নিশ্চিত করা।',
    'ডকার ও ডকার কম্পোজ দিয়ে মাল্টি-কনটেইনার অ্যাপ্লিকেশন এবং সাইজ অপ্টিমাইজড মাল্টি-স্টেজ বিল্ড তৈরি।',
    'এনজিনএক্স ও ক্যাডি দিয়ে রিভার্স প্রক্সি, এইচটিটিপি/৩ এবং স্বয়ংক্রিয় এসএসএল সার্টিফিকেট সেট করা।',
    'গিটহাব একশন দিয়ে স্বয়ংক্রিয় সিআই/সিডি অটোমেশন ও জিরো-ডাউনটাইম ডিপ্লয়মেন্ট নিশ্চিত করা।',
    'প্রমিথিউস ও গ্রাফানা দিয়ে সার্ভারের র‍্যাম, সিপিইউ লোড ও নেটওয়ার্ক স্পিড রিয়েল-টাইমে মনিটর করা।'
  ],
  mustHaveSkills: [
    {
      id: 'linux-kernel-bash',
      name: 'Linux Shell Mastery (Bash & Ubuntu 24.04 LTS)',
      category: 'Operating Systems',
      importance: 'Essential',
      description_en: 'File permissions, systemd daemons, journalctl logging, cron jobs, process signals (SIGTERM/SIGKILL), and awk/sed.',
      description_bn: 'ফাইল পারমিশন, সিস্টেমডি সার্ভিস তৈরি, জার্নালসিটিএল লগ এবং প্রসেস নিয়ন্ত্রণ।'
    },
    {
      id: 'docker-container-architecture',
      name: 'Docker 26+ Containerization & Compose',
      category: 'Containerization',
      importance: 'Essential',
      description_en: 'Multi-stage builds, non-root user execution, bridge/host networking, volume persistence, and Compose v2.',
      description_bn: 'মাল্টি-স্টেজ ডকারফাইল, নন-রুট ইউজার সিকিউরিটি ও ডকার কম্পোজ দিয়ে সার্ভিস নেটওয়ার্কিং।'
    },
    {
      id: 'reverse-proxy-nginx-caddy',
      name: 'Nginx & Caddy Web Servers (SSL & HTTP/3)',
      category: 'Web Networking',
      importance: 'Essential',
      description_en: 'Upstream load balancing, TLS 1.3 encryption, websocket proxying, and automated ACME renewals.',
      description_bn: 'এনজিনএক্স রিভার্স প্রক্সি, লোড ব্যালেন্সিং ও স্বয়ংক্রিয় এসএসএল রিনিউয়াল কনফিগারেশন।'
    },
    {
      id: 'github-actions-cicd',
      name: 'GitHub Actions CI/CD & Infrastructure as Code',
      category: 'DevOps & Automation',
      importance: 'Essential',
      description_en: 'Automated test runners, matrix builds, SSH deployment keys, and OpenTofu / Terraform basics.',
      description_bn: 'গিটহাব একশন সিআই/সিডি পাইপলাইন এবং ওপেন-টোফু দিয়ে কোডের মাধ্যমে সার্ভার পরিচালনা।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Software parks in Banani, Dhanmondi, Uttara, Kawran Bazar) & Remote BD',
      entrySalary: { min: 32000, max: 52000, currency: 'BDT', formatted: '32,000 - 52,000 BDT' },
      midSalary: { min: 72000, max: 145000, currency: 'BDT', formatted: '72,000 - 145,000 BDT' },
      seniorSalary: { min: 165000, max: 350000, currency: 'BDT', formatted: '165,000 - 350,000 BDT' },
      hiringSectors: [
        'Fintech Platforms & High-Traffic Portals (bKash, Nagad, SSLCOMMERZ, Shohoz)',
        'Offshore Software Exporters & Enterprise IT Providers (Therap, Brain Station 23, Kona Software)',
        'Cloud Hosting Providers, ISPs & Managed Infrastructure Firms'
      ],
      cvExpectations: [
        'Demonstrated comfort in the Linux terminal without GUI dependence',
        'Working GitHub Actions CI/CD workflow demonstrating automated test and deployment',
        'Repository with production-ready multi-stage Dockerfile and Docker Compose orchestration',
        'Diploma in CST with demonstrable live server setup during interview'
      ],
      localDemandSummary_en: 'Every software company with paying users needs reliable system engineers to prevent server crashes. Because few freshers learn Linux systems deeply, CST graduates with genuine command-line skills face low competition and enjoy rapid salary growth.',
      localDemandSummary_bn: 'সবাই যখন সাধারণ কোডিংয়ের পেছনে ছোটে, তখন লিনাক্স জানা শিক্ষার্থীর সংখ্যা থাকে অত্যন্ত কম। তাই যারা টার্মিনাল, ডকার ও সার্ভার হার্ডেনিং আয়ত্ত করে, সফটওয়্যার কোম্পানিগুলো তাদের ফ্রেশার হিসেবেও দ্রুত নিয়োগ দেয়।'
    },
    targetCountries: [
      {
        region: 'Europe',
        countryName_en: 'Germany, Netherlands & Poland',
        countryName_bn: 'জার্মানি, নেদারল্যান্ডস ও পোল্যান্ড',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'EU Blue Card actively recruits DevOps and Linux platform engineers with practical CI/CD and container orchestration experience.',
        visaReality_bn: 'ইউরোপের ইইউ ব্লু কার্ড ভিসায় লিনাক্স ও ক্লাউড ডেভঅপ্স ইঞ্জিনিয়ারদের সর্বোচ্চ মূল্যায়ন ও অগ্রাধিকার রয়েছে।',
        averageSalaryUsdOrLocal: '55,000 - 90,000 EUR / year (approx 7,200,000 - 11,800,000 BDT)',
        requiredExperienceYears: '3 to 5 years'
      },
      {
        region: 'Middle East',
        countryName_en: 'United Arab Emirates & Saudi Arabia',
        countryName_bn: 'সংযুক্ত আরব আমিরাত ও সৌদি আরব',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Rapid cloud migration across Dubai and Riyadh drives high recruitment for DevOps engineers managing multi-cloud infrastructure.',
        visaReality_bn: 'দুবাই ও রিয়াদে সরকারি ও বেসরকারি ক্লাউড মাইগ্রেশন প্রকল্পে আন্তর্জাতিক ডেভঅপ্স ইঞ্জিনিয়ারদের আকর্ষণীয় প্যাকেজ দেওয়া হয়।',
        averageSalaryUsdOrLocal: '14,000 - 25,000 AED / month',
        requiredExperienceYears: '2 to 5 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$1,400 - $4,800 USD',
      competitionLevel: 'Moderate to High',
      competitionLevel_bn: 'মাঝারি থেকে তীব্র',
      englishRequirement: 'Professional English for infrastructure documentation, incident post-mortems, and deployment pull requests',
      englishRequirement_bn: 'সার্ভার ইনফ্রাস্ট্রাকচার ডকুমেন্টেশন তৈরি ও টেকনিক্যাল টিমের সাথে কথা বলার উপযোগী ইংরেজি',
      realities_en: [
        'Global startups hire remote DevOps engineers to automate deployment pipelines and maintain cloud infrastructure round-the-clock.',
        'A public GitHub repository showcasing working Terraform/OpenTofu configurations and CI/CD pipelines commands immediate credibility.'
      ],
      realities_bn: [
        'আন্তর্জাতিক কোম্পানিগুলো তাদের সার্ভার রক্ষণাবেক্ষণ ও স্বয়ংক্রিয় ডিপ্লয়মেন্টের জন্য দূরবর্তী ডেভঅপ্স ইঞ্জিনিয়ার নিয়োগ দেয়।',
        'সিভিতে লাইভ সিআই/সিডি পাইপলাইন ও ডকার আর্কিটেকচারের সোর্স কোড লিংক থাকলে চাকরি পাওয়া অনেক সহজ হয়।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Linux 2026 Kernel Mastery (Ubuntu 24.04 LTS), Bash & SSH Security',
      phaseTitle_bn: 'উবুন্টু ২৪.০৪ লিনাক্স কার্নেল, ব্যাশ অটোমেশন ও এসএসএইচ সিকিউরিটি',
      phaseSubtitle_en: 'Navigate the CLI, manage systemd services, and automate tasks with Bash.',
      phaseSubtitle_bn: 'টার্মিনাল কমান্ড, সিস্টেমডি ব্যাকগ্রাউন্ড সার্ভিস ও ব্যাশ স্ক্রিপ্টিং।',
      durationWeeks: 4,
      modules: [
        {
          id: 'dev-p1-m1',
          title_en: 'Ubuntu 24.04 LTS CLI, Permissions & Systemd Services',
          title_bn: 'উবুন্টু ২৪.০৪ টার্মিনাল, ফাইল পারমিশন ও সিস্টেমডি সার্ভিস তৈরি',
          description_en: 'Master chmod, chown, sudoers, write custom systemd .service unit files with auto-restart, and analyze system logs with journalctl.',
          description_bn: 'ফাইল পারমিশন, সিস্টেমডি ইউনিট ফাইল তৈরি করে ব্যাকগ্রাউন্ড সার্ভিস চালানো এবং ক্র্যাশ করলে অটো-রিস্টার্ট নিশ্চিত করা।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['POSIX Permissions & Umask', 'Writing systemd service units', 'journalctl -u -f logs', 'kill signals (SIGTERM 15, SIGKILL 9)'],
          practicalTask_en: 'Write a systemd unit file for a Node.js background process that restarts automatically on crash and logs output to journald.',
          practicalTask_bn: 'একটি নোড.জেএস অ্যাপ্লিকেশনের জন্য সিস্টেমডি সার্ভিস ফাইল বানাও যা কোনো কারণে বন্ধ হলে নিজে নিজে চালু হয়ে যাবে।'
        },
        {
          id: 'dev-p1-m2',
          title_en: 'Bash Scripting, Cron Automation & SSH Hardening',
          title_bn: 'ব্যাশ স্ক্রিপ্টিং, ক্রনজব দিয়ে ব্যাকআপ ও এসএসএইচ সিকিউরিটি',
          description_en: 'Write robust Bash scripts with error traps (set -euo pipefail), automate daily database backups via cron, and configure Ed25519 SSH keys.',
          description_bn: 'ব্যাশ স্ক্রিপ্ট ও ক্রনজব দিয়ে প্রতিদিনের স্বয়ংক্রিয় ব্যাকআপ তৈরি এবং পাসওয়ার্ড ছাড়া নিরাপদ এসএসএইচ লগইন কনফিগারেশন।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['set -euo pipefail safety', 'crontab scheduling', 'Ed25519 SSH keys & ssh-agent', 'UFW firewall configuration'],
          practicalTask_en: 'Write a Bash backup script that dumps PostgreSQL to a compressed tar.gz file, deletes backups older than 7 days, and runs nightly via cron.',
          practicalTask_bn: 'একটি স্বয়ংক্রিয় ব্যাশ স্ক্রিপ্ট লেখো যা প্রতিদিন রাত ১২টায় ডেটাবেসের ব্যাকআপ নিয়ে ৭ দিনের বেশি পুরনো ফাইল স্বয়ংক্রিয়ভাবে মুছে ফেলে।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Nginx, Caddy, SSL Automation & Web Traffic Routing',
      phaseTitle_bn: 'এনজিনএক্স, ক্যাডি, এসএসএল অটোমেশন ও ওয়েব ট্র্যাফিক রাউটিং',
      phaseSubtitle_en: 'Deploy reverse proxies, HTTP/3, and automated Let\'s Encrypt certificates.',
      phaseSubtitle_bn: 'রিভার্স প্রক্সি, এইচটিটিপি/৩ এবং স্বয়ংক্রিয় এসএসএল সার্টিফিকেটের বাস্তব প্রয়োগ।',
      durationWeeks: 4,
      modules: [
        {
          id: 'dev-p2-m1',
          title_en: 'Nginx Reverse Proxying, Upstream Load Balancing & Headers',
          title_bn: 'এনজিনএক্স রিভার্স প্রক্সি, আপস্ট্রিম লোড ব্যালেন্সিং ও হেডার্স',
          description_en: 'Configure server blocks, proxy_pass to backend ports, set proxy headers (X-Forwarded-For, X-Real-IP), and configure round-robin load balancing.',
          description_bn: 'এনজিনএক্স দিয়ে ব্যাকএন্ড পোর্টে রিকোয়েস্ট ফরোয়ার্ড করা, ক্লায়েন্টের আসল আইপি সংরক্ষণ এবং লোড ব্যালেন্সিং।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Nginx server blocks', 'proxy_pass & proxy_set_header', 'Upstream blocks (round-robin/least_conn)', 'Client body limits & timeouts'],
          practicalTask_en: 'Configure an Nginx reverse proxy that distributes traffic between two backend application instances and terminates SSL cleanly.',
          practicalTask_bn: 'একটি এনজিনএক্স কনফিগ তৈরি করো যা একসাথে চলা দুটি ব্যাকএন্ড সার্ভারের মধ্যে কাজের চাপ ভাগ করে দেয়।'
        },
        {
          id: 'dev-p2-m2',
          title_en: 'Automated HTTPS with Certbot & Modern Caddy Web Server',
          title_bn: 'সার্টবট দিয়ে স্বয়ংক্রিয় এইচটিটিপিএস ও আধুনিক ক্যাডি সার্ভার',
          description_en: 'Automate Let\'s Encrypt SSL certificates with Certbot renew cron jobs. Explore modern Caddy web server with automatic HTTPS by default.',
          description_bn: 'সার্টবট দিয়ে আজীবন ফ্রি এসএসএল সার্টিফিকেট অটো-রিনিউ করা এবং আধুনিক ক্যাডি (Caddy) সার্ভারের সহজ কনফিগারেশন।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Certbot ACME challenge', 'Automated SSL Renewal', 'Caddyfile syntax', 'HTTP/2 and HTTP/3 QUIC'],
          practicalTask_en: 'Deploy a public domain using Caddy with automatic zero-configuration SSL pointing to a live containerized web service.',
          practicalTask_bn: 'ক্যাডি ওয়েব সার্ভার দিয়ে একটি লাইভ ডোমেইনে স্বয়ংক্রিয় এসএসএল সার্টিফিকেট সহ অ্যাপ লাইভ করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Production Docker Containerization & Compose Orchestration',
      phaseTitle_bn: 'প্রোডাকশন ডকার কনটেইনারাইজেশন ও কম্পোজ অর্কেস্ট্রেশন',
      phaseSubtitle_en: 'Build small, secure containers and multi-service networks.',
      phaseSubtitle_bn: 'ছোট সাইজের নিরাপদ কনটেইনার তৈরি ও মাল্টি-সার্ভিস ডকার কম্পোজ।',
      durationWeeks: 5,
      modules: [
        {
          id: 'dev-p3-m1',
          title_en: 'Production Multi-Stage Dockerfiles & Security Hardening',
          title_bn: 'মাল্টি-স্টেজ ডকারফাইল ও কনটেইনার সিকিউরিটি হার্ডেনিং',
          description_en: 'Shrink Docker image sizes by 80% using multi-stage builds. Run containers as non-root users, use minimal base images (Alpine/Distroless), and cache layers.',
          description_bn: 'মাল্টি-স্টেজ বিল্ড দিয়ে ইমেজের সাইজ ছোট করা এবং রুট ইউজারের বদলে নিরাপদ ইউজার দিয়ে অ্যাপ চালানো।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Multi-Stage Dockerfiles', 'Non-Root User (USER node)', '.dockerignore optimization', 'Layer Caching & Order'],
          practicalTask_en: 'Convert a bloat 1GB Node.js Docker image into an optimized multi-stage build under 120MB that executes securely as non-root.',
          practicalTask_bn: 'একটি ১ জিবি সাইজের ডকার ইমেজকে মাল্টি-স্টেজ বিল্ডের মাধ্যমে ১২০ মেগাবাইটের নিচে নামিয়ে আনো।'
        },
        {
          id: 'dev-p3-m2',
          title_en: 'Docker Compose v2: Networking, Volumes & Health Checks',
          title_bn: 'ডকার কম্পোজ ২: নেটওয়ার্কিং, ভলিউম ও হেলথ চেকস',
          description_en: 'Orchestrate multi-container setups (App + PostgreSQL + Redis) with isolated bridge networks, persistent named volumes, and health check dependencies.',
          description_bn: 'ডকার কম্পোজ দিয়ে অ্যাপ, পোস্টগ্রেস ও রেডিস একসাথে এক ক্লিকে রান করা এবং পারসিস্টেন্ট ভলিউম ম্যানেজ করা।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['docker-compose.yml v2', 'Bridge Network Isolation', 'Named Volumes for DB Data', 'depends_on with healthcheck condition'],
          practicalTask_en: 'Write a docker-compose.yml file that launches an API, waits for PostgreSQL to become fully healthy before starting, and mounts persistent volume data.',
          practicalTask_bn: 'একটি ডকার কম্পোজ ফাইল বানাও যা ডেটাবেস শতভাগ প্রস্তুত না হওয়া পর্যন্ত অ্যাপ চালু করবে না।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'GitHub Actions CI/CD, OpenTofu / Terraform & Telemetry',
      phaseTitle_bn: 'গিটহাব একশনস সিআই/সিডি, ওপেন-টোফু ও টেলিমেট্রি মনিটরিং',
      phaseSubtitle_en: 'Automate build pipelines, immutable infrastructure, and monitor metrics.',
      phaseSubtitle_bn: 'স্বয়ংক্রিয় ডিপ্লয়মেন্ট পাইপলাইন, ইনফ্রাস্ট্রাকচার-অ্যাজ-কোড ও গ্রাফানা মনিটরিং।',
      durationWeeks: 5,
      modules: [
        {
          id: 'dev-p4-m1',
          title_en: 'Automated CI/CD Pipelines with GitHub Actions',
          title_bn: 'গিটহাব একশন দিয়ে স্বয়ংক্রিয় সিআই/সিডি পাইপলাইন তৈরি',
          description_en: 'Create workflows that run linting, unit tests, build Docker images, and deploy automatically to cloud VPS instances via SSH on git push.',
          description_bn: 'গিটহাবে পুশ করার সাথে সাথে কোড টেস্ট করা, ডকার ইমেজ বানানো এবং সার্ভারে অটোমেটিক ডিপ্লয় করার পাইপলাইন।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['GitHub Actions Workflows', 'Secrets Management', 'SSH Action Deployment', 'Zero-Downtime Rolling Rollouts'],
          practicalTask_en: 'Build a complete GitHub Actions CI/CD pipeline that tests code and triggers an automated deployment to an Ubuntu server upon merging to main.',
          practicalTask_bn: 'এমন একটি সিআই/সিডি পাইপলাইন বানাও যা মেইন ব্রাঞ্চে মার্জ করার সাথে সাথে সার্ভারে লাইভ কোড আপডেট করে।'
        },
        {
          id: 'dev-p4-m2',
          title_en: 'Prometheus & Grafana Telemetry Metrics & DevOps Viva',
          title_bn: 'প্রমিথিউস ও গ্রাফানা মনিটরিং এবং টেকনিক্যাল ডেভঅপ্স ভাইভা',
          description_en: 'Install Node Exporter, scrape server CPU/RAM metrics with Prometheus, visualize dashboards in Grafana, and prepare for senior viva scenarios.',
          description_bn: 'সার্ভারে নোড এক্সপোর্টার বসিয়ে প্রমিথিউস ও গ্রাফানা দিয়ে রিয়েল-টাইম গ্রাফ তৈরি এবং চাকরি ইন্টারভিউয়ের নিখুঁত প্রস্তুতি।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Node Exporter installation', 'Prometheus scrape configs', 'Grafana Dashboard setup', 'Technical System Outage Viva'],
          practicalTask_en: 'Publish a public GitHub repository showcasing your complete CI/CD workflow, Docker Compose orchestration, and screenshot of your Grafana dashboard.',
          practicalTask_bn: 'তোমার গিটহাবে সিআই/সিডি স্ক্রিপ্ট, ডকার কম্পোজ এবং গ্রাফানা ড্যাশবোর্ডের স্ক্রিনশট সহ প্রজেক্ট সাজিয়ে সিভিতে দাও।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'dev-q1',
      question_en: 'What is the lifecycle of a Linux process, what is the difference between SIGTERM and SIGKILL, and why is PID 1 critical in Docker containers?',
      question_bn: 'লিনাক্স প্রসেসের লাইফসাইকেল কী, SIGTERM ও SIGKILL এর পার্থক্য কী এবং ডকার কনটেইনারে পিআইডি ১ (PID 1) কেন অত্যন্ত গুরুত্বপূর্ণ?',
      category: 'Linux Kernel & Containers',
      whyAsked_en: 'Fundamental operating system question separating junior operators from senior platform engineers.',
      whyAsked_bn: 'প্রার্থী লিনাক্স প্রসেস সিগন্যাল ও ডকার মেমরি হ্যান্ডলিংয়ের গভীরে বোঝে কি না তা পরীক্ষা করতে।',
      howToAnswer_en: 'A process is created via fork() and replaced via exec(). SIGTERM (Signal 15) is the polite termination signal asking the process to finish active transactions, flush file buffers, close database connections, and terminate gracefully. SIGKILL (Signal 9) cannot be caught or ignored; the Linux kernel immediately terminates the process from memory without giving it a chance to clean up. In a Docker container, the container entrypoint runs as PID 1 (init process). Unlike standard Linux where systemd reaps zombie processes (child processes whose parents exited before wait()), a default container PID 1 does not automatically reap zombies unless an init system like tini or dumb-init is utilized. Furthermore, if PID 1 ignores SIGTERM, docker stop times out after 10 seconds and forces a destructive SIGKILL.',
      howToAnswer_bn: 'লিনাক্সে প্রসেস তৈরির পর বন্ধ করার জন্য দুটি প্রধান সিগন্যাল ব্যবহৃত হয়। SIGTERM (১৫) হলো ভদ্র সিগন্যাল, যা প্রসেসকে চলমান কাজ সম্পন্ন করে ও ডেটাবেস কানেকশন নিরাপদে বন্ধ করে টার্মিনেট হতে অনুরোধ করে। আর SIGKILL (৯) কার্নেলকে সরাসরি প্রসেসটি মেমরি থেকে মুছে ফেলতে বাধ্য করে, কোনো কাজ গুছিয়ে নেওয়ার সুযোগ দেয় না। ডকার কনটেইনারে যে মূল অ্যাপ্লিকেশনটি চলে তা পিআইডি ১ (PID 1) হিসেবে কাজ করে। সাধারণ লিনাক্সে সিস্টেমডি জোম্বি প্রসেস পরিষ্কার করে, কিন্তু ডকারে পিআইডি ১ যদি সঠিকভাবে ইনিশিয়ালাইজ না করা হয় (যেমন dumb-init বা tini ব্যবহার না করলে), তবে মেমরিতে জোম্বি প্রসেস জমে যায় এবং docker stop দিলে অ্যাপ সময়মতো বন্ধ না হয়ে ক্র্যাশ করে।',
      commonMistakes_en: 'Thinking kill -9 should always be used first, which risks database corruption and uncommitted log buffers.',
      commonMistakes_bn: 'সবসময় kill -9 দিয়ে সার্ভার প্রসেস বন্ধ করার ভুল ধারণা যা ডাটাবেস ক্র্যাশ করাতে পারে।'
    },
    {
      id: 'dev-q2',
      question_en: 'How do you design a zero-downtime rolling deployment pipeline for a production web application?',
      question_bn: 'একটি প্রোডাকশন ওয়েব অ্যাপ্লিকেশনের জন্য শূন্য ডাউনটাইমে (Zero-Downtime) রোলিং ডিপ্লয়মেন্ট কীভাবে ডিজাইন করবেন?',
      category: 'CI/CD & Reliability',
      whyAsked_en: 'Tests candidate experience with production release engineering where paying users must never see a 502 bad gateway error.',
      whyAsked_bn: 'কোড আপডেট দেওয়ার সময় ওয়েবসাইট যাতে এক সেকেন্ডের জন্যও ডাউন না হয় তা নিশ্চিত করার বাস্তব জ্ঞান যাচাই করতে।',
      howToAnswer_en: 'To achieve zero downtime without dropping connections: 1) Run at least two identical backend application instances behind a reverse proxy (Nginx or load balancer); 2) Deploy new container version to Instance B while Instance A handles 100% of live traffic; 3) The deployment script pings the internal health check endpoint of Instance B until it responds HTTP 200 OK; 4) Once healthy, reload the reverse proxy config gracefully (nginx -s reload does not drop active connections) to route traffic to Instance B; 5) Update Instance A and repeat. Database schema changes must follow expand-and-contract patterns so both old and new code versions can run concurrently during the rollout.',
      howToAnswer_bn: 'জিরো ডাউনটাইম নিশ্চিত করতে সবসময় লোড ব্যালেন্সারের পেছনে একাধিক সার্ভার ইনস্ট্যান্স রাখা হয়। নতুন কোড ডিপ্লয় করার সময় প্রথমে একটি ইনস্ট্যান্সে নতুন কনটেইনার চালানো হয় এবং অভ্যন্তরীণ হেলথ চেক দিয়ে নিশ্চিত করা হয় যে অ্যাপ পুরোপুরি চালু হয়েছে। এরপর রিভার্স প্রক্সি গ্রেসফুলি রিলোড দিয়ে নতুন ট্র্যাফিক সেখানে পাঠানো হয়। আগের চলমান কোনো ইউজারের রিকোয়েস্ট ড্রপ না করে পুরনো ইনস্ট্যান্সটি আপডেট করা হয়। এছাড়া ডেটাবেসে পরিবর্তন আনার ক্ষেত্রে এমনভাবে কলাম যুক্ত করতে হয় যাতে পুরনো এবং নতুন উভয় কোড একসাথে কাজ করতে পারে।',
      commonMistakes_en: 'Simply restarting the single Docker container in place, which guarantees a 5-15 second outage for all users.',
      commonMistakes_bn: 'লাইভ সার্ভারে সরাসরি ডকার কনটেইনার রিস্টার্ট দেওয়া, যা নিশ্চিতভাবে গ্রাহকদের কাছে ৫০২ এরর প্রদর্শন করে।'
    },
    {
      id: 'dev-q3',
      question_en: 'Why are multi-stage Docker builds essential for production deployments, and why should containers never execute as the root user?',
      question_bn: 'প্রোডাকশন ডিপ্লয়মেন্টে মাল্টি-স্টেজ ডকার বিল্ড কেন আবশ্যক এবং কনটেইনার কখনোই রুট (root) ইউজার দিয়ে চালানো উচিত নয় কেন?',
      category: 'Container Security',
      whyAsked_en: 'Verifies container security best practices and efficiency awareness.',
      whyAsked_bn: 'ডকার কনটেইনারের সাইজ ছোট রাখা এবং নিরাপত্তা ঝুঁকি থেকে সার্ভার রক্ষা করার নিয়ম জানতে।',
      howToAnswer_en: 'Multi-stage builds separate the build environment (containing heavy compilers, SDKs, devDependencies, and test runners) from the final runtime image. By copying only the compiled production artifacts and lean runtime dependencies into a minimal base image (such as Alpine or Distroless), image sizes shrink from 1GB+ down to 80-120MB, speeding up network deployment times by 90% and eliminating hundreds of vulnerable build-tool CVEs. Secondly, running containers as root is dangerous: if an attacker achieves a remote code execution vulnerability or container escape flaw, they immediately possess root permissions on the host operating system kernel. Using USER nonroot ensures the attacker remains trapped with minimal non-privileged capabilities.',
      howToAnswer_bn: 'মাল্টি-স্টেজ বিল্ডে অ্যাপ বিল্ড করার ভারি টুলস (কম্পাইলার, টেস্ট রানার ইত্যাদি) প্রথম স্টেজে ব্যবহার করে চূড়ান্ত স্টেজে কেবল প্রস্তুত হওয়া লাইটওয়েট ফাইলটুকু কপি করা হয়। এতে ইমেজের সাইজ ১ জিবি থেকে কমে মাত্র ৮০-১২০ মেগাবাইটে নেমে আসে এবং হাজার হাজার নিরাপত্তা দুর্বলতা দূর হয়। আর রুট ইউজার দিয়ে কনটেইনার চালালে কোনো কারণে অ্যাপে নিরাপত্তা ফাঁক থাকলে হ্যাকার পুরো মূল সার্ভারের সম্পূর্ণ নিয়ন্ত্রণ পেয়ে যায়। নন-রুট ইউজার ব্যবহার করলে আক্রমণকারীর ক্ষমতা সীমিত থাকে এবং মূল সার্ভার সুরক্ষিত থাকে।',
      commonMistakes_en: 'Leaving node_modules with development dependencies like TypeScript and Jest inside the final production container.',
      commonMistakes_bn: 'প্রোডাকশন কনটেইনারে ডেভেলপমেন্ট লাইব্রেরি রেখে দিয়ে অযথা সাইজ ও ঝুঁকি বাড়িয়ে ফেলা।'
    },
    {
      id: 'dev-q4',
      question_en: 'In Prometheus monitoring, what is the difference between Counter, Gauge, and Histogram metric types, and how does Grafana visualize them?',
      question_bn: 'প্রমিথিউস মনিটরিংয়ে কাউন্টার, গজ ও হিস্টোগ্রাম মেট্রিক টাইপের পার্থক্য কী এবং গ্রাফানা কীভাবে তা প্রদর্শন করে?',
      category: 'Telemetry & Observability',
      whyAsked_en: 'Assesses practical observability skills for enterprise monitoring.',
      whyAsked_bn: 'সার্ভারের গতি ও ত্রুটি বৈজ্ঞানিকভাবে মেপে মনিটরিং ড্যাশবোর্ড বানানোর অভিজ্ঞতা যাচাই করতে।',
      howToAnswer_en: '1) Counter is a cumulative metric that only ever increases or resets to zero on restart (e.g. total_http_requests, total_server_errors). In Grafana/PromQL, we use rate(counter[5m]) to calculate requests per second. 2) Gauge is a metric that goes up and down representing a current instantaneous value (e.g. memory_usage_bytes, cpu_temperature, active_concurrent_connections). 3) Histogram samples observations (usually request durations or response sizes) and counts them in configurable buckets. It allows calculating p95, p99 percentiles using histogram_quantile(0.99, sum(rate(http_duration_seconds_bucket[5m])) by (le)) to see real user latency bottlenecks.',
      howToAnswer_bn: '১) কাউন্টার হলো এমন একটি সংখ্যা যা কেবল বাড়ে বা সার্ভার রিস্টার্ট হলে শূন্য হয় (যেমন মোট ভিজিটর বা মোট এরর সংখ্যা)। গ্রাফানায় আমরা রেট (rate) ফাংশন দিয়ে প্রতি সেকেন্ডের গতি মাপি। ২) গজ (Gauge) হলো এমন মান যা যেকোনো সময় বাড়তে বা কমতে পারে (যেমন বর্তমান র‍্যামের ব্যবহার বা বর্তমান সক্রিয় ইউজারের সংখ্যা)। ৩) হিস্টোগ্রাম নির্দিষ্ট সময়ের ব্যবধান বা সাইজকে বিভিন্ন বাকেটে ভাগ করে রাখে, যা দিয়ে ৯৫% বা ৯৯% ইউজার ঠিক কত মিলি-সেকেন্ডে পেজ লোড দেখতে পেল তা নিখুঁতভাবে বের করা যায়।',
      commonMistakes_en: 'Using rate() on a Gauge metric rather than a Counter metric.',
      commonMistakes_bn: 'গজ মেট্রিকের ওপর রেট ফাংশন চালানো যা ভুল ফলাফল প্রদর্শন করে।'
    }
  ],
  freeCerts: [
    {
      id: 'linux-foundation-lfs101',
      title_en: 'Linux Foundation: Introduction to Linux (LFS101x)',
      title_bn: 'লিনাক্স ফাউন্ডেশন: ইন্ট্রোডাকশন টু লিনাক্স অফিশিয়াল কোর্স',
      provider: 'The Linux Foundation / edX',
      url: 'https://training.linuxfoundation.org/training/introduction-to-linux/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 60,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'The official introductory curriculum from the creators of the Linux operating system covering CLI, architecture, and shell tools.',
      relevance_bn: 'স্বয়ং লিনাক্স ফাউন্ডেশনের নিজস্ব অফিশিয়াল উন্মুক্ত ফান্ডামেন্টাল কোর্স।'
    },
    {
      id: 'docker-get-started',
      title_en: 'Docker Certified: Official Containerization Essentials',
      title_bn: 'ডকার অফিশিয়াল কনটেইনারাইজেশন ফান্ডামেন্টালস',
      provider: 'Docker',
      url: 'https://docs.docker.com/get-started/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 30,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Direct hands-on interactive training from Docker covering Dockerfile creation, container networking, and volumes.',
      relevance_bn: 'ডকারের অফিশিয়াল ডকুমেন্টেশন ও ল্যাব ভিত্তিক কনটেইনার প্রশিক্ষণ।'
    },
    {
      id: 'github-actions-learn',
      title_en: 'GitHub Foundations: Continuous Integration & Delivery Path',
      title_bn: 'গিটহাব ফাউন্ডেশনস: অটোমেটেড সিআই/সিডি লার্নিং পাথ',
      provider: 'GitHub Skills',
      url: 'https://skills.github.com/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 20,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Interactive in-repo GitHub workshops teaching real workflow syntax, triggers, secrets, and deployment actions.',
      relevance_bn: 'গিটহাবের নিজস্ব ইন্টারঅ্যাক্টিভ লার্নিং প্ল্যাটফর্মে সিআই/সিডি অটোমেশন শেখার অফিশিয়াল কোর্স।'
    }
  ]
};
