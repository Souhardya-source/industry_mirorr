export const MOCK_SCENARIO = {
  role: "Cloud Infrastructure Engineer",
  company: "NexGen Solutions",
  email: {
    from: "sarah.chen@nexgen.io",
    to: "you@nexgen.io",
    subject: "URGENT: Production Database Performance Degradation",
    timestamp: "Today, 9:42 AM",
    body: `Hi,

We've been experiencing severe performance degradation on our production PostgreSQL cluster since 6:00 AM this morning. Response times have increased by 400% and several client-facing APIs are timing out.

The monitoring dashboard shows CPU utilization at 94% on the primary node, and our connection pool is maxed out at 500 connections. We suspect it may be related to last night's deployment (v2.4.1) which included new analytics queries.

This is impacting our enterprise clients and we need a resolution within the next 2 hours. Please investigate and provide your action plan.

Best,
Sarah Chen
VP of Engineering`
  },
  systemLogs: [
    "[06:01:23] WARN  db-primary: Connection pool utilization at 85%",
    "[06:15:47] ERROR db-primary: Query timeout exceeded (30s) - analytics_daily_aggregate",
    "[06:22:11] WARN  api-gateway: Response time p99 > 5000ms",
    "[06:34:56] ERROR db-primary: Connection pool exhausted (500/500)",
    "[06:45:02] CRIT  lb-prod: Health check failures on api-node-03, api-node-07",
    "[07:01:18] ERROR db-replica-01: Replication lag > 120s",
    "[07:15:33] WARN  cache-layer: Cache miss rate increased to 67%",
    "[07:30:44] ERROR db-primary: OOM killer invoked - terminated process analytics_worker",
    "[08:12:09] CRIT  monitoring: CPU utilization at 94% on db-primary",
    "[09:30:15] ERROR api-gateway: 23 endpoints returning 504 Gateway Timeout",
  ],
  problemStatement:
    "The production PostgreSQL cluster is experiencing critical performance degradation affecting enterprise clients. CPU is at 94%, connection pool is exhausted (500/500), and replication lag exceeds 120 seconds. The issue correlates with deployment v2.4.1 which introduced new analytics queries. Propose a comprehensive incident response and resolution plan."
};

export const MOCK_EVALUATION = {
  overallScore: 78,
  skills: [
    { name: "Technical Accuracy", score: 32, max: 40 },
    { name: "Problem Solving", score: 24, max: 30 },
    { name: "Communication", score: 22, max: 30 },
  ],
  strength:
    "Strong understanding of database performance diagnostics. Correctly identified connection pooling and query optimization as key areas. Good incident communication structure.",
  weakness:
    "Missing consideration of rollback strategy for the recent deployment. Did not address replication lag recovery or cache invalidation strategy.",
  improvement:
    "Practice structured incident response frameworks (e.g., ICS). Include rollback procedures and post-incident review planning in your responses. Consider monitoring and alerting improvements to prevent recurrence.",
  badge: "industry-ready" as const,
};

export const ROLES = [
  { id: "cloud-engineer", label: "Cloud Infrastructure Engineer", icon: "☁️" },
  { id: "data-analyst", label: "Data Analyst", icon: "📊" },
  { id: "security-analyst", label: "Cybersecurity Analyst", icon: "🔒" },
  { id: "devops", label: "DevOps Engineer", icon: "⚙️" },
];
