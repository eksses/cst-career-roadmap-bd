import type { CareerTrack } from '../../../shared/types.js';

export const gameDevelopmentUnityTrack: Omit<CareerTrack, 'id'> = {
  slug: 'game-development-unity',
  title_en: 'Game Development (Unity Engine, C# and 2D/3D Interactive)',
  title_bn: 'গেম ডেভেলপমেন্ট (ইউনিটি ইঞ্জিন, সি-শার্প ও ২ডি/৩ডি গেম)',
  summary_en: 'Building 2D and 3D games using Unity and C#. Covers physics engines, character controllers, UI systems, audio, asset optimization, and publishing to Google Play Store and PC.',
  summary_bn: 'ইউনিটি ইঞ্জিন ও সি-শার্প (C#) দিয়ে ২ডি এবং ৩ডি গেম তৈরির ক্যারিয়ার ট্র্যাক। ফিজিক্স, ক্যারেক্টার মুভমেন্ট, সাউন্ড ও গুগল প্লে-স্টোরে গেম রিলিজের বাস্তব গাইডলাইন।',
  pivotAdvice_en: 'Game development requires strong logic, spatial awareness, and passion. If you love video games and want to see your code control physical animated characters, this provides a deeply rewarding career in local game studios and remote indie markets.',
  pivotAdvice_bn: 'ভিডিও গেম খেলতে ও বানাতে যদি তোমার গভীর ভালোলাগা থাকে, তবে ইউনিটি ও সি-শার্প দিয়ে গেম বানানো দারুণ একটি পথ। ঢাকার গেম স্টুডিওগুলো এবং গ্লোবাল মোবাইল গেম বাজারে এই ডেভেলপারদের আকর্ষণীয় মূল্যায়ন রয়েছে।',
  minPcRequired: 'standard',
  dayToDay_en: [
    'Writing gameplay mechanics and character movement scripts in C#.',
    'Configuring Unity Rigidbodies, 2D/3D colliders, raycasting, and physics interactions.',
    'Designing user interface canvases for health bars, score displays, and inventory menus.',
    'Importing 3D models, textures, animations, and sound effects into Unity scenes.',
    'Profile memory usage, draw calls, and optimizing APK builds for budget Android phones.'
  ],
  dayToDay_bn: [
    'সি-শার্প (C#) দিয়ে গেমের নিয়ম, ক্যারেক্টারের দৌড়ানো ও জাম্প করার কোড লেখা।',
    'ইউনিটিতে কলাইডার ও ফিজিক্স গ্র্যাভিটি সেট করা যাতে ক্যারেক্টার দেয়ালে ধাক্কা খায় বা ফ্লোরে ল্যান্ড করে।',
    'গেমের স্কোর, প্লেয়ারের লাইফ বার ও পজ মেনু ডিজাইন করা।',
    'গেমের জন্য অ্যানিমেশন, সাউন্ড ইফেক্ট ও ব্যাকগ্রাউন্ড মিউজিক সিন ক্রিয়েশনে বসানো।',
    'কমদামি অ্যান্ড্রয়েড ফোনে যেন স্মুথভাবে গেম চলে সেজন্য মেমোরি ও সাইজ অপ্টিমাইজ করা।'
  ],
  mustHaveSkills: [
    {
      id: 'csharp-oop-game',
      name: 'C# Programming and OOP Fundamentals',
      category: 'Core Language',
      importance: 'Essential',
      description_en: 'Classes, inheritance, encapsulation, interfaces, coroutines, and event delegates in C#.',
      description_bn: 'সি-শার্প ভাষায় ক্লাস, অবজেক্ট, ইন্টারফেস, ইভেন্ট ডেলিগেট ও করুটিনের স্পষ্ট ধারণা।'
    },
    {
      id: 'unity-engine-editor',
      name: 'Unity Editor and Prefabs Workflow',
      category: 'Game Engine',
      importance: 'Essential',
      description_en: 'Scene management, transform hierarchy, components, prefabs, tags, and layers in Unity.',
      description_bn: 'ইউনিটি এডিটরে প্রিফ্যাব তৈরি, ক্যামেরা ফলো এবং সিন ম্যানেজমেন্ট পরিচালনা।'
    },
    {
      id: 'game-physics-math',
      name: 'Game Physics and 2D/3D Math',
      category: 'Mathematics & Mechanics',
      importance: 'Essential',
      description_en: 'Vectors (Vector2, Vector3), dot products, Lerp interpolation, Rigidbody forces, and collisions.',
      description_bn: 'ভেক্টর পজিশন, কোণ নির্ণয়, গ্র্যাভিটি ফোর্স এবং ফিজিক্স সংঘর্ষের গণনা।'
    },
    {
      id: 'mobile-game-export',
      name: 'Android APK Build and Play Store Optimization',
      category: 'Publishing & Performance',
      importance: 'Recommended',
      description_en: 'Android SDK/NDK configuration, touch joystick input, texture compression, and Google Play billing.',
      description_bn: 'মোবাইল টাচ জয়স্টিক কন্ট্রোল, টেক্সচার কম্প্রেশন ও গুগল প্লে-স্টোরের জন্য এপিকে বিল্ড করা।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Dhanmondi, Uttara, Banani, Mohakhali)',
      entrySalary: { min: 25000, max: 40000, currency: 'BDT', formatted: '25,000 - 40,000 BDT' },
      midSalary: { min: 55000, max: 95000, currency: 'BDT', formatted: '55,000 - 95,000 BDT' },
      seniorSalary: { min: 110000, max: 220000, currency: 'BDT', formatted: '110,000 - 220,000 BDT' },
      hiringSectors: [
        'Mobile Game Studios in Dhaka (Battery Low Interactive, Mindfisher Games, Ulka Games)',
        'EdTech and Gamified Learning Software Companies',
        'Architectural 3D Visualization and VR Simulation Agencies'
      ],
      cvExpectations: [
        'A playable portfolio link (itch.io or Google Play Store link) with at least 2 finished games',
        'Clean C# code architecture separating game logic from visual components',
        'Understanding of performance bottlenecks on budget mobile devices',
        'Demonstrated passion for gameplay loop design and responsive player controls'
      ],
      localDemandSummary_en: 'Dhaka has a thriving mobile game development ecosystem producing casual and hyper-casual games played by millions across South Asia. Studios hire diploma candidates with demonstrable playable prototypes.',
      localDemandSummary_bn: 'বাংলাদেশে উল্কা গেমস, ব্যাটারি লো সহ একাধিক সফল গেম স্টুডিও রয়েছে। তোমার কাছে যদি ইচ.আইও (itch.io) বা প্লে-স্টোরের খেলার উপযোগী প্রজেক্ট থাকে, তবে সহজেই ইন্টারভিউ পাওয়া যায়।'
    },
    targetCountries: [
      {
        region: 'Middle East and Asia',
        countryName_en: 'UAE (Dubai) and Singapore',
        countryName_bn: 'সংযুক্ত আরব আমিরাত (দুবাই) ও সিঙ্গাপুর',
        demandLevel: 'Moderate',
        demandLevel_bn: 'মাঝারি',
        visaReality_en: 'Game studios in Dubai and Singapore hire international Unity developers with 3+ years of experience and strong 3D portfolios.',
        visaReality_bn: '৩ বছরের বাস্তব অভিজ্ঞতা ও ভালো গেম পোর্টফোলিও থাকলে দুবাই ও সিঙ্গাপুরের গেমিং কোম্পানিতে ভিসার সুযোগ রয়েছে।',
        averageSalaryUsdOrLocal: '$42,000 - $75,000 USD / year (approx 5,000,000 - 9,000,000 BDT)',
        requiredExperienceYears: '3+ years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$800 - $3,200 / month',
      competitionLevel: 'Global, won by showing polished playable web and mobile demos on itch.io',
      competitionLevel_bn: 'ইচ.আইওতে আকর্ষণীয় লাইভ প্লে-ডেমো শোকেস করে আন্তর্জাতিক ক্লায়েন্ট পাওয়া যায়',
      englishRequirement: 'Moderate English to communicate mechanics and milestones on Discord and GitHub',
      englishRequirement_bn: 'ডিসকর্ড ও গিটহাবে গেমের ফিচার ও মেকানিক্স ইংরেজিতে আলোচনা করতে পারার দক্ষতা',
      realities_en: [
        'Finishing a small complete game is worth 100 times more than starting 10 huge unfinished RPGs',
        'Indie developers can monetize their own games through Google AdMob and in-app purchases'
      ],
      realities_bn: [
        'অসম্পূর্ণ ১০টি বড় গেমের চেয়ে ১টি ছোট কিন্তু সম্পূর্ণ ও বাগ-মুক্ত গেম সিভির জন্য শতগুণ বেশি মূল্যবান',
        'নিজের তৈরি করা গেমে গুগল অ্যাডমব (AdMob) বসিয়ে সরাসরি প্যাসিভ ডলার আয় করা সম্ভব'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: C# Scripting and Unity 2D Mechanics',
      phaseTitle_bn: 'প্রথম পর্ব: সি-শার্প স্ক্রিপ্টিং ও ইউনিটি ২ডি গেম মেকানিক্স',
      phaseSubtitle_en: 'Day 1 to 25: C# variables, loops, classes, and building your first 2D platformer game.',
      phaseSubtitle_bn: '১ থেকে ২৫ দিন: সি-শার্পের মূল ভিত্তি ও প্রথম ২ডি প্ল্যাটফর্মার গেম তৈরি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-csharp-unity-basics',
          title_en: 'C# OOP for Games and Unity Components',
          title_bn: 'গেমের জন্য সি-শার্প কোডিং ও ইউনিটি কম্পোনেন্ট',
          description_en: 'MonoBehaviour lifecycle (Awake, Start, Update, FixedUpdate), transform translations, and input handling.',
          description_bn: 'মনোবিহেভিয়ার লাইফসাইকেল, কিবোর্ড ইনপুট এবং অবজেক্ট ট্রান্সফর্ম পরিচালনা।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['MonoBehaviour methods', 'Transform.Translate and Vector3', 'Input.GetAxis and new Input System'],
          practicalTask_en: 'Create a 2D player character that walks, jumps smoothly with gravity, and collects spinning coins.',
          practicalTask_bn: 'একটি ২ডি ক্যারেক্টার তৈরি করো যা কিবোর্ড দিয়ে মসৃণভাবে লাফায় এবং পয়েন্ট কয়েন সংগ্রহ করে।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: Physics, UI and Enemy AI',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: গেম ফিজিক্স, ইউআই মেনু ও এনিমি এআই',
      phaseSubtitle_en: 'Day 26 to 50: Collisions, triggers, Raycasting, scoreboards, and patrol bot AI.',
      phaseSubtitle_bn: '২৬ থেকে ৫০ দিন: সংঘর্ষ নির্ণয়, রে-কাস্টিং, স্কোরবোর্ড ও শত্রুর স্বয়ংক্রিয় মুভমেন্ট কোড।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-physics-enemy-ai',
          title_en: 'Rigidbodies, Triggers, and Enemy Patrol AI',
          title_bn: 'ফিজিক্স সংঘর্ষ ও শত্রুর অটোমেশন কোডিং',
          description_en: 'OnCollisionEnter vs OnTriggerEnter, state machines for enemy patrol and chase logic, and canvas UI.',
          description_bn: 'দেয়ালে বা ফ্লোরে ধাক্কা লাগা হ্যান্ডেল করা এবং শত্রুর প্লেয়ারকে তাড়া করার লজিক তৈরি।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['OnTriggerEnter2D/3D', 'LayerMasks and Raycasting', 'Canvas UI and TextMeshPro'],
          practicalTask_en: 'Build an endless runner game with obstacles that spawn automatically and an active high-score counter.',
          practicalTask_bn: 'একটি এন্ডলেস রানার গেম তৈরি করো যেখানে স্বয়ংক্রিয়ভাবে বাধা আসবে এবং স্কোরবোর্ডে রেকর্ড থাকবে।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: 3D Game Worlds, Lighting and Audio',
      phaseTitle_bn: 'তৃতীয় পর্ব: ৩ডি গেম স্পেস, লাইটিং ও অডিও ইফেক্ট',
      phaseSubtitle_en: 'Day 51 to 75: 3D character controller, particle effects, audio mixers, and scene transitions.',
      phaseSubtitle_bn: '৫১ থেকে ৭৫ দিন: ৩ডি ক্যারেক্টার কন্ট্রোলার, বিস্ফোরণের পার্টিকেল ইফেক্ট ও সাউন্ড মিক্সার।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-3d-audio-lighting',
          title_en: '3D Character Controller and Game Polish',
          title_bn: '৩ডি ক্যারেক্টার পরিচালনা ও গেম পলিশিং',
          description_en: 'CharacterController component, third-person Cinemachine cameras, particle systems, and audio sources.',
          description_bn: 'থার্ড পারসন ৩ডি ক্যামেরা ফলো, ডিরেকশনাল লাইটিং ও সাউন্ড ইফেক্ট ইন্টিগ্রেশন।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['CharacterController move', 'Cinemachine virtual cameras', 'Particle Systems and AudioMixer'],
          practicalTask_en: 'Create a 3D mini-arena action game with working 3D sound effects and particle hit effects.',
          practicalTask_bn: 'একটি পূর্ণাঙ্গ ৩ডি মিনি অ্যাকশন গেম বানাও যেখানে শব্দ ও লাইটিং আকর্ষণীয়ভাবে কাজ করবে।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: Mobile Optimization, APK Export and itch.io Portfolio',
      phaseTitle_bn: 'চতুর্থ পর্ব: মোবাইল অপ্টিমাইজেশন, এপিকে এক্সপোর্ট ও পোর্টফোলিও',
      phaseSubtitle_en: 'Day 76 to 90: Android touch inputs, frame-rate profiling, and uploading to itch.io.',
      phaseSubtitle_bn: '৭৬ থেকে ৯০ দিন: মোবাইল টাচ কন্ট্রোল, পারফরম্যান্স প্রোফাইলিং ও ইন্টারনেটে গেম রিলিজ।',
      durationWeeks: 2,
      modules: [
        {
          id: 'mod-mobile-export-portfolio',
          title_en: 'Mobile Android Build and itch.io WebGL Deployment',
          title_bn: 'মোবাইল এপিকে এক্সপোর্ট ও ওয়েবজিএল আপলোড',
          description_en: 'Touch joystick controls, Unity Profiler for 60 FPS, WebGL browser export, and itch.io public portfolio setup.',
          description_bn: 'মোবাইল টাচ বাটন বসানো, ৬০ এফপিএস নিশ্চিত করা ও ব্রাউজারে খেলার জন্য ওয়েবজিএল হোস্ট করা।',
          estimatedDays: 10,
          mobileAccessible: false,
          keyTopics: ['Unity Profiler (CPU/GPU)', 'WebGL build to itch.io', 'Android APK keystore signing'],
          practicalTask_en: 'Export your finished game to WebGL, upload to itch.io, and generate a playable Android APK.',
          practicalTask_bn: 'তোমার তৈরি করা গেমটি itch.io তে আপলোড করো যাতে যেকোনো ব্যক্তি সরাসরি ব্রাউজারে খেলতে পারে।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'unity-q1',
      question_en: 'What is the difference between Update() and FixedUpdate() in Unity? When should each be used?',
      question_bn: 'ইউনিটিতে Update() এবং FixedUpdate() মেথডের মধ্যে পার্থক্য কী? কোনটি কখন ব্যবহার করা উচিত?',
      category: 'Game Engine Fundamentals',
      whyAsked_en: 'Foundational Unity technical interview question testing physics stability and frame rate knowledge.',
      whyAsked_bn: 'ইউনিটি গেমের ইন্টারভিউয়ের প্রথম প্রশ্ন যা প্রার্থীর ফ্রেম-রেট ও ফিজিক্স স্টেডিনেস বোঝার গভীরতা যাচাই করে।',
      howToAnswer_en: 'Update() runs once per rendered frame, meaning its frequency varies based on screen hardware (e.g. 60 FPS or 120 FPS). It should be used for player input detection (Input.GetKeyDown), camera movements, and simple timer logic. FixedUpdate() runs on a precise, constant fixed timer independent of frame rates (default 0.02s). It must always be used for Rigidbody physics calculations and forces (AddForce, velocity) to prevent jittery physics glitches on laggy hardware.',
      howToAnswer_bn: 'Update() প্রতি রেন্ডার ফ্রেমে একবার কল হয়, অর্থাৎ ফ্রেমরেটের ওপর নির্ভর করে এটি ভিন্ন সময়ে চলতে পারে। কিবোর্ড বা টাচ ইনপুট ধরতে এবং ক্যামেরা নড়াচড়ায় এটি ব্যবহার করা হয়। আর FixedUpdate() একটি নির্দিষ্ট কনস্ট্যান্ট সময় পর পর (সাধারণত প্রতি ০.০২ সেকেন্ডে) চলে। ফিজিক্সের যেকোনো বল প্রয়োগ (AddForce) বা রিজিডবডি ক্যালকুলেশনে সবসময় FixedUpdate() ব্যবহার করতে হবে, তা না হলে ফ্রেম ড্রপের সময় ফিজিক্সের আচরণ অদ্ভুত ও অসঙ্গত হয়ে যাবে।',
      commonMistakes_en: 'Putting Rigidbody force calculations inside regular Update(), causing erratic physics behavior on fast screens.',
      commonMistakes_bn: 'রেগুলার Update() এর ভেতরে রিজিডবডি ফিজিক্স ক্যালকুলেশন লিখে গেমের ফিজিক্সে বাউন্সি বাগ তৈরি করা।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-unity-foundations',
      title_en: 'Unity Learn Essentials and Junior Programmer Credential',
      title_bn: 'ইউনিটি অফিশিয়াল জুনিয়র প্রোগ্রামার ফ্রি কোর্স ও সার্টিফিকেট',
      provider: 'Unity Technologies',
      url: 'https://learn.unity.com/pathway/junior-programmer',
      mobileAccessible: true,
      language: 'en',
      durationHours: 40,
      cost: '100% Free',
      relevance_en: 'Official foundational curriculum designed directly by the creators of Unity Engine.',
      relevance_bn: 'ইউনিটি ইঞ্জিনের নিজস্ব বিশেষজ্ঞদের তৈরি করা আন্তর্জাতিকভাবে প্রশংসিত ফ্রি ট্রেনিং ও ব্যাজ।'
    }
  ]
};
