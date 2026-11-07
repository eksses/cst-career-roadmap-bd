import type { CareerTrack } from '../../../shared/types.js';

export const aiMlEngineerTrack: Omit<CareerTrack, 'id'> = {
  slug: 'ai-ml-engineer',
  title_en: 'AI & Machine Learning Engineering: PyTorch 2.5+, vLLM, LangGraph & Fine-Tuning (2026 Edition)',
  title_bn: 'এআই ও মেশিন লার্নিং ইঞ্জিনিয়ারিং: পাইটর্চ ২.৫, vLLM, ল্যাংগ্রাফ ও ফাইন-টিউনিং (২০২৬ এডিশন)',
  summary_en: 'Calibrated for late 2026. Architect generative AI systems, autonomous agent workflows with LangGraph, fine-tune open-weights models (Llama 3.3, Mistral, DeepSeek) with LoRA/Unsloth, and serve high-throughput inference using vLLM and pgvector.',
  summary_bn: '২০২৬ সালের আধুনিক এআই ইঞ্জিনিয়ারিং। পাইটর্চ ২.৫, ল্যাংগ্রাফ দিয়ে অটোনোমাস এজেন্ট, লোরার (LoRA) সাহায্যে ওপেন সোর্স মডেল ফাইন-টিউনিং এবং vLLM ও ভেক্টর ডেটাবেস দিয়ে উচ্চগতির এআই সার্ভিসিং।',
  pivotAdvice_en: 'Post-AI revolution in late 2026, simply calling external closed APIs is not enough. High-paying enterprise teams in Dhaka, Singapore, and Silicon Valley hire engineers who know how to fine-tune open-weights models privately, cut inference costs with vLLM PagedAttention, build self-correcting agent loops with LangGraph, and deploy secure on-premise RAG architectures.',
  pivotAdvice_bn: '২০২৬ সালের পোস্ট-এআই যুগে কেবল সাধারণ এপিআই কল করার কাজ দিয়ে ভালো ক্যারিয়ার গড়া যায় না। দেশীয় ও আন্তর্জাতিক বড় প্রযুক্তি প্রতিষ্ঠানগুলো এমন প্রকৌশলীদের সর্বোচ্চ মূল্যায়ন করে যারা নিজস্ব ওপেন সোর্স মডেল ফাইন-টিউন করতে পারে, vLLM দিয়ে সার্ভার খরচ বাঁচাতে পারে এবং ল্যাংগ্রাফ দিয়ে স্বয়ংক্রিয় এজেন্ট বানাতে পারে।',
  minPcRequired: 'high',
  dayToDay_en: [
    'Fine-tuning open-weights models (Llama 3.3, Mistral, DeepSeek) using Unsloth, LoRA adapters, and custom domain datasets.',
    'Designing autonomous multi-agent state machines with LangGraph, tools, human-in-the-loop checkpoints, and MCP servers.',
    'Optimizing production LLM inference latency using vLLM, PagedAttention, continuous batching, and tensor parallelism.',
    'Building enterprise hybrid search pipelines combining BM25 keyword matching and dense vector embeddings in pgvector.',
    'Evaluating LLM output reliability, guardrails, and safety using RAGAS and automated LLM-as-a-judge metrics.'
  ],
  dayToDay_bn: [
    'আনস্লথ (Unsloth) ও লোরা (LoRA) দিয়ে ওপেন সোর্স লার্জ ল্যাঙ্গুয়েজ মডেলকে নিজস্ব ডেটার ওপর ফাইন-টিউন করা।',
    'ল্যাংগ্রাফ (LangGraph) ও টুলস দিয়ে মাল্টি-এজেন্ট স্বয়ংক্রিয় ওয়ার্কফ্লো এবং হিউম্যান-ইন-দ্য-লুপ সিস্টেম বানানো।',
    'ভি-এলএলএম (vLLM) ও পেজড-অ্যাটেনশন দিয়ে সার্ভারে এআই মডেলের রেসপন্স গতি ও কনকারেন্সি বৃদ্ধি করা।',
    'পোস্টগ্রেসকিউএল ও pgvector দিয়ে হাইব্রিড সার্চ ইঞ্জিন তৈরি করা যা সাধারণ কিওয়ার্ড ও এআই ভাবার্থ দুটোই বোঝে।',
    'এআই মডেলের নির্ভুলতা যাচাইয়ের জন্য স্বয়ংক্রিয় ইভ্যালুয়েশন মেট্রিক্স ও গার্ডরেইল বসানো।'
  ],
  mustHaveSkills: [
    {
      id: 'pytorch-core-tensors',
      name: 'PyTorch 2.5+ Deep Learning Foundations',
      category: 'Core AI Framework',
      importance: 'Essential',
      description_en: 'Tensors, autograd automatic differentiation, torch.compile, custom layers, and GPU CUDA memory profiling.',
      description_bn: 'পাইটর্চ টেনসর ক্যালকুলেশন, অটোগ্র্যাড, কাস্টম নিউরাল নেটওয়ার্ক লেয়ার ও জিপিইউ মেমরি অপ্টিমাইজেশন।'
    },
    {
      id: 'lora-peft-finetuning',
      name: 'LoRA / PEFT Open-Weights Fine-Tuning (Unsloth)',
      category: 'Generative AI',
      importance: 'Essential',
      description_en: 'Parameter-Efficient Fine-Tuning (PEFT), QLoRA 4-bit quantization, instruction datasets, and tokenization.',
      description_bn: 'প্যারামিটার-এফিশিয়েন্ট ফাইন-টিউনিং, লোরা অ্যাডাপ্টার ও কম জিপিইউ মেমরিতে মডেল ট্রেইনিং।'
    },
    {
      id: 'vllm-high-throughput-inference',
      name: 'vLLM Inference Serving & PagedAttention',
      category: 'MLOps & Inference',
      importance: 'Essential',
      description_en: 'PagedAttention memory management, continuous batching, streaming token APIs, and low-latency serving.',
      description_bn: 'ভি-এলএলএম দিয়ে মেমরি অপ্টিমাইজেশন এবং দ্রুততম স্পিডে একসাথে শত শত ব্যবহারকারীকে সার্ভিস প্রদান।'
    },
    {
      id: 'langgraph-multi-agent-systems',
      name: 'LangGraph Multi-Agent Workflows & MCP Tools',
      category: 'Agentic Architectures',
      importance: 'Essential',
      description_en: 'Stateful graph cycles, conditional routing, Model Context Protocol (MCP), and tool execution guardrails.',
      description_bn: 'ল্যাংগ্রাফ দিয়ে চক্রাকার এজেন্ট লুপ, শর্তসাপেক্ষ সিদ্ধান্ত গ্রহণ এবং স্বয়ংক্রিয় টুল কলিং।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Gulshan, Banani, Kawran Bazar, Mirpur DOHS) & Hybrid BD',
      entrySalary: { min: 35000, max: 65000, currency: 'BDT', formatted: '35,000 - 65,000 BDT' },
      midSalary: { min: 85000, max: 175000, currency: 'BDT', formatted: '85,000 - 175,000 BDT' },
      seniorSalary: { min: 190000, max: 400000, currency: 'BDT', formatted: '190,000 - 400,000 BDT' },
      hiringSectors: [
        'Enterprise AI Innovation Labs & Fintech Teams (bKash Fraud Intelligence, Grameenphone AI)',
        'Offshore Software Exporters building GenAI tools (Brain Station 23, TigerIT, Kona Software)',
        'Domain AI Startups (Bengali Speech/OCR, Medical Diagnostic AI, Legal Tech)'
      ],
      cvExpectations: [
        'Public GitHub repo with end-to-end deployed AI model demo and verified inference benchmark stats',
        'Demonstrated understanding of LoRA fine-tuning hyperparameters and VRAM constraints',
        'Experience building robust multi-agent systems in LangGraph with unit tests and evaluations',
        'Strong grasp of transformer architecture internals (Attention, KV cache, Quantization)'
      ],
      localDemandSummary_en: 'Bangladeshi software enterprises are building custom Bengali NLP models, enterprise support bots, and fraud detection engines. Diploma graduates with real PyTorch and fine-tuning projects face almost zero competition because most applicants only know basic prompt scripting.',
      localDemandSummary_bn: 'বাংলাদেশের শীর্ষ কোম্পানিগুলো বর্তমানে নিজস্ব বাংলা চ্যাটবট, ফ্রড ডিটেকশন ও অটোমেশন সিস্টেম তৈরি করছে। সাধারণ প্রম্পট ব্যবহারকারীদের ভিড়ে যারা বাস্তবে মডেল ফাইন-টিউন ও পাইটর্চ জানে, তারা ফ্রেশার হিসেবেও অত্যন্ত আকর্ষণীয় বেতন পায়।'
    },
    targetCountries: [
      {
        region: 'North America & Europe',
        countryName_en: 'United States, Germany & Estonia',
        countryName_bn: 'যুক্তরাষ্ট্র, জার্মানি ও এস্তোনিয়া',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'AI engineers with demonstrable open-source contributions and production LLM serving experience qualify for expedited O-1 / H1-B and EU Blue Card visas.',
        visaReality_bn: 'গিটহাবে কার্যকর এআই প্রজেক্ট থাকলে আন্তর্জাতিক টেক ভিসা ও রিলোকেশন অত্যন্ত দ্রুত সম্পন্ন হয়।',
        averageSalaryUsdOrLocal: '$90,000 - $160,000 USD / year (approx 10,800,000 - 19,200,000 BDT)',
        requiredExperienceYears: '2+ years'
      },
      {
        region: 'East Asia',
        countryName_en: 'Japan & South Korea',
        countryName_bn: 'জাপান ও দক্ষিণ কোরিয়া',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Specialized tech visas actively targeting AI researchers and applied machine learning developers with English proficiency.',
        visaReality_bn: 'জাপান ও দক্ষিণ কোরিয়ার বৃহৎ প্রযুক্তি প্রতিষ্ঠানগুলোতে এআই ও রোবটিক্স ইঞ্জিনিয়ারদের বিশেষ ভিসা সুবিধা রয়েছে।',
        averageSalaryUsdOrLocal: '¥6,500,000 - ¥11,000,000 JPY / year',
        requiredExperienceYears: '2 to 4 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি থেকে উচ্চ',
      monthlyRangeUsd: '$1,800 - $6,500 USD',
      competitionLevel: 'Global, won by presenting live deployed open-weights models and verifiable benchmark scores',
      competitionLevel_bn: 'লাইভ ডিপ্লয় করা কার্যকর ওপেন সোর্স মডেল ও স্বচ্ছ বেঞ্চমার্কের মাধ্যমে দূরবর্তী চাকরি নিশ্চিত হয়',
      englishRequirement: 'Professional technical English to explain model evaluation metrics, token latency, and hallucination guardrails',
      englishRequirement_bn: 'ক্লায়েন্ট ও আন্তর্জাতিক টিমের সাথে মডেলের কার্যকারিতা ও সীমাবদ্ধতা ব্যাখ্যা করার উপযোগী ইংরেজি',
      realities_en: [
        'Global startups hire remote AI engineers to build bespoke fine-tuned models that run cheaply on their private cloud instances.',
        'A public Hugging Face model adapter link or interactive demo gives candidates overwhelming hiring advantage.'
      ],
      realities_bn: [
        'আন্তর্জাতিক কোম্পানিগুলো তাদের নিজস্ব ক্লাউড সার্ভারে সাশ্রয়ী মূল্যে এআই চালানোর জন্য রিমোট ইঞ্জিনিয়ার হায়ার করে।',
        'হাগিং ফেস (Hugging Face) প্রোফাইলে আপলোড করা মডেল ও লাইভ ডেমো ইন্টারভিউতে বিশাল সুবিধা তৈরি করে।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'PyTorch 2.5+ Deep Learning Foundations & Tensor Math',
      phaseTitle_bn: 'পাইটর্চ ২.৫ ডিপ লার্নিং ভিত্তি ও টেনসর ক্যালকুলেশন',
      phaseSubtitle_en: 'Build neural networks from scratch, training loops, and loss optimization.',
      phaseSubtitle_bn: 'নিউরাল নেটওয়ার্ক, ব্যাকপ্রোপাগেশন ও জিপিইউ এক্সিলারেশনের ভিত্তি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'ai-p1-m1',
          title_en: 'Tensors, Automatic Differentiation (Autograd) & CUDA Acceleration',
          title_bn: 'টেনসর গণিত, অটোগ্র্যাড ও কুডা (CUDA) জিপিইউ এক্সিলারেশন',
          description_en: 'Understand multi-dimensional tensor manipulation, memory layout, gradient calculation with autograd, and moving tensors between CPU and NVIDIA CUDA GPUs.',
          description_bn: 'মাল্টি-ডাইমেনশনাল টেনসর, মেমরি স্ট্রাকচার, স্বয়ংক্রিয় গ্রেডিয়েন্ট এবং জিপিইউ মেমরির সঠিক ব্যবহার।',
          estimatedDays: 10,
          mobileAccessible: false,
          keyTopics: ['torch.Tensor operations', 'autograd.backward()', 'torch.cuda.is_available()', 'Memory pinned tensors'],
          practicalTask_en: 'Implement linear regression and multi-layer perceptron strictly using raw PyTorch tensors and manual gradient descent without high-level wrappers.',
          practicalTask_bn: 'কোনো রেডিমেড লাইব্রেরি ছাড়া খাঁটি পাইটর্চ টেনসর দিয়ে একটি মাল্টি-লেয়ার পারসেপট্রন তৈরি করো।'
        },
        {
          id: 'ai-p1-m2',
          title_en: 'Neural Network Modules (nn.Module), Loss Functions & Optimizers',
          title_bn: 'মডিউলার নিউরাল নেটওয়ার্ক (nn.Module), লস ফাংশন ও অপ্টিমাইজার',
          description_en: 'Construct clean network architectures using torch.nn, implement training and validation loops, batching with DataLoader, and AdamW optimization.',
          description_bn: 'পাইটর্চ মডিউল দিয়ে ক্লাসিফিকেশন মডেল তৈরি, ডেটালোডার দিয়ে ব্যাচিং এবং অ্যাডাম-ডব্লিউ দিয়ে ট্রেনিং।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['nn.Module inheritance', 'CrossEntropyLoss & MSE', 'AdamW & Learning Rate Schedulers', 'torch.compile in PyTorch 2'],
          practicalTask_en: 'Build a digit and text sentiment classifier in PyTorch, achieve 95%+ accuracy, and log training loss curves to Weights & Biases or TensorBoard.',
          practicalTask_bn: 'পাইটর্চ দিয়ে একটি টেক্সট সেন্টিমেন্ট ক্লাসিফায়ার বানিয়ে ৯৫%+ অ্যাকুরেসি অর্জন করো এবং লস গ্রাফ প্লট করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Open-Weights LLMs, Fine-Tuning with LoRA & Unsloth',
      phaseTitle_bn: 'ওপেন-ওয়েটস এলএলএম, লোরা (LoRA) ও আনস্লথ দিয়ে ফাইন-টিউনিং',
      phaseSubtitle_en: 'Master transformer architectures, tokenization, and parameter-efficient tuning.',
      phaseSubtitle_bn: 'ট্রান্সফরমার আর্কিটেকচার, টোকেনাইজার এবং কম খরচে নিজস্ব এআই মডেল ট্রেনিং।',
      durationWeeks: 5,
      modules: [
        {
          id: 'ai-p2-m1',
          title_en: 'The Transformer Architecture: Attention, KV Cache & Quantization',
          title_bn: 'ট্রান্সফরমার আর্কিটেকচার: সেলফ-অ্যাটেনশন, কেভি ক্যাশ ও কোয়ান্টাইজেশন',
          description_en: 'Understand multi-head attention, rotary positional embeddings (RoPE), KV cache memory consumption, and 4-bit / 8-bit quantization (bitsandbytes / GGUF).',
          description_bn: 'সেলফ-অ্যাটেনশন মেকানিজম, কেভি ক্যাশের মেমরি হিসাব এবং কম র‍্যামে বড় মডেল চালানোর কোয়ান্টাইজেশন পদ্ধতি।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Scaled Dot-Product Attention', 'KV Cache in Generation', 'AWQ & GGUF Quantization', 'Hugging Face Transformers'],
          practicalTask_en: 'Calculate the theoretical KV cache VRAM requirement for a 7B parameter model at 8k context length, and verify with actual memory profile.',
          practicalTask_bn: 'একটি ৭ বিলিয়ন মডেলের ৮ হাজার কনটেক্সট লেন্থে কতটা জিপিইউ মেমরি লাগবে তা হিসাব করো ও প্র্যাকটিক্যাল টেস্ট করো।'
        },
        {
          id: 'ai-p2-m2',
          title_en: 'LoRA & QLoRA Instruction Fine-Tuning with Unsloth',
          title_bn: 'আনস্লথ ও কিউ-লোরা (QLoRA) দিয়ে কাস্টম ডেটায় ফাইন-টিউনিং',
          description_en: 'Format instruction datasets (Alpaca / ShareGPT format), fine-tune Llama 3.3 or Mistral on a single GPU using low-rank adapter matrices (LoRA), and export merged GGUF weights.',
          description_bn: 'ইনস্ট্রাকশন ডেটাসেট তৈরি করে সাধারণ একটি জিপিইউতেই এলএলএম ফাইন-টিউন করার আধুনিকতম কৌশল।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['LoRA rank (r) & alpha', 'Unsloth 5x speedup', 'Training Loss Convergence', 'Exporting GGUF for Ollama'],
          practicalTask_en: 'Fine-tune an open-source 3B/7B model on a specialized Bengali or CST curriculum dataset using Unsloth and publish the LoRA adapter on Hugging Face.',
          practicalTask_bn: 'আনস্লথ দিয়ে সিএসটি বিষয়ের ওপর একটি ওপেন সোর্স মডেল ফাইন-টিউন করে হাগিংফেসে আপলোড করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Advanced RAG, Hybrid Search & LangGraph Multi-Agent Workflows',
      phaseTitle_bn: 'অ্যাডভান্সড আরএজি, হাইব্রিড সার্চ ও ল্যাংগ্রাফ মাল্টি-এজেন্ট সিস্টেম',
      phaseSubtitle_en: 'Build self-correcting agents, tool routing, and hybrid retrieval.',
      phaseSubtitle_bn: 'স্বয়ংক্রিয় সিদ্ধান্ত গ্রহণকারী এআই এজেন্ট ও হাইব্রিড সার্চ ইঞ্জিন তৈরি।',
      durationWeeks: 5,
      modules: [
        {
          id: 'ai-p3-m1',
          title_en: 'Hybrid Retrieval: Dense Embeddings + BM25 in PostgreSQL pgvector',
          title_bn: 'হাইব্রিড রিট্রিভাল: ডেন্স এম্বেডিং ও বিএম২৫ (BM25) কিওয়ার্ড সার্চ',
          description_en: 'Combine semantic vector search with keyword matching (Reciprocal Rank Fusion) in PostgreSQL 17 to avoid missing exact product codes or serial numbers.',
          description_bn: 'পোস্টগ্রেসের ভেতর অর্থবোধক এআই সার্চের সাথে হুবহু কোড খোঁজার বিএম২৫ সার্চ একত্রিত করে নিখুঁত ফলাফল পাওয়া।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Reciprocal Rank Fusion (RRF)', 'pgvector HNSW Indexing', 'Chunking Strategies', 'Cross-Encoder Re-Ranking'],
          practicalTask_en: 'Build a production hybrid search pipeline that indexes technical manuals and reranks results using a lightweight cross-encoder model.',
          practicalTask_bn: 'একটি হাইব্রিড সার্চ সিস্টেম বানাও যা টেকনিক্যাল কোড ও সাধারণ ইংরেজি উভয় ধরনের প্রশ্নে সঠিক নথি খুঁজে আনে।'
        },
        {
          id: 'ai-p3-m2',
          title_en: 'Autonomous Multi-Agent Systems with LangGraph & MCP Tools',
          title_bn: 'ল্যাংগ্রাফ দিয়ে মাল্টি-এজেন্ট সিস্টেম ও মডেল কনটেক্সট প্রোটোকল',
          description_en: 'Build stateful cyclic graphs with supervisor and worker agents, integrate Model Context Protocol (MCP) tool servers, and implement human approval checkpoints.',
          description_bn: 'ল্যাংগ্রাফ দিয়ে একাধিক এআই এজেন্টের দল তৈরি করা যারা একে অপরের ভুল সংশোধন করে জটিল কাজ সম্পন্ন করে।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['StateGraph & Nodes', 'Conditional Edges', 'Model Context Protocol (MCP)', 'Human-in-the-Loop Checkpoints'],
          practicalTask_en: 'Build a multi-agent coding system where Agent 1 writes code, Agent 2 runs unit tests, and Agent 3 fixes bugs until tests pass cleanly.',
          practicalTask_bn: 'এমন একটি ৩-এজেন্ট সিস্টেম বানাও যেখানে প্রথম এজেন্ট কোড লেখে, দ্বিতীয়জন টেস্ট চালায় এবং তৃতীয়জন সব ভুল ঠিক করে।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Production Inference with vLLM, Docker, Evaluation & Viva',
      phaseTitle_bn: 'ভি-এলএলএম দিয়ে প্রোডাকশন সার্ভিং, ডকার, ইভ্যালুয়েশন ও ভাইভা প্রস্তুতি',
      phaseSubtitle_en: 'Deploy high-throughput inference endpoints with automated evaluation.',
      phaseSubtitle_bn: 'উচ্চগতির এপিআই সার্ভিং, ডকারাইজেশন ও টেকনিক্যাল চাকরি ভাইভা প্রস্তুতি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'ai-p4-m1',
          title_en: 'High-Throughput LLM Serving with vLLM & PagedAttention',
          title_bn: 'ভি-এলএলএম ও পেজড-অ্যাটেনশন দিয়ে দ্রুততম সার্ভিং',
          description_en: 'Deploy open-weights models with vLLM OpenAI-compatible server. Master PagedAttention KV cache sharing, continuous batching, and tensor parallelism.',
          description_bn: 'ভি-এলএলএম দিয়ে ওপেন-এআই ফরম্যাটের উচ্চগতির সার্ভার চালু করা এবং একসাথে শত শত রিকোয়েস্ট হ্যান্ডেল করা।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['vLLM Architecture', 'PagedAttention Internals', 'Continuous Batching', 'OpenAI Compatible API Endpoints'],
          practicalTask_en: 'Deploy a fine-tuned model on a cloud GPU instance with vLLM and benchmark token latency under 50 simultaneous concurrent users.',
          practicalTask_bn: 'ক্লাউড জিপিইউতে ভি-এলএলএম দিয়ে মডেল রান করে একসাথে ৫০ জন ইউজারের লোড টেস্ট সম্পন্ন করো।'
        },
        {
          id: 'ai-p4-m2',
          title_en: 'Model Evaluation with RAGAS, Dockerization & Engineering Viva',
          title_bn: 'রাগাস (RAGAS) দিয়ে মডেল ইভ্যালুয়েশন, ডকার ও টেকনিক্যাল ভাইভা',
          description_en: 'Measure Faithfulness, Answer Relevancy, and Context Precision using RAGAS. Containerize inference servers in Docker and practice senior technical interview scenarios.',
          description_bn: 'মডেলের নির্ভুলতা বৈজ্ঞানিকভাবে পরিমাপ করা, ডকার কনটেইনার তৈরি এবং সিনিয়র এআই ইঞ্জিনিয়ার ভাইভায় সফলতার কৌশল।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['RAGAS Metrics', 'Docker for GPU (nvidia-container-toolkit)', 'Technical System Design Viva', 'CV Highlights'],
          practicalTask_en: 'Publish an end-to-end GitHub repository featuring your fine-tuned model, LangGraph agent, vLLM deployment instructions, and evaluation report.',
          practicalTask_bn: 'তোমার এআই প্রজেক্টের সম্পূর্ণ কোড, ইভ্যালুয়েশন রিপোর্ট ও লাইভ ডেমো লিংক গিটহাবে পাবলিশ করে সিভিতে যুক্ত করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'ai-q1',
      question_en: 'How does LoRA (Low-Rank Adaptation) reduce the memory footprint during LLM fine-tuning from 80GB to under 16GB?',
      question_bn: 'লোরা (LoRA) কীভাবে বড় মডেল ফাইন-টিউনিংয়ের জিপিইউ মেমরি ৮০ জিবি থেকে ১৬ জিবির নিচে নামিয়ে আনে?',
      category: 'Model Fine-Tuning',
      whyAsked_en: 'Fundamental architectural question testing whether the candidate understands parameter-efficient adaptation versus full fine-tuning.',
      whyAsked_bn: 'প্রার্থী কম খরচে বাস্তবসম্মত উপায়ে এআই মডেল ট্রেইন করার গণিত ও পদ্ধতি সত্যিই বোঝে কি না তা যাচাই করতে।',
      howToAnswer_en: 'In full fine-tuning, every single parameter weight matrix W (d x k) is updated, requiring storage of optimizer states (Adam requires 8 bytes per parameter), gradients (4 bytes), and activations for tens of billions of weights, easily requiring 80GB+ VRAM. LoRA keeps the pre-trained weights W0 frozen. It decomposes the weight update delta W into two low-rank matrices A (d x r) and B (r x k), where rank r is very small (e.g. 8 or 16). Since r is tiny, the number of trainable parameters is reduced by over 99%, slashing optimizer memory and gradient storage. In forward pass, output is W0*x + (B*A)*x * (alpha/r). Combined with 4-bit base model quantization (QLoRA), a 7B model can be fine-tuned on a single consumer GPU with 12GB to 16GB VRAM.',
      howToAnswer_bn: 'ফুল ফাইন-টিউনিংয়ে প্রতিটি প্যারামিটারের গ্রেডিয়েন্ট ও অ্যাডাম অপ্টিমাইজার স্টেট সংরক্ষণ করতে হয়, যার জন্য বিশাল সার্ভার জিপিইউ লাগে। লোরা মেইন মডেলের ওজন বা প্যারামিটারকে পুরোপুরি ফ্রিজ (অপরিবর্তিত) রাখে। এর পরিবর্তে এটি দুটি অতি ক্ষুদ্র লো-র‍্যাংক ম্যাট্রিক্স (A ও B) যুক্ত করে যার র‍্যাংক মাত্র ৮ বা ১৬ রাখা হয়। ফলে ট্রেইনেবল প্যারামিটারের সংখ্যা ৯৯% কমে যায় এবং মেমরি খরচ ৮০ জিবি থেকে নেমে ১২-১৬ জিবিতে চলে আসে, যা সাধারণ কম্পিউটারের জিপিইউতেই চালানো সম্ভব।',
      commonMistakes_en: 'Saying LoRA compresses the whole model weights permanently rather than training separate low-rank adapter matrices.',
      commonMistakes_bn: 'মনে করা যে লোরা মডেলের সব প্যারামিটার সরাসরি ট্রেইন করে।'
    },
    {
      id: 'ai-q2',
      question_en: 'What is PagedAttention in vLLM, and why does it drastically outperform naive Hugging Face Transformers for concurrent serving throughput?',
      question_bn: 'ভি-এলএলএম-এ পেজড-অ্যাটেনশন (PagedAttention) কী এবং একাধিক ব্যবহারকারীকে সেবা দেওয়ার ক্ষেত্রে এটি কেন রেডিমেড ট্রান্সফরমারের চেয়ে বহুগুণ দ্রুত?',
      category: 'Inference Serving',
      whyAsked_en: 'Evaluates production deployment knowledge and the candidate ability to minimize cloud GPU hosting bills.',
      whyAsked_bn: 'বাস্তবে ক্লাউড জিপিইউতে এআই সার্ভার চালানোর খরচ ও মেমরি অপ্টিমাইজেশন সম্পর্কে প্রার্থীর দখল পরীক্ষা করতে।',
      howToAnswer_en: 'In naive autoregressive serving, the Key-Value (KV) cache grows dynamically with each token. Standard implementations allocate contiguous GPU memory for the maximum possible sequence length (e.g. 4096 tokens) per request, resulting in 60-80% wasted memory due to internal/external fragmentation. Inspired by virtual memory paging in operating systems, vLLM introduces PagedAttention. It divides the KV cache into fixed-size physical memory blocks (pages) that do not need to be contiguous. Requests map logical tokens to physical pages via a block table. This eliminates fragmentation, enables KV cache sharing across parallel requests (such as parallel sampling or system prompt reuse), and boosts serving throughput by 2x to 4x on the exact same GPU hardware.',
      howToAnswer_bn: 'সাধারণ ট্রান্সফরমারে প্রতিটি টোকেন তৈরির সাথে সাথে কেভি ক্যাশ বাড়ে। স্ট্যান্ডার্ড সিস্টেমে প্রতিটি ইউজারের জন্য সর্বোচ্চ মেমরি আগে থেকেই ব্লক করে রাখা হয়, যার ৬০-৮০% মেমরি ফাঁকা পড়ে থেকে নষ্ট হয়। অপারেটিং সিস্টেমের পেজিং কনসেপ্ট থেকে অনুপ্রাণিত হয়ে vLLM নিয়ে এসেছে পেজড-অ্যাটেনশন। এটি কেভি ক্যাশকে ছোট ছোট ব্লকে ভাগ করে যেখানেই খালি জায়গা পায় সেখানে সংরক্ষণ করে। ফলে কোনো মেমরি অপচয় হয় না এবং একই জিপিইউ দিয়ে ২ থেকে ৪ গুণ বেশি রিকোয়েস্ট একযোগে হ্যান্ডেল করা যায়।',
      commonMistakes_en: 'Thinking vLLM just optimizes model loading speed, missing the core contribution of non-contiguous KV cache paging.',
      commonMistakes_bn: 'মনে করা যে এটি শুধু মডেল লোডিং স্পিড বাড়ায়, এর মূল কেভি ক্যাশ পেজিং আর্কিটেকচার সম্পর্কে না জানা।'
    },
    {
      id: 'ai-q3',
      question_en: 'How do LangGraph multi-agent cycles and state persistence differ from traditional linear LangChain chains?',
      question_bn: 'ল্যাংগ্রাফ (LangGraph) মাল্টি-এজেন্ট সিস্টেম কীভাবে সনাতন লিনিয়ার ল্যাংচেন চেইনের চেয়ে আলাদা এবং বেশি শক্তিশালী?',
      category: 'Agent Architectures',
      whyAsked_en: 'Examines candidate experience with 2026 state-of-the-art autonomous agent workflows.',
      whyAsked_bn: '২০২৬ সালের আধুনিক স্বয়ংক্রিয় এআই এজেন্ট ও সাইক্লিক স্টেট মেশিন তৈরির বাস্তব জ্ঞান দেখতে।',
      howToAnswer_en: 'Traditional chains in early LangChain are directed acyclic graphs (DAGs) that execute linearly step 1 -> step 2 -> step 3. If step 2 fails or produces flawed code, the pipeline cannot backtrack cleanly. LangGraph introduces cyclic state machines with explicit State objects, Nodes (agents/tools), and Conditional Edges. Agents can loop back to previous nodes (e.g. Code Generator -> Code Tester -> If Error -> back to Code Generator). Furthermore, LangGraph provides built-in checkpointers that save state to PostgreSQL or memory, enabling time-travel debugging, resumable sessions, and human-in-the-loop review before executing destructive actions.',
      howToAnswer_bn: 'আগের সাধারণ চেইনগুলো ছিল একমুখী, অর্থাৎ একবার কোনো ধাপে ভুল হলে পেছনে ফিরে সংশোধন করার সুযোগ ছিল না। ল্যাংগ্রাফ একটি সাইক্লিক স্টেট মেশিন যেখানে এজেন্টরা লুপ আকারে কাজ করতে পারে। যেমন: কোড জেনারেটর কোড বানানোর পর যদি টেস্টার এজেন্ট কোনো ভুল পায়, তবে তা আবার আগের এজেন্টের কাছে ফেরত পাঠায় যতক্ষণ না টেস্ট পাস করে। এছাড়া এতে স্টেট ডাটাবেসে সেভ থাকে, ফলে যেকোনো সময় আগের অবস্থায় ফেরা যায় এবং গুরুত্বপূর্ণ সিদ্ধান্তের আগে মানুষের অনুমতি নেওয়ার অপশন রাখা যায়।',
      commonMistakes_en: 'Treating LangGraph as merely syntactic sugar rather than understanding its cyclical graph state and checkpointing architecture.',
      commonMistakes_bn: 'মনে করা যে ল্যাংগ্রাফ শুধু সাধারণ চেইনের মতো আরেকটি সিনট্যাক্স, এর সাইক্লিক ও চেকবক্স স্টেট সম্পর্কে ধারণা না থাকা।'
    },
    {
      id: 'ai-q4',
      question_en: 'How do you prevent catastrophic forgetting when fine-tuning an LLM on domain-specific data, and how do you evaluate model drift using RAGAS?',
      question_bn: 'ডোমেন ডেটায় এআই মডেল ট্রেইন করার সময় ক্যাটাষ্ট্রফিক ফরগেটিং (আগের জ্ঞান ভুলে যাওয়া) কীভাবে রোধ করা যায় এবং রাগাস দিয়ে তা কীভাবে মাপা হয়?',
      category: 'Model Evaluation & Quality',
      whyAsked_en: 'Tests whether candidate knows how to maintain general reasoning capabilities while specializing a model.',
      whyAsked_bn: 'মডেলের সামগ্রিক বুদ্ধিমত্তা নষ্ট না করে নির্দিষ্ট কাজে পারদর্শী করে তোলার কৌশল যাচাই করতে।',
      howToAnswer_en: 'Catastrophic forgetting occurs when gradient updates on a specialized dataset overwrite general language and reasoning weights. We mitigate this by: 1) Using LoRA adapters so base model general weights remain 100% frozen; 2) Mixing 10-20% general instruction data (replay data from OpenHermes/Dolly) into the domain dataset; 3) Using low learning rates (1e-4 to 2e-5) with cosine decay. For evaluation, we employ RAGAS (Retrieval Augmented Generation Assessment) to benchmark Context Precision, Context Recall, Faithfulness (detecting hallucinations), and Answer Relevancy against a golden test set before and after fine-tuning.',
      howToAnswer_bn: 'ক্যাটাষ্ট্রফিক ফরগেটিং হলো নতুন বিষয় শিখতে গিয়ে মডেলের সাধারণ বুদ্ধিমত্তা ভুলে যাওয়া। এটি প্রতিরোধ করতে আমরা লোরা ব্যবহার করি যাতে মূল মডেলের ওজন অক্ষত থাকে। এছাড়া ডোমেন ডেটাসেটের সাথে ১০-২০% সাধারণ প্রশ্নোত্তর মিশিয়ে দেওয়া হয় এবং লার্নিং রেট কম রাখা হয়। আর ফাইন-টিউনিংয়ের পর মডেলের আউটপুট ঠিক আছে কি না তা যাচাই করার জন্য রাগাস (RAGAS) টুল দিয়ে ফেথফুলনেস (সত্যতা) ও প্রাসঙ্গিকতা বৈজ্ঞানিকভাবে মেপে দেখা হয়।',
      commonMistakes_en: 'Fine-tuning with 100% domain data at high learning rates without benchmark replay datasets or evaluation suites.',
      commonMistakes_bn: 'অতিরিক্ত হাই লার্নিং রেট দিয়ে ট্রেইন করা যার ফলে মডেল অদ্ভুত উত্তর দেওয়া শুরু করে।'
    }
  ],
  freeCerts: [
    {
      id: 'deeplearning-ai-dl-spec',
      title_en: 'DeepLearning.AI: Deep Learning Specialization (Free Audit)',
      title_bn: 'ডিপ-লার্নিং.এআই: ডিপ লার্নিং স্পেশালাইজেশন',
      provider: 'DeepLearning.AI / Coursera',
      url: 'https://www.deeplearning.ai/courses/deep-learning-specialization/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 120,
      cost: '100% Free Audit',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'The industry gold-standard curriculum authored by Andrew Ng covering neural networks, backpropagation, and CNNs/Transformers.',
      relevance_bn: 'বিশ্ববিখ্যাত অধ্যাপক অ্যান্ড্রু এনজি পরিচালিত আধুনিক ডিপ লার্নিংয়ের আন্তর্জাতিক স্ট্যান্ডার্ড কোর্স।'
    },
    {
      id: 'huggingface-llm-course',
      title_en: 'Hugging Face: Open-Source Machine Learning & LLM Course',
      title_bn: 'হাগিং ফেস: ওপেন সোর্স মেশিন লার্নিং ও এলএলএম কোর্স',
      provider: 'Hugging Face',
      url: 'https://huggingface.co/learn',
      mobileAccessible: true,
      language: 'en',
      durationHours: 60,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official interactive training covering Transformer models, tokenizers, LoRA fine-tuning, and model hub deployment.',
      relevance_bn: 'হাগিং ফেসের নিজস্ব অফিশিয়াল ট্রান্সফরমার ও এলএলএম ফাইন-টিউনিং প্রশিক্ষণ।'
    },
    {
      id: 'fastai-practical-dl',
      title_en: 'Practical Deep Learning for Coders (fast.ai)',
      title_bn: 'প্র্যাকটিক্যাল ডিপ লার্নিং ফর কোডার্স (ফাস্ট.এআই)',
      provider: 'fast.ai',
      url: 'https://course.fast.ai/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 80,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Hands-on, top-down deep learning course teaching PyTorch, computer vision, NLP, and model deployment from day one.',
      relevance_bn: 'কোডারদের জন্য বিশ্বখ্যাত হাতে-কলমে পাইটর্চ ও ডিপ লার্নিং কোর্স।'
    }
  ]
};
