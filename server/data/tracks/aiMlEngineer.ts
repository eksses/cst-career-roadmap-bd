import type { CareerTrack } from '../../../shared/types.js';

export const aiMlEngineerTrack: Omit<CareerTrack, 'id'> = {
  slug: 'ai-ml-engineer',
  title_en: 'AI and Machine Learning Engineering (Deep Learning, PyTorch and LLMs)',
  title_bn: 'এআই ও মেশিন লার্নিং ইঞ্জিনিয়ারিং (ডিপ লার্নিং, পাইটর্চ ও এলএলএম)',
  summary_en: 'Engineering artificial intelligence systems using Python, PyTorch, Scikit-Learn, and Hugging Face. Covers neural networks, fine-tuning large language models, retrieval augmented generation (RAG), and vector database integration.',
  summary_bn: 'পাইথন, পাইটর্চ ও হাগিংফেস দিয়ে স্বয়ংক্রিয় এআই মডেল ও চ্যাটবট তৈরির উচ্চমানের ক্যারিয়ার ট্র্যাক। ডিপ লার্নিং, লার্জ ল্যাঙ্গুয়েজ মডেল (LLM), আরএজি (RAG) ও ভেক্টর ডেটাবেসের বাস্তব প্রস্তুতি।',
  pivotAdvice_en: 'Machine learning requires dedication to mathematics and Python coding. If you want to build intelligent agents, automated image classifiers, and specialized LLM applications, this track positions you at the absolute forefront of high-paying global engineering roles.',
  pivotAdvice_bn: 'মেশিন লার্নিংয়ের জন্য পাইথন কোডিং ও লজিক্যাল চিন্তাভাবনা প্রয়োজন। আধুনিক এআই অ্যাপ্লিকেশন, কম্পিউটার ভিশন ও কাস্টম এলএলএম চ্যাটবট বানানোর ইচ্ছা থাকলে এই ট্র্যাকটি দেশীয় সফটওয়্যার ফার্ম ও গ্লোবাল রিমোট চাকরির জন্য সেরা প্রস্তুতি।',
  minPcRequired: 'standard',
  dayToDay_en: [
    'Cleaning, normalizing, and tokenizing large text and image datasets using Python and Pandas.',
    'Designing neural network architectures, training loops, and loss functions in PyTorch.',
    'Fine-tuning pre-trained open-source LLMs (Llama, Mistral) on custom enterprise knowledge bases.',
    'Building Retrieval-Augmented Generation (RAG) pipelines using LangChain, LlamaIndex, and ChromaDB.',
    'Deploying low-latency AI inference endpoints using FastAPI, Docker, and GPU cloud servers.'
  ],
  dayToDay_bn: [
    'পাইথন ও প্যান্ডাস দিয়ে কাঁচা ডেটা প্রসেস করা ও মডেল ট্রেইনিংয়ের উপযোগী ফরম্যাটে রূপান্তর করা।',
    'পাইটর্চ (PyTorch) দিয়ে নিউরাল নেটওয়ার্ক তৈরি ও লস ফাংশন অপ্টিমাইজ করা।',
    'ওপেন সোর্স বড় ল্যাঙ্গুয়েজ মডেলকে কোম্পানির নিজস্ব ডেটার ওপর ফাইন-টিউন করা।',
    'ল্যাংচেন (LangChain) ও ভেক্টর ডেটাবেস দিয়ে নিখুঁত আরএজি (RAG) সার্চ ইঞ্জিন সিস্টেম বানানো।',
    'ফাস্টএপিআই (FastAPI) ও ডকার দিয়ে এআই মডেলকে ওয়েব সার্ভারে লাইভ এপিআই হিসেবে ডিপ্লয় করা।'
  ],
  mustHaveSkills: [
    {
      id: 'python-numpy-pytorch',
      name: 'Python for Deep Learning and PyTorch Tensors',
      category: 'Core AI Framework',
      importance: 'Essential',
      description_en: 'Multi-dimensional tensors, GPU cuda acceleration, autograd differentiation, and nn.Module models.',
      description_bn: 'পাইটর্চ টেনসর ক্যালকুলেশন, জিপিইউ অ্যাক্সিলারেশন ও স্বয়ংক্রিয় গ্রেডিয়েন্ট গণনা।'
    },
    {
      id: 'rag-vector-databases',
      name: 'RAG Pipelines and Vector Databases (Chroma / Pinecone)',
      category: 'GenAI & Search',
      importance: 'Essential',
      description_en: 'Text chunking, embedding generation (OpenAI, HuggingFace), vector cosine similarity, and context injection.',
      description_bn: 'ডকুমেন্ট এম্বেডিং তৈরি, ভেক্টর ডেটাবেসে ইনডেক্সিং এবং সঠিক তথ্য খুঁজে এনে এলএলএমকে সরবরাহ করা।'
    },
    {
      id: 'huggingface-transformers',
      name: 'Hugging Face Transformers and Model Fine-Tuning',
      category: 'NLP & LLMs',
      importance: 'Essential',
      description_en: 'Using pre-trained BERT, Whisper, and Llama weights, LoRA adapters, and tokenizers for specialized tasks.',
      description_bn: 'হাগিং ফেস লাইব্রেরি দিয়ে রেডিমেড ট্রান্সফরমার মডেল লোড করা ও কম খরচে লোরা (LoRA) ফাইন-টিউনিং।'
    },
    {
      id: 'fastapi-model-deployment',
      name: 'AI Model Deployment with FastAPI and Docker',
      category: 'MLOps',
      importance: 'Recommended',
      description_en: 'Packaging Python inference code into high-performance async REST endpoints containerized in Docker.',
      description_bn: 'ফাস্টএপিআই দিয়ে উচ্চগতির অ্যাসিনক্রোনাস সার্ভার তৈরি করে এআই প্রেডিকশন আউটপুট দেওয়া।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Gulshan, Banani, Kawran Bazar, Mirpur DOHS)',
      entrySalary: { min: 30000, max: 50000, currency: 'BDT', formatted: '30,000 - 50,000 BDT' },
      midSalary: { min: 75000, max: 140000, currency: 'BDT', formatted: '75,000 - 140,000 BDT' },
      seniorSalary: { min: 160000, max: 320000, currency: 'BDT', formatted: '160,000 - 320,000 BDT' },
      hiringSectors: [
        'AI Product Startups and Enterprise Solution Labs in Dhaka',
        'Large Tech Exporters (Brain Station 23 AI division, TigerIT, Kona Software)',
        'Telecom & FinTech Analytics Teams (bKash Fraud Detection, Grameenphone AI)'
      ],
      cvExpectations: [
        'GitHub repository with clear README documenting a working end-to-end RAG or computer vision app',
        'Understanding of model evaluation metrics (Precision, Recall, F1 score, BLEU/ROUGE)',
        'Experience working with Hugging Face models and API tokenization',
        'Practical knowledge of cost-effective inference and vector retrieval optimization'
      ],
      localDemandSummary_en: 'Bangladeshi software companies are investing heavily in enterprise AI features, automated support bots, and Bengali OCR/NLP tools. Candidates with practical model integration skills stand out instantly.',
      localDemandSummary_bn: 'বাংলাদেশের শীর্ষ কোম্পানিগুলো বর্তমানে চ্যাটবট, বাংলা ভয়েস-টু-টেক্সট ও স্মার্ট সার্চ সিস্টেম তৈরি করছে। হাতে-কলমে প্রজেক্ট বানানো জানা থাকলে ফ্রেশারদের জন্যও ভালো বেতনের দ্বার খুলে যায়।'
    },
    targetCountries: [
      {
        region: 'North America and Europe',
        countryName_en: 'United States, Germany, and Estonia',
        countryName_bn: 'যুক্তরাষ্ট্র, জার্মানি ও এস্তোনিয়া',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ',
        visaReality_en: 'AI/ML engineers have the highest global demand. Candidates with open-source contributions and production LLM experience qualify for fast-track visas.',
        visaReality_bn: 'বিশ্বজুড়ে এআই ইঞ্জিনিয়ারদের সর্বোচ্চ চাহিদা রয়েছে। পাইটর্চ ও এলএলএম ডিপ্লয়মেন্ট জানা থাকলে আন্তর্জাতিক ভিসা দ্রুত পাওয়া যায়।',
        averageSalaryUsdOrLocal: '$85,000 - $145,000 USD / year (approx 10,000,000 - 17,500,000 BDT)',
        requiredExperienceYears: '2+ years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি থেকে উচ্চ',
      monthlyRangeUsd: '$1,500 - $6,000 / month',
      competitionLevel: 'Global, won by demonstrating live deployed web applications with unique data integrations',
      competitionLevel_bn: 'লাইভ ডিপ্লয় করা কার্যকর এআই ওয়েব অ্যাপ ও ক্লিন কোডের মাধ্যমে দূরবর্তী কাজ মেলে',
      englishRequirement: 'Professional English to explain architectural tradeoffs and model hallucinations',
      englishRequirement_bn: 'ক্লায়েন্টদের কাছে এআই মডেলের সুবিধা ও সীমাবদ্ধতা স্পষ্টভাবে তুলে ধরার মতো ইংরেজি জানা প্রয়োজন',
      realities_en: [
        'Real-world AI engineering is 80% data cleaning and pipeline architecture, not just calling blackbox APIs',
        'Free Google Colab and Kaggle provide powerful free cloud GPUs for diploma students without high-spec home PCs'
      ],
      realities_bn: [
        'বাস্তব জীবনে এআই ইঞ্জিনিয়ারিংয়ের সিংহভাগ কাজ হলো নিখুঁত ডেটা প্রসেসিং ও আর্কিটেকচার তৈরি',
        'বাসায় দামি জিপিইউ কম্পিউটার না থাকলেও ফ্রি গুগল কোলাব (Google Colab) দিয়ে অনায়াসেই বড় মডেল প্র্যাকটিস করা যায়'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Python Data Foundations and Classical Machine Learning',
      phaseTitle_bn: 'প্রথম পর্ব: পাইথন ডেটা ফাউন্ডেশন ও ক্লাসিক্যাল মেশিন লার্নিং',
      phaseSubtitle_en: 'Day 1 to 25: NumPy arrays, Pandas feature engineering, and Scikit-Learn models.',
      phaseSubtitle_bn: '১ থেকে ২৫ দিন: নামপাই, প্যান্ডাস দিয়ে ডেটা প্রসেসিং ও সাইকিট-লার্ন মডেল তৈরি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-python-sklearn',
          title_en: 'Data Manipulation and Scikit-Learn Classifiers',
          title_bn: 'ডেটা প্রসেসিং ও ক্লাসিফিকেশন অ্যালগরিদম',
          description_en: 'Linear regression, decision trees, random forests, feature scaling, and train-test splits.',
          description_bn: 'ফিচার স্কেলিং, ডিসিশন ট্রি, র‍্যান্ডম ফরেস্ট এবং মডেলের সঠিকতা পরিমাপ।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['NumPy vector operations', 'Pandas DataFrame groupby/merge', 'Scikit-Learn accuracy metrics'],
          practicalTask_en: 'Build and evaluate a machine learning model predicting house prices or customer churn with 85%+ accuracy.',
          practicalTask_bn: 'সাইকিট-লার্ন দিয়ে গ্রাহকের সিদ্ধান্ত বা বাড়ি বিক্রির দাম নির্ভুলভাবে প্রেডিক্ট করার একটি মডেল তৈরি করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: Deep Learning and PyTorch Neural Networks',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: ডিপ লার্নিং ও পাইটর্চ নিউরাল নেটওয়ার্ক',
      phaseSubtitle_en: 'Day 26 to 50: Tensors, backpropagation, CNNs for computer vision, and training loops.',
      phaseSubtitle_bn: '২৬ থেকে ৫০ দিন: পাইটর্চ টেনসর, ব্যাকপ্রোপাগেশন ও ছবি চেনার সিএনএন (CNN) মডেল।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-pytorch-cnn',
          title_en: 'PyTorch Architecture and Computer Vision',
          title_bn: 'পাইটর্চ আর্কিটেকচার ও কম্পিউটার ভিশন',
          description_en: 'Building custom nn.Module classes, CrossEntropyLoss, Adam optimizer, DataLoader batches, and Transfer Learning.',
          description_bn: 'পাইটর্চে নিউরাল লেয়ার তৈরি, অ্যাডাম অপ্টিমাইজার এবং ট্রান্সফার লার্নিং দিয়ে ছবি চেনা।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['torch.nn.Module', 'Convolutional Neural Networks (CNN)', 'Transfer Learning with ResNet'],
          practicalTask_en: 'Train a PyTorch deep learning model on Google Colab that accurately classifies 5 types of Bangladeshi crop diseases from images.',
          practicalTask_bn: 'গুগল কোলাবে ফ্রি জিপিইউ ব্যবহার করে ফসলের রোগ চেনার একটি ডিপ লার্নিং মডেল ট্রেইন করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: Large Language Models, Hugging Face and RAG Systems',
      phaseTitle_bn: 'তৃতীয় পর্ব: লার্জ ল্যাঙ্গুয়েজ মডেল, হাগিংফেস ও আরএজি সিস্টেম',
      phaseSubtitle_en: 'Day 51 to 75: Vector embeddings, semantic search, LangChain, and private document Q&A.',
      phaseSubtitle_bn: '৫১ থেকে ৭৫ দিন: ভেক্টর এম্বেডিং, ল্যাংচেন ও নিজস্ব পিডিএফ নথিপত্র পড়ার স্মার্ট চ্যাটবট।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-rag-langchain',
          title_en: 'Retrieval-Augmented Generation (RAG) and Embeddings',
          title_bn: 'আরএজি (RAG) পাইপলাইন ও ভেক্টর সার্চ',
          description_en: 'Text chunking strategies, embedding vectors, ChromaDB semantic storage, and contextual prompt injection.',
          description_bn: 'পিডিএফ থেকে টেক্সট কেটে ভেক্টরে রূপান্তর করা এবং সঠিক তথ্য খুঁজে এআই উত্তর তৈরি করা।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['RecursiveCharacterTextSplitter', 'ChromaDB vector store', 'LangChain RetrievalQA chain'],
          practicalTask_en: 'Build a full RAG app where users can upload any textbook PDF and ask natural questions in English or Bengali.',
          practicalTask_bn: 'একটি আরএজি অ্যাপ্লিকেশন বানাও যেখানে যেকোনো পিডিএফ আপলোড করে বাংলা বা ইংরেজিতে প্রশ্ন করলে সঠিক উত্তর পাওয়া যায়।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: FastAPI Deployment, Docker and Portfolio Showcase',
      phaseTitle_bn: 'চতুর্থ পর্ব: ফাস্টএপিআই ডিপ্লয়মেন্ট, ডকার ও পোর্টফোলিও শোকেস',
      phaseSubtitle_en: 'Day 76 to 90: Containerizing AI inference with Docker, deploying to Render or Hugging Face Spaces.',
      phaseSubtitle_bn: '৭৬ থেকে ৯০ দিন: ডকার দিয়ে এআই সার্ভার তৈরি ও ক্লাউডে সবার ব্যবহারের জন্য ফ্রি হোস্ট করা।',
      durationWeeks: 2,
      modules: [
        {
          id: 'mod-ai-fastapi-deploy',
          title_en: 'FastAPI Microservice and Hugging Face Spaces Deployment',
          title_bn: 'ফাস্টএপিআই মাইক্রোসার্ভিস ও ক্লাউড ডিপ্লয়মেন্ট',
          description_en: 'Writing high-throughput async endpoints, input validation with Pydantic, and deploying to Hugging Face Spaces.',
          description_bn: 'ফাস্টএপিআই দিয়ে এআই মডেলকে এপিআইতে রূপান্তর ও হাগিংফেস স্পেসে লাইভ শেয়ার করা।',
          estimatedDays: 10,
          mobileAccessible: false,
          keyTopics: ['FastAPI async routes', 'Pydantic BaseModel schema', 'Hugging Face Spaces Streamlit/Gradio UI'],
          practicalTask_en: 'Deploy your RAG AI application with an interactive Gradio web UI publicly accessible on Hugging Face Spaces.',
          practicalTask_bn: 'তোমার তৈরি করা এআই চ্যাটবট হাগিংফেস স্পেসে লাইভ হোস্ট করো যাতে সবাই লিংক ভিজিট করে ব্যবহার করতে পারে।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'ai-q1',
      question_en: 'What is Retrieval-Augmented Generation (RAG) and why is it preferred over fine-tuning for enterprise question-answering?',
      question_bn: 'রিট্রিভাল-অগমেন্টেড জেনারেশন (RAG) কী এবং কোম্পানিগুলোর নিজস্ব প্রশ্নোত্তর সিস্টেমের জন্য ফাইন-টিউনিংয়ের চেয়ে আরএজি কেন বেশি কার্যকর?',
      category: 'Generative AI & LLMs',
      whyAsked_en: 'The number one modern AI technical question asked across all tech firms in 2025 and 2026.',
      whyAsked_bn: 'আধুনিক এআই ইন্টারভিউয়ের সবচেয়ে গুরুত্বপূর্ণ প্রশ্ন যা প্রার্থীর জেনারেটিভ এআই সিস্টেম আর্কিটেকচারের দক্ষতা প্রমাণ করে।',
      howToAnswer_en: 'RAG is an architecture where an external vector database retrieves factual, relevant text chunks based on semantic similarity to the user question, and injects them directly into the LLM context prompt before generation. It is preferred over fine-tuning for three reasons: First, real-time updates: when documents change, you simply update the vector database without costly re-training. Second, zero hallucinations on facts: the model cites exact text sources. Third, strict access control: different users can be granted search permissions to specific documents only.',
      howToAnswer_bn: 'আরএজি (RAG) হলো এমন একটি আধুনিক প্রযুক্তি যেখানে ব্যবহারকারীর প্রশ্নের উত্তরের জন্য সরাসরি মডেলের মুখস্থ বিদ্যার ওপর নির্ভর না করে প্রথমে ভেক্টর ডেটাবেস থেকে প্রাসঙ্গিক প্যারাগ্রাফ খুঁজে এনে মডেলের প্রম্পটে জুড়ে দেওয়া হয়। ফাইন-টিউনিংয়ের চেয়ে এটি ৩টি কারণে সেরা: ১. রিয়েল-টাইম তথ্য আপডেট: নতুন কোনো নিয়ম বা ফাইল যুক্ত হলে পুনরায় মডেল ট্রেইন করার হাজার ডলার খরচ লাগে না, শুধু ডেটাবেসে ফাইল যোগ করলেই হয়। ২. ভুল তথ্য (Hallucination) দূর হয়: মডেল সরাসরি মূল বই বা ডকুমেন্ট উদ্ধৃত করে নির্ভুল তথ্য দেয়। ৩. প্রাইভেসি ও অ্যাক্সেস কন্ট্রোল বজায় রাখা যায়।',
      commonMistakes_en: 'Claiming that fine-tuning is required whenever a company wants an LLM to answer questions about its internal documents.',
      commonMistakes_bn: 'মনে করা যে অভ্যন্তরীণ নথিপত্র পড়ানোর জন্য সবসময় মডেল রি-ট্রেইন বা ফাইন-টিউন করতে হয়।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-deeplearning-ai-rag',
      title_en: 'DeepLearning.AI LangChain and RAG Foundations',
      title_bn: 'ডিপলার্নিং.এআই ও ল্যাংচেন ভেরিফায়েড ফ্রি কোর্স',
      provider: 'DeepLearning.AI (Andrew Ng)',
      url: 'https://www.deeplearning.ai/short-courses/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 12,
      cost: '100% Free',
      relevance_en: 'World-renowned AI course by Professor Andrew Ng covering modern LLM agent architectures.',
      relevance_bn: 'বিশ্বখ্যাত প্রফেসর অ্যান্ড্রু এনজি-র প্ল্যাটফর্ম থেকে আধুনিক এআই ও লার্জ ল্যাঙ্গুয়েজ মডেল তৈরির ফ্রি কোর্স।'
    }
  ]
};
