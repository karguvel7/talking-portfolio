export const PROFILE = {
  name: "Karguvel K",
  fullName: "Karguvel Kalisekar",
  role: "AI Architect",
  employer: "Innoart Technologies Private Limited",
  location: "Chennai, Tamil Nadu, India",
  email: "karguvel7@gmail.com",
  phone: "+91 8754112397",
  phoneTel: "+918754112397",
  github: "https://github.com/karguvel7",
  siteUrl: "https://karguvel7.github.io",
  initials: "KK",
  idNumber: "IA-2026-09",
  department: "Engineering",
  summary:
    "Experienced software engineer focused on front-end and back-end development of a Digital Transformation Platform, plus an Incident Management System and Social Media Hub for a top educational organization. Strong micro front-end and microservices experience, REST APIs documented with OpenAPI, OAuth 2.0 authentication, 3D rendering with Three.js, and Agile delivery.",
  aboutBack:
    "I design and ship enterprise platforms end to end — from Angular and React clients to Node.js services, documented APIs, and cloud deployments. Recent work centers on AI workflows, multi-agent systems, and LLM-powered product experiences.",
  quote:
    "Own full-stack delivery on Angular and React with Node.js SaaS and enterprise platforms — APIs, microservices, and cloud.",
  tenureNote: "9+ years at Innoart Technologies since February 2017.",
} as const;

