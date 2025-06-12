// /pages/dashboard/doctor/profile.jsx

"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DocttorSidebar from '@/components/Dsidebar';
const DoctorProfile = () => {
  const [profile, setProfile] = useState({
    specialization: '',
    clinicAddress: '',
    bio: '',
    experience: '',
    fees: '',
  });

  const fetchProfile = async () => {
    const res = await axios.get('/api/doctor/profile');
    setProfile(res.data);
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.put('/api/doctor/profile', profile);
    alert('Profile Updated!');
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
    <DocttorSidebar />
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Doctor Profile</h1>
      <div className="space-y-4">
        <input type="text" name="specialization" value={profile.specialization} onChange={handleChange} placeholder="Specialization" className="input"/>
        <input type="text" name="clinicAddress" value={profile.clinicAddress} onChange={handleChange} placeholder="Clinic Address" className="input"/>
        <input type="text" name="bio" value={profile.bio} onChange={handleChange} placeholder="Bio" className="input"/>
        <input type="number" name="experience" value={profile.experience} onChange={handleChange} placeholder="Experience (years)" className="input"/>
        <input type="number" name="fees" value={profile.fees} onChange={handleChange} placeholder="Fees" className="input"/>
        <button onClick={handleSubmit} className="btn">Save</button>
      </div>
    </div>
    </>
  );
};

export default DoctorProfile;
