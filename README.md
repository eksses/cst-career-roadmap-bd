# CST Career Guidance & Adaptive Roadmap Platform

A full-stack, production-grade career intelligence and adaptive roadmap platform built specifically for Computer Science and Technology (CST) polytechnic diploma students and college learners in Bangladesh.

Calibrated for the late 2026 post-AI engineering landscape, the platform replaces outdated tutorial advice with pragmatic, device-aware learning tracks, genuine local hiring data, and an interactive subway-style milestone roadmap.

---

## 1. Ground Reality and Problem Statement

Over 50 government polytechnic institutes and numerous private technical colleges across Bangladesh enroll tens of thousands of diploma engineers each year under the Bangladesh Technical Education Board (BTEB) curriculum.

The actual realities faced by these students differ drastically from conventional developer forums:

1. **Hardware Disparity**: Over 65 percent of incoming CST students do not own a personal computer at home. They rely on Android smartphones and access institutional labs for limited hours weekly.
2. **Language Friction**: Most global programming resources assume fluent English comprehension. Many Bangladeshi polytechnic learners understand core technical logic but struggle when confronted with dense academic manuals.
3. **Outdated Curriculum vs Modern Industry**: Traditional syllabi frequently emphasize legacy theory while the industry requires modern frameworks, relational database schema modeling, Git version control, and containerization.
4. **Post-AI Industry Shift**: In the current software market, basic HTML/CSS copy-pasting and repetitive boilerplate CRUD coding have been automated by AI coding assistants. Tech companies in Dhaka (fintech firms, e-commerce giants, offshore software agencies) and international remote employers no longer hire juniors for raw syntax typing. They demand architecture comprehension, schema design, security awareness, unit testing, and the ability to audit and verify code.
5. **Session Friction**: Students rotating across polytechnic lab computers cannot easily log into personal accounts due to security concerns, forgotten passwords, or shared browser sessions.

This platform directly solves each of these challenges.

---

## 2. Key Architecture Features

### Adaptive Diagnostic Compass (13 Decision Stations)
* Evaluates hardware tier: `Smartphone Only`, `Low-Spec PC (2-4GB RAM)`, `Standard PC (8GB RAM)`, or `High-Spec PC (16GB+ RAM / Dedicated GPU)`.
* Assesses practical keyboard literacy, programming familiarity, English comfort, and financial timeline.
* Auto-prepends a mandatory **30-Day Digital Literacy Bridge Track** for students who need typing practice, file system basics, and keyboard-mouse confidence before writing code.
* Honest Assessment: When questions are skipped, the engine sets a transparent 0 percent match score and directs the user to the 24-track catalog rather than calculating artificial confidence scores.

