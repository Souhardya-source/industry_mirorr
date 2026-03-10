import { useState } from "react";
import { ROLES } from "@/data/mockData";

interface RoleSelectorProps {
  onStart: (role: string) => void;
}

const RoleSelector = ({ onStart }: RoleSelectorProps) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selected = ROLES.find((r) => r.id === selectedRole);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center animate-fade-in">
        {/* Logo / Brand Mark */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 mb-6 animate-pulse-glow">
            <span className="text-4xl">🪞</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4 text-foreground">
          Industry <span className="text-primary">Mirror</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-lg mx-auto">
          AI-Powered Industry Skill Simulation Platform
        </p>

        {/* Role Dropdown */}
        <div className="relative inline-block w-full max-w-sm mb-8">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-xl bg-secondary border border-border text-foreground hover:border-primary/50 transition-all duration-300"
          >
            <span className={selected ? "text-foreground" : "text-muted-foreground"}>
              {selected ? `${selected.icon} ${selected.label}` : "Select your role..."}
            </span>
            <svg
              className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute z-10 mt-2 w-full rounded-xl bg-card border border-border shadow-xl animate-fade-in overflow-hidden">
              {ROLES.map((role) => (
                <button
                  key={role.id}
                  onClick={() => {
                    setSelectedRole(role.id);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3.5 flex items-center gap-3 transition-colors duration-150 ${
                    selectedRole === role.id
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <span className="text-xl">{role.icon}</span>
                  <span className="font-medium">{role.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Start Button */}
        <div>
          <button
            onClick={() => selectedRole && onStart(selectedRole)}
            disabled={!selectedRole}
            className="px-10 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-none"
          >
            Start Simulation →
          </button>
        </div>

        <p className="mt-16 text-sm text-muted-foreground">
          Practice real-world scenarios. Get AI-powered feedback.
        </p>
      </div>
    </div>
  );
};

export default RoleSelector;
