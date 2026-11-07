import type { CareerTrack } from '../../../shared/types.js';

export const cloudSolutionsArchitectureTrack: Omit<CareerTrack, 'id'> = {
  slug: 'cloud-solutions-architecture',
  title_en: 'Cloud Solutions Architecture, AWS/GCP & OpenTofu Engineering (2026 Edition)',
  title_bn: 'ক্লাউড সল্যুশনস আর্কিটেকচার, এডব্লিউএস/জিসিপি ও ওপেন-টোফু ইঞ্জিনিয়ারিং (২০২৬ এডিশন)',
  summary_en: 'Calibrated for late 2026. Architect resilient multi-region infrastructure, AWS & GCP core services, Kubernetes container orchestration, Infrastructure as Code with OpenTofu / Terraform, and scalable AI workload deployment with Cloud FinOps.',
  summary_bn: '২০২৬ সালের আধুনিক ক্লাউড আর্কিটেকচার চাহিদা অনুযায়ী সাজানো। এডব্লিউএস ও গুগল ক্লাউড, কিউবারনেটিস, ওপেন-টোফু দিয়ে ইনফ্রাস্ট্রাকচার অটোমেশন, ফিনঅপ্স কস্ট অপ্টিমাইজেশন এবং ক্লাউডে এআই মডেল ডিপ্লয়মেন্ট।',
  pivotAdvice_en: 'In 2026, click-ops in web consoles is obsolete. Leading software exporters, banks, and Silicon Valley remote employers hire cloud engineers who automate every subnet and server with OpenTofu / Terraform, orchestrate microservices with Kubernetes, implement FinOps cost guardrails, and host cloud AI inference pipelines.',
  pivotAdvice_bn: '২০২৬ সালে মাউস দিয়ে ক্লিক করে ম্যানুয়ালি ক্লাউড সার্ভার বানানোর দিন শেষ। দেশীয় শীর্ষ ব্যাংক ও আন্তর্জাতিক রিমোট কোম্পানিগুলো এমন ক্লাউড ইঞ্জিনিয়ারদের সর্বোচ্চ মূল্যায়ন করে যারা সম্পূর্ণ ক্লাউড ইনফ্রাস্ট্রাকচার কোডের মাধ্যমে (OpenTofu) তৈরি করতে পারে এবং ক্লাউডে এআই মডেল সাশ্রয়ী খরচে ডিপ্লয় করতে পারে।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Designing multi-availability zone Virtual Private Clouds (VPC) with public/private subnets and NAT gateways.',
    'Writing modular Infrastructure as Code using OpenTofu and Terraform to provision reproducible cloud clusters.',
    'Orchestrating containerized microservices and AI inference endpoints on managed Kubernetes (EKS / GKE).',
    'Enforcing IAM least-privilege policies, service control policies, and encrypted object storage with S3.',
    'Conducting Cloud FinOps reviews to optimize GPU instance utilization, spot pricing, and monthly cloud spend.'
  ],
  dayToDay_bn: [
    'ভার্চুয়াল প্রাইভেট ক্লাউড (VPC), প্রাইভেট সাবনেট ও ন্যাট গেটওয়ে দিয়ে সুরক্ষিত হাই-অ্যাভেইলেবিলিটি নেটওয়ার্ক ডিজাইন।',
    'ওপেন-টোফু ও টেরাফর্ম দিয়ে মডিউলার কোড লিখে এক ক্লিকে পুরো ক্লাউড ইনফ্রাস্ট্রাকচার স্বয়ংক্রিয়ভাবে তৈরি করা।',
    'ম্যানেজড কিউবারনেটিস (EKS/GKE) দিয়ে মাইক্রোসার্ভিস ও এআই মডেলের কন্টেইনার ক্লাস্টার পরিচালনা।',
    'আইএএম (IAM) পলিসি দিয়ে ক্লাউড সিকিউরিটি হার্ডেনিং ও এসথ্রি এনক্রিপশন নিশ্চিত করা।',
    'ক্লাউড ফিনঅপ্স (FinOps) অডিট করে স্পট ইনস্ট্যান্স ব্যবহার ও সার্ভারের অপ্রয়োজনীয় বিল সাশ্রয় করা।'
  ],
  mustHaveSkills: [
    {
      id: 'aws-gcp-core-networking',
      name: 'VPC Architecture & Cloud Networking',
      category: 'Cloud Infrastructure',
      importance: 'Essential',
      description_en: 'CIDR subnetting, Internet Gateways, NAT Gateways, Route Tables, and Security Group ingress/egress rules.',
      description_bn: 'ক্লাউড নেটওয়ার্ক সাবনেট, ন্যাট গেটওয়ে, রাউট টেবিল ও সিকিউরিটি গ্রুপ ফায়ারওয়াল।'
    },
    {
      id: 'opentofu-terraform-iac',
      name: 'Infrastructure as Code (OpenTofu / Terraform)',
      category: 'Automation & IaC',
      importance: 'Essential',
      description_en: 'HCL syntax, remote S3 state backends, DynamoDB state locking, reusable modules, and plan/apply workflows.',
      description_bn: 'ওপেন-টোফু ও টেরাফর্ম দিয়ে রিমোট স্টেট ব্যাকিং ও কোডের মাধ্যমে ক্লাউড অটোমেশন।'
    },
    {
      id: 'kubernetes-container-orchestration',
      name: 'Managed Kubernetes (EKS / GKE)',
      category: 'Container Orchestration',
      importance: 'Essential',
      description_en: 'Pods, Deployments, Services, Ingress controllers, Horizontal Pod Autoscaling (HPA), and Helm charts.',
      description_bn: 'কিউবারনেটিস পড, সার্ভিসেস, ইনগ্রেস ও লোড বাড়লে পডের স্বয়ংক্রিয় অটো-স্কেলিং।'
    },
    {
      id: 'cloud-finops-ai-deployment',
      name: 'Cloud FinOps & AI Inference Hosting',
      category: 'Cloud Economics & AI',
      importance: 'Essential',
      description_en: 'Cost governance, AWS Spot instances, Savings Plans, and deploying GPU inference nodes for LLMs.',
      description_bn: 'ক্লাউড বিল অপ্টিমাইজেশন, সাশ্রয়ী স্পট ইনস্ট্যান্স এবং ক্লাউডে এআই মডেল ডিপ্লয়মেন্ট।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Gulshan, Banani, Uttara, Kawran Bazar Corporate HQs) & Remote BD',
      entrySalary: { min: 35000, max: 60000, currency: 'BDT', formatted: '35,000 - 60,000 BDT' },
      midSalary: { min: 80000, max: 165000, currency: 'BDT', formatted: '80,000 - 165,000 BDT' },
      seniorSalary: { min: 180000, max: 380000, currency: 'BDT', formatted: '180,000 - 380,000 BDT' },
      hiringSectors: [
        'Fintech Giants & Digital Banks (bKash, Nagad, Shurjopay, Trust Bank FinTech)',
        'Offshore Software Exporters (Brain Station 23, Selise, Cefalo, Kaz Software)',
        'Cloud Migration Consultancies and AWS/Google Advanced Tier Partner Firms'
      ],
      cvExpectations: [
        'Hands-on comfort with AWS CLI and OpenTofu / Terraform scripts hosted on GitHub',
        'Demonstrable understanding of VPC network topology, NAT routing, and IAM least-privilege',
        'Understanding of container deployment and auto-scaling architecture under high traffic',
        'Diploma in CST with working cloud project deployed during technical interview'
      ],
      localDemandSummary_en: 'Bangladeshi enterprise software houses and financial institutions are migrating on-premise data centers to AWS and Google Cloud. CST diploma graduates who master OpenTofu IaC and Kubernetes command premium salaries with swift leadership opportunities.',
      localDemandSummary_bn: 'দেশের বড় বড় সফটওয়্যার কোম্পানি ও ব্যাংকগুলো নিজস্ব ডাটা সেন্টার ছেড়ে ক্লাউড সার্ভারে চলে যাচ্ছে। ফলে ওপেন-টোফু দিয়ে ক্লাউড অটোমেশন ও কিউবারনেটিস জানা ডিপ্লোমা ইঞ্জিনিয়ারদের জন্য চাকরির বাজারে বিপুল সম্ভাবনা ও আকর্ষণীয় বেতনের সুযোগ তৈরি হয়েছে।'
    },
    targetCountries: [
      {
        region: 'North America & Europe',
        countryName_en: 'United States, Germany & Netherlands',
        countryName_bn: 'যুক্তরাষ্ট্র, জার্মানি ও নেদারল্যান্ডস',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Cloud solutions architects and Kubernetes specialists with Terraform experience qualify for expedited technology visas across EU and US tech sectors.',
        visaReality_bn: 'ক্লাউড আর্কিটেকচার ও কিউবারনেটিস জানা প্রকৌশলীদের আন্তর্জাতিক টেক ভিসা প্রাপ্তির প্রক্রিয়া অত্যন্ত দ্রুত সম্পন্ন হয়।',
        averageSalaryUsdOrLocal: '$85,000 - $150,000 USD / year (approx 10,200,000 - 18,000,000 BDT)',
        requiredExperienceYears: '2 to 5 years'
      },
      {
        region: 'Middle East',
        countryName_en: 'United Arab Emirates & Saudi Arabia',
        countryName_bn: 'সংযুক্ত আরব আমিরাত ও সৌদি আরব',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Massive government giga-projects (NEOM, Dubai Smart City) hire thousands of certified cloud engineers on tax-free remuneration.',
        visaReality_bn: 'দুবাই ও সৌদি আরবের স্মার্ট সিটি প্রকল্পগুলোতে আন্তর্জাতিক মানের ক্লাউড ইঞ্জিনিয়ারদের ব্যাপক চাহিদা ও ট্যাক্স-ফ্রি বেতন রয়েছে।',
        averageSalaryUsdOrLocal: '15,000 - 28,000 AED / month (approx 480,000 - 900,000 BDT)',
        requiredExperienceYears: '2 to 5 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$1,500 - $5,500 USD',
      competitionLevel: 'Global, won through clean GitHub IaC modules and demonstrable cost-optimization case studies',
      competitionLevel_bn: 'গিটহাবে স্বচ্ছ টেরাফর্ম/ওপেন-টোফু কোড এবং ক্লাউড বিল কমানোর বাস্তব কেস স্টাডি উপস্থাপনের মাধ্যমে দূরবর্তী চাকরি নিশ্চিত হয়',
      englishRequirement: 'Professional English to author architecture decision records (ADR) and review cloud infrastructure pull requests',
      englishRequirement_bn: 'ক্লাউড আর্কিটেকচার ডিজাইন ডকুমেন্ট তৈরি ও ক্লায়েন্টের সাথে মিটিং করার মতো সাবলীল ইংরেজি',
      realities_en: [
        'Global startups employ remote cloud engineers to maintain their multi-region AWS/GCP clusters and manage infrastructure automation.',
        'A public GitHub repository hosting reusable Terraform modules and architectural diagrams serves as immediate proof of competence.'
      ],
      realities_bn: [
        'আন্তর্জাতিক কোম্পানিগুলো তাদের ক্লাউড সার্ভার সাশ্রয়ী উপায়ে সচল রাখার জন্য রিমোট ক্লাউড আর্কিটেক্ট নিয়োগ দেয়।',
        'সিভিতে ওপেন সোর্স টেরাফর্ম মডিউল ও ক্লাউড নেটওয়ার্ক ডায়াগ্রামের লিংক থাকলে নিয়োগদাতাদের সরাসরি দৃষ্টি আকর্ষণ করা যায়।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Cloud Foundations, IAM Least-Privilege & VPC Networking',
      phaseTitle_bn: 'ক্লাউড ভিত্তি, আইএএম নিরাপত্তা ও ভিপিসি নেটওয়ার্ক আর্কিটেকচার',
      phaseSubtitle_en: 'Design secure subnets, internet routing, and fine-grained cloud permissions.',
      phaseSubtitle_bn: 'ক্লাউড নেটওয়ার্ক ডিজাইন, প্রাইভেট সাবনেট ও আইএএম পারমিশন নীতি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'cld-p1-m1',
          title_en: 'VPC Topology: Public/Private Subnets & NAT Gateways',
          title_bn: 'ভিপিসি নেটওয়ার্ক: পাবলিক/প্রাইভেট সাবনেট ও ন্যাট গেটওয়ে',
          description_en: 'Design a production VPC across 2 Availability Zones. Route public subnet traffic to Internet Gateway, and route private database traffic through a managed NAT Gateway.',
          description_bn: 'দুটি আলাদা জোনে ভিপিসি তৈরি করা, যাতে ডেটাবেস কখনো সরাসরি ইন্টারনেটে এক্সপোজড না হয় এবং ন্যাট দিয়ে নিরাপদ ইন্টারনেট পায়।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['VPC CIDR Calculation (/16 vs /24)', 'Internet Gateway (IGW)', 'NAT Gateway routing', 'Network ACLs vs Security Groups'],
          practicalTask_en: 'Design a dual-AZ VPC architecture with 2 public subnets and 2 private subnets, ensuring private subnets access the internet strictly through a NAT Gateway.',
          practicalTask_bn: 'এডব্লিউএস-এ একটি ভিপিসি নেটওয়ার্ক ডিজাইন করো যেখানে পাবলিক সাবনেটে লোড ব্যালেন্সার এবং প্রাইভেট সাবনেটে ডেটাবেস নিরাপদ থাকবে।'
        },
        {
          id: 'cld-p1-m2',
          title_en: 'IAM Roles, Least-Privilege Policies & Cloud Security',
          title_bn: 'আইএএম রোলস, ন্যূনতম পারমিশন নীতি ও ক্লাউড সিকিউরিটি',
          description_en: 'Create custom IAM JSON policies enforcing least-privilege. Eliminate long-lived access keys by using IAM Instance Profiles and assume-role temporary credentials.',
          description_bn: 'সার্ভারে স্থায়ী সিক্রেট কি না রেখে আইএএম রোল ব্যবহার করে ক্লাউড সেবাগুলোর মধ্যে নিরাপদ যোগাযোগ নিশ্চিত করা।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['IAM Users, Groups & Roles', 'JSON Policy Effect/Action/Resource', 'Instance Profiles for EC2', 'MFA Enforcement'],
          practicalTask_en: 'Write an IAM policy that allows an EC2 instance to read from a specific S3 bucket while denying all other services and deleting operations.',
          practicalTask_bn: 'একটি আইএএম পলিসি লেখো যা শুধু একটি নির্দিষ্ট এসথ্রি ফোল্ডার থেকে ফাইল পড়তে দেবে কিন্তু কোনো কিছু ডিলিট করার অনুমতি দেবে না।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Compute, Autoscaling, S3 Storage & Managed Databases (RDS)',
      phaseTitle_bn: 'কম্পিউট, অটো-স্কেলিং, এসথ্রি ক্লাউড স্টোরেজ ও ম্যানেজড আরডিএস',
      phaseSubtitle_en: 'Deploy high-availability EC2 clusters behind Application Load Balancers.',
      phaseSubtitle_bn: 'লোড ব্যালেন্সারের পেছনে হাই-অ্যাভেইলেবিলিটি সার্ভার ক্লাস্টার ও এসথ্রি ডেটা স্টোরেজ।',
      durationWeeks: 4,
      modules: [
        {
          id: 'cld-p2-m1',
          title_en: 'EC2 Auto Scaling Groups & Application Load Balancers (ALB)',
          title_bn: 'ইসি২ অটো-স্কেলিং গ্রুপ ও অ্যাপ্লিকেশন লোড ব্যালেন্সার',
          description_en: 'Configure launch templates with cloud-init bash user data, configure health-check ping targets, and set CPU-utilization scaling policies.',
          description_bn: 'ট্র্যাফিক বাড়লে সার্ভার নিজে নিজে বেড়ে যাওয়া (Auto-scale) এবং ট্র্যাফিক কমলে খরচ কমাতে স্বয়ংক্রিয়ভাবে কমে যাওয়ার সিস্টেম।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Launch Templates & User Data', 'Target Groups & Health Checks', 'Scale-out & Scale-in Policies', 'Multi-AZ High Availability'],
          practicalTask_en: 'Configure an ALB that routes traffic to an Auto Scaling Group that automatically scales from 2 to 6 EC2 instances when CPU load crosses 70%.',
          practicalTask_bn: 'একটি লোড ব্যালেন্সার ও অটো-স্কেলিং ক্লাস্টার তৈরি করো যা লোড বাড়লে স্বয়ংক্রিয়ভাবে সার্ভার সংখ্যা বৃদ্ধি করে।'
        },
        {
          id: 'cld-p2-m2',
          title_en: 'S3 Object Storage Lifecycle & PostgreSQL RDS Replication',
          title_bn: 'এসথ্রি অবজেক্ট স্টোরেজ ও পোস্টগ্রেসকিউএল আরডিএস রেপ্লিকেশন',
          description_en: 'Manage S3 bucket policies, versioning, Intelligent-Tiering cost reduction, and provision multi-AZ PostgreSQL RDS with automated read replicas.',
          description_bn: 'এসথ্রি স্টোরেজের খরচ কমানোর নিয়ম এবং ব্যাকআপ ও রিড রেপ্লিকা সহ ম্যানেজড পোস্টগ্রেস ডেটাবেস পরিচালনা।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['S3 Lifecycle & Tiering', 'Cross-Region Replication', 'RDS Multi-AZ Failover', 'Read Replicas for Analytics'],
          practicalTask_en: 'Set up an S3 bucket with lifecycle rules transitioning logs to Glacier after 30 days, and launch a Multi-AZ PostgreSQL RDS instance.',
          practicalTask_bn: 'এসথ্রি বাকেটে এমন রুল বসাও যা ৩০ দিন পর ফাইল স্বয়ংক্রিয়ভাবে সাশ্রয়ী গ্লেসিয়ার স্টোরেজে পাঠিয়ে দেবে।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Infrastructure as Code with OpenTofu / Terraform & GitOps',
      phaseTitle_bn: 'ওপেন-টোফু / টেরাফর্ম দিয়ে ইনফ্রাস্ট্রাকচার-অ্যাজ-কোড ও গিটঅপ্স',
      phaseSubtitle_en: 'Provision entire cloud architectures with declarative code modules.',
      phaseSubtitle_bn: 'কোড লিখে এক ক্লিকে সম্পূর্ণ ক্লাউড ইনফ্রাস্ট্রাকচার তৈরি ও অটোমেশন।',
      durationWeeks: 5,
      modules: [
        {
          id: 'cld-p3-m1',
          title_en: 'Declarative HCL, Remote State Storage & DynamoDB Locking',
          title_bn: 'এইচসিএল সিনট্যাক্স, রিমোট স্টেট স্টোরেজ ও ডায়নামো-ডিবি লকিং',
          description_en: 'Master OpenTofu/Terraform variables, outputs, resource blocks, store state securely in S3, and lock concurrent executions using DynamoDB.',
          description_bn: 'টেরাফর্ম রিমোট স্টেট নিরাপদে ক্লাউডে সংরক্ষণ এবং একাধিক ইঞ্জিনিয়ার একসাথে কাজ করার সময় স্টেট লকিং মেকানিজম।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['OpenTofu vs Terraform', 'HCL syntax & interpolation', 'terraform.tfstate in S3', 'DynamoDB State Locking'],
          practicalTask_en: 'Write an OpenTofu project that creates a complete VPC, subnets, and internet gateway with remote state backed in S3 and DynamoDB.',
          practicalTask_bn: 'একটি ওপেন-টোফু স্ক্রিপ্ট তৈরি করো যা রান করলে স্বয়ংক্রিয়ভাবে ক্লাউডে ভিপিসি ও সাবনেট তৈরি হয়ে যায়।'
        },
        {
          id: 'cld-p3-m2',
          title_en: 'Reusable Terraform Modules & Automated CI/CD GitOps',
          title_bn: 'টেরাফর্ম মডিউলারাইজেশন ও সিআই/সিডি গিটঅপ্স অটোমেশন',
          description_en: 'Build reusable modules for VPC, Compute, and Databases. Run opentofu plan in GitHub Actions pull requests and apply upon merge.',
          description_bn: 'পুনর্ব্যবহারযোগ্য ক্লাউড মডিউল বানানো এবং গিটহাবে পুশ করার সাথে সাথে কোড টেস্ট করে ক্লাউড ইনফ্রাস্ট্রাকচার আপডেট করা।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Module Inputs and Outputs', 'Environments (Dev / Prod)', 'GitHub Actions for IaC', 'Detecting Infrastructure Drift'],
          practicalTask_en: 'Package a reusable Web Cluster module in OpenTofu and deploy identical Staging and Production environments with different variable files.',
          practicalTask_bn: 'একটি ক্লাউড মডিউল বানাও যা দিয়ে ভিন্ন ভ্যারিয়েবল ফাইল ব্যবহার করে স্টেজ ও প্রোডাকশন এনভায়রনমেন্ট আলাদাভাবে তৈরি করা যায়।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Kubernetes (EKS/GKE), Cloud FinOps, AI Workloads & Viva',
      phaseTitle_bn: 'কিউবারনেটিস (EKS), ক্লাউড ফিনঅপ্স, এআই ডিপ্লয়মেন্ট ও ভাইভা',
      phaseSubtitle_en: 'Scale container pods, optimize monthly bills, and master architecture interviews.',
      phaseSubtitle_bn: 'কিউবারনেটিসে পড স্কেলিং, ক্লাউড খরচ হ্রাস এবং টেকনিক্যাল ভাইভায় সফলতার কৌশল।',
      durationWeeks: 5,
      modules: [
        {
          id: 'cld-p4-m1',
          title_en: 'Kubernetes on AWS (EKS): Pods, Services & Ingress Controllers',
          title_bn: 'এডব্লিউএস কিউবারনেটিস (EKS): পডস, সার্ভিসেস ও ইনগ্রেস কন্ট্রোলার',
          description_en: 'Deploy containerized applications on Amazon EKS. Configure Horizontal Pod Autoscaler (HPA) to scale pods based on traffic demand.',
          description_bn: 'কিউবারনেটিসে পড ডিপ্লয় করা, লোড বাড়লে অটোমেটিক পড সংখ্যা বাড়ানো এবং ক্লাউড লোড ব্যালেন্সার দিয়ে ট্র্যাফিক বণ্টন।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['EKS Node Groups', 'kubectl commands & YAML manifests', 'Horizontal Pod Autoscaler (HPA)', 'AWS Load Balancer Controller'],
          practicalTask_en: 'Deploy a multi-replica web microservice on a local Minikube or EKS cluster and configure HPA to scale pods up to 10 under load.',
          practicalTask_bn: 'একটি মাইক্রোসার্ভিস কিউবারনেটিসে ডিপ্লয় করো এবং চাপ বাড়লে নিজে নিজে ১০টি পড পর্যন্ত স্কেল হওয়ার নিয়ম কনফিগার করো।'
        },
        {
          id: 'cld-p4-m2',
          title_en: 'Cloud FinOps Cost Governance & Hosting AI Inference',
          title_bn: 'ক্লাউড ফিনঅপ্স কস্ট অপ্টিমাইজেশন ও সাশ্রয়ী এআই হোস্টিং',
          description_en: 'Implement AWS Cost Explorer tags, leverage Spot Instances for 70% discount on batch jobs, and deploy GPU-backed AI inference endpoints cost-effectively.',
          description_bn: 'স্পট ইনস্ট্যান্স ব্যবহার করে ৭০% ক্লাউড খরচ বাঁচানো এবং সাশ্রয়ী উপায়ে জিপিইউ সার্ভারে এআই মডেল ডিপ্লয় করার কৌশল।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Spot Instances & Savings Plans', 'Cost Allocation Tags', 'Serverless GPU Hosting', 'Cloud FinOps Principles'],
          practicalTask_en: 'Produce an AWS FinOps architecture proposal demonstrating how migrating on-demand EC2 to Spot and Graviton ARM processors cuts monthly bills by 50%.',
          practicalTask_bn: 'একটি ক্লাউড খরচ সাশ্রয়ের রূপরেখা তৈরি করো যা প্রমাণ করে কীভাবে গ্র্যাভিটন এআরএম ও স্পট ইনস্ট্যান্স ব্যবহার করে বিল অর্ধেক করা যায়।'
        },
        {
          id: 'cld-p4-m3',
          title_en: 'Architecture Portfolio, Clean Documentation & Cloud Viva',
          title_bn: 'আর্কিটেকচার পোর্টফোলিও, ক্লাউড ডায়াগ্রাম ও সিনিয়র ভাইভা',
          description_en: 'Publish clean diagrams using Draw.io / Mermaid, host your OpenTofu modules on GitHub, and practice answering system design interview questions.',
          description_bn: 'প্রফেশনাল ক্লাউড ডায়াগ্রাম তৈরি, গিটহাবে ওপেন-টোফু কোড সংরক্ষণ এবং টেকনিক্যাল সিস্টেম ডিজাইন ভাইভায় সফলতার প্রস্তুতি।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['Cloud Architecture Diagrams', 'Disaster Recovery (RTO / RPO)', 'System Design Interview Questions', 'CV Cloud Highlighting'],
          practicalTask_en: 'Assemble a public GitHub repository showcasing your modular OpenTofu code, architecture diagrams, and cost breakdown table.',
          practicalTask_bn: 'তোমার গিটহাবে সম্পূর্ণ ক্লাউড ইনফ্রাস্ট্রাকচার কোড, আর্কিটেকচার ছবি ও খরচ বিশ্লেষণের বিবরণ যুক্ত করে সিভিতে প্রদর্শন করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'cld-q1',
      question_en: 'In an AWS VPC, what is the architectural difference between a public and private subnet, and how does a private subnet access the internet?',
      question_bn: 'এডব্লিউএস ভিপিসি-তে পাবলিক ও প্রাইভেট সাবনেটের মধ্যে পার্থক্য কী এবং একটি প্রাইভেট সাবনেট কীভাবে ইন্টারনেটে নিরাপদ সংযোগ পায়?',
      category: 'Cloud Networking',
      whyAsked_en: 'The definitive cloud networking question to ensure candidate will never leave production databases exposed to the public internet.',
      whyAsked_bn: 'প্রার্থী ক্লাউড নেটওয়ার্কের নিরাপত্তা কাঠামো ও ন্যাট গেটওয়ের কাজ সঠিকভাবে বোঝে কি না তা নিশ্চিত করতে।',
      howToAnswer_en: 'A public subnet has a route table entry pointing 0.0.0.0/0 to an Internet Gateway (IGW), and instances inside have public IP addresses accessible directly from the internet (e.g. Load Balancers). A private subnet has no route to an Internet Gateway and instances do not possess public IP addresses (e.g. PostgreSQL databases, internal application microservices). To allow private instances to download security patches or connect to external APIs without allowing inbound internet connections, traffic is routed to a managed NAT Gateway located in the public subnet. The NAT Gateway performs Network Address Translation, masking private IP addresses behind its single elastic public IP.',
      howToAnswer_bn: 'পাবলিক সাবনেটের রাউট টেবিলে ইন্টারনেট গেটওয়ের (IGW) সংযোগ থাকে, ফলে এর ভেতরের সার্ভারগুলোর নিজস্ব পাবলিক আইপি থাকে যা সরাসরি ইন্টারনেট থেকে দেখা যায় (যেমন লোড ব্যালেন্সার)। অন্যদিকে প্রাইভেট সাবনেটের সাথে ইন্টারনেট গেটওয়ের কোনো সংযোগ থাকে না এবং এর সার্ভারগুলোর কোনো পাবলিক আইপি থাকে না (যেমন ডেটাবেস)। প্রাইভেট সার্ভারগুলোর সফটওয়্যার আপডেট বা বাইরের এপিআই কলের জন্য পাবলিক সাবনেটে একটি ন্যাট গেটওয়ে (NAT Gateway) বসানো হয়। ন্যাট গেটওয়ের মাধ্যমে প্রাইভেট সার্ভারগুলো নিরাপদে বাইরে তথ্য পাঠাতে পারে, কিন্তু বাইরের কেউ সরাসরি প্রাইভেট সার্ভারে ঢুকতে পারে না।',
      commonMistakes_en: 'Placing the NAT Gateway inside the private subnet (it must reside in a public subnet to reach the IGW).',
      commonMistakes_bn: 'ন্যাট গেটওয়েকে প্রাইভেট সাবনেটে স্থাপন করার ভুল ধারণা (এটি অবশ্যই পাবলিক সাবনেটে থাকতে হয়)।'
    },
    {
      id: 'cld-q2',
      question_en: 'How does OpenTofu / Terraform manage state, why is remote state locking with DynamoDB critical, and how do you handle state drift?',
      question_bn: 'ওপেন-টোফু / টেরাফর্ম কীভাবে স্টেট পরিচালনা করে, ডায়নামো-ডিবি দিয়ে স্টেট লকিং কেন আবশ্যক এবং স্টেট ড্রিফট কীভাবে সমাধান করা হয়?',
      category: 'Infrastructure as Code',
      whyAsked_en: 'Critical question verifying enterprise team collaboration experience and prevention of cloud infrastructure corruption.',
      whyAsked_bn: 'টিমের মধ্যে একাধিক প্রকৌশলী একসাথে কোড দিয়ে সার্ভার পরিচালনার বাস্তব অভিজ্ঞতা ও নিরাপত্তা সচেতনতা যাচাই করতে।',
      howToAnswer_en: 'Terraform uses a state file (terraform.tfstate) to map declared HCL code configurations to real-world cloud resource IDs and attributes. In production teams, storing state locally on a developer laptop is disastrous. We configure a remote backend using an encrypted AWS S3 bucket with versioning enabled. To prevent two engineers or two CI/CD pipelines from running terraform apply at the exact same moment (which would corrupt the state file), we utilize DynamoDB for distributed state locking. State drift occurs when resources are modified out-of-band via the web console. Running opentofu plan refreshes state against real AWS APIs, detects discrepancies, and proposes corrective code updates to restore the infrastructure to the desired code state.',
      howToAnswer_bn: 'টেরাফর্ম তার স্টেট ফাইলের মাধ্যমে কোডের সাথে ক্লাউডে বাস্তবে তৈরি হওয়া সার্ভারের ম্যাপিং মনে রাখে। টিমের কাজে লোকাল ফাইলে স্টেট রাখা বিপজ্জনক। তাই এটি এসথ্রি (S3) বাকেটে ভার্সনিং সহ সংরক্ষণ করা হয়। আর একই সময়ে দুজন ব্যক্তি বা সিআই/সিডি স্ক্রিপ্ট যাতে একসাথে স্টেট ফাইল পরিবর্তন করে নষ্ট না করে, সেজন্য ডায়নামো-ডিবি দিয়ে স্টেট লক করে রাখা হয়। কেউ যদি কনসোলে ঢুকে গোপনে কিছু পরিবর্তন করে, তবে তাকে স্টেট ড্রিফট বলে। opentofu plan চালালে তা তৎক্ষণাৎ ধরা পড়ে এবং কোডের নিয়মানুযায়ী ক্লাউডকে আবার পূর্বাবস্থায় ফিরিয়ে আনা যায়।',
      commonMistakes_en: 'Checking terraform.tfstate into public Git repositories, exposing database credentials and sensitive resource IDs.',
      commonMistakes_bn: 'গিটহাবে স্টেট ফাইল পুশ করে দেওয়া যা কোম্পানির সমস্ত ডেটাবেস পাসওয়ার্ড ও গোপন সিক্রেট ফাঁস করে দেয়।'
    },
    {
      id: 'cld-q3',
      question_en: 'What is Cloud FinOps, and what actionable strategies reduce monthly AWS infrastructure spending by 40% to 60%?',
      question_bn: 'ক্লাউড ফিনঅপ্স (FinOps) কী এবং কোন কার্যকর কৌশলগুলো ব্যবহার করে এডব্লিউএস-এর মাসিক ক্লাউড বিল ৪০% থেকে ৬০% পর্যন্ত কমানো সম্ভব?',
      category: 'Cloud Economics',
      whyAsked_en: 'High-value business skill: hiring managers want architects who optimize operating margins rather than ballooning cloud budgets.',
      whyAsked_bn: 'প্রার্থী শুধু সার্ভার চালানোই জানে নাকি কোম্পানির টাকা সাশ্রয় করার মতো ব্যবসায়িক বুদ্ধিমত্তা রাখে তা পরীক্ষা করতে।',
      howToAnswer_en: 'Cloud FinOps is the cultural practice of maximizing business value by bringing financial accountability to variable cloud spending. Key cost-reduction levers include: 1) Utilizing AWS Spot Instances for batch jobs, CI/CD runners, and fault-tolerant stateless microservices, yielding up to 70-90% savings compared to on-demand; 2) Purchasing 1-to-3 year Compute Savings Plans for predictable baseline workloads (up to 66% discount); 3) Right-sizing overprovisioned EC2 and RDS instances based on CloudWatch 30-day average CPU/RAM utilization; 4) Migrating x86 workloads to AWS Graviton (ARM64) processors offering 20% lower cost and 40% better price-performance; 5) Enabling S3 Intelligent-Tiering to automatically move inactive data to cheaper archive tiers.',
      howToAnswer_bn: 'ক্লাউড ফিনঅপ্স হলো প্রযুক্তির সাথে আর্থিক শৃঙ্খলার সমন্বয় করে সার্ভারের সর্বোচ্চ ব্যবহার ও সর্বনিম্ন বিল নিশ্চিত করার কৌশল। খরচ কমানোর সেরা উপায়গুলো হলো: ১) সাধারণ ব্যাকগ্রাউন্ড ও ব্যাচ কাজের জন্য অন-ডিমান্ড সার্ভারের বদলে স্পট ইনস্ট্যান্স ব্যবহার করা যাতে ৭০% থেকে ৯০% পর্যন্ত খরচ বাঁচে; ২) মূল সার্ভারের জন্য ১ বা ৩ বছরের সেভিংস প্ল্যান নেওয়া; ৩) ক্লাউডওয়াচ দিয়ে পর্যবেক্ষণ করে অপ্রয়োজনীয় বড় সাইজের সার্ভার কমিয়ে সঠিক সাইজে আনা; ৪) ইন্টেল/এএমডির বদলে এডব্লিউএস নিজস্ব গ্র্যাভিটন (ARM64) প্রসেসরে শিফট করা যা ২০% সস্তা ও দ্রুত; ৫) এসথ্রি ইন্টেলিজেন্ট টিয়ারিং চালু করা যাতে পুরনো ডেটা স্বয়ংক্রিয়ভাবে সাশ্রয়ী আর্কাইভে চলে যায়।',
      commonMistakes_en: 'Leaving unattached Elastic IPs, orphaned EBS storage volumes, and unused test instances running indefinitely.',
      commonMistakes_bn: 'অব্যবহৃত ইবিএস ডিস্ক বা আইপি ডিলিট না করে মাসের পর মাস অযথা বিল দেওয়া।'
    },
    {
      id: 'cld-q4',
      question_en: 'How do you architect low-latency AI inference endpoints on cloud Kubernetes (EKS) with GPU auto-scaling based on incoming queue depth?',
      question_bn: 'ক্লাউড কিউবারনেটিসে (EKS) আগত রিকোয়েস্টের ওপর ভিত্তি করে জিপিইউ অটো-স্কেলিং সহ উচ্চগতির এআই মডেল কীভাবে ডিপ্লয় করতে হয়?',
      category: 'Cloud AI Architecture',
      whyAsked_en: 'Assesses 2026 cutting-edge competency in orchestrating expensive GPU hardware for production AI workloads.',
      whyAsked_bn: '২০২৬ সালের আধুনিক এআই মডেলগুলোকে ক্লাউডে সাশ্রয়ী ও দ্রুততম উপায়ে হোস্ট করার দক্ষতা দেখতে।',
      howToAnswer_en: 'Deploying LLMs on Kubernetes requires specialized scaling beyond simple CPU/RAM metrics: 1) Provision EKS Managed Node Groups with NVIDIA GPU instances (e.g. g5 or g6 family) using Karpenter for rapid just-in-time node provisioning; 2) Install the NVIDIA GPU Operator to expose CUDA devices to Kubernetes container runtimes; 3) Serve the open-weights model using high-throughput engines like vLLM with PagedAttention; 4) Use KEDA (Kubernetes Event-driven Autoscaling) attached to an SQS queue or custom Prometheus metrics (vllm:num_requests_waiting) rather than CPU utilization to scale inference pods instantly when queue backlog spikes; 5) Scale down GPU nodes to zero during off-peak hours to avoid draining corporate capital.',
      howToAnswer_bn: 'কিউবারনেটিসে এআই মডেল ডিপ্লয় করার জন্য সাধারণ সিপিইউ দিয়ে অটো-স্কেল করলে চলে না। ১) কার্পেন্টার (Karpenter) দিয়ে এনভিডিয়া জিপিইউ নোড দ্রুত যুক্ত করার ব্যবস্থা করা হয়; ২) এনভিডিয়া জিপিইউ অপারেটর দিয়ে কনটেইনারে কুডা অ্যাক্সেস দেওয়া হয়; ৩) vLLM দিয়ে মডেল সার্ভ করা হয়; ৪) কিডা (KEDA) দিয়ে রিকোয়েস্ট কিউয়ের ব্যাকলগ মনিটর করে সাথে সাথে পড স্কেল করা হয় যাতে ব্যবহারকারীকে উত্তরের জন্য অপেক্ষা করতে না হয়; ৫) আর রাতে বা যখন ব্যবহারকারী থাকে না তখন জিপিইউ সার্ভার স্বয়ংক্রিয়ভাবে বন্ধ (scale to zero) করে ক্লাউড বিল শূন্যে নামিয়ে আনা হয়।',
      commonMistakes_en: 'Attempting to scale GPU inference nodes using CPU metric averages, which lag severely behind LLM request bursts.',
      commonMistakes_bn: 'সাধারণ সিপিইউ শতাংশ দেখে জিপিইউ সার্ভার বাড়ানোর চেষ্টা করা, যা এআই ট্র্যাফিক বৃদ্ধির সাথে তাল মেলাতে পারে না।'
    }
  ],
  freeCerts: [
    {
      id: 'aws-cloud-quest',
      title_en: 'AWS Cloud Quest: Cloud Practitioner Digital Badge',
      title_bn: 'এডব্লিউএস ক্লাউড কোয়েস্ট: ক্লাউড প্র্যাকটিশনার ভেরিফায়েড ব্যাজ',
      provider: 'Amazon Web Services (AWS)',
      url: 'https://aws.amazon.com/training/digital/aws-cloud-quest/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 35,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official interactive gamified training directly from AWS teaching real VPCs, EC2 instances, S3, and database architectures.',
      relevance_bn: 'আমাজন ওয়েব সার্ভিসেসের নিজস্ব অফিশিয়াল ইন্টারঅ্যাক্টিভ ল্যাব ও ভেরিফায়েড ক্লাউড ব্যাজ।'
    },
    {
      id: 'google-cloud-skills-boost',
      title_en: 'Google Cloud Skills Boost: Cloud Architecture Foundations Path',
      title_bn: 'গুগল ক্লাউড স্কিলস বুস্ট: ক্লাউড আর্কিটেকচার ফাউন্ডেশনস',
      provider: 'Google Cloud',
      url: 'https://www.cloudskillsboost.google/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 30,
      cost: '100% Free Tier',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official Google Cloud hands-on path covering Compute Engine, VPC networking, and Cloud IAM least privilege.',
      relevance_bn: 'গুগল ক্লাউডের অফিশিয়াল ল্যাব ও ইনফ্রাস্ট্রাকচার হ্যান্ডস-অন প্রশিক্ষণ।'
    },
    {
      id: 'hashicorp-terraform-assoc-free',
      title_en: 'HashiCorp / OpenTofu: Infrastructure as Code Learning Tracks',
      title_bn: 'হ্যাশিকর্প / ওপেন-টোফু: ইনফ্রাস্ট্রাকচার-অ্যাজ-কোড ট্র্যাক',
      provider: 'HashiCorp Developer / OpenTofu',
      url: 'https://developer.hashicorp.com/terraform/tutorials',
      mobileAccessible: true,
      language: 'en',
      durationHours: 25,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Comprehensive official interactive guide covering HCL syntax, modules, state management, and multi-cloud provisioning.',
      relevance_bn: 'টেরাফর্ম ও ওপেন-টোফুর নিজস্ব অফিশিয়াল টিউটোরিয়াল ও কোড কনফিগারেশন ল্যাব।'
    }
  ]
};
