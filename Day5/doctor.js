import React from 'react';

function DoctorInformation() {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Y K MISHRA',
      specialty: 'Cardiology',
      contact: '123-456-7890',
      bio: 'With an experience of over 32 years, he is widely recognised & has successfully performed over 14,000 open heart surgeries, & more than 500 robotic surgeries.',
      image: 'https://www.vaidam.com/sites/default/files/dr._y_k_mishra_1.jpeg',
    },
    {
      id: 2,
      name: 'Dr. Sandeep Vaishiya',
      specialty: 'Spine Surgeon',
      contact: '987-654-3210',
      bio: 'Dr. Prithvi Mohandas is a recognized Orthopedic Specialist with over 20 years of experience.',
      image: 'https://www.vaidam.com/sites/default/files/dr._sandeep_vaishya_0.jpg',
    },
    {
      id: 3,
      name: 'Dr.Ajay Kaul',
      specialty: 'Cardic Surgeon',
      contact: '987-654-3210',
      bio: 'With an experience of 36+ years, he has performed over 10,000 Cardiac Surgeries and 4000 Total Arterial Coronary Bypass Surgeries.',
      image: 'https://www.vaidam.com/sites/default/files/dr._ajay-min_2.jpg',
    },
    {
      id: 4,
      name: 'Dr. Naresh Trehan',
      specialty: 'Cardiac Surgeon',
      contact: '987-654-3210',
      bio: 'Dr. Naresh Trehan is one of India most successful Cardiovascular and Cardiothoracic Surgeons with experience of over 40 years',
      image: 'https://www.vaidam.com/sites/default/files/dr-naresh-trehan-cardio_thoracic-vascular_surgery-cardiology-2_1.jpeg',
    },
    {
      id: 5,
      name: 'Dr. Vinod Raina',
      specialty: 'Medical Oncologist',
      contact: '987-654-3210',
      bio: 'Dr. Vinod Raina is one of the best Medical Oncologists in India having 37 years of rich experience.',
      image: 'https://www.vaidam.com/sites/default/files/dr-vinod-raina-hemato-oncology-2.jpg',
    },
    {
      id: 6,
      name: 'Dr. Arun Aroha',
      specialty: 'Spine Surgeon',
      contact: '987-654-3210',
      bio: 'With an experience of over 14 years, he is one of the first few to perform Soliosis surgery in India.',
      image: 'https://www.vaidam.com/sites/default/files/image-removebg-preview45-min.png',
    },
    
  ];

  return (
    <div>
      <h2>Doctor Information</h2>
      {doctors.map(doctor => (
        <div key={doctor.id} className="doctor-card">
          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          <div className="doctor-details">
            <h3>{doctor.name}</h3>
            <p>Specialty: {doctor.specialty}</p>
            <p>Contact: {doctor.contact}</p>
            <p>{doctor.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorInformation;
