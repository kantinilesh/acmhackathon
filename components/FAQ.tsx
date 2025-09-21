"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who can participate in HackBad?',
      answer: 'Students, developers, designers, and innovators of all skill levels are welcome to participate.'
    },
    {
      question: 'What should I bring to the hackathon?',
      answer: 'Bring your laptop, charger, and enthusiasm! We\'ll provide food, drinks, and swag.'
    },
    {
      question: 'Can I work alone or do I need a team?',
      answer: 'You can participate individually or form teams of up to 4 members. We also have team formation sessions.'
    },
    {
      question: 'Is there any registration fee?',
      answer: 'No, participation is completely free! Just register and show up ready to hack.'
    },
    {
      question: 'What if I\'m a beginner?',
      answer: 'Perfect! We have mentors available throughout the event to help beginners learn and build.'
    },
    {
      question: 'How are projects judged?',
      answer: 'Projects are evaluated on innovation, technical implementation, design, and potential impact.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-green-400">FAQ</span>
          </h2>
          <p className="text-gray-400 text-lg">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-black border border-green-400/30 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-green-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;