### 24 Specialized Career Tracks
Organized into 7 distinct industry clusters covering both coding and infrastructure paths:
* **Web and Software Systems**: Frontend and Full-Stack Web (React 19 / Next.js 15), Backend API Systems and Database Architecture (Node.js 22 / Express / PostgreSQL 17), Enterprise Java and Fintech Microservices (Spring Boot), Laravel and PHP Agency Development.
* **Cloud, Systems and DevOps**: Linux Systems Administration and Server Management, AWS Cloud Solutions and Infrastructure Engineering.
* **Cyber Security and Defense**: SOC Incident Analysis and Blue Team Operations, Ethical Hacking and Bug Bounty Research.
* **Networks and Physical Computing**: ISP and MikroTik Network Engineering (highest direct hiring rate for CST diploma holders in Bangladesh), IT Hardware and Corporate Systems Support, Embedded IoT and Factory Robotics.
* **AI, Data and Machine Learning**: Python Data Analytics and Applied AI, AI and Machine Learning Engineering (PyTorch / Local LLMs / RAG), Big Data Engineering and Distributed Pipelines.
* **Design and Media**: UI/UX Product Design (Figma Design Systems), Graphic Design and Motion Production, Digital Marketing and E-Commerce Operations.
* **Specialized Engineering**: Video Game Development (Unity and C#), Offline Desktop POS Systems (C# .NET / Electron), Blockchain and Web3 Protocols, Software QA and Automated Testing (Playwright), BPO Technical Support and Data Operations, Digital Literacy Foundation Bridge.

### Bi-Directional Knowledge and Tech Matrix
* **Roadmap by Language**: Explore career tracks associated with JavaScript, TypeScript, Python, Dart, C/C++, Java, PHP, SQL, Solidity, and Bash.
* **Roadmap by Skill**: Cross-reference tracks that utilize Docker, PostgreSQL, Linux Ubuntu, Figma, MikroTik RouterOS, Git, Unity, AWS, and PyTorch.
* **Skills by Roadmap**: Reverse-lookup the exact required toolchain for any selected specialization.
* **Combination Match Engine**: Filter tracks dynamically by hardware constraint, timeline, and specialization preferences.

### Subway-Style Interactive Tech Tree
* Milestone nodes mapped chronologically into 4 structured phases.
* Day-by-day estimates, smartphone versus PC compatibility tags, and practical lab assignments tailored for polytechnic campus workshops.
* Integrated verification links for 100 percent free credentials: freeCodeCamp, Harvard CS50x, Cisco Networking Academy, Muktopaath, and BASIS SEIP.

### Zero-Password Session System
* Generates an unambiguous 4-character alphanumeric save code (e.g. `CST9K4X`) providing over 1,000,000 collision-free combinations.
* Allows students to save their customized roadmap and resume progress seamlessly on any polytechnic lab computer or smartphone without an email or password prompt.

### Real-Time System Telemetry
* Reactive top-edge loading bar listening directly to asynchronous network transitions.
* Sticky location status strip indicating active station coordinates, live database synchronization state, and quick navigation shortcuts.
* Segmented pill control enabling swift navigation between Roadmap, Salaries, Interview Vault, Skills, and Guidance.

---

## 3. Strict Editorial and Ergonomic Standards

* **Zero Emojis**: Replaced entirely by clean, vector-rendered SVG icons via Lucide React.
* **Zero Dash Quirks**: Free of em-dashes, en-dashes, and double-hyphens.
* **Zero Banned AI Buzzwords**: Free of promotional filler phrases. Written in natural, respectful Bengali mentor tone ("তুমি") and clear, practical English.
* **Bilingual Parity**: Instant toggle between Bangla (`bn`) and English (`en`) with typography adjustments maintaining proper line-height for Bengali vowel diacritics.
* **Mobile-First Zoom Lock**: Multi-touch pinch zoom, double-tap zoom, and iOS Safari gesture zooms are disabled to ensure native app feel on mobile screens.

---

## 4. Technology Stack

### Frontend Client
* **Framework**: React 19 with TypeScript
* **Styling**: Tailwind CSS with custom editorial palette (Warm Alabaster `#F7F6F2`, Crisp Paper `#FFFFFF`, Deep Charcoal `#141413`, Terracotta `#C84B31`, Forest Green `#1B4332`)
* **Motion**: Framer Motion 14 (spring physics, bottom sheets, layout transitions)
* **Icons**: Lucide React
* **Build Tool**: Vite 8 with Rolldown bundling

### Backend Server
* **Runtime**: Node.js 22 LTS
* **Framework**: Express.js 5 REST API
* **Schema Validation**: Zod
* **ORM**: Drizzle ORM

### Database and Storage
* **Primary Database**: Neon Serverless PostgreSQL (`@neondatabase/serverless` and `pg`)
* **Object Storage**: Neon S3-compatible Object Storage (`@aws-sdk/client-s3` and `@aws-sdk/s3-request-presigner`)
* **Port**: Runs on port 5657 by default (`http://0.0.0.0:5657`)

---

## 5. Project Directory Structure

```text
├── client/
│   ├── index.html                 # Mobile viewport lock and typography links
│   └── src/
│       ├── App.tsx                # Main application router and state shell
│       ├── components/
│       │   ├── AiMentorDrawer.tsx         # Context-aware career mentor drawer
│       │   ├── DesktopTelemetryPanel.tsx  # Sticky desktop telemetry sidebar
│       │   ├── DirectTrackSelectView.tsx  # Fallback direct roadmap selector
│       │   ├── ErrorBoundary.tsx          # Resilient runtime error boundary
│       │   ├── InterviewVault.tsx         # Role-specific technical interview prep
│       │   ├── LanguageOnboarding.tsx     # Welcome gateway and session resume
│       │   ├── LanguageSkillMatrixView.tsx# Bi-directional tech matrix explorer
│       │   ├── LocationStatusStrip.tsx    # Live station breadcrumb status strip
│       │   ├── MarketExplorer.tsx         # Bangladesh, overseas, and remote market data
│       │   ├── Navbar.tsx                 # Universal header navigation
│       │   ├── RealTimeLoadingBar.tsx     # Reactive top-edge progress bar
│       │   ├── RequirementsChecklist.tsx  # Day-to-day duties and skill checklist
│       │   ├── RoadmapGraphMap.tsx        # Interactive subway-style tech tree
│       │   ├── RoadmapTimeline.tsx        # Milestone phase stepper view
│       │   ├── SaveCodeModal.tsx          # Zero-password session resume modal
│       │   ├── SuggestedRoadmapsView.tsx  # Survey result calibration view
│       │   ├── SurveyStepCard.tsx         # Adaptive diagnostic question console
│       │   ├── TrackCatalogModal.tsx      # Quick track picker modal
│       │   └── VerdictSection.tsx         # Honest reality check and action plan
│       ├── context/
│       │   ├── LanguageContext.tsx        # Bilingual state provider
│       │   └── StudentContext.tsx         # Student profile and progress provider
│       └── translations/
│           ├── bn.ts                      # Natural Bengali mentor copy
│           └── en.ts                      # Clean English copy
├── server/
│   ├── controllers/
│   │   ├── matrixController.ts            # Matrix query handlers
│   │   ├── mentorController.ts            # Career mentor assistant handlers
│   │   ├── profileController.ts           # Student session and progress handlers
│   │   ├── storageController.ts           # S3 upload and retrieval handlers
│   │   ├── surveyController.ts            # Diagnostic survey handlers
│   │   └── trackController.ts             # Career track catalog handlers
│   ├── data/
│   │   ├── adaptiveQuestions.ts           # 13 adaptive branching survey questions
│   │   ├── careerTracksData.ts            # Central catalog of all 24 tracks
│   │   ├── languageSkillsMatrix.ts        # Bi-directional matrix database
│   │   └── tracks/                        # Modular data files for 24 career tracks
│   ├── db/
│   │   ├── index.ts                       # Neon PostgreSQL connection
│   │   ├── schema.ts                      # Drizzle schema definitions
│   │   └── seed.ts                        # Seed script for 24 career tracks
│   ├── routes/
│   │   └── api.ts                         # Express REST API routes
│   ├── services/
│   │   ├── diagnosticService.ts           # Recommendation scoring engine
│   │   ├── mentorService.ts               # Context-aware mentor logic
│   │   └── storageService.ts              # S3 presigned URL generator
│   └── index.ts                           # Express server entry point
├── shared/
│   └── types.ts                           # Shared TypeScript interfaces
├── .env.example                           # Sample environment configuration
├── package.json                           # Scripts and dependencies
├── tsconfig.json                          # Client TypeScript configuration
└── vite.config.ts                         # Vite build configuration
```

---

## 6. Getting Started

### Prerequisites
* Node.js version 20 or higher
* npm version 10 or higher
* PostgreSQL database instance or Neon Serverless PostgreSQL connection string

### Environment Configuration
Create a `.env` file in the project root based on `.env.example`:

```env
PORT=5657
NODE_ENV=development
DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
AWS_ENDPOINT_URL_S3="https://storage.neon.tech"
AWS_ACCESS_KEY_ID="your_access_key"
AWS_SECRET_ACCESS_KEY="your_secret_key"
AWS_REGION="us-east-2"
AWS_BUCKET_NAME="uploads"
AI_API_KEY=""
```

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Push database schema
npm run db:push

# 3. Seed all 24 CST career tracks into the database
npm run db:seed

# 4. Build frontend bundle
npm run build

# 5. Start development server
npm run dev

# Or run in production mode
npm run start
```

Once running, navigate to `http://localhost:5657` in your browser.

---

## 7. API Endpoints

### Diagnostic Survey
* `GET /api/survey` - Retrieve active adaptive diagnostic questions
* `POST /api/survey/submit` - Process answers and calculate calibrated career recommendations
* `POST /api/survey/direct-select` - Directly initialize a student profile with a selected career track

### Career Tracks
* `GET /api/tracks` - Retrieve list of all 24 career tracks
* `GET /api/tracks/:slug` - Retrieve full track details including milestones, market data, and interview vault

### Bi-Directional Tech Matrix
* `GET /api/matrix/overview` - Comprehensive overview of tracks, languages, skills, and categories
* `GET /api/matrix/languages` - Roadmaps grouped by programming language
* `GET /api/matrix/skills` - Roadmaps grouped by technical skill
* `GET /api/matrix/interests` - Roadmaps grouped by student interest category

### Student Profile and Progress
* `GET /api/profile/:saveCode` - Load student profile, current track, and saved milestones
* `POST /api/progress` - Synchronize completed milestone IDs, certification IDs, and skill checks
* `POST /api/track/switch` - Change the student active career track

### AI Career Mentor
* `POST /api/mentor` - Ask career and syllabus questions to the context-aware mentor agent

### Object Storage
* `POST /api/storage/upload` - Generate presigned S3 upload URL
* `GET /api/storage/list` - List uploaded files in the bucket
* `GET /api/storage/file/:key` - Retrieve presigned download URL for a file

---

## 8. License

This project is licensed under the MIT License. Developed for polytechnic CST students across Bangladesh.
