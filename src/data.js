// Comprehensive production data for Afrookoo Software
export const companyInfo = {
  name: 'Afrookoo Software',
  shortName: 'Afrookoo',
  tagline: 'High-performance software systems for commercial and global leaders.',
  subtitle:
    'We engineer high-performance custom software, multi-branch POS platforms, and intelligent business systems for commercial and global enterprises.',
  location: '4 Kilo, Ethiopia · EAT (UTC+3)',
  address: '4 Kilo, Around Abrehot Library, Rift Valley University, Ethiopia',
  email: 'contact@afrookoo.com',
  workEmail: 'contact@afrookoo.com',
  phone: '+251 91 234 5678',
  hours: 'Mon to Fri: 8:30 AM to 6:00 PM EAT (UTC+3)',
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
  { label: 'Estimate', href: '#contact', type: 'anchor' },
]

export const secondaryLinks = [
  { id: 'about', label: 'About Afrookoo' },
  { id: 'industries', label: 'Industries' },
  { id: 'insights', label: 'Engineering Insights' },
  { id: 'careers', label: 'Careers' },
]

export const stats = [
  { value: '10+', label: 'Platforms Shipped', detail: 'Multi-branch POS, ERP & iOS systems' },
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

// Shipped Case Studies
export const caseStudies = [
  {
    id: 'ora-pos',
    slug: 'ora-pos',
    title: 'ORA POS & Retail Inventory Intelligence',
    subtitle: 'Multi-Branch Retail Inventory & POS Engine',
    category: 'Retail & Multi-Branch Commerce',
    client: 'Oromo Research Association (ORA)',
    platform: 'DISTRIBUTED POS & ATOMIC INVENTORY LEDGER',
    problem:
      'Fragmented counter systems and manual stock updates caused checkout bottlenecks and inventory desynchronization across multi-location retail branches.',
    built: [
      'Engineered a high-speed POS terminal with sub-second barcode scanning and real-time WebSocket inventory synchronization across all branch registers.',
    ],
    results: [
      { label: 'Checkout Velocity', value: '1.8s', note: 'Barcode scan to printed receipt' },
      { label: 'System Uptime', value: '99.9%', note: 'High-availability retail counter uptime' },
      { label: 'Stock Drift', value: '0.0%', note: 'Automated atomic reconciliation' },
    ],
    tags: ['REACT', 'NODE.JS', 'WEBSOCKETS', 'POSTGRESQL', 'RETAIL COMMERCE'],
    techCategory: ['react', 'node', 'postgres'],
    version: 'v2.8.4 production',
    deployTarget: '4 Retail Locations',
    previewType: 'pos-mockup',
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
  { id: 'web-nest', title: 'Web Platforms & Distributed Core', desc: 'Enterprise portals, APIs, and PostgreSQL distributed systems' },
  { id: 'native-mobile', title: 'Native Mobile (iOS & Android)', desc: 'Swift & SwiftUI for iOS, Kotlin & Jetpack Compose for Android' },
  { id: 'pos-retail', title: 'Retail POS & Commerce Systems', desc: 'Sub-second cash registers and multi-branch stock tracking' },
  { id: 'cloud-infra', title: 'Cloud Infrastructure & DevOps', desc: 'Docker, Kubernetes, CI/CD, and high-availability SRE' },
]

export const timelines = [
  { id: 'immediate', title: 'Immediate Sprint', detail: '2–4 Weeks (Fast-track MVP)' },
  { id: 'standard', title: 'Standard Turnkey', detail: '6–12 Weeks (Full production platform)' },
  { id: 'continuous', title: 'Dedicated Pod', detail: 'Monthly embedded engineering team' },
  { id: 'custom', title: 'Custom Timeline', detail: 'Specify launch date or deadline' },
]

// Secondary modal content (About, Industries, Insights, Careers)
export const aboutDetails = {
  title: 'Engineering Craftsmanship and Rigor',
  story:
    'Afrookoo Software was established with a singular objective: to build software systems that compete at the highest tier of international engineering rigor while solving critical operational realities.',
  principles: [
    {
      title: 'Operational Reliability',
      desc: 'We design for high concurrency, continuous availability, and strict data consistency across distributed business environments.',
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
    desc: 'High-speed POS registers, barcode scanner integrations, and multi-store real-time inventory synchronization.',
    iconName: 'Code',
    highlight: 'Sub-1.8s checkout velocity with automated inventory reconciliation.',
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
    slug: 'high-performance-pos-retail-inventory',
    title: 'Building High-Performance POS & Multi-Branch Inventory Engines',
    category: 'Distributed Systems',
    readTime: '7 min read',
    date: 'Oct 2026',
    author: 'Afrookoo Engineering Team',
    summary:
      'Designing retail architectures that provide sub-second cashier checkout velocity and real-time stock synchronization across distributed stores.',
    points: [
      'Optimized barcode scanning and instant thermal receipt printing',
      'Real-time WebSocket data stream to centralized PostgreSQL engine',
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

export const footerColumns = [
  {
    title: 'Navigation',
    links: [
      { label: 'Case Studies', href: '#work', type: 'anchor' },
      { label: 'Capabilities', href: '#capabilities', type: 'anchor' },
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
    title: 'Contact',
    links: [
      { label: 'contact@afrookoo.com', href: 'mailto:contact@afrookoo.com', type: 'external' },
      { label: 'Telegram: @afrookoo', href: 'https://t.me/afrookoo', type: 'external' },
      { label: 'Project Inquiries', href: '#contact', type: 'anchor' },
    ],
  },
]
