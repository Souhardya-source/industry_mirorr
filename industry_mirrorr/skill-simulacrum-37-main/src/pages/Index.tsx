import { useState } from "react";
import RoleSelector from "@/components/RoleSelector";
import ScenarioDisplay from "@/components/ScenarioDisplay";
import ResponseInput from "@/components/ResponseInput";
import EvaluationResult from "@/components/EvaluationResult";

type Screen = "home" | "scenario" | "result";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("home");
  const [, setRole] = useState<string | null>(null);

  const handleStart = (selectedRole: string) => {
    setRole(selectedRole);
    setScreen("scenario");
  };

  const handleSubmit = (_response: string) => {
    setScreen("result");
  };

  const handleRestart = () => {
    setRole(null);
    setScreen("home");
  };

  if (screen === "home") {
    return <RoleSelector onStart={handleStart} />;
  }

  if (screen === "scenario") {
    return (
      <>
        <ScenarioDisplay onContinue={() => setScreen("home")} />
        <ResponseInput onSubmit={handleSubmit} />
      </>
    );
  }

  return <EvaluationResult onRestart={handleRestart} />;
};

export default Index;
