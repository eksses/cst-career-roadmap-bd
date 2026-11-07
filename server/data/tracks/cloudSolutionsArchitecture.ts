import type { CareerTrack } from '../../../shared/types.js';

export const cloudSolutionsArchitectureTrack: Omit<CareerTrack, 'id'> = {
  slug: 'cloud-solutions-architecture',
  title_en: 'Cloud Solutions & AWS Infrastructure Engineering',
  title_bn: 'ক্লাউড সল্যুশনস ও এডব্লিউএস ইনফ্রাস্ট্রাকচার ইঞ্জিনিয়ারিং',
  summary_en: 'Cloud computing architectures, Amazon Web Services (AWS EC2, S3, RDS, IAM, VPC), Infrastructure as Code with Terraform, serverless architecture, and cost optimization.',
  summary_bn: 'আমাজন ওয়েব সার্ভিসেস (AWS), ক্লাউড সার্ভার, নেটওয়ার্কিং, টেরাফর্ম (Terraform) দিয়ে ইনফ্রাস্ট্রাকচার অটোমেশন ও আধুনিক ক্লাউড সল্যুশনস ট্র্যাক।',
  pivotAdvice_en: 'If you want to operate high-scale internet infrastructure powering thousands of concurrent users, cloud engineering on AWS provides the highest salary ceiling and international remote viability for CST engineers.',
  pivotAdvice_bn: 'তুমি যদি হাজার হাজার মানুষের ব্যবহার করা বড় সার্ভার ইনফ্রাস্ট্রাকচার পরিচালনা করতে চাও, তবে এডব্লিউএস ক্লাউড ইঞ্জিনিয়ারিং তোমার জন্য সর্বোত্তম। দেশীয় কর্পোরেট ও আন্তর্জাতিক রিমোট কোম্পানিতে এর বেতন সবচেয়ে আকর্ষণীয়।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Provisioning and scaling EC2 virtual instances with auto-scaling groups and Application Load Balancers.',
    'Designing highly secure Virtual Private Clouds (VPC) with public and private subnets and NAT gateways.',
    'Configuring IAM users, roles, and least-privilege security policies to protect corporate cloud assets.',
    'Writing Infrastructure as Code using Terraform to replicate cloud environments automatically.',
    'Monitoring AWS CloudWatch alarms, billing budgets, and optimizing server costs.'
  ],
  dayToDay_bn: [
    'এডব্লিউএস ইসি২ সার্ভার সেটআপ, অটো-স্কেলিং ও লোড ব্যালেন্সার দিয়ে ট্র্যাফিক নিয়ন্ত্রণ করা।',
    'ভার্চুয়াল প্রাইভেট ক্লাউড (VPC), প্রাইভেট সাবনেট ও ফায়ারওয়াল দিয়ে নিরাপদ নেটওয়ার্ক তৈরি।',
    'আইএএম (IAM) পলিসি তৈরি করে ক্লাউড এক্সেস ও ডেটা সিকিউরিটি নিশ্চিত করা।',
    'টেরাফর্ম কোড লিখে যেকোনো সময় স্বয়ংক্রিয়ভাবে পুরো ক্লাউড সেটআপ তৈরি করা।',
    'ক্লাউডওয়াচ দিয়ে সার্ভারের স্বাস্থ্য ও মাসিক বিল মনিটর করে খরচ সাশ্রয় করা।'
  ],
  mustHaveSkills: [
    {
      id: 'aws-core-services',
      name: 'AWS Core Services (EC2, S3, RDS)',
      category: 'Cloud Services',
      importance: 'Essential',
      description_en: 'Virtual machines, object storage with S3 lifecycle rules, and managed PostgreSQL/MySQL.',
      description_bn: 'এডব্লিউএস ক্লাউড সার্ভার, এসথ্রি ক্লাউড স্টোরেজ ও ম্যানেজড আরডিএস ডেটাবেস।'
    },
    {
      id: 'aws-vpc-networking',
      name: 'VPC Architecture & Cloud Security',
      category: 'Networking',
      importance: 'Essential',
      description_en: 'CIDR blocks, route tables, internet gateways, NAT gateways, and Security Groups.',
      description_bn: 'ক্লাউড নেটওয়ার্ক সাবনেট, রাউট টেবিল ও সিকিউরিটি গ্রুপ ফায়ারওয়াল।'
    },
    {
      id: 'terraform-iac',
      name: 'Infrastructure as Code (Terraform)',
      category: 'DevOps & Automation',
      importance: 'Essential',
      description_en: 'Declarative HCL syntax, state files, providers, modules, and automated deployment.',
      description_bn: 'টেরাফর্ম কোড দিয়ে ক্লাউড ইনফ্রাস্ট্রাকচার স্বয়ংক্রিয়ভাবে তৈরি ও ব্যবস্থাপনা।'
    },
    {
      id: 'serverless-lambda',
      name: 'Serverless & Cloud Monitoring',
      category: 'Modern Cloud',
      importance: 'Recommended',
      description_en: 'AWS Lambda functions, API Gateway, CloudWatch logs, and cost governance.',
      description_bn: 'সার্ভারলেস ল্যাম্বডা ফাংশন, এপিআই গেটওয়ে ও ক্লাউডওয়াচ মনিটরিং।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Fintech Hubs, Foreign Export Centers)',
      entrySalary: { min: 30000, max: 55000, currency: 'BDT', formatted: '30,000 - 55,000 BDT' },
      midSalary: { min: 70000, max: 150000, currency: 'BDT', formatted: '70,000 - 150,000 BDT' },
      seniorSalary: { min: 160000, max: 350000, currency: 'BDT', formatted: '160,000 - 350,000 BDT' },
      hiringSectors: [
        'Fintech Platforms & Commercial Payment Gateways (bKash, Nagad, Shurjopay)',
        'Offshore Software Development Centers (Brain Station 23, Selise, Cefalo, Kaz Software)',
        'Cloud Migration Consultancies and Managed Service Providers',
        'Large Multinational Telecom Operators'
      ],
      cvExpectations: [
        'Practical experience navigating the AWS Management Console and AWS CLI',
        'Working GitHub repository with real Terraform scripts creating a functional VPC and EC2 web cluster',
        'Clear understanding of IAM least-privilege security and cloud storage lifecycle management',
        'Diploma in CST with strong Linux foundations'
      ],
      localDemandSummary_en: 'Companies in Bangladesh are migrating from physical on-premise servers to AWS and cloud environments. CST diploma graduates who understand cloud architecture, security, and billing control are rewarded with rapid promotions.',
      localDemandSummary_bn: 'বাংলাদেশের অধিকাংশ বড় কোম্পানি তাদের সার্ভার ক্লাউডে স্থানান্তর করছে। এডব্লিউএস ও ক্লাউড আর্কিটেকচার জানা ডিপ্লোমা ইঞ্জিনিয়ারদের বেতন ও কাজের পরিবেশ অত্যন্ত আকর্ষণীয়।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'UAE & Saudi Arabia',
        countryName_bn: 'সংযুক্ত আরব আমিরাত ও সৌদি আরব',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Massive enterprise cloud migration drives demand for certified AWS associates and Terraform engineers.',
        visaReality_bn: 'এডব্লিউএস ক্লাউড ও টেরাফর্ম জানা ইঞ্জিনিয়ারদের উচ্চ বেতনের কর্মসংস্থান ও স্পনসরশিপের বড় সুযোগ রয়েছে।',
        averageSalaryUsdOrLocal: '$2,800 - $5,500 USD/month',
        requiredExperienceYears: '2 - 4 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি থেকে কঠিন',
      monthlyRangeUsd: '$1,000 - $3,500 USD',
      competitionLevel: 'Moderate',
      competitionLevel_bn: 'মাঝারি',
      englishRequirement: 'Professional written and conversational English for architectural diagrams and technical standups',
      englishRequirement_bn: 'আর্কিটেকচার ডায়াগ্রাম ও মিটিংয়ে আলোচনার উপযোগী প্রফেশনাল ইংরেজি',
      realities_en: [
        'International startups routinely contract remote cloud engineers to manage their AWS hosting and prevent surprise bills.',
        'Official AWS Cloud Practitioner and Solutions Architect Associate credentials open global interview doors.'
      ],
      realities_bn: [
        'বিদেশি স্টার্টআপগুলো মাসিক ক্লাউড খরচ নিয়ন্ত্রণ ও ইনফ্রাস্ট্রাকচার পরিচালনার জন্য রিমোট ইঞ্জিনিয়ার হায়ার করে।',
        'এডব্লিউএস সার্টিফিকেশন থাকলে গ্লোবাল রিমোট চাকরির ইন্টারভিউ কল পাওয়ার সম্ভাবনা বহু গুণ বাড়ে।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Cloud Principles & Core AWS Infrastructure',
      phaseTitle_bn: 'ক্লাউড মূলনীতি ও এডব্লিউএস কোর ইনফ্রাস্ট্রাকচার',
      phaseSubtitle_en: 'Create your AWS Free Tier account and launch virtual servers.',
      phaseSubtitle_bn: 'এডব্লিউএস ফ্রি টায়ার অ্যাকাউন্ট তৈরি ও ক্লাউড সার্ভার লঞ্চ।',
      durationWeeks: 4,
      modules: [
        {
          id: 'cld-p1-m1',
          title_en: 'AWS Free Tier, IAM Users & Security Best Practices',
          title_bn: 'এডব্লিউএস ফ্রি টায়ার, আইএএম ও সিকিউরিটি পলিসি',
          description_en: 'Set up MFA on the root account, create individual IAM users with administrative policies, and install AWS CLI.',
          description_bn: 'রুট অ্যাকাউন্টে টু-ফ্যাক্টর অথেনটিকেশন, আলাদা আইএএম ইউজার ও এডব্লিউএস সিএলআই সেটআপ।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['AWS Free Tier Limits', 'IAM User vs Role', 'MFA Security', 'AWS CLI Setup'],
          practicalTask_en: 'Create an AWS Free Tier account, lock down root with MFA, and generate an IAM user with least-privilege policies.',
          practicalTask_bn: 'একটি এডব্লিউএস ফ্রি অ্যাকাউন্ট খুলে রুট সিকিউরিটি লক করো এবং আইএএম ইউজার তৈরি করো।'
        },
        {
          id: 'cld-p1-m2',
          title_en: 'Launching EC2 Instances & Elastic IP Management',
          title_bn: 'ইসি২ ক্লাউড সার্ভার ও আইপি কনফিগারেশন',
          description_en: 'Launch an Ubuntu EC2 instance, generate SSH key pairs, configure Security Groups for ports 22 and 80, and attach an Elastic IP.',
          description_bn: 'উবুন্টু ইসি২ ইনস্ট্যান্স চালু করা, সিকিউরিটি গ্রুপ ফায়ারওয়াল ও স্ট্যাটিক আইপি যুক্ত করা।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['EC2 Instance Types', 'Security Groups', 'Key Pairs (PEM/PPK)', 'Elastic IP'],
          practicalTask_en: 'Deploy a live Nginx web page on an AWS EC2 instance and access it through its public IP.',
          practicalTask_bn: 'এডব্লিউএস ইসি২ সার্ভারে এনজিনএক্স ইনস্টল করে পাবলিক আইপি দিয়ে ব্রাউজারে লাইভ পেজ দেখো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'VPC Networking, Subnets & Relational Databases',
      phaseTitle_bn: 'ভিপিসি নেটওয়ার্কিং, সাবনেট ও রিলেশনাল ডেটাবেস',
      phaseSubtitle_en: 'Design enterprise private networks with custom subnets and routing.',
      phaseSubtitle_bn: 'কাস্টম সাবনেট, রাউটিং ও ডেটাবেস দিয়ে নিরাপদ ক্লাউড নেটওয়ার্ক তৈরি।',
      durationWeeks: 5,
      modules: [
        {
          id: 'cld-p2-m1',
          title_en: 'Custom VPC Architecture: Public & Private Subnets',
          title_bn: 'কাস্টম ভিপিসি: পাবলিক ও প্রাইভেট সাবনেট আর্কিটেকচার',
          description_en: 'Create a custom VPC, configure Internet Gateways, NAT Gateways for private instances, and separate route tables.',
          description_bn: 'কাস্টম ভিপিসি বানিয়ে ইন্টারনেট গেটওয়ে ও ন্যাট গেটওয়ে দিয়ে সুরক্ষিত সাবনেট আর্কিটেকচার তৈরি।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['VPC CIDR Calculation', 'Public vs Private Subnet', 'Internet & NAT Gateway', 'Route Tables'],
          practicalTask_en: 'Build a VPC with one public subnet (for web servers) and one private subnet (for databases) with zero direct internet exposure.',
          practicalTask_bn: 'ইন্টারনেট বিচ্ছিন্ন প্রাইভেট সাবনেট ও পাবলিক সাবনেট সহ একটি সম্পূর্ণ ভিপিসি নেটওয়ার্ক বানাও।'
        },
        {
          id: 'cld-p2-m2',
          title_en: 'AWS S3 Cloud Storage & Managed RDS PostgreSQL',
          title_bn: 'এডব্লিউএস এসথ্রি ক্লাউড স্টোরেজ ও আরডিএস ডেটাবেস',
          description_en: 'Create S3 buckets with bucket policies, configure CORS, and provision automated backups on AWS RDS PostgreSQL.',
          description_bn: 'এসথ্রি ক্লাউড বাকেট তৈরি ও আরডিএস পোস্টগ্রেস দিয়ে ক্লাউড ডেটাবেস পরিচালনা।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['S3 Lifecycle Rules', 'Static Website Hosting', 'RDS Multi-AZ Backups', 'Database Subnet Groups'],
          practicalTask_en: 'Host a static website on Amazon S3 with public read permissions and configure automated image backups.',
          practicalTask_bn: 'আমাজন এসথ্রি বাকেটে একটি স্ট্যাটিক সাইট হোস্ট করো এবং স্বয়ংক্রিয় ব্যাকআপ নিশ্চিত করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Infrastructure as Code with Terraform & Serverless',
      phaseTitle_bn: 'টেরাফর্ম দিয়ে কোডিংয়ের মাধ্যমে ক্লাউড তৈরি ও সার্ভারলেস',
      phaseSubtitle_en: 'Automate entire cloud environments with repeatable declarative code.',
      phaseSubtitle_bn: 'কোড লিখে যেকোনো সময় পুরো ক্লাউড ইনফ্রাস্ট্রাকচার স্বয়ংক্রিয়ভাবে তৈরি করো।',
      durationWeeks: 5,
      modules: [
        {
          id: 'cld-p3-m1',
          title_en: 'Terraform Fundamentals: Providers, Resources & State',
          title_bn: 'টেরাফর্মের ভিত্তি: প্রোভাইডার, রিসোর্স ও স্টেট ফাইল',
          description_en: 'Write Terraform .tf files to provision an AWS VPC, Security Group, and EC2 instance with a single command (terraform apply).',
          description_bn: 'টেরাফর্ম কোড লিখে এক ক্লিকে এডব্লিউএস ভিপিসি ও সার্ভার তৈরির প্র্যাকটিক্যাল ড্রিল।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Terraform HCL Syntax', 'terraform init & apply', 'State Management', 'Input Variables'],
          practicalTask_en: 'Write Terraform scripts that automatically provision a complete web server environment on AWS and tear it down cleanly with terraform destroy.',
          practicalTask_bn: 'টেরাফর্ম কোড দিয়ে স্বয়ংক্রিয়ভাবে একটি সার্ভার ক্লাস্টার তৈরি করো এবং কাজ শেষে মুছে ফেলো।'
        },
        {
          id: 'cld-p3-m2',
          title_en: 'Serverless Functions with AWS Lambda & API Gateway',
          title_bn: 'এডব্লিউএস ল্যাম্বডা ও এপিআই গেটওয়ে দিয়ে সার্ভারলেস',
          description_en: 'Write event-driven microservices that execute code without managing physical operating systems or paying for idle servers.',
          description_bn: 'কোনো সার্ভার পরিচালনা না করে ইভেন্ট ড্রাইভেন কোড এক্সিকিউট করার কৌশল।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Lambda Execution Roles', 'API Gateway Trigger', 'CloudWatch Logs', 'Serverless Cost Model'],
          practicalTask_en: 'Create an AWS Lambda Python function triggered by an API Gateway endpoint that returns live server status in JSON.',
          practicalTask_bn: 'এডব্লিউএস ল্যাম্বডা দিয়ে একটি সার্ভারলেস এপিআই তৈরি করো যা কল করলে লাইভ স্ট্যাটাস দেয়।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'High Availability, CloudWatch Alarms & Vendor Prep',
      phaseTitle_bn: 'হাই অ্যাভেইলেবিলিটি, ক্লাউডওয়াচ ও সার্টিফিকেশন ভাইভা',
      phaseSubtitle_en: 'Prepare for enterprise cloud roles and claim verified AWS credentials.',
      phaseSubtitle_bn: 'পেশাদার ক্লাউড সার্টিফিকেশন প্রস্তুতি ও ভাইভায় সর্বোচ্চ প্রস্তুতি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'cld-p4-m1',
          title_en: 'Application Load Balancers & Auto Scaling Groups',
          title_bn: 'লোড ব্যালেন্সার ও ক্লাউড অটো-স্কেলিং',
          description_en: 'Configure Auto Scaling Groups that launch additional EC2 instances during high traffic spikes and shrink during quiet hours.',
          description_bn: 'ওয়েবসাইটে ভিজিটর বেড়ে গেলে সার্ভারের সংখ্যা স্বয়ংক্রিয়ভাবে বাড়ানোর কনফিগারেশন।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['ALB Target Groups', 'Health Checks', 'Auto Scaling Policies', 'CloudWatch Alarms'],
          practicalTask_en: 'Configure a target group behind an Application Load Balancer that evenly distributes web traffic across 2 EC2 instances.',
          practicalTask_bn: 'অ্যাপ্লিকেশন লোড ব্যালেন্সার দিয়ে ট্র্যাফিক ২টি সার্ভারের মধ্যে সমানভাবে বণ্টন করার ল্যাব করো।'
        },
        {
          id: 'cld-p4-m2',
          title_en: 'AWS Cloud Practitioner Prep & Architectural Viva',
          title_bn: 'এডব্লিউএস ক্লাউড প্র্যাকটিশনার ও আর্কিটেকচারাল ভাইভা',
          description_en: 'Review official exam domains, practice explaining architectural tradeoffs, and complete the official AWS Skill Builder track.',
          description_bn: 'এডব্লিউএস স্কিল বিল্ডারের ফ্রি অফিশিয়াল সিলেবাস শেষ করা ও টেকনিক্যাল ভাইভা প্রস্তুতি।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Well-Architected Framework', 'Shared Responsibility Model', 'Billing Alerts', 'Technical Viva Walkthrough'],
          practicalTask_en: 'Complete the free official AWS Cloud Practitioner Essentials digital training and add the completion badge to your LinkedIn profile.',
          practicalTask_bn: 'এডব্লিউএসের অফিশিয়াল ফ্রি ক্লাউড প্র্যাকটিশনার ট্রেনিং শেষ করে ডিজিটাল ব্যাজ সিভিতে যুক্ত করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'cld-q1',
      question_en: 'What is the AWS Shared Responsibility Model? Who is responsible for what?',
      question_bn: 'এডব্লিউএস শেয়ার্ড রেসপনসিবিলিটি মডেল কী? কে কোন অংশের নিরাপত্তার দায়িত্ব নেয়?',
      category: 'Cloud Security',
      whyAsked_en: 'A foundational question asked by every cloud hiring manager to verify that the candidate understands where AWS responsibility ends and customer responsibility begins.',
      whyAsked_bn: 'প্রার্থী ক্লাউড নিরাপত্তা ও দায়িত্বের সঠিক সীমা বোঝে কি না তা যাচাই করার জন্য।',
      howToAnswer_en: 'AWS is responsible for "Security OF the Cloud": physical data center security, hardware, host virtualization, and network cabling. The customer is responsible for "Security IN the Cloud": guest operating system updates, firewall security groups, IAM credentials, application code, and data encryption.',
      howToAnswer_bn: 'এডব্লিউএস দায়িত্ব নেয় "সিকিউরিটি অফ দ্য ক্লাউড": ডেটা সেন্টারের ভৌত নিরাপত্তা, সার্ভার হার্ডওয়্যার ও নেটওয়ার্ক ক্যাবল। অন্যদিকে ক্লায়েন্ট দায়িত্ব নেয় "সিকিউরিটি ইন দ্য ক্লাউড": সার্ভারের অপারেটিং সিস্টেম আপডেট, সিকিউরিটি গ্রুপ ফায়ারওয়াল, আইএএম পাসওয়ার্ড ও ডেটা এনক্রিপশন।',
      commonMistakes_en: 'Assuming AWS automatically secures and backs up the customer data or patches their EC2 operating systems.',
      commonMistakes_bn: 'মনে করা যে এডব্লিউএস স্বয়ংক্রিয়ভাবে সার্ভারের সফটওয়্যার প্যাচিং বা ডাটা ব্যাকআপ করে দেয়।'
    },
    {
      id: 'cld-q2',
      question_en: 'What is the difference between a Public Subnet and a Private Subnet in an AWS VPC?',
      question_bn: 'এডব্লিউএস ভিপিসিতে পাবলিক সাবনেট ও প্রাইভেট সাবনেটের মধ্যে পার্থক্য কী?',
      category: 'Cloud Networking',
      whyAsked_en: 'Core networking architecture question verifying that the candidate can build secure environments where databases cannot be hacked from the public internet.',
      whyAsked_bn: 'প্রার্থী নিরাপদ নেটওয়ার্ক ডিজাইন করতে পারে কি না তা যাচাই করার সবচেয়ে গুরুত্বপূর্ণ প্রশ্ন।',
      howToAnswer_en: 'A Public Subnet has a route table directing 0.0.0.0/0 traffic directly to an Internet Gateway (IGW), allowing inbound public web traffic. A Private Subnet has no direct route to an Internet Gateway; instances inside it cannot be reached from the public internet and must use a NAT Gateway in a public subnet to reach outbound updates.',
      howToAnswer_bn: 'পাবলিক সাবনেটের রাউট টেবিল সরাসরি ইন্টারনেট গেটওয়ে (IGW) এর সাথে যুক্ত থাকে, ফলে ইন্টারনেটের মানুষ এতে ঢুকতে পারে। প্রাইভেট সাবনেট সরাসরি ইন্টারনেটের সাথে যুক্ত থাকে না (যেমন ডেটাবেস সার্ভার); এটি বাইরে থেকে হ্যাক করা অসম্ভব এবং কেবল প্রয়োজনে ন্যাট গেটওয়ে দিয়ে সফটওয়্যার আপডেট নিতে পারে।',
      commonMistakes_en: 'Putting database servers in public subnets with public IP addresses, which is an immediate security red flag in any interview.',
      commonMistakes_bn: 'ডেটাবেসকে পাবলিক সাবনেটে রাখা, যা ইন্টারভিউতে সরাসরি বাতিল হওয়ার কারণ হতে পারে।'
    }
  ],
  freeCerts: [
    {
      id: 'aws-skill-builder-essentials',
      title_en: 'AWS Cloud Practitioner Essentials Official Training',
      title_bn: 'এডব্লিউএস ক্লাউড প্র্যাকটিশনার অফিশিয়াল ফ্রি কোর্স',
      provider: 'Amazon Web Services (AWS Skill Builder)',
      url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials',
      mobileAccessible: true,
      language: 'en',
      durationHours: 10,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'The official digital course from Amazon Web Services directly preparing for real industry cloud architecture.',
      relevance_bn: 'আমাজন ওয়েব সার্ভিসেসের নিজস্ব অফিশিয়াল ফ্রি কোর্স ও ডিজিটাল ব্যাজ।'
    },
    {
      id: 'cisco-cloud-security',
      title_en: 'Cisco Networking Academy: Cloud Security Foundations',
      title_bn: 'সিসকো নেটঅ্যাকাড: ক্লাউড সিকিউরিটি ফাউন্ডেশনস',
      provider: 'Cisco Networking Academy',
      url: 'https://www.netacad.com',
      mobileAccessible: true,
      language: 'en',
      durationHours: 25,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Cisco verified badge proving practical enterprise cloud security and firewall policy competence.',
      relevance_bn: 'সিসকো নেটঅ্যাকাডের অফিশিয়াল ক্লাউড সিকিউরিটি সার্টিফিকেট।'
    },
    {
      id: 'edge-bd-cloud',
      title_en: 'EDGE ICT Project: Cloud Fundamentals Certification',
      title_bn: 'এজ প্রজেক্ট: ক্লাউড কম্পিউটিং ফান্ডামেন্টালস',
      provider: 'ICT Division, Government of Bangladesh (EDGE Project)',
      url: 'https://edge.gov.bd',
      mobileAccessible: true,
      language: 'both',
      durationHours: 30,
      cost: '100% Free',
      isBdLocal: true,
      category: 'bd_national',
      relevance_en: 'Government of Bangladesh sponsored free cloud training initiative tailored for polytechnic and college graduates.',
      relevance_bn: 'বাংলাদেশ সরকারের আইসিটি বিভাগের এজ প্রজেক্টের অধীন সম্পূর্ণ ফ্রি জাতীয় ক্লাউড সার্টিফিকেট।'
    }
  ]
};
