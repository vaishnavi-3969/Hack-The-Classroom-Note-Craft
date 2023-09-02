import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react'; // Import Auth0 hooks

const LandingPage = () => {
  const { loginWithRedirect } = useAuth0(); 
  return (
    <div className="bg-gradient-to-b from-custom-orange to-custom-pink h-screen text-white flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to NoteCraft</h1>
        <p className="text-lg mb-8">Your ultimate note-taking and collaboration platform.</p>
    
        <button
          onClick={() => loginWithRedirect()} 
          className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-indigo-800 hover:text-white"
        >
          <span>Log In with Auth0</span>
        </button>
        <div className="mt-8">
          <a href="https://github.com/yourrepository" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-white hover:text-indigo-200" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
