import React, { useState } from 'react';

const ChildForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: 'Male',
    immunizations: [],
    species: '', // New field for species
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImmunizationChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({
      ...formData,
      immunizations: selectedOptions,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
    // Additional validation logic can be added here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label htmlFor="immunizations">Immunizations:</label>
        <select
          id="immunizations"
          name="immunizations"
          multiple
          value={formData.immunizations}
          onChange={handleImmunizationChange}
        >
          <option value="BCG">BCG</option>
          <option value="MMR">MMR</option>
          <option value="RV">RV</option>
          <option value="DTaP">DTaP</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default ChildForm;
