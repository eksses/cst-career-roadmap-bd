import type { CareerTrack } from '../../../shared/types.js';

export const pythonDataAiTrack: Omit<CareerTrack, 'id'> = {
  slug: 'python-data-ai',
  title_en: 'Python Programming, Data Analytics & AI Associate',
  title_bn: 'পাইথন প্রোগ্রামিং, ডেটা অ্যানালিটিক্স ও এআই অ্যাসোসিয়েট',
  summary_en: 'Python syntax mastery, SQL database queries, data wrangling with Pandas and NumPy, Power BI dashboards, automated web scraping, and practical AI workflow integration.',
  summary_bn: 'পাইথন প্রোগ্রামিং, এসকিউএল (SQL) দিয়ে ডেটা বিশ্লেষণ, পাওয়ার বিআই ড্যাশবোর্ড ও দৈনন্দিন কাজ স্বয়ংক্রিয় করার আধুনিক ডেটা ও এআই ট্র্যাক।',
  pivotAdvice_en: 'If you enjoy working with numbers, clean spreadsheets, finding patterns in business data, and writing automation scripts instead of building complex visual UI, Python and Data Analytics offer strong local and remote freelance prospects.',
  pivotAdvice_bn: 'তুমি যদি স্প্রেডশিট, সংখ্যা এবং ব্যবসায়িক ডেটা থেকে প্রয়োজনীয় তথ্য বের করতে ভালোবাসো, তবে পাইথন ও ডেটা অ্যানালিটিক্স ট্র্যাক তোমার জন্য উপযুক্ত। দেশীয় বড় কোম্পানি ও বিদেশি রিমোট জবে এর ভালো চাহিদা রয়েছে।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Writing Python scripts to clean messy Excel spreadsheets and CSV exports from ERP systems.',
    'Formulating SQL queries to aggregate sales, customer metrics, and inventory data across multiple tables.',
    'Building interactive business dashboards in Power BI or Metabase for executive decision making.',
    'Automating repetitive browser data extraction using Python, BeautifulSoup, and Requests.',
    'Integrating AI APIs like OpenAI or local open-source models into automated business pipelines.'
  ],
  dayToDay_bn: [
    'পাইথন স্ক্রিপ্ট দিয়ে এলোমেলো এক্সেল ফাইল ও ইআরপি ডেটা দ্রুত গুছিয়ে নেওয়া।',
    'এসকিউএল কুয়েরি লিখে মাসিক সেলস, ইনভেন্টরি ও গ্রাহকের তথ্য ডেটাবেস থেকে ফিল্টার করা।',
    'পাওয়ার বিআই দিয়ে আকর্ষণীয় ড্যাশবোর্ড তৈরি করা যা কর্মকর্তাদের সিদ্ধান্ত নিতে সাহায্য করে।',
    'বিউটিফুলসুপ (BeautifulSoup) দিয়ে ওয়েবসাইট থেকে প্রয়োজনীয় ডেটা স্বয়ংক্রিয়ভাবে সংগ্রহ করা।',
    'ব্যবসায়িক প্রয়োজনে এআই এপিআই কল করে স্বয়ংক্রিয় সামারি তৈরি করা।'
  ],
  mustHaveSkills: [
    {
      id: 'python-core-automation',
      name: 'Python Core & Scripting',
      category: 'Programming',
      importance: 'Essential',
      description_en: 'Functions, list comprehensions, dictionary data structures, file handling, and error handling.',
      description_bn: 'পাইথন ফাংশন, ডিকশনারি, ফাইল রিড-রাইট ও এরর হ্যান্ডলিং।'
    },
    {
      id: 'sql-database-queries',
      name: 'SQL & Relational Queries',
      category: 'Database',
      importance: 'Essential',
      description_en: 'SELECT, GROUP BY, INNER/LEFT JOINs, subqueries, and database aggregation.',
      description_bn: 'এসকিউএল জয়েন, গ্রুপিং ও জটিল ব্যবসায়িক কুয়েরি লেখার দক্ষতা।'
    },
    {
      id: 'pandas-numpy-wrangling',
      name: 'Pandas & NumPy Data Wrangling',
      category: 'Data Science',
      importance: 'Essential',
      description_en: 'DataFrames, handling missing values, filtering rows, and descriptive statistics.',
      description_bn: 'প্যান্ডাস ডেটাফ্রেম দিয়ে মিসিং ডাটা ক্লিন করা ও বিশ্লেষণ করা।'
    },
    {
      id: 'powerbi-dashboards',
      name: 'Power BI & Data Visualization',
      category: 'Business Intelligence',
      importance: 'Recommended',
      description_en: 'Data modeling, DAX expressions, visual charts, and executive reporting.',
      description_bn: 'পাওয়ার বিআই দিয়ে ব্যবসায়িক চার্ট, গ্রাফ ও ইন্টারঅ্যাক্টিভ ড্যাশবোর্ড তৈরি।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Gulshan, Banani, Karwan Bazar Corporate HQs)',
      entrySalary: { min: 25000, max: 40000, currency: 'BDT', formatted: '25,000 - 40,000 BDT' },
      midSalary: { min: 55000, max: 110000, currency: 'BDT', formatted: '55,000 - 110,000 BDT' },
      seniorSalary: { min: 130000, max: 260000, currency: 'BDT', formatted: '130,000 - 260,000 BDT' },
      hiringSectors: [
        'Telecommunication Giants (Grameenphone, Banglalink, Robi Axiata)',
        'E-Commerce & Quick Commerce (Daraz, Chaldal, Foodpanda, Pickaboo)',
        'FMCG & Industrial Conglomerates (Pran-RFL, Square, Meghna Group, Akij)',
        'RMG Export Houses and Supply Chain Coordinators'
      ],
      cvExpectations: [
        'Working knowledge of Python data manipulation and SQL query writing',
        'Portfolio featuring at least two practical business dashboards created in Power BI or Python',
        'Ability to clean messy CSV files and extract actionable insights',
        'Diploma in CST with clear logical communication'
      ],
      localDemandSummary_en: 'Corporates in Bangladesh generate enormous volumes of transactional data daily. CST diploma holders who understand SQL and Python bridge the gap between IT and business management, commanding solid salaries.',
      localDemandSummary_bn: 'বাংলাদেশের শীর্ষ কর্পোরেট প্রতিষ্ঠানগুলোতে প্রতিদিন লাখ লাখ লেনদেনের ডেটা তৈরি হয়। পাইথন ও এসকিউএল জানা শিক্ষার্থীরা ডেটা অ্যানালিস্ট হিসেবে দ্রুত প্রবেশ করতে পারে।'
    },
    targetCountries: [
      {
        region: 'Southeast Asia',
        countryName_en: 'Malaysia & Singapore',
        countryName_bn: 'মালয়েশিয়া ও সিঙ্গাপুর',
        demandLevel: 'Moderate',
        demandLevel_bn: 'মাঝারি চাহিদা',
        visaReality_en: 'Recruit data technicians and SQL specialists with proven GitHub repositories and dashboard portfolios.',
        visaReality_bn: 'গিটহাব প্রজেক্ট ও ড্যাশবোর্ড পোর্টফোলিও থাকলে টেকনিক্যাল ওয়ার্ক পারমিটে অগ্রাধিকার পাওয়া যায়।',
        averageSalaryUsdOrLocal: '$2,200 - $4,200 USD/month',
        requiredExperienceYears: '2 - 3 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$700 - $2,500 USD',
      competitionLevel: 'Moderate',
      competitionLevel_bn: 'মাঝারি',
      englishRequirement: 'Clear written English to interpret client business questions and present data findings',
      englishRequirement_bn: 'ক্লায়েন্টের ডেটা বিশ্লেষণ ও ফলাফল উপস্থাপনের উপযোগী সাধারণ ইংরেজি',
      realities_en: [
        'Small businesses in the US and UK frequently hire freelance data cleaners on Upwork for $15 to $25 per hour.',
        'High demand for automated web scraping to monitor competitor prices across e-commerce sites.'
      ],
      realities_bn: [
        'আপওয়ার্ক ও ফাইভারে বিদেশি ক্লায়েন্টদের এক্সেল ও পাইথন দিয়ে ডেটা ক্লিন করে ভালো আয় করা যায়।',
        'বিভিন্ন ওয়েবসাইটের পণ্যের দাম ট্র্যাক করার জন্য স্বয়ংক্রিয় স্ক্র্যাপিংয়ের প্রচুর চাহিদা রয়েছে।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Python Syntax & Programming Logic Fundamentals',
      phaseTitle_bn: 'পাইথন সিনট্যাক্স ও প্রোগ্রামিং লজিকের ভিত্তি',
      phaseSubtitle_en: 'Learn Python from scratch with zero prior coding experience.',
      phaseSubtitle_bn: 'জিরো থেকে পাইথন প্রোগ্রামিং ও বাস্তব লজিক তৈরি করো।',
      durationWeeks: 4,
      modules: [
        {
          id: 'py-p1-m1',
          title_en: 'Variables, Conditionals, Loops and Functions',
          title_bn: 'ভেরিয়েবল, কন্ডিশনাল, লুপ ও ফাংশন',
          description_en: 'Master core syntax, data types, if-else decision branching, while/for loops, and writing modular functions.',
          description_bn: 'পাইথনের মৌলিক সিনট্যাক্স, শর্তযুক্ত কোড ও ফাংশন লেখার হাতে-কলমে অনুশীলন।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['Python Variables', 'If-Else Logic', 'For Loops', 'User Defined Functions'],
          practicalTask_en: 'Write a Python program that calculates the monthly mobile bill and taxes for CST polytechnic students.',
          practicalTask_bn: 'পলিটেকনিক শিক্ষার্থীদের মাসিক ইন্টারনেট বিল ও ভ্যাট হিসাব করার পাইথন কোড লেখো।'
        },
        {
          id: 'py-p1-m2',
          title_en: 'Data Structures: Lists, Dictionaries & File I/O',
          title_bn: 'ডেটা স্ট্রাকচার: লিস্ট, ডিকশনারি ও ফাইল হ্যান্ডলিং',
          description_en: 'Learn how to store multiple records in lists and dictionaries, read text files, and parse CSV spreadsheets.',
          description_bn: 'লিস্ট ও ডিকশনারি দিয়ে তথ্য সংরক্ষণ করা এবং ফাইল রিড-রাইট করা।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['Lists & Tuples', 'Dictionaries', 'Reading CSV Files', 'Exception Handling'],
          practicalTask_en: 'Read a CSV file containing 50 student exam marks and output the average, highest, and lowest scores.',
          practicalTask_bn: '৫০ জন শিক্ষার্থীর নম্বরের একটি সিএসভি ফাইল পড়ে গড়, সর্বোচ্চ ও সর্বনিম্ন নম্বর প্রিন্ট করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Relational Databases & SQL Query Mastery',
      phaseTitle_bn: 'রিলেশনাল ডেটাবেস ও এসকিউএল কুয়েরির দক্ষতা',
      phaseSubtitle_en: 'Extract insights from multi-table company databases.',
      phaseSubtitle_bn: 'একাধিক টেবিল থেকে প্রয়োজনীয় ডেটা দ্রুত বের করার কৌশল।',
      durationWeeks: 4,
      modules: [
        {
          id: 'py-p2-m1',
          title_en: 'SQL Querying with PostgreSQL / SQLite',
          title_bn: 'পোস্টগ্রেস ও এসকিউএলে তথ্য অনুসন্ধান',
          description_en: 'Write SELECT queries with WHERE filters, ORDER BY sorting, and aggregate functions like COUNT, SUM, and AVG.',
          description_bn: 'এসকিউএল দিয়ে ফিল্টারিং, সর্টিং এবং মোট হিসাব বের করার নিয়ম।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['SELECT & WHERE', 'COUNT & AVG', 'GROUP BY & HAVING', 'SQLite in Browser'],
          practicalTask_en: 'Write SQL queries to find the top 5 highest spending customers in an e-commerce database.',
          practicalTask_bn: 'একটি ই-কমার্স ডেটাবেস থেকে শীর্ষ ৫ জন ক্রেতার তালিকা বের করার কুয়েরি লেখো।'
        },
        {
          id: 'py-p2-m2',
          title_en: 'Multi-Table Joins & Database Relationships',
          title_bn: 'মাল্টি-টেবিল জয়েন ও রিলেশনশিপ',
          description_en: 'Connect customer tables with orders using INNER JOIN and LEFT JOIN to produce unified business reports.',
          description_bn: 'ইনার জয়েন ও লেফট জয়েন ব্যবহার করে একাধিক টেবিল যুক্ত করে পূর্ণাঙ্গ রিপোর্ট তৈরি।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['INNER JOIN', 'LEFT JOIN', 'Primary & Foreign Keys', 'Subqueries'],
          practicalTask_en: 'Join an orders table with a products table to calculate total revenue generated per product category.',
          practicalTask_bn: 'অর্ডার ও প্রডাক্ট টেবিল জয়েন করে প্রতি ক্যাটাগরির মোট বিক্রয় হিসাব করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Data Wrangling with Pandas & Power BI Dashboards',
      phaseTitle_bn: 'প্যান্ডাস দিয়ে ডেটা প্রসেসিং ও পাওয়ার বিআই ড্যাশবোর্ড',
      phaseSubtitle_en: 'Clean real-world data and build interactive visual dashboards.',
      phaseSubtitle_bn: 'বাস্তব ডেটা পরিচ্ছন্ন করা ও আকর্ষণীয় ভিজুয়াল চার্ট তৈরি।',
      durationWeeks: 5,
      modules: [
        {
          id: 'py-p3-m1',
          title_en: 'Pandas DataFrames, Cleaning & Filtering',
          title_bn: 'প্যান্ডাস ডেটাফ্রেম দিয়ে ডেটা ফিল্টারিং ও ক্লিন করা',
          description_en: 'Load large CSV files into Pandas DataFrames, remove duplicate rows, fill missing values, and transform columns.',
          description_bn: 'প্যান্ডাস ব্যবহার করে ডেটাসেট থেকে ডুপ্লিকেট তথ্য মোছা ও মিসিং ভ্যালু পূরণ করা।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Pandas read_csv', 'dropna and fillna', 'groupby aggregation', 'Matplotlib plots'],
          practicalTask_en: 'Clean a public Bangladesh weather dataset, remove corrupted rows, and generate a monthly rainfall trend chart.',
          practicalTask_bn: 'বাংলাদেশের আবহাওয়ার ডেটা পরিষ্কার করে মাসিক বৃষ্টিপাতের চার্ট তৈরি করো।'
        },
        {
          id: 'py-p3-m2',
          title_en: 'Building Interactive Dashboards in Power BI',
          title_bn: 'পাওয়ার বিআই দিয়ে ইন্টারঅ্যাক্টিভ ড্যাশবোর্ড নির্মাণ',
          description_en: 'Import data from Excel/SQL into Power BI, design KPI cards, bar charts, slicers, and interactive regional filters.',
          description_bn: 'এক্সেল বা এসকিউএল থেকে ডেটা এনে পাওয়ার বিআই-তে কেপিআই কার্ড ও ড্যাশবোর্ড তৈরি।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Power BI Desktop', 'Data Slicers', 'KPI Cards', 'DAX Measures'],
          practicalTask_en: 'Build a sales dashboard showing monthly sales trends across divisions in Bangladesh.',
          practicalTask_bn: 'বাংলাদেশের বিভিন্ন বিভাগের বিক্রয় তুলনামূলক চিত্র দিয়ে পাওয়ার বিআই ড্যাশবোর্ড তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Automation, Applied AI Integration & Job Readiness',
      phaseTitle_bn: 'অটোমেশন, অ্যাপ্লায়েড এআই ও চাকরি ইন্টারভিউ প্রস্তুতি',
      phaseSubtitle_en: 'Automate repetitive workflows and claim verified certifications.',
      phaseSubtitle_bn: 'দৈনন্দিন কাজ স্বয়ংক্রিয় করা ও ভেরিফায়েড সার্টিফিকেট অর্জন।',
      durationWeeks: 4,
      modules: [
        {
          id: 'py-p4-m1',
          title_en: 'Web Scraping & LLM API Integration',
          title_bn: 'ওয়েব স্ক্র্যাপিং ও এআই এপিআই ইন্টিগ্রেশন',
          description_en: 'Use BeautifulSoup to scrape product prices from websites and call AI APIs to summarize large documents automatically.',
          description_bn: 'ওয়েব পেজ থেকে ডেটা বের করা এবং এআই এপিআই দিয়ে বড় টেক্সটের সারসংক্ষেপ তৈরি।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['BeautifulSoup', 'Requests Library', 'AI API Calls', 'JSON Parsing'],
          practicalTask_en: 'Scrape job titles from a job board and use an AI API to categorize each job into frontend, backend, or networking.',
          practicalTask_bn: 'জব সাইট থেকে চাকরির শিরোনাম সংগ্রহ করে এআই দিয়ে ক্যাটাগরি করার স্ক্রিপ্ট লেখো।'
        },
        {
          id: 'py-p4-m2',
          title_en: 'Harvard CS50P Certification & Portfolio Presentation',
          title_bn: 'হার্ভার্ড সিএস৫০পি সার্টিফিকেট ও পোর্টফোলিও প্রস্তুতি',
          description_en: 'Complete the Harvard CS50 Python final problem set and prepare your GitHub repository for technical interviews.',
          description_bn: 'হার্ভার্ডের সিএস৫০ পাইথন প্রজেক্ট সম্পন্ন করে গিটহাব প্রোফাইল সিভিতে যুক্ত করো।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Harvard CS50P Audit', 'GitHub Readme', 'Data Portfolio', 'Viva Preparation'],
          practicalTask_en: 'Publish your completed Python data cleaning project and Power BI dashboard link on GitHub and LinkedIn.',
          practicalTask_bn: 'তোমার তৈরি করা ডেটা প্রজেক্ট ও পাওয়ার বিআই লিংক লিঙ্কডইন ও সিভিতে প্রকাশ করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'py-q1',
      question_en: 'What is the difference between a Python List and a Tuple? When would you use each?',
      question_bn: 'পাইথনে লিস্ট (List) ও টাপলের (Tuple) মধ্যে পার্থক্য কী? কখন কোনটি ব্যবহার করা উচিত?',
      category: 'Python Core',
      whyAsked_en: 'Tests core understanding of mutability and memory efficiency in Python.',
      whyAsked_bn: 'পাইথনের মেমোরি দক্ষতা ও মিউটেবিলিটি সম্পর্কে পরিষ্কার ধারণা আছে কি না তা যাচাই করার জন্য।',
      howToAnswer_en: 'Explain: Lists are mutable (can add, remove, or modify items using append/pop) and defined with square brackets []. Tuples are immutable (cannot be changed once created), defined with parentheses (), and use less memory. Use Tuples for fixed data like coordinates or database record rows.',
      howToAnswer_bn: 'লিস্ট পরিবর্তনযোগ্য (মিউটেবল) এবং থার্ড ব্র্যাকেট [] দিয়ে লেখা হয়। টাপল পরিবর্তন করা যায় না (ইমিউটেবল), ফার্স্ট ব্র্যাকেট () দিয়ে লেখা হয় এবং এটি কম মেমোরি খরচ করে। অপরিবর্তনীয় তথ্যের জন্য টাপল ব্যবহার করা উত্তম।',
      commonMistakes_en: 'Saying tuples cannot hold different data types (they can hold anything, just like lists).',
      commonMistakes_bn: 'বলা যে টাপলে বিভিন্ন ডেটা টাইপ রাখা যায় না (লিস্টের মতোই যেকোনো ডেটা রাখা যায়)।'
    },
    {
      id: 'py-q2',
      question_en: 'What is the difference between INNER JOIN and LEFT JOIN in SQL?',
      question_bn: 'এসকিউএলে ইনার জয়েন (INNER JOIN) এবং লেফট জয়েনের (LEFT JOIN) মধ্যে পার্থক্য কী?',
      category: 'SQL Databases',
      whyAsked_en: 'Essential query building question asked in nearly 100% of data analyst and backend viva sessions in Bangladesh.',
      whyAsked_bn: 'বাংলাদেশের প্রায় সকল ডেটা অ্যানালিস্ট ইন্টারভিউতে এই মৌলিক প্রশ্নটি করা হয়।',
      howToAnswer_en: 'INNER JOIN returns only the rows where there is a match in both tables. LEFT JOIN returns all rows from the left table, plus matched rows from the right table (filling NULL if no match exists).',
      howToAnswer_bn: 'ইনার জয়েন শুধুমাত্র উভয় টেবিলের কমন তথ্যগুলো নিয়ে আসে। লেফট জয়েন বাম টেবিলের সকল তথ্য নিয়ে আসে এবং ডান টেবিলে মিল না থাকলে সেখানে নাল (NULL) দেখায়।',
      commonMistakes_en: 'Thinking LEFT JOIN deletes unmatched rows or getting the left/right tables swapped.',
      commonMistakes_bn: 'কোন টেবিলের সব তথ্য আসবে তা গুলিয়ে ফেলা।'
    }
  ],
  freeCerts: [
    {
      id: 'harvard-cs50p',
      title_en: 'Harvard University CS50P: Programming with Python',
      title_bn: 'হার্ভার্ড ইউনিভার্সিটি সিএস৫০পি: প্রোগ্রামিং উইথ পাইথন',
      provider: 'Harvard University / edX',
      url: 'https://cs50.harvard.edu/python/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 60,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Prestige verified certificate from Harvard University evaluating real Python coding problem sets.',
      relevance_bn: 'হার্ভার্ড বিশ্ববিদ্যালয়ের বিশ্বখ্যাত ও সম্পূর্ণ ফ্রি ভেরিফায়েড সার্টিফিকেট।'
    },
    {
      id: 'fcc-data-analysis-python',
      title_en: 'freeCodeCamp: Data Analysis with Python Certification',
      title_bn: 'ফ্রি-কোড-ক্যাম্প: ডেটা অ্যানালাইসিস উইথ পাইথন',
      provider: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 300,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Comprehensive 300-hour verified credential covering NumPy, Pandas, Matplotlib, and real data analysis projects.',
      relevance_bn: '৩০০ ঘণ্টার বিশ্বব্যাপী স্বীকৃত ও সম্পূর্ণ ফ্রি ভেরিফায়েড ডেটা অ্যানালাইসিস সার্টিফিকেট।'
    },
    {
      id: 'kaggle-sql-python',
      title_en: 'Kaggle Python & SQL Micro-Course Badges',
      title_bn: 'কাগল পাইথন ও এসকিউএল মাইক্রো-কোর্স ব্যাজ',
      provider: 'Kaggle (Google)',
      url: 'https://www.kaggle.com/learn',
      mobileAccessible: true,
      language: 'en',
      durationHours: 15,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Direct hands-on interactive cloud notebook badges proving practical SQL queries and data manipulation.',
      relevance_bn: 'গুগল কাগলের ক্লাউড নোটবুকে সরাসরি কোড লিখে অর্জিত ডিজিটাল ব্যাজ।'
    },
    {
      id: 'muktopaath-ict-data',
      title_en: 'Muktopaath: Basics of ICT & Data Literacy',
      title_bn: 'মুক্তপাঠ: তথ্যপ্রযুক্তি ও ডেটা লিটারেসি কোর্স',
      provider: 'Muktopaath / a2i Bangladesh',
      url: 'https://muktopaath.gov.bd',
      mobileAccessible: true,
      language: 'bn',
      durationHours: 8,
      cost: '100% Free',
      isBdLocal: true,
      category: 'bd_national',
      relevance_en: 'Official Bangladesh Government certified credential verifying foundational computer data competence.',
      relevance_bn: 'বাংলাদেশ সরকারের মুক্তপাঠ প্ল্যাটফর্মের অফিশিয়াল ভেরিফায়েড সার্টিফিকেট।'
    }
  ]
};
