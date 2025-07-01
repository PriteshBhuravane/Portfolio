
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">Pritesh Bhuravane</h3>
            <p className="text-gray-400">
              Full Stack Web Developer passionate about creating amazing digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Skills</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="space-y-2">
              <div className="text-gray-400">bhuravanepritesh@gmail.com</div>
              <div className="text-gray-400">Ratnagiri, Maharashtra</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500">
              © 2024 Pritesh Bhuravane. All rights reserved.
            </div>
            <button 
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
