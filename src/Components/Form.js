import React, { useState, useEffect } from "react";
import Step1 from "./firstPage";
import Step2 from "./SecondPage";
import Step3 from "./ThirdPage";
import "../index.css";

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load saved form data from localStorage on initial mount
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const validateStep = () => {
    let newErrors = {};
    switch (step) {
      case 1:
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email format is invalid";
        if (!formData.phone) newErrors.phone = "Phone is required";
        break;
      case 2:
        if (!formData.address1) newErrors.address1 = "Address Line 1 is required";
        if (!formData.city) newErrors.city = "City is required";
        if (!formData.state) newErrors.state = "State is required";
        if (!formData.zip) newErrors.zip = "Zip code is required";
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      setIsSubmitting(true);

      setTimeout(() => {

        localStorage.setItem('submittedFormData', JSON.stringify(formData));

        alert("Form submitted successfully!");


        localStorage.removeItem("formData");


        setFormData({
          name: '',
          email: '',
          phone: '',
          address1: '',
          address2: '',
          city: '',
          state: '',
          zip: ''
        });
        

        setStep(1);

        setIsSubmitting(false);
      }, 2000);
    }
  };

  return (
    <div className="form-container">
      {step === 1 && <Step1 formData={formData} setFormData={setFormData} errors={errors} />}
      {step === 2 && <Step2 formData={formData} setFormData={setFormData} errors={errors} />}
      {step === 3 && <Step3 formData={formData} />}
      
      <div className="navigation-buttons">
        {step > 1 && <button onClick={prevStep}>Back</button>}
        {step < 3 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;


