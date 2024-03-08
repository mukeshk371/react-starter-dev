import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AdvancedMultiStepFormStyles } from "./Styles";

function AdvancedMultiStepForm() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    gender: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key, value) => {
    setValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (!values.name.trim()) {
        setErrors({ ...errors, name: "Name is required" });
        return;
      }
      if (!values.email.trim()) {
        setErrors({ ...errors, email: "Email is required" });
        return;
      }
      if (!values.gender) {
        setErrors({ ...errors, gender: "Gender is required" });
        return;
      }
    }

    setErrors({});
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = () => {
    if (!values.address.trim()) {
      setErrors({ ...errors, address: "Address is required" });
      return;
    }
    if (!values.city.trim()) {
      setErrors({ ...errors, city: "City is required" });
      return;
    }
    if (!values.zip.trim()) {
      setErrors({ ...errors, zip: "ZIP Code is required" });
      return;
    }
    if (!values.gender) {
      setErrors({ ...errors, gender: "Gender is required" });
      return;
    }
    if (!values.terms) {
      setErrors({
        ...errors,
        terms: "You must accept the terms and conditions",
      });
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setStep(1);
    setValues({
      name: "",
      email: "",
      address: "",
      city: "",
      zip: "",
      gender: "",
      terms: false,
    });
    setSubmitted(false);
  };

  return (
    <Container className="mt-5">
      {!submitted && (
        <AdvancedMultiStepFormStyles>
          <div
            className={`step-content mb-5 ${
              step === 1 ? "step1" : step === 2 ? "step2" : ""
            }`}
          />
          <Form className={step === 1 ? "step-active" : ""}>
            {step === 1 && (
              <>
                <Form.Group as={Row} className="mb-3" controlId="name">
                  <Form.Label column sm={2}>
                    Name
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={values.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                    {errors.name && (
                      <span className="text-danger">{errors.name}</span>
                    )}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="email">
                  <Form.Label column sm={2}>
                    Email address
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={values.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                    {errors.email && (
                      <span className="text-danger">{errors.email}</span>
                    )}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="gender">
                  <Form.Label column sm={2}>
                    Gender
                  </Form.Label>
                  <Col sm={10}>
                    <div>
                      <Form.Check
                        inline
                        label="Male"
                        type="radio"
                        name="gender"
                        value="male"
                        checked={values.gender === "male"}
                        onChange={(e) => handleChange("gender", e.target.value)}
                      />
                      <Form.Check
                        inline
                        label="Female"
                        type="radio"
                        name="gender"
                        value="female"
                        checked={values.gender === "female"}
                        onChange={(e) => handleChange("gender", e.target.value)}
                      />
                      <Form.Check
                        inline
                        label="Other"
                        type="radio"
                        name="gender"
                        value="other"
                        checked={values.gender === "other"}
                        onChange={(e) => handleChange("gender", e.target.value)}
                      />
                    </div>
                    {errors.gender && (
                      <span className="text-danger">{errors.gender}</span>
                    )}
                  </Col>
                </Form.Group>
              </>
            )}
          </Form>
          <Form className={step === 2 ? "step-active" : ""}>
            {step === 2 && (
              <>
                <Form.Group as={Row} className="mb-3" controlId="address">
                  <Form.Label column sm={2}>
                    Address
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Enter address"
                      value={values.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                    />
                    {errors.address && (
                      <span className="text-danger">{errors.address}</span>
                    )}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="city">
                  <Form.Label column sm={2}>
                    City
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Enter city"
                      value={values.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                    />
                    {errors.city && (
                      <span className="text-danger">{errors.city}</span>
                    )}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="zip">
                  <Form.Label column sm={2}>
                    ZIP Code
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Enter ZIP code"
                      value={values.zip}
                      onChange={(e) => handleChange("zip", e.target.value)}
                    />
                    {errors.zip && (
                      <span className="text-danger">{errors.zip}</span>
                    )}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="terms">
                  <Col sm={{ offset: 2 }}>
                    <Form.Check
                      type="checkbox"
                      label="I accept the terms and conditions"
                      checked={values.terms}
                      onChange={(e) => handleChange("terms", e.target.checked)}
                    />
                    {errors.terms && (
                      <span className="text-danger">{errors.terms}</span>
                    )}
                  </Col>
                </Form.Group>
              </>
            )}
          </Form>
          <div className="d-flex justify-content-between w-75 mx-auto">
            <Button
              className="w-25"
              variant="primary"
              onClick={handlePrev}
              disabled={step === 1}
            >
              Back
            </Button>
            <Button
              className="w-25"
              variant="primary"
              onClick={step === 2 ? handleSubmit : handleNext}
            >
              {step === 2 ? "Submit" : "Next"}
            </Button>
          </div>
        </AdvancedMultiStepFormStyles>
      )}
      {submitted && (
        <div className="thank-you">
          <h2>Thank You, {values.name}!</h2>
          <p>Your details:</p>
          <p>Name: {values.name}</p>
          <p>Email: {values.email}</p>
          <p>Address: {values.address}</p>
          <p>City: {values.city}</p>
          <p>ZIP Code: {values.zip}</p>
          <p>Gender: {values.gender}</p>
          <p>Terms Accepted: {values.terms ? "Yes" : "No"}</p>
          <Button variant="primary" onClick={handleReset}>
            Reset
          </Button>
        </div>
      )}
    </Container>
  );
}

export default AdvancedMultiStepForm;
