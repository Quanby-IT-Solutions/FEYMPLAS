// components/VerticalText.js
"use client"; // Add this at the top of the file

import React from 'react';

const VerticalText = ({ text }: { text: string }) => {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        {text.split('').map((letter, index) => (
          <span key={index} className="text-white text-13xl font-bold -tracking-tight">
            {letter}
          </span>
        ))}
      </div>
    );
  };

export default VerticalText;
