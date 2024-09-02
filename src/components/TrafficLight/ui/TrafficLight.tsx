import React from "react";
import { LightContainer, Light } from "./TrafficLight.styled";
import { TrafficLightState } from "../types";

interface TrafficLightProps {
  state: TrafficLightState;
  initialStep: number;
  number?: number; // Optional number to display when complete
}

const TrafficLight: React.FC<TrafficLightProps> = ({
  state,
  number,
  initialStep,
}) => {
  const redLightColor = state === TrafficLightState.Stopped ? "red" : "gray";
  const yellowLightColor =
    state === TrafficLightState.Calculating ? "yellow" : "gray";
  const greenLightColor =
    state === TrafficLightState.Complete ? "green" : "gray";

  return (
    <LightContainer>
      <Light color={redLightColor}>
        {state === TrafficLightState.Stopped && <span>{initialStep}</span>}
      </Light>
      <Light color={yellowLightColor} />
      <Light color={greenLightColor}>
        {state === TrafficLightState.Complete && <span>{number}</span>}
      </Light>
    </LightContainer>
  );
};

export default React.memo(TrafficLight);
