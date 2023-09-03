import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaLightbulb, FaSignOutAlt, FaUser, FaBook, FaProjectDiagram, FaPencilAlt, FaBookOpen, FaChalkboard, FaBoxes, FaCheck } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const features = [
    { icon: <FaBook />, text: 'Notebooks', link: '/notebooks' },
    { icon: <FaProjectDiagram />, text: 'Projects', link: '/projects' },
    { icon: <FaPencilAlt />, text: 'Diagrams', link: '/diagram' },
    { icon: <FaBookOpen />, text: 'Sticky Notes', link: '/sticky_notes' },
    { icon: <FaChalkboard />, text: 'Whiteboard', link: '/whiteboard' },
    { icon: <FaBoxes />, text: 'Notes Template Library', link: '/notes_template_library' },
    { icon: <FaCheck />, text: 'To Dos', link: '/todo' },
  ];

  return (
    <div className={`bg-${isDarkMode ? 'gray-900' : ''} min-h-screen text-${isDarkMode ? 'white' : 'gray-900'} transition duration-500 ease-in-out relative p-10`}>
      <div className="flex flex-col justify-between h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center p-8"
        >
          <div className="flex justify-between items-center">
            <button
              onClick={toggleDarkMode}
              className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'} hover:text-indigo-600 focus:outline-none`}
            >
              {isDarkMode ? <FaMoon /> : <FaLightbulb />}
            </button>
            {isAuthenticated && (
              <Link to="/profile">
                <div className="flex items-center">
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{user.name}</span>
                </div>
              </Link>
            )}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`text-4xl font-bold mt-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Welcome to Note Craft
          </motion.h1>
          <p className={`mt-4 text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Your all-in-one platform for notes, projects, diagrams, sticky notes, and more. Stay organized and boost productivity with Note Craft.
          </p>
        </motion.div>

        <div className="mt-8 space-y-4">
          {/* Features */}
          {isAuthenticated && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.location.href = feature.link}
                  className={`bg-${isDarkMode ? 'gray-800' : 'white'} p-4 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} text-center shadow-md cursor-pointer`}
                >
                  <div className="text-4xl mb-2 text-indigo-600">{feature.icon}</div>
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{feature.text}</h2>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className={`flex items-center justify-end p-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {/* Logout Button */}
          {isAuthenticated && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => logout({ returnTo: window.location.origin })}
              className={`bg-red-600 text-white px-2 py-1 rounded-md ml-4 hover:bg-red-800 hover:text-white`}
            >
              <span className="flex items-center">
                <div className="p-1">
                  <FaSignOutAlt />
                </div>
                Logout
              </span>
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
