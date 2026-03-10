import { useEffect, useState } from "react";
import { MOCK_EVALUATION } from "@/data/mockData";

interface EvaluationResultProps {
  onRestart: () => void;
}

const EvaluationResult = ({ onRestart }: EvaluationResultProps) => {
  const [loading, setLoading] = useState(true);
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      let current = 0;
      const interval = setInterval(() => {
        current += 2;
        if (current >= MOCK_EVALUATION.overallScore) {
          current = MOCK_EVALUATION.overallScore;
          clearInterval(interval);
        }
        setAnimatedScore(current);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border-4 border-primary/30 border-t-primary animate-spin-slow" />
          <p className="text-xl font-semibold text-foreground mb-2 animate-typing">
            Analyzing your performance...
          </p>
          <p className="text-sm text-muted-foreground">Evaluating technical accuracy, problem solving & communication</p>
        </div>
      </div>
    );
  }

  const { skills, strength, weakness, improvement, badge } = MOCK_EVALUATION;
  const isReady = badge === "industry-ready";

  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto">
      <div className="text-center mb-10 animate-fade-in">
        <h2 className="text-2xl font-bold text-foreground mb-2">Evaluation Complete</h2>
        <p className="text-muted-foreground">Here's how you performed in this simulation</p>
      </div>

      {/* Score Circle */}
      <div className="flex justify-center mb-10 animate-slide-up">
        <div className="relative w-44 h-44">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
            <circle
              cx="60" cy="60" r="52" fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 52}`}
              strokeDashoffset={`${2 * Math.PI * 52 * (1 - animatedScore / 100)}`}
              className="transition-all duration-300"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-foreground">{animatedScore}</span>
            <span className="text-xs text-muted-foreground mt-1">Industry Readiness</span>
          </div>
        </div>
      </div>

      {/* Skills Breakdown */}
      <div className="grid gap-3 mb-8 max-w-md mx-auto animate-slide-up" style={{ animationDelay: "0.15s" }}>
        {skills.map((skill) => (
          <div key={skill.name} className="glass-card p-4 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">{skill.name}</span>
            <div className="flex items-center gap-3">
              <div className="w-32 h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700"
                  style={{ width: `${(skill.score / skill.max) * 100}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-foreground w-14 text-right">
                {skill.score}/{skill.max}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Cards */}
      <div className="grid gap-4 sm:grid-cols-3 mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <div className="glass-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center text-success text-lg">✓</span>
            <h4 className="font-semibold text-foreground text-sm">Strength</h4>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{strength}</p>
        </div>
        <div className="glass-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center text-destructive text-lg">✗</span>
            <h4 className="font-semibold text-foreground text-sm">Weakness</h4>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{weakness}</p>
        </div>
        <div className="glass-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-lg">↑</span>
            <h4 className="font-semibold text-foreground text-sm">Improvement</h4>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{improvement}</p>
        </div>
      </div>

      {/* Badge + Restart */}
      <div className="text-center animate-slide-up" style={{ animationDelay: "0.45s" }}>
        <span
          className={`inline-block px-6 py-2.5 rounded-full text-sm font-bold mb-8 ${
            isReady
              ? "bg-success/10 text-success border border-success/20"
              : "bg-destructive/10 text-destructive border border-destructive/20"
          }`}
        >
          {isReady ? "🏆 Industry Ready" : "⚠️ Needs Improvement"}
        </span>

        <div>
          <button
            onClick={onRestart}
            className="px-8 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all duration-300"
          >
            Try Another Simulation
          </button>
        </div>
      </div>
    </div>
  );
};

export default EvaluationResult;
