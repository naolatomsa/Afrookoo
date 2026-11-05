// Comprehensive production data for Afrookoo Software
export const companyInfo = {
  name: 'Afrookoo Software',
  shortName: 'Afrookoo',
  tagline: 'Building Intelligent Technology. Transforming Businesses.',
  subtitle:
    'We engineer mission-critical enterprise systems, AI agent platforms, scalable web architectures, and native iOS applications from Addis Ababa to global enterprises.',
  location: '4 Kilo, Addis Ababa, Ethiopia · EAT (UTC+3)',
  address: '4 Kilo, Around Abrehot Library, Rift Valley University, Addis Ababa, Ethiopia',
  email: 'contact@afrookoo.com',
  workEmail: 'contact@afrookoo.com',
  phone: '+251 91 234 5678',
  hours: 'Mon – Fri: 8:30 AM – 6:00 PM EAT (UTC+3)',
  github: 'https://github.com/afrookoo',
  linkedin: 'https://www.linkedin.com/company/afrookoo',
  telegram: 'https://t.me/afrookoo',
  telegramHandle: '@afrookoo',
  instagram: 'https://instagram.com/afrookoo',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#work' },
  { label: 'Partners', href: '#clients' },
  { label: 'Stack', href: '#technology' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Insights', href: '#insights' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '10+', label: 'Products Shipped', detail: 'Enterprise, AI & iOS platforms' },
  { value: '99.9%', label: 'System Reliability', detail: 'Production SLA & fault tolerance' },
  { value: '3+ Yrs', label: 'Engineering Craft', detail: 'Full-stack & AI architecture' },
  { value: '100%', label: 'Project Commitment', detail: 'Concept to production delivery' },
]

export const capabilities = [
  'Custom Enterprise Software Development',
  'Artificial Intelligence & Multi-Agent Systems',
  'Scalable Web & Cloud-Native Platforms',
  'Native iOS & High-Performance Mobile Apps',
  'Cloud Infrastructure, Kubernetes & CI/CD',
  'Hexagonal Architecture & Microservices',
]

export const aboutCards = [
  {
    title: 'Our Vision',
    text: 'To become a globally recognized technology partner from East Africa, celebrated for engineering rigor, AI innovation, and transformative digital systems that empower organizations.',
  },
  {
    title: 'Our Mission',
    text: 'To engineer high-performance software that eliminates operational friction, solves complex industry problems, and creates sustainable competitive advantages for our partners.',
  },
  {
    title: 'Core Values',
    text: 'Engineering Integrity, Continuous Innovation, Radical Transparency, Customer Stewardship, and an obsession with clean, scalable architecture.',
  },
]

export const services = [
  {
    id: 'custom-software',
    title: 'Custom Web & Software Systems',
    iconName: 'Code',
    summary: 'Tailor-made web applications engineered for security, speed, and heavy concurrent workloads.',
    description:
      'We design and build bespoke web platforms with modern frontend frameworks and robust backend APIs, tailored precisely to your operational workflows and business rules.',
    features: [
      'Single-page & server-rendered applications (React, Angular, Vue)',
      'High-throughput REST & GraphQL API backends (Node.js, Spring Boot)',
      'Enterprise database modeling and query optimization (PostgreSQL, MongoDB)',
      'Role-based access control (RBAC), multi-tenancy, and JWT authentication',
    ],
    tech: ['React', 'Node.js', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: 'native-ios',
    title: 'Native iOS & Mobile Applications',
    iconName: 'Smartphone',
    summary: 'Fluid, responsive iOS apps built with Swift, SwiftUI, and native Apple ecosystem integrations.',
    description:
      'From intuitive consumer apps to mission-critical field tools, we craft pixel-perfect mobile experiences with native performance, offline support, and smooth gestures.',
    features: [
      'Modern SwiftUI & UIKit declarative interfaces',
      'Local persistence with SwiftData & Core Data for offline resilience',
      'HealthKit, CoreMotion, camera, and device sensor integration',
      'App Store submission, TestFlight beta delivery, and CI/CD pipelines',
    ],
    tech: ['Swift', 'SwiftUI', 'UIKit', 'HealthKit', 'SwiftData', 'Flutter'],
  },
  {
    id: 'ai-agents',
    title: 'AI & Multi-Agent Systems',
    iconName: 'Cpu',
    summary: 'Intelligent automation, agentic workflows, predictive analytics, and enterprise LLM integrations.',
    description:
      'We leverage cutting-edge artificial intelligence to build collaborative multi-agent architectures that orchestrate complex multi-step reasoning, NLP document synthesis, and automated decisions.',
    features: [
      'Multi-agent orchestration and autonomous task execution',
      'Enterprise retrieval-augmented generation (RAG) over private data',
      'Predictive machine learning models and automated classification',
      'Strict schema validation and safety guardrails for production LLMs',
    ],
    tech: ['Python', 'Multi-Agent Loops', 'LangChain', 'FastAPI', 'Vector DBs'],
  },
  {
    id: 'enterprise-erp',
    title: 'Enterprise ERP & Core Systems',
    iconName: 'Layers',
    summary: 'Integrated business systems connecting finance, inventory, HR, and real-time operations.',
    description:
      'We engineer modular enterprise platforms following Hexagonal Architecture and clean domain boundaries, giving organizations a unified source of truth across all operational facets.',
    features: [
      'Point-of-Sale (POS) and distributed multi-location inventory sync',
      'Automated payroll, tax compliance, and human capital workflows',
      'Double-entry ledger accounting and automated reconciliations',
      'Comprehensive audit trails, event sourcing, and compliance logging',
    ],
    tech: ['Java / Spring Boot', 'Hexagonal Architecture', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    iconName: 'Cloud',
    summary: 'Resilient cloud architecture, automated CI/CD pipelines, container orchestration, and monitoring.',
    description:
      'We configure scalable cloud foundations designed for 99.9% uptime, zero-downtime blue/green deployments, automated scaling, and proactive telemetry.',
    features: [
      'Containerization with Docker and Kubernetes cluster management',
      'Automated CI/CD build, test, and release pipelines (GitHub Actions)',
      'Cloud environments on AWS, Google Cloud, and DigitalOcean',
      'Observability with structured logging, Prometheus metrics, and alerts',
    ],
    tech: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'GitHub Actions', 'Nginx'],
  },
  {
    id: 'consulting',
    title: 'Digital Transformation & Architecture Consulting',
    iconName: 'Zap',
    summary: 'Strategic technology advisory, system audits, modernization roadmaps, and fractional tech leadership.',
    description:
      'We help enterprise leaders, startups, and public agencies evaluate existing systems, eliminate technical debt, modernize legacy monoliths, and choose the right architectural paths.',
    features: [
      'Full architecture audits and technical debt assessment',
      'Migration roadmaps from monoliths to decoupled microservices',
      'Security posture reviews and API hardening benchmarks',
      'Engineering mentorship, code quality standards, and SLA definition',
    ],
    tech: ['System Design', 'Microservices', 'Security Audits', 'API Specs'],
  },
]

export const products = [
  {
    id: 'ora-pos',
    title: 'ORA POS & Inventory Intelligence',
    category: 'Retail & Multi-Branch Systems',
    badge: 'Flagship Platform',
    tagline: 'Multi-branch point-of-sale and real-time inventory synchronization engine.',
    description:
      'A comprehensive POS and inventory management system designed for fast checkouts, multi-location stock tracking, daily sales reconciliation, and automated low-inventory alerts.',
    features: [
      'Sub-2-second checkout with barcode scanner and thermal receipt printing',
      'Real-time atomic inventory decrement across multiple retail locations',
      'End-of-day sales reconciliation, profit margin tracking, and tax analytics',
      'Offline-capable local storage with background cloud synchronization',
    ],
    image: 'https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/3633ecbb8_generated_image.png',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'IndexedDB', 'WebSockets'],
  },
  {
    id: 'custom-enterprise',
    title: 'Afrookoo Custom Enterprise Platforms',
    category: 'Enterprise Software & Cloud',
    badge: 'Bespoke Architecture',
    tagline: 'Tailor-made web applications, business portals, and resilient backends.',
    description:
      'We engineer bespoke web applications and core operational systems built from scratch around your organization’s unique workflows, data structures, and security requirements.',
    features: [
      'Modern, responsive web frontends (React, Next.js, TypeScript)',
      'High-throughput REST and GraphQL backend microservices',
      'Relational & document database architecture (PostgreSQL, Redis)',
      'Strict role-based authentication, multi-tenancy, and audit logs',
    ],
    image: 'https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/3633ecbb8_generated_image.png',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'CI/CD'],
  },
]

