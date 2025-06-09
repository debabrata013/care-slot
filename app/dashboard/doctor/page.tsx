"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Plus,
  Trash2,
  X,
  Menu,
} from "lucide-react";

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([
    { id: 1, date: "2025-06-10", time: "10:00 AM", patient: "John Doe" },
    { id: 2, date: "2025-06-11", time: "02:00 PM", patient: "Jane Smith" },
  ]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-64 bg-gray-800 text-white flex flex-col transition-all duration-300">
          <div className="p-6 border-b border-gray-700 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <button onClick={toggleSidebar}>
              <X size={20} />
            </button>
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-4">
              <li>
                <a href="#" className="block text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-300 hover:text-white">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-300 hover:text-white">
                  Appointments
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-300 hover:text-white">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Welcome, Dr.</h1>
            <p className="text-gray-300">Manage your schedule and appointments</p>
          </div>
          {!sidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="bg-gray-700 text-white p-2 rounded-lg"
            >
              <Menu size={20} />
            </button>
          )}
        </div>

        {/* Manage Schedule */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Manage Schedule</h2>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
            >
              <Plus size={18} />
              Add Slot
            </button>
          </div>
        </div>

        {/* Appointments Table */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Upcoming Appointments</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-300">
              <thead className="uppercase text-gray-400 border-b border-gray-700">
                <tr>
                  <th className="px-4 py-2">Patient</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt.id} className="border-b border-gray-800 hover:bg-gray-800/30">
                    <td className="px-4 py-2">{appt.patient}</td>
                    <td className="px-4 py-2">{appt.date}</td>
                    <td className="px-4 py-2">{appt.time}</td>
                    <td className="px-4 py-2 text-right">
                      <button
                        onClick={() =>
                          setAppointments((prev) =>
                            prev.filter((a) => a.id !== appt.id)
                          )
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-xl border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg text-white font-semibold">Add New Slot</h3>
                <button onClick={() => setShowModal(false)} className="text-white">
                  <X size={20} />
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // Add logic to save new slot
                  setShowModal(false);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-gray-300 mb-1">Date</label>
                  <div className="flex items-center bg-gray-700 rounded px-3 py-2">
                    <Calendar size={18} className="mr-2 text-gray-400" />
                    <input
                      type="date"
                      className="bg-transparent w-full text-white outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Time</label>
                  <div className="flex items-center bg-gray-700 rounded px-3 py-2">
                    <Clock size={18} className="mr-2 text-gray-400" />
                    <input
                      type="time"
                      className="bg-transparent w-full text-white outline-none"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
                >
                  Save Slot
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
