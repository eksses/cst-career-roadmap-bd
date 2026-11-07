import type { CareerTrack } from '../../../shared/types.js';

export const desktopAppDevelopmentTrack: Omit<CareerTrack, 'id'> = {
  slug: 'desktop-app-development',
  title_en: 'Cross-Platform Desktop Apps and POS Systems (Electron, Tauri and C#)',
  title_bn: 'ডেস্কটপ অ্যাপ্লিকেশন ও পিওএস সফটওয়্যার (ইলেকট্রন, টরি ও সি-শার্প)',
  summary_en: 'Engineering offline-capable desktop applications using Electron.js, Tauri, and C# .NET. Covers local SQLite databases, thermal printer integration, barcode scanners, and commercial POS software for pharmacies and supermarkets.',
  summary_bn: 'ইলেকট্রন (Electron.js), টরি (Tauri) ও সি-শার্প দিয়ে অফলাইন ডেস্কটপ সফটওয়্যার তৈরির ট্র্যাক। লোকাল এসকিউলাইট ডেটাবেস, থার্মাল রিসিট প্রিন্টার, বারকোড স্ক্যানার ও সুপারমার্কেট পিওএস (POS) সফটওয়্যারের বাস্তব সমাধান।',
  pivotAdvice_en: 'Hundreds of local businesses in Bangladesh need fast, reliable desktop billing and inventory software that works without an active internet connection. If you want to build installable .exe tools for Windows and Mac, this track opens immediate local commercial client work.',
  pivotAdvice_bn: 'বাংলাদেশের হাজার হাজার সুপারশপ, ফার্মেসি, ডায়াগনস্টিক সেন্টার ও ফ্যাক্টরির জন্য অফলাইনে চলা ডেস্কটপ সফটওয়্যার প্রয়োজন হয়। ইন্টারনেট না থাকলেও দ্রুত বিল ও ইনভেন্টরি ম্যানেজ করার সফটওয়্যার বানিয়ে স্থানীয়ভাবে ব্যবসা বা সফটওয়্যার ফার্মে স্থায়ী চাকরি পাওয়ার জন্য এটি চমৎকার একটি ট্র্যাক।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Building installable desktop user interfaces using web technologies inside Electron.js or lightweight Tauri.',
    'Designing local, zero-latency SQLite databases for offline inventory storage and sales records.',
    'Interfacing with hardware devices like USB barcode scanners and ESC/POS thermal receipt printers.',
    'Managing cross-process communication between Node.js/Rust main backend threads and UI renderers.',
    'Packaging, code-signing, and compiling production .exe installers and MSI packages for Windows.'
  ],
  dayToDay_bn: [
    'ইলেকট্রন বা টরি দিয়ে আধুনিক ও আকর্ষণীয় উইন্ডোজ ডেস্কটপ সফটওয়্যার তৈরি করা।',
    'ইন্টারনেট ছাড়াই চোখের পলকে কাজ করার জন্য লোকাল এসকিউলাইট (SQLite) ডেটাবেস ডিজাইন করা।',
    'দোকানের ইউএসবি বারকোড স্ক্যানার এবং ক্যাশ মেমো প্রিন্ট করার থার্মাল প্রিন্টারের সাথে সফটওয়্যার কানেক্ট করা।',
    'মেইন প্রসেস ও রেন্ডারার প্রসেসের মধ্যে নিরাপদ আইপিসি (IPC) ডেটা আদান-প্রদান নিশ্চিত করা।',
    'গ্রাহকের পিসিতে এক ক্লিকে ইনস্টল করার জন্য সেটআপ ফাইল (.exe বা .msi) বিল্ড করা।'
  ],
  mustHaveSkills: [
    {
      id: 'electron-tauri-core',
      name: 'Electron.js and Tauri Desktop Architecture',
      category: 'Desktop Framework',
      importance: 'Essential',
      description_en: 'Main vs Renderer processes, preload scripts, contextBridge security isolation, and window lifecycle.',
      description_bn: 'মেইন প্রসেস, রেন্ডারার প্রসেস এবং সিকিউর কনটেক্সট ব্রিজ দিয়ে নিরাপদে সিস্টেম রিসোর্স অ্যাক্সেস।'
    },
    {
      id: 'sqlite-local-storage',
      name: 'Local SQLite and Offline Data Synchronization',
      category: 'Databases',
      importance: 'Essential',
      description_en: 'Embedded relational databases, ACID file integrity, automatic backups, and background sync to cloud.',
      description_bn: 'লোকাল এসকিউলাইট ডেটাবেস, লেনদেনের নির্ভরযোগ্য ব্যাকআপ এবং নেটওয়ার্ক পেলে ক্লাউডে ডেটা সিঙ্ক।'
    },
    {
      id: 'esc-pos-hardware-printing',
      name: 'Hardware Interfacing (ESC/POS Thermal Printers & Scanners)',
      category: 'Hardware Integration',
      importance: 'Essential',
      description_en: 'Raw printer commands, serial/USB port communication, barcode parsing, and cash drawer triggers.',
      description_bn: 'দোকানের ক্যাশ ড্রয়ার খোলা, বারকোড রিড করা এবং ৫৬মিমি/৮০মিমি মেমো প্রিন্ট করার কোডিং।'
    },
    {
      id: 'csharp-wpf-windows',
      name: 'C# .NET Windows Desktop Essentials',
      category: 'Windows Native',
      importance: 'Recommended',
      description_en: 'XAML layouts, event handlers, WinForms/WPF components, and Windows registry settings.',
      description_bn: 'উইন্ডোজের নিজস্ব সি-শার্প ও ডটনেট ফ্রেমওয়ার্ক দিয়ে দ্রুত অফলাইন ইউটিলিটি তৈরি।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Elephant Road, Motijheel, Mirpur, Chittagong, Bogra, Jessore)',
      entrySalary: { min: 20000, max: 35000, currency: 'BDT', formatted: '20,000 - 35,000 BDT' },
      midSalary: { min: 45000, max: 90000, currency: 'BDT', formatted: '45,000 - 90,000 BDT' },
      seniorSalary: { min: 100000, max: 200000, currency: 'BDT', formatted: '100,000 - 200,000 BDT' },
      hiringSectors: [
        'Local POS and Business Management Software Houses across Dhaka and Elephant Road',
        'Hospital, Diagnostic and Pharmacy IT Solution Providers',
        'Textile and Garments Factory Production Floor Tracking Systems'
      ],
      cvExpectations: [
        'Working demo of an installable Windows application that reads and writes local data instantly',
        'Demonstrated ability to generate thermal receipt print layouts or PDF invoices',
        'Clear understanding of offline data durability and zero-lag user interfaces',
        'Knowledge of installer generation with Inno Setup or Electron Builder'
      ],
      localDemandSummary_en: 'Almost every retail pharmacy, supermarket chain, and wholesale shop in Bangladesh runs on local desktop POS software. Freelancers and software firms sell installable systems with continuous maintenance contracts.',
      localDemandSummary_bn: 'বাংলাদেশের খুচরা ও পাইকারি দোকানগুলোতে অফলাইন পিওএস সফটওয়্যারের ব্যাপক চাহিদা রয়েছে। একবার একটি ভালো সফটওয়্যার বানিয়ে ফেললে স্থানীয় অসংখ্য দোকানের কাছে লাইসেন্স ও মাসিক মেইনটেন্যান্স ফি নিয়ে বিক্রি করা যায়।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'Saudi Arabia and Qatar',
        countryName_bn: 'সৌদি আরব ও কাতার',
        demandLevel: 'Moderate',
        demandLevel_bn: 'মাঝারি',
        visaReality_en: 'Retail automation companies in the Gulf hire desktop and POS software developers to manage multi-store chain checkouts.',
        visaReality_bn: 'উপসাগরীয় দেশগুলোর সুপারমার্কেট চেইন ও রিটেইল শপে ডেস্কটপ সফটওয়্যার ডেভেলপারদের কর্মসংস্থানের সুযোগ রয়েছে।',
        averageSalaryUsdOrLocal: '$38,000 - $65,000 USD / year (approx 4,500,000 - 7,800,000 BDT)',
        requiredExperienceYears: '3+ years'
      }
    ],
    remote: {
      entryBarrier: 'Low',
      entryBarrier_bn: 'সহজ থেকে মাঝারি',
      monthlyRangeUsd: '$700 - $3,000 / month',
      competitionLevel: 'Specialized niche, won by providing cross-platform Mac/Windows binaries with native performance',
      competitionLevel_bn: 'উইন্ডোজ ও ম্যাক উভয়ের জন্য লাইটওয়েট সফটওয়্যার ডেলিভারি দিয়ে চমৎকার রিমোট কাজ পাওয়া যায়',
      englishRequirement: 'Moderate English to understand retail client workflows and feature requirements',
      englishRequirement_bn: 'দোকানদার বা ব্যবসায়ীদের চাহিদামতো ফিচার বুঝে কোড করার মতো প্রয়োজনীয় ইংরেজি জানা',
      realities_en: [
        'Local supermarket owners will happily pay 30,000 to 80,000 BDT for a dependable offline billing software',
        'Tauri compiles desktop apps that are under 15 megabytes, compared to heavy 120 megabyte Electron apps'
      ],
      realities_bn: [
        'একটি নির্ভরযোগ্য অফলাইন ক্যাশ মেমো সফটওয়্যার স্থানীয় দোকানে ৩০,০০০ থেকে ৮০,০০০ টাকায় সরাসরি বিক্রি করা সম্ভব',
        'টরি (Tauri) দিয়ে মাত্র ১০-১৫ মেগাবাইটের হালকা ও অতি দ্রুতগতির সফটওয়্যার তৈরি করা যায় যা পুরোনো পিসিতেও নিমেষে চলে'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Web UI to Desktop with Electron & Tauri',
      phaseTitle_bn: 'প্রথম পর্ব: ওয়েব প্রযুক্তি দিয়ে ডেস্কটপ অ্যাপ তৈরি',
      phaseSubtitle_en: 'Day 1 to 25: Setting up Electron, preload scripts, and building your first windowed app.',
      phaseSubtitle_bn: '১ থেকে ২৫ দিন: ইলেকট্রন সেটআপ, মেইন প্রসেস ও প্রথম ইনস্টলেবল উইন্ডোজ অ্যাপ তৈরি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-electron-architecture',
          title_en: 'Electron Process Model and Secure IPC Communication',
          title_bn: 'ইলেকট্রন প্রসেস মডেল ও নিরাপদ আইপিসি কমিউনিকেশন',
          description_en: 'BrowserWindow creation, contextBridge.exposeInMainWorld, and handling ipcRenderer.invoke from the UI.',
          description_bn: 'ব্রাউজার উইন্ডো ওপেন করা এবং নিরাপদ আইপিসির মাধ্যমে জাভাস্ক্রিপ্ট কোড দিয়ে পিসির ফাইল সিস্টেম পড়া।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['BrowserWindow configurations', 'contextBridge security isolation', 'ipcMain.handle and ipcRenderer.invoke'],
          practicalTask_en: 'Build an installable Windows notepad utility that opens, edits, and saves plain text files to your local drive.',
          practicalTask_bn: 'একটি নিজস্ব নোটপ্যাড সফটওয়্যার তৈরি করো যা উইন্ডোজের যেকোনো ফোল্ডার থেকে ফাইল লোড ও সেভ করতে পারে।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: Local SQLite Database and Inventory Engine',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: লোকাল এসকিউলাইট ডেটাবেস ও ইনভেন্টরি ইঞ্জিন',
      phaseSubtitle_en: 'Day 26 to 50: Database tables, product barcode lookups, and fast offline searching.',
      phaseSubtitle_bn: '২৬ থেকে ৫০ দিন: এসকিউলাইট টেবিল, বারকোড রিড করা ও শূন্য লেটেন্সিতে স্টক খোঁজা।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-sqlite-inventory',
          title_en: 'Embedded SQLite Tables and Fast Stock Lookups',
          title_bn: 'এসকিউলাইট ডেটাবেস ও দ্রুত প্রোডাক্ট সার্চ',
          description_en: 'better-sqlite3 synchronous database access, ACID transactions, table indexing, and calculating total stock value.',
          description_bn: 'বেটার-এসকিউলাইট দিয়ে ডেটাবেস রিড-রাইট, স্টক কাউন্টার এবং লাভ-ক্ষতি স্বয়ংক্রিয় হিসাব করা।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['better-sqlite3 queries', 'Database schema migrations', 'Indexing barcode and SKU columns'],
          practicalTask_en: 'Create a pharmacy medicine inventory desktop app where searching by generic name shows stock levels in under 10ms.',
          practicalTask_bn: 'একটি ফার্মেসি ইনভেন্টরি সফটওয়্যার বানাও যা ওষুধের নাম লিখলেই চোখের পলকে বর্তমান স্টক ও দাম প্রদর্শন করবে।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: Hardware Interfacing and Thermal Receipt Printing',
      phaseTitle_bn: 'তৃতীয় পর্ব: থার্মাল প্রিন্টার ইন্টিগ্রেশন ও রিসিট জেনারেশন',
      phaseSubtitle_en: 'Day 51 to 75: Connecting USB receipt printers, barcode readers, and automated PDF export.',
      phaseSubtitle_bn: '৫১ থেকে ৭৫ দিন: ইউএসবি থার্মাল প্রিন্টারে মেমো পাঠানো, বারকোড ইনপুট ও পিডিএফ ইনভয়েস তৈরি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-thermal-hardware-print',
          title_en: 'ESC/POS Printer Communication and Silent Printing',
          title_bn: 'থার্মাল প্রিন্টার কমান্ড ও ক্যাশ মেমো প্রিন্ট',
          description_en: 'node-printer, webview silent printing, ESC/POS byte sequences for cut paper and bold text, and invoice layouts.',
          description_bn: 'সফটওয়্যার থেকে সরাসরি থার্মাল প্রিন্টারে কমান্ড পাঠিয়ে গ্রাহকের রিসিট ও ক্যাশ মেমো প্রিন্ট করা।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Silent printing without dialogs', 'ESC/POS paper cut commands', 'Formatting 58mm/80mm receipt templates'],
          practicalTask_en: 'Integrate automated receipt printing that outputs a formatted supermarket bill with itemized VAT and totals.',
          practicalTask_bn: 'একটি পিওএস বিলিং কাউন্টার বানাও যা সেল বাটন চাপামাত্রই প্রিন্টারে ক্যাশ মেমো প্রিন্ট করে দেবে।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: Installer Packaging, Tauri Compilation and Client Delivery',
      phaseTitle_bn: 'চতুর্থ পর্ব: সেটআপ ফাইল (.exe) প্যাকেজিং ও বাণিজ্যিক রিলিজ',
      phaseSubtitle_en: 'Day 76 to 90: Electron Builder, Inno Setup, lightweight Tauri conversion, and deployment to clients.',
      phaseSubtitle_bn: '৭৬ থেকে ৯০ দিন: সেটআপ ফাইল তৈরি, আইকন সেট করা ও দোকানে সফটওয়্যার ইনস্টল দেওয়ার নিয়ম।',
      durationWeeks: 2,
      modules: [
        {
          id: 'mod-installer-packaging',
          title_en: 'Electron Builder, Auto-Updates and Commercial Release',
          title_bn: 'ইনস্টলার প্যাকেজিং ও কমার্শিয়াল ডেলিভারি',
          description_en: 'Building setup.exe installers, embedding SQLite database defaults, desktop shortcuts, and database backup routines.',
          description_bn: 'ইনস্টলার ফাইল তৈরি, ডেস্কটপ আইকন এবং দোকানদারের অসাবধানতায় ডেটা ডিলিট হওয়া ঠেকাতে অটো ব্যাকআপ।',
          estimatedDays: 10,
          mobileAccessible: false,
          keyTopics: ['electron-builder configurations', 'Automatic daily database backup script', 'Inno Setup custom installers'],
          practicalTask_en: 'Generate a production .exe installer for your supermarket POS software that installs on any standard Windows PC with 1 click.',
          practicalTask_bn: 'তোমার তৈরি করা পিওএস সফটওয়্যারটির একটি প্রফেশনাল সেটআপ ফাইল তৈরি করো যা যেকোনো উইন্ডোজ পিসিতে অনায়াসে ইনস্টল করা যায়।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'desktop-q1',
      question_en: 'How do you securely handle communication between the Electron renderer UI and Node.js backend without introducing remote code execution vulnerabilities?',
      question_bn: 'ইলেকট্রন অ্যাপে রেন্ডারার (ফ্রন্টএন্ড) এবং নোড.জেএস ব্যাকএন্ডের মধ্যে কোড এক্সিকিউশন রিস্ক ছাড়া কীভাবে নিরাপদ কমিউনিকেশন করতে হয়?',
      category: 'Desktop Security Architecture',
      whyAsked_en: 'Critical technical question assessing security knowledge in desktop software using web frameworks.',
      whyAsked_bn: 'ডেস্কটপ সফটওয়্যারের ইন্টারভিউয়ের প্রধান নিরাপত্তা প্রশ্ন যা প্রার্থীর সিস্টেম হ্যাক হওয়া ঠেকানোর সক্ষমতা প্রমাণ করে।',
      howToAnswer_en: 'In modern Electron security best practices, nodeIntegration must be strictly set to false and contextIsolation must be set to true in webPreferences. Direct Node.js access must never be exposed to the renderer UI. Instead, communication must be routed strictly through a preload.js script using contextBridge.exposeInMainWorld to expose only explicit, safe, curated asynchronous functions that invoke ipcRenderer.invoke(). The main process validates all input arguments before executing file system or database operations, completely shielding the host operating system from rogue scripts or malicious web views.',
      howToAnswer_bn: 'ইলেকট্রনের আধুনিক সিকিউরিটি স্ট্যান্ডার্ড অনুযায়ী ওয়েব প্রিফারেন্সে nodeIntegration অবশ্যই false এবং contextIsolation অবশ্যই true রাখতে হবে। রেন্ডারার বা ফ্রন্টএন্ড থেকে সরাসরি অপারেটিং সিস্টেমের নোড.জেএস এপিআই অ্যাক্সেস করতে দেওয়া সম্পূর্ণ নিষিদ্ধ। এর পরিবর্তে preload.js স্ক্রিপ্ট লিখে contextBridge.exposeInMainWorld এর মাধ্যমে শুধুমাত্র নির্দিষ্ট কয়েকটি নিরাপদ ফাংশন ফ্রন্টএন্ডে এক্সপোজ করতে হবে যা ipcRenderer.invoke দিয়ে বার্তা পাঠায়। মেইন প্রসেসে প্রতিটি ইনপুট ডেটা ভ্যালিডেট করে তবেই ডেটাবেস বা ফাইলে অ্যাক্সেস দেওয়া হয়, যাতে কোনো ম্যালিসিয়াস কোড কম্পিউটার হ্যাক করতে না পারে।',
      commonMistakes_en: 'Enabling nodeIntegration: true in production, allowing any injected JavaScript or external web view to execute terminal shell commands.',
      commonMistakes_bn: 'প্রোডাকশন অ্যাপে nodeIntegration: true রেখে দেওয়া, যার ফলে সিস্টেমে অনায়াসে হ্যাকিং হতে পারে।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-electron-foundations',
      title_en: 'Official Electron.js Desktop Engineering Documentation Credential',
      title_bn: 'ইলেকট্রন.জেএস অফিশিয়াল গাইড ও টিউটোরিয়াল ট্র্যাক',
      provider: 'OpenJS Foundation & Electron Project',
      url: 'https://www.electronjs.org/docs/latest/tutorial/quick-start',
      mobileAccessible: true,
      language: 'en',
      durationHours: 15,
      cost: '100% Free',
      relevance_en: 'Official architectural reference maintained by the OpenJS Foundation.',
      relevance_bn: 'ওপেনজেএস ফাউন্ডেশন ও ইলেকট্রন কোরের অফিশিয়াল আর্কিটেকচারাল ট্রেনিং ও গাইড।'
    }
  ]
};
