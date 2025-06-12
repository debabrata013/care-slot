// /pages/dashboard/doctor/notifications.jsx

"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorSidebar from '@/components/Dsidebar';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    const res = await axios.get('/api/doctor/notifications');
    setNotifications(res.data);
  };

  const markRead = async (id) => {
    await axios.put('/api/doctor/notifications', { id });
    fetchNotifications();
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <>
    <DoctorSidebar/>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <ul>
        {notifications.map((note) => (
          <li key={note._id} className="flex justify-between items-center mb-2">
            <span>{note.message}</span>
            {!note.isRead && (
              <button onClick={() => markRead(note._id)} className="btn">Mark Read</button>
            )}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Notifications;
