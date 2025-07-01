
import { useState, useEffect } from "react";
import { Menu, X, Home, User, GraduationCap, FolderOpen, Code, Trophy, MessageCircle } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "education", "projects", "skills", "achievements", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Achievements", href: "#achievements", icon: Trophy },
    { name: "Contact", href: "#contact", icon: MessageCircle },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? `${isDark ? 'bg-gray-900/98' : 'bg-white/98'} backdrop-blur-xl shadow-2xl border-b ${
              isDark ? 'border-gray-700/50' : 'border-gray-200/50'
            }`
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with enhanced animation */}
          <div className={`text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent hover:scale-110 transition-all duration-300 cursor-pointer ${
            scrolled ? 'animate-pulse' : ''
          }`}>
            <span className="relative">
              Pritesh Bhuravane
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
            </span>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 flex items-center space-x-2 px-4 py-2.5 rounded-xl group ${
                    isActive
                      ? `${isDark ? 'text-white bg-purple-600/20 shadow-lg shadow-purple-500/25' : 'text-purple-700 bg-purple-100/80 shadow-lg shadow-purple-500/25'} border border-purple-500/30`
                      : `${isDark ? 'text-gray-300 hover:text-white hover:bg-purple-500/10' : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50'} hover:scale-105`
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon size={18} className={`transition-all duration-300 ${isActive ? 'animate-bounce' : 'group-hover:scale-110'}`} />
                  <span className="relative">
                    {item.name}
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    )}
                  </span>
                  {!isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </a>
              );
            })}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-purple-700'} transition-all duration-300 p-2.5 rounded-xl hover:bg-purple-500/10 hover:scale-110`}
            >
              {isOpen ? (
                <X size={24} className="animate-spin" />
              ) : (
                <Menu size={24} className="hover:animate-pulse" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-in-up">
            <div className={`px-2 pt-2 pb-3 space-y-2 ${
              isDark ? 'bg-gray-800/95' : 'bg-white/95'
            } backdrop-blur-xl rounded-2xl shadow-2xl border ${
              isDark ? 'border-gray-700/50' : 'border-gray-200/50'
            }`}>
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? `${isDark ? 'text-white bg-purple-600/20 shadow-lg shadow-purple-500/25' : 'text-purple-700 bg-purple-100/80 shadow-lg shadow-purple-500/25'} border border-purple-500/30`
                        : `${isDark ? 'text-gray-300 hover:text-white hover:bg-purple-500/10' : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50'} hover:scale-105`
                    }`}
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon size={20} className={`transition-all duration-300 ${isActive ? 'animate-bounce' : 'group-hover:scale-110'}`} />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
