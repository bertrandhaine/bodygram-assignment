import React, { useEffect, useState, useRef, useCallback } from "react";
import TrafficLight from "./ui/TrafficLight";
import { useStartCalculations, useFibonacciGenerator } from "./hooks";
import { TrafficLightState } from "./types";

export const TrafficLightFibonacci: React.FC<{ initialStep: number }> = ({
  initialStep,
}) => {
  const [state, setState] = useState<TrafficLightState>(
    TrafficLightState.Stopped
  );
  const [fibNumber, setFibNumber] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(initialStep);
  const fibGen = useRef<Generator<number, void, unknown>>();

  const startCalculations = useCallback(() => {
    setState(TrafficLightState.Calculating);
  }, []);

  useStartCalculations(startCalculations);

  // Initialize the generator when `initialStep` changes
  useEffect(() => {
    fibGen.current = useFibonacciGenerator(initialStep);
    setCurrentStep(initialStep);
    setFibNumber(0);
  }, [initialStep]);

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;

    if (
      state === TrafficLightState.Calculating &&
      currentStep < initialStep + 10
    ) {
      interval = setTimeout(() => {
        const result = fibGen.current?.next().value as number;
        setFibNumber(result);
        setState(TrafficLightState.Complete);

        setTimeout(() => {
          if (currentStep < initialStep + 9) {
            setState(TrafficLightState.Calculating);
            setCurrentStep((prev) => prev + 1);
          } else {
            // Reset the state, generator, values after 10 steps are completed
            setState(TrafficLightState.Stopped);
            setFibNumber(0);
            setCurrentStep(initialStep);
            // Reset the generator after 10 steps are completed
            fibGen.current = useFibonacciGenerator(initialStep);
          }
        }, 1000);
      }, 1000);
    }

    return () => clearTimeout(interval);
  }, [state, currentStep, initialStep]);

  return (
    <TrafficLight initialStep={initialStep} state={state} number={fibNumber} />
  );
};

export default TrafficLightFibonacci;
