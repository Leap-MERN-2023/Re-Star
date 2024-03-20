import { PropsWithChildren, createContext, useState } from "react";

const StepContext = createContext({});

import React from "react";

const StepProvider = ({ children }: PropsWithChildren) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  return (
    <StepContext.Provider value={{ handleBack, handleNext }}>
      {children}
    </StepContext.Provider>
  );
};

export default StepProvider;
