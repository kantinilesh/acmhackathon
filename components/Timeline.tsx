"use client";
import { useEffect, useRef } from 'react';

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const events = [
    { time: 'Oct 6, 11:59 PM', title: 'PPT Submission Deadline', description: 'Submit your deck before midnight sharp' },
    { time: 'Oct 9, 10:00 AM', title: 'Hackathon Starts', description: 'Begin your 24-hour Breaking Bad innovation journey' },
    { time: 'Oct 9, 4:00 PM', title: 'First Review', description: 'Showcase your progress to the mentors' },
    { time: 'Oct 10, 1:00 AM', title: 'Second Review', description: 'Late-night check-in on your project’s chemistry' },
    { time: 'Oct 10, 1:00 PM', title: 'Final Pitch', description: 'Present your final cooked-up ideas to the judges' },
    { time: 'Oct 10, 4:00 PM', title: 'Closing Ceremony', description: 'Celebrate the winners and wrap up the hackathon' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            entry.target.classList.add(index % 2 === 0 ? 'animate-slide-from-right' : 'animate-slide-from-left');
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item, index) => {
      item.setAttribute('data-index', index.toString());
      observer.observe(item);
    });

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
          src="https://img.icons8.com/color/96/000000/test-tube.png "
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Event</span>
            <span className="text-green-400 animate-pulse"> Timeline</span>
          </h2>
          <p className="text-gray-300 text-lg">24 hours of cooking pure innovation</p>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-400/50 h-full"></div>

          {events.map((event, index) => (
            <div 
              key={index} 
              className={`timeline-item relative flex items-center mb-12 last:mb-0 opacity-0 transition-all duration-700 ease-out ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
              data-index={index}
            >
              <div className={`flex-1 flex justify-${index % 2 === 0 ? 'start' : 'end'} pr-12 pl-12`}>
                <span className="text-green-400 font-semibold text-center w-32">{event.time}</span>
              </div>
              <div className="flex-shrink-0 w-5 h-5 bg-green-400 rounded-full z-10 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              <div className={`flex-1 ${index % 2 === 0 ? 'text-left pl-12' : 'text-right pr-12'}`}>
                <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
                <p className="text-gray-300">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .animate-slide-from-left {
          opacity: 1 !important;
          animation: slideFromLeft 0.7s ease-out forwards;
        }
        .animate-slide-from-right {
          opacity: 1 !important;
          animation: slideFromRight 0.7s ease-out forwards;
        }
        @keyframes slideFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
  