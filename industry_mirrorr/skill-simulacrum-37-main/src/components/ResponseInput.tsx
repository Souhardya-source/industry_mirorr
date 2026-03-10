import { useState } from "react";

interface ResponseInputProps {
  onSubmit: (response: string) => void;
}

const ResponseInput = ({ onSubmit }: ResponseInputProps) => {
  const [response, setResponse] = useState("");

  return (
    <div className="max-w-5xl mx-auto px-4 pb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
      <div className="glass-card p-6 mt-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">Your Response</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Write your incident response and resolution plan below.
        </p>
        <textarea
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          rows={8}
          placeholder="Write your solution..."
          className="w-full rounded-lg bg-input border border-border p-4 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
        />
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-muted-foreground">{response.length} characters</span>
          <button
            onClick={() => response.trim() && onSubmit(response)}
            disabled={!response.trim()}
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Analyze My Response →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponseInput;
