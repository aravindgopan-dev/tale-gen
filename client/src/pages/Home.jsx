import React from 'react';
import Rootnav from '../component/Rootnav';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Rootnav></Rootnav>
      <div className="hero bg-gradient-to-b from-purple-300 to-pink-300 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-purple-800">Hello there</h1>
            <p className="py-6 text-gray-700">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Link to="/register">
              <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-200">
                Get Started
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
