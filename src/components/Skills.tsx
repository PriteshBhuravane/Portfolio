import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";
import { Code, Database, Globe, Zap } from "lucide-react";

const Skills = () => {
  const { isDark } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});
  
  const skills = {
    "Programming Languages": {
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 }
      ]
    },
    "Frameworks & Technologies": {
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "React.js", level: 85 },
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 82 },
        { name: "Python Django", level: 78 },
        { name: "Node.js", level: 75 }
      ]
    },
    "Databases & Tools": {
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "MongoDB", level: 78 },
        { name: "Git & GitHub", level: 92 },
        { name: "Linux", level: 75 },
        { name: "Windows", level: 95 }
      ]
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedLevels: { [key: string]: number } = {};
      Object.values(skills).forEach(category => {
        category.skills.forEach(skill => {
          newAnimatedLevels[skill.name] = skill.level;
        });
      });
      setAnimatedLevels(newAnimatedLevels);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const additionalSkills = [
    { name: "Adobe Photoshop - Photo Editing", icon: "🎨", category: "Creative" },
    { name: "Filmora - Video Editing", icon: "🎬", category: "Creative" },
    { name: "Microsoft Word & Excel", icon: "📊", category: "Productivity" },
    { name: "Hardware Assembling", icon: "🔧", category: "Technical" },
    { name: "REST APIs Integration", icon: "🔌", category: "Development" },
    { name: "Responsive Web Design", icon: "📱", category: "Development" }
  ];

  const personalSkills = [
    { name: "Resourceful & Deeply Passionate", icon: "🔥", level: 98 },
    { name: "Unafraid of Challenges", icon: "💪", level: 95 },
    { name: "Strong Analytical & Problem-Solving", icon: "🧠", level: 95 },
    { name: "Adaptability & Quick Learning", icon: "⚡", level: 90 },
    { name: "Time Management & Organization", icon: "⏰", level: 88 },
    { name: "Effective Communication", icon: "💬", level: 85 },
    { name: "Team Collaboration", icon: "🤝", level: 92 },
    { name: "Leadership", icon: "👑", level: 80 },
    { name: "Loyalty Runs Deep", icon: "❤️", level: 100 }

  ];

  return (
    <section id="skills" className={`py-20 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-white to-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
          <p className={`text-lg mt-4 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>Technologies and tools I work with to build amazing applications.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {Object.entries(skills).map(([category, categoryData]) => {
            const Icon = categoryData.icon;
            return (
              <div 
                key={category} 
                className={`group relative overflow-hidden rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border backdrop-blur-sm ${
                  isDark 
                    ? 'bg-gray-800/80 border-gray-700/50 hover:border-gray-600' 
                    : 'bg-white/80 border-gray-200/50 hover:border-gray-300'
                } hover:scale-105 hover:-translate-y-2`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryData.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Header */}
                <div className="relative z-10 flex items-center justify-center mb-8">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${categoryData.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold mb-8 text-center transition-colors duration-300 ${
                  isDark ? 'text-white group-hover:text-gray-100' : 'text-gray-800 group-hover:text-gray-900'
                }`}>{category}</h3>
                
                {/* Skills */}
                <div className="space-y-6 relative z-10">
                  {categoryData.skills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="skill-item"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className={`font-semibold transition-all duration-300 ${
                          hoveredSkill === skill.name 
                            ? `bg-gradient-to-r ${categoryData.color} bg-clip-text text-transparent` 
                            : isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm font-bold px-2 py-1 rounded-full transition-all duration-300 ${
                          hoveredSkill === skill.name 
                            ? `bg-gradient-to-r ${categoryData.color} text-white shadow-lg` 
                            : isDark ? 'text-gray-400 bg-gray-700/50' : 'text-gray-500 bg-gray-100'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className={`w-full rounded-full h-3 overflow-hidden transition-all duration-300 ${
                        isDark ? 'bg-gray-700' : 'bg-gray-200'
                      } ${hoveredSkill === skill.name ? 'shadow-inner' : ''}`}>
                        <div 
                          className={`h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden bg-gradient-to-r ${categoryData.color} ${
                            hoveredSkill === skill.name ? 'shadow-lg animate-pulse' : ''
                          }`}
                          style={{ 
                            width: `${animatedLevels[skill.name] || 0}%`,
                            transform: hoveredSkill === skill.name ? 'scaleY(1.2)' : 'scaleY(1)'
                          }}
                        >
                          {hoveredSkill === skill.name && (
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Additional Skills Section */}
        <div className={`group relative overflow-hidden rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border backdrop-blur-sm mb-12 ${
          isDark 
            ? 'bg-gray-800/80 border-gray-700/50 hover:border-purple-500/50' 
            : 'bg-white/80 border-gray-200/50 hover:border-purple-500/50'
        }`}>
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
              isDark ? 'text-white group-hover:text-gray-100' : 'text-gray-800 group-hover:text-gray-900'
            }`}>Additional Skills & Tools</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`group/item relative overflow-hidden rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer ${
                    isDark 
                      ? 'bg-gray-700/50 hover:bg-gray-700/80 border border-gray-600/50 hover:border-purple-500/50' 
                      : 'bg-gray-50/50 hover:bg-gray-50/80 border border-gray-200/50 hover:border-purple-500/50'
                  } shadow-md hover:shadow-lg`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Enhanced Category Badge */}
                  <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold shadow-md transition-all duration-300 group-hover/item:scale-110 ${
                    skill.category === 'Creative' ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white' :
                    skill.category === 'Productivity' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' :
                    skill.category === 'Technical' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' :
                    'bg-gradient-to-r from-purple-500 to-violet-500 text-white'
                  }`}>
                    {skill.category}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl transition-transform duration-300 group-hover/item:scale-110">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <span className={`font-semibold transition-colors duration-300 ${
                        isDark ? 'text-gray-300 group-hover/item:text-white' : 'text-gray-700 group-hover/item:text-gray-900'
                      }`}>
                        {skill.name}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 group-hover/item:w-full transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Personal Skills */}
        <div className={`group relative overflow-hidden rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border backdrop-blur-sm ${
          isDark 
            ? 'bg-gray-800/80 border-gray-700/50 hover:border-green-500/50' 
            : 'bg-white/80 border-gray-200/50 hover:border-green-500/50'
        }`}>
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className={`text-3xl font-bold mb-12 text-center transition-colors duration-300 ${
              isDark ? 'text-white group-hover:text-gray-100' : 'text-gray-800 group-hover:text-gray-900'
            }`}>Personal Skills</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`group/skill relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                    isDark 
                      ? 'bg-gray-700/50 hover:bg-gray-700/80 border border-gray-600/50 hover:border-green-500/50' 
                      : 'bg-gray-50/50 hover:bg-gray-50/80 border border-gray-200/50 hover:border-green-500/50'
                  } shadow-md hover:shadow-lg`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-3xl transition-transform duration-300 group-hover/skill:scale-110">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <span className={`font-bold text-lg transition-colors duration-300 ${
                        isDark ? 'text-gray-300 group-hover/skill:text-white' : 'text-gray-700 group-hover/skill:text-gray-900'
                      }`}>
                        {skill.name}
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>Proficiency</span>
                      <span className={`text-sm font-bold px-2 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className={`w-full rounded-full h-2 overflow-hidden ${
                      isDark ? 'bg-gray-600' : 'bg-gray-200'
                    }`}>
                      <div 
                        className="h-2 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-green-500 to-emerald-500 group-hover/skill:shadow-lg"
                        style={{ 
                          width: `${animatedLevels[skill.name] || skill.level}%`,
                          transform: 'scaleY(1)'
                        }}
                      >
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 group-hover/skill:w-full transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
