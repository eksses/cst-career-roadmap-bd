import type { CareerTrack } from '../../../shared/types.js';

export const ispMikrotikNetworkingTrack: Omit<CareerTrack, 'id'> = {
  slug: 'isp-mikrotik-networking',
  title_en: 'ISP, MikroTik and Network Administration',
  title_bn: 'আইএসপি, মাইক্রোটিক ও নেটওয়ার্ক অ্যাডমিনিস্ট্রেশন',
  summary_en: 'Specialized track focused on local internet service provider infrastructure, MikroTik RouterOS, optical fiber, IP routing, bandwidth management, and enterprise local area networks.',
  summary_bn: 'বাংলাদেশের লোকাল ইন্টারনেট সার্ভিস প্রোভাইডার (আইএসপি), অপটিক্যাল ফাইবার, মাইক্রোটিক রাউটারওএস, আইপি সাবনেটিং এবং কর্পোরেট নেটওয়ার্ক ব্যবস্থাপনার ব্যবহারিক ট্র্যাক।',
  pivotAdvice_en: 'This is the number one employer of polytechnic CST diploma graduates in Bangladesh. If you prefer physical routers, switches, and hands-on networking over writing lines of code, this track guarantees fast local job placement.',
  pivotAdvice_bn: 'বাংলাদেশে পলিটেকনিক ডিপ্লোমা গ্র্যাজুয়েটদের জন্য এটি সর্বোচ্চ কর্মসংস্থানের ক্ষেত্র। তুমি যদি কোডিংয়ের চেয়ে ফিজিক্যাল রাউটার, সুইচ ও নেটওয়ার্ক ট্রাবলশুটিংয়ে বেশি আনন্দ পাও, তবে এই ট্র্যাকটি তোমার দ্রুত চাকরির সেরা নিশ্চয়তা।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Configuring MikroTik RouterOS for PPPoE server, queues, and bandwidth management.',
    'Splicing optical fiber, testing signal loss with optical power meters, and patching ODF racks.',
    'Assigning IPv4 subnets, configuring VLANs, and isolating broadcast domains on managed switches.',
    'Troubleshooting packet loss, latency spikes, and gateway disconnects for corporate and residential clients.',
    'Setting up network monitoring tools (The Dude, PRTG, Zabbix) to detect line cuts instantly.'
  ],
  dayToDay_bn: [
    'মাইক্রোটিক রাউটারওএস-এ পিপিপিওই (PPPoE) সার্ভার ও ব্যান্ডউইথ কিউ কনফিগারেশন করা।',
    'অপটিক্যাল ফাইবার স্প্লাইসিং, পাওয়ার মিটার দিয়ে সিগন্যাল লস মাপা ও ওডিএফ ক্যাবিনেট ওয়্যারিং।',
    'ম্যানেজড সুইচে ভি-ল্যান (VLAN) তৈরি করা ও আইপি সাবনেটিং হিসাব করে ক্লায়েন্টদের সংযোগ দেওয়া।',
    'ইন্টারনেট ধীরগতি, প্যাকেট লস ও লাইন ড্রপের কারণ চিহ্নিত করে তাৎক্ষণিক সমাধান দেওয়া।',
    'পিআরটিজি (PRTG) বা দ্য ডুড (The Dude) মনিটরিং টুলের মাধ্যমে ফাইবার ব্রেক বা লিংক ডাউন অ্যালার্ট পর্যবেক্ষণ।'
  ],
  mustHaveSkills: [
    {
      id: 'mikrotik-routeros',
      name: 'MikroTik RouterOS and Winbox',
      category: 'Routing',
      importance: 'Essential',
      description_en: 'Configuring NAT, firewall filter rules, simple queues, and PPPoE authentication via Winbox.',
      description_bn: 'উইনবক্স দিয়ে মাইক্রোটিক রাউটারে ফায়ারওয়াল, ন্যাট, ব্যান্ডউইথ লিমিট ও পিপিপিওই কনফিগার।'
    },
    {
      id: 'ipv4-subnetting',
      name: 'IPv4 Addressing and VLSM Subnetting',
      category: 'Networking Core',
      importance: 'Essential',
      description_en: 'Calculating network IDs, broadcast IDs, usable hosts, and CIDR prefixes (/24 to /30) without a calculator.',
      description_bn: 'হাতে-কলমে আইপি সাবনেট হিসাব করা, নেটওয়ার্ক ও ব্রডকাস্ট আইপি নির্ধারণ এবং সিআইডিআর প্রেফিক্স।'
    },
    {
      id: 'fiber-optics-ftth',
      name: 'Fiber Optic FTTH and Splicing Basics',
      category: 'Physical Infrastructure',
      importance: 'Essential',
      description_en: 'Understanding single-mode fiber, optical splitters, PON technologies, and optical power measurement in dBm.',
      description_bn: 'সিঙ্গেল মোড অপটিক্যাল ফাইবার, স্প্লিটার, ওএলটি/ওএনইউ ও ডিবিএম পাওয়ার মিটারের ব্যবহার।'
    },
    {
      id: 'vlan-switching',
      name: 'Managed Switches and 802.1Q VLANs',
      category: 'Switching',
      importance: 'Essential',
      description_en: 'Trunk ports, access ports, and segmenting traffic between departments or client tiers.',
      description_bn: 'ট্রাঙ্ক ও এক্সেস পোর্ট কনফিগারেশন এবং বিভিন্ন ডিপার্টমেন্টের ট্রাফিক আলাদা করতে ভি-ল্যান।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka, Chattogram, Divisional and District Hubs',
      entrySalary: { min: 14000, max: 24000, currency: 'BDT', formatted: '14,000 - 24,000 BDT' },
      midSalary: { min: 28000, max: 50000, currency: 'BDT', formatted: '28,000 - 50,000 BDT' },
      seniorSalary: { min: 55000, max: 95000, currency: 'BDT', formatted: '55,000 - 95,000 BDT' },
      hiringSectors: [
        'Nationwide ISPs (Link3, Carnival, Amber IT, Dot Internet, Circle Network)',
        'Garments and Textile Industrial Zones (Gazipur, Ashulia, Narayanganj)',
        'Corporate Head Offices, Banks, and Commercial Data Centers',
        'Local Area Cable and Sub-ISP Franchises'
      ],
      cvExpectations: [
        'Practical knowledge of MikroTik RouterOS and Winbox interface',
        'Clear understanding of IPv4 subnetting and default gateways',
        'Willingness for physical field troubleshooting and on-call rotation',
        'Diploma in CST or Electrical Engineering from BTEB'
      ],
      localDemandSummary_en: 'High constant demand across Bangladesh. Every garment factory, corporate building, and local ISP needs network support executives to keep optical lines and MikroTik bandwidth running 24/7.',
      localDemandSummary_bn: 'সারা দেশে নিয়মিত উচ্চ চাহিদা। গাজীপুর-আশুলিয়ার শত শত গার্মেন্টস ফ্যাক্টরি, কর্পোরেট অফিস ও আইএসপিতে নেটওয়ার্ক সচল রাখতে ডিপ্লোমা ইঞ্জিনিয়ারদের সবসময় অগ্রাধিকার দেওয়া হয়।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'United Arab Emirates, Saudi Arabia and Qatar',
        countryName_bn: 'সংযুক্ত আরব আমিরাত, সৌদি আরব ও কাতার',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ',
        visaReality_en: 'High demand for network cabling technicians, telecom riggers, and CCTV field engineers with CCNA or MTCNA certificates.',
        visaReality_bn: 'সিসিএনএ বা এমটিসিএনএ সনদ এবং ফিল্ড কাজের অভিজ্ঞতা থাকলে টেলিকম ও নেটওয়ার্ক টেকনিশিয়ান হিসেবে প্রচুর ভিসা পাওয়া যায়।',
        averageSalaryUsdOrLocal: '3,000 - 5,500 AED (approx 95,000 - 175,000 BDT)',
        requiredExperienceYears: '2 to 3 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি',
      monthlyRangeUsd: '$400 - $1,200 / month',
      competitionLevel: 'Moderate for specialized MikroTik / pfSense consultancy',
      competitionLevel_bn: 'মাইক্রোটিক ও পিএফসেন্স রিমোট কনফিগারেশনে মাঝারি প্রতিযোগিতা',
      englishRequirement: 'Good written English to understand ticket descriptions and network diagrams',
      englishRequirement_bn: 'টিকিট সমাধান ও নেটওয়ার্ক ডায়াগ্রাম বোঝার জন্য ভালো লিখিত ইংরেজি দরকার',
      realities_en: [
        'Remote routers can be configured via VPN or AnyDesk from home',
        'Small businesses in the US and Europe hire remote engineers to set up firewall rules',
        'Certifications like MikroTik MTCNA or Cisco CCNA validate your authority'
      ],
      realities_bn: [
        'ঘরে বসেই ভিপিএন বা এনিডেস্ক দিয়ে আন্তর্জাতিক ক্লায়েন্টের রাউটার কনফিগার করা সম্ভব',
        'ইউরোপ-আমেরিকার ছোট ব্যবসা প্রতিষ্ঠান রিমোট ফায়ারওয়াল কনফিগারেশনের জন্য কাজ দেয়',
        'মাইক্রোটিক এমটিসিএনএ বা সিসকো সিসিএনএ সনদ থাকলে কাজ পাওয়ার সম্ভাবনা বহুগুণ বাড়ে'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Networking Fundamentals and Subnetting Math',
      phaseTitle_bn: 'প্রথম পর্ব: নেটওয়ার্কিংয়ের ভিত্তি ও সাবনেটিং গণিত',
      phaseSubtitle_en: 'Day 1 to 20: OSI model, TCP/IP, Ethernet cabling, and IPv4 mastery.',
      phaseSubtitle_bn: '১ থেকে ২০ দিন: ওএসআই মডেল, টিসিপি/আইপি, ক্যাট৬ ক্যাবলিং ও আইপিসাবনেটিং।',
      durationWeeks: 3,
      modules: [
        {
          id: 'mod-osi-tcp',
          title_en: 'OSI 7 Layers and Real-World Protocol Mapping',
          title_bn: 'ওএসআই ৭ লেয়ার এবং বাস্তব প্রোটোকল ম্যাপিং',
          description_en: 'Physical cables to HTTP requests: understand what happens at each layer without theoretical rote learning.',
          description_bn: 'ফিজিক্যাল তার থেকে শুরু করে ব্রাউজারের ডেটা রিকোয়েস্ট পর্যন্ত প্রতিটি লেয়ারের বাস্তব কাজ।',
          estimatedDays: 6,
          mobileAccessible: true,
          keyTopics: ['Layer 1 to Layer 7 functions', 'MAC address vs IP address', 'ARP protocol mechanism'],
          practicalTask_en: 'Explain the journey of a WhatsApp message through all 7 OSI layers in simple Bangla.',
          practicalTask_bn: 'একটি হোয়াটসঅ্যাপ মেসেজ কীভাবে ওএসআই ৭ লেয়ার পার হয়ে রিসিভারের কাছে যায় তা খাতায় লিখ।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: MikroTik RouterOS and Bandwidth Control',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: মাইক্রোটিক রাউটারওএস ও ব্যান্ডউইথ ম্যানেজমেন্ট',
      phaseSubtitle_en: 'Day 21 to 50: Winbox, PPPoE server, NAT, simple queues, and firewalls.',
      phaseSubtitle_bn: '২১ থেকে ৫০ দিন: উইনবক্স, পিপিপিওই সার্ভার, ন্যাট, কিউ এবং ফায়ারওয়াল রুলস।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-mikrotik-setup',
          title_en: 'Initial RouterOS Setup and Winbox Discovery',
          title_bn: 'মাইক্রোটিক রাউটারওএস ও উইনবক্স সংযোগ',
          description_en: 'Connecting via MAC Winbox, upgrading RouterOS firmware, setting admin credentials, and interface naming.',
          description_bn: 'ম্যাক উইনবক্স দিয়ে প্রথমবার লগইন, ফার্মওয়্যার আপডেট ও ইন্টারফেস রিনেম করা।',
          estimatedDays: 6,
          mobileAccessible: false,
          keyTopics: ['Winbox discovery', 'Default configuration removal', 'IP address assignment to ether ports'],
          practicalTask_en: 'Configure a MikroTik router so ether1 is WAN (DHCP client) and ether2 is LAN with a custom pool.',
          practicalTask_bn: 'মাইক্রোটিকে ইথার১-এ ডব্লিউএএন এবং ইথার২-এ লোকাল ল্যান পুল কনফিগার করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: Optical Fiber, FTTH, and Managed Switches',
      phaseTitle_bn: 'তৃতীয় পর্ব: অপটিক্যাল ফাইবার, এফটিটিএইচ ও ভি-ল্যান সুইচিং',
      phaseSubtitle_en: 'Day 51 to 75: Splicing, OLT/ONU, optical splitters, and managed VLANs.',
      phaseSubtitle_bn: '৫১ থেকে ৭৫ দিন: ফাইবার স্প্লাইসিং, ওএলটি/ওএনইউ কনফিগারেশন ও ভি-ল্যান নেটওয়ার্ক।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-fiber-splicing',
          title_en: 'Fiber Splicing and Power Meter Reading',
          title_bn: 'ফাইবার স্প্লাইসিং ও অপটিক্যাল পাওয়ার মিটার রিডিং',
          description_en: 'Core alignment fusion slicer operation, cleaver handling, heat shrink sleeves, and reading -18 to -24 dBm.',
          description_bn: 'ফিউশন স্প্লাইসার দিয়ে ফাইবার জোড়া দেওয়া এবং অপটিক্যাল পাওয়ার মিটার দিয়ে সিগন্যাল মাপা।',
          estimatedDays: 8,
          mobileAccessible: false,
          keyTopics: ['Fiber cleaving angle', 'Acceptable dBm attenuation ranges', 'Patch cord types (SC-APC, SC-UPC)'],
          practicalTask_en: 'Perform a real fusion splice test and verify optical loss stays below 0.05 dB.',
          practicalTask_bn: 'স্প্লাইসিং মেশিনে ফাইবার ক্লিনার ও ক্লিভার দিয়ে সূক্ষ্মভাবে জোড়া লাগাও এবং লস ০.০৫ ডিবির নিচে রাখো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: ISP Network Operations and Interview Readiness',
      phaseTitle_bn: 'চতুর্থ পর্ব: আইএসপি নক অপারেশনস ও ইন্টারভিউ প্রস্তুতি',
      phaseSubtitle_en: 'Day 76 to 90: PRTG monitoring, backup scripts, and mock interviews.',
      phaseSubtitle_bn: '৭৬ থেকে ৯০ দিন: নেটওয়ার্ক মনিটরিং টুলস, রাউটার ব্যাকআপ ও আইএসপি ইন্টারভিউ প্রস্তুতি।',
      durationWeeks: 2,
      modules: [
        {
          id: 'mod-monitoring-backup',
          title_en: 'Network Monitoring and Automated RouterOS Backups',
          title_bn: 'নেটওয়ার্ক মনিটরিং ও স্বয়ংক্রিয় ব্যাকআপ স্ক্রিপ্ট',
          description_en: 'Setting up PRTG / The Dude for SNMP polling and creating automated email export scripts.',
          description_bn: 'এসএনএমপি দিয়ে লিংক মনিটরিং এবং মাইক্রোটিকের রানিং কনফিগ নিয়মিত ব্যাকআপ রাখার নিয়ম।',
          estimatedDays: 6,
          mobileAccessible: false,
          keyTopics: ['SNMP v2c configuration', 'MikroTik scheduler and script', '/export file=backup.rsc'],
          practicalTask_en: 'Write a MikroTik script that generates an hourly configuration export file automatically.',
          practicalTask_bn: 'মাইক্রোটিকে একটি শিডিউলার স্ক্রিপ্ট তৈরি করো যা নির্দিষ্ট সময়ে ব্যাকআপ ফাইল সেভ করবে।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'isp-q1',
      question_en: 'A customer reports their internet is disconnected. Walk me through your diagnostic steps.',
      question_bn: 'একজন গ্রাহক জানালেন তার ইন্টারনেট সংযোগ বিচ্ছিন্ন। তোমার সমাধানের পদক্ষেপগুলো ক্রমানুসারে বলো।',
      category: 'Diagnostic Process',
      whyAsked_en: 'Evaluates if the engineer starts with physical layer checks before blaming the core server.',
      whyAsked_bn: 'ইঞ্জিনিয়ার সমস্যাটি নিচ থেকে (লেয়ার ১) শুরু করে সিস্টেমেটিক্যালি সমাধান করে কিনা তা দেখতে।',
      howToAnswer_en: '1) Check ONU PON/LOS LED: if LOS red light blinks, there is an optical fiber break. 2) If PON is steady green, verify LAN cable link light to the router. 3) Ping customer router gateway. 4) Check MikroTik PPPoE active connections to see if user is authenticated or dropped with an error code.',
      howToAnswer_bn: '১) ওএনইউ-এর পিওএন ও এলওএস বাতি দেখব। এলওএস লাল বাতি জ্বললে ফাইবার কাটা। ২) পিওএন সবুজ থাকলে রাউটারের সাথে ল্যান ক্যাবল চেক করব। ৩) কাস্টমার রাউটারের আইপি পিং করব। ৪) মাইক্রোটিকে পিপিওপই কানেকশন লগে দেখব সংযোগের এরর কী দেখাচ্ছে।',
      commonMistakes_en: 'Telling the client to reboot their computer without verifying whether the fiber link is alive.',
      commonMistakes_bn: 'ফাইবার সিগন্যাল চেক না করেই রাউটার রিসেট দিতে বলা।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-cisco-networking-basics',
      title_en: 'Cisco Networking Academy: Networking Basics',
      title_bn: 'সিসকো নেটওয়ার্কিং একাডেমি: নেটওয়ার্কিং বেসিকস',
      provider: 'Cisco Networking Academy',
      url: 'https://www.netacad.com/courses/networking/networking-basics',
      mobileAccessible: true,
      language: 'en',
      durationHours: 25,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Global industry-standard foundational certification covering OSI, IP protocols, and local networks.',
      relevance_bn: 'বিশ্বজুড়ে সমাদৃত সিসকো নেটঅ্যাকাডের ফ্রি সার্টিফিকেট যা সিভিতে দারুণ গ্রহণযোগ্য।'
    },
    {
      id: 'cert-cisco-packet-tracer',
      title_en: 'Cisco Packet Tracer Network Simulation Badge',
      title_bn: 'সিসকো প্যাকেট ট্রেসার সিমুলেশন অফিশিয়াল ডিজিটাল ব্যাজ',
      provider: 'Cisco Networking Academy',
      url: 'https://www.netacad.com/courses/packet-tracer',
      mobileAccessible: true,
      language: 'en',
      durationHours: 15,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Proves practical ability to design, configure, and troubleshoot virtual network topologies.',
      relevance_bn: 'ভার্চুয়াল রাউটার ও সুইচ কনফিগারেশনের প্রমাণপত্র যা লোকাল আইএসপি ইন্টারভিউতে বড় প্লাস পয়েন্ট।'
    },
    {
      id: 'cert-mikrotik-lab-bd',
      title_en: 'MikroTik RouterOS WinBox Lab Practice Credential',
      title_bn: 'মাইক্রোটিক রাউটারওএস ও উইনবক্স ল্যাব প্র্যাকটিস সনদ',
      provider: 'MikroTik Training Partner BD',
      url: 'https://mikrotik.com/training',
      mobileAccessible: false,
      language: 'both',
      durationHours: 30,
      cost: 'Free Polytechnic Practice',
      isBdLocal: true,
      category: 'bd_national',
      relevance_en: 'Essential certification for entry-level NOC engineers and local ISP support technicians in Bangladesh.',
      relevance_bn: 'বাংলাদেশের লোকাল আইএসপি ও এনওসি ইঞ্জিনিয়ার পদে আবেদনের জন্য সবচেয়ে গুরুত্বপূর্ণ প্র্যাকটিক্যাল দক্ষতা।'
    },
    {
      id: 'cert-bteb-telecom-attachment',
      title_en: 'BTEB Industrial Attachment: ISP & Network Administration',
      title_bn: 'বিটিইবি ইন্ডাস্ট্রিয়াল ট্রেনিং: আইএসপি ও নেটওয়ার্ক অ্যাডমিনিস্ট্রেশন',
      provider: 'BTEB & Local ISP Partners',
      url: 'http://www.bteb.gov.bd/',
      mobileAccessible: false,
      language: 'bn',
      durationHours: 120,
      cost: 'Polytechnic Mandated',
      isBdLocal: true,
      category: 'bd_national',
      relevance_en: '8th semester mandatory industrial attachment with accredited telecom providers in Dhaka and Chattogram.',
      relevance_bn: 'পলিটেকনিকের ৮ম পর্বের বাধ্যতামূলক ইন্ডাস্ট্রিয়াল অ্যাটাচমেন্ট যা সরাসরি চাকরিতে প্রবেশের প্রধান সনদ।'
    }
  ]
};
