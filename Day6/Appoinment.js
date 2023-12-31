import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Appointment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation and submission logic here

    // Display success message or handle errors
  };

  return (
    <div>
      <h2>Appointment</h2>
      <form onSubmit={handleSubmit}>
        <br></br>
        <br></br>
        <br></br>
        <label>
          Name
          <br></br>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Email
          <br></br>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Phone Number
          <br></br>
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </label>
        <br />
        <label>
          Appointment Date
          <br></br>
          <input type="date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required />
        </label>
        <br />
        <label>
          Appointment Time
          <br></br>
          <input type="time" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} required />
        </label>
        <br />
        <Link to="/"><button type="submit">Submit</button></Link>  
      </form>
    </div>
  );
};

export default Appointment;