export const projects = [
  {
    slug: 'ora-pos',
    title: 'ORA POS & Inventory Intelligence',
    subtitle: 'Multi-Branch POS & Retail Inventory Engine',
    category: 'Production Platform',
    platform: 'RETAIL POS & INVENTORY PLATFORM',
    role: 'Full-Stack Software Engineering & System Architecture · Afrookoo Team',
    timeline: 'Production Deployment',
    tags: ['REACT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'OFFLINE-FIRST', 'WEBSOCKETS', 'BARCODE SCANNING'],
    image: 'https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/3633ecbb8_generated_image.png',
    summary:
      'A point-of-sale and inventory intelligence system enabling real-time stock tracking, sub-2-second cashier checkouts, offline-first continuity, and consolidated multi-branch analytics.',
    problem:
      'Multi-branch retail operations experienced chronic inventory drift, slow cashier queues during peak shopping rushes, and business disruption whenever network connectivity failed.',
    approach:
      'Engineered an offline-first cashier terminal with local queue caching, atomic database operations for zero-drift stock decrements, instant barcode scanning workflows, and an automated background synchronization engine that reconciles transactions seamlessly upon reconnection.',
    outcomes: [
      'Sub-2-second checkout speed with barcode scanner & thermal printer integration.',
      '100% accurate branch inventory levels without manual end-of-shift audits.',
      'Zero-downtime offline mode: cashiers continue ringing sales during full network outages.',
      'Automated low-inventory notifications preventing stockout lost revenue.',
    ],
    client: 'Oromo Research Association (ORA) Commercial System',
    industry: 'Retail & Multi-Branch Commerce',
    diagramNodes: [
      { step: '01', title: 'POS Terminal & Scanner', desc: 'Cashier UI, barcode scanner & thermal printer integration', badge: 'Edge Terminal' },
      { step: '02', title: 'Local Offline Buffer', desc: 'IndexedDB / SQLite local queue for network-failure resilience', badge: 'Edge Resilience' },
      { step: '03', title: 'Sync & Gateway Layer', desc: 'Secure WebSocket & REST gateway with JWT authentication', badge: 'Gateway' },
      { step: '04', title: 'Atomic Inventory Engine', desc: 'ACID-compliant stock decrement ledger and pricing rules', badge: 'Core Domain' },
      { step: '05', title: 'Cloud DB & Analytics', desc: 'Central store database and real-time executive dashboard', badge: 'Cloud & BI' },
    ],
  },
  {
    slug: 'custom-enterprise',
    title: 'Afrookoo Custom Enterprise Platforms',
    subtitle: 'Scalable Enterprise Web Applications, Portals & Backends',
    category: 'Enterprise Software',
    platform: 'BESPOKE ENTERPRISE ARCHITECTURE',
    role: 'Full-Stack Software Engineering & Architecture · Afrookoo Team',
    timeline: 'Enterprise Engagement',
    tags: ['REACT', 'NODE.JS', 'POSTGRESQL', 'DOCKER', 'HEXAGONAL ARCHITECTURE', 'RBAC', 'MICROSERVICES'],
    image: 'https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/3633ecbb8_generated_image.png',
    summary:
      'Tailor-made enterprise software platforms engineered to eliminate operational fragmentation, automate complex administrative workflows, and unify multi-department data with strict access controls.',
    problem:
      'Enterprises struggled with rigid off-the-shelf software and chaotic manual spreadsheets, resulting in data silos, costly subscription fees, and an inability to adapt to custom business requirements.',
    approach:
      'Architected a modular, domain-driven enterprise platform utilizing clean hexagonal architecture, fine-grained role-based access control (RBAC), high-throughput REST APIs, relational database modeling, and real-time executive dashboards.',
    outcomes: [
      'Unified disparate branch and department workflows into a single high-performance portal.',
      'Full intellectual property ownership with zero recurring third-party seat license costs.',
      'Sub-50ms API response latency with containerized Docker deployments and automated CI/CD.',
      'Enterprise-grade security with audit logging, encrypted data stores, and role-based permissions.',
    ],
    client: 'Enterprise Client Engagements',
    industry: 'Commercial & Enterprise Systems',
    diagramNodes: [
      { step: '01', title: 'Client Portals & Apps', desc: 'Responsive React web frontends, mobile clients, and partner APIs', badge: 'Access Layer' },
      { step: '02', title: 'API & Security Gateway', desc: 'WAF, rate limiting, TLS termination, and role-based authorization', badge: 'Security Gateway' },
      { step: '03', title: 'Modular Domain Core', desc: 'Hexagonal business logic, automated workflows, and ERP modules', badge: 'Core Engine' },
      { step: '04', title: 'Distributed State & Cache', desc: 'Redis distributed cache and asynchronous event queues', badge: 'Performance Layer' },
      { step: '05', title: 'Clustered DB & Cloud Infra', desc: 'PostgreSQL cluster, Docker/K8s orchestration, and CI/CD pipelines', badge: 'Storage & Cloud' },
    ],
  },
]

export const testimonials = []

export const industries = [
  {
    name: 'Government & Public Sector',
    desc: 'Digital public services, customs intelligence systems, and secure citizen portals engineered with strict data sovereignty.',
    iconName: 'Shield',
    examples: 'Customs platforms, e-governance portals, automated triage',
  },
  {
    name: 'Banking & Financial Services',
    desc: 'Core payment processing, POS integrations, microfinance ledgers, and PCI-compliant financial microservices.',
    iconName: 'BarChart',
    examples: 'Digital ledgers, transaction engines, branch reconciliation',
  },
  {
    name: 'Healthcare & HealthTech',
    desc: 'Patient record systems, clinical scheduling workflows, biometric sync, and secure tele-health architectures.',
    iconName: 'Zap',
    examples: 'Mobile patient companion, clinic records, HealthKit sync',
  },
  {
    name: 'Logistics & Supply Chain',
    desc: 'Fleet tracking, inventory visibility across warehouses, dispatch routing, and automated audit documentation.',
    iconName: 'Layers',
    examples: 'Real-time stock balance, cargo manifests, barcode scanning',
  },
  {
    name: 'Retail & E-Commerce',
    desc: 'High-speed point-of-sale, omnichannel product catalogs, automated receipt generation, and branch analytics.',
    iconName: 'Code',
    examples: 'Multi-branch POS, customer loyalty, stock alerts',
  },
  {
    name: 'Agriculture & AgTech',
    desc: 'Supply chain transparency for agricultural commodities, cooperative member tracking, and market price portals.',
    iconName: 'Cloud',
    examples: 'Cooperative inventory, farmer ledger, price intelligence',
  },
  {
    name: 'Legal & Compliance',
    desc: 'Structured case workflow engines, regulatory compliance audits, legal document versioning, and SLA timers.',
    iconName: 'FileText',
    examples: 'Workflow automation tracker, audit trails, document authorization',
  },
  {
    name: 'International NGOs & Development',
    desc: 'Field data collection, grant disbursement monitoring, real-time KPI visualization, and multi-lingual portals.',
    iconName: 'Users',
    examples: 'Field reporting, donor dashboards, impact analytics',
  },
]

export const process = [
  {
    step: '01',
    title: 'Discovery & Requirements',
    desc: 'We conduct deep technical discovery into your operational bottlenecks, business objectives, and technical constraints.',
    deliverable: 'Technical Roadmap & Scope Specification',
  },
  {
    step: '02',
    title: 'Architecture & Design System',
    desc: 'We architect decoupled database schemas, API contracts, and high-fidelity interactive user interface prototypes.',
    deliverable: 'System Architecture & Interactive Figma Prototypes',
  },
  {
    step: '03',
    title: 'Agile Engineering & Sprints',
    desc: 'Clean code development following Domain-Driven Design, Hexagonal Architecture, and bi-weekly production sprint demos.',
    deliverable: 'Working Software Sprints & Testable Builds',
  },
  {
    step: '04',
    title: 'QA, Security & Performance',
    desc: 'Automated integration tests, stress tests for high concurrent traffic, and rigorous security posture validation.',
    deliverable: 'Security & QA Sign-off Report',
  },
  {
    step: '05',
    title: 'Deployment & CI/CD Setup',
    desc: 'Zero-downtime containerized production releases on AWS or GCP with automated staging and production deployment gates.',
    deliverable: 'Production Launch & Automated CI/CD Pipelines',
  },
  {
    step: '06',
    title: 'Maintenance, SLAs & Evolution',
    desc: 'Continuous telemetry, uptime monitoring, scheduled security patches, and forward-looking feature enhancements.',
    deliverable: 'Dedicated SLA Support & Evolution Cycles',
  },
]

export const stack = [
  {
    category: 'Frontend & Web',
    label: 'Frontend',
    items: ['React 18', 'Next.js', 'Angular', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
    highlight: 'Responsive, accessible, sub-second interactive frontends.',
  },
  {
    category: 'Backend & APIs',
    label: 'Backend',
    items: ['Java / Spring Boot', 'Node.js', 'Express', 'Python / FastAPI', 'REST & GraphQL'],
    highlight: 'Fault-tolerant, high-concurrency microservices and APIs.',
  },
  {
    category: 'Mobile & iOS',
    label: 'Mobile',
    items: ['Swift', 'SwiftUI', 'UIKit', 'Apple HealthKit', 'Flutter', 'SwiftData'],
    highlight: 'Native iOS performance with fluid 60fps animations.',
  },
  {
    category: 'AI & Data Science',
    label: 'AI & Data',
    items: ['Multi-Agent Systems', 'Python', 'LangChain', 'Vector DBs', 'Machine Learning', 'NLP'],
    highlight: 'Autonomous reasoning, structured tool use, and enterprise RAG.',
  },
  {
    category: 'Databases & Cache',
    label: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'SQLite'],
    highlight: 'ACID transactional integrity and low-latency in-memory caching.',
  },
  {
    category: 'Cloud & DevOps',
    label: 'Cloud & DevOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'GitHub Actions', 'Nginx'],
    highlight: 'Automated CI/CD, container orchestration, and zero-downtime deploys.',
  },
]

export const architecture =
  'Hexagonal Architecture (Ports & Adapters), Microservices, Event-Driven Systems, API-First Design, Clean Architecture'

export const architecturePrinciples = [
  {
    name: 'Hexagonal Architecture',
    desc: 'Ports and adapters decouple business logic from external frameworks, databases, and UI layers for effortless testability.',
  },
  {
    name: 'Microservices & Modular Monoliths',
    desc: 'Right-sized architectural boundaries tailored to organizational scaling requirements without premature over-engineering.',
  },
  {
    name: 'Event-Driven & Reactive Systems',
    desc: 'Asynchronous event streaming ensures high responsiveness under massive sudden traffic surges.',
  },
  {
    name: 'API-First & Strict Typing',
    desc: 'Formally documented OpenAPI/REST specifications ensure rock-solid interoperability across frontend, mobile, and third parties.',
  },
]

export const insightTopics = [
  'Artificial Intelligence',
  'Software Architecture',
  'Hexagonal Design',
  'Offline-First POS',
  'Native iOS & Swift',
  'Multi-Agent Workflows',
  'Enterprise Scale',
]

export const careerCards = [
  'Senior Full-Stack Engineer',
  'AI & Multi-Agent Engineer',
  'iOS Software Engineer',
  'UI/UX Product Designer',
]

export const insights = [
  {
    slug: 'multi-agent-enterprise-ai',
    title: 'Architecting Multi-Agent AI Systems for Enterprise Automation',
    category: 'AI & Machine Learning',
    readTime: '6 min read',
    date: 'Oct 2026',
    author: 'Afrookoo Engineering Team',
    summary:
      'Why single-prompt LLM wrappers fail in enterprise settings, and how multi-agent loops with specialized roles and schema validation produce deterministic results.',
    highlights: [
      'Decomposing monolithic prompts into Planner, Researcher, and Verifier agent roles',
      'Preventing hallucinations using strict JSON schema validation and retry boundaries',
      'Implementing Human-in-the-Loop approval checkpoints for irreversible actions',
    ],
  },
  {
    slug: 'hexagonal-architecture-spring-boot',
    title: 'Why Hexagonal Architecture Powers Resilient Enterprise Systems',
    category: 'Software Architecture',
    readTime: '5 min read',
    date: 'Aug 2026',
    author: 'Afrookoo Engineering Team',
    summary:
      'A practical guide to implementing Ports & Adapters in Spring Boot and Node.js microservices to protect core domain logic from framework obsolescence.',
    highlights: [
      'Separating domain entities and use cases from database adapters',
      'Unit testing complex business rules in milliseconds without booting databases',
      'Real-world lessons from public sector customs and warehouse systems',
    ],
  },
  {
    slug: 'offline-first-pos-emerging-markets',
    title: 'Building Offline-First POS & Inventory Engines for High Reliability',
    category: 'Engineering & Systems',
    readTime: '7 min read',
    date: 'Jun 2026',
    author: 'Afrookoo Engineering Team',
    summary:
      'Designing point-of-sale architectures that survive unstable network connectivity without risking double sales or inventory desynchronization.',
    highlights: [
      'Local IndexedDB / SQLite transaction queues with conflict-free vector clocks',
      'Optimistic UI checkouts with atomic server reconciliation upon reconnect',
      'Preventing negative stock counts across multi-location retail branches',
    ],
  },
  {
    slug: 'swiftui-vs-cross-platform-2026',
    title: 'Native SwiftUI vs. Cross-Platform Frameworks in 2026: An Engineering Analysis',
    category: 'Mobile Engineering',
    readTime: '4 min read',
    date: 'Apr 2026',
    author: 'Afrookoo Engineering Team',
    summary:
      'When to choose native Swift/SwiftUI over Flutter or React Native for iOS products demanding device sensor precision and fluid 120Hz gestures.',
    highlights: [
      'Deep Apple ecosystem integration: HealthKit, Widgets, and CoreMotion',
      'Memory footprint and battery efficiency comparisons in continuous tracking',
      'Structuring hybrid teams for cross-platform web and native mobile excellence',
    ],
  },
]

export const careerOpenings = [
  {
    id: 'senior-fullstack',
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Addis Ababa (Hybrid)',
    experience: '3+ Years',
    desc: 'Build scalable React and Node.js/Spring Boot services powering our enterprise platforms and SaaS products.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'REST APIs'],
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI & Multi-Agent Systems Engineer',
    department: 'Artificial Intelligence',
    type: 'Full-time',
    location: 'Addis Ababa / Remote',
    experience: '2+ Years',
    desc: 'Architect autonomous agent loops, retrieval-augmented generation pipelines, and predictive ML systems.',
    skills: ['Python', 'FastAPI', 'LangChain', 'Vector DBs', 'LLMs'],
  },
  {
    id: 'ios-engineer',
    title: 'iOS Software Engineer',
    department: 'Mobile Engineering',
    type: 'Full-time',
    location: 'Addis Ababa (Hybrid)',
    experience: '2+ Years',
    desc: 'Craft polished, native SwiftUI and UIKit applications with HealthKit and device hardware integrations.',
    skills: ['Swift', 'SwiftUI', 'UIKit', 'SwiftData', 'REST'],
  },
  {
    id: 'product-designer',
    title: 'UI/UX Product Designer',
    department: 'Product & Design',
    type: 'Full-time',
    location: 'Addis Ababa / Hybrid',
    experience: '2+ Years',
    desc: 'Design beautiful, intuitive enterprise software interfaces and design systems with obsessive detail.',
    skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping'],
  },
]

export const careerPerks = [
  {
    title: 'Ethiopian Buna Culture',
    desc: 'Daily freshly brewed traditional Ethiopian coffee breaks to spark creativity and team camaraderie.',
    iconName: 'Coffee',
  },
  {
    title: 'High-Impact Work',
    desc: 'Work on foundational enterprise platforms, AI systems, and products serving national institutions.',
    iconName: 'Award',
  },
  {
    title: 'Modern Hardware & Tools',
    desc: 'High-performance machines, top-tier cloud subscriptions, and cutting-edge developer toolchains.',
    iconName: 'Cpu',
  },
  {
    title: 'Continuous Learning Stipend',
    desc: 'Dedicated budget for conferences, specialized certifications, online courses, and technical books.',
    iconName: 'GraduationCap',
  },
  {
    title: 'Flexible Hybrid Work',
    desc: 'Balanced in-office collaboration in Addis Ababa with flexible remote work autonomy.',
    iconName: 'Clock',
  },
  {
    title: 'Competitive Compensation',
    desc: 'Industry-leading salary packages with milestone performance bonuses and career advancement.',
    iconName: 'Briefcase',
  },
]

export const serviceOptions = [
  'Custom Web & Software Development',
  'Native iOS & Mobile Application',
  'Artificial Intelligence & Multi-Agent Systems',
  'Enterprise ERP & Operations System',
  'Cloud Infrastructure & DevOps CI/CD',
  'Digital Transformation & Architecture Consulting',
]

export const footerColumns = [
  {
    title: 'Company',
    links: [
      ['About Afrookoo', '#about'],
      ['Leadership & Mission', '#about'],
      ['Careers (We are hiring!)', '#careers'],
      ['Insights & Research', '#insights'],
      ['Contact Us', '#contact'],
    ],
  },
  {
    title: 'Services',
    links: [
      ['Custom Software & Web', '#services'],
      ['Native iOS & Mobile', '#services'],
      ['AI & Agentic Systems', '#services'],
      ['Enterprise ERP & Core', '#services'],
      ['Cloud & DevOps', '#services'],
      ['Architecture Advisory', '#services'],
    ],
  },
  {
    title: 'Projects & Platforms',
    links: [
      ['ORA POS & Inventory Intelligence', '#work'],
      ['Afrookoo Custom Enterprise Platforms', '#work'],
      ['System Architecture & Advisory', '#services'],
      ['Cloud & Database Engineering', '#services'],
    ],
  },
  {
    title: 'Solutions & Industries',
    links: [
      ['Government & Public Sector', '#industries'],
      ['Banking & Financial Services', '#industries'],
      ['Healthcare & Life Sciences', '#industries'],
      ['Retail & E-Commerce', '#industries'],
      ['Logistics & Supply Chain', '#industries'],
      ['Technology & Architecture', '#technology'],
    ],
  },
]
