import type { CareerTrack } from '../../../shared/types.js';

export const embeddedIotRoboticsTrack: Omit<CareerTrack, 'id'> = {
  slug: 'embedded-iot-robotics',
  title_en: 'Embedded Systems, IoT & Industrial Automation',
  title_bn: 'এমবেডেড সিস্টেমস, আইওটি ও ইন্ডাস্ট্রিয়াল অটোমেশন',
  summary_en: 'Microcontroller programming with C/C++, Arduino and ESP32 Wi-Fi/Bluetooth hardware integration, sensor data acquisition, MQTT protocols, Raspberry Pi edge computing, and industrial electronics.',
  summary_bn: 'মাইক্রোকন্ট্রোলার প্রোগ্রামিং, আরডুইনো ও ইএসপি৩২ দিয়ে আইওটি প্রজেক্ট, সেন্সর ইন্টারফেসিং ও ফ্যাক্টরি অটোমেশনের বাস্তবমুখী ট্র্যাক।',
  pivotAdvice_en: 'If you love physical circuits, microchips, sensors, and electronic devices over writing screen software, embedded systems and IoT offer irreplaceable factory automation and smart hardware engineering roles across Bangladesh.',
  pivotAdvice_bn: 'তুমি যদি কম্পিউটার স্ক্রিনে সারাদিন বসে থাকার চেয়ে আসল ইলেকট্রনিক্স পার্টস, সেন্সর, মোটর ও মাইক্রোকন্ট্রোলার নিয়ে কাজ করতে পছন্দ করো, তবে আইওটি ও অটোমেশন ট্র্যাক তোমার জন্য সেরা। গাজীপুর ও নারায়ণগঞ্জের গার্মেন্টস ও উৎপাদন কারখানায় এর স্থায়ী চাকরির সুযোগ রয়েছে।',
  minPcRequired: 'low',
  dayToDay_en: [
    'Writing lightweight C/C++ firmware to read digital and analog sensors (temperature, humidity, ultrasonic, current).',
    'Programming ESP32 microcontrollers to transmit telemetry data over Wi-Fi and Bluetooth using MQTT protocols.',
    'Designing and breadboarding circuit prototypes with pull-up resistors, transistors, relays, and optocouplers.',
    'Deploying Python scripts on Raspberry Pi single-board computers for edge vision and industrial monitoring.',
    'Troubleshooting factory machinery signals, troubleshooting PLC logic, and maintaining industrial sensors.'
  ],
  dayToDay_bn: [
    'সি/সি++ দিয়ে মাইক্রোকন্ট্রোলার কোড লিখে বিভিন্ন এনালগ ও ডিজিটাল সেন্সর থেকে ডেটা রিড করা।',
    'ইএসপি৩২ (ESP32) দিয়ে ওয়াইফাই ও ব্লুটুথের মাধ্যমে ক্লাউড সার্ভারে ডেটা পাঠানোর সার্কিট তৈরি।',
    'ব্রেডবোর্ডে রিলে, ট্রানজিস্টর ও সেন্সর দিয়ে অটোমেশন প্রোটোটাইপ সার্কিট অ্যাসেম্বল করা।',
    'র‌্যাস্পবেরি পাই কম্পিউটারে পাইথন দিয়ে সিসিটিভি ক্যামেরা ও কারখানা মনিটরিং স্ক্রিপ্ট চালানো।',
    'গার্মেন্টস ও কারখানার পিএলসি (PLC) কন্ট্রোলার এবং অটোমেটিক মেশিনের সিগন্যাল মেরামত করা।'
  ],
  mustHaveSkills: [
    {
      id: 'c-cpp-embedded-core',
      name: 'C/C++ for Microcontrollers',
      category: 'Programming',
      importance: 'Essential',
      description_en: 'Bitwise operations, pointers, interrupts, timers, memory constraints, and register manipulation.',
      description_bn: 'সি/সি++ প্রোগ্রামিং, বিটওয়াইজ অপারেশন ও মাইক্রোকন্ট্রোলার ইন্টারাপ্ট।'
    },
    {
      id: 'arduino-esp32-iot',
      name: 'ESP32 & Arduino Hardware IoT',
      category: 'Hardware & IoT',
      importance: 'Essential',
      description_en: 'GPIO pin configuration, ADC/DAC conversion, I2C/SPI sensor protocols, and Wi-Fi stack.',
      description_bn: 'ইএসপি৩২ ও আরডুইনো দিয়ে সেন্সর রিডিং এবং ওয়াইফাই সংযোগ।'
    },
    {
      id: 'mqtt-iot-protocols',
      name: 'MQTT & Cloud IoT Telemetry',
      category: 'IoT Protocols',
      importance: 'Essential',
      description_en: 'Pub/Sub architecture, Mosquitto brokers, payload optimization, and Adafruit IO / HiveMQ.',
      description_bn: 'এমকিউটিটি প্রোটোকল দিয়ে ক্লাউডে সেন্সর ডেটা পাঠানো ও অ্যাপে প্রদর্শন।'
    },
    {
      id: 'raspberry-pi-linux-edge',
      name: 'Raspberry Pi & Linux Edge Computing',
      category: 'Edge Computing',
      importance: 'Recommended',
      description_en: 'Single-board computer Linux setup, GPIO control with Python, and edge automated scripts.',
      description_bn: 'র‌্যাস্পবেরি পাইতে লিনাক্স ইনস্টলেশন ও পাইথন দিয়ে হার্ডওয়্যার নিয়ন্ত্রণ।'
    }
  ],
  marketData: {
    bangladesh: {
      region: 'Gazipur, Narayanganj, Savar, Tejgaon Industrial Areas',
      entrySalary: { min: 22000, max: 38000, currency: 'BDT', formatted: '22,000 - 38,000 BDT' },
      midSalary: { min: 50000, max: 95000, currency: 'BDT', formatted: '50,000 - 95,000 BDT' },
      seniorSalary: { min: 110000, max: 220000, currency: 'BDT', formatted: '110,000 - 220,000 BDT' },
      hiringSectors: [
        'Electronics Manufacturers (Walton Hi-Tech Industries, Minister MyOne, PRAN-RFL)',
        'Export-Oriented RMG Factories & Textile Automation Divisions (Ha-Meem, DBL Group, Beximco)',
        'Smart Agriculture & Vehicle GPS Tracking Companies (Bondstein Technologies, VTS providers)',
        'Industrial Automation & Solar Power Plant Engineering Firms'
      ],
      cvExpectations: [
        'Demonstrated working hardware prototypes (video links or physical board demonstration during viva)',
        'Clear understanding of sensor communication protocols (I2C, SPI, UART) and relay isolation',
        'Familiarity with soldering, breadboarding, and multimeter voltage/current diagnostics',
        'Diploma in CST or Electrical with genuine passion for hands-on machines'
      ],
      localDemandSummary_en: 'Textile mills and consumer electronic factories across Bangladesh are replacing mechanical manual labor with automated sensors and controllers. CST graduates who understand both coding and circuit wiring are recruited directly as Automation Associates.',
      localDemandSummary_bn: 'বাংলাদেশের শীর্ষস্থানীয় পোশাক কারখানা ও ইলেকট্রনিক্স ম্যানুফ্যাকচারিং প্ল্যান্টগুলোতে প্রচুর স্বয়ংক্রিয় সেন্সর ব্যবহার হচ্ছে। কোডিং ও সার্কিট উভয়ের জ্ঞান থাকায় পলিটেকনিক শিক্ষার্থীদের কারখানায় দ্রুত চাকরি নিশ্চিত হয়।'
    },
    targetCountries: [
      {
        region: 'East Asia',
        countryName_en: 'Japan & South Korea',
        countryName_bn: 'জাপান ও দক্ষিণ কোরিয়া',
        demandLevel: 'High',
        demandLevel_bn: 'উচ্চ চাহিদা',
        visaReality_en: 'Special technical visas (SSW Japan) actively recruit polytechnic electronics and embedded technicians.',
        visaReality_bn: 'জাপানের নির্দিষ্ট দক্ষ কর্মী ভিসায় (SSW) ডিপ্লোমা ইঞ্জিনিয়ারদের ইলেকট্রনিক্স ও অটোমেশনে সরকারি অগ্রাধিকার দেওয়া হয়।',
        averageSalaryUsdOrLocal: '$2,000 - $3,800 USD/month',
        requiredExperienceYears: '1 - 3 years'
      }
    ],
    remote: {
      entryBarrier: 'Moderate',
      entryBarrier_bn: 'মাঝারি থেকে কঠিন',
      monthlyRangeUsd: '$600 - $2,200 USD',
      competitionLevel: 'Low to Moderate',
      competitionLevel_bn: 'কম থেকে মাঝারি',
      englishRequirement: 'Technical reading ability for hardware component datasheets and sensor registers',
      englishRequirement_bn: 'হার্ডওয়্যার আইসি এবং সেন্সরের ডেটাশিট পড়ার মতো টেকনিক্যাল ইংরেজি',
      realities_en: [
        'Writing Arduino/ESP32 firmware code on freelance sites has low competition because few freelancers have the physical hardware.',
        'Remote consulting for IoT sensor dashboard setup in Home Assistant is an expanding freelance niche.'
      ],
      realities_bn: [
        'ফাইভারে ইএসপি৩২ ও আরডুইনো কোড লেখার কাজে অন্য বিষয়ের চেয়ে প্রতিযোগিতা অনেক কম থাকে।',
        'হোম অটোমেশন ও আইওটি ড্যাশবোর্ড তৈরির ফ্রিল্যান্স কাজের চাহিদা বিশ্বব্যাপী বাড়ছে।'
      ]
    }
  },
  roadmapPhases: [
    {
      phaseNumber: 1,
      phaseTitle_en: 'Circuit Basics, Multimeter Diagnostics & C Programming',
      phaseTitle_bn: 'সার্কিটের মৌলিক জ্ঞান, মাল্টিমিটার ও সি প্রোগ্রামিং',
      phaseSubtitle_en: 'Master voltage, current, resistance, and microcontroller logic.',
      phaseSubtitle_bn: 'ভোল্টেজ, রেজিস্ট্যান্স ও আরডুইনো দিয়ে সি প্রোগ্রামিংয়ের হাতে-কলমে শুরু।',
      durationWeeks: 4,
      modules: [
        {
          id: 'iot-p1-m1',
          title_en: 'Electronics Breadboarding, LEDs, Resistors & Multimeter',
          title_bn: 'ব্রেডবোর্ড সার্কিট, এলইডি, রেজিস্টর ও মাল্টিমিটারের ব্যবহার',
          description_en: 'Learn Ohm law practically, measure voltage and resistance with a multimeter, and construct breadboard LED circuits.',
          description_bn: 'ওহমের সূত্রের ব্যবহারিক প্রয়োগ, মাল্টিমিটার দিয়ে ভোল্টেজ মাপা ও ব্রেডবোর্ডে সার্কিট তৈরি।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['Breadboard Bus Lines', 'Ohm Law (V=IR)', 'Digital Multimeter', 'Wokwi Simulator in Browser'],
          practicalTask_en: 'Build an LED traffic light simulator with 3 LEDs and resistors on a breadboard or in the free Wokwi browser simulator.',
          practicalTask_bn: 'ব্রেডবোর্ডে অথবা ফ্রি ব্রাউজার সিমুলেটরে ৩টি এলইডি দিয়ে ট্র্যাফিক লাইট সার্কিট বানাও।'
        },
        {
          id: 'iot-p1-m2',
          title_en: 'Arduino Programming: GPIO Pins & Sensor Inputs',
          title_bn: 'আরডুইনো প্রোগ্রামিং: জিপিআইও পিন ও সেন্সর রিডিং',
          description_en: 'Write pinMode(), digitalWrite(), and analogRead() in the Arduino IDE to control buzzers and read ultrasonic distance sensors.',
          description_bn: 'আরডুইনো পিন দিয়ে আল্ট্রাসনিক ডিসট্যান্স সেন্সর ও বাজার অ্যালার্ম নিয়ন্ত্রণ করা।',
          estimatedDays: 12,
          mobileAccessible: true,
          keyTopics: ['digitalWrite & digitalRead', 'analogRead with LDR', 'HC-SR04 Ultrasonic', 'Serial Monitor Output'],
          practicalTask_en: 'Create a distance warning system: when an obstacle gets closer than 10cm, an LED and buzzer sound automatically.',
          practicalTask_bn: '১০ সেন্টিমিটারের কাছে কোনো বস্তু আসলে স্বয়ংক্রিয়ভাবে অ্যালার্ম বাজার সার্কিট প্রোগ্রাম করো।'
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle_en: 'ESP32 Wi-Fi Microcontroller & IoT MQTT Protocols',
      phaseTitle_bn: 'ইএসপি৩২ ওয়াইফাই মাইক্রোকন্ট্রোলার ও এমকিউটিটি প্রোটোকল',
      phaseSubtitle_en: 'Connect physical microcontrollers to the global internet.',
      phaseSubtitle_bn: 'হার্ডওয়্যারকে ইন্টারনেটের সাথে যুক্ত করে ক্লাউডে লাইভ ডেটা পাঠানো।',
      durationWeeks: 5,
      modules: [
        {
          id: 'iot-p2-m1',
          title_en: 'ESP32 Wi-Fi Setup & Temperature Telemetry',
          title_bn: 'ইএসপি৩২ ওয়াইফাই কানেকশন ও তাপমাত্রা পরিমাপ',
          description_en: 'Install ESP32 board definitions, connect to local Wi-Fi, read DHT11/DHT22 temperature sensors, and print readings to serial.',
          description_bn: 'ইএসপি৩২-কে ওয়াইফাই রাউটারের সাথে কানেক্ট করে ঘরের তাপমাত্রা সেন্সর থেকে ডেটা রিড করা।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['ESP32 Pinout', 'WiFi.begin() & Status', 'DHT11 Sensor', 'Deep Sleep Power Saving'],
          practicalTask_en: 'Program an ESP32 to connect to your phone mobile hotspot and print live temperature readings every 5 seconds.',
          practicalTask_bn: 'মোবাইল হটস্পটের সাথে ইএসপি৩২ কানেক্ট করে প্রতি ৫ সেকেন্ডে লাইভ তাপমাত্রা প্রিন্ট করো।'
        },
        {
          id: 'iot-p2-m2',
          title_en: 'Publishing Sensor Data via MQTT to Cloud Dashboards',
          title_bn: 'এমকিউটিটি দিয়ে ক্লাউড ড্যাশবোর্ডে ডেটা পাঠানো',
          description_en: 'Connect ESP32 to a free public MQTT broker (HiveMQ or Adafruit IO), publish temperature payloads, and control an LED remotely.',
          description_bn: 'এমকিউটিটি ব্রোকার দিয়ে ইন্টারনেট থেকে যেকোনো প্রান্ত থেকে ঘরের লাইট বা রিলে অন-অফ করা।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['PubSubClient Library', 'MQTT Topics & Payload', 'Adafruit IO Feeds', 'Bi-directional IoT Control'],
          practicalTask_en: 'Build an IoT cloud dashboard where toggling a button on your smartphone turns on an LED connected to an ESP32 in your college lab.',
          practicalTask_bn: 'স্মার্টফোনের ব্রাউজার থেকে বাটন চাপলে ল্যাবের ইএসপি৩২-তে বাতি জ্বলে এমন ক্লাউড আইওটি প্রজেক্ট বানাও।'
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle_en: 'Relay Modules, High-Voltage AC Control & Raspberry Pi',
      phaseTitle_bn: 'রিলে মডিউল দিয়ে এসি যন্ত্রপাতি নিয়ন্ত্রণ ও র‌্যাস্পবেরি পাই',
      phaseSubtitle_en: 'Safely interface microcontrollers with 220V AC household appliances.',
      phaseSubtitle_bn: '২২০ ভোল্টের ফ্যান, লাইট ও মোটর নিরাপদে স্বয়ংক্রিয় করার কৌশল।',
      durationWeeks: 5,
      modules: [
        {
          id: 'iot-p3-m1',
          title_en: 'Optocoupler Relay Modules & Safe AC Switching',
          title_bn: 'অপটোকাপলার রিলে মডিউল ও নিরাপদ এসি সুই칭',
          description_en: 'Understand galvanic isolation, flyback diodes, and use 5V/3.3V relay modules to switch AC light bulbs safely.',
          description_bn: 'মাইক্রোকন্ট্রোলার দিয়ে নিরাপদে ২২০ ভোল্টের এসি বাতি ও ফ্যান অন-অফ করার সার্কিট।',
          estimatedDays: 12,
          mobileAccessible: false,
          keyTopics: ['Normally Open (NO) vs Closed (NC)', 'Transistor Driver & Optocoupler', 'Safety Precautions', 'Flyback Protection'],
          practicalTask_en: 'Wire a 5V relay module to an ESP32 to switch on a 220V lamp whenever the room gets dark (LDR sensor trigger).',
          practicalTask_bn: 'ঘরে অন্ধকার হলে স্বয়ংক্রিয়ভাবে রিলে চালু হয়ে ঘরের বাতি জ্বলে ওঠার সার্কিট বানাও।'
        },
        {
          id: 'iot-p3-m2',
          title_en: 'Raspberry Pi Single-Board Computer & Python GPIO',
          title_bn: 'র‌্যাস্পবেরি পাই ও পাইথন দিয়ে হার্ডওয়্যার নিয়ন্ত্রণ',
          description_en: 'Flash Raspberry Pi OS, configure headless SSH, install Python RPi.GPIO library, and read sensor logs onto local disk.',
          description_bn: 'র‌্যাস্পবেরি পাইতে লিনাক্স চালু করে পাইথন দিয়ে হার্ডওয়্যার পিন নিয়ন্ত্রণ করা।',
          estimatedDays: 14,
          mobileAccessible: false,
          keyTopics: ['Raspberry Pi Headless SSH', 'RPi.GPIO Python Module', 'Cron Job Data Logging', 'Local Web Server on Pi'],
          practicalTask_en: 'Run a Python script on a Raspberry Pi that logs factory room temperatures every 10 minutes into a local SQLite database.',
          practicalTask_bn: 'র‌্যাস্পবেরি পাইতে একটি স্ক্রিপ্ট চালিয়ে প্রতি ১০ মিনিটের তাপমাত্রা লোকাল ডেটাবেসে সংরক্ষণ করো।'
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle_en: 'Industrial Factory Automation & Hardware Job Viva',
      phaseTitle_bn: 'ইন্ডাস্ট্রিয়াল ফ্যাক্টরি অটোমেশন ও হার্ডওয়্যার চাকরি ভাইভা',
      phaseSubtitle_en: 'Learn PLC basics and prepare for factory automation engineer interviews.',
      phaseSubtitle_bn: 'পিএলসি (PLC) পরিচিতি ও উৎপাদন কারখানায় টেকনিক্যাল ভাইভা প্রস্তুতি।',
      durationWeeks: 4,
      modules: [
        {
          id: 'iot-p4-m1',
          title_en: 'Industrial Sensors, PLC Logic & Stepper Motors',
          title_bn: 'ইন্ডাস্ট্রিয়াল সেন্সর, পিএলসি লজিক ও স্টেপার মোটর',
          description_en: 'Learn 24V industrial sensor standards (proximity sensors), Ladder Logic basics in PLCs, and precise motor rotation control.',
          description_bn: 'কারখানায় ব্যবহৃত ২৪ ভোল্ট সেন্সর, ল্যাডার লজিক ও মোটর নিয়ন্ত্রণের নিয়ম।',
          estimatedDays: 14,
          mobileAccessible: true,
          keyTopics: ['Inductive Proximity Sensor', 'Ladder Logic Diagram', 'A4988 Stepper Driver', 'Industrial 4-20mA Signal'],
          practicalTask_en: 'Design a simulated automated conveyor belt system where a proximity sensor stops the motor when a package arrives.',
          practicalTask_bn: 'একটি কনভেয়র বেল্ট সিস্টেমের লজিক তৈরি করো যেখানে বক্স আসলে মোটর নিজে থেকে থেমে যায়।'
        },
        {
          id: 'iot-p4-m2',
          title_en: 'Hardware Portfolio Demo & Electronics Viva Prep',
          title_bn: 'হার্ডওয়্যার প্রজেক্ট ডেমো ও টেকনিক্যাল ভাইভা প্রস্তুতি',
          description_en: 'Practice explaining circuit schematics, multimeter troubleshooting methods, and component isolation to factory hiring managers.',
          description_bn: 'সার্কিট ডায়াগ্রাম ব্যাখ্যা ও কারখানা কর্মকর্তাদের সামনে প্রজেক্ট প্রদর্শনের প্রস্তুতি।',
          estimatedDays: 10,
          mobileAccessible: true,
          keyTopics: ['Schematic Reading', 'Multimeter Live Test in Viva', 'Factory Safety Standards', 'Salary Negotiation'],
          practicalTask_en: 'Record a 3-minute video demonstrating your completed IoT hardware prototype with live sensor readings and relay action.',
          practicalTask_bn: 'তোমার তৈরি করা আইওটি প্রজেক্টের কার্যপদ্ধতি ৩ মিনিটের ভিডিওতে রেকর্ড করে সিভিতে যুক্ত করো।'
        }
      ]
    }
  ],
  interviewQuestions: [
    {
      id: 'iot-q1',
      question_en: 'Why do we need a Pull-Up or Pull-Down resistor when connecting a push button to a microcontroller pin?',
      question_bn: 'মাইক্রোকন্ট্রোলারের পিনে পুশ বাটন লাগানোর সময় পুল-আপ (Pull-Up) বা পুল-ডাউন রেজিস্টর কেন প্রয়োজন হয়?',
      category: 'Electronics Basics',
      whyAsked_en: 'Tests whether the candidate understands electrical floating states (high impedance), which cause false triggers in microcontrollers.',
      whyAsked_bn: 'প্রার্থী সার্কিটের ফ্লোটিং স্টেট বোঝে কি না এবং হার্ডওয়্যার নয়েজ দূর করার নিয়ম জানে কি না তা নিশ্চিত করতে।',
      howToAnswer_en: 'When a button is open, the input pin is not connected to anything (it is "floating"). Floating pins pick up electromagnetic noise from the environment, causing erratic switching between 0 and 1. A Pull-Up resistor connects the pin safely to VCC (holding it at logic HIGH) until the button is pressed, guaranteeing a stable, deterministic voltage state.',
      howToAnswer_bn: 'বাটন খোলা থাকলে পিনটি সম্পূর্ণ বিচ্ছিন্ন বা "ফ্লোটিং" অবস্থায় থাকে, ফলে বাতাসের ইলেকট্রোম্যাগনেটিক নয়েজ পেয়ে বাটন না চাপলেও একা একা ০ এবং ১ হতে থাকে। পুল-আপ রেজিস্টর পিনটিকে সবসময় ৫ ভোল্ট বা ৩.৩ ভোল্টে স্থায়ী করে রাখে, ফলে ভুল সিগন্যাল তৈরি হতে পারে না।',
      commonMistakes_en: 'Thinking the resistor is only meant to prevent the LED from burning out (confusing current-limiting with pull-up logic).',
      commonMistakes_bn: 'কারেন্ট লিমিটিং রেজিস্টরের সাথে পুল-আপ রেজিস্টর গুলিয়ে ফেলা।'
    },
    {
      id: 'iot-q2',
      question_en: 'What is the difference between I2C and SPI communication protocols in sensors?',
      question_bn: 'সেন্সর কানেকশনে আইটুসি (I2C) এবং এসপিআই (SPI) প্রোটোকলের মধ্যে পার্থক্য কী?',
      category: 'Microcontroller Protocols',
      whyAsked_en: 'Crucial hardware protocol question asked by every electronics and IoT hiring board.',
      whyAsked_bn: 'সেন্সর ইন্টারফেসিংয়ের সবচেয়ে জনপ্রিয় দুই প্রোটোকলের বাস্তব পার্থক্য যাচাই করতে।',
      howToAnswer_en: 'I2C uses only 2 wires (SDA for data, SCL for clock) and can connect up to 127 devices on the same bus using device addresses, but runs at moderate speeds (typically 400 kHz). SPI uses 4 wires (MOSI, MISO, SCK, CS/SS), is full-duplex, runs much faster (10 MHz+), but requires a separate Chip Select wire for each connected sensor.',
      howToAnswer_bn: 'আইটুসিতে মাত্র ২টি তার লাগে (SDA এবং SCL) এবং একটি বাসে ঠিকানা দিয়ে ১২৭টি সেন্সর লাগানো যায়, তবে গতি কিছুটা কম (৪০০ কিলোহার্টজ)। এসপিআই-তে ৪টি তার লাগে (MOSI, MISO, SCK, CS), এটি উভয় দিকে একসাথে ডেটা পাঠাতে পারে, অনেক বেশি দ্রুতগতির (১০ মেগাহার্টজের বেশি), তবে প্রতি সেন্সরের জন্য আলাদা চিপ সিলেক্ট পিন লাগে।',
      commonMistakes_en: 'Claiming I2C requires a separate pin for every sensor like SPI does.',
      commonMistakes_bn: 'মনে করা যে আইটুসি-তে প্রতি সেন্সরের জন্য আলাদা পিন দরকার হয়।'
    }
  ],
  freeCerts: [
    {
      id: 'cisco-iot-fundamentals',
      title_en: 'Cisco Networking Academy: Introduction to Internet of Things (IoT)',
      title_bn: 'সিসকো নেটঅ্যাকাড: ইন্ট্রোডাকশন টু আইওটি (IoT)',
      provider: 'Cisco Networking Academy',
      url: 'https://www.netacad.com/courses/iot/introduction-iot',
      mobileAccessible: true,
      language: 'en',
      durationHours: 20,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Official verified digital badge from Cisco demonstrating practical understanding of smart sensors and IoT automation.',
      relevance_bn: 'সিসকোর অফিশিয়াল ফ্রি ডিজিটাল ব্যাজ ও সার্টিফিকেট যা সেন্সর ও আইওটি দক্ষতার আন্তর্জাতিক প্রমাণ।'
    },
    {
      id: 'arduino-prep-badges',
      title_en: 'Arduino Online Education Foundations Course',
      title_bn: 'আরডুইনো এডুকেশন অনলাইন ফাউন্ডেশনস',
      provider: 'Arduino Education',
      url: 'https://www.arduino.cc/education',
      mobileAccessible: true,
      language: 'en',
      durationHours: 15,
      cost: '100% Free',
      isBdLocal: false,
      category: 'international_free',
      relevance_en: 'Foundational electronics and microcontroller firmware certification directly from the makers of Arduino.',
      relevance_bn: 'আরডুইনোর অফিশিয়াল লার্নিং প্ল্যাটফর্মের ফ্রি ব্যবহারিক ইলেকট্রনিক্স গাইড।'
    },
    {
      id: 'muktopaath-robotics-electronics',
      title_en: 'Muktopaath: Basic Electronics & Robotics for Polytechnic Students',
      title_bn: 'মুক্তপাঠ: পলিটেকনিক শিক্ষার্থীদের জন্য বেসিক ইলেকট্রনিক্স ও রোবোটিক্স',
      provider: 'Muktopaath / a2i Bangladesh',
      url: 'https://muktopaath.gov.bd',
      mobileAccessible: true,
      language: 'bn',
      durationHours: 14,
      cost: '100% Free',
      isBdLocal: true,
      category: 'bd_national',
      relevance_en: 'Official Bangladesh Government certified credential verifying practical electronics lab competency.',
      relevance_bn: 'বাংলাদেশ সরকারের মুক্তপাঠ প্ল্যাটফর্মের অফিশিয়াল ভেরিফায়েড সার্টিফিকেট।'
    }
  ]
};
