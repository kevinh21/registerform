import { ReactElement, useState } from "react";

//multi step hook passes in any kind of react element
export function UseMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setcurrentStepIndex] = useState(0);

  function next() {
    setcurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setcurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setcurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
}
