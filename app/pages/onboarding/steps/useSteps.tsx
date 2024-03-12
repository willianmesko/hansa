import { useCallback, useMemo, useState } from "react";
import { FirstStep, SecondStep, Step, ThirdStep } from ".";
import { useLoaderData } from "@remix-run/react";
import {
  Color,
  ProgressIndicatorProps,
} from "~/shared/components/ProgressIndicator/ProgressIndicator.props";

type ProgressIndicatorPropsResponse = Required<ProgressIndicatorProps>;

type UseStepsOutput = {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  stepScreen: React.ReactElement;
  currentStep: number;
  totalSteps: number;
  percentageCompleted: number;
  progressIndicatorColor: keyof typeof Color;
  isLastStep: boolean;
};

export default function useSteps(): UseStepsOutput {
  const [currentStep, setCurrentStep] = useState(Step.First);

  const {
    progressIndicatorProps: { progress, color },
  } = useLoaderData<{
    progressIndicatorProps: ProgressIndicatorPropsResponse;
  }>();

  const totalSteps = 3;
  const percentageCompleted =
    100 - (100 / totalSteps) * (totalSteps - currentStep) ?? progress;

  const isLastStep = currentStep === totalSteps;

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
    progressIndicatorColor: isLastStep ? Color.green : color,
    isLastStep,
  };
}
