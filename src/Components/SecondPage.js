import React from "react";

const Step2 = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <div>
        <label>Address Line 1</label>
        <input
          type="text"
          value={formData.address1}
          onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
        />
        {errors.address1 && <span className="error">{errors.address1}</span>}
      </div>
      <div>
        <label>Address Line 2</label>
        <input
          type="text"
          value={formData.address2}
          onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
        {errors.city && <span className="error">{errors.city}</span>}
      </div>
      <div>
        <label>State</label>
        <input
          type="text"
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        />
        {errors.state && <span className="error">{errors.state}</span>}
      </div>
      <div>
        <label>Zip Code</label>
        <input
          type="text"
          value={formData.zip}
          onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
        />
        {errors.zip && <span className="error">{errors.zip}</span>}
      </div>
    </div>
  );
};

export default Step2;
