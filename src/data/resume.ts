export const profile = {
  name: "Palak Saxena",
  firstName: "Palak",
  lastName: "Saxena",
  title: "ITSM Lead",
  taglines: [
    "IT Service Management",
    "Infrastructure Support",
    "ServiceNow",
    "ITIL 4",
  ],
  location: "Bhopal, Madhya Pradesh, India",
  email: "palaksaxena132@gmail.com",
  phone: "+91 9302720446",
  phoneHref: "+919302720446",
  linkedin: "https://www.linkedin.com/in/palak-saxena-27d10m",
  linkedinLabel: "linkedin.com/in/palak-saxena-27d10m",
  resumeFile: "/Palak_Saxena_Resume.pdf",
  photo: "/palak.jpg",
  summary:
    "ITIL 4 certified ITSM and Infrastructure Support professional with nearly 1 year of experience at Cognizant, currently serving as ITSM Lead for Victory Capital Management. Hands-on with ServiceNow for Incident and Change Management and IT service operations, with prior infrastructure experience in Active Directory (AD DS), Windows Server, backup, and storage. Technical foundation in Linux, TCP/IP networking, and VMware; working knowledge of AWS and Generative AI.",
  shortPitch:
    "I keep enterprise IT services running — owning the incident and change lifecycle in ServiceNow, and the Windows, Linux and infrastructure layers underneath them.",
};

export const stats = [
  { value: "ITIL 4", label: "Certified Practitioner" },
  { value: "3", label: "Client Engagements" },
  { value: "8.68", label: "B.Tech CGPA / 10" },
  { value: "500+", label: "DSA Problems Solved" },
];

export type SkillGroup = {
  category: string;
  icon: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "ITSM (ITIL 4)",
    icon: "workflow",
    items: [
      "Incident Management",
      "Change Management (Change Enablement)",
      "IT Service Operations",
      "ServiceNow ITSM",
    ],
  },
  {
    category: "Windows & Directory Services",
    icon: "windows",
    items: [
      "Windows Server 2022",
      "Active Directory Domain Services (AD DS)",
      "Group Policy (GPO)",
    ],
  },
  {
    category: "Linux",
    icon: "terminal",
    items: [
      "User & group management",
      "File permissions",
      "Process management",
      "Package management",
    ],
  },
  {
    category: "Backup & Storage",
    icon: "database",
    items: [
      "Backup job management & monitoring",
      "Data protection",
      "Storage operations support",
    ],
  },
  {
    category: "Networking",
    icon: "network",
    items: [
      "TCP/IP",
      "OSI Model",
      "DNS",
      "DHCP",
      "IPv4 Addressing",
      "Subnetting",
      "Common Ports & Protocols",
    ],
  },
  {
    category: "Virtualization & Cloud",
    icon: "cloud",
    items: [
      "VMware (concepts)",
      "Virtual Machine creation",
      "Snapshot management",
      "AWS",
    ],
  },
  {
    category: "Generative AI",
    icon: "sparkles",
    items: [
      "Claude",
      "Gemini",
      "Generative AI",
      "AI-assisted productivity & development tools",
    ],
  },
  {
    category: "Programming & Database",
    icon: "code",
    items: ["Java", "JavaScript", "MySQL"],
  },
];

export type Role = {
  client: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  highlights: string[];
  tags: string[];
};

export const company = {
  name: "Cognizant Technology Solutions",
  period: "Dec 2025 – Present",
  track: "Analyst Trainee → ITSM Lead",
};

export const roles: Role[] = [
  {
    client: "Victory Capital Management (VCM)",
    role: "ITSM Lead",
    location: "Mumbai",
    period: "Jun 2026 – Present",
    current: true,
    highlights: [
      "Manage the end-to-end incident lifecycle in ServiceNow, from logging and prioritization to resolution and closure.",
      "Coordinate change requests through the ServiceNow Change Management workflow, from review to implementation.",
      "Oversee day-to-day ITSM operations, ensuring accurate ticket records and adherence to ITIL 4 processes.",
      "Coordinate with assignment groups and stakeholders to drive timely resolution and communicate ticket status.",
    ],
    tags: ["ServiceNow", "Incident Management", "Change Enablement", "ITIL 4"],
  },
  {
    client: "ULTA",
    role: "Infrastructure Support",
    location: "Chennai",
    period: "Mar 2026 – May 2026",
    current: false,
    highlights: [
      "Performed Active Directory (AD DS) administration tasks within the client's Windows Server environment.",
      "Supported Windows Server infrastructure, troubleshooting and resolving server-related issues and incidents.",
      "Managed and monitored backup jobs, reviewing job status to support data protection and recoverability.",
      "Supported enterprise storage management activities as part of day-to-day infrastructure operations.",
      "Performed infrastructure operations and troubleshooting, coordinating with relevant technical teams to resolve issues.",
    ],
    tags: ["Active Directory", "Windows Server", "Backup", "Storage"],
  },
  {
    client: "Enterprise Infrastructure Training",
    role: "Analyst Trainee",
    location: "Chennai",
    period: "Dec 2025 – Mar 2026",
    current: false,
    highlights: [
      "Performed Linux administration: user and group management, file permissions, processes, and packages.",
      "Worked with Windows Server 2022, Active Directory basics, Group Policy, DNS, DHCP, IP addressing, and subnetting.",
      "Created virtual machines, managed snapshots, and resolved scenario-based infrastructure troubleshooting exercises.",
    ],
    tags: ["Linux", "Windows Server 2022", "Networking", "VMware"],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date?: string;
};

export const certifications: Certification[] = [
  { name: "ITIL 4", issuer: "Certified" },
  { name: "Claude Certified Associate", issuer: "Foundation" },
  { name: "Claude Developer Associate", issuer: "Certified" },
  { name: "Build with Gemini", issuer: "Badge" },
  { name: "Java Programming Certification", issuer: "Certification", date: "Feb 2024" },
  {
    name: "Agile Methodology",
    issuer: "Cognizant Job Simulation (Forage)",
    date: "May 2023",
  },
];

export type Education = {
  degree: string;
  institute: string;
  year: string;
  score: string;
};

export const education: Education[] = [
  {
    degree: "Bachelor of Technology (B.Tech), Computer Science and Engineering",
    institute: "Technocrats Institute of Technology, Bhopal",
    year: "2025",
    score: "CGPA 8.68 / 10",
  },
  {
    degree: "Class XII",
    institute: "Elite Higher Secondary School",
    year: "",
    score: "83.8%",
  },
  {
    degree: "Class X",
    institute: "Elite Higher Secondary School",
    year: "",
    score: "84.6%",
  },
];

export const achievements = [
  {
    title: "Institute Topper Award (2022)",
    detail: "Awarded for securing the highest CGPA in the department.",
  },
  {
    title: "500+ DSA Problems on CodeChef",
    detail:
      "Earned the Gold Badge for participating in 50+ competitive coding contests.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
