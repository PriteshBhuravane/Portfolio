import { ArrowUp, Mail, MapPin, Phone, Github, Linkedin, Instagram, Heart } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const quickLinks = [
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Technical Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/PriteshBhuravane", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pritesh-bhuravane/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/pritesh_bhuravane__?igsh=N2M3ZHR2cnJlNmNk", label: "Instagram" },
    { icon: Mail, href: "mailto:bhuravanepritesh@gmail.com", label: "Email" },
  ];

  return (
    <footer
      className={`py-16 border-t relative overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-slate-950 border-slate-800 text-slate-200"
          : "bg-slate-900 border-slate-800 text-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Bio */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Pritesh Bhuravane
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Software Developer & DevOps Executive at Pleximus Inc. MCA graduate with 8.86 CGPA (3rd Rank) from FAMT Ratnagiri. Dedicated to scalable backend systems, server automation, and reliable cloud deployments.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-amber-400 flex-shrink-0" />
                <span>Ratnagiri, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:bhuravanepritesh@gmail.com" className="hover:text-purple-400">
                  bhuravanepritesh@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400 flex-shrink-0" />
                <a href="tel:9405059038" className="hover:text-purple-400">
                  +91 9405059038
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-purple-400 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all duration-200 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <p className="text-[11px] text-slate-500">
              Open to DevOps, Backend Engineering, and Full-Stack opportunities.
            </p>
          </div>
        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Pritesh Bhuravane. Crafted with</span>
            <Heart size={14} className="text-rose-500 fill-rose-500 animate-pulse" />
            <span>in Maharashtra, India</span>
          </div>

          <button
            onClick={scrollToTop}
            disabled={isScrolling}
            className="p-3 rounded-2xl bg-slate-800/80 hover:bg-purple-600 text-slate-300 hover:text-white border border-slate-700 transition-all duration-200 hover:scale-110 flex items-center gap-2"
            title="Back to top"
          >
            <span className="text-[11px] font-semibold">Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
