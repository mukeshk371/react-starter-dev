import React, { useState } from 'react';

const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (step === 3) {
        setStep(4);
      } else {
        setStep(step + 1);
      }
    }
  };

  const validateForm = () => {
    let errors = {};
    if (step === 1 && !formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
    if (step === 1 && !formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }
    if (step === 2 && !formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (step === 2 && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (step === 2 && !formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (step === 2 && formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const renderStep = () => {
    return (
      <div className='p-4'>
        <h2 className='text-center uppercase mb-4'>Sign Up</h2>
        <div className="flex flex-col">
          <div className="relative mb-8">
            <div className="h-[15px] bg-gray-300 rounded-full">
              <div
                className={`absolute left-0 h-[15px] bg-blue-500 rounded-full transition-all duration-300 ease-in-out ${step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : step === 3 ? 'w-full' : 'w-full'
                  }`}
              ></div>
            </div>
            <div className="flex justify-between mt-1">
              <div className="text-xs text-gray-500">Step 1</div>
              <div className="text-xs text-gray-500">Step 2</div>
              <div className="text-xs text-gray-500">Step 3</div>
            </div>
          </div>
          {step === 1 && (
            <div className="flex flex-col">
              <label className={`block text-sm font-medium ${errors.firstName ? "text-red-500" : "text-gray-700"}`} htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border-[1px] ${errors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.firstName && (
                <span className="text-red-500 mt-1 text-sm">{errors.firstName}</span>
              )}
              <label className={`block text-sm font-medium ${errors.lastName ? "text-red-500" : "text-gray-700"} mt-4`} htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border-[1px] ${errors.lastName ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.lastName && (
                <span className="text-red-500 mt-1 text-sm">{errors.lastName}</span>
              )}
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col">
              <label className={`block text-sm font-medium ${errors.email ? "text-red-500" : "text-gray-700"}`} htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border-[1px] ${errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.email && (
                <span className="text-red-500 mt-1 text-sm">{errors.email}</span>
              )}
              <label className={`block text-sm font-medium ${errors.password ? "text-red-500" : "text-gray-700"} mt-4`} htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border-[1px] ${errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.password && (
                <span className="text-red-500 mt-1 text-sm">{errors.password}</span>
              )}
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold mb-4">Thank you for signing up!</h2>
              <p className="mb-2">First Name: {formData.firstName}</p>
              <p className="mb-2">Last Name: {formData.lastName}</p>
              <p className="mb-2">Email: {formData.email}</p>
            </div>
          )}
          <div className="grid grid-cols-2 gap-3">
            {step !== 1 && (
              <button onClick={() => setStep(step - 1)} className="bg-blue-500 text-white p-2 mt-4 rounded-md">
                Back
              </button>
            )}
            {step !== 3 && (
              <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 mt-4 rounded-md">
                {step === 1 ? 'Next' : 'Submit'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-[50%] mx-auto mt-8 p-4 bg-white shadow-md">
      {renderStep()}
    </div>
  );
};

export default SignUpForm;
