import React from 'react';
import Navbar from '../component/Navbar';
import Bookcard from '../component/Bookcard';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <Navbar />
      <div className="p-4">
        <div className="flex justify-end mb-4">
          <Link to="/create">
            <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-200">
              Create Story
            </button>
          </Link>

        </div>
        <div>
          <h2 className="text-purple-800 font-bold text-xl mb-4">Previous Stories</h2>
          <div className="flex flex-wrap justify-start gap-5">
            <Bookcard />
            <Bookcard />
            <Bookcard />
            <Bookcard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
