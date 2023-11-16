import React from 'react';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-yellow-200 to-orange-400">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center relative">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-yellow-200 to-orange-400 opacity-70 rounded-lg"></div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 relative z-10">
          Welcome to Restaurant Web App
        </h1>
        <p className="text-lg text-gray-600 mb-8 relative z-10">
          Log in or register to get started
        </p>
        <Link
          to="/login"
          className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md text-center mb-4 relative z-10 transition duration-300"
        >
          Log In
        </Link>
        <Link
          to="/register"
          className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md text-center relative z-10 transition duration-300"
        >
          Register
        </Link>
      </div>
    </div>
  );
};
export default Landing;


