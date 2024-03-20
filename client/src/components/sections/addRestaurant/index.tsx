"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { FirstStep } from "./FirstStep";
import stepContext from "./StepContext";
import { useContext } from "react";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function AddRestaurant() {
  const [activeStep, setActiveStep] = React.useState(0);

  const { handleBack, handleNext } = useContext(stepContext);
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
        {activeStep === 0 && <FirstStep />}
      </Stepper>
    </Box>
  );
}
