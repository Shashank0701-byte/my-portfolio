// components/WindowsLoader.jsx

import React from 'react';
import windowsLogo from '../assets/images/windows-logo.png';


const WindowsLoader = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 text-white font-mono">
      <img
        src={windowsLogo} // Add a Windows logo to public folder or assets
        alt="Windows Logo"
        className="w-24 h-24 animate-pulse mb-6"
      />
      <p className="text-lg">Loading Windows...</p>
      <div className="mt-4 w-48 h-1 bg-gray-700 overflow-hidden rounded-full">
        <div className="h-full w-1/3 bg-blue-500 animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default WindowsLoader;
