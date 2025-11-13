"use client";

import {
  Code2,
  FileText,
  ImageIcon,
  ListChecks,
  Shuffle,
  Star,
  Tags,
  Video,
} from "lucide-react";
import { useState } from "react";

export default function EditCoursePage() {
  const [title, setTitle] = useState("English grammar A1");
  const [description, setDescription] = useState(
    "This English Grammar A1 course is designed for absolute beginners who want to build a solid foundation in the English language.",
  );
  const [type, setType] = useState("Languages");

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-6 text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-indigo-700">Edit course</h1>
        <div className="flex gap-2">
          <button className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-md">
            Languages
          </button>
          <button className="text-sm bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-md">
            Edit
          </button>
          <button className="text-sm border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100">
            View
          </button>
        </div>
      </header>

      {/* Top Section */}
      <section className="grid grid-cols-3 gap-6 mb-10">
        {/* Left — Course Info */}
        <div className="col-span-2 bg-white rounded-xl shadow p-5">
          <div className="flex items-start gap-5">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400"
              alt="course"
              className="w-40 h-40 object-cover rounded-lg border"
            />
            <div className="flex-1">
              <div className="mb-3">
                <label className="block text-sm text-gray-600 mb-1">
                  Title
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm text-gray-600 mb-1">Type</label>
                <input
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
                />
              </div>

              <button className="mt-3 bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-md transition">
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Right — Statistics */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-lg font-semibold text-indigo-700 mb-3">
            Statistics
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Rating</span>
              <span>24</span>
            </div>
            <div className="flex justify-between">
              <span>Passed</span>
              <span>3</span>
            </div>
            <div className="flex justify-between">
              <span>Views</span>
              <span>56</span>
            </div>
            <div className="flex justify-between">
              <span>Reviews</span>
              <span>9</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Course rating</span>
              <div className="flex text-purple-400">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
                <Star size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-5 gap-6">
        {/* Left side tools */}
        <div className="flex flex-col gap-4">
          {[
            { label: "Video", icon: <Video size={18} /> },
            { label: "Text", icon: <FileText size={18} /> },
            { label: "Redirect", icon: <Shuffle size={18} /> },
            { label: "Condition", icon: <Code2 size={18} /> },
          ].map((item) => (
            <button
              key={item.label}
              className="flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg font-medium transition"
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>

        {/* Center editor */}
        <div className="col-span-3 bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-gray-700 mb-3">Cards</h3>

          <div className="border rounded-xl p-4 mb-4">
            <details open>
              <summary className="cursor-pointer font-semibold text-indigo-700 mb-2">
                Text card_1
              </summary>

              <div className="space-y-3 mt-3">
                <input
                  type="text"
                  placeholder="Write title"
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
                />
                <textarea
                  placeholder="Your content here..."
                  rows={5}
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
                />
                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    Save as draft
                  </label>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1.5 rounded-md transition">
                    Save card
                  </button>
                </div>
              </div>
            </details>
          </div>

          <div className="border-dashed border-2 border-gray-300 rounded-xl py-8 flex items-center justify-center text-gray-500 text-sm">
            Drag and drop next card here
          </div>

          <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md transition mx-auto block">
            Save course
          </button>
        </div>

        {/* Right side tools */}
        <div className="flex flex-col gap-4">
          {[
            { label: "Image", icon: <ImageIcon size={18} /> },
            { label: "Text and image", icon: <FileText size={18} /> },
            { label: "Quizzes and Tests", icon: <ListChecks size={18} /> },
            { label: "Label", icon: <Tags size={18} /> },
          ].map((item) => (
            <button
              key={item.label}
              className="flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg font-medium transition"
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
