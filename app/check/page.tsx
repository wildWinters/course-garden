"use client";
import { useState } from "react";
import { Star } from "lucide-react";

const mails = [
  {
    id: 1,
    name: "William Smith",
    role: "Admin",
    subject: "Problems with deactivating",
    message:
      "Hi, let’s have a meeting tomorrow to discuss the project. I’ve been reviewing the project details and have some ideas I’d like to share...",
    status: "new",
    time: "Today",
  },
  {
    id: 2,
    name: "William Smith",
    role: "Admin",
    subject: "Problems with deactivating",
    message:
      "Hi, let’s have a meeting tomorrow to discuss the project. I’ve been reviewing the project details and have some ideas I’d like to share...",
    status: "draft",
    time: "2 days ago",
  },
  {
    id: 3,
    name: "William Smith",
    role: "Admin",
    subject: "Problems with deactivating",
    message:
      "Hi, let’s have a meeting tomorrow to discuss the project. I’ve been reviewing the project details and have some ideas I’d like to share...",
    status: "in work",
    time: "5 days ago",
  },
  {
    id: 4,
    name: "William Smith",
    role: "Admin",
    subject: "Problems with deactivating",
    message:
      "Hi, let’s have a meeting tomorrow to discuss the project. I’ve been reviewing the project details and have some ideas I’d like to share...",
    status: "done",
    time: "6 days ago",
  },
];

export default function SupportPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Left panel */}
      <aside className="w-[45%] p-6 border-r border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-indigo-700">Support</h1>
          <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-lg transition">
            <span className="text-lg">✉️</span>
            <span>Inbox</span>
          </button>
        </div>

        <div className="flex gap-2 mb-4">
          {["All mail", "New", "Drafts", "In work", "Important", "Done"].map(
            (item) => (
              <button
                key={item}
                className={`px-3 py-1 rounded-md text-sm ${
                  item === "All mail"
                    ? "bg-indigo-100 text-indigo-700"
                    : "hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ),
          )}
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />

        <div className="flex flex-col gap-3">
          {mails.map((mail) => (
            <div
              key={mail.id}
              onClick={() => setSelected(mail.id)}
              className={`border rounded-xl p-4 cursor-pointer transition ${
                selected === mail.id
                  ? "border-indigo-400 bg-indigo-50"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold">{mail.name}</h3>
                <span className="text-sm text-gray-500">{mail.time}</span>
              </div>
              <p className="text-sm text-gray-500">{mail.role}</p>
              <p className="font-medium mt-2">{mail.subject}</p>
              <p className="text-sm text-gray-600 mt-1 truncate">
                {mail.message}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border ${
                    mail.status === "new"
                      ? "border-indigo-400 text-indigo-600"
                      : mail.status === "draft"
                        ? "border-gray-300 text-gray-500"
                        : mail.status === "in work"
                          ? "border-yellow-300 text-yellow-600"
                          : "border-green-300 text-green-600"
                  }`}
                >
                  {mail.status}
                </span>
                <Star size={16} className="text-gray-400 ml-auto" />
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Right panel */}
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 text-gray-500">
            <span className="cursor-pointer">⭐</span>
            <span className="cursor-pointer">🗑️</span>
            <span className="cursor-pointer">📄</span>
          </div>
          <button className="text-indigo-600 hover:underline font-medium">
            New message
          </button>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-400"
          />
        </div>

        <textarea
          placeholder="Write your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-48 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
        />

        <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md transition">
          Send
        </button>
      </main>
    </div>
  );
}
