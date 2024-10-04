import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

function Rootnav() {
  return (
    <div className="bg-purple-600 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-white text-2xl font-bold">TaleMaker</h1>
        <div className="flex space-x-4">
          <Link to="/login">
            <button className="bg-pink-300 text-purple-800 font-semibold py-2 px-4 rounded hover:bg-pink-400 transition duration-200">
              Login
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Rootnav;
