/**
 * Single source of truth for portfolio content.
 * Edit the values here — every component reads from this file.
 */

export const site = {
  name: "Abdul",
  handle: "abdul27c",
  role: "Cloud Security & DevSecOps Engineer",
  // Hero headline; `accent` gets the green→cyan gradient.
  headline: { lead: "Securing AI Systems &", accent: "Cloud Infrastructure", tail: "at Scale" },
  tagline:
    "DevSecOps Engineer & Cloud Security Practitioner building production-grade runtime guardrails, automated compliance pipelines, and secure cloud architectures.",
  focus: ["Python", "AWS", "Terraform", "Cloud Security", "CI/CD", "Runtime Security"],
  links: {
    github: "https://github.com/abdul27c",
    linkedin: "https://www.linkedin.com/in/abdallahhatem?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    email: "abdulmwork@outlook.com",
  },
  /**
   * Video slots. Each accepts a YouTube video ID ("dQw4w9WgXcQ") or any YouTube
   * URL (youtu.be/…, youtube.com/watch?v=…, /embed/…, /shorts/…).
   * Leave as an empty string to show the "Coming soon" placeholder — the layout
   * stays identical either way.
   */
  videos: {
    intro: "",
    agentProxyWalkthrough: "",
  },
} as const;

export type Project = {
  id: string;
  index: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repo?: string;
  /** Inline video embed (flagship card) — a key of `site.videos`. */
  videoKey?: keyof typeof site.videos;
  /** External walkthrough link, shown as a "Walkthrough" button next to "Source". */
  walkthroughUrl?: string;
};

export const projects: Project[] = [
  {
    id: "ai-agent-security-proxy",
    index: "01",
    title: "AI Agent Security Proxy",
    summary:
      "Runtime middleware gateway that sits between AI agents and LLM providers, enforcing OWASP Top 10 for LLM guardrails on every request and response.",
    highlights: [
      "Prompt-injection and jailbreak detection before requests reach the model",
      "Sensitive-data redaction and output validation with strict Pydantic schemas",
      "Containerised with Docker and shipped through a CI/CD pipeline with security gates",
    ],
    stack: ["FastAPI", "Pydantic", "Docker", "GitHub Actions", "OWASP LLM"],
    repo: "https://github.com/abdul27c",
    videoKey: "agentProxyWalkthrough",
  },
  {
    id: "infraguard",
    index: "02",
    title: "InfraGuard",
    summary:
      "Automated Terraform and AWS security policy scanner that catches IAM and S3 misconfigurations before they reach production.",
    highlights: [
      "Flags wildcard IAM actions, over-privileged roles and missing MFA conditions",
      "Detects public S3 buckets, disabled encryption and missing access logging",
      "Runs as a pre-merge CI check with machine-readable JSON findings",
    ],
    stack: ["Python", "Terraform", "AWS IAM", "S3", "CI/CD"],
    repo: "https://github.com/abdul27c",
  },
  {
    id: "cloud-cost-intelligence",
    index: "03",
    title: "Cloud Cost Intelligence",
    summary:
      "Automated cost-anomaly detection and resource optimisation that surfaces wasteful spend and idle infrastructure.",
    highlights: [
      "Baselines daily spend and alerts on statistically significant anomalies",
      "Identifies idle EC2, unattached EBS volumes and orphaned snapshots",
      "Produces prioritised right-sizing recommendations with estimated savings",
    ],
    stack: ["Python", "AWS Cost Explorer", "boto3", "CloudWatch"],
    repo: "https://github.com/abdul27c",
    walkthroughUrl: "https://youtu.be/Um2ZfHNV4kQ?feature=shared",
  },
  {
    id: "ai-token-optimizer",
    index: "04",
    title: "AI Token Optimizer",
    summary:
      "Token usage tracker and cost-reduction proxy that gives teams visibility and control over LLM spend.",
    highlights: [
      "Per-request token accounting broken down by model, user and route",
      "Response caching and prompt compaction to cut redundant token usage",
      "Budget thresholds with alerting before costs run away",
    ],
    stack: ["Python", "FastAPI", "Redis", "REST APIs"],
    repo: "https://github.com/abdul27c",
  },
];

export const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    command: "cloud --list",
    skills: ["AWS", "Terraform", "Docker", "CI/CD Pipelines", "GitHub Actions", "Infrastructure as Code"],
  },
  {
    title: "Languages & Scripting",
    command: "lang --list",
    skills: ["Python", "Bash", "JSON", "REST APIs", "FastAPI", "Pydantic"],
  },
  {
    title: "Security & Compliance",
    command: "sec --list",
    skills: ["OWASP Top 10", "OWASP LLM Top 10", "IAM Least Privilege", "Log Parsing", "Threat Modeling", "Runtime Security"],
  },
] as const;
