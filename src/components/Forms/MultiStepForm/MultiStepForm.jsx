import React, { useState } from "react";
import {
  FormContainer,
  StepContainer,
  StepHeader,
  FormInput,
  FormButton,
  ThankYouMessage,
  ErrorMessage,
  ProgressBarContainer,
  ProgressBarFiller,
  ProgressBarStep,
} from "./styles";

const MultiStepForm = () => {
  const totalSteps = 3;
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateStep = () => {
    const { firstName, lastName, email, password } = formData;
    let stepErrors = {};

    if (!firstName || firstName.length < 2 || !isNaN(firstName)) {
      stepErrors.firstName = "First name is required and must be at least 2 characters and not a number";
    }
    if (!lastName || lastName.length < 2 || !isNaN(lastName)) {
      stepErrors.lastName = "Last name is required and must be at least 2 characters and not a number";
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      stepErrors.email = "Email is required and must be a valid email address";
    }
    if (!password || password.length < 6) {
      stepErrors.password = "Password is required and must be at least 6 characters";
    }

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return false;
    }
    return true;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep()) {
      if (step < totalSteps) {
        setStep(step + 1);
      } else {
        console.log(formData);
        setStep(totalSteps + 1);
      }
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const progress = (step / totalSteps) * 100;

  return (
    <FormContainer>
      <ProgressBarContainer>
        {["Step 1", "Step 2", "Step 3", "Thank You"].map((stepName, index) => (
          <ProgressBarStep key={index} active={index === step - 1}>
            {stepName}
          </ProgressBarStep>
        ))}
        <ProgressBarFiller progress={progress} />
      </ProgressBarContainer>
      <StepContainer current={step === 1}>
        <StepHeader>Step 1: Personal Information</StepHeader>
        <form onSubmit={handleNext}>
          <FormInput
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
          <FormInput
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
          <FormButton type="submit">Next</FormButton>
        </form>
      </StepContainer>

      <StepContainer current={step === 2}>
        <StepHeader>Step 2: Contact Information</StepHeader>
        <form onSubmit={handleNext}>
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          <div className="d-flex align-items-center justify-content-between">
            <FormButton onClick={handleBack}>Back</FormButton>
            <FormButton type="submit">Next</FormButton>
          </div>
        </form>
      </StepContainer>

      <StepContainer current={step === 3}>
        <StepHeader>Step 3: Create Password</StepHeader>
        <form onSubmit={handleNext}>
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          <div className="d-flex align-items-center justify-content-between">
            <FormButton onClick={handleBack}>Back</FormButton>
            <FormButton type="submit">Submit</FormButton>
          </div>
        </form>
      </StepContainer>

      <StepContainer current={step === totalSteps + 1}>
        <ThankYouMessage>Thank you for signing up!</ThankYouMessage>
      </StepContainer>
    </FormContainer>
  );
};

export default MultiStepForm;
