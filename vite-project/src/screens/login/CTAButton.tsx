// CTAButtons.tsx
import React from 'react';

const CTAButtons: React.FC = () => {
  return (
    <section className="mt-10 flex justify-center">
      <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out mx-4">
        Login
      </button>
      <button className="bg-gray-100 text-gray-700 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out mx-4">
        Sign Up
      </button>
    </section>
  );
};

export default CTAButtons;
