export interface ServiceItem {
  id: string;
  title: string;
  category: 'core' | 'digital' | 'brand';
  description: string;
  fullDetails: string;
  deliverables: string[];
  iconName: string;
  isMainFromFlyer?: boolean;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  shortDesc: string;
  details: string;
  deliverable: string;
}

export interface BenefitCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export const AGENCY_CONFIG = {
  companyName: "Digital Marketing Agency",
  tagline: "Strategic Growth & Digital Excellence",
  placeholderNotice: "This website incorporates branding, copy, and layout from the agency flyer with verified direct contact details.",
  formspreeEndpoint: "https://formspree.io/f/mljdvajw",
  contact: {
    email: "bisiriyumuhammed8@gmail.com",
    phone: "07078187296",
    whatsapp: "07078187296",
    whatsappFormatted: "+234 707 818 7296",
    whatsappLink: "https://wa.me/2347078187296?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20digital%20marketing%20services.",
    address: "Lekki phase 2 block 0302",
    website: "www.digitalmarketing.com",
  },
  placeholders: {
    email: "bisiriyumuhammed8@gmail.com",
    website: "www.digitalmarketing.com",
    address: "Lekki phase 2 block 0302",
    phone: "07078187296",
    whatsapp: "07078187296",
  },
  images: {
    hero: "/src/assets/images/hero_marketing_studio_1790798365360.jpg",
    about: "/src/assets/images/about_strategy_team_1790798377074.jpg",
    services: "/src/assets/images/services_analytics_growth_1790798388528.jpg",
  }
};

export const MAIN_SERVICES: ServiceItem[] = [
  {
    id: "business-concept",
    title: "Business Concept",
    category: "core",
    isMainFromFlyer: true,
    description: "Develop clear and effective business concepts that create a strong foundation for growth.",
    fullDetails: "We collaborate with leadership to transform abstract visions into scalable, market-ready business models. From unit economics to customer value propositions, we ensure your foundation supports long-term growth.",
    deliverables: ["Value Proposition Canvas", "Target Market Persona Validation", "Revenue Model Architecture", "Go-To-Market Roadmap"],
    iconName: "Briefcase"
  },
  {
    id: "market-analysis",
    title: "Market Analysis",
    category: "core",
    isMainFromFlyer: true,
    description: "Understand your target market, customers, competitors, and opportunities through effective market research and analysis.",
    fullDetails: "Make decisions backed by quantitative rigor. We conduct rigorous audience profiling, competitor benchmark studies, demand mapping, and whitespace opportunity identification.",
    deliverables: ["Competitor Benchmarking Matrix", "Audience Intent & Search Volume Maps", "Market Sizing & Whitespace Report", "Pricing & Positioning Audit"],
    iconName: "BarChart3"
  },
  {
    id: "marketing-strategy",
    title: "Marketing Strategy",
    category: "core",
    isMainFromFlyer: true,
    description: "Develop practical marketing strategies that help your business reach the right audience and achieve its goals.",
    fullDetails: "Turn insights into high-converting campaigns. We architect multi-channel acquisition funnels, retention loops, and precise budget allocations calibrated for measurable return on ad spend.",
    deliverables: ["Quarterly Multi-Channel Growth Plan", "Channel Allocation & Budget Modeling", "Conversion Funnel Wireframes", "KPI & Attribution Framework"],
    iconName: "Target"
  }
];

