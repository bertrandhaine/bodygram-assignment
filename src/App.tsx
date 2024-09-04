import React from "react";
import { AppContainer, Button, Title, TrafficLightGroup } from "./App.styled";
import TrafficLightFibonacci from "./components/TrafficLight";
import { EVENT_START_CALCULATIONS } from "./constants";

const App: React.FC = () => {
  const initialSteps = [0, 10, 20, 30];

  const handleStartAll = () => {
    // Emit a custom event to start all lights
    const event = new CustomEvent(EVENT_START_CALCULATIONS);
    window.dispatchEvent(event);
  };
  return (
    <AppContainer>
      <Title>Fibonacci Traffic Light</Title>
      <TrafficLightGroup>
        {initialSteps.map((initialStep, index) => (
          <TrafficLightFibonacci key={index} initialStep={initialStep} />
        ))}
      </TrafficLightGroup>
      <Button onClick={handleStartAll}>Start All Calculations</Button>
    </AppContainer>
  );
};

export default App;
