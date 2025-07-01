import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  Code,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import ParticleBackground from "./ParticleBackground";
import { useEffect, useState } from "react";

const Hero = () => {
  const { isDark } = useTheme();
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: true });
  const offsetY = useParallax();
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const titles = [
    "Full Stack Developer",
    "MCA Student",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    if (displayText.length < currentTitle.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [displayText, currentIndex]);

  const handleResumeDownload = () => {
  const link = document.createElement("a");
  link.href = "/PRITESH-SURESH-BHURAVANE-.pdf";
  link.download = "Pritesh_Bhuravane_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section
      ref={elementRef}
      id="home"
      className={`min-h-screen flex items-center justify-center pt-16 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100"
      }`}
      style={{ transform: `translateY(${offsetY * 0.5}px)` }}
    >
      <ParticleBackground />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-96 h-96 ${
            isDark ? "bg-purple-500/20" : "bg-purple-500/10"
          } rounded-full blur-3xl animate-float`}
        ></div>
        <div
          className={`absolute -bottom-40 -left-40 w-96 h-96 ${
            isDark ? "bg-blue-500/20" : "bg-blue-500/10"
          } rounded-full blur-3xl animate-float`}
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 ${
            isDark
              ? "bg-gradient-to-r from-purple-600/10 to-blue-600/10"
              : "bg-gradient-to-r from-purple-400/10 to-blue-400/10"
          } rounded-full blur-2xl animate-pulse`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`${isVisible ? "animate-fade-in-scale" : "opacity-0"}`}>
          {/* Animated Name */}
          <div className="flex items-center justify-center mb-6 group">
            <Sparkles
              className="text-purple-400 mr-2 animate-pulse"
              size={32}
            />
            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              } hover:scale-105 transition-all duration-500 cursor-pointer`}
            >
              <span className="inline-block animate-slide-in-left">
                Pritesh
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x animate-slide-in-right">
                Bhuravane
              </span>
            </h1>
            <Sparkles className="text-blue-400 ml-2 animate-pulse" size={32} />
          </div>

          {/* Typewriter Effect */}
          <div className="h-12 mb-8 flex items-center justify-center">
            <h2
              className={`text-2xl md:text-3xl font-medium flex items-center ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <Code className="mr-2 text-purple-400 animate-bounce" size={28} />
              {displayText}
              <span className="animate-blink ml-1 border-r-2 border-purple-400 h-8"></span>
            </h2>
          </div>

          {/* Animated Description */}
          <div
            className={`${isVisible ? "animate-slide-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.5s" }}
          >
            <p
              className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              🚀 Building modern, responsive web applications with cutting-edge
              technologies.
              <br />
              🎓 MCA Student passionate about creating seamless user experiences
              and robust solutions.
            </p>
          </div>

          {/* Interactive Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${
              isVisible ? "animate-bounce-in" : "opacity-0"
            }`}
            style={{ animationDelay: "1s" }}
          >
            <Button
              onClick={handleResumeDownload}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group neon-border animate-glow"
            >
              <Download className="mr-2 group-hover:animate-bounce" size={20} />
              Download Resume
              <Rocket className="ml-2 group-hover:animate-bounce" size={20} />
            </Button>
            <Button
              variant="outline"
              className={`glass-effect border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg bg-transparent hover:scale-110 transition-all duration-300 hover:shadow-lg neon-border ${
                isDark ? "hover:bg-purple-600" : "hover:bg-purple-600"
              }`}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links with Hover Effects */}
          <div
            className={`flex justify-center space-x-6 mb-12 ${
              isVisible ? "animate-slide-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "1.5s" }}
          >
            {[
              {
                icon: Github,
                href: "https://github.com/PriteshBhuravane",
                color: "hover:text-purple-400",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/pritesh-bhuravane/",
                color: "hover:text-blue-400",
              },
              {
                icon: Mail,
                href: "mailto:bhuravanepritesh@gmail.com",
                color: "hover:text-green-400",
              },
            ].map(({ icon: Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDark ? "text-gray-400" : "text-gray-600"
                } ${color} transition-all duration-300 hover:scale-125 hover:-translate-y-2 group relative`}
              >
                <Icon size={36} className="group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-purple-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
              </a>
            ))}
          </div>

          {/* Animated Scroll Indicator */}
          <div
            className={`animate-bounce cursor-pointer group ${
              isVisible ? "animate-fade-in-scale" : "opacity-0"
            }`}
            style={{ animationDelay: "2s" }}
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="flex flex-col items-center">
              <span
                className={`text-sm mb-2 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                } group-hover:text-purple-400 transition-colors`}
              >
                Scroll Down
              </span>
              <ArrowDown
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300 group-hover:scale-110"
                size={32}
              />
              <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
