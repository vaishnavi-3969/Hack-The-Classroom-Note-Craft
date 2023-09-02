import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaMoon, FaLightbulb, FaArrowRight, FaUserEdit, FaHandHoldingHeart } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';

const avatarImages = [
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/3.jpg',
  'https://randomuser.me/api/portraits/women/4.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg',
  'https://randomuser.me/api/portraits/women/5.jpg',
  'https://randomuser.me/api/portraits/men/6.jpg',
  'https://randomuser.me/api/portraits/women/7.jpg',
];

const LandingPage = () => {
  const { loginWithRedirect } = useAuth0();
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const featureCards = [
    {
      title: 'Effortless Collaboration',
      description: 'Work together seamlessly with real-time collaboration features.',
      icon: <FaUserEdit />,
    },
    {
      title: 'Powerful Note-Taking',
      description: 'Take notes, organize them, and access them from anywhere.',
      icon: <FaHandHoldingHeart />,
    },
    {
      title: 'Customizable Themes',
      description: 'Choose between light and dark themes to suit your preferences.',
      icon: <FaLightbulb />,
    },
  ];

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div className={`bg-${isDarkMode ? 'gray-900' : 'white'} h-screen text-${isDarkMode ? 'white' : 'gray-900'} transition duration-500 ease-in-out relative`}>
      <div className="flex flex-col justify-center items-center h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center p-8"
        >
          <div className="flex justify-end mt-4">
            <button
              onClick={toggleDarkMode}
              className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'} hover:text-indigo-600 focus:outline-none`}
            >
              {isDarkMode ? <FaMoon /> : <FaLightbulb />}
            </button>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`text-4xl font-bold mt-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Welcome to Note Craft
          </motion.h1>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Your ultimate note-taking and collaboration platform.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogin}
            className={`bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-indigo-800 hover:text-white`}
          >
            <span className="flex p-2">
              <div className="p-1">
                <FaArrowRight />
              </div>
              Log In
            </span>
          </motion.button>
          {/* <div className="mt-8">
            <a href="https://github.com/vaishnavi-3969/Hack-The-Classroom" target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'} hover:text-indigo-200`}
              >
                <FaGithub />
              </motion.div>
            </a>
          </div> */}
        </motion.div>
        <div className="flex justify-center mt-8 space-x-4">
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-${isDarkMode ? 'gray-800' : 'white'} p-4 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'
                } text-center shadow-md w-64`}
            >
              <div className="text-4xl mb-2 text-indigo-600">{card.icon}</div>
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{card.title}</h2>
              <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
        {avatarImages.map((avatar, index) => (
          <motion.img
            key={index}
            src={avatar}
            alt="Avatar"
            className="w-12 h-12 rounded-full shadow-lg border-4 border-white m-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
