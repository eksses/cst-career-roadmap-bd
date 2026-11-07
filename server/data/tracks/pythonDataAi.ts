import type { CareerTrack } from '../../../shared/types.js';

export const pythonDataAiTrack: Omit<CareerTrack, 'id'> = {
  slug: 'python-data-ai',
  title_en: 'Python Programming, High-Speed Data Analytics & AI Associate (2026 Edition)',
  title_bn: 'পাইথন প্রোগ্রামিং, হাই-স্পিড ডেটা অ্যানালিটিক্স ও এআই অ্যাসোসিয়েট (২০২৬ এডিশন)',
  summary_en: 'Calibrated for late 2026. Master Python 3.12+, Polars & Pandas 2.2+, PostgreSQL 17 + DuckDB in-process analytics, Power BI dashboards with AI Copilot, and practical RAG pipelines with Ollama and pgvector.',
  summary_bn: '২০২৬ সালের আধুনিক ডেটা ও এআই চাহিদা অনুযায়ী সাজানো। পাইথন ৩.১২, পোলার্স ও প্যান্ডাস ২.২, ডাক-ডিবি ও পোস্টগ্রেসকিউএল ১৭, পাওয়ার বিআই এবং ওলামা দিয়ে আরএজি এআই পাইপলাইন তৈরি।',
  pivotAdvice_en: 'In 2026, writing basic Python syntax or copy-pasting for-loops is handled instantly by AI. Companies in Dhaka and remote firms look for data practitioners who master high-speed DataFrame processing with Polars, analytical SQL in DuckDB, and building local RAG pipelines that prevent corporate data leaks.',
  pivotAdvice_bn: '২০২৬ সালে সাধারণ কোডিং এআই নিমেষেই লিখে দেয়। ঢাকার করপোরেট প্রতিষ্ঠান ও বিদেশি রিমোট কোম্পানিগুলো এখন এমন ডেটা অ্যানালিস্ট খোঁজে যারা পোলার্স দিয়ে দ্রুত ডেটা প্রসেসিং, ডাক-ডিবি দিয়ে অ্যানালিটিক্যাল কুয়েরি এবং নিজস্ব সার্ভারে এআই চ্যাটবট ইন্টিগ্রেট করতে পারে।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Writing high-performance Python 3.12 scripts using Polars and Pandas to clean multi-gigabyte ERP exports and databases.',
    'Formulating complex analytical SQL queries in PostgreSQL 17 and DuckDB with window functions and aggregations.',
    'Building interactive executive dashboards in Power BI and Streamlit with automated daily data refreshes.',
    'Scraping and parsing web datasets reliably using Playwright, BeautifulSoup, and asynchronous request workers.',
    'Building localized Retrieval-Augmented Generation (RAG) search engines using Ollama (Llama 3.3/DeepSeek) and pgvector.'
  ],
  dayToDay_bn: [
    'পাইথন ৩.১২ ও পোলার্স লাইব্রেরি দিয়ে বড় বড় ব্যবসায়িক ডেটাসেট নিমেষেই ক্লিন ও প্রসেস করা।',
    'পোস্টগ্রেসকিউএল ও ডাক-ডিবিতে উইন্ডো ফাংশন ও জয়েন দিয়ে জটিল সেলস ও ইনভেন্টরি কুয়েরি লেখা।',
    'পাওয়ার বিআই ও স্ট্রিমলিট দিয়ে ইন্টারঅ্যাক্টিভ বিজনেস ড্যাশবোর্ড তৈরি করা।',
    'প্লে-রাইট ও বিউটিফুলসুপ দিয়ে ওয়েবসাইট থেকে অটোমেটেড ডেটা স্ক্র্যাপিং ও ইটিএল পাইপলাইন তৈরি।',
    'ওলামা (Ollama) ও লোকাল এলএলএম দিয়ে কোম্পানির নিজস্ব ডেটার ওপর নিরাপদ এআই সার্চ ইঞ্জিন বানানো।'
  ],
  mustHaveSkills: [
    {
      id: 'python-core-polars',
      name: 'Python 3.12+ Core & Polars Engine',
      category: 'Programming & Data',
      importance: 'Essential',
      description_en: 'Type annotations, list comprehensions, generator functions, and lazy evaluation with Polars / Pandas.',
      description_bn: 'পাইথন ৩.১২ টাইপ অ্যানোটেশন, জেনারেটর এবং পোলার্স দিয়ে মাল্টি-থ্রেডেড দ্রুতগতির ডেটা ফ্রেম প্রসেসিং।'
    },
    {
      id: 'duckdb-sql-analytics',
      name: 'DuckDB & PostgreSQL 17 Analytical SQL',
      category: 'Database & OLAP',
      importance: 'Essential',
      description_en: 'Columnar storage queries, window functions (ROW_NUMBER, LAG, LEAD), CTEs, and parquet file analytics.',
      description_bn: 'ডাক-ডিবি ও পোস্টগ্রেসকিউএল দিয়ে কলামনার কুয়েরি, উইন্ডো ফাংশন ও পারকে ডেটা অ্যানালিসিস।'
    },
    {
      id: 'powerbi-copilot-bi',
      name: 'Power BI & Streamlit Business Dashboards',
      category: 'Business Intelligence',
      importance: 'Essential',
      description_en: 'Star schema data modeling, DAX measures, AI Copilot quick measures, and interactive web visualization.',
      description_bn: 'পাওয়ার বিআই দিয়ে স্টার স্কিমা মডেলিং, ড্যাক্স মেজার্স এবং স্ট্রিমলিট দিয়ে ওয়েব ড্যাশবোর্ড তৈরি।'
    },
    {
      id: 'local-llm-rag-pgvector',
      name: 'Local LLMs (Ollama) & RAG with pgvector',
      category: 'Practical AI',
      importance: 'Essential',
      description_en: 'Running private models (Llama 3.3/Mistral) locally with Ollama, generating text embeddings, and similarity search in PostgreSQL.',
      description_bn: 'ওলামা দিয়ে নিজস্ব কম্পিউটারে প্রাইভেট মডেল রান করা, ভেক্টর এম্বেডিং ও আরএজি চ্যাটবট তৈরি।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Gulshan, Banani, Karwan Bazar, Motijheel) & Hybrid BD',
      entrySalary: { min: 30000, max: 52000, currency: 'BDT', formatted: '30,000 - 52,000 BDT' },
      midSalary: { min: 68000, max: 135000, currency: 'BDT', formatted: '68,000 - 135,000 BDT' },
      seniorSalary: { min: 155000, max: 320000, currency: 'BDT', formatted: '155,000 - 320,000 BDT' },
      hiringSectors: [
        'Telecommunication Giants & Analytics Labs (Grameenphone, Banglalink, Robi)',
        'Fintech Platforms & Micro-Credit Institutions (bKash, Nagad, BRAC, ASA)',
        'FMCG & Industrial Conglomerates (Pran-RFL, Square, Akij Group, Meghna Group)',
        'E-Commerce & Digital Logistics Providers (Daraz, Chaldal, Pathao)'
      ],
      cvExpectations: [
        'Working GitHub repository with complete data analysis scripts and documented README files',
        'Demonstrated portfolio with at least two live Power BI or Streamlit interactive dashboards',
        'Solid SQL skills with demonstrable understanding of joins, aggregations, and window functions',
        'Hands-on experience with local AI model workflows (Ollama, HuggingFace, RAG pipelines)'
      ],
      localDemandSummary_en: 'Corporates in Bangladesh generate immense volumes of transactional logs daily. Diploma CST graduates who master SQL, Polars, and Power BI dashboards bridge the technical-to-management gap, commanding immediate respect and swift career progression.',
      localDemandSummary_bn: 'বাংলাদেশের শীর্ষ করপোরেট ও ম্যানুফ্যাকচারিং গ্রুপগুলোতে প্রতিদিন বিপুল পরিমাণ ট্রানজ্যাকশন ডেটা তৈরি হয়। পাইথন ও এসকিউএল জানা দক্ষ শিক্ষার্থীরা ডেটা অ্যানালিস্ট হিসেবে ডিপ্লোমা শেষ করেই দ্রুত ক্যারিয়ার শুরু করতে পারে।'
    },
    targetCountries: [
      {
        region: 'Southeast Asia',
        countryName_en: 'Malaysia, Singapore & Thailand',
        countryName_bn: 'মালয়েশিয়া, সিঙ্গাপুর ও থাইল্যান্ড',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Tech enterprises recruit data technicians and analytics engineers with strong SQL and dashboard portfolios under skilled employment passes.',
        visaReality_bn: 'গিটহাব ডেটাসেট ও ড্যাশবোর্ড পোর্টফোলিও থাকলে আন্তর্জাতিক টেক ভিসা প্রক্রিয়ায় অগ্রাধিকার পাওয়া যায়।',
        averageSalaryUsdOrLocal: '$2,400 - $4,800 USD / month',
        requiredExperienceYears: '2 to 4 years'
      },
      {
        region: 'Middle East',
        countryName_en: 'United Arab Emirates & Saudi Arabia',
        countryName_bn: 'সংযুক্ত আরব আমিরাত ও সৌদি আরব',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Massive digital transformation in Dubai and Riyadh is driving hiring for enterprise data analysts who can integrate AI productivity pipelines.',
        visaReality_bn: 'দুবাই ও রিয়াদে করপোরেট ডেটা অ্যানালিস্ট ও এআই অটোমেশন বিশেষজ্ঞদের উচ্চ বেতনের চাকরির সুযোগ তৈরি হচ্ছে।',
        averageSalaryUsdOrLocal: '12,000 - 22,000 AED / month (approx 380,000 - 700,000 BDT)',
        requiredExperienceYears: '2 to 5 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$1,200 - $4,200 USD',
      competitionLevel: 'Moderate to High',
      competitionLevel_bn: 'মাঝারি থেকে তীব্র',
      englishRequirement: 'Clear written and spoken English to interpret business questions and present data storytelling to international clients',
      englishRequirement_bn: 'আন্তর্জাতিক ক্লায়েন্টদের কাছে ব্যবসায়িক তথ্য ও ড্যাশবোর্ডের ফলাফল ব্যাখ্যা করার উপযোগী ইংরেজি',
      realities_en: [
        'Global e-commerce brands hire remote data analysts to automate sales reporting, competitor price monitoring, and customer segmentation.',
        'A public interactive Streamlit dashboard or Power BI report link on your CV provides immediate credibility in remote interviews.'
      ],
      realities_bn: [
        'বিদেশি কোম্পানিগুলো সেলস ডাটা বিশ্লেষণ ও স্বয়ংক্রিয় রিপোর্টিংয়ের জন্য দূরবর্তী কর্মী নিয়োগ দেয়।',
        'সিভিতে লাইভ স্ট্রিমলিট বা পাওয়ার বিআই ড্যাশবোর্ডের কার্যকর লিংক দিলে অন্যদের তুলনায় ইন্টারভিউ পাওয়ার সম্ভাবনা অনেক বেড়ে যায়।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Python 3.12+ Core, Type Hints, Polars & Asynchronous Flow',
      phaseTitle_bn: 'পাইথন ৩.১২ কোর, টাইপ হিন্টস, পোলার্স ও অ্যাসিঙ্ক কোডিং',
      phaseSubtitle_en: 'Master modern Python syntax, memory structures, and high-speed DataFrames.',
      phaseSubtitle_bn: 'আধুনিক পাইথন সিনট্যাক্স, মেমরি স্ট্রাকচার ও দ্রুতগতির ডেটা ফ্রেম।',
      durationWeeks: 4,
      modules: [
        {
          id: 'py-p1-m1',
          title_en: 'Python 3.12 Syntax, Type Annotations & Virtual Environments',
          title_bn: 'পাইথন ৩.১২ সিনট্যাক্স, টাইপ অ্যানোটেশন ও ভার্চুয়াল এনভায়রনমেন্ট',
          description_en: 'Learn type hints, Pydantic validation models, virtual environments with uv / venv, error handling, and clean modular code organization.',
          description_bn: 'পাইথনের আধুনিক টাইপ সিস্টেম, পাইড্যান্টিক ভ্যালিডেশন এবং দ্রুততম প্যাকেজ ম্যানেজার (uv) ব্যবহার।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['Python 3.12 Features', 'Type Hinting & Pydantic', 'uv / venv environments', 'Context Managers (with)'],
          practicalTask_en: 'Write a modular Python script that parses complex JSON logs and validates records using a strict Pydantic model.',
          practicalTask_bn: 'একটি মডিউলার পাইথন স্ক্রিপ্ট লেখো যা এলোমেলো জেএসএন ফাইল পার্স করে পাইড্যান্টিক মডেল দিয়ে ভ্যালিডেট করে।'
        },
        {
          id: 'py-p1-m2',
          title_en: 'High-Performance Data Wrangling with Polars & Pandas 2.2+',
          title_bn: 'পোলার্স ও প্যান্ডাস ২.২ দিয়ে দ্রুতগতির ডেটা প্রসেসিং',
          description_en: 'Learn why Polars is up to 30x faster than legacy Pandas on multi-core CPUs. Master LazyFrames, filter expressions, grouping, and memory optimization.',
          description_bn: 'পোলার্স দিয়ে মাল্টি-কোর প্রসেসরের সাহায্যে লাখ লাখ রো কয়েক সেকেন্ডে ফিল্টার, গ্রুপ ও ক্লিন করার পদ্ধতি।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['Polars vs Pandas Benchmarks', 'LazyFrame Execution Plan', 'Handling Missing Nulls', 'GroupBy Aggregations'],
          practicalTask_en: 'Load a 1-million row sales dataset in Polars, aggregate monthly revenue by product category using lazy evaluation, and export clean Parquet output.',
          practicalTask_bn: 'পোলার্স ব্যবহার করে ১০ লাখ ডেটা পয়েন্টের সেলস ফাইল প্রসেস করে ক্যাটাগরি অনুযায়ী মোট রেভিনিউ হিসাব করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'PostgreSQL 17, DuckDB & Analytical SQL Aggregations',
      phaseTitle_bn: 'পোস্টগ্রেসকিউএল ১৭, ডাক-ডিবি ও অ্যানালিটিক্যাল এসকিউএল কুয়েরি',
      phaseSubtitle_en: 'Extract business metrics with window functions, joins, and column-store engines.',
      phaseSubtitle_bn: 'উইন্ডো ফাংশন, টেবিল জয়েন ও কলামনার ইঞ্জিনের সাহায্যে ব্যবসায়িক তথ্য বিশ্লেষণ।',
      durationWeeks: 4,
      modules: [
        {
          id: 'py-p2-m1',
          title_en: 'Advanced Relational SQL: Joins, CTEs & Window Functions',
          title_bn: 'অ্যাডভান্সড এসকিউএল: জয়েন, সিটিই ও উইন্ডো ফাংশন',
          description_en: 'Write professional queries using Common Table Expressions (CTEs), multi-table INNER/LEFT joins, and window functions like ROW_NUMBER, RANK, and LAG/LEAD.',
          description_bn: 'সিটিই, জটিল টেবিল জয়েন এবং উইন্ডো ফাংশন দিয়ে আগের মাসের সাথে বর্তমান মাসের সেলস পার্থক্যের হিসাব বের করা।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['CTEs (WITH clause)', 'Window Functions (OVER / PARTITION BY)', 'LAG & LEAD for MoM Growth', 'Subqueries & Indexing'],
          practicalTask_en: 'Write an analytical SQL query calculating month-over-month sales growth and customer churn rate across 3 linked tables.',
          practicalTask_bn: '৩টি যুক্ত টেবিল থেকে প্রতি মাসের সেলস বৃদ্ধির হার ও কাস্টমার ড্রপআউট রেট বের করার এসকিউএল কুয়েরি লেখো।'
        },
        {
          id: 'py-p2-m2',
          title_en: 'In-Process Analytical Power with DuckDB & Parquet Files',
          title_bn: 'ডাক-ডিবি ও পারকে (Parquet) দিয়ে নিমেষে অ্যানালিটিক্স',
          description_en: 'Run analytical queries directly on Parquet/CSV files on your laptop without setting up heavy database servers using DuckDB.',
          description_bn: 'ভারী সার্ভার ছাড়াই ল্যাপটপে সরাসরি পারকে ও সিএসভি ফাইলের ওপর উচ্চগতির কুয়েরি চালানোর কৌশল।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['DuckDB Architecture', 'Direct Parquet Querying', 'Exporting Compressed Data', 'DuckDB + Python Integration'],
          practicalTask_en: 'Use DuckDB in Python to run analytical aggregations directly over 5 separate CSV files in less than 2 seconds.',
          practicalTask_bn: 'পাইথনে ডাক-ডিবি লাইব্রেরি ব্যবহার করে ৫টি আলাদা সিএসভি ফাইল থেকে ২ সেকেন্ডের মধ্যে রিপোর্ট তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Automated Scraping, Clean ETL & Interactive Power BI / Streamlit',
      phaseTitle_bn: 'অটোমেটেড স্ক্র্যাপিং, ক্লিন ইটিএল ও পাওয়ার বিআই/স্ট্রিমলিট ড্যাশবোর্ড',
      phaseSubtitle_en: 'Gather web data, automate pipelines, and deliver executive dashboards.',
      phaseSubtitle_bn: 'ওয়েব ডেটা সংগ্রহ, স্বয়ংক্রিয় পাইপলাইন ও চমৎকার এক্সিকিউটিভ ড্যাশবোর্ড তৈরি।',
      durationWeeks: 5,
      modules: [
        {
          id: 'py-p3-m1',
          title_en: 'Reliable Web Data Extraction with Playwright & BeautifulSoup',
          title_bn: 'প্লে-রাইট ও বিউটিফুলসুপ দিয়ে স্বয়ংক্রিয় ওয়েব স্ক্র্যাপিং',
          description_en: 'Automate browser navigation to scrape dynamic JavaScript websites, handle pagination, bypass basic rate limits cleanly, and store structured data.',
          description_bn: 'জাভাস্ক্রিপ্ট নির্ভর ওয়েবসাইট থেকে স্বয়ংক্রিয়ভাবে প্রডাক্টের দাম ও স্টক সংক্রান্ত তথ্য সংগ্রহ করার টেকনিক।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Playwright Automation', 'BeautifulSoup HTML Parsing', 'Handling Pagination & Delays', 'Export to PostgreSQL'],
          practicalTask_en: 'Build an automated price tracker that monitors top 10 laptop prices daily from an e-commerce platform and saves to PostgreSQL.',
          practicalTask_bn: 'একটি স্বয়ংক্রিয় প্রাইস ট্র্যাকার বানাও যা প্রতিদিন ই-কমার্স সাইট থেকে ল্যাপটপের দাম সংগ্রহ করে ডেটাবেসে রাখে।'
        },
        {
          id: 'py-p3-m2',
          title_en: 'Executive Business Dashboards with Power BI & Streamlit',
          title_bn: 'পাওয়ার বিআই ও স্ট্রিমলিট দিয়ে বিজনেস ড্যাশবোর্ড তৈরি',
          description_en: 'Design professional Star Schema models in Power BI, write DAX metrics, leverage AI Copilot quick summaries, and build web apps with Python Streamlit.',
          description_bn: 'স্টার স্কিমা মডেলিং, ড্যাক্স মেজার্স এবং পাইথন স্ট্রিমলিট দিয়ে কোম্পানির জন্য দৃষ্টিনন্দন ইন্টারঅ্যাক্টিভ ড্যাশবোর্ড তৈরি।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Star Schema Architecture', 'DAX Measures & KPIs', 'Power BI Visual Hierarchy', 'Streamlit Web Deployment'],
          practicalTask_en: 'Build and deploy a public Streamlit sales intelligence dashboard featuring filters, KPI cards, and trend prediction charts.',
          practicalTask_bn: 'একটি লাইভ স্ট্রিমলিট ওয়েব ড্যাশবোর্ড তৈরি করো যেখানে ফিল্টার, কেপিআই কার্ড ও ট্রেন্ড চার্ট লাইভ দেখা যাবে।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Local LLMs with Ollama, RAG with pgvector & AI Agent Pipelines',
      phaseTitle_bn: 'ওলামা দিয়ে লোকাল এলএলএম, আরএজি ও এআই অটোমেশন পাইপলাইন',
      phaseSubtitle_en: 'Deploy private AI chat over documents, vector similarity, and viva readiness.',
      phaseSubtitle_bn: 'কোম্পানির নিজস্ব ডেটায় এআই সার্চ, ভেক্টর সিমিলারিটি ও টেকনিক্যাল ভাইভা প্রস্তুতি।',
      durationWeeks: 5,
      modules: [
        {
          id: 'py-p4-m1',
          title_en: 'Running Private Local LLMs with Ollama & Embedding Models',
          title_bn: 'ওলামা দিয়ে প্রাইভেট মডেল পরিচালনা ও ভেক্টর এম্বেডিং',
          description_en: 'Run Llama 3.3, Mistral, and DeepSeek locally on your PC without sending proprietary data to cloud APIs. Generate text embeddings using sentence-transformers.',
          description_bn: 'নিজের ল্যাপটপে ইন্টারনেট ছাড়াই ওলামা দিয়ে এআই মডেল চালানো এবং টেক্সটকে ভেক্টর নাম্বারে রূপান্তর করা।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['Ollama Setup & CLI', 'Llama 3.3 / Mistral', 'Embedding Models (nomic-embed)', 'Vector Dimensionality'],
          practicalTask_en: 'Set up Ollama locally, test prompt inference from Python, and generate 768-dimensional embeddings for 100 enterprise policy paragraphs.',
          practicalTask_bn: 'লোকাল ওলামা সেটআপ করে পাইথন দিয়ে ১০০টি পলিসি প্যারাগ্রাফের ভেক্টর এম্বেডিং তৈরি করো।'
        },
        {
          id: 'py-p4-m2',
          title_en: 'Retrieval-Augmented Generation (RAG) with PostgreSQL pgvector',
          title_bn: 'পোস্টগ্রেসকিউএল pgvector দিয়ে আরএজি (RAG) সিস্টেম বাস্তবায়ন',
          description_en: 'Store document chunks in PostgreSQL with pgvector, perform cosine distance search (<=> operator), and inject relevant context into the LLM prompt for zero hallucination.',
          description_bn: 'ডকুমেন্ট স্লাইস করে পোস্টগ্রেস ভেক্টর ডেটাবেসে রাখা এবং নিখুঁত এআই চ্যাটবটের জন্য প্রাসঙ্গিক তথ্য খুঁজে বের করা।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['Text Chunking Strategies', 'pgvector Cosine Distance', 'Prompt Context Injection', 'Hallucination Mitigation'],
          practicalTask_en: 'Build a private PDF Q&A bot in Python that reads CST syllabus documents and answers user questions strictly based on the syllabus text.',
          practicalTask_bn: 'একটি সিএসটি সিলেবাস কোশ্চেন-অ্যান্সার বট বানাও যা সিলেবাসের বাইরে কোনো মনগড়া উত্তর দেবে না।'
        },
        {
          id: 'py-p4-m3',
          title_en: 'GitHub Portfolio, Clean Data Documentation & Technical Viva',
          title_bn: 'গিটহাব পোর্টফোলিও, ডেটা ডকুমেন্টেশন ও চাকরি ভাইভা প্রস্তুতি',
          description_en: 'Publish documented notebooks, clean code repositories, showcase your live Streamlit dashboard, and master technical interview questions.',
          description_bn: 'গিটহাবে প্রজেক্ট গুছিয়ে রাখা, লাইভ ড্যাশবোর্ড প্রদর্শন এবং চাকরি ইন্টারভিউয়ের টেকনিক্যাল প্রশ্নের নিখুঁত উত্তর দেওয়া।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['Data Storytelling', 'SQL Optimization Viva', 'RAG Architecture Explanation', 'CV Project Highlighting'],
          practicalTask_en: 'Assemble your public GitHub data analytics portfolio with clear screenshots, dataset descriptions, and live dashboard links.',
          practicalTask_bn: 'তোমার গিটহাবে লাইভ ড্যাশবোর্ড লিংক ও স্ক্রিনশট সহ পূর্ণাঙ্গ পোর্টফোলিও সাজিয়ে সিভিতে যুক্ত করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'py-q1',
      question_en: 'Why does Polars significantly outperform traditional Pandas on multi-core systems when analyzing large datasets?',
      question_bn: 'বড় ডেটাসেট প্রসেস করার ক্ষেত্রে ঐতিহ্যবাহী প্যান্ডাসের চেয়ে পোলার্স (Polars) কেন বহুগুণ দ্রুত কাজ করে?',
      category: 'Data Engineering Engine',
      whyAsked_en: 'Evaluates if the candidate is up-to-date with modern 2026 data processing engines vs legacy single-threaded tools.',
      whyAsked_bn: 'প্রার্থী আধুনিক দ্রুতগতির ডেটা ফ্রেম ইঞ্জিন সম্পর্কে ওয়াকিবহাল কি না তা যাচাই করার জন্য।',
      howToAnswer_en: 'Polars is written in Rust from the ground up and built on top of the Apache Arrow columnar memory format. Unlike Pandas (which is predominantly single-threaded and copies memory frequently during transformations), Polars natively parallelizes operations across all available CPU cores using work-stealing algorithms. Furthermore, Polars features a LazyFrame query optimizer that analyzes execution plans, pushes down predicates (filtering data before loading it into RAM), and eliminates redundant operations, resulting in 5x to 30x speedups with drastically lower memory usage.',
      howToAnswer_bn: 'পোলার্স রাস্ট (Rust) ভাষায় তৈরি এবং অ্যাপাচি অ্যারো কলামনার মেমরি ফরম্যাট ব্যবহার করে। প্যান্ডাস মূলত সিঙ্গেল থ্রেডেড এবং প্রতিটি পরিবর্তনে মেমরি ডুপ্লিকেট করে, যা প্রচুর র‍্যাম নষ্ট করে। অন্যদিকে পোলার্স কম্পিউটারের সকল সিপিইউ কোর একসাথে ব্যবহার করে। এছাড়া পোলার্সের লেজি-ফ্রেম কুয়েরি অপ্টিমাইজার পুরো পাইপলাইন অ্যানালাইসিস করে অপ্রয়োজনীয় ডাটা বাদ দিয়ে মেমরিতে লোড করে, যার ফলে এটি ৫ থেকে ৩০ গুণ পর্যন্ত দ্রুত গতি দেয়।',
      commonMistakes_en: 'Thinking Polars is just a wrapper around Pandas, or not mentioning multi-threading and query execution plans.',
      commonMistakes_bn: 'মনে করা যে পোলার্স শুধু প্যান্ডাসের একটি ভ্যারিয়েন্ট, এর মাল্টি-থ্রেডিং ও রাস্ট ইঞ্জিন সম্পর্কে না জানা।'
    },
    {
      id: 'py-q2',
      question_en: 'What is DuckDB, and how does its columnar vector execution differ from row-based transactional databases like traditional PostgreSQL?',
      question_bn: 'ডাক-ডিবি (DuckDB) কী এবং এর কলামনার এক্সিকিউশন রো-ভিত্তিক ডেটাবেস যেমন পোস্টগ্রেসকিউএল থেকে কীভাবে আলাদা?',
      category: 'Analytical Databases',
      whyAsked_en: 'Tests candidate understanding of OLAP (Online Analytical Processing) versus OLTP (Online Transaction Processing).',
      whyAsked_bn: 'ওএলএপি (অ্যানালিটিক্স) ও ওএলটিপি (ট্রানজ্যাকশন) এর মধ্যকার মৌলিক পার্থক্য প্রার্থী বোঝে কি না তা পরীক্ষা করতে।',
      howToAnswer_en: 'PostgreSQL is primarily an OLTP database storing records row-by-row, which is optimal for creating or updating individual user rows. DuckDB is an in-process OLAP database storing data in columnar format. When running analytical queries like AVG(sales) or SUM(profit) across millions of records, DuckDB only reads the specific sales column from disk into CPU cache (vectorized processing with SIMD instructions), skipping all other unneeded columns. This makes analytical scans 100x faster while requiring zero client-server network overhead.',
      howToAnswer_bn: 'পোস্টগ্রেস মূলত রো-ভিত্তিক ওএলটিপি ডেটাবেস, যা একজন নির্দিষ্ট ইউজারের ডাটা সেভ বা আপডেট করার জন্য সেরা। আর ডাক-ডিবি হলো ইন-প্রসেস ওএলএপি ডেটাবেস যা কলাম আকারে ডাটা সংরক্ষণ করে। যখন লাখ লাখ রো থেকে কেবল গড় সেলস বা মোট লাভ বের করতে হয়, তখন ডাক-ডিবি অন্য কোনো কলাম না পড়ে শুধু সেলসের কলামটুকু সরাসরি সিপিইউ ক্যাশে লোড করে সেকেন্ডের মধ্যে হিসাব সম্পন্ন করে।',
      commonMistakes_en: 'Suggesting DuckDB replace PostgreSQL for live e-commerce transactional checkouts where row-level ACID locking is essential.',
      commonMistakes_bn: 'মনে করা যে ডাক-ডিবি লাইভ ব্যাংকিং ট্রানজ্যাকশনের জন্য ব্যবহার করা উচিত।'
    },
    {
      id: 'py-q3',
      question_en: 'How does Retrieval-Augmented Generation (RAG) work, and how does pgvector calculate cosine distance to find relevant context?',
      question_bn: 'আরএজি (RAG) কীভাবে কাজ করে এবং প্রাসঙ্গিক তথ্য খুঁজে পেতে pgvector কীভাবে কোসাইন দূরত্ব গণনা করে?',
      category: 'Practical AI & Search',
      whyAsked_en: 'The benchmark AI engineering question in late 2026 for building accurate private knowledge bots without hallucination.',
      whyAsked_bn: 'কোম্পানির নিজস্ব নথিপত্রের ওপর নির্ভুল এআই চ্যাটবট বানানোর টেকনিক্যাল দক্ষতা যাচাই করতে।',
      howToAnswer_en: 'RAG resolves model hallucination and outdated knowledge. First, long documents are chunked into smaller passages (e.g. 500 tokens with 50-token overlap). An embedding model converts each chunk into a high-dimensional vector array (e.g. 768 floats). When a user asks a query, the query is converted into an embedding using the exact same model. PostgreSQL with the pgvector extension uses the cosine distance operator (<=>) or HNSW indexes to calculate the mathematical cosine similarity between the query vector and chunk vectors. The top matching chunks are retrieved and injected into the LLM system prompt as verified ground truth before the model generates the final response.',
      howToAnswer_bn: 'আরএজি সিস্টেমে বড় বড় ডকুমেন্টকে প্রথমে ছোট ছোট প্যারাগ্রাফে ভাগ করা হয়। এরপর এম্বেডিং মডেল দিয়ে প্রতিটি প্যারাগ্রাফকে একটি গাণিতিক ভেক্টরে রূপান্তর করে পোস্টগ্রেসের pgvector-এ রাখা হয়। ব্যবহারকারী প্রশ্ন করলে সেই প্রশ্নেরও ভেক্টর তৈরি হয়। কোসাইন ডিসটেন্স হিসাব করে সবচেয়ে কাছাকাছি অর্থের প্যারাগ্রাফগুলো খুঁজে বের করা হয় এবং এআই মডেলের প্রম্পটে রেফারেন্স হিসেবে জুড়ে দেওয়া হয়, ফলে মডেল মনগড়া কোনো ভুল উত্তর দেয় না।',
      commonMistakes_en: 'Passing entire 100-page PDF documents directly to the LLM prompt without chunking or vector similarity retrieval.',
      commonMistakes_bn: 'পুরো ডকুমেন্ট একবারে প্রম্পটে পাঠিয়ে দেওয়া, যা টোকেন লিমিট শেষ করে ফেলে এবং খরচ বহুগুণ বাড়িয়ে দেয়।'
    },
    {
      id: 'py-q4',
      question_en: 'How do you ensure deterministic JSON output and prevent hallucinated data when integrating LLMs into business pipelines?',
      question_bn: 'ব্যবসায়িক ডেটা পাইপলাইনে এআই মডেল যুক্ত করার সময় কীভাবে ১০০% নিশ্চিত সঠিক স্ট্রাকচার্ড জেএসএন আউটপুট পাওয়া যায়?',
      category: 'AI Pipeline Reliability',
      whyAsked_en: 'Verifies production software discipline, ensuring models do not break downstream APIs with unexpected conversational text.',
      whyAsked_bn: 'এআইয়ের আউটপুট যাতে সফটওয়্যার বা ডেটাবেসে কোনো ক্র্যাশ না করায় তা নিশ্চিত করার পদ্ধতি জানতে।',
      howToAnswer_en: 'We do not rely on conversational prompt engineering alone. In 2026, we utilize Structured Outputs / Function Calling with JSON Schema enforcement and Python Pydantic models. By specifying a strict Pydantic model and binding it to the model call, modern inference engines constrain the sampling decoding tokens to only emit valid JSON conforming to the schema. We also set temperature to 0.0 for deterministic outputs, validate incoming responses with Pydantic parse_obj(), and implement retry backoff loops with schema error feedback if validation ever fails.',
      howToAnswer_bn: 'আমরা শুধু সাধারণ প্রম্পটের ওপর নির্ভর করি না। পাইথন পাইড্যান্টিক (Pydantic) মডেল দিয়ে কঠোর জেএসএন স্কিমা সংজ্ঞায়িত করা হয়। আধুনিক এআই ইঞ্জিনে স্ট্রাকচার্ড আউটপুট বা টুল কলিং ব্যবহার করলে মডেল সিনট্যাক্স অনুযায়ীই উত্তর দিতে বাধ্য থাকে। পাশাপাশি টেম্পারেচার ০.০ সেট করা হয় যাতে উত্তর সবসময় নির্দিষ্ট থাকে এবং কোনো কারণে এরর আসলে স্বয়ংক্রিয় রিট্রাই লুপ দিয়ে তা ঠিক করা হয়।',
      commonMistakes_en: 'Trying to regex conversational text like "Here is your JSON: { ... }" instead of using native structured schema enforcement.',
      commonMistakes_bn: 'এআইয়ের সাধারণ উত্তরের ভেতর থেকে রেজেক্স দিয়ে জেএসএন খোঁজার চেষ্টা করা যা যেকোনো সময় ফেইল করতে পারে।'
    }
  ],
  freeCerts: [
    {
      id: 'fcc-scientific-python',
      title_en: 'freeCodeCamp: Scientific Computing with Python Certification',
      title_bn: 'ফ্রি-কোড-ক্যাম্প: সায়েন্টিফিক কম্পিউটিং উইথ পাইথন',
      provider: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 300,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'World-renowned 300-hour verified curriculum testing Python data structures, algorithms, and practical scripting projects.',
      relevance_bn: 'আন্তর্জাতিকভাবে স্বীকৃত ৩০০ ঘণ্টার ফ্রি পাইথন কোডিং সার্টিফিকেশন ও বাস্তব প্রজেক্ট।'
    },
    {
      id: 'microsoft-powerbi-learn',
      title_en: 'Microsoft Certified: Power BI Data Analyst Associate Path (Free Modules)',
      title_bn: 'মাইক্রোসফট পাওয়ার বিআই ডেটা অ্যানালিস্ট উন্মুক্ত কোর্স',
      provider: 'Microsoft Learn',
      url: 'https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 40,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official Microsoft learning path covering enterprise data modeling, DAX expressions, and report visual design.',
      relevance_bn: 'মাইক্রোসফটের নিজস্ব অফিসিয়াল পাওয়ার বিআই ট্রেনিং ও বিজনেস অ্যানালিটিক্স গাইড।'
    },
    {
      id: 'deeplearning-ai-rag',
      title_en: 'DeepLearning.AI: Building RAG & Local AI Agent Workflows',
      title_bn: 'ডিপ-লার্নিং.এআই: বিল্ডিং আরএজি ও এআই এজেন্ট ওয়ার্কফ্লো',
      provider: 'DeepLearning.AI',
      url: 'https://www.deeplearning.ai/short-courses/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 15,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Industry gold standard short course created by Andrew Ng covering practical vector retrieval, text embeddings, and evaluation.',
      relevance_bn: 'অ্যান্ড্রু এনজি পরিচালিত আধুনিক আরএজি ও এআই ইন্টিগ্রেশন সংক্ষিপ্ত প্রশিক্ষণ।'
    }
  ]
};
