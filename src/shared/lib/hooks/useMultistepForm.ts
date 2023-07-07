import { useState } from 'react';

export const useMultistepForm = (totalSteps: number) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const back = () => {
    setCurrentStepIndex((prevStep) => Math.max(prevStep - 1, 0));
  };

  const go = () => {
    setCurrentStepIndex((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const goToStep = (index: number) => {
    setCurrentStepIndex(index);
  };

  return { currentStepIndex, back, go, goToStep };
};
