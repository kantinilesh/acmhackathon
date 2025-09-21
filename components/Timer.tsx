"use client";
import { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set hackathon date to 18 days from now
    const hackathonDate = new Date(Date.now() + 18 * 24 * 60 * 60 * 1000).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = hackathonDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="timer" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      </div>
      
      {/* Chemical Equipment Decorations */}
      <div className="absolute left-12 top-12 opacity-30">
        <img 
          src="https://img.icons8.com/color/96/000000/test-tube.png"
          alt="Chemical Beaker"
          className="w-20 h-20"
        />
      </div>
      <div className="absolute right-12 bottom-12 opacity-30">
        <img 
          src="https://img.icons8.com/color/96/000000/test-tube.png"
          alt="Test Tube"
          className="w-20 h-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">Time to</span>
          <span className="text-green-400 animate-pulse"> Cook</span>
        </h2>
        <p className="text-gray-300 text-lg mb-12">The Hackathon is brewing in:</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {timeBlocks.map((block, index) => (
            <div 
              key={index} 
              className="bg-black/60 border border-green-400/60 rounded-lg p-6 backdrop-blur-md animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-5xl font-bold text-green-400 mb-2 animate-pulse">
                {block.value.toString().padStart(2, '0')}
              </div>
              <div className="text-gray-300 uppercase text-sm tracking-wider">
                {block.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-slide-up {
          animation: slideUp 0.7s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Timer;