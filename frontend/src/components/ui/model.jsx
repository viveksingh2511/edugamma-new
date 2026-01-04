import React from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-2xl rounded-xl bg-white shadow-xl">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4 bg-gray-100 rounded-t-xl">
          <h2 className="text-lg font-semibold text-gray-800">
            {title}
          </h2>
          <button onClick={onClose}>
            <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
