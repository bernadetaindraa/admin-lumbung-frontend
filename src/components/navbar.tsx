"use client";
import { useState } from "react";
import { Bell } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { title: "Sistem Update", message: "Server maintenance dijadwalkan besok 22:00 WIB." },
    { title: "Pengguna Baru", message: "Akun baru telah dibuat oleh admin 02." },
    { title: "Pembayaran", message: "Transaksi #INV-2025 berhasil diproses." },
  ];

  return (
    <header className="w-full h-16 bg-white shadow-sm flex items-center justify-between px-6 relative">
      {/* Left - Title */}
      <h1 className="text-lg font-semibold text-[#3e5641]">Admin Dashboard</h1>

      {/* Right - Notification */}
      <div className="flex items-center gap-6 relative">
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative p-2 rounded-full hover:bg-gray-100"
        >
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
            {notifications.length}
          </span>
        </button>

        {/* Popup Notification */}
        {showNotifications && (
          <div className="absolute right-0 mt-65 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div className="p-3 border-b border-gray-100 font-semibold text-gray-700">
              Notifikasi
            </div>
            <div className="max-h-60 overflow-y-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-gray-600 font-medium">Title</th>
                    <th className="px-3 py-2 text-gray-600 font-medium">Pesan</th>
                  </tr>
                </thead>
                <tbody>
                  {notifications.map((notif, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-3 py-2 font-medium text-gray-800">
                        {notif.title}
                      </td>
                      <td className="px-3 py-2 text-gray-600">{notif.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={() => setShowNotifications(false)}
              className="w-full text-center py-2 text-sm text-blue-600 hover:bg-gray-100 border-t"
            >
              Tutup
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
