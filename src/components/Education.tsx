
import { Calendar, GraduationCap, Award, BookOpen, Trophy, Star, ChevronDown, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Education = () => {
  const { isDark } = useTheme();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "FAMT Ratnagiri, Mumbai University",
      duration: "Pursuing (2026)",
      achievements: ["Currently pursuing advanced studies in computer applications", "Focus on emerging technologies"],
      description: "Advanced studies in software development, system design, and emerging technologies.",
      icon: GraduationCap,
      status: "In Progress",
      highlight: "Current",
      color: "purple"
    },
    {
      degree: "Bachelor of Science in Computer Science (BSc CS)",
      school: "ASP College, Devrukh, Mumbai University",
      duration: "2024",
      achievements: ["CGPA: 9.92/10", "Outstanding Academic Performance", "Department Topper"],
      description: "Comprehensive study of computer science fundamentals, programming, and software engineering.",
      icon: Trophy,
      status: "Completed",
      highlight: "Excellent",
      color: "yellow"
    },
    {
      degree: "Higher Secondary Education (HSC - Science)",
      school: "G.K Sapare Jr. College of Science, Devrukh, MSBHSE",
      duration: "2021",
      achievements: ["Percentage: 89.66%", "Science Stream Excellence", "Merit Certificate"],
      description: "Specialized in Science stream with focus on Mathematics, Physics, and Chemistry.",
      icon: BookOpen,
      status: "Completed",
      highlight: "Merit",
      color: "blue"
    },
    {
      degree: "Secondary Education (SSC)",
      school: "M.V. Sonavade High School, MSBSE",
      duration: "2019",
      achievements: ["Percentage: 86%", "Strong Foundation", "All-round Performance"],
      description: "Completed secondary education with excellent academic performance.",
      icon: Star,
      status: "Completed",
      highlight: "Good",
      color: "green"
    }
  ];

  const certifications = [
    {
      name: "Getting Started with Artificial Intelligence",
      provider: "IBM SkillsBuild",
      type: "AI & Machine Learning",
      date: "2025",
      description: "Introduction to AI fundamentals, applications, ethical considerations, and future industry impact through structured learning modules.",
      skills: ["AI Basics", "Real-World Applications", "Ethical AI", "Future of AI"],
      level: "Beginner"
    },
    {
      name: "Introduction to Artificial Intelligence (MDL-211)",
      provider: "IBM SkillsBuild",
      type: "AI & Machine Learning",
      date: "2025",
      description: "Comprehensive training on core AI concepts, intelligent systems, problem-solving techniques, and introductory machine learning insights.",
      skills: ["AI Fundamentals", "Intelligent Systems", "Problem-Solving with AI", "Applied Machine Learning"],
      level: "Intermediate"
    },
    {
      name: "Beginning Python",
      provider: "Infosys Springboard",
      type: "Programming",
      date: "Jun 2025",
      description: "Mastered Python fundamentals including data types, functions, loops, and problem-solving techniques",
      skills: ["Python Basics", "Data Structures", "Algorithms", "Problem Solving"],
      level: "Beginner"
    },
    {
      name: "Creating GitHub Portfolios",
      provider: "LinkedIn",
      type: "Development",
      date: "Jun 2025",
      description: "Built and optimized professional developer portfolios on GitHub with best practices",
      skills: ["GitHub", "Portfolio Design", "Documentation", "Version Control"],
      level: "Intermediate"
    },
    {
      name: "Git & GitHub Bootcamp",
      provider: "LetsUpgrade",
      type: "Version Control",
      date: "Jun 2025",
      description: "Comprehensive training on Git CLI, version control, collaboration workflows, and open source contribution",
      skills: ["Git CLI", "Branching", "Merging", "Collaboration"],
      level: "Intermediate"
    },
    {
      name: "React Native Development",
      provider: "Onwingspan",
      type: "Mobile Development",
      date: "Jun 2025",
      description: "Built cross-platform mobile applications using React Native and JavaScript",
      skills: ["React Native", "Mobile Development", "JavaScript", "Cross-platform"],
      level: "Intermediate"
    },
    {
      name: "UX/UI: Color Theory",
      provider: "Onwingspan",
      type: "Design",
      date: "Jun 2025",
      description: "Applied visual design principles and color theory to improve user interface and experience",
      skills: ["Color Theory", "UI Design", "Visual Design", "User Experience"],
      level: "Beginner"
    },
    {
      name: "Web Development Workshop",
      provider: "DevTown",
      type: "Web Development",
      date: "Nov 2022",
      description: "Comprehensive workshop covering HTML, CSS, JavaScript, responsive design, and introduction to React",
      skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
      level: "Beginner"
    },
    {
      name: "MS-CIT",
      provider: "Microsoft",
      type: "Computer Literacy",
      score: "89%",
      description: "Comprehensive computer literacy certification covering essential digital skills",
      skills: ["Computer Basics", "Microsoft Office", "Digital Literacy", "Internet Skills"],
      level: "Certified"
    }
  ];

  const additionalSkills = [
    { name: "Adobe Photoshop", category: "Photo Editing", level: "Advanced", progress: 85 },
    { name: "Filmora", category: "Video Editing", level: "Intermediate", progress: 70 },
    { name: "Hardware Assembling", category: "Technical", level: "Intermediate", progress: 65 },
    { name: "Instagram Clone Development", category: "Web Development", level: "Beginner", progress: 50 }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "border-purple-500/30 bg-purple-50/50 dark:bg-purple-900/20",
      yellow: "border-yellow-500/30 bg-yellow-50/50 dark:bg-yellow-900/20",
      blue: "border-blue-500/30 bg-blue-50/50 dark:bg-blue-900/20",
      green: "border-green-500/30 bg-green-50/50 dark:bg-green-900/20"
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section id="education" className={`py-20 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Title Section */}
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in-scale' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-purple-600 animate-bounce" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Education & Certifications
            </h2>
            <Award className="w-8 h-8 text-blue-600 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full animate-pulse"></div>
        </div>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-14 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <TabsTrigger value="education" className="text-base font-medium data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all duration-300">
              🎓 Education
            </TabsTrigger>
            <TabsTrigger value="certifications" className="text-base font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300">
              🏆 Certifications
            </TabsTrigger>
            <TabsTrigger value="skills" className="text-base font-medium data-[state=active]:bg-green-600 data-[state=active]:text-white transition-all duration-300">
              💡 Skills
            </TabsTrigger>
          </TabsList>

          {/* Education Tab with Interactive Cards */}
          <TabsContent value="education" className="space-y-6">
            {education.map((edu, index) => {
              const IconComponent = edu.icon;
              const isExpanded = expandedCard === index;
              
              return (
                <Card 
                  key={index} 
                  className={`group hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 border-2 ${getColorClasses(edu.color)} ${
                    isExpanded ? 'scale-105 shadow-2xl' : ''
                  }`}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full bg-gradient-to-br from-${edu.color}-100 to-${edu.color}-200 dark:from-${edu.color}-900/40 dark:to-${edu.color}-800/40 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-6 h-6 text-${edu.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                              {edu.degree}
                            </CardTitle>
                            <Badge variant="outline" className={`bg-${edu.color}-100 text-${edu.color}-700 dark:bg-${edu.color}-900/30 dark:text-${edu.color}-300`}>
                              {edu.highlight}
                            </Badge>
                          </div>
                          <CardDescription className="text-lg font-medium mb-2">
                            {edu.school}
                          </CardDescription>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.duration}</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className={`transition-all duration-500 overflow-hidden ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Key Achievements:</h4>
                      {edu.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-3 animate-slide-in-left" style={{ animationDelay: `${idx * 0.1}s` }}>
                          <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          {/* Enhanced Certifications Tab */}
          <TabsContent value="certifications" className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-900/20">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex gap-2">
                      {cert.date && (
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                          {cert.date}
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {cert.level || cert.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                    {cert.name}
                  </h4>
                  
                  <p className="text-blue-600 font-semibold text-sm mb-1">{cert.provider}</p>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {cert.skills && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  {cert.score && (
                    <div className="mt-4 p-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                      <p className="text-green-700 dark:text-green-400 font-bold text-center flex items-center justify-center gap-2">
                        <Trophy className="w-4 h-4" />
                        Score: {cert.score}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Enhanced Additional Skills Tab */}
          <TabsContent value="skills">
            <Card className="border-0 bg-gradient-to-br from-white to-green-50/30 dark:from-gray-800 dark:to-green-900/20">
              <CardHeader>
                <CardTitle className="text-xl text-green-600 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Additional Skills & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {additionalSkills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="group p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                          <div>
                            <span className="font-semibold text-gray-800 dark:text-white group-hover:text-green-600 transition-colors duration-300">
                              {skill.name}
                            </span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {skill.category}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                          {skill.level}
                        </Badge>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.progress}%`,
                            animation: `slideInLeft 1s ease-out ${index * 0.2}s both`
                          }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-right">
                        {skill.progress}% Proficiency
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Education;
