import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/90 z-[9999] p-4"
    >
      <div 
        onClick={e => e.stopPropagation()}
        className="relative bg-black/50 p-4 rounded-lg max-w-[90%] max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-cyan-400 transition-colors text-3xl"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal; 