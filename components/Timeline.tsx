"use client";
import { useEffect, useRef } from 'react';

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const events = [
    { time: '9:00 AM', title: 'Registration & Check-in', description: 'Grab your badge and some blue candy breakfast' },
    { time: '10:00 AM', title: 'Opening Ceremony', description: 'Kickoff with a Heisenberg-style welcome' },
    { time: '10:30 AM', title: 'Hacking Begins', description: 'Cook your groundbreaking ideas, yo' },
    { time: '12:30 PM', title: 'Lunch Break', description: 'Refuel with some Los Pollos Hermanos grub' },
    { time: '6:00 PM', title: 'Dinner & Networking', description: 'Mingle with fellow coding kingpins' },
    { time: '10:30 AM +1', title: 'Hacking Ends', description: 'Submit your crystal-clear projects' },
    { time: '11:00 AM +1', title: 'Presentations', description: 'Show off your game-changing demos' },
    { time: '2:00 PM +1', title: 'Closing & Awards', description: 'Crown the top dogs of the hackathon' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images4.alphacoders.com/139/thumbbig-1394503.webp" 
          alt="Breaking Bad Desert Background" 
          className="w-full h-full object-cover"
        />
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Event</span>
            <span className="text-green-400 animate-pulse"> Timeline</span>
          </h2>
          <p className="text-gray-300 text-lg">24 hours of cooking pure innovation</p>
        </div>

        <div className="max-w-4xl mx-auto" ref={timelineRef}>
          {events.map((event, index) => (
            <div 
              key={index} 
              className="timeline-item flex items-start mb-8 last:mb-0 opacity-0 translate-x-[-20px] transition-all duration-700 ease-out"
            >
              <div className="flex-shrink-0 w-24 text-right mr-8">
                <span className="text-green-400 font-semibold">{event.time}</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-green-400 rounded-full mt-2 mr-8 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
                <p className="text-gray-300">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .animate-slide-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Timeline;