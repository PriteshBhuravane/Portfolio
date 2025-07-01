
import { Trophy, Award, Users, Code, Star, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";

const Achievements = () => {
  const { isDark } = useTheme();
  
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
    "Elementary Drawing Examination - Grade A",
    "IT-Quiz Competition Participant", 
    "Instagram Clone Bootcamp Completion",
    "Hardware Assembling Workshop",
    "Multiple Web Development Workshops"
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

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
              <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>{stat.label}</div>
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
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${
                      isDark ? 'bg-gray-800' : 'bg-gray-100'
                    } ${achievement.color}`}>
                      <achievement.icon size={24} />
                    </div>
                    <div>
                      <CardTitle className={`text-lg ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}>{achievement.title}</CardTitle>
                      <CardDescription className={
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }>{achievement.date}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{achievement.description}</p>
                </CardContent>
              </Card>
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
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${
                      isDark ? 'bg-gray-800' : 'bg-gray-100'
                    } ${achievement.color}`}>
                      <achievement.icon size={24} />
                    </div>
                    <div>
                      <CardTitle className={`text-lg ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}>{achievement.title}</CardTitle>
                      <CardDescription className={
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }>{achievement.date}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-purple-600">Additional Achievements & Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalAchievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Achievements;
