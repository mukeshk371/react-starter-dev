import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function AdvancedMultiStepForm() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    gender: '',
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
        setErrors({ name: 'Name is required' });
        return;
      }
      if (!values.email.trim()) {
        setErrors({ email: 'Email is required' });
        return;
      }
    }

    setErrors({});
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    if (!values.address.trim()) {
      setErrors({ address: 'Address is required' });
      return;
    }
    if (!values.city.trim()) {
      setErrors({ city: 'City is required' });
      return;
    }
    if (!values.zip.trim()) {
      setErrors({ zip: 'ZIP Code is required' });
      return;
    }
    if (!values.gender) {
      setErrors({ gender: 'Gender is required' });
      return;
    }
    if (!values.terms) {
      setErrors({ terms: 'You must accept the terms and conditions' });
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setStep(1);
    setValues({
      name: '',
      email: '',
      address: '',
      city: '',
      zip: '',
      gender: '',
      terms: false,
    });
    setSubmitted(false);
  };

  return (
    <div>
      {!submitted && (
        <>
          {step === 1 && (
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={values.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
                {errors.name && <Alert variant="danger">{errors.name}</Alert>}
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
                {errors.email && <Alert variant="danger">{errors.email}</Alert>}
              </Form.Group>
              <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="gender"
                    value="male"
                    checked={values.gender === 'male'}
                    onChange={(e) => handleChange('gender', e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="gender"
                    value="female"
                    checked={values.gender === 'female'}
                    onChange={(e) => handleChange('gender', e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    label="Other"
                    name="gender"
                    value="other"
                    checked={values.gender === 'other'}
                    onChange={(e) => handleChange('gender', e.target.value)}
                  />
                </div>
                {errors.gender && <Alert variant="danger">{errors.gender}</Alert>}
              </Form.Group>
            </Form>
          )}
          {step === 2 && (
            <Form>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  value={values.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                />
                {errors.address && <Alert variant="danger">{errors.address}</Alert>}
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  value={values.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                />
                {errors.city && <Alert variant="danger">{errors.city}</Alert>}
              </Form.Group>
              <Form.Group controlId="zip">
                <Form.Label>ZIP Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter ZIP code"
                  value={values.zip}
                  onChange={(e) => handleChange('zip', e.target.value)}
                />
                {errors.zip && <Alert variant="danger">{errors.zip}</Alert>}
              </Form.Group>
              <Form.Group controlId="terms">
                <Form.Check
                  type="checkbox"
                  label="I accept the terms and conditions"
                  checked={values.terms}
                  onChange={(e) => handleChange('terms', e.target.checked)}
                />
                {errors.terms && <Alert variant="danger">{errors.terms}</Alert>}
              </Form.Group>
            </Form>
          )}
          <Button variant="primary" onClick={handlePrev} disabled={step === 1}>
            Back
          </Button>
          <Button variant="primary" onClick={step === 2 ? handleSubmit : handleNext}>
            {step === 2 ? 'Submit' : 'Next'}
          </Button>
        </>
      )}
      {submitted && (
        <div>
          <h2>Thank You, {values.name}!</h2>
          <p>Your details:</p>
          <p>Name: {values.name}</p>
          <p>Email: {values.email}</p>
          <p>Address: {values.address}</p>
          <p>City: {values.city}</p>
          <p>ZIP Code: {values.zip}</p>
          <p>Gender: {values.gender}</p>
          <p>Terms Accepted: {values.terms ? 'Yes' : 'No'}</p>
          <Button variant="primary" onClick={handleReset}>
            Reset
          </Button>
        </div>
      )}
    </div>
  );
}

export default AdvancedMultiStepForm;
