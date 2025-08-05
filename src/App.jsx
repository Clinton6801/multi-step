import React, { useState } from 'react';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Content for each step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          // Step 1: The original registration form from your provided code
          <>
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
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-left mb-1">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </form>
          </>
        );
      case 2:
        return (
          // Step 2: Placeholder content
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              Step 2 
            </h1>
            <p className="text-gray-600">
              This is the content for the second step.
            </p>
          </div>
        );
      case 3:
        return (
          // Step 3: Placeholder content
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              Step 3
            </h1>
            <p className="text-gray-600">
              This is the content for the third step.
            </p>
          </div>
        );
      case 4:
        return (
          // Step 4: Placeholder content
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              Step 4
            </h1>
            <p className="text-gray-600">
              This is the final step.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      {/* The main container for the content */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-4xl w-full">
        
        {/* Left side: Step list with SVG background */}
        <div className="w-full h-auto md:w-1/2 md:h-[568px] relative p-6 rounded-lg overflow-hidden">
          {/* SVG Background as a background image. Replace the URL with your path. */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('/bg-sidebar-desktop.svg')" }}
          ></div>
          
          {/* Content for the step list positioned on the SVG */}
          <ul className="relative z-10 flex flex-row md:flex-col justify-center space-x-4 md:space-x-0 md:space-y-4 pt-6 md:pt-0">
            {[1, 2, 3, 4].map(step => (
              <li 
                key={step} 
                className={`flex items-center space-x-4 p-4 cursor-pointer transition-colors duration-200 rounded-md
                  ${currentStep === step ? 'text-white' : 'text-white'}`}
                onClick={() => setCurrentStep(step)}
              >
                <span
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold
                    ${currentStep === step ? 'bg-blue-600 border-blue-600 text-white' : 'border-white text-white'}`}
                >
                  {step}
                </span>
                <span>Step {step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: Dynamic content container */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col h-full">
          {renderStepContent()}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePreviousStep}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300
                ${currentStep === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'}`}
            >
              Previous Step
            </button>
            <button
              onClick={handleNextStep}
              disabled={currentStep === 4}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300
                ${currentStep === 4 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'}`}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
