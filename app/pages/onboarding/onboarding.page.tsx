import React from "react";

import { Container, ProgressIndicator } from "~/shared/components";

import { Link } from "@remix-run/react";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/solid";
import { Step, useSteps } from "./steps";
import { Color } from "~/shared/components/ProgressIndicator/ProgressIndicator.props";

const link =
  "https://dapper-shade-446.notion.site/Hansa-Take-Home-ddcb96a0f4f74f8faf3c7daa105f58f4";

const OnboardingPage: React.FC = () => {
  const {
    handleNextStep,
    handlePreviousStep,
    stepScreen,
    currentStep,
    totalSteps,
    percentageCompleted,
  } = useSteps();

  const isLastStep = currentStep === totalSteps;

  return (
    <div>
      <Link to={link} className="flex mx-4 mt-4 gap-2">
        <ArrowUturnLeftIcon width={20} className="fill-blue" />
        <p className="text-blue text-sm">Exit</p>
      </Link>

      <Container>
        <div className="flex gap-2 mb-4  ">
          <ProgressIndicator
            progress={percentageCompleted}
            color={isLastStep ? Color.green : Color.blue}
          />

          <p className="text-wrap  font-semibold text-2xl">
            Understanding what funding is right for your business
          </p>

          <p className="mb-auto mt-auto justify-self-center text-gray-300 ">
            {currentStep}/{totalSteps}
          </p>
        </div>
        {stepScreen}
      </Container>

      <div className="w-full md:w-[50vw] md:m-auto flex fixed pointer md:relative bg-white md:bg-transparent  justify-center gap-2 items-center  bottom-0  border-t-1 h-16 md:border-none">
        {currentStep === Step.First ? (
          <button
            type="submit"
            onClick={handleNextStep}
            className="flex items-center justify-center bg-brand-blue gap-2 p-2 rounded-xl w-5/6 h-10 border-1 text-sm text-white "
          >
            <p className="leading-[1rem]">Continue</p>
          </button>
        ) : (
          <>
            <button
              onClick={handlePreviousStep}
              className="flex items-center gap-2 p-2 bg-white rounded-xl w-1/5 h-10 border-1 text-sm text-gray-700 "
            >
              <ChevronLeftIcon width={16} />
              <p className="leading-[1rem]">Back</p>
            </button>

            <button
              type="submit"
              onClick={handleNextStep}
              className="flex items-center justify-center bg-brand-blue gap-2 p-2 rounded-xl w-4/6 h-10 border-1 text-sm text-white "
            >
              <p className="leading-[1rem]">{isLastStep ? "Finish" : "Next"}</p>
              <ChevronRightIcon width={16} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default OnboardingPage;
