import { db } from '../db/index.js';
import { careerTracks, studentProfiles, surveyResponses } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import type { SurveySubmission, DiagnosticResult, CareerTrack, SuggestedTrackItem } from '../../shared/types.js';

export function generateSaveCode(): string {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let code = 'CST';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export async function processDiagnosticSurvey(submission: any): Promise<DiagnosticResult> {
  const allTracksRows = await db.select().from(careerTracks);
  
  // Convert DB tracks to shared CareerTrack type
  const tracks: CareerTrack[] = allTracksRows.map((t: any) => ({
    id: t.id,
    slug: t.slug,
    title_en: t.titleEn,
    title_bn: t.titleBn,
    summary_en: t.summaryEn,
    summary_bn: t.summaryBn,
    pivotAdvice_en: t.pivotAdviceEn,
    pivotAdvice_bn: t.pivotAdviceBn,
    minPcRequired: t.minPcRequired,
    dayToDay_en: t.dayToDayJson?.en || [],
    dayToDay_bn: t.dayToDayJson?.bn || [],
    mustHaveSkills: t.mustHaveSkillsJson || [],
    marketData: t.marketDataJson,
    roadmapPhases: t.roadmapPhasesJson || [],
    interviewQuestions: t.interviewQuestionsJson || [],
    freeCerts: t.freeCertsJson || [],
  }));

  const raw = submission.answers && typeof submission.answers === 'object' 
    ? { ...submission, ...submission.answers } 
    : submission;

  const hardware = raw.hardware || 'phone_only';
  const literacy = raw.literacy || 'basic_user';
  const english = raw.english || 'struggle_english';
  const urgency = raw.urgency || 'study_1_to_2_years';
  const interest = raw.interest || 'confused_open';

  // Branch inputs
  const phoneRoutine = raw.phone_routine || '';
  const phoneTargetGoal = raw.phone_target_goal || '';
  const phoneNetRoute = raw.phone_net_route || '';
  const phoneQaRoute = raw.phone_qa_route || '';
  const codingPreference = raw.coding_preference || '';
  const techNicheFocus = raw.tech_niche_focus || '';
  const nonCodingNicheFocus = raw.non_coding_niche_focus || '';
  const webSubFocus = raw.web_sub_focus || '';
  const cyberSubFocus = raw.cyber_sub_focus || '';
  const aiSubFocus = raw.ai_sub_focus || '';
  const devopsSubFocus = raw.devops_sub_focus || '';
  const timelineAndCerts = raw.timeline_and_certs || '';

  // Detect if student skipped questions
  const answeredEntries = Object.entries(raw).filter(([key, val]) => {
    if (key === 'studentName' || key === 'phoneOrRoll' || key === 'answers') return false;
    return typeof val === 'string' && val.trim() !== '' && val !== 'skipped' && val !== 'undefined';
  });
  const isSkipped = answeredEntries.length === 0;

  const requiresFoundation = literacy === 'absolute_beginner' || phoneTargetGoal === 'goal_digital_foundation';

  // Base scores for all tracks
  const scores: Record<string, number> = {};
  for (const track of tracks) {
    scores[track.slug] = 40;
  }

  // Branch Logic 1: Phone-Only Path
  if (!isSkipped && hardware === 'phone_only') {
    // Discourage heavy PC tracks without completely hiding them
    scores['game-development-unity'] = 5;
    scores['blockchain-web3-developer'] = 5;
    scores['data-engineering-big-data'] = 5;
    scores['desktop-app-development'] = 5;
    scores['ai-ml-engineer'] = 10;

    if (phoneTargetGoal === 'goal_it_networking') {
      if (phoneNetRoute === 'net_pc_support') {
        scores['it-hardware-support'] = 1000;
        scores['isp-mikrotik-networking'] = 600;
      } else {
        scores['isp-mikrotik-networking'] = 1000;
        scores['it-hardware-support'] = 600;
      }
    } else if (phoneTargetGoal === 'goal_software_qa') {
      scores['qa-software-testing'] = 1000;
      scores['frontend-fullstack-web'] = 200;
    } else if (phoneTargetGoal === 'goal_digital_foundation') {
      scores['digital-literacy-foundation'] = 1000;
      scores['bpo-tech-support-data'] = 400;
      scores['it-hardware-support'] = 300;
    } else if (phoneTargetGoal === 'goal_digital_marketing') {
      scores['digital-marketing-ecommerce'] = 1000;
      scores['bpo-tech-support-data'] = 400;
      scores['ui-ux-design'] = 300;
    } else {
      scores['digital-literacy-foundation'] = 500;
      scores['qa-software-testing'] = 450;
      scores['isp-mikrotik-networking'] = 400;
    }

    if (phoneRoutine === 'mobile_otg_keyboard') {
      scores['digital-literacy-foundation'] += 50;
    }
  }

  // Branch Logic 2: PC Coders
  if (!isSkipped && (codingPreference === 'has_c_basics' || codingPreference === 'absolute_code_beginner' || codingPreference === 'has_python_or_js')) {
    if (techNicheFocus === 'niche_game_dev') {
      scores['game-development-unity'] = 1000;
      scores['desktop-app-development'] = 300;
    } else if (techNicheFocus === 'niche_ai_deep_learning') {
      if (aiSubFocus === 'ai_bigdata_spark') {
        scores['data-engineering-big-data'] = 1000;
        scores['python-data-ai'] = 500;
      } else if (aiSubFocus === 'ai_business_analytics') {
        scores['python-data-ai'] = 1000;
        scores['backend-systems-engineering'] = 400;
      } else {
        scores['ai-ml-engineer'] = 1000;
        scores['python-data-ai'] = 500;
      }
    } else if (techNicheFocus === 'niche_ethical_hacking') {
      if (cyberSubFocus === 'cyber_soc_analyst') {
        scores['cybersecurity-soc-analyst'] = 1000;
        scores['ethical-hacking-bug-bounty'] = 500;
      } else {
        scores['ethical-hacking-bug-bounty'] = 1000;
        scores['cybersecurity-soc-analyst'] = 500;
      }
    } else if (techNicheFocus === 'niche_web_fullstack') {
      if (webSubFocus === 'web_backend_apis') {
        scores['backend-systems-engineering'] = 1000;
        scores['frontend-fullstack-web'] = 500;
      } else if (webSubFocus === 'web_frontend_react') {
        scores['frontend-fullstack-web'] = 1000;
        scores['ui-ux-design'] = 400;
      } else {
        scores['frontend-fullstack-web'] = 1000;
        scores['backend-systems-engineering'] = 600;
      }
    } else if (techNicheFocus === 'niche_laravel_agency') {
      scores['laravel-php-agency-dev'] = 1000;
      scores['frontend-fullstack-web'] = 400;
    } else if (techNicheFocus === 'niche_enterprise_java') {
      scores['enterprise-java-fintech'] = 1000;
      scores['backend-systems-engineering'] = 500;
    } else if (techNicheFocus === 'niche_mobile_flutter') {
      scores['mobile-app-development'] = 1000;
      scores['frontend-fullstack-web'] = 400;
    } else if (techNicheFocus === 'niche_desktop_pos') {
      scores['desktop-app-development'] = 1000;
      scores['frontend-fullstack-web'] = 300;
    } else if (techNicheFocus === 'niche_data_engineering') {
      scores['data-engineering-big-data'] = 1000;
      scores['python-data-ai'] = 400;
    } else if (techNicheFocus === 'niche_blockchain_web3') {
      scores['blockchain-web3-developer'] = 1000;
      scores['frontend-fullstack-web'] = 300;
    } else if (techNicheFocus === 'niche_embedded_iot') {
      scores['embedded-iot-robotics'] = 1000;
      scores['it-hardware-support'] = 400;
    }
  }

  // Branch Logic 3: PC Non-Coders / Systems Lovers
  if (!isSkipped && codingPreference === 'prefers_non_coding') {
    if (nonCodingNicheFocus === 'focus_ui_ux') {
      scores['ui-ux-design'] = 1000;
      scores['graphic-design-motion'] = 400;
    } else if (nonCodingNicheFocus === 'focus_graphic_motion') {
      scores['graphic-design-motion'] = 1000;
      scores['ui-ux-design'] = 400;
    } else if (nonCodingNicheFocus === 'focus_devops_linux') {
      if (devopsSubFocus === 'devops_cloud_aws') {
        scores['cloud-solutions-architecture'] = 1000;
        scores['linux-devops-admin'] = 500;
      } else {
        scores['linux-devops-admin'] = 1000;
        scores['cloud-solutions-architecture'] = 500;
      }
    } else if (nonCodingNicheFocus === 'focus_isp_networking') {
      scores['isp-mikrotik-networking'] = 1000;
      scores['it-hardware-support'] = 400;
    } else if (nonCodingNicheFocus === 'focus_qa_testing') {
      scores['qa-software-testing'] = 1000;
    } else if (nonCodingNicheFocus === 'focus_it_support') {
      scores['it-hardware-support'] = 1000;
      scores['isp-mikrotik-networking'] = 400;
    }
  }

  // Branch Logic 4: Legacy interest fallback if no dynamic niche selected
  if (!isSkipped && !techNicheFocus && !nonCodingNicheFocus && !phoneTargetGoal) {
    if (interest === 'coding_web_apps' || interest === 'software') {
      scores['frontend-fullstack-web'] += 60;
      scores['backend-systems-engineering'] += 45;
    } else if (interest === 'backend_databases') {
      scores['backend-systems-engineering'] += 65;
    } else if (interest === 'mobile_app_dev') {
      scores['mobile-app-development'] += 65;
    } else if (interest === 'linux_devops') {
      scores['linux-devops-admin'] += 60;
    } else if (interest === 'cloud_architecture') {
      scores['cloud-solutions-architecture'] += 65;
    } else if (interest === 'cybersecurity_ethical') {
      scores['cybersecurity-soc-analyst'] += 60;
    } else if (interest === 'python_data_ai') {
      scores['python-data-ai'] += 65;
    } else if (interest === 'physical_networking') {
      scores['isp-mikrotik-networking'] += 65;
    } else if (interest === 'embedded_iot_robotics') {
      scores['embedded-iot-robotics'] += 65;
    } else if (interest === 'visual_design') {
      scores['ui-ux-design'] += 60;
    } else if (interest === 'qa_testing') {
      scores['qa-software-testing'] += 60;
    } else if (interest === 'it_support') {
      scores['it-hardware-support'] += 60;
    } else if (interest === 'digital_marketing') {
      scores['digital-marketing-ecommerce'] += 60;
    }
  }

  // If skipped, set clean default order
  if (isSkipped) {
    scores['frontend-fullstack-web'] = 60;
    scores['isp-mikrotik-networking'] = 55;
    scores['python-data-ai'] = 50;
    scores['ui-ux-design'] = 45;
  }

  // Timeline / Cert preference bonus
  if (timelineAndCerts === 'vendor_exam_ccna_aws') {
    scores['isp-mikrotik-networking'] += 15;
    scores['cloud-solutions-architecture'] += 15;
    scores['cybersecurity-soc-analyst'] += 15;
  } else if (timelineAndCerts === 'urgent_job_free_certs') {
    scores['laravel-php-agency-dev'] += 15;
    scores['frontend-fullstack-web'] += 10;
    scores['qa-software-testing'] += 15;
    scores['isp-mikrotik-networking'] += 15;
  }

  // Sort tracks by score
  const sortedSlugs = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  
  // Primary and secondary track
  const primarySlug = sortedSlugs[0];
  const secondarySlug = sortedSlugs[1] || sortedSlugs[0];

  const primaryTrack = tracks.find(t => t.slug === primarySlug) || tracks[0];
  const secondaryTrack = tracks.find(t => t.slug === secondarySlug) || tracks[1];

  // Helper to build track role and tech stack across all 24 tracks
  function getTrackRoleAndStack(t: CareerTrack) {
    let role_en = t.title_en;
    let role_bn = t.title_bn;
    let stack: string[] = ['Core Principles', 'Practical Lab', 'Git & GitHub'];

    if (t.slug === 'frontend-fullstack-web') {
      if (webSubFocus === 'web_frontend_react') {
        role_en = 'Frontend Web Developer (React 19 + Next.js + Tailwind)';
        role_bn = 'ফ্রন্টএন্ড ওয়েব ডেভেলপার (রিয়্যাক্ট ১৯, নেক্সট.জেএস ও টেইলউইন্ড)';
        stack = ['JavaScript ES6+', 'React 19', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Git & GitHub'];
      } else {
        role_en = 'Full-Stack Software Engineer (MERN / TypeScript Stack)';
        role_bn = 'ফুল-স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার (রিয়্যাক্ট, নোড ও টাইপস্ক্রিপ্ট)';
        stack = ['JavaScript', 'TypeScript', 'React 19', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'];
      }
    } else if (t.slug === 'backend-systems-engineering') {
      role_en = 'Backend API Systems & Database Engineer';
      role_bn = 'ব্যাকএন্ড এপিআই ও ডেটাবেস ইঞ্জিনিয়ার';
      stack = ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Drizzle ORM', 'Docker', 'Postman'];
    } else if (t.slug === 'mobile-app-development') {
      role_en = 'Mobile App Developer (Flutter & Android/iOS)';
      role_bn = 'মোবাইল অ্যাপ ডেভেলপার (ফ্লাটার ও অ্যান্ড্রয়েড)';
      stack = ['Dart', 'Flutter', 'Firebase', 'State Management (Provider)', 'REST APIs'];
    } else if (t.slug === 'linux-devops-admin') {
      if (devopsSubFocus === 'devops_cicd_docker') {
        role_en = 'DevOps & CI/CD Automation Engineer (Docker + GitHub Actions)';
        role_bn = 'ডেভঅপ্স ও সিআই/সিডি অটোমেশন ইঞ্জিনিয়ার (ডকার ও গিটহাব একশন)';
        stack = ['Linux Ubuntu', 'Docker', 'GitHub Actions', 'CI/CD Pipelines', 'Nginx', 'Bash'];
      } else {
        role_en = 'Linux System Administrator & Server Specialist';
        role_bn = 'লিনাক্স সিস্টেম অ্যাডমিনিস্ট্রেটর ও সার্ভার স্পেশালিস্ট';
        stack = ['Ubuntu / Debian', 'Bash Shell Scripting', 'Nginx', 'SSH & Firewall Security', 'DNS & Bind9'];
      }
    } else if (t.slug === 'cloud-solutions-architecture') {
      role_en = 'AWS Cloud Solutions & Infrastructure Engineer';
      role_bn = 'এডব্লিউএস ক্লাউড সল্যুশনস ও ইনফ্রাস্ট্রাকচার ইঞ্জিনিয়ার';
      stack = ['AWS Core (EC2, S3, RDS)', 'VPC Networking', 'Terraform', 'Docker', 'CloudWatch'];
    } else if (t.slug === 'cybersecurity-soc-analyst') {
      role_en = 'Cyber Security & SOC Incident Analyst';
      role_bn = 'সাইবার সিকিউরিটি ও এসওসি অ্যানালিস্ট';
      stack = ['Wireshark', 'Kali Linux', 'OWASP Top 10', 'Nmap', 'Burp Suite', 'Fail2ban'];
    } else if (t.slug === 'python-data-ai') {
      role_en = 'Python Data Analyst & Applied AI Associate';
      role_bn = 'পাইথন ডেটা অ্যানালিস্ট ও অ্যাপ্লায়েড এআই অ্যাসোসিয়েট';
      stack = ['Python', 'SQL (PostgreSQL)', 'Pandas', 'Power BI', 'BeautifulSoup', 'OpenAI API'];
    } else if (t.slug === 'isp-mikrotik-networking') {
      role_en = 'ISP & MikroTik Network Engineer (BDIX + Queues)';
      role_bn = 'আইএসপি ও মাইক্রোটিক নেটওয়ার্ক ইঞ্জিনিয়ার (বিডিআইএক্স ও ব্যান্ডউইথ কিউ)';
      stack = ['MikroTik RouterOS', 'WinBox', 'BDIX Peering', 'Bandwidth Queues', 'PPPoE Client Server'];
    } else if (t.slug === 'embedded-iot-robotics') {
      role_en = 'Embedded Systems, IoT & Industrial Automation Engineer';
      role_bn = 'এমবেডেড সিস্টেমস, আইওটি ও ফ্যাক্টরি অটোমেশন ইঞ্জিনিয়ার';
      stack = ['C/C++', 'Arduino & ESP32', 'Sensors & Relays', 'MQTT Protocols', 'Raspberry Pi'];
    } else if (t.slug === 'ui-ux-design') {
      role_en = 'Product UI/UX Designer (Figma Design Systems)';
      role_bn = 'প্রোডাক্ট ইউআই/ইউএক্স ডিজাইনার (ফিগমা ডিজাইন সিস্টেম)';
      stack = ['Figma', 'Auto Layout', 'Component Design Systems', 'Mobile App Flows', 'User Testing'];
    } else if (t.slug === 'qa-software-testing') {
      role_en = 'Software QA & Bug Testing Engineer';
      role_bn = 'সফটওয়্যার কিউএ ও বাগ টেস্টিং ইঞ্জিনিয়ার';
      stack = ['Manual Testing', 'Postman API Testing', 'Bug Reports', 'Jira Basics', 'Cypress Basics'];
    } else if (t.slug === 'it-hardware-support') {
      role_en = 'IT Systems & Hardware Support Specialist';
      role_bn = 'আইটি সিস্টেম ও হার্ডওয়্যার সাপোর্ট স্পেশালিস্ট';
      stack = ['PC Assembly', 'Windows / Linux Setup', 'LAN Cabling', 'Printer Troubleshooting', 'BIOS Config'];
    } else if (t.slug === 'graphic-design-motion') {
      role_en = 'Graphic & Visual Media Designer';
      role_bn = 'গ্রাফিক ও ভিজুয়াল মিডিয়া ডিজাইনার';
      stack = ['Adobe Photoshop', 'Adobe Illustrator', 'Branding', 'Typography', 'Social Media Assets'];
    } else if (t.slug === 'digital-marketing-ecommerce') {
      role_en = 'Digital Marketing & E-Commerce Manager';
      role_bn = 'ডিজিটাল মার্কেটিং ও ই-কমার্স ম্যানেজার';
      stack = ['Meta Ads Manager', 'Google SEO', 'Content Strategy', 'Shopify Basics', 'Analytics'];
    } else if (t.slug === 'bpo-tech-support-data') {
      role_en = 'BPO Technical Support & Data Associate';
      role_bn = 'বিপিও টেকনিক্যাল সাপোর্ট ও ডেটা সহযোগী';
      stack = ['Customer Support Tools', 'Google Sheets / Excel', 'Ticketing Systems', 'Voice & Chat Comm'];
    } else if (t.slug === 'digital-literacy-foundation') {
      role_en = 'Digital & Computer Literacy Foundation Track';
      role_bn = 'ডিজিটাল লিটারেসি ও কম্পিউটার বেসিক ফাউন্ডেশন';
      stack = ['Touch Typing (Avro/Bijoy)', 'Windows & File Management', 'Web Research', 'Termux Mobile Lab', 'Polytechnic Lab Hours'];
    } else if (t.slug === 'game-development-unity') {
      role_en = 'Game Developer & Simulation Engineer (Unity & C#)';
      role_bn = 'গেম ডেভেলপার ও সিমুলেশন ইঞ্জিনিয়ার (ইউনিটি ও সি-শার্প)';
      stack = ['Unity Engine', 'C#', '2D/3D Physics', 'Game Loop Architecture', 'Android APK Export', 'itch.io'];
    } else if (t.slug === 'ai-ml-engineer') {
      role_en = 'AI & Machine Learning Engineer (PyTorch & Generative AI)';
      role_bn = 'এআই ও মেশিন লার্নিং ইঞ্জিনিয়ার (পাইটর্চ ও জেনারেটিভ এআই)';
      stack = ['Python', 'PyTorch', 'Hugging Face', 'Vector Databases (ChromaDB)', 'RAG Architecture', 'FastAPI'];
    } else if (t.slug === 'ethical-hacking-bug-bounty') {
      role_en = 'Ethical Hacker & Web Application Bug Hunter';
      role_bn = 'এথিক্যাল হ্যাকার ও ওয়েব অ্যাপ্লিকেশন বাউন্টি হান্টার';
      stack = ['Burp Suite Pro', 'OWASP Top 10', 'Reconnaissance', 'SQL Injection & XSS', 'Bash & Python Scripting', 'HackerOne'];
    } else if (t.slug === 'enterprise-java-fintech') {
      role_en = 'Enterprise Java & FinTech Core Systems Developer';
      role_bn = 'এন্টারপ্রাইজ জাভা ও ফিনটেক কোর সিস্টেমস ডেভেলপার';
      stack = ['Java 21', 'Spring Boot 3', 'Microservices', 'PostgreSQL', 'Docker', 'bKash/Nagad Payment APIs'];
    } else if (t.slug === 'laravel-php-agency-dev') {
      role_en = 'Laravel & Full-Stack Agency Web Developer';
      role_bn = 'লারাভেল ও ফুল-স্ট্যাক এজেন্সি ওয়েব ডেভেলপার';
      stack = ['PHP 8.3', 'Laravel 11', 'MySQL', 'Livewire / Blade', 'Tailwind CSS', 'VPS Deployment'];
    } else if (t.slug === 'desktop-app-development') {
      role_en = 'Desktop Application & POS Systems Developer';
      role_bn = 'ডেস্কটপ অ্যাপ্লিকেশন ও পিওএস সফটওয়্যার ডেভেলপার';
      stack = ['Electron.js', 'Tauri / Rust', 'C# / .NET', 'SQLite', 'Thermal Printer ESC/POS', 'Offline Architecture'];
    } else if (t.slug === 'data-engineering-big-data') {
      role_en = 'Data Engineer & Big Data Systems Architect';
      role_bn = 'ডেটা ইঞ্জিনিয়ার ও বিগ ডেটা সিস্টেমস আর্কিটেক্ট';
      stack = ['Apache Spark', 'Apache Kafka', 'PostgreSQL / ClickHouse', 'Python', 'Apache Airflow', 'Docker'];
    } else if (t.slug === 'blockchain-web3-developer') {
      role_en = 'Web3 & Smart Contract Blockchain Developer';
      role_bn = 'ওয়েব৩ ও স্মার্ট কন্ট্রাক্ট ব্লকচেইন ডেভেলপার';
      stack = ['Solidity 0.8+', 'Hardhat', 'Ethers.js / Viem', 'OpenZeppelin', 'EVM Chains', 'Next.js Web3'];
    }

    return { role_en, role_bn, stack };
  }

  // Device Workaround Guidance
  let hardwareSetupGuide_en = 'Standard desktop environment configured with VS Code and browser.';
  let hardwareSetupGuide_bn = 'ভিএস কোড ও আধুনিক ব্রাউজার সহ সাধারণ কম্পিউটার সেটআপ।';
  if (hardware === 'phone_only') {
    hardwareSetupGuide_en = 'Smartphone Workaround: Install Termux + Acode editor from F-Droid. Practice Linux CLI and Git on mobile. Use free cloud IDEs (GitHub Codespaces, Replit) and polytechnic computer labs for heavy projects.';
    hardwareSetupGuide_bn = 'স্মার্টফোন সমাধান: এফ-ড্রয়েড থেকে টার্মাক্স (Termux) ও একোড (Acode) দিয়ে মোবাইল থেকেই লিনাক্স কমান্ড ও কোডিং প্র্যাকটিস করো। ভারী কাজের জন্য ব্রাউজারে গিটহাব কোডস্পেস ও পলিটেকনিক ল্যাব ব্যবহার করো।';
  } else if (hardware === 'low_spec_pc') {
    hardwareSetupGuide_en = 'Low-Spec PC Workaround: Use lightweight editors like Sublime Text or VS Code Web. Avoid running heavy Chrome tabs simultaneously. Keep 10GB free disk space on drive C.';
    hardwareSetupGuide_bn = 'লো-স্পেক পিসি সমাধান: ভারী সফটওয়্যারের বদলে সাবলাইম টেক্সট বা ভিএস কোড লাইটওয়েট ব্যবহার করো। ব্রাউজারে অতিরিক্ত ট্যাব খোলা এড়িয়ে চলো।';
  }

  // Build top suggested tracks array (top 4 distinct recommendations)
  const topSlugs = sortedSlugs.slice(0, 4);
  const suggestedTracks: SuggestedTrackItem[] = topSlugs.map((slug, idx) => {
    const track = tracks.find(t => t.slug === slug) || tracks[0];
    const { role_en, role_bn, stack } = getTrackRoleAndStack(track);

    let matchPercent = 0;
    let fitTag_en = 'Direct Pick';
    let fitTag_bn = 'সরাসরি পছন্দ';

    if (!isSkipped) {
      if (idx === 0) {
        matchPercent = 99;
        fitTag_en = 'Exact Match';
        fitTag_bn = 'নিখুঁত মিল';
      } else if (idx === 1) {
        matchPercent = 88;
        fitTag_en = 'Strong Fit';
        fitTag_bn = 'শক্তিশালী বিকল্প';
      } else if (idx === 2) {
        matchPercent = 78;
        fitTag_en = 'Alternative';
        fitTag_bn = 'বিকল্প পথ';
      } else {
        matchPercent = 70;
        fitTag_en = 'Related Track';
        fitTag_bn = 'সম্পর্কিত ট্র্যাক';
      }
    }

    // Contextual match reasons for all 24 tracks
    let matchReason_en = isSkipped 
      ? `Popular entry track for CST students. Select this roadmap directly or browse all 24 tracks below.`
      : `Aligns directly with your chosen focus in ${track.title_en}. Strong hiring in Bangladesh and remote contracts.`;
    let matchReason_bn = isSkipped
      ? `ডিপ্লোমা শিক্ষার্থীদের জন্য জনপ্রিয় ক্যারিয়ার ট্র্যাক। তুমি এটি সরাসরি বেছে নিতে পারো অথবা নিচের ২৪টি ট্র্যাক দেখতে পারো।`
      : `তোমার নির্বাচিত ${track.title_bn} লক্ষ্যের সাথে সরাসরি সামঞ্জস্যপূর্ণ।`;

    if (track.slug === 'frontend-fullstack-web') {
      matchReason_en = 'Matches your interest in building websites and apps. High demand across Dhaka software firms and remote contracts.';
      matchReason_bn = 'ওয়েবসাইট ও সফটওয়্যার তৈরির আগ্রহের সাথে সরাসরি মিল রয়েছে। ঢাকা ও রিমোট জবে সবচেয়ে বেশি কাজের সুযোগ।';
    } else if (track.slug === 'backend-systems-engineering') {
      matchReason_en = 'Focused on pure server logic, database relations, and secure APIs without UI styling overhead.';
      matchReason_bn = 'সিএসএস ডিজাইনের ঝামেলা ছাড়া খাঁটি ব্যাকএন্ড লজিক, ডেটাবেস ও এপিআই তৈরির সম্ভাবনাময় পথ।';
    } else if (track.slug === 'mobile-app-development') {
      matchReason_en = 'High-velocity mobile engineering with Dart and Flutter. High recruitment across Dhaka software agencies.';
      matchReason_bn = 'ডার্ট ও ফ্লাটার দিয়ে একই সাথে অ্যান্ড্রয়েড ও আইওএস অ্যাপ তৈরির জন্য সফটওয়্যার ফার্মগুলোতে ব্যাপক চাহিদা।';
    } else if (track.slug === 'linux-devops-admin') {
      matchReason_en = 'Matches systems, servers, and automation curiosity. Enterprise banks and tech companies recruit heavily.';
      matchReason_bn = 'সার্ভার ও ক্লাউড অটোমেশনের জন্য এটি উপযুক্ত। ব্যাংক ও বড় টেক কোম্পানিতে নিয়মিত নিয়োগ হয়।';
    } else if (track.slug === 'cloud-solutions-architecture') {
      matchReason_en = 'AWS infrastructure, VPC security, and Terraform automation with high local and remote salary potential.';
      matchReason_bn = 'এডব্লিউএস ক্লাউড সার্ভার, নেটওয়ার্কিং ও অটোমেশন পরিচালনার জন্য সর্বোচ্চ বেতনের পথ।';
    } else if (track.slug === 'cybersecurity-soc-analyst') {
      matchReason_en = 'Network defense and security monitoring. Mandatory hiring across commercial banks and telecom operators in Bangladesh.';
      matchReason_bn = 'বাংলাদেশের সকল ব্যাংক ও আর্থিক প্রতিষ্ঠানে সাইবার নিরাপত্তা টিমের জন্য এটি অত্যন্ত মর্যাদাপূর্ণ পথ।';
    } else if (track.slug === 'python-data-ai') {
      matchReason_en = 'Data wrangling, SQL analytics, and Power BI dashboards with expanding corporate and freelance demand.';
      matchReason_bn = 'স্প্রেডশিট, পাইথন ও এসকিউএল দিয়ে কর্পোরেট ডেটা বিশ্লেষণ ও ফ্রিল্যান্সিংয়ের সেরা সুযোগ।';
    } else if (track.slug === 'isp-mikrotik-networking') {
      matchReason_en = 'Tangible, hands-on physical networking. Highest immediate hiring rate for CST diploma holders across local ISPs.';
      matchReason_bn = 'আইএসপি ও রাউটার কনফিগারেশনের বাস্তবমুখী কাজ। পলিটেকনিক শিক্ষার্থীদের জন্য দ্রুত চাকরির চমৎকার সুযোগ।';
    } else if (track.slug === 'embedded-iot-robotics') {
      matchReason_en = 'Hands-on physical hardware, sensors, and factory automation across RMG and electronic industries.';
      matchReason_bn = 'গার্মেন্টস কারখানা ও ইলেকট্রনিক্স কোম্পানিতে অটোমেশন ও রোবোটিক্স সার্কিট পরিচালনার বাস্তব কাজ।';
    } else if (track.slug === 'ui-ux-design') {
      matchReason_en = 'Visual creativity with low math overhead. Figma works directly in web browsers on almost any computer.';
      matchReason_bn = 'ভিজুয়াল ডিজাইন ও অ্যাপ স্ক্রিন তৈরির কাজ। যেকোনো কম্পিউটারে ব্রাউজার দিয়ে ফিগমা চালানো যায়।';
    } else if (track.slug === 'qa-software-testing') {
      matchReason_en = 'Detail-oriented product testing with lower coding entry barriers. High demand in modern software teams.';
      matchReason_bn = 'কম কোডিং দিয়ে সফটওয়্যার ইন্ডাস্ট্রিতে প্রবেশের সেরা উপায়। সফটওয়্যারের ভুলত্রুটি শনাক্ত করার কাজ।';
    } else if (track.slug === 'it-hardware-support') {
      matchReason_en = 'Practical computer hardware and systems troubleshooting. Immediate recruitment in offices, banks, and factories.';
      matchReason_bn = 'কম্পিউটার হার্ডওয়্যার ও অফিস সিস্টেম সার্ভিসিং। কর্পোরেট অফিস ও ইন্ডাস্ট্রিতে তাৎক্ষণিক কাজের সুযোগ।';
    } else if (track.slug === 'digital-literacy-foundation') {
      matchReason_en = 'Gentle foundational bridge to build keyboard typing, mouse control, and computer confidence first.';
      matchReason_bn = 'টাইপিং ও কম্পিউটারের ভয় দূর করার জন্য ব্যবহারিক ফাউন্ডেশন কোর্স।';
    } else if (track.slug === 'game-development-unity') {
      matchReason_en = 'Matches your dream of building 2D/3D games and interactive simulations in Unity and C#.';
      matchReason_bn = 'ইউনিটি ইঞ্জিন ও সি-শার্প দিয়ে ২ডি/৩ডি ভিডিও গেম তৈরির জন্য এটি সেরা পথ।';
    } else if (track.slug === 'ai-ml-engineer') {
      matchReason_en = 'Cutting-edge artificial intelligence, neural networks, and generative AI systems using PyTorch.';
      matchReason_bn = 'পাইটর্চ ও আধুনিক জেনারেটিভ এআই নিয়ে উন্নত ইঞ্জিনিয়ারিং ক্যারিয়ার গড়ার পথ।';
    } else if (track.slug === 'ethical-hacking-bug-bounty') {
      matchReason_en = 'Offensive cybersecurity, vulnerability hunting, and international bug bounty rewards on HackerOne.';
      matchReason_bn = 'ওয়েব নিরাপত্তা ত্রুটি নির্ণয়, বার্প স্যুট দিয়ে পেনিট্রেশন টেস্টিং ও বাগ বাউন্টি হান্টিং।';
    } else if (track.slug === 'enterprise-java-fintech') {
      matchReason_en = 'Core banking systems, Spring Boot microservices, and mobile financial services in Bangladesh.';
      matchReason_bn = 'দেশের ব্যাংক ও ফিনটেক প্রতিষ্ঠানে স্থায়ী নিয়োগের জন্য স্প্রিং বুট জাভা আর্কিটেকচার।';
    } else if (track.slug === 'laravel-php-agency-dev') {
      matchReason_en = 'Fastest job placement track for junior CST students across hundreds of software agencies in Dhaka.';
      matchReason_bn = 'লারাভেল ও মাইএসকিউএল দিয়ে দেশীয় সফটওয়্যার ফার্মে দ্রুত চাকরি পাওয়ার নিশ্চিত পথ।';
    } else if (track.slug === 'desktop-app-development') {
      matchReason_en = 'Practical desktop software for supermarkets, pharmacies, offline POS, and hardware peripherals.';
      matchReason_bn = 'দোকান ও সুপারশপের অফলাইন ক্যাশ মেমো, পিওএস সফটওয়্যার ও ডেস্কটপ টুলস তৈরি।';
    } else if (track.slug === 'data-engineering-big-data') {
      matchReason_en = 'High-throughput big data pipelines, distributed Spark clusters, and cloud data warehouses.';
      matchReason_bn = 'টেলিকম ও ব্যাংকিং খাতের বিশাল ডেটা প্রসেসিং পাইপলাইন তৈরির উচ্চ আয়ের ক্যারিয়ার।';
    } else if (track.slug === 'blockchain-web3-developer') {
      matchReason_en = 'Decentralized smart contracts, Web3 protocols, and borderless remote developer contracts.';
      matchReason_bn = 'সলিডিটি ও ব্লকচেইন দিয়ে স্বয়ংক্রিয় স্মার্ট কন্ট্রাক্ট ও গ্লোবাল রিমোট কাজের সুযোগ।';
    }

    // Hardware tips
    let hardwareTip_en = 'Can be practiced using standard PC setups or polytechnic lab hours.';
    let hardwareTip_bn = 'পলিটেকনিক ল্যাব ও সাধারণ কম্পিউটারে প্র্যাকটিস করা সম্ভব।';
    if (hardware === 'phone_only') {
      if (track.slug === 'frontend-fullstack-web' || track.slug === 'backend-systems-engineering' || track.slug === 'laravel-php-agency-dev') {
        hardwareTip_en = 'Use GitHub Codespaces or Replit in browser, plus phone typing practice via USB OTG keyboard.';
        hardwareTip_bn = 'মোবাইল ব্রাউজারে গিটহাব কোডস্পেস ও ওটিজি কিবোর্ড ব্যবহার করে প্র্যাকটিস করা যায়।';
      } else if (track.slug === 'linux-devops-admin' || track.slug === 'python-data-ai') {
        hardwareTip_en = 'Install free Termux on Android to practice Linux terminal commands, Python, and SQL directly on phone.';
        hardwareTip_bn = 'অ্যান্ড্রয়েডে ফ্রি টার্মাক্স (Termux) দিয়ে সরাসরি লিনাক্স কমান্ড, পাইথন ও এসকিউএল প্র্যাকটিস করো।';
      } else if (track.slug === 'embedded-iot-robotics') {
        hardwareTip_en = 'Simulate Arduino and ESP32 circuits with live sensors in the free Wokwi browser simulator on your phone.';
        hardwareTip_bn = 'মোবাইলের ব্রাউজারে ফ্রি ওকউই (Wokwi) সিমুলেটর দিয়ে আরডুইনো ও ইএসপি৩২ সার্কিট প্র্যাকটিস করো।';
      } else if (track.slug === 'cybersecurity-soc-analyst' || track.slug === 'ethical-hacking-bug-bounty') {
        hardwareTip_en = 'Study theory on mobile; use polytechnic lab sessions for Wireshark packet captures and Nmap scans.';
        hardwareTip_bn = 'মোবাইলে থিওরি পড়ে ল্যাব ক্লাসের সময়গুলোতে ওয়্যারশার্ক ও এনম্যাপ দিয়ে প্র্যাকটিস করো।';
      }
    }

    return {
      track,
      matchScore: matchPercent,
      matchReason_en,
      matchReason_bn,
      fitTag_en,
      fitTag_bn,
      hardwareTip_en,
      hardwareTip_bn,
      targetRole_en: role_en,
      targetRole_bn: role_bn,
      targetStack: stack,
    };
  });

  const primaryRoleInfo = getTrackRoleAndStack(primaryTrack);
  const personalizedRole_en = primaryRoleInfo.role_en;
  const personalizedRole_bn = primaryRoleInfo.role_bn;
  const targetStack = primaryRoleInfo.stack;

  // Calculate match score percentage
  const matchScore = isSkipped ? 0 : (suggestedTracks[0]?.matchScore || 99);

  // Craft Honest Verdict
  const verdict = buildHonestVerdict({
    submission,
    primaryTrack,
    secondaryTrack,
    requiresFoundation,
    personalizedRole_en,
    personalizedRole_bn,
    timelineAndCerts,
    isSkipped,
  });

  // Generate unique 6-character Save Code
  const saveCode = generateSaveCode();

  // Save to database
  const [newProfile] = await db.insert(studentProfiles).values({
    saveCode,
    name: submission.studentName || 'CST Student',
    phoneOrRoll: submission.phoneOrRoll || null,
    languagePref: 'bn',
    hardwareTier: hardware,
    pcLiteracy: literacy,
    englishLevel: english,
    urgencyLevel: urgency,
    interestArea: primaryTrack.slug,
    primaryTrackId: primaryTrack.id,
    secondaryTrackId: secondaryTrack.id,
    verdictData: {
      ...verdict,
      personalizedRole_en,
      personalizedRole_bn,
      targetStack,
      hardwareSetupGuide_en,
      hardwareSetupGuide_bn,
    },
  }).returning();

  // Save individual survey responses dynamically
  const surveyEntries = Object.entries(raw)
    .filter(([key, val]) => typeof val === 'string' && key !== 'studentName' && key !== 'phoneOrRoll')
    .map(([key, val]) => ({
      studentId: newProfile.id,
      questionKey: key,
      selectedOption: String(val),
    }));

  if (surveyEntries.length > 0) {
    await db.insert(surveyResponses).values(surveyEntries);
  }

  return {
    primaryTrack,
    secondaryTrack,
    matchScore,
    isSkipped,
    requiresFoundationTrack: requiresFoundation,
    suggestedTracks,
    allTracks: tracks,
    personalizedRole_en,
    personalizedRole_bn,
    targetStack,
    hardwareSetupGuide_en,
    hardwareSetupGuide_bn,
    verdict,
    saveCode,
    studentId: newProfile.id,
  };
}

export async function createDirectSelectionProfile(params: {
  trackSlug: string;
  languagePref?: string;
}): Promise<DiagnosticResult> {
  const allTracksRows = await db.select().from(careerTracks);
  const tracks: CareerTrack[] = allTracksRows.map((t: any) => ({
    id: t.id,
    slug: t.slug,
    title_en: t.titleEn,
    title_bn: t.titleBn,
    summary_en: t.summaryEn,
    summary_bn: t.summaryBn,
    pivotAdvice_en: t.pivotAdviceEn,
    pivotAdvice_bn: t.pivotAdviceBn,
    minPcRequired: t.minPcRequired,
    dayToDay_en: t.dayToDayJson?.en || [],
    dayToDay_bn: t.dayToDayJson?.bn || [],
    mustHaveSkills: t.mustHaveSkillsJson || [],
    marketData: t.marketDataJson,
    roadmapPhases: t.roadmapPhasesJson || [],
    interviewQuestions: t.interviewQuestionsJson || [],
    freeCerts: t.freeCertsJson || [],
  }));

  const primaryTrack = tracks.find(t => t.slug === params.trackSlug) || tracks[0];
  const secondaryTrack = tracks.find(t => t.slug !== params.trackSlug) || tracks[1];

  let personalizedRole_en = primaryTrack.title_en;
  let personalizedRole_bn = primaryTrack.title_bn;
  let targetStack = ['Core Skills', 'Practical Projects', 'Git & GitHub'];

  if (primaryTrack.slug === 'frontend-fullstack-web') {
    personalizedRole_en = 'Full-Stack Software Engineer (MERN / TypeScript Stack)';
    personalizedRole_bn = 'ফুল-স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার (রিয়্যাক্ট, নোড ও টাইপস্ক্রিপ্ট)';
    targetStack = ['JavaScript', 'TypeScript', 'React 19', 'Node.js', 'PostgreSQL', 'Tailwind CSS'];
  } else if (primaryTrack.slug === 'backend-systems-engineering') {
    personalizedRole_en = 'Backend API Systems & Database Engineer';
    personalizedRole_bn = 'ব্যাকএন্ড এপিআই ও ডেটাবেস ইঞ্জিনিয়ার';
    targetStack = ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Drizzle ORM', 'Docker'];
  } else if (primaryTrack.slug === 'mobile-app-development') {
    personalizedRole_en = 'Mobile App Developer (Flutter & Android/iOS)';
    personalizedRole_bn = 'মোবাইল অ্যাপ ডেভেলপার (ফ্লাটার ও অ্যান্ড্রয়েড)';
    targetStack = ['Dart', 'Flutter', 'Firebase', 'State Management (Provider)', 'REST APIs'];
  } else if (primaryTrack.slug === 'linux-devops-admin') {
    personalizedRole_en = 'Linux & DevOps Systems Engineer';
    personalizedRole_bn = 'লিনাক্স ও ডেভঅপ্স সিস্টেম ইঞ্জিনিয়ার';
    targetStack = ['Linux Ubuntu', 'Docker', 'GitHub Actions', 'Nginx', 'Bash'];
  } else if (primaryTrack.slug === 'cloud-solutions-architecture') {
    personalizedRole_en = 'AWS Cloud Solutions & Infrastructure Engineer';
    personalizedRole_bn = 'এডব্লিউএস ক্লাউড সল্যুশনস ও ইনফ্রাস্ট্রাকচার ইঞ্জিনিয়ার';
    targetStack = ['AWS Core (EC2, S3, RDS)', 'VPC Networking', 'Terraform', 'Docker', 'CloudWatch'];
  } else if (primaryTrack.slug === 'cybersecurity-soc-analyst') {
    personalizedRole_en = 'Cyber Security & SOC Incident Analyst';
    personalizedRole_bn = 'সাইবার সিকিউরিটি ও এসওসি অ্যানালিস্ট';
    targetStack = ['Wireshark', 'Kali Linux', 'OWASP Top 10', 'Nmap', 'Burp Suite', 'Fail2ban'];
  } else if (primaryTrack.slug === 'python-data-ai') {
    personalizedRole_en = 'Python Data Analyst & Applied AI Associate';
    personalizedRole_bn = 'পাইথন ডেটা অ্যানালিস্ট ও অ্যাপ্লায়েড এআই অ্যাসোসিয়েট';
    targetStack = ['Python', 'SQL (PostgreSQL)', 'Pandas', 'Power BI', 'BeautifulSoup'];
  } else if (primaryTrack.slug === 'embedded-iot-robotics') {
    personalizedRole_en = 'Embedded Systems, IoT & Industrial Automation Engineer';
    personalizedRole_bn = 'এমবেডেড সিস্টেমস, আইওটি ও ফ্যাক্টরি অটোমেশন ইঞ্জিনিয়ার';
    targetStack = ['C/C++', 'Arduino & ESP32', 'Sensors & Relays', 'MQTT Protocols', 'Raspberry Pi'];
  } else if (primaryTrack.slug === 'isp-mikrotik-networking') {
    personalizedRole_en = 'ISP & MikroTik Network Engineer';
    personalizedRole_bn = 'আইএসপি ও মাইক্রোটিক নেটওয়ার্ক ইঞ্জিনিয়ার';
    targetStack = ['MikroTik RouterOS', 'WinBox', 'BDIX Peering', 'Bandwidth Queues'];
  } else if (primaryTrack.slug === 'game-development-unity') {
    personalizedRole_en = 'Game Developer & Simulation Engineer (Unity & C#)';
    personalizedRole_bn = 'গেম ডেভেলপার ও সিমুলেশন ইঞ্জিনিয়ার (ইউনিটি ও সি-শার্প)';
    targetStack = ['Unity Engine', 'C#', '2D/3D Physics', 'Game Loop Architecture', 'Android APK Export'];
  } else if (primaryTrack.slug === 'ai-ml-engineer') {
    personalizedRole_en = 'AI & Machine Learning Engineer (PyTorch & Generative AI)';
    personalizedRole_bn = 'এআই ও মেশিন লার্নিং ইঞ্জিনিয়ার (পাইটর্চ ও জেনারেটিভ এআই)';
    targetStack = ['Python', 'PyTorch', 'Hugging Face', 'Vector Databases', 'RAG Architecture'];
  } else if (primaryTrack.slug === 'ethical-hacking-bug-bounty') {
    personalizedRole_en = 'Ethical Hacker & Web Application Bug Hunter';
    personalizedRole_bn = 'এথিক্যাল হ্যাকার ও ওয়েব অ্যাপ্লিকেশন বাউন্টি হান্টার';
    targetStack = ['Burp Suite Pro', 'OWASP Top 10', 'Reconnaissance', 'SQLi & XSS', 'HackerOne'];
  } else if (primaryTrack.slug === 'enterprise-java-fintech') {
    personalizedRole_en = 'Enterprise Java & FinTech Core Systems Developer';
    personalizedRole_bn = 'এন্টারপ্রাইজ জাভা ও ফিনটেক কোর সিস্টেমস ডেভেলপার';
    targetStack = ['Java 21', 'Spring Boot 3', 'Microservices', 'PostgreSQL', 'bKash Payment APIs'];
  } else if (primaryTrack.slug === 'laravel-php-agency-dev') {
    personalizedRole_en = 'Laravel & Full-Stack Agency Web Developer';
    personalizedRole_bn = 'লারাভেল ও ফুল-স্ট্যাক এজেন্সি ওয়েব ডেভেলপার';
    targetStack = ['PHP 8.3', 'Laravel 11', 'MySQL', 'Livewire', 'Tailwind CSS', 'VPS Deployment'];
  } else if (primaryTrack.slug === 'desktop-app-development') {
    personalizedRole_en = 'Desktop Application & POS Systems Developer';
    personalizedRole_bn = 'ডেস্কটপ অ্যাপ্লিকেশন ও পিওএস সফটওয়্যার ডেভেলপার';
    targetStack = ['Electron.js', 'Tauri / Rust', 'C# / .NET', 'SQLite', 'Thermal Printer ESC/POS'];
  } else if (primaryTrack.slug === 'data-engineering-big-data') {
    personalizedRole_en = 'Data Engineer & Big Data Systems Architect';
    personalizedRole_bn = 'ডেটা ইঞ্জিনিয়ার ও বিগ ডেটা সিস্টেমস আর্কিটেক্ট';
    targetStack = ['Apache Spark', 'Apache Kafka', 'PostgreSQL', 'Python', 'Apache Airflow'];
  } else if (primaryTrack.slug === 'blockchain-web3-developer') {
    personalizedRole_en = 'Web3 & Smart Contract Blockchain Developer';
    personalizedRole_bn = 'ওয়েব৩ ও স্মার্ট কন্ট্রাক্ট ব্লকচেইন ডেভেলপার';
    targetStack = ['Solidity 0.8+', 'Hardhat', 'Ethers.js', 'OpenZeppelin', 'EVM Chains'];
  }

  const saveCode = generateSaveCode();

  const verdict = {
    heading_en: `Direct Track Selection: ${personalizedRole_en}`,
    heading_bn: `সরাসরি নির্বাচিত রোডম্যাপ: ${personalizedRole_bn}`,
    body_en: `You have directly selected ${personalizedRole_en}. Your learning journey is tailored with step-by-step milestones, interview questions, and verified certifications.`,
    body_bn: `তুমি সরাসরি ${personalizedRole_bn} রোডম্যাপটি বেছে নিয়েছ। ধাপে ধাপে শেখার মাইলস্টোন, ভাইভা প্রশ্ন ও ফ্রি সার্টিফিকেশন দিয়ে তোমার ক্যারিয়ার প্ল্যান প্রস্তুত।`,
    hardwareVerdict_en: 'Practice consistently on your available computer or polytechnic lab.',
    hardwareVerdict_bn: 'নিয়মিত পলিটেকনিক ল্যাব ও নিজের কম্পিউটারে প্র্যাকটিস করো।',
    englishVerdict_en: 'Curated bilingual resources supporting both Bangla and professional English.',
    englishVerdict_bn: 'বাংলা ও প্রফেশনাল ইংরেজির সমন্বয়ে শেখার উপাদান রাখা হয়েছে।',
    urgencyVerdict_en: 'Follow each phase systematically for measurable job readiness.',
    urgencyVerdict_bn: 'চাকরি প্রস্তুতির জন্য প্রতিটি ধাপ ধারাবাহিকভাবে সম্পন্ন করো।',
    expenseVerdict_en: 'Includes 100% free verified international and Bangladesh credentials.',
    expenseVerdict_bn: 'আন্তর্জাতিক ও দেশীয় ফ্রি সার্টিফিকেটের দিকনির্দেশনা দেওয়া রয়েছে।',
    actionPlanPoints_en: [
      'Begin Phase 1 of your selected roadmap immediately.',
      'Practice hands-on tasks in lab sessions.',
      'Earn free verified certificates to display on your CV.'
    ],
    actionPlanPoints_bn: [
      'তোমার নির্বাচিত রোডম্যাপের প্রথম পর্ব আজ থেকেই শুরু করে দাও।',
      'ল্যাব ক্লাসের সময়টুকু হাতে-কলমে প্র্যাকটিসের কাজে লাগাও।',
      'সিভিতে যুক্ত করার জন্য ভেরিফায়েড ফ্রি সার্টিফিকেটগুলো একে একে অর্জন করো।'
    ]
  };

  const [newProfile] = await db.insert(studentProfiles).values({
    saveCode,
    name: 'CST Student',
    languagePref: params.languagePref || 'bn',
    hardwareTier: 'standard_pc',
    pcLiteracy: 'basic_user',
    englishLevel: 'struggle_english',
    urgencyLevel: 'study_1_to_2_years',
    interestArea: primaryTrack.slug,
    primaryTrackId: primaryTrack.id,
    secondaryTrackId: secondaryTrack.id,
    verdictData: {
      ...verdict,
      personalizedRole_en,
      personalizedRole_bn,
      targetStack,
      hardwareSetupGuide_en: 'Standard development environment.',
      hardwareSetupGuide_bn: 'সাধারণ কম্পিউটার সেটআপ।',
    },
  }).returning();

  return {
    primaryTrack,
    secondaryTrack,
    matchScore: 95,
    requiresFoundationTrack: false,
    allTracks: tracks,
    personalizedRole_en,
    personalizedRole_bn,
    targetStack,
    hardwareSetupGuide_en: 'Standard development environment.',
    hardwareSetupGuide_bn: 'সাধারণ কম্পিউটার সেটআপ।',
    verdict,
    saveCode,
    studentId: newProfile.id,
  };
}

function buildHonestVerdict(params: {
  submission: any;
  primaryTrack: CareerTrack;
  secondaryTrack: CareerTrack;
  requiresFoundation: boolean;
  personalizedRole_en: string;
  personalizedRole_bn: string;
  timelineAndCerts?: string;
  isSkipped?: boolean;
}) {
  const { submission, primaryTrack, secondaryTrack, requiresFoundation, personalizedRole_en, personalizedRole_bn, timelineAndCerts, isSkipped } = params;

  if (isSkipped) {
    return {
      heading_en: 'Direct Roadmap Selection',
      heading_bn: 'সরাসরি রোডম্যাপ নির্বাচন',
      body_en: 'You skipped the diagnostic questions. You can choose any of the 24 career roadmaps below to start your learning journey.',
      body_bn: 'তুমি ডায়াগনস্টিক প্রশ্নগুলো এড়িয়ে গিয়েছ। নিচে দেওয়া ২৪টি ক্যারিয়ার রোডম্যাপ থেকে যেকোনোটি সরাসরি বেছে নিয়ে শুরু করতে পারো।',
      hardwareVerdict_en: 'All roadmaps provide practical guidance for both mobile lab sessions and computer setups.',
      hardwareVerdict_bn: 'মোবাইল বা কম্পিউটার যেকোনো ডিভাইসে শেখার কার্যকর দিকনির্দেশনা দেওয়া আছে।',
      englishVerdict_en: 'Clear bilingual instructions in simple Bangla and professional English.',
      englishVerdict_bn: 'সহজ বাংলা ও প্রয়োজনীয় টেকনিক্যাল ইংরেজি সহ সাজানো হয়েছে।',
      urgencyVerdict_en: 'Learn at your own pace alongside your diploma coursework.',
      urgencyVerdict_bn: 'ডিপ্লোমা পড়াশোনার পাশাপাশি নিজের সুবিধাজনক গতিতে প্রস্তুতি নাও।',
      expenseVerdict_en: 'Features 100% free verified international and national certifications.',
      expenseVerdict_bn: 'শতভাগ ফ্রি আন্তর্জাতিক ও জাতীয় সার্টিফিকেট অর্জনের সুযোগ রয়েছে।',
      actionPlanPoints_en: [
        'Select any of the 24 roadmaps that matches your personal ambition.',
        'Follow Phase 1 milestones during polytechnic lab or study hours.',
        'Collect free certificates to build a verified CV portfolio.'
      ],
      actionPlanPoints_bn: [
        '২৪টি রোডম্যাপের মধ্য থেকে তোমার পছন্দের পথটি বেছে নাও।',
        'ল্যাব ও অবসর সময়ে প্রথম পর্বের মাইলস্টোনগুলো শেষ করো।',
        'সিভি সমৃদ্ধ করতে ভেরিফায়েড ফ্রি সার্টিফিকেটগুলো একে একে সংগ্রহ করো।'
      ],
    };
  }

  const hardware = submission.hardware || 'phone_only';
  const literacy = submission.literacy || 'basic_user';
  const english = submission.english || 'struggle_english';
  const urgency = submission.urgency || 'study_1_to_2_years';

  const heading_en = `Suggested Path: ${personalizedRole_en}`;
  const heading_bn = `প্রস্তাবিত দিকনির্দেশনা: ${personalizedRole_bn}`;

  const body_en = `Based on your exact responses, your most pragmatic career track is ${personalizedRole_en}. Your alternative backup track is ${secondaryTrack.title_en}. You have full flexibility to select or switch to any roadmap at any time.`;
  const body_bn = `তোমার দেওয়া তথ্যের ভিত্তিতে এই মুহূর্তে সবচেয়ে কার্যকরী ও সম্ভাবনাময় পথ হলো ${personalizedRole_bn}। তোমার বিকল্প ট্র্যাক হলো ${secondaryTrack.title_bn}। তুমি চাইলে যেকোনো সময় যেকোনো রোডম্যাপ বেছে নিতে পারবে।`;

  // Hardware specific verdict
  let hardwareVerdict_en = '';
  let hardwareVerdict_bn = '';
  if (hardware === 'phone_only') {
    hardwareVerdict_en = 'Hardware Setup: Because you do not currently have a personal computer at home, your roadmap provides mobile-accessible tools and practical lab schedules.';
    hardwareVerdict_bn = 'হার্ডওয়্যার প্রস্তুতি: যেহেতু বাসায় পার্সোনাল কম্পিউটার নেই, তাই মোবাইল ফ্রেন্ডলি টুলস ও পলিটেকনিক ল্যাব ব্যবহারের কার্যকর গাইড দেওয়া হয়েছে।';
  } else if (hardware === 'low_spec_pc') {
    hardwareVerdict_en = 'Hardware Setup: Your low-spec computer is completely adequate for lightweight tools, terminals, and web-based editors without slowdowns.';
    hardwareVerdict_bn = 'হার্ডওয়্যার প্রস্তুতি: তোমার সাধারণ পিসি দিয়েই হালকা এডিটর ও ব্রাউজারের মাধ্যমে কাজ শুরু করা সম্ভব।';
  } else {
    hardwareVerdict_en = 'Hardware Capability: Your computer setup has zero bottlenecks. You can comfortably run modern development tools and virtual labs.';
    hardwareVerdict_bn = 'হার্ডওয়্যার সক্ষমতা: তোমার কম্পিউটারে কোনো সীমাবদ্ধতা নেই। আধুনিক যেকোনো সফটওয়্যার ও প্রজেক্ট অনায়াসে চালাতে পারবে।';
  }

  // English specific verdict
  let englishVerdict_en = '';
  let englishVerdict_bn = '';
  if (english === 'struggle_english') {
    englishVerdict_en = 'Language Strategy: All primary concepts are provided with curated Bangla resources, while essential technical workplace terms are introduced gradually.';
    englishVerdict_bn = 'ভাষার কৌশল: সব কনসেপ্ট সহজ বাংলায় ব্যাখ্যা করা হয়েছে। পাশাপাশি ভাইভাতে কাজে লাগে এমন প্রয়োজনীয় টেকনিক্যাল ইংরেজি শব্দ ধাপে ধাপে শেখানো হবে।';
  } else {
    englishVerdict_en = 'Language Advantage: Your comfort with technical English allows you to study official documentation directly and prepares you for international remote contract opportunities.';
    englishVerdict_bn = 'ভাষাগত সুবিধা: টেকনিক্যাল ইংরেজি পড়ার সক্ষমতা থাকার কারণে তুমি সরাসরি অফিশিয়াল ডকুমেন্টেশন ব্যবহার করতে পারবে।';
  }

  // Financial Urgency / Timeline verdict
  let urgencyVerdict_en = '';
  let urgencyVerdict_bn = '';
  if (timelineAndCerts === 'urgent_job_free_certs' || urgency === 'earn_3_to_6_months') {
    urgencyVerdict_en = 'Timeline Reality: Focused on high-velocity local employment tracks where CST diploma holders are recruited immediately across Bangladesh.';
    urgencyVerdict_bn = 'আয়ের তাগিদ: দ্রুত চাকরিযোগ্য স্থানীয় ট্র্যাকে ফোকাস করা হয়েছে যেখানে পলিটেকনিক শিক্ষার্থীদের দ্রুত কাজের সুযোগ হয়।';
  } else if (timelineAndCerts === 'vendor_exam_ccna_aws') {
    urgencyVerdict_en = 'Timeline Strategy: Tailored for recognized industry vendor credentials alongside diploma coursework.';
    urgencyVerdict_bn = 'সময়ের কৌশল: পলিটেকনিক পড়াশোনার পাশাপাশি অফিশিয়াল ভেন্ডর সার্টিফিকেট অর্জনের জন্য সুবিন্যস্ত পরিকল্পনা।';
  } else {
    urgencyVerdict_en = 'Timeline Strategy: You have a healthy runway during your diploma to build deep portfolio projects and prepare thoroughly for engineering roles.';
    urgencyVerdict_bn = 'সময়ের সঠিক ব্যবহার: ডিপ্লোমা চলাকালীন তোমার হাতে পর্যাপ্ত সময় রয়েছে গভীর মনোযোগ দিয়ে মানসম্মত প্রজেক্ট পোর্টফোলিও তৈরি করার।';
  }

  // Course Expense / Budget verdict
  let expenseVerdict_en = 'Certification Strategy: Calibrated for 100% Free Learning. All featured certifications (Harvard CS50, freeCodeCamp, Cisco NetAcad, Muktopaath) have zero tuition costs.';
  let expenseVerdict_bn = 'কোর্স ও বাজেট কৌশল: শতভাগ ফ্রি লার্নিং ফ্রেমওয়ার্ক। রোডম্যাপে থাকা হার্ভার্ড সিএস৫০, ফ্রি-কোড-ক্যাম্প ও সিসকোর আন্তর্জাতিক সার্টিফিকেটে কোনো কোর্স ফি নেই।';

  if (timelineAndCerts === 'vendor_exam_ccna_aws') {
    expenseVerdict_en = 'Certification Strategy: Vendor Exam Target. Directly prepares you for recognized industry credentials (MikroTik MTCNA / Cisco CCNA / AWS Cloud).';
    expenseVerdict_bn = 'কোর্স ও বাজেট কৌশল: অফিশিয়াল আন্তর্জাতিক পরীক্ষার লক্ষ্য। পলিটেকনিক পড়াশোনার পাশাপাশি ভেন্ডর সার্টিফিকেটের সিলেবাস অনুযায়ী প্রস্তুতি নিশ্চিত করা হয়েছে।';
  }

  const actionPlanPoints_en = [
    'Select your preferred roadmap and begin Phase 1 immediately.',
    'Use polytechnic lab classes actively for hands-on experiments rather than theoretical study alone.',
    'Complete the curated 100% free certifications specified in your roadmap to prove your skills on your CV.',
    'Review the Role-Specific Interview Questions Vault weekly to master professional technical answers.'
  ];

  const actionPlanPoints_bn = [
    'তোমার পছন্দের রোডম্যাপটি বেছে নিয়ে প্রথম পর্বের কাজ আজ থেকেই শুরু করো।',
    'পলিটেকনিকের ল্যাব ক্লাসের সময়টুকু অলসভাবে না কাটিয়ে হাতে-কলমে প্র্যাকটিসের কাজে লাগাও।',
    'সিভিতে যুক্ত করার জন্য রোডম্যাপে দেওয়া ভেরিফায়েড সার্টিফিকেটগুলো একে একে অর্জন করো।',
    'ইন্টারভিউ ভল্টে থাকা প্রশ্নগুলো প্রতি সপ্তাহে রিভিশন দাও যাতে ভাইভাতে আত্মবিশ্বাসের সাথে উত্তর দিতে পারো।'
  ];

  return {
    heading_en,
    heading_bn,
    body_en,
    body_bn,
    hardwareVerdict_en,
    hardwareVerdict_bn,
    englishVerdict_en,
    englishVerdict_bn,
    urgencyVerdict_en,
    urgencyVerdict_bn,
    expenseVerdict_en,
    expenseVerdict_bn,
    actionPlanPoints_en,
    actionPlanPoints_bn,
  };
}
