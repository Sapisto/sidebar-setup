// SocialLogin.tsx
import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const SocialLogin: React.FC = () => {
  return (
    <section className="mt-8 flex justify-center gap-4">
      <button className="flex items-center bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-600">
        <FaGoogle className="mr-2" />
        Login with Google
      </button>
      <button className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700">
        <FaFacebook className="mr-2" />
        Login with Facebook
      </button>
    </section>
  );
};

export default SocialLogin;
