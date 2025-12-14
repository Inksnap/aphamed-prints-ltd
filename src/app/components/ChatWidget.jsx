"use client";

import { useState, useEffect } from "react";
import { FaTimes, FaComments } from "react-icons/fa";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Chat Icon */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50
                     bg-(--primary-color) text-white p-3
                     rounded-full shadow-md
                     hover:bg-green-900 transition"
        >
          <FaComments size={20} />
        </button>
      )}

      {/* Chat Box */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50
                     w-64 bg-white rounded-xl
                     shadow-lg border"
        >
          {/* Header */}
          <div
            className="flex items-center justify-between
                       bg-(--primary-color) text-white
                       px-3 py-2 text-sm rounded-t-xl"
          >
            <span>Need help?</span>
            <button onClick={() => setOpen(false)}>
              <FaTimes size={12} />
            </button>
          </div>

          {/* Message */}
          <div className="p-3 text-xs">
            <div className="bg-gray-100 p-2 rounded-lg leading-relaxed">
              👋 Hi! Welcome to our site.  
              <br />
              Chat with us anytime.
            </div>
          </div>

          {/* Button */}
          <div className="px-3 pb-3">
            <a
              href="https://wa.me/2348123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs
                         bg-(--primary-color) text-white
                         py-1.5 rounded-md
                         hover:bg-green-900 transition"
            >
              Open WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
