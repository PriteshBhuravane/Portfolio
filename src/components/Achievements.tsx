import { Trophy, Award, Users, Code, Star, Target, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

const Achievements = () => {
  const { isDark } = useTheme();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [animatedStats, setAnimatedStats] = useState<{ [key: string]: number }>({});
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        "9.92": 9.92,
        "89%": 89,
        "6+": 6,
        "7+": 7
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  const achievements = [
    {
      icon: Trophy,
      title: "Tech Carnival 2023 - PPT Competition Head",
      description: "Led and organized the PowerPoint presentation competition at Tech Carnival 2023, showcasing leadership and organizational skills",
      date: "2023",
      color: "text-yellow-600"
    },
    {
      icon: Award,
      title: "Outstanding Academic Performance",
      description: "Achieved 9.92 CGPA in BSc Computer Science, demonstrating consistent academic excellence",
      date: "2024",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Project Work & Industrial Training",
      description: "Successfully completed multiple projects using React, Flutter & Django, gaining practical industry experience",
      date: "2022-2024",
      color: "text-green-600"
    },
    {
      icon: Code,
      title: "Multiple Certifications Achieved",
      description: "Completed various technical certifications including React Native, Python, Git & GitHub, and MS-CIT with 89% score",
      date: "2022-2025",
      color: "text-purple-600"
    }
  ];

  const sportsAchievements = [
    {
      icon: Star,
      title: "Senior State Kho-Kho Competition",
      description: "Selected for Senior State Kho-Kho Competition 2023-24 representing Ratnagiri District",
      date: "2023-24",
      color: "text-orange-600"
    },
    {
      icon: Target,
      title: "MU Inter Zonal Men Kho-Kho",
      description: "Represented Mumbai University Inter Zonal Men Kho-Kho 2023-24 for Kokan Zone",
      date: "2023-24",
      color: "text-red-600"
    }
  ];

  const stats = [
    { number: "9.92", label: "CGPA in BSc CS" },
    { number: "89%", label: "MS-CIT Score" },
    { number: "6+", label: "Major Projects" },
    { number: "7+", label: "Certifications" }
  ];

  const additionalAchievements = [
    { name: "Elementary Drawing Examination - Grade A", icon: "🎨", category: "Creative" },
    { name: "IT-Quiz Competition Participant", icon: "🧠", category: "Technical" },
    { name: "Instagram Clone Bootcamp Completion", icon: "📱", category: "Development" },
    { name: "Hardware Assembling Workshop", icon: "🔧", category: "Technical" },
    { name: "Multiple Web Development Workshops", icon: "💻", category: "Development" }
  ];

  return (
    <section id="achievements" className={`py-20 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-white to-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>Achievements & Activities</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          <p className={`text-lg mt-4 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>Academic excellence, technical achievements, and sports accomplishments.</p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                isDark 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-purple-500/50' 
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-purple-500/50'
              } shadow-lg hover:shadow-2xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Number with animation */}
              <div className="relative z-10 text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className={`relative z-10 font-medium transition-colors duration-300 ${
                isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-800'
              }`}>
                {stat.label}
              </div>
              
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Academic & Technical Achievements */}
        <div className="mb-12">
          <h3 className={`text-2xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>Academic & Technical Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-purple-500/50' 
                    : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-purple-500/50'
                } shadow-lg hover:shadow-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(`achievement-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Header */}
                <div className="relative z-10 flex items-center space-x-6 mb-6">
                  <div className={`p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
                    hoveredCard === `achievement-${index}` 
                      ? 'bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg' 
                      : isDark ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <achievement.icon 
                      size={28} 
                      className={hoveredCard === `achievement-${index}` ? 'text-white' : achievement.color}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`text-xl font-bold transition-colors duration-300 ${
                      isDark ? 'text-white group-hover:text-gray-100' : 'text-gray-800 group-hover:text-gray-900'
                    }`}>
                      {achievement.title}
                    </h4>
                    
                    <div className="flex items-center space-x-2 mt-2">
                      <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={`text-sm font-medium ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                  }`}>
                    {achievement.description}
                  </p>
                </div>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Sports Achievements */}
        <div className="mb-12">
          <h3 className={`text-2xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>Sports Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {sportsAchievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-orange-500/50' 
                    : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-orange-500/50'
                } shadow-lg hover:shadow-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(`sports-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Header */}
                <div className="relative z-10 flex items-center space-x-6 mb-6">
                  <div className={`p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
                    hoveredCard === `sports-${index}` 
                      ? 'bg-gradient-to-br from-orange-500 to-red-500 shadow-lg' 
                      : isDark ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <achievement.icon 
                      size={28} 
                      className={hoveredCard === `sports-${index}` ? 'text-white' : achievement.color}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`text-xl font-bold transition-colors duration-300 ${
                      isDark ? 'text-white group-hover:text-gray-100' : 'text-gray-800 group-hover:text-gray-900'
                    }`}>
                      {achievement.title}
                    </h4>
                    
                    <div className="flex items-center space-x-2 mt-2">
                      <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={`text-sm font-medium ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                  }`}>
                    {achievement.description}
                  </p>
                </div>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Additional Achievements */}
        <div className={`group relative overflow-hidden rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border backdrop-blur-sm ${
          isDark 
            ? 'bg-gray-800/80 border-gray-700/50 hover:border-cyan-500/50' 
            : 'bg-white/80 border-gray-200/50 hover:border-cyan-500/50'
        }`}>
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
              isDark ? 'text-white group-hover:text-gray-100' : 'text-gray-800 group-hover:text-gray-900'
            }`}>Additional Achievements & Activities</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalAchievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`group/item relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer ${
                    isDark 
                      ? 'bg-gray-700/50 hover:bg-gray-700/80 border border-gray-600/50 hover:border-cyan-500/50' 
                      : 'bg-gray-50/50 hover:bg-gray-50/80 border border-gray-200/50 hover:border-cyan-500/50'
                  } shadow-md hover:shadow-lg`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Enhanced Category Badge */}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold shadow-md transition-all duration-300 group-hover/item:scale-110 ${
                    achievement.category === 'Creative' ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white' :
                    achievement.category === 'Technical' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' :
                    'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                  }`}>
                    {achievement.category}
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl transition-transform duration-300 group-hover/item:scale-110">
                      {achievement.icon}
                    </div>
                    <div className="flex-1 pt-2">
                      <span className={`font-semibold transition-colors duration-300 ${
                        isDark ? 'text-gray-300 group-hover/item:text-white' : 'text-gray-700 group-hover/item:text-gray-900'
                      }`}>
                        {achievement.name}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover/item:w-full transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
