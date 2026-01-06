"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+2349091643613"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50
                 bg-green-500 hover:bg-green-600
                 text-white p-4 rounded-full
                 shadow-lg transition duration-300"
    >
      <FaWhatsapp size={20} />
    </a>
  );
}
