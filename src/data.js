// Comprehensive production data for Afrookoo Software
export const companyInfo = {
  name: 'Afrookoo Software',
  shortName: 'Afrookoo',
  tagline: 'High-performance software systems for East African and global leaders.',
  subtitle:
    'We engineer high-performance custom software, offline-first POS systems, and intelligent business platforms from Addis Ababa to global enterprises.',
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

// 5 Main Chapters + secondary access modals
export const navLinks = [
  { label: 'Case Studies', href: '#work', type: 'anchor' },
  { label: 'Capabilities', href: '#capabilities', type: 'anchor' },
  { label: 'Engagement', href: '#engagement', type: 'anchor' },
  { label: 'Estimate Project', href: '#contact', type: 'anchor' },
]

export const secondaryLinks = [
  { id: 'about', label: 'About Afrookoo' },
  { id: 'industries', label: 'Industries' },
  { id: 'insights', label: 'Engineering Insights' },
  { id: 'careers', label: 'Careers' },
]

export const stats = [
  { value: '10+', label: 'Platforms Shipped', detail: 'Offline-first POS, ERP & iOS' },
  { value: '99.99%', label: 'Uptime Standard', detail: 'Zero-drift production SLA' },
  { value: '< 1.8s', label: 'Checkout Latency', detail: 'Sub-second edge transactions' },
  { value: '100%', label: 'IP Ownership', detail: 'Full source code handover' },
]

export const partners = [
  {
    name: 'Awash Bank',
    category: 'Commercial Banking & Financial Services',
    shortCode: 'AB',
    tagline: 'Leading Private Commercial Bank in Ethiopia',
  },
  {
    name: 'Oromo Research Association (ORA)',
    category: 'Research & Institutional Systems',
    shortCode: 'ORA',
    tagline: 'Academic Research, Digital Archives & Retail Operations',
  },
  {
    name: 'Kerchanshe',
    category: 'Commercial Enterprise & Agriculture',
    shortCode: 'KC',
    tagline: 'Global Agro-Commodity & Enterprise Producer',
  },
  {
    name: 'Rift Valley University',
    category: 'Higher Education & Academic Systems',
    shortCode: 'RVU',
    tagline: 'Pioneering Higher Education Institution',
  },
]

export const techPills = [
  { id: 'all', label: 'All Stack' },
  { id: 'react', label: 'React / Next.js', category: 'frontend' },
  { id: 'nestjs', label: 'Nest.js / TypeScript', category: 'backend' },
  { id: 'spring', label: 'Spring Boot 3', category: 'backend' },
  { id: 'ios-swift', label: 'iOS (Swift & SwiftUI)', category: 'mobile' },
  { id: 'android-compose', label: 'Android (Kotlin & Compose)', category: 'mobile' },
  { id: 'postgres', label: 'PostgreSQL & Redis', category: 'database' },
  { id: 'docker', label: 'Docker & Kubernetes', category: 'devops' },
]

export const caseStudies = [
  {
    id: 'ora-pos',
    slug: 'ora-pos',
    title: 'ORA POS & Retail Inventory Intelligence',
    subtitle: 'Offline-First Multi-Branch Retail Engine',
    category: 'Retail & Multi-Branch Commerce',
    client: 'Oromo Research Association (ORA)',
    platform: 'DISTRIBUTED POS & ATOMIC INVENTORY LEDGER',
    problem:
      'Frequent ISP network blackouts froze cashier checkouts and caused inventory drift across retail branches.',
    built: [
      'Engineered an offline-first POS terminal running on local IndexedDB with sub-second barcode scans and automatic zero-loss WebSocket cloud sync upon reconnect.',
    ],
    results: [
      { label: 'Checkout Velocity', value: '1.8s', note: 'Barcode scan to printed receipt' },
      { label: 'Offline Uptime', value: '100%', note: 'Zero cashier disruption during cuts' },
      { label: 'Stock Drift', value: '0.0%', note: 'Automated atomic reconciliation' },
    ],
    tags: ['REACT', 'NODE.JS', 'INDEXEDDB', 'WEBSOCKETS', 'POSTGRESQL', 'OFFLINE-FIRST'],
    techCategory: ['react', 'node', 'postgres'],
    version: 'v2.8.4 production',
    deployTarget: '4 Retail Locations · Addis Ababa',
    previewType: 'pos-mockup',
  },
  {
    id: 'kerchanshe-erp',
    slug: 'kerchanshe-erp',
    title: 'Kerchanshe Global Logistics & Commodity ERP',
    subtitle: 'Centralized Multi-Warehouse Freight & Stock Intelligence',
    category: 'Commercial Enterprise & Agro-Export',
    client: 'Kerchanshe Trading',
    platform: 'ENTERPRISE ERP & COMMODITY LEDGER',
    problem:
      'Fragmented regional spreadsheets delayed export shipping manifests and hindered real-time lot tracking.',
    built: [
      'Built a decoupled Hexagonal ERP platform with Spring Boot and PostgreSQL, automating export paperwork and multi-warehouse freight dispatch.',
    ],
    results: [
      { label: 'Manifest Speed', value: '4.2x Faster', note: 'Instant automated export clearance' },
      { label: 'Volume Tracked', value: '38,000+ MT', note: 'Coffee commodities audited annually' },
      { label: 'Audit Accuracy', value: '99.98%', note: 'Eliminated discrepancy leakages' },
    ],
    tags: ['SPRING BOOT', 'JAVA 21', 'POSTGRESQL', 'REDIS', 'DOCKER', 'HEXAGONAL'],
    techCategory: ['spring', 'postgres', 'docker'],
    version: 'v3.1.2 enterprise',
    deployTarget: 'Regional Warehouses & Head Office',
    previewType: 'erp-mockup',
  },
  {
    id: 'awash-gateway',
    slug: 'awash-gateway',
    title: 'Awash Bank Commercial Microservice Gateway',
    subtitle: 'Low-Latency Partner API & Settlement Engine',
    category: 'Financial Services & Banking Systems',
    client: 'Awash Bank Integration Layer',
    platform: 'FINANCIAL TRANSACTION MICROSERVICE',
    problem:
      'Branch banking systems required high-speed, secure interoperability with external retail partners without exposing the core ledger.',
    built: [
      'Delivered a hardened API gateway with mTLS v1.3 encryption, sub-45ms responses, and a fault-tolerant Redis streams settlement queue.',
    ],
    results: [
      { label: 'API Latency', value: '< 45ms', note: 'Roundtrip p99 response time' },
      { label: 'Reconciliation', value: '100.0%', note: 'Zero failed settlement records' },
      { label: 'Security Standard', value: 'mTLS v1.3', note: 'Hardened cryptographic transport' },
    ],
    tags: ['TYPESCRIPT', 'FASTAPI', 'REDIS', 'DOCKER', 'KUBERNETES', 'MTLS'],
    techCategory: ['node', 'python', 'docker', 'postgres'],
    version: 'v1.9.0 banking core',
    deployTarget: 'Private Cloud Infrastructure',
    previewType: 'gateway-mockup',
  },
]

export const engagementModels = [
  {
    id: 'sprint',
    title: 'Sprint Delivery',
    duration: '2–4 Weeks',
    scopeName: 'Sprint Delivery (2–4 Weeks)',
    tagline: 'MVPs, technical audits, and rapid product prototyping.',
    bestFor: 'Founders launching new products or enterprise teams requiring rapid prototype validation.',
    priceNote: 'Fixed Scope · Immediate Kickoff',
    features: [
      'Kickoff within 48 hours of scope agreement',
      'Bi-weekly production sprint demos',
      'Full source code repository handover',
      'Automated CI/CD pipeline & cloud deployment',
    ],
    deliverables: ['Production MVP Code', 'API Specifications', 'Automated CI/CD Pipeline'],
    badge: 'Rapid Validation',
    popular: false,
  },
  {
    id: 'turnkey',
    title: 'Turnkey Product',
    duration: '6–12 Weeks',
    scopeName: 'Turnkey Product (6–12 Weeks)',
    tagline: 'End-to-end custom web and mobile platforms from architecture to release.',
    bestFor: 'Established businesses replacing legacy tools with high-performance web, mobile, and ERP platforms.',
    priceNote: 'Milestone-Based · Full Architecture',
    features: [
      'Decoupled Hexagonal architecture & database modeling',
      'Responsive web frontend + native iOS mobile application',
      'Comprehensive QA, load testing, and security hardening',
      '60-day post-launch warranty and production SLA support',
    ],
    deliverables: ['Full Production Platform', 'Admin Dashboard & Telemetry', '60-Day SLA Warranty'],
    badge: 'Most Popular',
    popular: true,
  },
  {
    id: 'pod',
    title: 'Dedicated Engineering Pod',
    duration: 'Monthly Retainer',
    scopeName: 'Dedicated Engineering Pod',
    tagline: 'Monthly full-stack engineering team embedded into your workflows.',
    bestFor: 'Scale-ups needing sustained development velocity without internal recruiting overhead.',
    priceNote: 'Flexible Monthly · Scalable Capacity',
    features: [
      'Senior full-stack developers + technical architecture lead',
      'Direct collaboration in your Slack / Teams channels',
      'Flexible monthly capacity scaling',
      'Continuous feature delivery and cloud infrastructure maintenance',
    ],
    deliverables: ['Dedicated Sprint Velocity', 'Daily Async Standups', 'Technical Leadership'],
    badge: 'Scale Team',
    popular: false,
  },
]

export const shippingSteps = [
  {
    step: '01',
    name: 'Discovery & Spec',
    timing: 'Days 1–3',
    desc: 'We map operational bottlenecks, data boundaries, and API requirements into an actionable spec.',
  },
  {
    step: '02',
    name: 'Architecture & Schema',
    timing: 'Week 1',
    desc: 'We design decoupled database schemas, Ports & Adapters interfaces, and interactive Figma prototypes.',
  },
  {
    step: '03',
    name: 'Bi-Weekly Sprints',
    timing: 'Weeks 2–8',
    desc: 'Clean code development following Domain-Driven Design with live staging demos every two weeks.',
  },
  {
    step: '04',
    name: 'Stress & Security QA',
    timing: 'Pre-Release',
    desc: 'Automated integration tests, edge latency verification, and penetration hardening before launch.',
  },
  {
    step: '05',
    name: 'Zero-Downtime Deploy',
    timing: 'Launch Day',
    desc: 'Blue/green containerized production release on AWS or GCP with automated telemetry and alerting.',
  },
]

export const projectTypes = [
  { id: 'web-nest', title: 'Web Platforms & Nest.js Core', desc: 'Enterprise portals, NestJS APIs, and PostgreSQL distributed systems' },
  { id: 'native-mobile', title: 'Native Mobile (iOS & Android)', desc: 'Swift & SwiftUI for iOS, Kotlin & Jetpack Compose for Android' },
  { id: 'pos-retail', title: 'Offline-First POS & Commerce', desc: 'Sub-second cash registers and atomic stock tracking' },
  { id: 'cloud-infra', title: 'Cloud Infrastructure & DevOps', desc: 'Docker, Kubernetes, CI/CD, and high-availability SRE' },
]

export const timelines = [
  { id: 'immediate', title: 'Immediate Sprint', detail: '2–4 Weeks (Fast-track MVP)' },
  { id: 'standard', title: 'Standard Turnkey', detail: '6–12 Weeks (Full production platform)' },
  { id: 'continuous', title: 'Dedicated Pod', detail: 'Monthly embedded engineering team' },
]

// Secondary modal content (About, Industries, Insights, Careers)
export const aboutDetails = {
  title: 'Engineering Craftsmanship in Addis Ababa',
  story:
    'Afrookoo Software was established with a singular objective: to build software systems that compete at the highest tier of international engineering rigor while solving critical operational realities in East Africa.',
  principles: [
    {
      title: 'Real-World Resilience',
      desc: 'We design for network instability, power cuts, and heavy concurrency using local-first storage and conflict-free data structures.',
    },
    {
      title: 'Decoupled Domain Architecture',
      desc: 'We structure backends using Hexagonal Architecture (Ports and Adapters) so domain logic remains untouched when external libraries evolve.',
    },
    {
      title: 'Transparent Code Ownership',
      desc: 'Our partners receive 100% intellectual property ownership, zero vendor lock-in, and fully documented source repositories.',
    },
    {
      title: 'Production Rigor',
      desc: 'We enforce automated testing, strict architectural boundaries, and performance benchmarks on every release.',
    },
  ],
}

export const industriesData = [
  {
    name: 'Banking & Financial Services',
    desc: 'API gateways, settlement queues, reconciliation engines, and core payment processors.',
    iconName: 'BarChart',
    highlight: 'Sub-45ms transaction latency with mTLS v1.3 encryption.',
  },
  {
    name: 'Agriculture & Agro-Export',
    desc: 'Multi-warehouse commodity tracking, container dispatch certification, and export manifest automation.',
    iconName: 'Layers',
    highlight: 'Over 38,000 MT of export commodities tracked with zero audit leakage.',
  },
  {
    name: 'Retail & Multi-Branch Commerce',
    desc: 'Offline-first POS registers, barcode scanner integrations, and multi-store atomic inventory sync.',
    iconName: 'Code',
    highlight: '100% offline uptime with sub-2s checkout speed.',
  },
  {
    name: 'Higher Education & Research',
    desc: 'Digital academic archives, institutional publishing systems, and faculty operations management.',
    iconName: 'Shield',
    highlight: 'Decoupled role-based access for multi-department organizations.',
  },
]

export const insightsData = [
  {
    slug: 'offline-first-pos-emerging-markets',
    title: 'Building Offline-First POS & Inventory Engines for High Reliability',
    category: 'Distributed Systems',
    readTime: '7 min read',
    date: 'Oct 2026',
    author: 'Afrookoo Engineering Team',
    summary:
      'Designing point-of-sale architectures that survive unstable network connectivity without risking double sales or inventory desynchronization.',
    points: [
      'Local IndexedDB transaction queues with conflict-free vector clocks',
      'Optimistic cashier checkout with background server reconciliation upon reconnect',
      'Preventing negative stock counts across multi-location retail branches',
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
      'A practical guide to implementing Ports & Adapters in Spring Boot microservices to protect core domain logic from framework churn.',
    points: [
      'Separating domain entities and use cases from database adapters',
      'Unit testing complex business rules in milliseconds without booting databases',
      'Lessons learned from high-throughput warehouse logistics systems',
    ],
  },
  {
    slug: 'multi-agent-enterprise-ai',
    title: 'Architecting Multi-Agent AI Systems for Enterprise Automation',
    category: 'AI & Data Systems',
    readTime: '6 min read',
    date: 'Jul 2026',
    author: 'Afrookoo Engineering Team',
    summary:
      'Why single-prompt LLM wrappers fail in enterprise settings, and how multi-agent loops with specialized roles and schema validation produce deterministic results.',
    points: [
      'Decomposing workflows into Planner, Researcher, and Verifier agent roles',
      'Preventing hallucinations using strict JSON schema validation and retry boundaries',
      'Human-in-the-loop approval checkpoints for irreversible actions',
    ],
  },
  {
    slug: 'swiftui-vs-cross-platform-2026',
    title: 'Native SwiftUI vs. Cross-Platform Frameworks: An Engineering Analysis',
    category: 'Mobile Engineering',
    readTime: '4 min read',
    date: 'May 2026',
    author: 'Afrookoo Engineering Team',
    summary:
      'When to choose native Swift/SwiftUI over Flutter or React Native for iOS products demanding device sensor precision and fluid 120Hz gestures.',
    points: [
      'Deep Apple ecosystem integration: HealthKit, Widgets, and CoreMotion',
      'Memory footprint and battery efficiency in continuous background tasks',
      'Structuring hybrid teams for cross-platform web and native mobile excellence',
    ],
  },
]

export const careerOpenings = []

export const careerPerks = []

export const footerColumns = [
  {
    title: 'Navigation',
    links: [
      { label: 'Case Studies', href: '#work', type: 'anchor' },
      { label: 'Capabilities Bento', href: '#capabilities', type: 'anchor' },
      { label: 'Engagement Models', href: '#engagement', type: 'anchor' },
      { label: 'Project Estimator', href: '#contact', type: 'anchor' },
    ],
  },
  {
    title: 'Deep Dives',
    links: [
      { label: 'About Afrookoo', modalId: 'about', type: 'modal' },
      { label: 'Industries Served', modalId: 'industries', type: 'modal' },
      { label: 'Engineering Insights', modalId: 'insights', type: 'modal' },
      { label: 'Careers', modalId: 'careers', type: 'modal' },
    ],
  },
  {
    title: 'Case Studies',
    links: [
      { label: 'ORA POS & Retail Engine', href: '#work', type: 'anchor' },
      { label: 'Kerchanshe Commodity ERP', href: '#work', type: 'anchor' },
      { label: 'Awash Bank API Gateway', href: '#work', type: 'anchor' },
    ],
  },
  {
    title: 'Contact & Legal',
    links: [
      { label: 'contact@afrookoo.com', href: 'mailto:contact@afrookoo.com', type: 'external' },
      { label: 'Telegram: @afrookoo', href: 'https://t.me/afrookoo', type: 'external' },
      { label: 'Addis Ababa, Ethiopia', href: '#contact', type: 'anchor' },
    ],
  },
]
