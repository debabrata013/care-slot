// /pages/dashboard/doctor/availability.jsx

"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorSidebar from '@/components/Dsidebar';

const Availability = () => {
  const [slots, setSlots] = useState([]);
  const [newSlot, setNewSlot] = useState('');

  const fetchAvailability = async () => {
    const res = await axios.get('/api/doctor/availability');
    setSlots(res.data);
  };

  const addSlot = async () => {
    await axios.put('/api/doctor/availability', { slot: newSlot });
    setNewSlot('');
    fetchAvailability();
  };

  useEffect(() => {
    fetchAvailability();
  }, []);

  return (
    <>
    <DoctorSidebar/>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Set Your Availability</h1>
      <div className="space-y-4">
        <input type="datetime-local" value={newSlot} onChange={(e) => setNewSlot(e.target.value)} className="input"/>
        <button onClick={addSlot} className="btn">Add Slot</button>
        <div className="mt-4">
          <h2 className="font-bold">Current Slots:</h2>
          <ul>
            {slots.map((slot, idx) => (
              <li key={idx}>{new Date(slot).toLocaleString()}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Availability;
