import React from 'react';

// The main App component that uses the layout.
export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      {/* The main container for the SVG and content */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        
        {/* Left side: The SVG container */}
        <div className="w-full md:w-1/2">
          {/* This is the new way to include your SVG. 
            Replace '/my-custom-svg.svg' with the path to your file
            in the public folder (e.g., if the file is public/logo.svg, the path is '/logo.svg'). 
          */}
          <img 
            src="/bg-sidebar-desktop.svg" 
            alt="My custom SVG" 
            className="w-full h-auto text-blue-600"
          />
        </div>

        {/* Right side: The content container */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Personal Info
          </h1>
          <p className="text-gray-600">
           please provide your name,email address aand phone number.
          </p>

            <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left mb-1">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left mb-1">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left mb-1">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
           <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
              >
                Next Step
              </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}
