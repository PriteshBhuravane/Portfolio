
import { useTheme } from "@/contexts/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User, Target, Heart, MapPin, Phone, Mail, Globe } from "lucide-react";

const About = () => {
  const { isDark } = useTheme();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({ triggerOnce: true });
  
  return (
    <section id="about" className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-gray-800' : 'bg-gray-50'
    } transition-colors duration-300`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 right-10 w-72 h-72 ${
          isDark ? 'bg-purple-500/5' : 'bg-purple-500/3'
        } rounded-full blur-3xl animate-float`}></div>
        <div className={`absolute bottom-20 left-10 w-64 h-64 ${
          isDark ? 'bg-blue-500/5' : 'bg-blue-500/3'
        } rounded-full blur-3xl animate-float`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className={`text-center mb-16 ${
          titleVisible ? 'animate-fade-in-scale' : 'opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-4">
            <User className="text-purple-400 mr-3 animate-pulse" size={32} />
            <h2 className={`text-4xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>About Me</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Animated Avatar */}
          <div ref={imageRef} className={`group ${
            imageVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}>
            <div className="relative mx-auto w-fit">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 group-hover:rotate-6 animate-glow">
                <span className="animate-pulse">PB</span>
              </div>
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center animate-bounce">
                <Target className="text-white" size={20} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                <Heart className="text-white" size={20} />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div ref={contentRef} className={`space-y-6 ${
            contentVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}>
            {/* Career Objective Card */}
            <div className={`${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-white/50 border-gray-300'
            } p-6 rounded-xl border hover:scale-105 transition-all duration-300 hover:shadow-lg glass-effect neon-border`}>
              <div className="flex items-center mb-3">
                <Target className="text-purple-400 mr-2" size={24} />
                <h3 className="text-xl font-semibold text-purple-400">Career Objective</h3>
              </div>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                To present and enhance my creativity, skills, working capabilities and to serve my organization 
                in best possible way with sheer determination, hard work and commitment.
              </p>
            </div>
            
            {/* About Content */}
            <div className="space-y-4">
              <p className={`text-lg leading-relaxed hover:scale-105 transition-transform duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                🎓 Hello! I'm <span className="text-purple-400 font-semibold">Pritesh Suresh Bhuravane</span>, currently pursuing 
                <span className="text-blue-400 font-semibold"> Master of Computer Applications (MCA)</span> at FAMT Ratnagiri, Mumbai University.
              </p>
              
              <p className={`text-lg leading-relaxed hover:scale-105 transition-transform duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                💡 With an outstanding academic record of <span className="text-green-400 font-bold">9.92 CGPA</span> in BSc Computer Science, 
                I've developed expertise in Java, Python, React.js, Flutter, and various web technologies.
              </p>

              <p className={`text-lg leading-relaxed hover:scale-105 transition-transform duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                🏆 Beyond coding, I'm passionate about sports, particularly <span className="text-yellow-400 font-semibold">Kho-Kho</span>, 
                where I've represented at state and inter-zonal levels. I also enjoy photography, bike riding, and music.
              </p>
            </div>

            {/* Personal Details Card */}
            <div className={`${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-white/50 border-gray-300'
            } p-6 rounded-xl border hover:scale-105 transition-all duration-300 hover:shadow-lg glass-effect neon-border`}>
              <div className="flex items-center mb-4">
                <User className="text-purple-400 mr-2" size={24} />
                <h3 className="text-xl font-semibold text-purple-400">Personal Details</h3>
              </div>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex items-center hover:text-purple-400 transition-colors">
                  <MapPin className="mr-2 text-purple-400" size={16} />
                  <span><strong>Location:</strong> Ratnagiri, Maharashtra</span>
                </div>
                <div className="flex items-center hover:text-purple-400 transition-colors">
                  <Globe className="mr-2 text-blue-400" size={16} />
                  <span><strong>Languages:</strong> English, Marathi,Hindi</span>
                </div>
                <div className="flex items-center hover:text-purple-400 transition-colors">
                  <Mail className="mr-2 text-green-400" size={16} />
                  <span><strong>Email:</strong> bhuravanepritesh@gmail.com</span>
                </div>
                <div className="flex items-center hover:text-purple-400 transition-colors">
                  <Phone className="mr-2 text-yellow-400" size={16} />
                  <span><strong>Phone:</strong> 9405059038</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
