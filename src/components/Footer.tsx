import { ArrowUp, Mail, MapPin, Github, Linkedin, Twitter, Heart, Instagram } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/PriteshBhuravane", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pritesh-bhuravane/", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Instagram, href: "https://www.instagram.com/pritesh_bhuravane__?igsh=N2M3ZHR2cnJlNmNk", label: "Twitter", color: "hover:text-sky-400" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 animate-gradient-x">
              Pritesh Bhuravane
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full Stack Web Developer passionate about creating amazing digital experiences that make a difference.
            </p>
            
            {/* Contact Info with Icons */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer group">
                <Mail size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">bhuravanepritesh@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer group">
                <MapPin size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">Ratnagiri, Maharashtra</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-purple-400 transition-all duration-300 relative group inline-block"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300 inline-block">
                      {link.name}
                    </span>
                    <span className="absolute inset-0 w-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 group-hover:w-full transition-all duration-300 rounded"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`p-3 bg-gray-800 rounded-full ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={social.label}
                >
                  <social.icon size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Stay updated with my latest projects</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-r-md transition-all duration-300 hover:scale-105">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-500 mb-4 md:mb-0">
              <span>© 2024 Pritesh Bhuravane. Made with</span>
              <Heart size={16} className="mx-2 text-red-500 animate-pulse" />
              <span>in India</span>
            </div>
            
            {/* Scroll to Top Button */}
            <button 
              onClick={scrollToTop}
              disabled={isScrolling}
              className={`group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 ${
                isScrolling ? 'animate-bounce' : ''
              }`}
            >
              <ArrowUp size={20} className={`transition-transform duration-300 ${
                isScrolling ? 'animate-spin' : 'group-hover:-translate-y-1'
              }`} />
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Back to top
              </div>
            </button>
          </div>
          
          {/* Fun Stats */}
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
