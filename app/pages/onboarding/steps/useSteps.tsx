import { useCallback, useMemo, useState } from "react";
import { FirstStep, SecondStep, Step, ThirdStep } from ".";

type UseStepsOutput = {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  stepScreen: React.ReactElement;
  currentStep: number;
  totalSteps: number;
  percentageCompleted: number;
};

export default function useSteps(): UseStepsOutput {
  const [currentStep, setCurrentStep] = useState(Step.First);

  const totalSteps = 3;
  const percentageCompleted =
    100 - (100 / totalSteps) * (totalSteps - currentStep);

  const stepScreen = useMemo(() => {
    const steps = {
      [Step.First]: <FirstStep />,
      [Step.Second]: <SecondStep />,
      [Step.Third]: <ThirdStep />,
    };

    return steps[currentStep];
  }, [currentStep]);

  const handlePreviousStep = useCallback(() => {
    if (currentStep === Step.First) return;

    setCurrentStep(currentStep - 1);
  }, [currentStep]);

  const handleNextStep = useCallback(() => {
    if (currentStep === Step.Third) return;
    setCurrentStep(currentStep + 1);
  }, [currentStep]);

  return {
    handleNextStep,
    handlePreviousStep,
    stepScreen,
    currentStep,
    totalSteps,
    percentageCompleted,
  };
}
