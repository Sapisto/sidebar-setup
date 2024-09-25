import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="mt-12 p-8 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white rounded-xl shadow-lg max-w-3xl mx-auto relative overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 w-full h-full opacity-10 bg-[url('/assets/abstract-pattern.jpg')] bg-cover bg-center"></div>
      
      {/* Quote */}
      <blockquote className="relative z-10 text-center text-xl md:text-2xl lg:text-3xl font-semibold italic">
        “This platform has transformed the way I manage my account! Super easy to use and secure.”
      </blockquote>
      
      {/* User Info */}
      <div className="relative z-10 flex justify-center items-center mt-6">
        <img
          src="/assets/testimonial.jpg"
          alt="User Testimonial"
          className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
        />
        <div className="ml-4">
          <span className="block font-semibold text-lg">Abdulazeez Alasa</span>
          <span className="block text-sm text-white/80">Verified User</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
