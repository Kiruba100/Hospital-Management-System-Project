import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HealthForm = () => {
  const [healthData, setHealthData] = useState({
    patientId: '',
    weight: '',
    height: '',
    bloodPressure: '',
    sugarLevel: '',
    asthmaProblem: '',
    covidPositive: ''
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? (checked ? 'Yes' : 'No') : value;

    setHealthData(prevData => ({
      ...prevData,
      [name]: newValue
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any data processing or submission logic here
    console.log(healthData);
    // Reset form after submission
    setHealthData({
      patientId: '',
      weight: '',
      height: '',
      bloodPressure: '',
      sugarLevel: '',
      asthmaProblem: '',
      covidPositive: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <br></br>
        <br></br>
        <br></br>
        Patient ID
        <br></br> 
        <input
          type="text"
          name="patientId"
          value={healthData.patientId}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Weight (in kg)
        <br></br>
        <input
          type="number"
          name="weight"
          value={healthData.weight}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Height (in cm)
        <br></br>
        <input
          type="number"
          name="height"
          value={healthData.height}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Blood Pressure
        <br></br>
        <div>
          <button
            type="button"
            name="bloodPressure"
            value="Low"
            className={healthData.bloodPressure === 'Low' ? 'active' : ''}
            onClick={handleChange}
          >
            Low
          </button>
          <button
            type="button"
            name="bloodPressure"
            value="Normal"
            className={healthData.bloodPressure === 'Normal' ? 'active' : ''}
            onClick={handleChange}
          >
            Normal
          </button>
          <button
            type="button"
            name="bloodPressure"
            value="High"
            className={healthData.bloodPressure === 'High' ? 'active' : ''}
            onClick={handleChange}
          >
            High
          </button>
          <button
            type="button"
            name="bloodPressure"
            value="Not Measured"
            className={healthData.bloodPressure === 'Not Measured' ? 'active' : ''}
            onClick={handleChange}
          >
            Not Measured
          </button>
        </div>
      </label>
      <br />

      <label>
        Sugar Level
        <br></br>
        <div>
          <button
            type="button"
            name="sugarLevel"
            value="Low"
            className={healthData.sugarLevel === 'Low' ? 'active' : ''}
            onClick={handleChange}
          >
            Low
          </button>
          <button
            type="button"
            name="sugarLevel"
            value="Normal"
            className={healthData.sugarLevel === 'Normal' ? 'active' : ''}
            onClick={handleChange}
          >
            Normal
          </button>
          <button
            type="button"
            name="sugarLevel"
            value="High"
            className={healthData.sugarLevel === 'High' ? 'active' : ''}
            onClick={handleChange}
          >
            High
          </button>
          <button
            type="button"
            name="sugarLevel"
            value="Not Measured"
            className={healthData.sugarLevel === 'Not Measured' ? 'active' : ''}
            onClick={handleChange}
          >
            Not Measured
          </button>
        </div>
      </label>
      <br />

      <label>
        Asthma Problem
        <br></br>
        <select
          name="asthmaProblem"
          value={healthData.asthmaProblem}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
      <br />

      <label>
        COVID-19 Positive
        <br></br>
        <select
          name="covidPositive"
          value={healthData.covidPositive}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
      <br />

      <Link to="/"><button type="submit">Submit</button></Link>
    </form>
  );
};

export default HealthForm;
