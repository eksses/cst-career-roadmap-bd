import type { CareerTrack } from '../../../shared/types.js';

export const graphicDesignMotionTrack: Omit<CareerTrack, 'id'> = {
  slug: 'graphic-design-motion',
  title_en: 'Graphic Design and Visual Production',
  title_bn: 'গ্রাফিক ডিজাইন ও ভিজুয়াল প্রোডাকশন',
  summary_en: 'Brand identity design, vector illustration in Illustrator, photo manipulation in Photoshop, social media ad creatives, and basic motion graphics in After Effects.',
  summary_bn: 'লোগো ও ব্র্যান্ড আইডেন্টিটি ডিজাইন, ফটোশপ ও ইলাস্ট্রেটর দিয়ে আকর্ষণীয় ব্যানার তৈরি এবং আফটার ইফেক্টস দিয়ে মোশন গ্রাফিক্স তৈরির প্র্যাকটিক্যাল ট্র্যাক।',
  pivotAdvice_en: 'Visual design offers the fastest path to freelance marketplace income (Fiverr, Upwork) and local marketing agency jobs. If you have artistic flair and prefer visual software over logic code, this track builds immediate earning confidence.',
  pivotAdvice_bn: 'ফ্রিল্যান্স মার্কেটপ্লেস ও দেশীয় বিজ্ঞাপন সংস্থায় দ্রুত আয় করার জন্য গ্রাফিক ডিজাইন সবচেয়ে পরীক্ষিত মাধ্যম। তোমার যদি শৈল্পিক মনন থাকে এবং কোডিং এড়িয়ে কাজ করতে চাও, তবে এই ট্র্যাকটি তোমার সেরা আত্মবিশ্বাস গড়ে তুলবে।',
  minPcRequired: 'standard',
  dayToDay_en: [
    'Creating high-converting social media carousels and promotional posters for client campaigns.',
    'Designing vector logos, brand style guidelines, and typography palettes in Adobe Illustrator.',
    'Editing and color-grading product photography for e-commerce catalogs in Photoshop.',
    'Animating short 10-second motion graphics and lower thirds for social media videos in After Effects.',
    'Delivering print-ready CMYK files with proper bleeds and crop marks for local press printing.'
  ],
  dayToDay_bn: [
    'ফেসবুক ও ইনস্টাগ্রাম ক্যাম্পেইনের জন্য আকর্ষণীয় ব্যানার ও বিজ্ঞাপন ডিজাইন করা।',
    'ইলাস্ট্রেটর দিয়ে ভেক্টর লোগো, ভিজিটিং কার্ড ও ব্র্যান্ডিং গাইডলাইন তৈরি করা।',
    'ই-কমার্স ওয়েবসাইটের জন্য প্রোডাক্টের ছবির ব্যাকগ্রাউন্ড রিমুভ ও কালার কারেকশন করা।',
    'আফটার ইফেক্টস দিয়ে সোশ্যাল মিডিয়া রিল বা ভিডিওর জন্য ছোট মোশন অ্যানিমেশন বানানো।',
    'প্রেস প্রিন্টিংয়ের জন্য সিএমওয়াইকে (CMYK) কালার মোডে প্রিন্ট-রেডি ফাইল প্রস্তুত করা।'
  ],
  mustHaveSkills: [
    {
      id: 'adobe-illustrator-vector',
      name: 'Adobe Illustrator and Vector Precision',
      category: 'Design Tools',
      importance: 'Essential',
      description_en: 'Pen tool mastery, pathfinder operations, typography pairing, and vector logo construction.',
      description_bn: 'পেন টুলের নিখুঁত ব্যবহার, পাথফাইন্ডার ও ভেক্টর লোগো ডিজাইন।'
    },
    {
      id: 'adobe-photoshop-raster',
      name: 'Adobe Photoshop and Photo Retouching',
      category: 'Design Tools',
      importance: 'Essential',
      description_en: 'Layer masks, blending modes, clipping paths, color grading, and non-destructive editing.',
      description_bn: 'লেয়ার মাস্কিং, ব্লেন্ডিং মোড ও নিখুঁত ফটো এডিটিং টেকনিক।'
    },
    {
      id: 'social-media-creative-strategy',
      name: 'High-Converting Social Media Creatives',
      category: 'Marketing Design',
      importance: 'Essential',
      description_en: 'Hook-driven banners, readability on mobile feeds, and visual hierarchy for f-commerce brands.',
      description_bn: 'মোবাইল স্ক্রিনে সহজেই নজর কাড়ে এমন সোশ্যাল মিডিয়া ব্যানার ডিজাইন।'
    },
    {
      id: 'motion-graphics-after-effects',
      name: 'Basic Motion Graphics (After Effects)',
      category: 'Motion',
      importance: 'Recommended',
      description_en: 'Keyframe easing, text animations, logo reveals, and exporting lightweight MP4/GIF assets.',
      description_bn: 'কি-ফ্রেম অ্যানিমেশন ও আকর্ষণীয় টেক্সট মোশন তৈরি।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka, Chattogram and All Urban Centers',
      entrySalary: { min: 18000, max: 28000, currency: 'BDT', formatted: '18,000 - 28,000 BDT' },
      midSalary: { min: 32000, max: 60000, currency: 'BDT', formatted: '32,000 - 60,000 BDT' },
      seniorSalary: { min: 65000, max: 130000, currency: 'BDT', formatted: '65,000 - 130,000 BDT' },
      hiringSectors: [
        'Creative Advertising Agencies and Media Buying Houses in Dhaka',
        'F-commerce and E-commerce Retail Brands (Fashion, Electronics, Food)',
        'Print and Publishing Presses (Katabon, Fakirapool printing clusters)'
      ],
      cvExpectations: [
        'A Behance portfolio link showcasing real commercial projects, not generic templates',
        'Speed and precision in Adobe Illustrator and Photoshop shortcuts',
        'Ability to handle tight deadlines during festive campaigns (Eid, Pohela Boishakh)',
        'Understanding of printing color profiles (CMYK vs RGB)'
      ],
      localDemandSummary_en: 'Every single retail business in Bangladesh relies on social media banners to sell products. Thousands of brands hire full-time or freelance graphic designers year-round.',
      localDemandSummary_bn: 'ঈদ বা পূজার মতো উৎসবের সময়ে দেশীয় ব্র্যান্ডগুলোর হাজার হাজার ব্যানারের প্রয়োজন হয়। ভালো পোর্টফোলিও থাকলে স্থানীয় ও ফ্রিল্যান্স উভয় মার্কেটেই নিয়মিত কাজ পাওয়া যায়।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'United Arab Emirates and Saudi Arabia',
        countryName_bn: 'সংযুক্ত আরব আমিরাত ও সৌদি আরব',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ',
        visaReality_en: 'Signage companies, printing presses, and retail chains in the Gulf recruit graphic designers with high-speed production skills.',
        visaReality_bn: 'উপসাগরীয় দেশগুলোর শপিং মল ও সাইনবোর্ড প্রস্তুতকারী প্রতিষ্ঠানে ডিজাইনারদের নিয়মিত কাজের ভিসা থাকে।',
        averageSalaryUsdOrLocal: '3,500 - 6,500 AED / month (approx 110,000 - 210,000 BDT)',
        requiredExperienceYears: '2+ years'
      }
    ],
    remote: {
      entryBarrier: 'Low',
      entryBarrier_bn: 'সহজ',
      monthlyRangeUsd: '$300 - $1,500 / month',
      competitionLevel: 'High competition on open marketplaces, won through micro-specialization (e.g. YouTube thumbnails or Amazon A+ content)',
      competitionLevel_bn: 'ইউটিউব থাম্বনেইল বা আমাজন লিস্টিং ডিজাইনের মতো নির্দিষ্ট বিষয়ে দক্ষ হলে সহজে ক্লায়েন্ট মেলে',
      englishRequirement: 'Basic to intermediate written English to understand design briefs and deliver revisions',
      englishRequirement_bn: 'ক্লায়েন্টের চাহিদা পড়ে বুঝতে পারার মতো সাধারণ ইংরেজি যথেষ্ট',
      realities_en: [
        'Quick turnaround times win 5-star reviews on freelance platforms',
        'Specializing in motion graphics doubles hourly rates over static graphic design'
      ],
      realities_bn: [
        'দ্রুত কাজ জমা দিলে বায়ারদের কাছ থেকে ভালো রিভিউ পাওয়া যায়',
        'স্থির ছবির পাশাপাশি ছোট ভিডিও অ্যানিমেশন জানলে দ্বিগুণ পারিশ্রমিক পাওয়া সম্ভব'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Adobe Illustrator and Vector Mastery',
      phaseTitle_bn: 'প্রথম পর্ব: ইলাস্ট্রেটর ও ভেক্টর আর্টের বুনিয়াদি জ্ঞান',
      phaseSubtitle_en: 'Day 1 to 30: Pen tool precision, typography, and logo design.',
      phaseSubtitle_bn: '১ থেকে ৩০ দিন: পেন টুলের নিখুঁত ব্যবহার, টাইপোগ্রাফি ও লোগো মেকিং।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-illustrator-pen',
          title_en: 'Pen Tool and Vector Geometry Drills',
          title_bn: 'পেন টুলের ড্রিল ও নিখুঁত ভেক্টর ড্রয়িং',
          description_en: 'Bézier curves, anchor points, shape builder tool, and creating clean geometric icons.',
          description_bn: 'পেন টুল দিয়ে নিখুঁত বক্ররেখা আঁকা এবং শেপ বিল্ডার দিয়ে জটিল ভেক্টর অবজেক্ট তৈরি।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['The Bézier Game practice', 'Pathfinder operations', 'Golden ratio grid basics'],
          practicalTask_en: 'Recreate 5 intricate brand logos from scratch using the Pen tool in Illustrator.',
          practicalTask_bn: 'ইলাস্ট্রেটরে পেন টুল দিয়ে ৫টি বিখ্যাত লোগো নিখুঁতভাবে তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: Photoshop Manipulation and Commercial Banners',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: ফটোশপ ম্যানিপুলেশন ও সোশ্যাল মিডিয়া ব্যানার',
      phaseSubtitle_en: 'Day 31 to 60: Clipping paths, shadows, lighting, and ad design.',
      phaseSubtitle_bn: '৩১ থেকে ৬০ দিন: ব্যাকগ্রাউন্ড রিমুভ, রিয়েলিস্টিক শ্যাডো ও বিজ্ঞাপন তৈরি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-photoshop-ads',
          title_en: 'Commercial Ad Banners and Natural Shadow Creation',
          title_bn: 'বাণিজ্যিক ব্যানার ও স্বাভাবিক শ্যাডো ড্রপ টেকনিক',
          description_en: 'Product compositing, adding cast shadows, contact shadows, ambient occlusion, and color grading.',
          description_bn: 'প্রোডাক্টের ছবিতে স্বাভাবিক ছায়া ও আলো যুক্ত করে জীবন্ত বিজ্ঞাপন তৈরি।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['Brush tool feathering', 'Adjustment layers and clipping masks', 'Text contrast on busy backgrounds'],
          practicalTask_en: 'Design 3 high-converting social media promotional banners for a Bangladeshi shoe or smartphone brand.',
          practicalTask_bn: 'একটি দেশীয় ব্র্যান্ডের জুতো বা মোবাইল ফোনের জন্য ৩টি প্রফেশনাল ব্যানার তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: Motion Graphics with After Effects',
      phaseTitle_bn: 'তৃতীয় পর্ব: আফটার ইফেক্টস দিয়ে মোশন অ্যানিমেশন',
      phaseSubtitle_en: 'Day 61 to 90: Keyframe velocity, graph editor, and short social video ads.',
      phaseSubtitle_bn: '৬১ থেকে ৯০ দিন: কি-ফ্রেম স্পিড গ্রাফ, লোগো অ্যানিমেশন ও সোশ্যাল ভিডিও।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-after-effects-motion',
          title_en: 'Logo Animation and Dynamic Text Reveals',
          title_bn: 'লোগো অ্যানিমেশন ও আকর্ষণীয় টেক্সট মোশন',
          description_en: 'Using the graph editor for organic ease-in/ease-out acceleration, shape layer morphing, and kinetic typography.',
          description_bn: 'গ্রাফ এডিটর দিয়ে মসৃণ মোশন তৈরি এবং টেক্সট অ্যানিমেশন করা।',
          estimatedDays: 18,
          mobileAccessible: false,
          keyTopics: ['Speed graph editor', 'Track mattes and alpha masks', 'Rendering lightweight MP4s with Media Encoder'],
          practicalTask_en: 'Create a 10-second animated commercial bumper ad for a local startup in After Effects.',
          practicalTask_bn: 'একটি স্টার্টআপের জন্য ১০ সেকেন্ডের একটি চমৎকার অ্যানিমেটেড প্রমোশনাল অ্যাড তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: Behance Portfolio and Client Acquisition',
      phaseTitle_bn: 'চতুর্থ পর্ব: বিহ্যান্স পোর্টফোলিও ও কাজের সন্ধান',
      phaseSubtitle_en: 'Day 91 to 120: Mockup presentation, Behance publishing, and agency tests.',
      phaseSubtitle_bn: '৯১ থেকে ১২০ দিন: মকআপ প্রেজেন্টেশন, পোর্টফোলিও সাজানো ও ডিজাইনার ইন্টারভিউ।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-design-portfolio-launch',
          title_en: 'Packaging Your Work with 3D Mockups on Behance',
          title_bn: 'থ্রিডি মকআপ দিয়ে আকর্ষণীয় পোর্টফোলিও তৈরি',
          description_en: 'Using realistic billboard, packaging, and screen mockups to showcase your designs professionally.',
          description_bn: 'বিলবোর্ড ও প্যাকেজিং মকআপে ডিজাইন ফুটিয়ে তুলে বিহ্যান্সে সুন্দর প্রেজেন্টেশন বানানো।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Smart object mockups', 'Curating a cohesive 6-piece portfolio', 'Writing client project briefs'],
          practicalTask_en: 'Publish a complete branding project on Behance with logo, typography, and realistic product packaging.',
          practicalTask_bn: 'লোগো ও প্যাকেজিং সহ একটি পূর্ণাঙ্গ ব্র্যান্ডিং প্রজেক্ট বিহ্যান্সে পাবলিশ করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'gd-q1',
      question_en: 'What is the difference between RGB and CMYK color modes, and when must you use each?',
      question_bn: 'আরজিবি (RGB) এবং সিএমওয়াইকে (CMYK) কালার মোডের মধ্যে পার্থক্য কী এবং কখন কোনটি ব্যবহার করতে হয়?',
      category: 'Print and Digital Production',
      whyAsked_en: 'Fundamental question to avoid disastrously expensive print run errors.',
      whyAsked_bn: 'প্রেসে কালার নষ্ট হয়ে যাওয়ার মতো বড় ভুল ঠেকাতে প্রার্থীর প্র্যাকটিক্যাল জ্ঞান দেখা।',
      howToAnswer_en: 'RGB (Red, Green, Blue) is an additive light model used for all digital screens (phones, monitors, social media). CMYK (Cyan, Magenta, Yellow, Key/Black) is a subtractive ink model used for physical offset and digital printing. If you send an RGB file to a print press, vibrant neon colors will print muddy and dull.',
      howToAnswer_bn: 'আরজিবি (RGB) আলোর মাধ্যমে তৈরি হয় যা ডিজিটাল স্ক্রিন বা মোবাইলের জন্য প্রযোজ্য। আর সিএমওয়াইকে (CMYK) হলো কালির মাধ্যমে তৈরি চার রঙের প্রিন্ট পদ্ধতি যা ফিজিক্যাল প্রেস ও প্রকাশনার জন্য ব্যবহৃত হয়। স্ক্রিনের আরজিবি ফাইল প্রেসে পাঠালে কালার কালচে ও ফ্যাকাশে হয়ে যায়।',
      commonMistakes_en: 'Designing banners for local print shops in RGB without converting to CMYK and setting proper bleed margin.',
      commonMistakes_bn: 'প্রেস প্রিন্টিংয়ের ব্যানারে ব্লিড এরিয়া না রাখা বা আরজিবি মোডে পাঠিয়ে দেওয়া।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-adobe-creative-edu',
      title_en: 'Adobe Creative Cloud Foundations',
      title_bn: 'অ্যাডোবি ক্রিয়েটিভ ক্লাউড ফান্ডামেন্টালস',
      provider: 'Adobe Education Exchange',
      url: 'https://edex.adobe.com/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 15,
      cost: '100% Free',
      relevance_en: 'Free verified workshops and badges directly from Adobe for student creators.',
      relevance_bn: 'অ্যাডোবির অফিশিয়াল ফ্রি শিক্ষণীয় কোর্স ও ডিজিটাল ব্যাজ।'
    }
  ]
};
