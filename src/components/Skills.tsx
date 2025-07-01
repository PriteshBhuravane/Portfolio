
import { useTheme } from "@/contexts/ThemeContext";

const Skills = () => {
  const { isDark } = useTheme();
  
  const skills = {
    "Programming Languages": [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 }
    ],
    "Frameworks & Technologies": [
      { name: "React.js", level: 85 },
      { name: "React Native", level: 80 },
      { name: "Flutter", level: 82 },
      { name: "Python Django", level: 78 },
      { name: "Node.js", level: 75 }
    ],
    "Databases & Tools": [
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "Git & GitHub", level: 92 },
      { name: "Linux", level: 75 },
      { name: "Windows", level: 95 }
    ]
  };

  const additionalSkills = [
    "Adobe Photoshop - Photo Editing",
    "Filmora - Video Editing", 
    "Microsoft Word & Excel",
    "Hardware Assembling",
    "REST APIs Integration",
    "Responsive Web Design"
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
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className={`${
              isDark 
                ? 'bg-gray-800 border-gray-700 hover:border-purple-500/50' 
                : 'bg-white border-gray-200 hover:border-purple-500/50'
            } rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border`}>
              <h3 className="text-xl font-bold text-purple-400 mb-6 text-center">{category}</h3>
              <div className="space-y-4">
                {skillList.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>{skill.name}</span>
                      <span className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>{skill.level}%</span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      isDark ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out hover:from-purple-400 hover:to-blue-400"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className={`${
          isDark 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        } rounded-lg p-8 shadow-xl border`}>
          <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">Additional Skills & Tools</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Skills */}
        <div className="mt-16 text-center">
          <h3 className={`text-2xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Personal Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Strong Analytical & Problem-Solving",
              "Adaptability & Quick Learning", 
              "Time Management & Organization",
              "Effective Communication",
              "Team Collaboration",
              "Leadership"
            ].map((skill, index) => (
              <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${
                isDark 
                  ? 'bg-purple-900/30 text-purple-300 border border-purple-700/50' 
                  : 'bg-purple-100 text-purple-700 border border-purple-200'
              } hover:scale-105 transition-transform duration-200`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
