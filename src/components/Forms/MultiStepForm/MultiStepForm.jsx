import React, { useState } from "react";
import {
  FormContainer,
  StepContainer,
  StepHeader,
  FormInput,
  FormButton,
  ThankYouMessage,
  ErrorMessage,
} from "./styles";

const MultiStepForm = () => {
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

    if (!firstName) {
      stepErrors.firstName = "First name is required";
    }
    if (!lastName) {
      stepErrors.lastName = "Last name is required";
    }
    if (!email) {
      stepErrors.email = "Email is required";
    }
    if (!password) {
      stepErrors.password = "Password is required";
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <FormContainer>
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
          <div className="d-flex align-items-center justify-content-between">
            <FormButton type="submit">Next</FormButton>
          </div>
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

      <StepContainer current={step === 4}>
        <ThankYouMessage>Thank you for signing up!</ThankYouMessage>
      </StepContainer>
    </FormContainer>
  );
};

export default MultiStepForm;
