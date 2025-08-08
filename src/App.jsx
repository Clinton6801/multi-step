import React, { useState } from 'react';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('arcade');
  const [isYearly, setIsYearly] = useState(false); 
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleNextStep = () => {
    if (currentStep === 4) {
      setIsConfirmed(true);
    } else if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAddonClick = (addonName) => {
    setSelectedAddons(prevAddons => {
      if (prevAddons.includes(addonName)) {
        return prevAddons.filter(name => name !== addonName);
      } else {
        return [...prevAddons, addonName];
      }
    });
  };

  const renderStepContent = () => {
    const plansData = {
      arcade: { name: 'Arcade', monthlyPrice: 9, yearlyPrice: 90 },
      advanced: { name: 'Advanced', monthlyPrice: 12, yearlyPrice: 120 },
      pro: { name: 'Pro', monthlyPrice: 15, yearlyPrice: 150 },
    };
    
    const addonsData = [
      {
        name: 'Online service',
        description: 'Access to multiplayer games',
        monthlyPrice: 1,
        yearlyPrice: 10,
        id: 'online-service'
      },
      {
        name: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        monthlyPrice: 2,
        yearlyPrice: 20,
        id: 'larger-storage'
      },
      {
        name: 'Customizable profile',
        description: 'Custom theme on your profile',
        monthlyPrice: 2,
        yearlyPrice: 20,
        id: 'customizable-profile'
      },
    ];

    const priceSuffix = isYearly ? 'yr' : 'mo';
    const planPrice = isYearly ? plansData[selectedPlan].yearlyPrice : plansData[selectedPlan].monthlyPrice;
    
    const selectedAddonPrices = selectedAddons.map(addonId => {
      const addon = addonsData.find(a => a.id === addonId);
      return addon ? (isYearly ? addon.yearlyPrice : addon.monthlyPrice) : 0;
    });

    const totalAddonPrice = selectedAddonPrices.reduce((total, current) => total + current, 0);
    const totalPrice = planPrice + totalAddonPrice;
    
    switch (currentStep) {
      case 1:
        return (
          <div className="w-full mb-20 ">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 ">
              Personal Info
            </h1>
            <p className="text-gray-600">
              Please provide your name, email address, and phone number.
            </p>
            <form className="mt-6 space-y-4 max-w-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
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
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
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
          </div>
        );
      case 2:
        return (
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-4 text-blue-800">
              Select your plan
            </h1>
            <p className="text-gray-600">
              You have the option of monthly or yearly billing.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              {/* Arcade Plan Button */}
              <button
                onClick={() => setSelectedPlan('arcade')}
                className={`border rounded-lg text-left flex flex-col items-start justify-between p-10 min-h-[250px] w-full
                  ${selectedPlan === 'arcade' ? 'border-purple-500 bg-gray-50' : 'border-gray-300'}`}
              >
                <img src="./icon-arcade.svg" alt="Arcade Icon" />
                <div className="flex flex-col items-start">
                  <h3 className="font-bold">Arcade</h3>
                  <p className="text-gray-600">${isYearly ? plansData.arcade.yearlyPrice : plansData.arcade.monthlyPrice}/{priceSuffix}</p>
                </div>
              </button>

              {/* Advanced Plan Button */}
              <button
                onClick={() => setSelectedPlan('advanced')}
                className={`border rounded-lg text-left flex flex-col items-start justify-between p-10 min-h-[250px] w-full
                  ${selectedPlan === 'advanced' ? 'border-purple-500 bg-gray-50' : 'border-gray-300'}`}
              >
                <img src="./icon-advanced.svg" alt="Advanced Icon" />
                <div className="flex flex-col items-start">
                  <h3 className="font-bold">Advanced</h3>
                  <p className="text-gray-600">${isYearly ? plansData.advanced.yearlyPrice : plansData.advanced.monthlyPrice}/{priceSuffix}</p>
                </div>
              </button>

              {/* Pro Plan Button */}
              <button
                onClick={() => setSelectedPlan('pro')}
                className={`border rounded-lg text-left flex flex-col items-start justify-between p-10 min-h-[250px] w-full
                  ${selectedPlan === 'pro' ? 'border-purple-500 bg-gray-50' : 'border-gray-300'}`}
              >
                <img src="./icon-pro.svg" alt="Pro Icon" />
                <div className="flex flex-col items-start">
                  <h3 className="font-bold">Pro</h3>
                  <p className="text-gray-600">${isYearly ? plansData.pro.yearlyPrice : plansData.pro.monthlyPrice}/{priceSuffix}</p>
                </div>
              </button>
            </div>

            {/* Monthly/Yearly Toggle Switch */}
            <div className="mt-8 mb-8 flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className={`font-semibold ${!isYearly ? 'text-blue-800' : 'text-gray-600'}`}>Monthly</span>
              <div
                onClick={() => setIsYearly(!isYearly)}
                className="w-12 h-6 flex items-center bg-blue-800 rounded-full mx-4 p-1 cursor-pointer"
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}
                ></div>
              </div>
              <span className={`font-semibold ${isYearly ? 'text-blue-800' : 'text-gray-600'}`}>Yearly</span>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-full">
            <div>
              <h1 className="text-3xl font-bold mb-4 text-gray-800">
                Pick add-ons
              </h1>
              <p className="text-gray-600 mb-6">
                Add-ons help enhance your gaming experience.
              </p>
            </div>
            <div className="space-y-4 mb-10">
              {addonsData.map(addon => (
                <button 
                  key={addon.id}
                  onClick={() => handleAddonClick(addon.id)}
                  className={`border rounded-lg flex items-center justify-between p-4 w-full
                    ${selectedAddons.includes(addon.id) ? 'border-purple-500 bg-gray-50' : 'border-gray-300'}`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Checkbox component */}
                    <div className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center
                      ${selectedAddons.includes(addon.id) ? 'bg-purple-500 border-purple-500' : 'border-gray-400'}`}
                    >
                      {selectedAddons.includes(addon.id) && (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-blue-800">{addon.name}</h3>
                      <p className="text-gray-600 text-sm">{addon.description}</p>
                    </div>
                  </div>
                  <span className="text-purple-500 font-semibold text-sm">
                    +${isYearly ? addon.yearlyPrice : addon.monthlyPrice}/{priceSuffix}
                  </span>
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              Finishing up
            </h1>
            <p className="text-gray-600 mb-6">
              Double-check everything looks OK before confirming.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              {/* Plan and price summary */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div className="flex flex-col">
                  <h3 className="font-bold text-blue-800">
                    {plansData[selectedPlan].name} ({isYearly ? 'Yearly' : 'Monthly'})
                  </h3>
                  <button onClick={() => setCurrentStep(2)} className="text-gray-600 underline text-sm text-left">
                    Change
                  </button>
                </div>
                <span className="font-bold text-blue-800">
                  ${planPrice}/{priceSuffix}
                </span>
              </div>
              {/* Add-ons summary */}
              {selectedAddons.length > 0 && (
                <div className="pt-4 space-y-3">
                  {selectedAddons.map(addonId => {
                    const addon = addonsData.find(a => a.id === addonId);
                    if (!addon) return null;
                    return (
                      <div key={addon.id} className="flex justify-between items-center">
                        <span className="text-gray-600">{addon.name}</span>
                        <span className="text-blue-800 text-sm">
                          +${isYearly ? addon.yearlyPrice : addon.monthlyPrice}/{priceSuffix}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            {/* Total price */}
            <div className="flex justify-between items-center p-6">
              <span className="text-gray-600">Total (per {isYearly ? 'year' : 'month'})</span>
              <span className="font-bold text-purple-500 text-xl">
                +${totalPrice}/{priceSuffix}
              </span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const ThankYouPage = () => (
    <div className="w-full flex flex-col items-center justify-center text-center p-8">
      <img src="/icon-thank-you.svg" alt="Thank You Icon" className="mb-6" />
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Thank you!</h1>
      <p className="text-gray-600 max-w-sm">
        Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free
        to email us at support@loremgaming.com.
      </p>
    </div>
  );

  const stepsData = [
    { number: 1, title: 'YOUR INFO', subtitle: 'Personal Info' },
    { number: 2, title: 'SELECT PLAN', subtitle: 'Select your plan' },
    { number: 3, title: 'ADD-ONS', subtitle: 'Add-ons' },
    { number: 4, title: 'SUMMARY', subtitle: 'Summary' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 bg-white p-8 md:p-8 rounded-lg shadow-lg max-w-6xl w-full min-h-[600px] relative">
        {/* Left side: Step list with SVG background */}
        <div className="w-full h-auto md:w-1/4 md:h-[568px] relative p-6 rounded-lg overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('/bg-sidebar-desktop.svg')" }}
          ></div>
          <ul className="relative z-10 flex flex-row md:flex-col justify-center space-x-4 md:space-x-0 md:space-y-4 pt-6 md:pt-0">
            {stepsData.map(step => (
              <li
                key={step.number}
                className={`flex items-center space-x-4 p-4 cursor-pointer transition-colors duration-200 rounded-md
                  ${currentStep === step.number ? 'text-white' : 'text-white'}`}
                onClick={() => setCurrentStep(step.number)}
              >
                <span
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold
                    ${currentStep === step.number ? 'bg-blue-600 border-blue-600 text-white' : 'border-white text-white'}`}
                >
                  {step.number}
                </span>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-300 uppercase">{`Step ${step.number}`}</span>
                  <span className="font-semibold text-sm uppercase">{step.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Right side: Dynamic content container */}
        <div className="w-full md:w-3/5 flex flex-col items-start justify-between relative">
          <div className="w-full h-full flex flex-col justify-start items-start px-8 pt-8">
            {isConfirmed ? <ThankYouPage /> : renderStepContent()}
          </div>
          {!isConfirmed && (
            <div className="flex justify-between w-full px-8 pb-8 mt-auto">
              {currentStep > 1 && (
                <button
                  onClick={handlePreviousStep}
                  className="px-6 py-2 rounded-lg font-semibold transition-colors duration-300 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Go Back
                </button>
              )}
              <button
                onClick={handleNextStep}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300
                  ${currentStep === 1 ? 'ml-auto' : ''}
                  ${currentStep === 4 ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'}`}
              >
                {currentStep === 4 ? 'Confirm' : 'Next Step'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
