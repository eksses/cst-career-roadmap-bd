import type { CareerTrack } from '../../../shared/types.js';

export const blockchainWeb3DeveloperTrack: Omit<CareerTrack, 'id'> = {
  slug: 'blockchain-web3-developer',
  title_en: 'Blockchain, Web3 and Smart Contract Engineering (Solidity & EVM)',
  title_bn: 'ব্লকচেইন, ওয়েব৩ ও স্মার্ট কন্ট্রাক্ট ইঞ্জিনিয়ারিং (সলিডিটি ও ইভিএম)',
  summary_en: 'Engineering decentralized smart contracts and Web3 dApps using Solidity, Hardhat, Ethers.js, and Ethereum Virtual Machine (EVM). Covers ERC-20 tokens, DeFi protocols, smart contract security audits, and decentralized storage on IPFS.',
  summary_bn: 'সলিডিটি (Solidity), হার্ডহ্যাট (Hardhat), ইথারস.জেএস (Ethers.js) ও ইথেরিয়াম ভার্চুয়াল মেশিন (EVM) দিয়ে ডিসেন্ট্রালাইজড স্মার্ট কন্ট্রাক্ট ও ওয়েব৩ অ্যাপ্লিকেশন তৈরির ক্যারিয়ার ট্র্যাক। নিরাপদ ফিনান্সিয়াল প্রোটোকল, টোকেন ও আইপিএফএস (IPFS) স্টোরেজের বাস্তব গাইড।',
  pivotAdvice_en: 'Blockchain engineering offers some of the highest remote compensation in the software industry. If you are fascinated by immutable ledgers, cryptography, and decentralized financial code that runs without servers, Web3 opens borderless freelance bounties and remote US/Europe contracts.',
  pivotAdvice_bn: 'স্মার্ট কন্ট্রাক্ট ইঞ্জিনিয়ারিং গ্লোবাল রিমোট চাকরির বাজারে শীর্ষ আয়ের একটি বিশেষ ক্ষেত্র। ক্রিপ্টোগ্রাফি, বিকেন্দ্রীভূত অ্যাপ্লিকেশন এবং সার্ভার ছাড়া স্বয়ংক্রিয়ভাবে চলা কোড তৈরিতে যাদের আগ্রহ রয়েছে, তারা বিশ্বের যেকোনো প্রান্ত থেকে ডলার বাউন্টি ও রিমোট প্রজেক্টে যুক্ত হতে পারেন।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Writing secure, gas-optimized smart contracts in Solidity adhering to ERC standards (ERC-20, ERC-721).',
    'Simulating blockchain transactions, local hardforks, and unit tests using Hardhat and Foundry.',
    'Connecting React/Next.js frontend user interfaces to Ethereum wallets (MetaMask, Rainbow) via Ethers.js and Wagmi.',
    'Auditing smart contracts against reentrancy attacks, integer overflows, and front-running vulnerabilities.',
    'Deploying contracts to Ethereum Layer 2 testnets (Arbitrum, Polygon, Base) and verifying code on Etherscan.'
  ],
  dayToDay_bn: [
    'সলিডিটি ভাষায় গ্যাস-অপ্টিমাইজড ও সুরক্ষিত স্মার্ট কন্ট্রাক্ট লেখা যা ব্লকচেইনে আজীবন সংরক্ষিত থাকবে।',
    'হার্ডহ্যাট (Hardhat) দিয়ে লোকাল ব্লকচেইন সিমুলেট করে কোডের নিশ্ছিদ্র টেস্ট চালানো।',
    'রিয়্যাক্ট বা নেক্সট.জেএস ওয়েব ইন্টারফেসের সাথে মেটামাস্ক (MetaMask) ওয়ালেট কানেক্ট করে ট্রানজ্যাকশন সাইন করানো।',
    'স্মার্ট কন্ট্রাক্টের নিরাপত্তা অডিট করা যাতে রি-এন্ট্রান্সি (Reentrancy) অ্যাটাকের মাধ্যমে ব্যালেন্স হ্যাক না হয়।',
    'পলিগন (Polygon), আর্বিট্রাম বা বেস (Base) নেটওয়ার্কে কন্ট্রাক্ট লাইভ ডিপ্লয় করা ও ইথারস্ক্যানে কোড ভেরিফাই করা।'
  ],
  mustHaveSkills: [
    {
      id: 'solidity-smart-contracts',
      name: 'Solidity 0.8+ and EVM Architecture',
      category: 'Smart Contract Language',
      importance: 'Essential',
      description_en: 'State variables, visibility (external, public, internal, private), modifiers, events, gas optimization, and storage slots.',
      description_bn: 'সলিডিটি ডেটা টাইপ, ফাংশন মডিফায়ার, ইভেন্ট লগিং এবং ইভিএম মেমোরি বনাম স্টোরেজের গভীর জ্ঞান।'
    },
    {
      id: 'hardhat-testing-framework',
      name: 'Hardhat, Foundry and Automated Contract Testing',
      category: 'Development Environment',
      importance: 'Essential',
      description_en: 'Local blockchain node, contract compilation, Mocha/Chai test assertions, and gas consumption reports.',
      description_bn: 'হার্ডহ্যাট দিয়ে লোকাল ব্লকচেইন চালানো, টেস্টনেট ফোরকিং এবং শতভাগ নিশ্চিত টেস্ট কেস লেখা।'
    },
    {
      id: 'web3-ethers-wagmi',
      name: 'Ethers.js, Viem and Wallet Integration (MetaMask)',
      category: 'Web3 Client',
      importance: 'Essential',
      description_en: 'Connecting browser providers, signing transactions, contract ABI interaction, and reading blockchain events.',
      description_bn: 'মেটামাস্ক ওয়ালেট কানেক্ট করা, ইউজারের অনুমতি নিয়ে লেনদেনে সাইন করানো এবং এবিআই (ABI) কল।'
    },
    {
      id: 'smart-contract-security',
      name: 'Smart Contract Security and OpenZeppelin Standards',
      category: 'Auditing & Security',
      importance: 'Recommended',
      description_en: 'OpenZeppelin standard libraries (Ownable, ReentrancyGuard), Slither static analysis, and reentrancy attack prevention.',
      description_bn: 'ওপেনজেপেলিন সিকিউরিটি লাইব্রেরি ব্যবহার ও স্লিদার দিয়ে স্বয়ংক্রিয় ভালনারেবিলিটি স্ক্যান করা।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Dhaka (Gulshan, Banani, Remote / Hybrid)',
      entrySalary: { min: 30000, max: 55000, currency: 'BDT', formatted: '30,000 - 55,000 BDT' },
      midSalary: { min: 80000, max: 160000, currency: 'BDT', formatted: '80,000 - 160,000 BDT' },
      seniorSalary: { min: 180000, max: 350000, currency: 'BDT', formatted: '180,000 - 350,000 BDT' },
      hiringSectors: [
        'International Web3 Agencies and Decentralized Finance Labs with offshore offices in Dhaka',
        'Blockchain Traceability & Supply Chain Automation Projects',
        'Crypto Exchange Operations and Web3 Wallet Infrastructure'
      ],
      cvExpectations: [
        'GitHub repository with verified Solidity smart contracts deployed on a live testnet (Sepolia/Polygon)',
        'Demonstrated understanding of reentrancy security defenses and gas minimization techniques',
        'Experience integrating smart contracts with modern React or Next.js dApp frontends',
        'Familiarity with IPFS decentralized storage for asset metadata'
      ],
      localDemandSummary_en: 'While local government adoption focuses on supply chain traceability and digital certificates, 85% of Web3 employment for Bangladeshi developers is direct remote international contracting with global DAOs and Web3 startups.',
      localDemandSummary_bn: 'বাংলাদেশে ব্লকচেইন ডেভেলপমেন্টের বেশিরভাগ কাজ সরাসরি বৈশ্বিক রিমোট প্রজেক্ট, ডিএও (DAO) ও আন্তর্জাতিক স্টার্টআপের সাথে হয়ে থাকে, যা চমৎকার ডলারে আয়ের সুযোগ তৈরি করে।'
    },
    targetCountries: [
      {
        region: 'Global Remote & Crypto Hubs',
        countryName_en: 'Singapore, Switzerland (Crypto Valley), and Dubai',
        countryName_bn: 'সিঙ্গাপুর, সুইজারল্যান্ড ও দুবাই',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ',
        visaReality_en: 'Web3 hubs in Singapore and Dubai grant tech visas to verified Solidity engineers with active GitHub auditable portfolios.',
        visaReality_bn: 'দুবাই ও সিঙ্গাপুরের ব্লকচেইন কোম্পানিগুলো আন্তর্জাতিক সলিডিটি ইঞ্জিনিয়ারদের আকর্ষণীয় বেতনে স্পনসর করে থাকে।',
        averageSalaryUsdOrLocal: '$80,000 - $140,000 USD / year (approx 9,500,000 - 16,800,000 BDT)',
        requiredExperienceYears: '2+ years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি থেকে উচ্চ',
      monthlyRangeUsd: '$1,500 - $6,500 / month',
      competitionLevel: 'Global, won by displaying verifiable deployed contracts on Etherscan and high security audit discipline',
      competitionLevel_bn: 'ইথারস্ক্যানে লাইভ ভেরিফায়েড কন্ট্রাক্ট ও অডিট রিপোর্টের মাধ্যমে বৈশ্বিক রিমোট টিম থেকে কাজ পাওয়া যায়',
      englishRequirement: 'Professional English to write audit documentation and communicate with global core developers on Discord and Telegram',
      englishRequirement_bn: 'ডিসকর্ড ও টেলিগ্রামে আন্তর্জাতিক কোর ডেভেলপারদের সাথে কোড রিভিউ ও অডিট আলোচনা করার ইংরেজি',
      realities_en: [
        'Once a smart contract is deployed to the blockchain, code cannot be edited; zero-tolerance for bugs is required',
        'You can practice, test, and deploy entire Web3 applications completely free using Ethereum testnets and free faucets'
      ],
      realities_bn: [
        'ব্লকচেইনে একবার স্মার্ট কন্ট্রাক্ট ডিপ্লয় হয়ে গেলে কোড আর এডিট করা যায় না, তাই এখানে কোড নিখুঁত করার নিয়মানুবর্তিতা আবশ্যক',
        'ফ্রি টেস্টনেট ও কল ব্যবহার করে নিজের কম্পিউটার থেকেই এক পয়সা খরচ ছাড়া সম্পূর্ণ ব্লকচেইন অ্যাপ টেস্ট করা যায়'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Phase 1: Blockchain Fundamentals and Solidity 0.8+ Syntax',
      phaseTitle_bn: 'প্রথম পর্ব: ব্লকচেইন ফান্ডামেন্টালস ও সলিডিটি সিনট্যাক্স',
      phaseSubtitle_en: 'Day 1 to 25: Cryptographic hashing, peer-to-peer networks, gas economics, and Remix IDE.',
      phaseSubtitle_bn: '১ থেকে ২৫ দিন: ক্রিপ্টোগ্রাফিক হ্যাশ, ব্লকচেইনের গঠন, গ্যাস ফি ও রিমিক্স আইডিই-তে কন্ট্রাক্ট লেখা।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-solidity-remix-foundations',
          title_en: 'Solidity Syntax, Data Types and Remix IDE',
          title_bn: 'সলিডিটি কোডিং ও রিমিক্স আইডিই পরিচিতি',
          description_en: 'State variables, mappings, structs, arrays, modifiers, view/pure functions, and payable functions in Remix.',
          description_bn: 'রিমিক্স ব্রাউজার আইডিই-তে সলিডিটি কোড লিখে লোকাল মেমোরিতে স্মার্ট কন্ট্রাক্ট রান ও টেস্ট করা।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Solidity data types (uint256, address, bool)', 'Mappings and nested structs', 'Custom function modifiers (onlyOwner)'],
          practicalTask_en: 'Write and test a decentralized voting smart contract in Remix IDE where an owner registers candidates and addresses vote once.',
          practicalTask_bn: 'রিমিক্সে একটি সম্পূর্ণ ভোটিং স্মার্ট কন্ট্রাক্ট বানাও যেখানে প্রতিটি ওয়ালেট এড্রেস একবারই ভোট দিতে পারবে।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'Phase 2: Hardhat Development, Testing and ERC Standards',
      phaseTitle_bn: 'দ্বিতীয় পর্ব: হার্ডহ্যাট ফ্রেমওয়ার্ক, টেস্টিং ও ইআরসি টোকেন',
      phaseSubtitle_en: 'Day 26 to 50: Local hardfork testing with Chai, deploying ERC-20 tokens with OpenZeppelin.',
      phaseSubtitle_bn: '২৬ থেকে ৫০ দিন: হার্ডহ্যাট দিয়ে লোকাল নোড রান করা, ওপেনজেপেলিন দিয়ে নিজস্ব টোকেন তৈরি ও টেস্ট।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-hardhat-erc20-openzeppelin',
          title_en: 'Hardhat Environment and OpenZeppelin Token Standards',
          title_bn: 'হার্ডহ্যাট ডেভেলপমেন্ট ও ওপেনজেপেলিন লাইব্রেরি',
          description_en: 'hardhat.config.js, writing automated tests in TypeScript with ethers, importing OpenZeppelin ERC20 contracts.',
          description_bn: 'ওপেনজেপেলিনের সিকিউর লাইব্রেরি ব্যবহার করে স্ট্যান্ডার্ড টোকেন তৈরি ও শতভাগ টেস্ট নিশ্চিতকরণ।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Hardhat local node and accounts', 'OpenZeppelin ERC20 standard inheritance', 'Mocha/Chai contract unit assertions'],
          practicalTask_en: 'Create a fully tested custom ERC-20 token using Hardhat with automated unit tests for minting, burning, and transfers.',
          practicalTask_bn: 'হার্ডহ্যাট দিয়ে একটি নিজস্ব ইআরসি-২০ টোকেন তৈরি করো এবং তার জন্য ১০টি অটোমেটেড টেস্ট কেস সফলভাবে রান করো।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Phase 3: Web3 Frontend Integration with React and Ethers.js',
      phaseTitle_bn: 'তৃতীয় পর্ব: রিয়্যাক্ট ও ইথারস.জেএস দিয়ে ডিসেন্ট্রালাইজড ওয়েব অ্যাপ',
      phaseSubtitle_en: 'Day 51 to 75: Connecting MetaMask, reading contract state, sending transactions, and IPFS metadata.',
      phaseSubtitle_bn: '৫১ থেকে ৭৫ দিন: ব্রাউজারে মেটামাস্ক পপআপ দিয়ে ওয়ালেট লগইন ও স্মার্ট কন্ট্রাক্টে ডেটা আদান-প্রদান।',
      durationWeeks: 4,
      modules: [
        {
          id: 'mod-web3-dapp-react',
          title_en: 'MetaMask Provider, Contract ABIs and Event Listeners',
          title_bn: 'মেটামাস্ক কানেকশন ও ওয়েব৩ ইন্টারফেস তৈরি',
          description_en: 'BrowserProvider, Contract instance from ABI, handling transaction receipts, and listening to Solidity emitted events.',
          description_bn: 'রিয়্যাক্ট অ্যাপে মেটামাস্ক বাটন বসানো, ইউজারের ব্যালেন্স দেখানো এবং লেনদেন নিশ্চিত হলে নোটিফিকেশন দেওয়া।',
          estimatedDays: 15,
          mobileAccessible: false,
          keyTopics: ['ethers.BrowserProvider and getSigner', 'Contract ABI and contract methods', 'Handling user rejected transaction errors'],
          practicalTask_en: 'Build a decentralized crowd-funding dApp with a React frontend where users can donate test ETH to campaigns and see live totals.',
          practicalTask_bn: 'একটি ক্রাউডফান্ডিং ডিসেন্ট্রালাইজড ওয়েব অ্যাপ তৈরি করো যেখানে ওয়ালেট কানেক্ট করে টেস্ট ইথার দান করা যাবে।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Phase 4: Security Auditing, Layer 2 Deployment and Portfolio Verification',
      phaseTitle_bn: 'চতুর্থ পর্ব: সিকিউরিটি অডিটিং, লেয়ার ২ ডিপ্লয় ও ইথারস্ক্যান ভেরিফিকেশন',
      phaseSubtitle_en: 'Day 76 to 90: Reentrancy attack defenses, deploying to Polygon/Arbitrum, and public portfolio verification.',
      phaseSubtitle_bn: '৭৬ থেকে ৯০ দিন: রি-এন্ট্রান্সি হ্যাক প্রতিরোধ, পলিগন টেস্টনেটে কন্ট্রাক্ট লাইভ করা ও ইথারস্ক্যানে কোড ভেরিফাই।',
      durationWeeks: 2,
      modules: [
        {
          id: 'mod-security-audit-l2-deploy',
          title_en: 'Reentrancy Defenses, Gas Profiling and Etherscan Verification',
          title_bn: 'স্মার্ট কন্ট্রাক্ট সিকিউরিটি ও লাইভ নেটওয়ার্ক রিলিজ',
          description_en: 'Checks-Effects-Interactions pattern, ReentrancyGuard, Slither static analysis, deploying via Alchemy/Infura RPC, and Etherscan source verification.',
          description_bn: 'রি-এন্ট্রান্সি গার্ড ব্যবহার, গ্যাস অপ্টিমাইজেশন এবং ইথারস্ক্যানে স্মার্ট কন্ট্রাক্টের গ্রিন টিক ভেরিফিকেশন অর্জন।',
          estimatedDays: 10,
          mobileAccessible: false,
          keyTopics: ['Checks-Effects-Interactions pattern', 'Deploying to Polygon Amoy or Base Sepolia', 'hardhat-etherscan code verification plugin'],
          practicalTask_en: 'Deploy your completed dApp smart contract to a live Ethereum Layer 2 testnet, verify source code on the block explorer, and host the frontend on Vercel.',
          practicalTask_bn: 'তোমার স্মার্ট কন্ট্রাক্টটি পলিগন বা বেস টেস্টনেটে লাইভ হোস্ট করো এবং ফ্রন্টএন্ড ভার্সেলে ডিপ্লয় করে বিশ্বব্যাপী শেয়ার করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'web3-q1',
      question_en: 'What is a Reentrancy attack in Solidity smart contracts? How does the Checks-Effects-Interactions pattern prevent it?',
      question_bn: 'সলিডিটি স্মার্ট কন্ট্রাক্টে রি-এন্ট্রান্সি (Reentrancy) অ্যাটাক কী? চেকস-ইফেক্টস-ইন্টারঅ্যাকশন (Checks-Effects-Interactions) প্যাটার্ন কীভাবে এটি স্থায়ীভাবে সমাধান করে?',
      category: 'Smart Contract Security',
      whyAsked_en: 'The legendary vulnerability that caused the historical 2016 DAO hack and is asked in every single Web3 engineering interview.',
      whyAsked_bn: 'ব্লকচেইন সিকিউরিটি ইন্টারভিউয়ের সবচেয়ে বিখ্যাত প্রশ্ন যা ২০১৬ সালের ঐতিহাসিক দ্য ডিএও হ্যাকের মূল কারণ ছিল।',
      howToAnswer_en: 'A reentrancy attack occurs when a vulnerable contract makes an external call to transfer ether to an untrusted recipient contract before updating its own internal state balance. The malicious contract fallback function hijacks execution control and recursively calls the withdraw function again and again before the original balance is deducted to zero, draining the entire contract. The Checks-Effects-Interactions pattern prevents this completely by enforcing three strict sequential steps: First, CHECK all preconditions (e.g. require(userBalance >= amount)). Second, apply all internal state EFFECTS (deduct userBalance = 0 immediately). Third and only last, make the external INTERACTION (transfer ether). If the attacker recursively re-enters, their balance is already 0, and the attack fails instantly.',
      howToAnswer_bn: 'রি-এন্ট্রান্সি অ্যাটাক তখন ঘটে যখন কোনো স্মার্ট কন্ট্রাক্ট নিজের ব্যালেন্স খাতা থেকে টাকা কমানোর আগেই অন্য কোনো চুক্তিতে টাকা ট্রান্সফার করে। ক্ষতিকর হ্যাকার কন্ট্রাক্ট টাকা রিসিভ করার ফলব্যাক ফাংশন দিয়ে প্রথম ট্রানজ্যাকশন শেষ হওয়ার আগেই বারবার উইথড্র ফাংশনকে রিকার্সিভভাবে কল করতে থাকে, ফলে ব্যালেন্স না কমেও সম্পূর্ণ ভল্ট খালি হয়ে যায়। চেকস-ইফেক্টস-ইন্টারঅ্যাকশন (Checks-Effects-Interactions) নিয়ম মেনে এটি ১০০% প্রতিরোধ করা যায়: ১. প্রথমে চেক করো ইউজারের যথেষ্ট ব্যালেন্স আছে কি না (require)। ২. টাকা পাঠানোর আগেই নিজের লেজারে ইউজারের ব্যালেন্স শূন্য বা বিয়োগ করে দাও (Effects)। ৩. একদম শেষে টাকা পাঠানোর এক্সটার্নাল কল করো (Interactions)। হ্যাকার তখন পুনরায় কল করার চেষ্টা করলেও দেখে তার ব্যালেন্স আগেই শূন্য হয়ে গেছে, ফলে হ্যাকিং ব্যর্থ হয়। এছাড়া ওপেনজেপেলিনের nonReentrant মডিফায়ারও ব্যবহার করা যায়।',
      commonMistakes_en: 'Updating the user balance variable after making the external call to send funds.',
      commonMistakes_bn: 'টাকা পাঠানোর কোডের পরে ইউজারের ব্যালেন্স কমানোর ভুল কোড লেখা।'
    }
  ],
  freeCerts: [
    {
      id: 'cert-web3-freecodecamp',
      title_en: 'Solidity and Blockchain Developer Comprehensive Certification',
      title_bn: 'সলিডিটি ও ব্লকচেইন অফিশিয়াল ফ্রি কোর্স ও ব্যাজ',
      provider: 'freeCodeCamp & Patrick Collins',
      url: 'https://www.freecodecamp.org/news/learn-solidity-blockchain-and-smart-contracts-in-a-free-32-hour-course/',
      mobileAccessible: true,
      language: 'en',
      durationHours: 32,
      cost: '100% Free',
      relevance_en: 'The definitive open-source curriculum for modern Solidity and smart contract engineering.',
      relevance_bn: 'বিশ্বজুড়ে লাখো ব্লকচেইন ইঞ্জিনিয়ারের স্বীকৃত ওপেন-সোর্স ফ্রি ট্রেনিং ও প্রজেক্ট গাইড।'
    }
  ]
};
