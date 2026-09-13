import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  FolderOpen,
  Code,
  GraduationCap,
  Trophy,
  MessageCircle,
  FileText,
  Sparkles,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import ResumeModal from "./ResumeModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "education",
        "achievements",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Achievements", href: "#achievements", icon: Trophy },
    { name: "Contact", href: "#contact", icon: MessageCircle },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/40"
              : "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-lg shadow-slate-200/40"
            : "bg-transparent"
        }`}
      >
        {/* Reading Scroll Progress Bar */}
        <div
          className="h-[2.5px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white font-extrabold text-base shadow-md group-hover:scale-105 transition-transform">
                PB
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Pritesh Bhuravane
                </span>
                <span className="text-[10px] text-slate-400 font-mono -mt-1">
                  DevOps • Backend
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative text-xs font-semibold px-3 py-2 rounded-xl transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? isDark
                          ? "text-white bg-purple-500/15 border border-purple-500/30 shadow-sm"
                          : "text-purple-700 bg-purple-100/70 border border-purple-300 shadow-sm"
                        : isDark
                        ? "text-slate-300 hover:text-white hover:bg-slate-800/60"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Action Buttons: Resume & Contact CTA */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="px-3.5 py-1.5 rounded-xl border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 hover:scale-105 cursor-pointer shadow-sm"
              >
                <FileText size={14} />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 hover:scale-105 shadow-md shadow-purple-500/20"
              >
                <Sparkles size={13} />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-xl border transition-colors ${
                  isDark
                    ? "border-slate-800 text-slate-200 hover:bg-slate-800"
                    : "border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Navigation */}
          {isOpen && (
            <div className="lg:hidden pb-4 pt-2 animate-fade-in-scale">
              <div
                className={`p-3 rounded-2xl border shadow-2xl space-y-1 ${
                  isDark
                    ? "bg-slate-900/95 border-slate-800 text-slate-100"
                    : "bg-white/95 border-slate-200 text-slate-900"
                }`}
              >
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-colors ${
                        isActive
                          ? "bg-purple-600 text-white"
                          : isDark
                          ? "hover:bg-slate-800 text-slate-300"
                          : "hover:bg-slate-100 text-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon size={16} />
                        <span>{item.name}</span>
                      </div>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      )}
                    </a>
                  );
                })}

                <div className="pt-2 border-t border-slate-200/20">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsResumeModalOpen(true);
                    }}
                    className="w-full py-2.5 rounded-xl bg-purple-600 text-white text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <FileText size={15} />
                    <span>View Resume Modal</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </>
  );
};

export default Navigation;
