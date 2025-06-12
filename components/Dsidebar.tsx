// "use client";
// import Link from "next/link";
// import { SignOutButton } from '@clerk/nextjs'
// const DoctorSidebar = () => {
//   return (
//     <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
//       <h2 className="text-2xl font-bold mb-6">Doctor Panel</h2>

//  <Link href="/dashboard/doctor/" className="mb-4">Home</Link>

//       <Link href="/dashboard/doctor/availability" className="mb-4">Availability</Link>
//       <Link href="/dashboard/doctor/appointments" className="mb-4">Appointments</Link>
//       <Link href="/dashboard/doctor/notifications" className="mb-4">Notifications</Link>
//             <Link href="/dashboard/doctor/profile" className="mb-4">Profile</Link>

//      <SignOutButton>
//   <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
// </SignOutButton>
//     </div>
//   );
// };

// export default DoctorSidebar;
"use client";

import Link from "next/link";
import { SignOutButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

const DoctorSidebar = () => {
  const pathname = usePathname();

  const navigationItems = [
    { href: "/dashboard/doctor/", label: "Home", icon: "🏠" },
    { href: "/dashboard/doctor/availability", label: "Availability", icon: "📅" },
    { href: "/dashboard/doctor/appointments", label: "Appointments", icon: "🩺" },
    { href: "/dashboard/doctor/notifications", label: "Notifications", icon: "🔔" },
    { href: "/dashboard/doctor/profile", label: "Profile", icon: "👤" }
  ];

  const isActiveLink = (href) => {
    if (href === "/dashboard/doctor/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-blue-400">Doctor Panel</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-800 ${
                  isActiveLink(item.href)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer with Logout */}
      <div className="p-4 border-t border-gray-700">
        <SignOutButton>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
            
            <span>Logout</span>
          </button>
        </SignOutButton>
      </div>
    </div>
  );
};

export default DoctorSidebar;