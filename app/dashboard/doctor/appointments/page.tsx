// /pages/dashboard/doctor/appointments.jsx

"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorSidebar from '@/components/Dsidebar';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const res = await axios.get('/api/doctor/appointments');
    setAppointments(res.data);
  };

  const updateStatus = async (id, status) => {
    await axios.put('/api/doctor/appointments', { id, status });
    fetchAppointments();
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <>
    <DoctorSidebar/>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt._id}>
              <td>{appt.userId?.name}</td>
              <td>{new Date(appt.appointmentDate).toLocaleString()}</td>
              <td>{appt.status}</td>
              <td>
                <button onClick={() => updateStatus(appt._id, 'confirmed')} className="btn">Confirm</button>
                <button onClick={() => updateStatus(appt._id, 'cancelled')} className="btn">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Appointments;
