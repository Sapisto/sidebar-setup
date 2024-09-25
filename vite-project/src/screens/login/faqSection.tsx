import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'Click on the "Forgot Password" link and follow the instructions. You will receive an email with further steps to reset your password.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use industry-standard encryption to protect your data. Our platform is regularly updated to ensure your data stays secure.',
    },
    {
      question: 'How do I change my email address?',
      answer: 'Go to your account settings and navigate to "Email Settings" where you can update your email address.',
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time by going to the "Subscriptions" section in your account settings.',
    },
    
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (
    <section className="mt-12 p-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li key={index} className="bg-white text-black p-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 ease-in-out">
            <button
              className="w-full flex justify-between items-center font-semibold text-lg focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-4 text-gray-700 text-base">{faq.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQSection;
