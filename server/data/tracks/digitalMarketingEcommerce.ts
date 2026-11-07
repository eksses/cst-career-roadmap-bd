import type { CareerTrack } from '../../../shared/types.js';

export const digitalMarketingEcommerceTrack: Omit<CareerTrack, 'id'> = {
  slug: 'digital-marketing-ecommerce',
  title_en: 'Digital Marketing, SEO and E-Commerce Operations',
  title_bn: 'ডিজিটাল মার্কেটিং, এসইও ও ই-কমার্স অপারেশনস',
  summary_en: 'Search engine optimization, Meta and Google Ads, Shopify/WooCommerce store management, data analytics, conversion copywriting, and local social commerce.',
  summary_bn: 'সার্চ ইঞ্জিন অপটিমাইজেশন (এসইও), ফেসবুক ও গুগল অ্যাডস, শপিফাই/উ-কমার্স স্টোর পরিচালনা এবং অনলাইন সেলস বৃদ্ধির কৌশল।',
  pivotAdvice_en: 'If you struggle with abstract programming logic but have great communication skills, love commercial business, and need to earn income quickly, digital marketing and local e-commerce management offer rapid local hiring across hundreds of Bangladeshi brands.',
  pivotAdvice_bn: 'তোমার যদি কোডিংয়ের জটিল লজিক ভালো না লাগে কিন্তু মানুষের সাথে যোগাযোগ ও অনলাইন ব্যবসা পরিচালনার প্রতি আগ্রহ থাকে, তবে ডিজিটাল মার্কেটিং হলো দ্রুত কাজের সেরা সুযোগ। দেশীয় শপিং পেইজ ও কর্পোরেট ব্র্যান্ডগুলো সবসময় দক্ষ মার্কেটার খোঁজে।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Conducting keyword research and on-page SEO optimization for local business websites.',
    'Managing Meta Business Suite: running targeted Facebook/Instagram ad campaigns and monitoring ROAS.',
    'Configuring Google Search Console, Google Analytics 4 (GA4), and tracking user conversions.',
    'Managing product listings, stock inventories, and courier cash-on-delivery tracking in e-commerce backends.',
    'Writing persuasive ad copy and script briefs for viral TikTok/Reels product videos.'
  ],
  dayToDay_bn: [
    'ওয়েবসাইটের জন্য গুগল কিওয়ার্ড রিসার্চ করা এবং অন-পেইজ এসইও অপটিমাইজ করা।',
    'মেটা বিজনেস সুট দিয়ে ফেসবুক ও ইনস্টাগ্রামে টার্গেটেড বিজ্ঞাপন পরিচালনা করা।',
    'গুগল অ্যানালিটিক্স (GA4) দিয়ে ওয়েবসাইটের ট্রাফিক ও সেলস ডেটা বিশ্লেষণ করা।',
    'ই-কমার্স ওয়েবসাইটে নতুন প্রোডাক্ট আপলোড ও কুরিয়ার ডেলিভারি ট্র্যাকিং পরিচালনা করা।',
    'সোশ্যাল মিডিয়া বিজ্ঞাপনের জন্য আকর্ষণীয় বাংলা ও ইংরেজি কপি এবং ভিডিও কনসেপ্ট লেখা।'
  ],
  mustHaveSkills: [
    {
      id: 'onpage-technical-seo',
      name: 'On-Page and Technical SEO',
      category: 'Search Optimization',
      importance: 'Essential',
      description_en: 'Title tags, meta descriptions, schema markup, site speed optimization, and search console indexing.',
      description_bn: 'টাইটেল ট্যাগ, মেটা ডেসক্রিপশন, সাইট স্পিড এবং সার্চ কনসোলে ইনডেক্সিং নিশ্চিতকরণ।'
    },
    {
      id: 'meta-ads-manager',
      name: 'Meta Ads Manager and Audience Targeting',
      category: 'Paid Media',
      importance: 'Essential',
      description_en: 'Custom audiences, lookalike audiences, Meta Pixel tracking, A/B creative testing, and ROAS calculation.',
      description_bn: 'মেটা পিক্সেল সেটআপ, টার্গেটেড অডিয়েন্স তৈরি ও বিজ্ঞাপনের খরচ অনুযায়ী সেলস হিসাব।'
    },
    {
      id: 'ecommerce-operations',
      name: 'Shopify, WooCommerce and Courier Logistics',
      category: 'E-Commerce',
      importance: 'Essential',
      description_en: 'Store configuration, discount codes, inventory sync, and integrating local BD courier APIs (Steadfast, Pathao Courier).',
      description_bn: 'শপিফাই/ওয়ার্ডপ্রেস স্টোর পরিচালনা এবং দেশীয় কুরিয়ার এপিআইয়ের মাধ্যমে পার্সেল পাঠানো।'
    },
    {
      id: 'google-analytics-ga4',
      name: 'Google Analytics 4 and Conversion Tracking',
      category: 'Analytics',
      importance: 'Recommended',
      description_en: 'Event parameters, user funnels, acquisition sources, and conversion tracking.',
      description_bn: 'ওয়েবসাইটে ভিজিটর কোথা থেকে আসছে এবং কেন অর্ডার করছে তা ট্র্যাক করার পদ্ধতি।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka, Chattogram and All Districts',
      entrySalary: { min: 18000, max: 30000, currency: 'BDT', formatted: '18,000 - 30,000 BDT' },
      midSalary: { min: 35000, max: 70000, currency: 'BDT', formatted: '35,000 - 70,000 BDT' },
      seniorSalary: { min: 75000, max: 150000, currency: 'BDT', formatted: '75,000 - 150,000 BDT' },
      hiringSectors: [
        'Local E-Commerce Brands (Clothing, Electronics, Cosmetics, Organic Food)',
        'Digital Marketing Agencies in Dhaka and Chattogram',
        'Real Estate, Educational Consultancies, and Corporate Marketing Divisions'
      ],
      cvExpectations: [
        'Proof of successful ad spend return (ROAS) or organic ranking achievements',
        'Hands-on experience with Meta Ads Manager and Google Search Console',
        'Clear persuasive writing in both natural Bangla and workplace English',
        'Comfortable with spreadsheets and data analysis'
      ],
      localDemandSummary_en: 'Over 50,000 active f-commerce and e-commerce stores in Bangladesh spend money on digital ads every single day. A skilled student who knows how to optimize ad spend is hired immediately.',
      localDemandSummary_bn: 'বাংলাদেশে প্রতিদিন হাজার হাজার ফেসবুক পেইজ ও অনলাইন শপ বিজ্ঞাপনে টাকা খরচ করে। অপ্রয়োজনীয় ডলার অপচয় না করে সঠিক ক্রেতার কাছে বিজ্ঞাপন পৌঁছানোর দক্ষতা থাকলে কাজের অভাব হয় না।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'United Arab Emirates and Saudi Arabia',
        countryName_bn: 'সংযুক্ত আরব আমিরাত ও সৌদি আরব',
        demandLevel: 'Moderate',
        demandLevel_bn: 'মাঝারি',
        visaReality_en: 'Retail brands hire digital marketers and performance media buyers with verified Google and Meta certifications.',
        visaReality_bn: 'দুবাই ও রিয়াদের রিটেইল ব্র্যান্ডগুলোতে পারফরম্যান্স মার্কেটারদের ভালো সুযোগ রয়েছে।',
        averageSalaryUsdOrLocal: '4,000 - 8,000 AED / month (approx 130,000 - 260,000 BDT)',
        requiredExperienceYears: '2+ years'
      }
    ],
    remote: {
      entryBarrier: 'Low',
      entryBarrier_bn: 'সহজ',
      monthlyRangeUsd: '$300 - $1,800 / month',
      competitionLevel: 'High competition, but won by specializing in SEO or Shopify store setups',
      competitionLevel_bn: 'শপিফাই স্টোর সেটআপ বা লোকাল এসইও-তে স্পেশালাইজেশন থাকলে ভালো কাজ মেলে',
      englishRequirement: 'Good written English to communicate campaign goals and deliver weekly reports',
      englishRequirement_bn: 'সাপ্তাহিক রিপোর্ট তৈরি ও ক্লায়েন্ট মেসেজের জন্য ভালো লিখিত ইংরেজি প্রয়োজন',
      realities_en: [
        'E-commerce store owners in the US and UK pay ongoing retainers for monthly SEO maintenance',
        'Results-driven niche: proving sales lifts guarantees long-term clients'
      ],
      realities_bn: [
        'ইউরোপ-আমেরিকার ক্লায়েন্টরা মাসিক এসইও ও স্টোর দেখাশোনার জন্য ফিক্সড চুক্তি করে',
        'বিজ্ঞাপনে সেলস বাড়াতে পারলে আন্তর্জাতিক ক্লায়েন্ট বছরের পর বছর ধরে রাখে'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Search Engine Optimization (SEO) Foundations',
      phaseTitle_bn: 'প্রথম পর্ব: সার্চ ইঞ্জিন অপটিমাইজেশন (এসইও) ভিত্তি',
      phaseSubtitle_en: 'Day 1 to 25: Keyword research, on-page SEO, and site indexing.',
      phaseSubtitle_bn: '১ থেকে ২৫ দিন: কিওয়ার্ড রিসার্চ, অন-পেইজ অপটিমাইজেশন ও সার্চ কনসোল।',
      durationWeeks: 3,
      modules: [
        {
          id: 'mod-keyword-research',
          title_en: 'Keyword Intent and Competitor Gap Analysis',
          title_bn: 'কিওয়ার্ড রিসার্চ ও কম্পিটিটর অ্যানালাইসিস',
          description_en: 'Informational vs transactional keywords, search volume, keyword difficulty, and free keyword tools.',
          description_bn: 'গুগলে মানুষ কী লিখে খোঁজে তা জানা এবং সার্চ ভলিউম বিশ্লেষণ করার নিয়ম।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Long-tail keywords', 'Search intent classification', 'Ahrefs/Ubersuggest free tools'],
          practicalTask_en: 'Conduct keyword research for a local computer store in Dhaka and deliver 25 actionable keywords.',
          practicalTask_bn: 'একটি লোকাল কম্পিউটার দোকানের জন্য ২৫টি লাভজনক ও কম প্রতিযোগিতামূলক কিওয়ার্ডের তালিকা করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: Meta Ads and Performance Marketing',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: মেটা ফেসবুক বিজ্ঞাপন ও পারফরম্যান্স মার্কেটিং',
      phaseSubtitle_en: 'Day 26 to 50: Facebook Business Manager, pixel, creative testing, and ROAS.',
      phaseSubtitle_bn: '২৬ থেকে ৫০ দিন: মেটা পিক্সেল সেটআপ, অডিয়েন্স টার্গেটিং ও রিটার্ন অন অ্যাড স্পেন্ড।',
      durationWeeks: 3,
      modules: [
        {
          id: 'mod-meta-pixel-campaigns',
          title_en: 'Meta Ads Manager and Conversion Funnels',
          title_bn: 'মেটা অ্যাডস ম্যানেজার ও কনভার্সন ফানেল তৈরি',
          description_en: 'Campaign objectives (traffic vs sales), setting up Meta Pixel on WordPress/Shopify, and testing ad creatives.',
          description_bn: 'বিজ্ঞাপনের সঠিক উদ্দেশ্য নির্ধারণ, পিক্সেল ট্র্যাকিং ও কম খরচে সর্বোচ্চ সেলস নিশ্চিতকরণ।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Advantage+ shopping campaigns', 'Retargeting cart abandoners', 'Calculating Cost Per Acquisition (CPA)'],
          practicalTask_en: 'Set up a complete mock sales campaign with custom audience exclusions in Meta Business Suite.',
          practicalTask_bn: 'মেটা বিজনেস সুইটে একটি পূর্ণাঙ্গ সেলস ক্যাম্পেইন ও রিটার্গেটিং অডিয়েন্স স্ট্রাকচার সাজাও।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: E-Commerce Store Management and Logistics',
      phaseTitle_bn: 'তৃতীয় পর্ব: ই-কমার্স শপ ম্যানেজমেন্ট ও কুরিয়ার লজিস্টিকস',
      phaseSubtitle_en: 'Day 51 to 75: Shopify, WooCommerce, Steadfast/Pathao Courier, and cash-on-delivery.',
      phaseSubtitle_bn: '৫১ থেকে ৭৫ দিন: শপিফাই, উ-কমার্স, ক্যাশ-অন-ডেলিভারি ফ্রড প্রতিরোধ ও কুরিয়ার ট্র্যাকিং।',
      durationWeeks: 3,
      modules: [
        {
          id: 'mod-ecommerce-operations-bd',
          title_en: 'Shopify Store Setup and Local Courier Integrations',
          title_bn: 'শপিফাই স্টোর সেটআপ ও লোকাল কুরিয়ার সংযোগ',
          description_en: 'Product upload, inventory alerts, automating order confirmation calls, and fake order filtering.',
          description_bn: 'স্টোরে প্রোডাক্ট তালিকাভুক্ত করা, ভুয়া অর্ডার রোধ করা এবং কুরিয়ারে বুকিং দেওয়া।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Shopify theme customization', 'Cash-on-delivery risk management', 'Return parcel reduction tactics'],
          practicalTask_en: 'Build a fully functional free development store on Shopify configured for the Bangladeshi market.',
          practicalTask_bn: 'বাংলাদেশি গ্রাহকদের জন্য ক্যাশ-অন-ডেলিভারি সুবিধা সহ একটি শপিফাই ডেভ স্টোর তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: Google Analytics (GA4) and Marketing Interviews',
      phaseTitle_bn: 'চতুর্থ পর্ব: গুগল অ্যানালিটিক্স ৪ ও ডিজিটাল মার্কেটিং ক্যারিয়ার',
      phaseSubtitle_en: 'Day 76 to 90: GA4 reporting, marketing portfolio, and agency interviews.',
      phaseSubtitle_bn: '৭৬ থেকে ৯০ দিন: গুগল অ্যানালিটিক্স দিয়ে সেলস ট্র্যাকিং ও এজেন্সি ভাইভা প্রস্তুতি।',
      durationWeeks: 2,
      modules: [
        {
          id: 'mod-ga4-reporting',
          title_en: 'Google Analytics 4 Reports and Data Storytelling',
          title_bn: 'গুগল অ্যানালিটিক্স ৪ রিপোর্ট ও ডেটা অ্যানালাইসিস',
          description_en: 'Building custom exploration reports, tracking purchase events, and presenting metrics to company directors.',
          description_bn: 'কোম্পানি মালিকদের সামনে সহজ ভাষায় বিজ্ঞাপনের লাভ-ক্ষতি ও ভিজিটর রিপোর্ট উপস্থাপন।',
          estimatedDays: 8,
          mobileAccessible: true,
          keyTopics: ['GA4 event model', 'Traffic source attribution', 'Calculating Customer Lifetime Value (LTV)'],
          practicalTask_en: 'Analyze a sample GA4 e-commerce dataset and write a 1-page executive action plan.',
          practicalTask_bn: 'একটি ই-কমার্স ডেটাসেট বিশ্লেষণ করে সেলস বাড়ানোর জন্য এক পাতার দিকনির্দেশনা লেখ।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'dm-q1',
      question_en: 'What is ROAS and how do you calculate it during a Facebook ad campaign?',
      question_bn: 'রোয়াস (ROAS) কী এবং ফেসবুক বিজ্ঞাপনে এটি কীভাবে হিসাব করা হয়?',
      category: 'Paid Advertising',
      whyAsked_en: 'The standard commercial metric expected of any performance media buyer.',
      whyAsked_bn: 'বিজ্ঞাপনে টাকা খরচের বিপরীতে ব্যবসার প্রকৃত লাভ বোঝার ক্ষমতা যাচাই করতে।',
      howToAnswer_en: 'ROAS stands for Return on Ad Spend. It is calculated by dividing Total Revenue generated by the campaign by the Total Ad Spend. For example, if you spend 10,000 BDT on ads and generate 50,000 BDT in verified sales, your ROAS is 5x (or 500 percent). In e-commerce, knowing your profit margin is critical to identify the breakeven ROAS.',
      howToAnswer_bn: 'রোয়াস (ROAS) হলো বিজ্ঞাপনের খরচের তুলনায় বিক্রির অনুপাত। মোট বিক্রির টাকাকে বিজ্ঞাপনে খরচ হওয়া টাকা দিয়ে ভাগ করলে এটি পাওয়া যায়। যেমন ১০,০০০ টাকা খরচ করে ৫০,০০০ টাকার সেলস আনলে রোয়াস হবে ৫ গুণ (বা ৫০০%)। লাভজনক ব্যবসা চালাতে ব্রেক-ইভেন রোয়াস জানা জরুরি।',
      commonMistakes_en: 'Confusing ROAS with ROI (ROI factors in product costs and overhead, while ROAS only factors in ad spend).',
      commonMistakes_bn: 'রোয়াস (ROAS) এবং আরওআই (ROI)-কে গুলিয়ে ফেলা।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-google-digital-marketing',
      title_en: 'Google Digital Marketing and E-Commerce Certificate',
      title_bn: 'গুগল ডিজিটাল মার্কেটিং ও ই-কমার্স সার্টিফিকেট',
      provider: 'Google Skillshop',
      url: 'https://skillshop.exceedlms.com/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 20,
      cost: '100% Free',
      relevance_en: 'Official verified Google credential covering SEO, Google Ads, and e-commerce growth.',
      relevance_bn: 'গুগলের অফিশিয়াল ফ্রি সার্টিফিকেট যা মার্কেটিং ইন্ডাস্ট্রিতে আন্তর্জাতিকভাবে সমাদৃত।'
    },
    {
      id: 'cert-hubspot-inbound',
      title_en: 'HubSpot Inbound Marketing Certification',
      title_bn: 'হাবস্পট ইনবাউন্ড মার্কেটিং ভেরিফায়েড ব্যাজ',
      provider: 'HubSpot Academy',
      url: 'https://academy.hubspot.com/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 8,
      cost: '100% Free',
      relevance_en: 'Global industry standard for content marketing, lead nurturing, and social selling.',
      relevance_bn: 'ইনবাউন্ড মার্কেটিং ও সোশ্যাল মিডিয়া সেলসের বিশ্বখ্যাত ফ্রি সার্টিফিকেট।'
    }
  ]
};
