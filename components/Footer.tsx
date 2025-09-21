import { Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-400/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-green-400">HackBad</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Breaking barriers in innovation. Join us for 24 hours of intense coding, 
              creativity, and collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#hero" className="block text-gray-400 hover:text-green-400 transition-colors">Home</a>
              <a href="#timer" className="block text-gray-400 hover:text-green-400 transition-colors">Timer</a>
              <a href="#tracks" className="block text-gray-400 hover:text-green-400 transition-colors">Tracks</a>
              <a href="#prizes" className="block text-gray-400 hover:text-green-400 transition-colors">Prizes</a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>hackbad@club.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Tech Campus<br />Innovation Hub</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-400/20 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HackBad. All rights reserved. Better call our legal team.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;