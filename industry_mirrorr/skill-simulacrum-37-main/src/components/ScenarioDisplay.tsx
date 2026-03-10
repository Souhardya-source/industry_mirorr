import { MOCK_SCENARIO } from "@/data/mockData";

interface ScenarioDisplayProps {
  onContinue: () => void;
}

const ScenarioDisplay = ({ onContinue }: ScenarioDisplayProps) => {
  const { email, systemLogs, problemStatement } = MOCK_SCENARIO;

  return (
    <div className="min-h-screen px-4 py-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <button onClick={onContinue} className="text-muted-foreground hover:text-foreground text-sm mb-4 inline-flex items-center gap-1 transition-colors">
          ← Back
        </button>
        <div className="flex items-center gap-3 mb-1">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
            LIVE SCENARIO
          </span>
          <span className="text-muted-foreground text-sm">{MOCK_SCENARIO.role}</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground mt-2">{MOCK_SCENARIO.company} — Incident Response</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Client Email */}
        <div className="email-box p-0 animate-slide-up lg:col-span-2" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border">
            <div className="w-2 h-2 rounded-full bg-destructive" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Client Email</span>
          </div>
          <div className="p-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1 text-sm">
              <span className="font-semibold text-foreground">{email.subject}</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-4">
              <span>From: <span className="text-foreground">{email.from}</span></span>
              <span>To: <span className="text-foreground">{email.to}</span></span>
              <span>{email.timestamp}</span>
            </div>
            <p className="text-sm text-secondary-foreground whitespace-pre-line leading-relaxed">{email.body}</p>
          </div>
        </div>

        {/* System Logs */}
        <div className="terminal-box p-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: "hsl(var(--terminal-border))" }}>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-warning/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-success/80" />
            </div>
            <span className="text-xs text-muted-foreground ml-2">system_logs.out</span>
          </div>
          <div className="p-4 space-y-1 max-h-72 overflow-y-auto">
            {systemLogs.map((log, i) => (
              <div
                key={i}
                className={`text-xs leading-relaxed ${
                  log.includes("CRIT")
                    ? "text-destructive"
                    : log.includes("ERROR")
                    ? "text-warning"
                    : "text-success"
                }`}
                style={{ color: log.includes("CRIT") ? undefined : log.includes("ERROR") ? undefined : `hsl(var(--terminal-text))` }}
              >
                {log.includes("CRIT") && <span className="text-destructive">{log}</span>}
                {log.includes("ERROR") && !log.includes("CRIT") && <span className="text-warning">{log}</span>}
                {log.includes("WARN") && <span style={{ color: `hsl(var(--terminal-text))` }}>{log}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Problem Statement */}
        <div className="glass-card p-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">⚡ Problem Statement</span>
          </div>
          <div className="p-5">
            <p className="text-sm text-secondary-foreground leading-relaxed">{problemStatement}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScenarioDisplay;
