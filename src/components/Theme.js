import React, { useState } from 'react';

const Theme = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`bg-${isDarkMode ? 'gray-900' : 'white'} text-${isDarkMode ? 'white' : 'gray-900'} transition duration-500 ease-in-out`}>
      <div className="flex justify-end p-4">
        <button
          onClick={toggleDarkMode}
          className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'} hover:text-indigo-600 focus:outline-none`}
        >
          {isDarkMode ? '🌙' : '💡'}
        </button>
      </div>
      {children}
    </div>
  );
};

export default Theme;
