import React from "react";

interface LoginCardProps {
  icon: React.ReactNode;
  text: string;
  subText: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ icon, text, subText }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg border border-blue-200">
      <div className="text-4xl text-blue-500 mb-2">{icon}</div>
      <h2 className="text-xl font-bold mb-2 text-black">{text}</h2>
      <p className="text-sm text-gray-500">{subText}</p>
    </div>
  );
};

export default LoginCard;