export const ADDITIONAL_SERVICES: ServiceItem[] = [
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    category: "digital",
    description: "Engage prospective buyers, build brand loyalty, and amplify organic reach across high-affinity social networks.",
    fullDetails: "Build an active, loyal community. We create high-engagement content calendars, manage influencer activations, and track conversion attribution across LinkedIn, Instagram, and TikTok.",
    deliverables: ["Monthly Content Calendar", "Community Management SOPs", "Influencer Partnership Sourcing", "Paid Amplification Strategy"],
    iconName: "Share2"
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    category: "brand",
    description: "Craft authoritative editorial, case studies, and multimedia content that educate buyers and drive pipeline.",
    fullDetails: "Establish your brand as an unmistakable industry thought leader. We write in-depth whitepapers, case studies, video scripts, and conversion-focused newsletters.",
    deliverables: ["Editorial Pillars & Content Strategy", "Long-form Thought Leadership Articles", "Lead Magnet eBooks & Guides", "Email Newsletter Sequences"],
    iconName: "FileText"
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    category: "digital",
    description: "Capture organic search intent through technical crawl optimization, topical authority, and high-tier link profiles.",
    fullDetails: "Own page one for high-intent commercial keywords. We implement technical SEO hygiene, programmatic keyword clusters, schema markup, and high-impact digital PR backlink strategies.",
    deliverables: ["Technical Site Architecture Audit", "Topical Keyword Map & Gap Analysis", "On-page Optimization Checklist", "Authority Link Building Blueprint"],
    iconName: "Search"
  },
  {
    id: "digital-advertising",
    title: "Digital Advertising",
    category: "digital",
    description: "Scale profitable customer acquisition through precision Google, Meta, and LinkedIn performance ad campaigns.",
    fullDetails: "Maximize ROAS through algorithmic audience targeting, rapid creative A/B testing, and bespoke retargeting sequences that convert hesitant prospects into customers.",
    deliverables: ["Google Ads Search & PMax Setup", "Meta Dynamic Creative Ad Testing", "Custom Landing Page Split Tests", "Full-Funnel Pixel & CAPI Tracking"],
    iconName: "Megaphone"
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    category: "brand",
    description: "Carve an unforgettable brand identity, cohesive messaging tone, and distinctive visual guidelines.",
    fullDetails: "Stand out in crowded markets. We develop authentic brand positioning, verbal tone guidelines, design system tokens, and cohesive collateral for all touchpoints.",
    deliverables: ["Brand Identity & Tone Guidelines", "Typography & Color System Tokens", "Core Messaging Matrix", "Pitch Deck & Collateral System"],
    iconName: "Compass"
  },
  {
    id: "website-marketing",
    title: "Website Marketing",
    category: "core",
    description: "Transform your website into an always-on lead generation engine optimized for speed, clarity, and conversion.",
    fullDetails: "Your digital storefront must convert. We redesign customer journeys, eliminate friction points, write high-converting copy, and optimize technical Core Web Vitals.",
    deliverables: ["UX & Conversion Rate Optimization (CRO)", "High-Converting Page Copywriting", "Mobile Speed Optimization", "Custom Analytics & Event Tracking"],
    iconName: "Layout"
  }
];

export const ALL_SERVICES = [...MAIN_SERVICES, ...ADDITIONAL_SERVICES];

export const WHY_CHOOSE_US: BenefitCard[] = [
  {
    id: "strategic-approach",
    title: "Strategic Approach",
    description: "Every campaign is grounded in objective market data, clear unit economics, and systematic milestones rather than guesswork.",
    iconName: "Compass",
    highlight: "Zero guesswork campaigns"
  },
  {
    id: "creative-solutions",
    title: "Creative Solutions",
    description: "Distinctive, high-impact creative executions that cut through digital noise and make your brand truly memorable.",
    iconName: "Sparkles",
    highlight: "Bespoke creative design"
  },
  {
    id: "market-focused",
    title: "Market-Focused",
    description: "Deep dive research into buyer behavior, competitor vulnerabilities, and market trends to position your offering for maximum demand.",
    iconName: "Crosshair",
    highlight: "Tailored to buyer intent"
  },
  {
    id: "results-driven",
    title: "Results Driven",
    description: "We align all marketing activities with real business KPIs: pipeline revenue, qualified customer acquisition, and verified ROI.",
    iconName: "TrendingUp",
    highlight: "Measurable commercial growth"
  },
  {
    id: "professional-service",
    title: "Professional Service",
    description: "Experienced digital marketing strategists dedicated to proactive communication, transparent reporting, and punctuality.",
    iconName: "ShieldCheck",
    highlight: "Dedicated senior team"
  },
  {
    id: "customer-support",
    title: "Customer Support",
    description: "Responsive support and regular strategic check-ins to continuously refine campaigns as your business expands.",
    iconName: "Headphones",
    highlight: "Direct access & agile updates"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    number: "01",
    title: "Discover",
    shortDesc: "Understand the client's business and goals.",
    details: "We conduct an intensive onboarding session to uncover your core offerings, current marketing bottlenecks, customer profiles, and key financial targets.",
    deliverable: "Discovery Summary & Baseline Benchmark"
  },
  {
    step: "02",
    number: "02",
    title: "Analyze",
    shortDesc: "Research the market, audience, and competition.",
    details: "Our analysts perform comprehensive research on search demand, audience pain points, competitor positioning, and untapped market opportunities.",
    deliverable: "Comprehensive Market & Competitor Audit"
  },
  {
    step: "03",
    number: "03",
    title: "Strategize",
    shortDesc: "Create a customized digital marketing strategy.",
    details: "We translate insights into a bespoke marketing roadmap detailing channel allocation, messaging angles, campaign schedules, and resource planning.",
    deliverable: "Tailored Growth Strategy & Action Plan"
  },
  {
    step: "04",
    number: "04",
    title: "Grow",
    shortDesc: "Implement, monitor, and improve the strategy.",
    details: "We launch execution sprints, track analytics dashboards in real time, and systematically optimize campaigns to maximize your return on investment.",
    deliverable: "Campaign Execution & Monthly Performance Reports"
  }
];
