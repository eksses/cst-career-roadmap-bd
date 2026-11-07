import type { CareerTrack } from '../../../shared/types.js';

export const ispMikrotikNetworkingTrack: Omit<CareerTrack, 'id'> = {
  slug: 'isp-mikrotik-networking',
  title_en: 'ISP, MikroTik RouterOS v7 & Core Network Engineering (2026 Edition)',
  title_bn: 'আইএসপি, মাইক্রোটিক রাউটারওএস ৭ ও কোর নেটওয়ার্ক ইঞ্জিনিয়ারিং (২০২৬ এডিশন)',
  summary_en: 'Calibrated for late 2026. Master MikroTik RouterOS v7.15+, mandatory BTRC IPv6 dual-stack rollout, BGP multihoming with BDIX peering, OSPF dynamic routing, GPON FTTH OLTs, and automated network telemetry with Zabbix.',
  summary_bn: '২০২৬ সালের আধুনিক আইএসপি ও টেলিকম নেটওয়ার্কিং। মাইক্রোটিক রাউটারওএস ৭, বিটিআরসি বাধ্যতামূলক আইপিভি৬ ডুয়াল-স্ট্যাক, বিডিক্স (BDIX) পিয়ারিং সহ বিজিপি রাউটিং, অপটিক্যাল জিপন ওএলটি এবং জ্যাবরিক্স মনিটরিং।',
  pivotAdvice_en: 'This remains the single largest employer of polytechnic CST diploma graduates across Bangladesh. If you prefer physical network switches, optical fiber equipment, and hands-on hardware configuration over writing lines of code, this track guarantees rapid employment in every district and divisional town.',
  pivotAdvice_bn: 'বাংলাদেশে পলিটেকনিক ডিপ্লোমা গ্র্যাজুয়েটদের জন্য এটি দেশের সর্ববৃহৎ কর্মসংস্থানের ক্ষেত্র। তুমি যদি কোডিংয়ের চেয়ে ফিজিক্যাল রাউটার, সুইচ, অপটিক্যাল ফাইবার ও নেটওয়ার্ক কনফিগারেশন পছন্দ করো, তবে এই ট্র্যাকটি তোমার দ্রুত চাকরির সেরা নিশ্চয়তা। জেলা ও বিভাগীয় সব শহরে এর ব্যাপক চাহিদা।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Configuring MikroTik RouterOS v7 for PPPoE servers, Queue Trees, and Per Connection Queue (PCQ) traffic shaping.',
    'Implementing BTRC-mandated IPv6 dual-stack prefix delegation (/56 and /64) alongside IPv4 CGNAT.',
    'Splicing optical fibers, testing attenuation with OTDR and Optical Power Meters, and managing OLT GPON ports.',
    'Configuring BGP peering with national internet exchanges (BDIX) and upstream International Internet Gateways (IIG).',
    'Monitoring fiber link cuts, latency, and packet drops in real-time using Zabbix and PRTG Network Monitor.'
  ],
  dayToDay_bn: [
    'মাইক্রোটিক রাউটারওএস ৭ দিয়ে পিপিপিওই সার্ভার, কিউ ট্রি ও পিসিকিউ (PCQ) ব্যান্ডউইথ নিয়ন্ত্রণ করা।',
    'বিটিআরসির বাধ্যতামূলক নির্দেশনা অনুযায়ী গ্রাহকদের আইপিভি৬ (IPv6) ডুয়াল-স্ট্যাক ও আইপিভি৪ সিজিনাট প্রদান।',
    'অপটিক্যাল ফাইবার স্প্লাইসিং, ওটিডিআর (OTDR) দিয়ে ব্রেক নির্ণয় ও জিপন ওএলটি (OLT) কনফিগারেশন।',
    'বিডিক্স (BDIX) লোকাল পিয়ারিং এবং আপস্ট্রিম আইআইজি (IIG) এর সাথে বিজিপি (BGP) রাউটিং পরিচালনা।',
    'জ্যাবরিক্স ও পিআরটিজি মনিটরিং দিয়ে ফাইবার কাটা পড়া বা লিংক ডাউন রিয়েল-টাইমে অ্যালার্ট দেখা ও সমাধান করা।'
  ],
  mustHaveSkills: [
    {
      id: 'mikrotik-routeros-v7',
      name: 'MikroTik RouterOS v7 & Winbox',
      category: 'Routing Core',
      importance: 'Essential',
      description_en: 'RouterOS v7 routing filters, fastpath, hardware offloading, firewall mangle, and PPPoE authentication.',
      description_bn: 'উইনবক্স দিয়ে রাউটারওএস ৭ পরিচালনা, ফায়ারওয়াল ম্যাংগল, হার্ডওয়্যার অফলোডিং ও পিপিপিওই সার্ভার।'
    },
    {
      id: 'ipv6-dual-stack-btrc',
      name: 'IPv4 Subnetting & Mandatory IPv6 Dual-Stack',
      category: 'IP Addressing',
      importance: 'Essential',
      description_en: 'VLSM calculation, IPv6 prefix delegation (/48, /56, /64), SLAAC vs DHCPv6, and CGNAT compliance.',
      description_bn: 'হাতে-কলমে আইপি সাবনেটিং এবং বিটিআরসির সরকারি নিয়মানুযায়ী আইপিভি৬ ডুয়াল-স্ট্যাক রোলআউট।'
    },
    {
      id: 'bgp-bdix-peering',
      name: 'BGP Routing & BDIX Local Peering',
      category: 'Core ISP Routing',
      importance: 'Essential',
      description_en: 'Autonomous System Numbers (ASN), eBGP vs iBGP, BGP route filters, and low-latency BDIX routing.',
      description_bn: 'স্বতন্ত্র এএসএন (ASN), বিজিপি রাউটিং এবং দেশের অভ্যন্তরে দ্রুতগতির বিডিক্স পিয়ারিং কনফিগারেশন।'
    },
    {
      id: 'gpon-ftth-optical',
      name: 'FTTH GPON Architecture & OLT/ONU Management',
      category: 'Optical Infrastructure',
      importance: 'Essential',
      description_en: 'Optical line terminals (OLT), optical network units (ONU), optical splitters (1:8, 1:16), and dBm power margins.',
      description_bn: 'জিপন ওএলটি কনফিগারেশন, অপটিক্যাল স্প্লিটার হিসাব এবং ডিবিএম পাওয়ার মিটার দিয়ে সিগন্যাল যাচাই।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka, Chattogram, Divisional Headquarters and all 64 District Towns',
      entrySalary: { min: 18000, max: 30000, currency: 'BDT', formatted: '18,000 - 30,000 BDT' },
      midSalary: { min: 35000, max: 65000, currency: 'BDT', formatted: '35,000 - 65,000 BDT' },
      seniorSalary: { min: 70000, max: 130000, currency: 'BDT', formatted: '70,000 - 130,000 BDT' },
      hiringSectors: [
        'Nationwide Category-A ISPs (Link3, Carnival, Amber IT, Dot Internet, Circle Network, Carnival)',
        'International Internet Gateways (IIG) and Nationwide Telecommunication Transmission Networks (NTTN: Summit, Fiber@Home)',
        'Garments & Industrial Conglomerates (Narayanganj, Gazipur, Savar, Chattogram EPZ)',
        'Commercial Banks, Government District Data Centers & Sub-ISPs'
      ],
      cvExpectations: [
        'Hands-on comfort with MikroTik Winbox interface and RouterOS v7 CLI commands',
        'Demonstrable ability to calculate IPv4 VLSM subnets and explain IPv6 prefix delegation',
        'Experience with optical power testing and basic fiber splicing techniques',
        'Diploma in CST with enthusiasm for physical networking infrastructure'
      ],
      localDemandSummary_en: 'The rollout of fiber broadband and smart infrastructure across all 64 districts in Bangladesh has created continuous demand for network engineers. CST diploma graduates with MikroTik and IPv6 skills find immediate employment near their hometowns with steady career advancement into core routing.',
      localDemandSummary_bn: 'সারাদেশে ব্রডব্যান্ড ইন্টারনেটের বিস্তারের ফলে সকল জেলা ও উপজেলায় নেটওয়ার্ক ইঞ্জিনিয়ারদের নিয়মিত কর্মসংস্থান তৈরি হচ্ছে। মাইক্রোটিক ও অপটিক্যাল ফাইবার জানা ডিপ্লোমা শিক্ষার্থীদের জন্য এটি নিজের এলাকায় সম্মানজনক চাকরির সবচেয়ে বড় সুযোগ।'
    },
    targetCountries: [
      {
        region: 'Middle East',
        countryName_en: 'United Arab Emirates, Saudi Arabia & Oman',
        countryName_bn: 'সংযুক্ত আরব আমিরাত, সৌদি আরব ও ওমান',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Telecom operators (Etisalat, Du, STC) hire certified network technicians and fiber specialists under skilled work visas.',
        visaReality_bn: 'উপসাগরীয় অঞ্চলের টেলিকম কোম্পানিতে সার্টিফাইড নেটওয়ার্ক টেকনিশিয়ানদের নিয়মিত নিয়োগ দেওয়া হয়।',
        averageSalaryUsdOrLocal: '4,500 - 8,500 AED / month (approx 145,000 - 270,000 BDT)',
        requiredExperienceYears: '2 to 4 years'
      },
      {
        region: 'Southeast Asia',
        countryName_en: 'Malaysia & Brunei',
        countryName_bn: 'মালয়েশিয়া ও ব্রুনাই',
        demandLevel: 'Moderate',
        demandLevel_bn: 'মাঝারি চাহিদা',
        visaReality_en: 'Fiber transmission and ISP network administration roles open to experienced diploma holders.',
        visaReality_bn: 'ফাইবার অপটিক ও নেটওয়ার্ক অ্যাডমিনিস্ট্রেশনে অভিজ্ঞদের জন্য মালয়েশিয়ায় কাজের সুযোগ রয়েছে।',
        averageSalaryUsdOrLocal: '3,000 - 5,500 MYR / month',
        requiredExperienceYears: '2 to 3 years'
      }
    ],
    remote: {
      entryBarrier: 'Low',
      entryBarrier_bn: 'লোকাল জবই মূল প্রাধান্য; তবে রিমোট এনওসি সাপোর্ট সম্ভব',
      monthlyRangeUsd: '$500 - $1,800 USD',
      competitionLevel: 'Moderate',
      competitionLevel_bn: 'মাঝারি',
      englishRequirement: 'Basic technical English to read device documentation and communicate with international hardware support vendors',
      englishRequirement_bn: 'ডিভাইস ম্যানুয়াল পড়া ও টেকনিক্যাল রিপোর্ট লেখার মতো প্রয়োজনীয় ইংরেজি জ্ঞান',
      realities_en: [
        'Most ISP engineering jobs require physical presence at NOCs, data centers, or client premises.',
        'Remote Network Operations Center (NOC) monitoring roles exist for managing international VPN tunnels and MikroTik routers.'
      ],
      realities_bn: [
        'আইএসপি কাজের বেশিরভাগই ফিজিক্যাল সার্ভার রুম ও ফিল্ড লেভেলে কাজ করতে হয়।',
        'তবে বিভিন্ন বিদেশি প্রতিষ্ঠানের রিমোট এনওসি (NOC) রাউটার কনফিগারেশনের ঘরে বসে কাজের সুযোগও রয়েছে।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'IPv4 & BTRC-Mandatory IPv6 Subnetting & Network Fundamentals',
      phaseTitle_bn: 'আইপিভি৪ ও বিটিআরসি বাধ্যতামূলক আইপিভি৬ সাবনেটিং ও নেটওয়ার্ক ভিত্তি',
      phaseSubtitle_en: 'Calculate subnets manually, understand OSI layers, and master packet switching.',
      phaseSubtitle_bn: 'হাতে-কলমে আইপি সাবনেট হিসাব, ওএসআই লেয়ার ও প্যাকেট চলাচলের নিয়ম।',
      durationWeeks: 4,
      modules: [
        {
          id: 'isp-p1-m1',
          title_en: 'IPv4 Addressing, CIDR Prefixes & VLSM Calculations',
          title_bn: 'আইপিভি৪ অ্যাড্রেসিং, সিআইডিআর প্রেফিক্স ও ভিএলএসএম সাবনেটিং',
          description_en: 'Calculate network address, broadcast address, and usable IP ranges for /24 to /30 subnets in under 30 seconds without a digital calculator.',
          description_bn: 'ক্যালকুলেটর ছাড়া মাথায় মাথায় আইপি সাবনেট হিসাব করা, নেটওয়ার্ক ও ব্রডকাস্ট আইপি নির্ধারণ।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['CIDR Prefixes (/24, /28, /29, /30)', 'Subnet Masks & Magic Number', 'VLSM Variable Length Subnetting', 'Public vs Private RFC1918 Ranges'],
          practicalTask_en: 'Subnet a 192.168.10.0/24 network into 4 departments requiring 60, 30, 14, and 2 hosts with zero IP waste.',
          practicalTask_bn: 'একটি /২৪ নেটওয়ার্ককে ৪টি ডিপার্টমেন্টের প্রয়োজনীয় হোস্ট অনুযায়ী কোনো অপচয় ছাড়া সাবনেটিং করো।'
        },
        {
          id: 'isp-p1-m2',
          title_en: 'BTRC-Mandatory IPv6 Deployment & Prefix Delegation',
          title_bn: 'বিটিআরসি বাধ্যতামূলক আইপিভি৬ রোলআউট ও প্রেফিক্স ডেলিগেশন',
          description_en: 'Understand 128-bit IPv6 hexadecimal syntax, Link-Local (fe80::), Global Unicast (2000::/3), SLAAC stateless autoconfiguration, and DHCPv6 PD.',
          description_bn: '১২৮ বিটের আইপিভি৬ অ্যাড্রেস, লিংক-লোকাল এবং গ্রাহকদের /৫৬ ও /৬৪ আইপি দেওয়ার বিটিআরসি নির্দেশিকা।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['IPv6 Hexadecimal Rules', 'Link-Local vs Global Unicast', 'SLAAC vs DHCPv6 Prefix Delegation', 'Dual-Stack IPv4/IPv6 Setup'],
          practicalTask_en: 'Configure an IPv6 dual-stack interface assigning a global IPv6 address and advertising prefixes to local LAN hosts via SLAAC.',
          practicalTask_bn: 'একটি রাউটারে আইপিভি৬ ডুয়াল-স্ট্যাক কনফিগার করে লোকাল কম্পিউটারগুলোতে স্বয়ংক্রিয় আইপিভি৬ নিশ্চিত করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'MikroTik RouterOS v7 Core, Winbox, PPPoE & Queue Trees',
      phaseTitle_bn: 'মাইক্রোটিক রাউটারওএস ৭, উইনবক্স, পিপিপিওই ও কিউ ট্রি ব্যান্ডউইথ',
      phaseSubtitle_en: 'Deploy user authentication, fair-share queues, and firewall mangling.',
      phaseSubtitle_bn: 'পিপিপিওই ইউজার লগইন, ফেয়ার-শেয়ার কিউ ও ফায়ারওয়াল ম্যাংগল রুলস।',
      durationWeeks: 4,
      modules: [
        {
          id: 'isp-p2-m1',
          title_en: 'RouterOS v7 Winbox Setup, NAT & PPPoE Server',
          title_bn: 'উইনবক্স সেটআপ, সোর্স ন্যাট ও পিপিপিওই সার্ভার কনফিগারেশন',
          description_en: 'Configure WAN static IP, masquerade source NAT, set up PPPoE server on LAN interface, create user profiles, and manage secrets.',
          description_bn: 'উইনবক্স দিয়ে রাউটারে ইন্টারনেট চালু করা, ন্যাট অন করা এবং পিপিপিওই দিয়ে গ্রাহকদের ইউজারনেম-পাসওয়ার্ড তৈরি।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Winbox MAC/IP connect', 'srcnat action=masquerade', 'PPPoE Server & IP Pool', 'PPP Profiles & User Secrets'],
          practicalTask_en: 'Configure a complete MikroTik PPPoE server with an IP pool, default profile rate-limit (10M/10M), and authenticate a test client.',
          practicalTask_bn: 'একটি মাইক্রোটিক রাউটারে পিপিপিওই সার্ভার বানিয়ে ১০ এমবিপিএস স্পিড লিমিট সহ ক্লায়েন্ট কানেক্ট করো।'
        },
        {
          id: 'isp-p2-m2',
          title_en: 'Bandwidth Management: Queue Trees & Per Connection Queue (PCQ)',
          title_bn: 'ব্যান্ডউইথ ম্যানেজমেন্ট: কিউ ট্রি ও পিসিকিউ (PCQ) ফেয়ার শেয়ারিং',
          description_en: 'Implement Queue Trees using packet marks from IP Firewall Mangle. Set up PCQ to distribute available bandwidth equally among all active subscribers.',
          description_bn: 'ফায়ারওয়াল ম্যাংগল ও কিউ ট্রি দিয়ে ব্যান্ডউইথ ভাগ করা যাতে একজন বেশি ডাউনলোড করলেও অন্য গ্রাহকের গতি কমে না যায়।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Simple Queues vs Queue Tree', 'Firewall Mangle Packet Marks', 'Per Connection Queue (PCQ)', 'BDIX vs Internet Bandwidth Split'],
          practicalTask_en: 'Configure PCQ queue tree rules that automatically divide 100Mbps of internet equally among 20 concurrent connected users.',
          practicalTask_bn: 'একটি পিসিকিউ কিউ ট্রি কনফিগার করো যা ২০ জন গ্রাহকের মধ্যে ১০০ এমবিপিএস ব্যান্ডউইথ স্বয়ংক্রিয়ভাবে সমানভাবে বণ্টন করে।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'FTTH GPON Architecture, Optical Power Meters & VLANs',
      phaseTitle_bn: 'জিপন এফটিটিএইচ আর্কিটেকচার, পাওয়ার মিটার ও ম্যানেজড ভি-ল্যান',
      phaseSubtitle_en: 'Master optical splitters, dBm loss calculations, and 802.1Q switching.',
      phaseSubtitle_bn: 'অপটিক্যাল ফাইবার স্প্লিটার, ডিবিএম সিগন্যাল পরিমাপ ও সুইচে ভি-ল্যান।',
      durationWeeks: 4,
      modules: [
        {
          id: 'isp-p3-m1',
          title_en: 'FTTH GPON Network: OLT, Splitters, ONUs & Optical Power (dBm)',
          title_bn: 'জিপন এফটিটিএইচ: ওএলটি, স্প্লিটার, ওএনইউ ও অপটিক্যাল পাওয়ার (dBm)',
          description_en: 'Understand downstream (1490nm) and upstream (1310nm) wavelengths. Calculate link loss through 1:8 and 1:16 optical splitters, maintaining -18 dBm to -24 dBm at ONU.',
          description_bn: 'ওএলটি থেকে অপটিক্যাল স্প্লিটার দিয়ে ক্লায়েন্টের ওএনইউ পর্যন্ত ফাইবার টানা ও সিগন্যাল পাওয়ার ঠিক রাখার হিসাব।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['GPON vs EPON', 'Optical Splitter Loss (3.5dB per 1:2)', 'Acceptable dBm Optical Margins', 'Laser Safety & Clean Fiber Connectors'],
          practicalTask_en: 'Calculate total theoretical attenuation from OLT (+3 dBm) through a 1:8 splitter and 4km of fiber, and verify with an optical power meter.',
          practicalTask_bn: '৪ কিলোমিটার ফাইবার ও ১:৮ স্প্লিটারের সিগন্যাল লস হিসাব করে পাওয়ার মিটারের মাধ্যমে সঠিক ডিবিএম রিডিং মেপে দেখাও।'
        },
        {
          id: 'isp-p3-m2',
          title_en: 'Managed Switches, 802.1Q VLANs & Broadcast Isolation',
          title_bn: 'ম্যানেজড সুইচ, ৮০২.১কিউ ভি-ল্যান ও ব্রডকাস্ট ডোমেন পৃথকীকরণ',
          description_en: 'Configure access ports and trunk ports on managed switches. Isolate customer broadcast traffic using VLANs to prevent ARP storms across the ISP network.',
          description_bn: 'ম্যানেজড সুইচে ট্রাঙ্ক ও এক্সেস পোর্ট তৈরি করে বিভিন্ন জোনের ইন্টারনেট আলাদা রাখা যাতে নেটওয়ার্ক জ্যাম না হয়।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['802.1Q VLAN Tagging', 'Access vs Trunk Ports', 'Inter-VLAN Routing on MikroTik', 'Preventing Broadcast Storms'],
          practicalTask_en: 'Configure a MikroTik router with 3 VLAN interfaces (VLAN 10 Corporate, VLAN 20 Residential, VLAN 30 Hotspot) on a single trunk port.',
          practicalTask_bn: 'একটি মাইক্রোটিক পোর্টে ৩টি আলাদা ভি-ল্যান তৈরি করে সুইচের মাধ্যমে ট্রাঙ্ক লিংকে যুক্ত করো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'BGP Multihoming, BDIX Peering, Zabbix Monitoring & Viva',
      phaseTitle_bn: 'বিজিপি মাল্টিহোমিং, বিডিক্স পিয়ারিং, জ্যাবরিক্স মনিটরিং ও ভাইভা',
      phaseSubtitle_en: 'Configure autonomous routing, monitor fiber uptime, and pass ISP viva.',
      phaseSubtitle_bn: 'বিজিপি লোকাল পিয়ারিং, সার্ভার মনিটরিং ও টেলিকম চাকরি ভাইভা প্রস্তুতি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'isp-p4-m1',
          title_en: 'BGP Routing Fundamentals & BDIX Local Peering in RouterOS v7',
          title_bn: 'বিজিপি রাউটিং ও রাউটারওএস ৭-এ বিডিক্স (BDIX) পিয়ারিং কনফিগারেশন',
          description_en: 'Understand Autonomous Systems (ASN), eBGP sessions, and BGP routing filters in RouterOS v7 to ensure YouTube, Facebook CDN, and local traffic route through BDIX.',
          description_bn: 'বিজিপি সেশন চালু করা এবং লোকাল ট্র্যাফিক যাতে বিদেশি ব্যান্ডউইথ খরচ না করে দ্রুততম বিডিক্স দিয়ে যায় তা নিশ্চিত করা।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['eBGP Peer Configuration', 'RouterOS v7 Routing Filters', 'BDIX Routing Policy', 'Prefix Lists & AS-Path Filtering'],
          practicalTask_en: 'Configure a simulated BGP session in GNS3 / CHR with BDIX routing filters giving higher local preference to Bangladeshi IP prefixes.',
          practicalTask_bn: 'মাইক্রোটিক সিএইচআর-এ একটি বিজিপি পিয়ারিং তৈরি করে বিডিক্স রাউট আলাদা করার ফিল্টার কনফিগার করো।'
        },
        {
          id: 'isp-p4-m2',
          title_en: 'Zabbix Network Telemetry Monitoring & Technical Viva',
          title_bn: 'জ্যাবরিক্স দিয়ে নেটওয়ার্ক মনিটরিং ও আইএসপি টেকনিক্যাল ভাইভা',
          description_en: 'Set up SNMP monitoring on MikroTik routers with Zabbix, configure Telegram link-down alerts, and practice core network engineering viva questions.',
          description_bn: 'জ্যাবরিক্স ও এসএনএমপি দিয়ে রাউটারের ট্র্যাফিক মনিটর করা, লিংক ডাউন হলে মেসেজ এলার্ট পাঠানো ও ভাইভা প্রস্তুতি।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['SNMP v2c/v3 configuration', 'Zabbix host templates', 'Telegram bot link-down alert', 'ISP NOC Technical Viva'],
          practicalTask_en: 'Add a MikroTik router to Zabbix via SNMP and configure an automated Telegram notification that fires immediately if a fiber interface drops.',
          practicalTask_bn: 'জ্যাবরিক্সে মাইক্রোটিক যুক্ত করে ফাইবার লিংক ডাউন হলে স্বয়ংক্রিয় টেলিগ্রাম নোটিফিকেশন পাঠানোর ব্যবস্থা করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'isp-q1',
      question_en: 'How does the routing engine and BGP configuration in MikroTik RouterOS v7 differ from the legacy RouterOS v6?',
      question_bn: 'মাইক্রোটিক রাউটারওএস ৭-এর রাউটিং ইঞ্জিন ও বিজিপি কনফিগারেশন আগের ভার্সন ৬-এর চেয়ে কীভাবে আলাদা?',
      category: 'MikroTik Core v7',
      whyAsked_en: 'Tests if candidate is working with 2026 current production standards or outdated 2018 tutorials.',
      whyAsked_bn: 'প্রার্থী আধুনিক রাউটারওএস ৭-এ পারদর্শী কি না তা পরীক্ষা করতে।',
      howToAnswer_en: 'RouterOS v7 was completely redesigned with an upgraded modern Linux kernel (5.x/6.x) and a brand-new routing engine. In RouterOS v6, BGP was single-threaded, meaning heavy route updates locked a single CPU core and caused route flapping. In RouterOS v7, the routing engine is fully multi-threaded, parallelizing route table recalculations across multi-core Tile/ARM processors. Furthermore, routing filters in v7 use a new procedural rule syntax (/routing/filter/rule add chain=bdix-in rule="if (dst in 103.0.0.0/8) { set distance 10; accept; }") rather than the old modular action lists in v6. RouterOS v7 also natively supports modern IPv6 BGP multi-protocol extensions seamlessly.',
      howToAnswer_bn: 'রাউটারওএস ৭-এ সম্পূর্ণ নতুন লিনাক্স কার্নেল ও নতুন রাউটিং ইঞ্জিন ব্যবহার করা হয়েছে। আগের ভার্সন ৬-এ বিজিপি ছিল সিঙ্গেল-থ্রেডেড, ফলে বড় রাউটিং টেবিল আসলে প্রসেসরের একটি কোর শতভাগ জ্যাম হয়ে রাউটার হ্যাং করত। ভার্সন ৭-এ বিজিপি মাল্টি-থ্রেডেড, যা প্রসেসরের সব কোর একসাথে ব্যবহার করে। এছাড়া ভার্সন ৭-এ রাউটিং ফিল্টারের সিনট্যাক্স পুরোপুরি প্রোগ্রামিং কোডের মতো (if-then-else) আধুনিক করা হয়েছে এবং আইপিভি৬ বিজিপি অনেক বেশি নির্ভরযোগ্য ও দ্রুত কাজ করে।',
      commonMistakes_en: 'Giving RouterOS v6 filter command syntax when asked about v7 configuration.',
      commonMistakes_bn: 'রাউটারওএস ৭-এর ভাইভায় পুরনো ভার্সন ৬-এর কমান্ড বলা।'
    },
    {
      id: 'isp-q2',
      question_en: 'Why is IPv6 dual-stack mandatory by BTRC in Bangladesh, and what is the difference between SLAAC and DHCPv6 Prefix Delegation (/56 or /64)?',
      question_bn: 'বাংলাদেশে বিটিআরসি কর্তৃক আইপিভি৬ ডুয়াল-স্ট্যাক কেন বাধ্যতামূলক এবং SLAAC ও DHCPv6 প্রেফিক্স ডেলিগেশনের মধ্যে পার্থক্য কী?',
      category: 'IPv6 & BTRC Regulations',
      whyAsked_en: 'Critical regulatory compliance question asked in every major Bangladeshi ISP recruitment interview.',
      whyAsked_bn: 'বিটিআরসির সরকারি নির্দেশনা ও আধুনিক নেটওয়ার্ক প্রটোকলের বাস্তব জ্ঞান যাচাই করতে।',
      howToAnswer_en: 'Global IPv4 public addresses are completely exhausted. Bangladesh ISPs use Carrier-Grade NAT (CGNAT) to share a single public IPv4 among hundreds of users, which causes port exhaustion, broken P2P gaming, and security traceback hurdles. BTRC has mandated IPv6 dual-stack rollout so subscribers have native IPv6 alongside legacy CGNAT IPv4. In IPv6, SLAAC (Stateless Address Autoconfiguration) allows hosts to generate their own 64-bit interface ID using the router advertised prefix (ICMPv6 Router Advertisement). However, for home routers (ONUs/CPEs), SLAAC only assigns a single IP. ISPs use DHCPv6 Prefix Delegation (DHCPv6-PD) to dynamically delegate an entire network prefix (typically a /56 to enterprise or /64 to residential ONUs), allowing the home router to hand out billions of routable IPv6 addresses to internal client devices without NAT.',
      howToAnswer_bn: 'বিশ্বজুড়ে আইপিভি৪ পাবলিক আইপি শেষ হয়ে গেছে। বাংলাদেশের আইএসপিগুলো সিজিনাট (CGNAT) দিয়ে একটি আইপি শত শত গ্রাহককে দেয়, যার ফলে অনলাইন গেমিং ও সিকিউরিটি তদন্তে সমস্যা হয়। এজন্য বিটিআরসি আইপিভি৬ ডুয়াল-স্ট্যাক বাধ্যতামূলক করেছে। SLAAC দিয়ে ডিভাইসগুলো রাউটারের অ্যাডভার্টাইজমেন্ট শুনে নিজে নিজেই একটি আইপি বানিয়ে নেয়। তবে গ্রাহকের বাসার রাউটারকে একগুচ্ছ আইপি দিতে আইএসপিরা DHCPv6-PD ব্যবহার করে একটি পুরো /৬৪ বা /৫৬ প্রেফিক্স বরাদ্দ দেয়। এর ফলে গ্রাহকের বাসার প্রতিটি মোবাইল ও কম্পিউটার আলাদা আলাদা রুটযোগ্য অরিজিনাল আইপিভি৬ ঠিকানা পায় এবং কোনো ন্যাট করার প্রয়োজন হয় না।',
      commonMistakes_en: 'Thinking IPv6 requires NAT (Network Address Translation). IPv6 eliminates the need for NAT entirely.',
      commonMistakes_bn: 'মনে করা যে আইপিভি৬-এও ন্যাট করতে হয়। আইপিভি৬-এ ন্যাটের কোনো প্রয়োজনই নেই।'
    },
    {
      id: 'isp-q3',
      question_en: 'In MikroTik RouterOS v7, how does Per Connection Queue (PCQ) ensure fair bandwidth distribution compared to standard Simple Queues?',
      question_bn: 'মাইক্রোটিক রাউটারওএস ৭-এ সাধারণ সিম্পল কিউয়ের তুলনায় পিসিকিউ (PCQ) কীভাবে ব্যবহারকারীদের মধ্যে ব্যান্ডউইথ সমবণ্টন নিশ্চিত করে?',
      category: 'Bandwidth QoS',
      whyAsked_en: 'Tests whether the candidate knows how to optimize bandwidth consumption without creating hundreds of manual rules.',
      whyAsked_bn: 'শত শত গ্রাহকের ব্যান্ডউইথ স্বয়ংক্রিয়ভাবে সাশ্রয়ী উপায়ে নিয়ন্ত্রণ করার কৌশল জানতে।',
      howToAnswer_en: 'Simple Queues evaluate rules linearly top-to-bottom. If an ISP has 500 subscribers, 500 simple queue rules must be checked for every packet, consuming high CPU cycles. Furthermore, simple queues are static: if a 20Mbps pipe has only 2 active users, they still receive only their hardcoded limits, wasting spare capacity. Per Connection Queue (PCQ) dynamically creates sub-queues on the fly based on classifier fields (such as dst-address for download, src-address for upload). If total bandwidth is 50Mbps and 1 user is downloading, they can utilize the full 50Mbps. When a second user starts downloading, PCQ instantly and dynamically divides the pipe into 25Mbps each; when 5 users connect, 10Mbps each. This prevents CPU hogging and guarantees 100% bandwidth utilization with zero customer starvation.',
      howToAnswer_bn: 'সিম্পল কিউতে প্রতিটি গ্রাহকের জন্য আলাদা নিয়ম থাকে, ফলে ৫০০ গ্রাহক থাকলে রাউটারকে প্রতিটি প্যাকেটের জন্য ৫০০টি নিয়ম চেক করতে হয় যা প্রসেসর জ্যাম করে ফেলে। অন্যদিকে পিসিকিউ (PCQ) একটি ডায়নামিক কিউ। এটি কোনো প্যাকেট আসার সাথে সাথে আইপির ওপর ভিত্তি করে মেমরিতে তাৎক্ষণিক সাব-কিউ তৈরি করে। যদি মোট ৫০ এমবিপিএস লাইনে একজন ইউজার থাকে, তবে সে পুরো ৫০ এমবিপিএস স্পিড পাবে। কিন্তু আরেকজন ইউজার আসলেই পিসিকিউ স্বয়ংক্রিয়ভাবে ২৫-২৫ ভাগ করে দেবে। এটি রাউটারের সিপিইউ বাঁচায় এবং ব্যান্ডউইথের শতভাগ সদ্ব্যবহার নিশ্চিত করে।',
      commonMistakes_en: 'Setting up hundreds of individual Simple Queues for shared office networks instead of a single dynamic PCQ rule.',
      commonMistakes_bn: 'অফিসের প্রতিটি কম্পিউটারের জন্য আলাদা আলাদা সিম্পল কিউ বানিয়ে রাউটার স্লো করে ফেলা।'
    },
    {
      id: 'isp-q4',
      question_en: 'What is the acceptable optical power level (dBm) at an FTTH subscriber ONU, and how do you diagnose an optical fiber micro-bend using an OTDR?',
      question_bn: 'একটি এফটিটিএইচ গ্রাহকের ওএনইউতে গ্রহণযোগ্য অপটিক্যাল সিগন্যাল পাওয়ার (dBm) কত এবং ওটিডিআর দিয়ে কীভাবে ফাইবার বেন্ডিং নির্ণয় করবেন?',
      category: 'Optical Fiber Engineering',
      whyAsked_en: 'Fundamental field engineering question verifying physical layer troubleshooting competency.',
      whyAsked_bn: 'মাঠপর্যায়ে ফাইবার ট্রাবলশুটিং ও সিগন্যাল লস সমাধানের বাস্তব দক্ষতা নিশ্চিত করতে।',
      howToAnswer_en: 'For GPON standard optics (Class B+/C+), acceptable optical power at the subscriber ONU optical RX port ranges between -8 dBm and -24 dBm. Anything weaker than -26 dBm causes packet loss, high latency, and intermittent disconnects; power worse than -30 dBm causes total link drop (loss of signal). An OTDR (Optical Time-Domain Reflectometer) sends light pulses down the fiber core and measures backscattered reflections. A normal fiber shows a gentle downward slope. A micro-bend or macro-bend appears as a sharp sudden drop (non-reflective event loss) in the trace graph without an accompanying reflective peak. By comparing the OTDR distance measurement (e.g. at 1.45km) to the physical cable route map, technicians locate the exact spliced joint box or bend location.',
      howToAnswer_bn: 'জিপন প্রযুক্তিতে গ্রাহকের ওএনইউ-তে অপটিক্যাল সিগন্যাল পাওয়ার -৮ থেকে -২৪ ডিবিএম (dBm) এর মধ্যে থাকা আদর্শ। সিগন্যাল -২৬ এর চেয়ে কম হলে ইন্টারনেট ড্রপ করে ও ধীরগতি হয়, আর -৩০ এর নিচে নামলে লাল বাতি জ্বলে সংযোগ বিচ্ছিন্ন হয়। ওটিডিআর (OTDR) মেশিনে ফাইবার পরীক্ষা করলে একটি গ্রাফ দেখা যায়। সাধারণ ফাইবারে গ্রাফটি ধীরে ধীরে নিচের দিকে নামে। কিন্তু ফাইবারে কোনো ভাজ বা চাপ (micro-bend) থাকলে গ্রাফে হুট করে একটি খাড়া ড্রপ (loss) দেখা যায়। ওটিডিআর মিটারের দূরত্ব দেখে (যেমন ১.৪৫ কিমি) ফিল্ড টিম ঠিক কোন পোলে বা জয়েন্ট বক্সে ফাইবার বাঁকা হয়েছে তা সাথে সাথে বের করে সমাধান করতে পারে।',
      commonMistakes_en: 'Thinking optical power is measured in positive numbers or that -30 dBm is stronger than -15 dBm (it is a negative logarithmic scale).',
      commonMistakes_bn: 'মনে করা যে -৩০ ডিবিএম সিগন্যাল -১৫ এর চেয়ে বেশি শক্তিশালী (নেগেটিভ সংখ্যায় -১৫ অনেক বেশি শক্তিশালী)।'
    }
  ],
  freeCerts: [
    {
      id: 'mikrotik-mtcna-free-prep',
      title_en: 'MikroTik Certified Network Associate (MTCNA) Official Syllabus',
      title_bn: 'মাইক্রোটিক সার্টিফাইড নেটওয়ার্ক অ্যাসোসিয়েট (MTCNA) স্টাডি গাইড',
      provider: 'MikroTik Official',
      url: 'https://mikrotik.com/training',
      mobileAccessible: true,
      language: 'en',
      durationHours: 35,
      cost: '100% Free Materials',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'The industry standard entry credential for ISP network engineers in Bangladesh covering RouterOS, queues, and firewalling.',
      relevance_bn: 'বাংলাদেশের আইএসপি ও কর্পোরেট নেটওয়ার্কিংয়ের সবচেয়ে জনপ্রিয় ও প্রয়োজনীয় সার্টিফিকেশন গাইড।'
    },
    {
      id: 'cisco-networking-basics',
      title_en: 'Cisco Networking Academy: Networking Basics & Packet Tracer',
      title_bn: 'সিসকো নেটওয়ার্কিং একাডেমি: নেটওয়ার্কিং বেসিক্স ও প্যাকেট ট্রেসার',
      provider: 'Cisco Networking Academy',
      url: 'https://skillsforall.com/course/networking-basics',
      mobileAccessible: true,
      language: 'en',
      durationHours: 25,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official Cisco verified digital badge covering IP addressing, switches, routers, and interactive network simulations.',
      relevance_bn: 'সিসকোর অফিশিয়াল ফ্রি কোর্স যা আইপি সাবনেটিং ও রাউটিংয়ের ধারণাকে স্বচ্ছ করে।'
    },
    {
      id: 'apnic-ipv6-training',
      title_en: 'APNIC Academy: IPv6 Architecture and Routing (Official Free Modules)',
      title_bn: 'এপনিক একাডেমি: আইপিভি৬ আর্কিটেকচার ও রাউটিং প্রশিক্ষণ',
      provider: 'APNIC Academy',
      url: 'https://academy.apnic.net/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 20,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Asia Pacific Network Information Centre official modules on enterprise IPv6 addressing, BGP peering, and routing.',
      relevance_bn: 'এশিয়া প্যাসিফিক নেটওয়ার্ক তথ্য কেন্দ্রের (APNIC) অফিশিয়াল উন্মুক্ত আইপিভি৬ ট্রেনিং।'
    }
  ]
};