export const NAV = [
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "domains", label: "Domains", href: "#domains" },
  { id: "work", label: "Work", href: "#work" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

/** Industry domains from resume / enterprise delivery scope */
export const DOMAINS = [
  {
    id: "edutech",
    label: "EduTech",
    blurb:
      "Incident Management System and Social Media Hub for a top educational organization.",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    blurb: "Enterprise programs at Innoart Technologies — APIs, microservices, and cloud.",
  },
  {
    id: "fintech",
    label: "FinTech",
    blurb: "OAuth 2.0, OpenAPI-documented services, AWS and Azure deployments.",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    blurb: "Digital Transformation Platform delivery with micro frontends and Agile teams.",
  },
  {
    id: "hcm",
    label: "HCM",
    blurb: "Workforce and HR-adjacent modules within enterprise SaaS platforms.",
  },
  {
    id: "payments",
    label: "Digital payments",
    blurb: "Payment flows within full-stack Angular/React and Node.js platforms.",
  },
  {
    id: "marketplaces",
    label: "Marketplaces",
    blurb: "Multi-module platforms with React clients and documented REST APIs.",
  },
] as const;

export const INNOART_ROLES = [
  { title: "Trainee Software Engineer", start: "Feb 2017", end: "Feb 2018" },
  { title: "Software Engineer", start: "Feb 2018", end: "Feb 2020" },
  { title: "Senior Software Engineer", start: "Feb 2020", end: "Feb 2022" },
  { title: "Lead Software Engineering", start: "Feb 2022", end: "Sep 2026" },
  { title: "AI Architect", start: "Sep 2026", end: "Present" },
] as const;

export const TECH_MARQUEE = [
  "Angular",
  "React",
  "Node.js",
  "Python",
  "TypeScript",
  "OpenAPI",
  "OAuth 2.0",
  "Microservices",
  "Micro frontends",
  "Three.js",
  "LLMs",
  "AI workflows",
  "MongoDB",
  "Neo4J",
  "MySQL",
  "ClickHouse",
  "AWS",
  "Azure",
  "Docker",
  "GitHub Actions",
] as const;

export type SkillFamily =
  | "Frontend"
  | "Backend"
  | "AI"
  | "Data"
  | "Cloud"
  | "Mobile"
  | "Practices";

export type SkillEntry = {
  atomic: number;
  symbol: string;
  name: string;
  family: SkillFamily;
  slug: string;
};

const skillRows: { family: SkillFamily; items: string[] }[] = [
  {
    family: "Frontend",
    items: ["Angular", "React", "Three.js", "Micro frontends"],
  },
  {
    family: "Backend",
    items: [
      "Node.js",
      "Python",
      "MEAN stack",
      "REST APIs",
      "OpenAPI",
      "OAuth 2.0",
      "Microservices",
    ],
  },
  {
    family: "AI",
    items: ["LLMs", "AI workflows", "Multi-agent systems"],
  },
  {
    family: "Data",
    items: ["MongoDB", "Neo4J", "MySQL", "ClickHouse"],
  },
  { family: "Cloud", items: ["AWS", "Azure"] },
  {
    family: "Mobile",
    items: ["Android", "Xamarin Forms", "Cordova"],
  },
  {
    family: "Practices",
    items: ["Agile", "Leading development teams", "GitHub"],
  },
];

function symbolFor(name: string): string {
  const map: Record<string, string> = {
    Angular: "Ng",
    React: "Re",
    "Three.js": "3J",
    "Micro frontends": "Mf",
    "Node.js": "Nd",
    Python: "Py",
    "MEAN stack": "Mn",
    "REST APIs": "Rs",
    OpenAPI: "Oa",
    "OAuth 2.0": "Ou",
    Microservices: "Ms",
    LLMs: "Lm",
    "AI workflows": "Aw",
    "Multi-agent systems": "Ma",
    MongoDB: "Mg",
    Neo4J: "Nj",
    MySQL: "My",
    ClickHouse: "Ch",
    AWS: "As",
    Azure: "Az",
    Android: "An",
    "Xamarin Forms": "Xf",
    Cordova: "Co",
    Agile: "Ag",
    "Leading development teams": "Ld",
    GitHub: "Gh",
  };
  return map[name] ?? name.slice(0, 2);
}

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export const SKILL_GROUPS = skillRows;

export const SKILLS: SkillEntry[] = skillRows.flatMap((group, gi) =>
  group.items.map((name, ii) => ({
    atomic: gi * 10 + ii + 1,
    symbol: symbolFor(name),
    name,
    family: group.family,
    slug: slugify(name),
  })),
);

export const HIGHLIGHT_STATS = [
  { id: "tenure", value: 9, suffix: "+", label: "Years at Innoart", detail: "Since Feb 2017" },
  { id: "roles", value: INNOART_ROLES.length, suffix: "", label: "Role progression", detail: "Trainee → AI Architect" },
  { id: "domains", value: DOMAINS.length, suffix: "", label: "Industry domains", detail: "EduTech to marketplaces" },
  { id: "skills", value: SKILLS.length, suffix: "", label: "Stack skills", detail: "Frontend through cloud" },
] as const;

export const EXPERIENCE = [
  {
    kind: "education" as const,
    title: "Master of Computer Applications (MCA)",
    org: "Anna University",
    location: "",
    start: "",
    end: "",
    detail: "",
  },
  {
    kind: "education" as const,
    title: "BSc Computer Science",
    org: "Alagappa University — Syed Hameedha Arts & Science College, Kilakarai",
    location: "",
    start: "2010",
    end: "2013",
    detail: "",
  },
  {
    kind: "work" as const,
    title: "Java apprenticeship",
    org: "JSpiders Training & Development Center",
    location: "Bengaluru",
    start: "Feb 2016",
    end: "Feb 2017",
    detail: "Java course and apprenticeship.",
  },
  {
    kind: "work" as const,
    title: "Trainee Software Engineer",
    org: "Innoart Technologies Private Limited",
    location: "Chennai (remote)",
    start: "Feb 2017",
    end: "Feb 2018",
    detail: "",
  },
  {
    kind: "work" as const,
    title: "Software Engineer",
    org: "Innoart Technologies Private Limited",
    location: "Chennai (remote)",
    start: "Feb 2018",
    end: "Feb 2020",
    detail: "",
  },
  {
    kind: "work" as const,
    title: "Senior Software Engineer",
    org: "Innoart Technologies Private Limited",
    location: "Chennai (remote)",
    start: "Feb 2020",
    end: "Feb 2022",
    detail: "",
  },
  {
    kind: "work" as const,
    title: "Lead Software Engineering",
    org: "Innoart Technologies Private Limited",
    location: "Chennai (remote)",
    start: "Feb 2022",
    end: "Sep 2026",
    detail: "",
  },
  {
    kind: "work" as const,
    title: "AI Architect",
    org: "Innoart Technologies Private Limited",
    location: "Chennai (remote)",
    start: "Sep 2026",
    end: "Present",
    detail:
      "Own full-stack delivery on Angular/React + Node.js SaaS and enterprise platforms (APIs, microservices, cloud).",
  },
] as const;

export const EDUCATION = EXPERIENCE.filter((e) => e.kind === "education");

export type Project = {
  id: string;
  title: string;
  summary: string;
  features: string[];
  tech: string[];
  href?: string;
  uiVariant: "cli" | "platform" | "incident";
};

export const PROJECTS: Project[] = [
  {
    id: "specguard",
    title: "SpecGuard",
    summary:
      "TypeScript OpenAPI 3.0/3.1 breaking-change detector — library, CLI, GitHub Action, and Dockerfile with Vitest coverage.",
    features: [
      "Diffs two OpenAPI documents with client-compatibility rules",
      "CLI with text and JSON reports and configurable fail-on severity",
      "Composite GitHub Action for CI pipelines",
      "MIT licensed; no hosted service required",
    ],
    tech: ["TypeScript", "OpenAPI", "Vitest", "GitHub Actions", "Docker"],
    href: "https://github.com/karguvel7/specguard",
    uiVariant: "cli",
  },
  {
    id: "dtp",
    title: "Digital Transformation Platform",
    summary:
      "Enterprise digital transformation platform — micro frontends and microservices delivered end to end at Innoart Technologies.",
    features: [
      "Angular and React clients with modular micro frontends",
      "Node.js services with REST APIs documented in OpenAPI",
      "OAuth 2.0 secured integrations",
      "Agile delivery with cross-functional teams",
    ],
    tech: ["Angular", "React", "Node.js", "OpenAPI", "OAuth 2.0", "Microservices"],
    uiVariant: "platform",
  },
  {
    id: "ims-smh",
    title: "Incident Management & Social Media Hub",
    summary:
      "Incident Management System and Social Media Hub for a top educational organization — unified operations and communications.",
    features: [
      "Incident workflows for educational operations",
      "Social publishing and monitoring hub",
      "Integrated with enterprise identity and APIs",
      "Built for reliability across distributed teams",
    ],
    tech: ["React", "Node.js", "REST APIs", "MongoDB", "Microservices"],
    uiVariant: "incident",
  },
];
