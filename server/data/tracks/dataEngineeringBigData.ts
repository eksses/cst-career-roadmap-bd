import type { CareerTrack } from '../../../shared/types.js';

export const dataEngineeringBigDataTrack: Omit<CareerTrack, 'id'> = {
  slug: 'data-engineering-big-data',
  title_en: 'Data Engineering, Big Data & Real-Time Streaming Systems (2026 Edition)',
  title_bn: 'ডেটা ইঞ্জিনিয়ারিং, বিগ ডেটা ও রিয়েল-টাইম স্ট্রিমিং সিস্টেমস (২০২৬ এডিশন)',
  summary_en: 'Calibrated for late 2026. Design high-throughput data pipelines using Python, SQL, Apache Spark 3.5, Apache Kafka, DuckDB, Polars, and dbt (data build tool). Ingest, transform, and orchestrate terabytes of operational data into cloud data lakehouses.',
  summary_bn: '২০২৬ সালের আধুনিক বিগ ডেটা ইঞ্জিনিয়ারিং। পাইথন, অ্যাপাচি স্পার্ক ৩.৫, অ্যাপাচি কাফকা, ডাক-ডিবি, পোলার্স ও ডিবিটি (dbt) দিয়ে বিশাল পরিমাণ ডেটা রিয়েল-টাইমে প্রসেস ও ক্লাউড ডেটা লেকহাউসে সংরক্ষণের ক্যারিয়ার ট্র্যাক।',
  pivotAdvice_en: 'Data engineering is the invisible backbone behind every production AI model and executive intelligence dashboard in the world. While analysts query data, data engineers build the robust distributed pipelines that deliver it reliably. If you love high-throughput databases and distributed architectures, this path offers outstanding salary potential.',
  pivotAdvice_bn: 'বিশ্বের প্রতিটি এআই মডেল ও বিজনেস অ্যানালিটিক্স কাজ করার পেছনের মূল ভিত্তি হলেন ডেটা ইঞ্জিনিয়ার। টেলিকম, ব্যাংক ও আন্তর্জাতিক ক্লাউড কোম্পানিগুলোতে রিয়েল-টাইম কোটি কোটি ডেটা নিখুঁতভাবে পাইপলাইন তৈরি করে সরবরাহ করার জন্য ডেটা ইঞ্জিনিয়ারদের সর্বোচ্চ মূল্যায়ন ও বেতন দেওয়া হয়।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Writing distributed data processing jobs using PySpark, Polars, and SQL transformations.',
    'Building real-time event streaming pipelines with Apache Kafka to capture transactions with sub-second latency.',
    'Orchestrating automated ETL workflows and dependency Directed Acyclic Graphs (DAGs) in Apache Airflow.',
    'Designing schema models (Star schema, Snowflake schema, and Medallion architecture) in analytical warehouses.',
    'Monitoring pipeline latencies, enforcing data quality checks with Great Expectations, and deduplicating redundant records.'
  ],
  dayToDay_bn: [
    'পাইস্পার্ক (PySpark), পোলার্স ও এসকিউএল দিয়ে কোটি কোটি ডেটা রোর দ্রুত প্রসেসিং কোড লেখা।',
    'অ্যাপাচি কাফকা (Kafka) দিয়ে প্রতি সেকেন্ডে আসা হাজার হাজার লেনদেন লাইভ স্ট্রিম করা।',
    'অ্যাপাচি এয়ারফ্লো (Airflow) দিয়ে রাত ১২টায় স্বয়ংক্রিয় ব্যাকআপ ও ডেটা পাইপলাইন সিডিউলিং করা।',
    'মেডালিয়ন আর্কিটেকচার (ব্রোঞ্জ, সিলভার, গোল্ড) মেনে ক্লাউড ডেটা লেকহাউস স্কিমা ডিজাইন করা।',
    'ডেটা ডুপ্লিকেট হওয়া রোধ করা এবং পাইপলাইনে কোনো এরর আসলে স্বয়ংক্রিয় অ্যালার্ট পাঠানো।'
  ],
  mustHaveSkills: [
    {
      id: 'advanced-sql-window-functions',
      name: 'Advanced SQL, Window Functions & Partitioning',
      category: 'Core Database Querying',
      importance: 'Essential',
      description_en: 'Window functions (ROW_NUMBER, RANK, LAG/LEAD), CTEs, partitioning, query execution plan analysis, and indexing.',
      description_bn: 'উইন্ডো ফাংশন, সিটিই (CTE), টেবিল পার্টিশনিং এবং মিলিয়ন ডেটা দ্রুত ফিল্টার করার কুয়েরি অপ্টিমাইজেশন।'
    },
    {
      id: 'pyspark-distributed-computing',
      name: 'Apache Spark & PySpark Distributed Computing',
      category: 'Big Data Processing',
      importance: 'Essential',
      description_en: 'Resilient Distributed Datasets (RDDs), Spark DataFrames, transformations vs actions, shuffling, and memory caches.',
      description_bn: 'পাইস্পার্ক দিয়ে মেমরিতে শত শত গিগাবাইট ডেটা প্যারালাল কম্পিউটিংয়ের মাধ্যমে নিমেষে প্রসেস করা।'
    },
    {
      id: 'apache-kafka-streaming',
      name: 'Apache Kafka Event Streaming & Message Brokers',
      category: 'Data Streaming',
      importance: 'Essential',
      description_en: 'Topics, partitions, producers, consumer groups, offset management, and real-time publish-subscribe models.',
      description_bn: 'রিয়েল-টাইম মেসেজ ব্রোকার, টপিক পার্টিশন এবং লেনদেনের ইভেন্ট স্ট্রিমিং হ্যান্ডেলিং।'
    },
    {
      id: 'apache-airflow-orchestration',
      name: 'Apache Airflow Workflow Orchestration & DAGs',
      category: 'Workflow Automation',
      importance: 'Recommended',
      description_en: 'Writing Python DAG files, scheduling operators, handling task retries, and monitoring backfills.',
      description_bn: 'এয়ারফ্লো দিয়ে পাইথন কোডে ইটিএল (ETL) শিডিউলিং এবং স্বয়ংক্রিয় টাস্ক মনিটরিং।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Gulshan, Banani, Mohakhali, Kawran Bazar) & Hybrid BD',
      entrySalary: { min: 32000, max: 55000, currency: 'BDT', formatted: '32,000 - 55,000 BDT' },
      midSalary: { min: 75000, max: 155000, currency: 'BDT', formatted: '75,000 - 155,000 BDT' },
      seniorSalary: { min: 170000, max: 360000, currency: 'BDT', formatted: '170,000 - 360,000 BDT' },
      hiringSectors: [
        'Telecommunication Giants (Grameenphone, Banglalink, Robi big data platforms)',
        'FinTech and Mobile Banking (bKash Transaction Analytics, Nagad Data Engineering)',
        'Ride Sharing & Logistics Platforms (Pathao, Shohoz, Chaldal analytics divisions)',
        'Offshore Data Warehousing Consultancies in Dhaka'
      ],
      cvExpectations: [
        'Flawless SQL querying capabilities with deep understanding of execution plans and joins',
        'GitHub repository demonstrating an end-to-end automated ETL pipeline using Docker and Airflow',
        'Understanding of data modeling for analytics (Fact tables, Dimension tables, Medallion stages)',
        'Knowledge of distributed data streaming concepts with Kafka or cloud queues'
      ],
      localDemandSummary_en: 'Telecommunication and financial giants in Dhaka maintain massive data warehouses with petabytes of records. Data engineers are among the highest paid engineering specialists in the country, commanding extraordinary hiring urgency.',
      localDemandSummary_bn: 'গ্রামীণফোন, রবি, বিকাশ ও বড় বহুজাতিক কোম্পানিগুলোতে কোটি কোটি ব্যবহারকারীর ডেটা থাকে। এই ডেটা সুরক্ষিতভাবে সঠিক জায়গায় পৌঁছানোর জন্য ডেটা ইঞ্জিনিয়ারদের সেরা বেতন স্কেল অফার করা হয়।'
    },
    targetCountries: [
      {
        region: 'Europe & North America',
        countryName_en: 'Netherlands, Germany & United States',
        countryName_bn: 'নেদারল্যান্ডস, জার্মানি ও যুক্তরাষ্ট্র',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'European tech hubs have severe shortages of experienced data pipeline engineers. Candidates with strong PySpark and Kafka skills receive priority work visas.',
        visaReality_bn: 'ইউরোপের বড় ক্লাউড প্রতিষ্ঠানগুলোতে ডেটা পাইপলাইন ইঞ্জিনিয়ারের প্রচুর ঘাটতি রয়েছে। স্পার্ক ও কাফকা জানলে সরাসরি ভিসা পাওয়া যায়।',
        averageSalaryUsdOrLocal: '$80,000 - $145,000 USD / year (approx 9,600,000 - 17,400,000 BDT)',
        requiredExperienceYears: '2+ years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি থেকে উচ্চ',
      monthlyRangeUsd: '$1,400 - $5,500 USD',
      competitionLevel: 'Global, won through robust reproducible pipeline architecture and verifiable benchmarks',
      competitionLevel_bn: 'ডকার ও ক্লাউড ডেটাবেস আর্কিটেকচারের নিখুঁত পোর্টফোলিও শোকেস করে স্থায়ী রিমোট চাকরি পাওয়া যায়',
      englishRequirement: 'Professional English to discuss schema migrations and data governance with global product managers',
      englishRequirement_bn: 'আন্তর্জাতিক ডেটা টিমের সাথে এসকিউএল স্কিমা ও ডেটা পাইপলাইন নিয়ে প্রাতিষ্ঠানিক আলোচনার মতো ইংরেজি',
      realities_en: [
        'A single bad SQL query on a cloud warehouse can cost a company thousands of dollars; optimization skills are prized.',
        'You can practice distributed PySpark and Airflow locally on your own laptop using lightweight Docker containers.'
      ],
      realities_bn: [
        'ক্লাউডে একটি ভুল এসকিউএল কুয়েরির কারণে কোম্পানির হাজার ডলার অপচয় হতে পারে, তাই অপ্টিমাইজেশন জানা ইঞ্জিনিয়ারদের দাম বেশি।',
        'বাসার সাধারণ ল্যাপটপেই ডকার কনটেইনার ব্যবহার করে অ্যাপাচি স্পার্ক ও এয়ারফ্লোর পূর্ণাঙ্গ প্রজেক্ট সম্পূর্ণ ফ্রিতে শেখা যায়।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Advanced SQL, Schema Modeling & Analytical Warehouses',
      phaseTitle_bn: 'অ্যাডভান্সড এসকিউএল, ডেটা মডেলিং ও ওয়্যারহাউস আর্কিটেকচার',
      phaseSubtitle_en: 'Master window functions, CTEs, indexing, and Star schema designs.',
      phaseSubtitle_bn: 'উইন্ডো ফাংশন, টেবিল পার্টিশনিং ও স্টার স্কিমা অ্যানালিটিক্স ডিজাইন।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-advanced-sql-modeling',
          title_en: 'Analytical SQL & Data Warehouse Modeling',
          title_bn: 'অ্যানালিটিক্যাল এসকিউএল ও ডেটা ওয়্যারহাউস স্কিমা',
          description_en: 'Window calculations (SUM OVER, LAG/LEAD), Common Table Expressions, Star vs Snowflake schema, and EXPLAIN ANALYZE.',
          description_bn: 'উইন্ডো ফাংশন দিয়ে মাসিক গ্রোথ ও র‍্যাঙ্কিং বের করা এবং কুয়েরি এক্সিকিউশন প্ল্যান বিশ্লেষণ।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Window functions (ROW_NUMBER, DENSE_RANK)', 'Star schema fact & dimension tables', 'EXPLAIN ANALYZE index scanning'],
          practicalTask_en: 'Write complex SQL analytical queries calculating monthly churn and running revenue totals across a million simulated transaction rows.',
          practicalTask_bn: 'দশ লাখ লেনদেনের একটি ডামি ডেটাসেট থেকে কোম্পানির মাসিক আয় ও কাস্টমার ড্রপআউটের রিপোর্ট এসকিউএল দিয়ে তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Python Data Engineering, DuckDB & Polars Engine',
      phaseTitle_bn: 'পাইথন ডেটা ইঞ্জিনিয়ারিং, ডাক-ডিবি ও পোলার্স ইঞ্জিন',
      phaseSubtitle_en: 'High-speed transformations, Parquet storage, and writing custom ETL scripts.',
      phaseSubtitle_bn: 'পাইথন দিয়ে বিভিন্ন সোর্স থেকে ডেটা এক্সট্র্যাক্ট করা, ফিল্টার করা ও পোস্টগ্রেসে লোড করা।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-python-etl-docker',
          title_en: 'Python Automated ETL Scripts & Database Ingestion',
          title_bn: 'পাইথন স্বয়ংক্রিয় ইটিএল (ETL) স্ক্রিপ্ট ও ডাক-ডিবি কুয়েরি',
          description_en: 'Connecting to APIs, parsing messy JSON/CSV, validating records, and bulk inserting into PostgreSQL and DuckDB.',
          description_bn: 'এপিআই ও বিভিন্ন ফাইল থেকে কাঁচা তথ্য সংগ্রহ করে স্বয়ংক্রিয়ভাবে ফিল্টার করে ডেটাবেসে ঢোকানো।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Polars & DuckDB fast processing', 'Data validation and type casting', 'Multi-container Docker Compose setup'],
          practicalTask_en: 'Build an automated Python script that fetches real-time currency rates from an external API and loads them into a Postgres database daily.',
          practicalTask_bn: 'একটি স্বয়ংক্রিয় পাইথন স্ক্রিপ্ট তৈরি করো যা প্রতিদিন এপিআই থেকে ডেটা নিয়ে ডেটাবেসে ক্লিন করে সংরক্ষণ করবে।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Big Data Processing with PySpark & Distributed Computing',
      phaseTitle_bn: 'বিগ ডেটা প্রসেসিং ও অ্যাপাচি পাইস্পার্ক (PySpark)',
      phaseSubtitle_en: 'Parallel distributed processing, Spark DataFrames, and Parquet column storage.',
      phaseSubtitle_bn: 'পাইস্পার্ক দিয়ে মেমরিতে গিগাবাইট ডেটা প্রসেসিং ও দ্রুত পারকুয়েট (Parquet) ফরম্যাটে রূপান্তর।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-pyspark-bigdata',
          title_en: 'Distributed DataFrames & Parquet Column Storage',
          title_bn: 'পাইস্পার্ক ডেটাফ্রেম ও কলামনার স্টোরেজ',
          description_en: 'SparkSession, parallel worker transformations, column projection, partitioning by date, and saving in snappy Parquet format.',
          description_bn: 'সিএসভির চেয়ে ১০ গুণ ছোট ও দ্রুত পারকুয়েট ফাইলে ডেটা কম্প্রেস করা এবং স্পার্ক দিয়ে দ্রুত প্রসেসিং।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['PySpark DataFrame transformations', 'PartitionBy column optimization', 'Parquet vs CSV storage benchmarks'],
          practicalTask_en: 'Process a 2-gigabyte open dataset of taxi trips or retail orders using PySpark and generate aggregated sales metrics in under 30 seconds.',
          practicalTask_bn: 'পাইস্পার্ক দিয়ে বিশাল ডেটাসেট প্রসেস করে মাত্র ৩০ সেকেন্ডের মধ্যে সম্পূর্ণ ব্যবসায়িক সারসংক্ষেপ বের করো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Apache Airflow Orchestration & Real-Time Kafka Streaming',
      phaseTitle_bn: 'অ্যাপাচি এয়ারফ্লো অর্কেস্ট্রেশন ও কাফকা স্ট্রিমিং',
      phaseSubtitle_en: 'Building scheduled DAG pipelines and event streaming architecture for interview showcase.',
      phaseSubtitle_bn: 'এয়ারফ্লো দিয়ে স্বয়ংক্রিয় শিডিউলিং, কাফকা স্ট্রিমিং ও ডেটা ইঞ্জিনিয়ার ইন্টারভিউ প্রস্তুতি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-airflow-kafka-portfolio',
          title_en: 'Automated Airflow DAGs & Kafka Event Ingestion',
          title_bn: 'এয়ারফ্লো শিডিউলিং ও কাফকা ইভেন্ট স্ট্রিমিং',
          description_en: 'Writing Python DAG definitions, BashOperator, PythonOperator, Kafka Producer/Consumer messaging, and Docker Compose deployment.',
          description_bn: 'কোড লিখে স্বয়ংক্রিয় শিডিউলার বানানো, ব্যর্থ হলে ৩ বার রিট্রাই করার লজিক এবং ডকারে পুরো পাইপলাইন রান করা।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Airflow DAG parameters and crontab schedules', 'Kafka topic publishing and consumption', 'Docker Compose multi-service architecture'],
          practicalTask_en: 'Deploy a complete end-to-end data pipeline running inside Docker: Kafka streams mock events, Spark cleans the data, and Airflow orchestrates daily loads.',
          practicalTask_bn: 'ডকারে সম্পূর্ণ একটি ডেটা পাইপলাইন চালু করো যেখানে কাফকা থেকে ডেটা এসে স্পার্কে প্রসেস হয়ে এয়ারফ্লো দিয়ে শিডিউল হবে।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'data-q1',
      question_en: 'Why is columnar storage format like Apache Parquet preferred over row-based formats like CSV or JSON in analytical data engineering?',
      question_bn: 'অ্যানালিটিক্যাল ডেটা ইঞ্জিনিয়ারিংয়ে সিএসভি বা জেএসনের চেয়ে কলামনার ফরম্যাট যেমন অ্যাপাচি পারকুয়েট (Parquet) কেন শতগুণ বেশি কার্যকর?',
      category: 'Data Storage & Architecture',
      whyAsked_en: 'Core technical question asked by Big Data architects to evaluate storage economics and IOPS knowledge.',
      whyAsked_bn: 'বিগ ডেটা ও ক্লাউড ওয়্যারহাউস ইন্টারভিউয়ের মৌলিক প্রশ্ন যা প্রার্থীর ক্লাউড স্টোরেজ ও রিড পারফরম্যান্সের জ্ঞান পরীক্ষা করে।',
      howToAnswer_en: 'Columnar formats like Apache Parquet store data sequentially by column rather than by row. This provides three major architectural advantages for analytics: First, Column Pruning: When a query only needs 2 columns out of 50 (e.g. SELECT department, SUM(salary) FROM employees), the storage engine skips reading the remaining 48 columns from disk entirely, drastically reducing disk I/O and query time. Second, High Compression: Because data in a single column shares the same datatype, compression algorithms (like Snappy or Gzip) achieve massive 70-85% compression ratios compared to uncompressed CSV. Third, Embedded Statistics: Parquet files store min/max metadata per block, allowing the query engine to completely skip irrelevant chunks of data without scanning.',
      howToAnswer_bn: 'অ্যাপাচি পারকুয়েট (Parquet) হলো একটি কলাম-ভিত্তিক স্টোরেজ ফরম্যাট, যা ডেটাকে রো অনুযায়ী না রেখে কলাম অনুযায়ী পাশাপাশি সেভ করে। অ্যানালিটিক্সে এর ৩টি বিশাল সুবিধা: ১. কলাম প্রুনিং: ৫০টি কলামের কোনো টেবিলে যদি কুয়েরিতে মাত্র ২টি কলাম চাওয়া হয়, তবে পারকুয়েট বাকি ৪৮টি কলাম ডিস্ক থেকে রিডই করে না, ফলে ডিস্ক রিড ৯০% কমে যায়। ২. সর্বোচ্চ কম্প্রেশন: একই কলামের সব ডেটা এক জাতীয় হওয়ায় এটি সিএসভির চেয়ে ৭০ থেকে ৮৫ শতাংশ পর্যন্ত কম জায়গা নেয়। ৩. স্ট্যাটিস্টিক্যাল স্কিপিং: পারকুয়েটের ফাইলে আগে থেকেই প্রতিটি ব্লকের মিনিমাম ও ম্যাক্সিমাম মান লেখা থাকে, ফলে নির্দিষ্ট ডেটা খুঁজতে গিয়ে পুরো ফাইল স্ক্যান করার প্রয়োজন পড়ে না।',
      commonMistakes_en: 'Believing that Parquet is also optimal for single-record transactional updates like inserting a single user profile.',
      commonMistakes_bn: 'মনে করা যে সাধারণ ওয়েবসাইটে একটি একক রো আপডেট বা ইনসার্ট করার জন্যও পারকুয়েট ভালো (ট্রানজ্যাকশনে রো-বেসড ফরম্যাটই সেরা)।'
    },
    {
      id: 'data-q2',
      question_en: 'What is the Medallion Architecture (Bronze, Silver, Gold) in modern data lakehouses, and how does dbt transform data between layers?',
      question_bn: 'আধুনিক ডেটা লেকহাউসে মেডেলিয়ন আর্কিটেকচার (ব্রোঞ্জ, সিলভার, গোল্ড) কী এবং ডিবিটি (dbt) কীভাবে এই স্তরগুলোর মধ্যে রূপান্তর ঘটায়?',
      category: 'Lakehouse Architecture',
      whyAsked_en: 'Tests whether candidate understands modern data warehouse engineering and transform-load patterns.',
      whyAsked_bn: 'ক্লাউড ডেটা লেকহাউসে কাঁচা ডেটাকে ব্যবসায়িক অ্যানালিটিক্স স্তরে রূপান্তর করার আধুনিক কাঠামো বুঝতে।',
      howToAnswer_en: 'The Medallion Architecture organizes lakehouse data into three progressive quality layers: 1) Bronze Layer (Raw Ingestion): Appends uncleaned raw transactional data from Kafka, APIs, or databases in its native format with timestamps; 2) Silver Layer (Cleansed & Conformed): De-duplicates records, normalizes nulls, cleans schemas, and validates data types; 3) Gold Layer (Curated Business Aggregations): High-value business metrics, star schema dimension and fact tables optimized for Power BI, executive dashboards, and ML models. dbt (data build tool) is the transformation engine that allows engineers to write modular SQL SELECT statements that compile into automated DAGs with testing, documentation, and version control.',
      howToAnswer_bn: 'মেডেলিয়ন আর্কিটেকচার হলো ডেটাকে মান অনুযায়ী ৩টি স্তরে সাজানোর আধুনিক পদ্ধতি: ১) ব্রোঞ্জ লেয়ার: বিভিন্ন সোর্স থেকে আসা কাঁচা ডেটা কোনো পরিবর্তন ছাড়াই হুবহু সংরক্ষণ করা; ২) সিলভার লেয়ার: ডুপ্লিকেট বাদ দিয়ে ও ফরম্যাট ঠিক করে পরিষ্কার ডেটা রাখা; ৩) গোল্ড লেয়ার: কোম্পানির কর্মকর্তা বা এআই টিমের ব্যবহারের জন্য প্রস্তুত চূড়ান্ত অ্যানালিটিক্স ও সেলস সামারি। ডিবিটি (dbt) এই রূপান্তরগুলো কোডের মাধ্যমে টেস্ট করে স্বয়ংক্রিয়ভাবে পরিচালনা করতে সাহায্য করে।',
      commonMistakes_en: 'Allowing BI dashboards to query raw Bronze data directly, causing slow reports and dirty numbers.',
      commonMistakes_bn: 'ব্রোঞ্জ লেয়ারের কাঁচা ডেটার ওপর সরাসরি ড্যাশবোর্ড চালানো যা ভুল রিপোর্ট প্রদর্শন করে।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-databricks-spark-foundations',
      title_en: 'Databricks Academy: Apache Spark and Lakehouse Fundamentals',
      title_bn: 'অ্যাপাচি স্পার্ক ও লেকহাউস অফিশিয়াল ভেরিফায়েড ফ্রি সার্টিফিকেট',
      provider: 'Databricks Academy (Creators of Apache Spark)',
      url: 'https://www.databricks.com/learn/training/free-training',
      mobileAccessible: true,
      language: 'en',
      durationHours: 15,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official training from the original creators of Apache Spark on distributed big data engineering.',
      relevance_bn: 'অ্যাপাচি স্পার্কের মূল নির্মাতাদের অফিশিয়াল একাডেমি থেকে বিশ্বস্বীকৃত ফ্রি ট্রেনিং ও ব্যাজ।'
    }
  ]
};
