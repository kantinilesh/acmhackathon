import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/banner.png" 
          alt="Background Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Character Images */}
      <div className="absolute left-10 top-1/3 transform -translate-y-1/2 opacity-30">
        <img 
          src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
          alt="Walter White"
          className="w-32 h-48 object-cover rounded-lg"
        />
      </div>
      
      <div className="absolute right-10 top-1/3 transform -translate-y-1/2 opacity-30">
        <img 
          src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_jesse-pinkman-lg.jpg"
          alt="Jesse Pinkman"
          className="w-32 h-48 object-cover rounded-lg"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fadeIn">
          <span className="text-white inline-block animate-pulse">HEISEN</span>
          <span className="text-green-400 inline-block animate-pulse" style={{ animationDelay: '0.2s' }}>HACK</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Cook up the next big thing. Break barriers, not rules.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://unstop.com/hackathons/heisen-hack-2025-srm-institute-of-science-and-technology-kattankulathur-chennai-1560624" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors text-center"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
