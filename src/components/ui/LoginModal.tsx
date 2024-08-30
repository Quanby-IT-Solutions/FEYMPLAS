import React, { useState } from 'react';

interface LoginModalProps {
  title: string;
  logoText: string;
  onClose: () => void;
  // Prop to differentiate the type of login
  loginType: 'Exhibitor' | 'Trade Buyer';
}

const LoginModal: React.FC<LoginModalProps> = ({ title, logoText, onClose, loginType }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your form submission logic here, handling different login types if necessary
    if (loginType === 'Exhibitor') {
      console.log('Logging in as Exhibitor');
      // Handle exhibitor login logic
    } else if (loginType === 'Trade Buyer') {
      console.log('Logging in as Trade Buyer');
      // Handle trade buyer login logic
    }
    // Close modal after submission or based on logic
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      // Closes the modal when clicking outside
      onClick={onClose}
    >
      <div
        className="flex w-full max-w-4xl bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside the modal
      >
        {/* Left Side - Logo */}
        <div className="flex items-center justify-center w-2/5 bg-[#1f1a15] p-8">
          <h1 className="text-white text-6xl font-bold">{logoText}</h1>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-3/5 p-8">
          <h2 className="text-2xl font-bold mb-6">{title}</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <div className="flex justify-end">
              <a href="#" className="text-sm text-gray-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#656445] text-white py-2 rounded font-bold"
            >
              LOGIN
            </button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&#39;t have an account?{' '}
            <a href="#" className="text-[#656445] hover:underline">
              Register Here.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
