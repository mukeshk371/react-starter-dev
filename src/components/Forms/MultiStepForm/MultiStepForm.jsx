import React, { useState } from "react";
import {
  FormContainer,
  StepContainer,
  StepHeader,
  FormInput,
  FormButton,
  ThankYouMessage,
} from "./styles";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setStep(4);
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
          <FormInput
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
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
          <div className="d-flex justify-content-between">
            <FormButton onClick={handleBack}>Back</FormButton>
            <FormButton type="submit">Next</FormButton>
          </div>
        </form>
      </StepContainer>

      <StepContainer current={step === 3}>
        <StepHeader>Step 3: Create Password</StepHeader>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="d-flex justify-content-between">
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
