import { Github, ExternalLink, Star, Calendar, Code2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { isDark } = useTheme();
  const { elementRef: titleRef, isVisible: titleVisible } =
    useScrollAnimation();

  const projects = [
    {
      title: "Pet Adoption App",
      description:
        "React Native mobile application for seamless pet adoption, featuring user authentication, direct messaging, and admin management. MCA Mini Project showcasing cross-platform mobile development skills.",
      technologies: [
        "React Native",
        "JavaScript",
        "Firebase",
        "User Authentication",
      ],
      category: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=300&fit=crop",
      featured: true,
      status: "Completed"
    },
    {
      title: "ShopMatcher Application",
      description:
        "Flutter-based mobile app that integrates multiple Indian e-commerce platforms, allowing users to compare and purchase products efficiently. Built during SEM VI project.",
      technologies: ["Flutter", "Dart", "API Integration", "E-commerce"],
      category: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      featured: true,
      status: "Completed",
      github: "https://github.com/PriteshBhuravane/ShopMatcher.git",
    },
    {
      title: "E-Learning Website",
      description:
        "Python Django-powered online learning platform with study material management, student records, and secure payment integration. Full-stack web development project from SEM V.",
      technologies: ["Python", "Django", "MySQL", "Payment Integration"],
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
      featured: false,
      status: "Completed",
      github: "https://github.com/PriteshBhuravane/E-Learning-Website.git",
      demo: "https://e-learning-5uto.onrender.com",
    },
    {
      title: "Code Editor - React Playground",
      description:
        "Live code editor with HTML, CSS, and JS preview, Prettier formatting, ZIP export, shareable links, starter templates, and dark mode support. Advanced React.js project.",
      technologies: [
        "React.js",
        "JavaScript",
        "Code Editor",
        "Real-time Preview",
      ],
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      featured: true,
      status: "Completed",
      github: "https://github.com/PriteshBhuravane/Code-Editor.git",
      demo: "https://code-editor-9wsg.vercel.app/",
    },
    {
      title: "GitHub Explorer",
      description:
        "Responsive web app to search and explore GitHub user profiles with real-time data fetching, displaying repositories, followers, activity stats, and rate-limit tracking using GitHub API.",
      technologies: ["React.js", "GitHub API", "REST API", "Responsive Design"],
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&h=300&fit=crop",
      featured: false,
      status: "Completed",
      github: "https://github.com/PriteshBhuravane/GitHub_Explorer.git",
      demo: "https://git-hub-explorer-zeta.vercel.app/",
    },
    {
      title: "NewsPortal - React Platform",
      description:
        "React.js-powered dynamic news portal that fetches and displays real-time news updates using REST APIs. Features responsive design and modern UI.",
      technologies: ["React.js", "REST API", "News API", "Responsive Design"],
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop",
      featured: false,
      status: "Completed",
      github: "https://github.com/PriteshBhuravane/NewsPortal.git",
      demo: "https://news-portal-rho-ecru.vercel.app/",
    },
  ];

  const miniProjects = [
    {
      title: "Home Fitness App",
      description:
        "Interactive mobile application for home workout solutions with exercise tracking and routines.",
      technologies: ["Mobile App", "UI/UX Design"],
      icon: "🏋️",
    },
    {
      title: "Hotel Website",
      description:
        "Responsive website for hotel booking and reservations with modern design.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      icon: "🏨",
    },
    {
      title: "Instagram Clone",
      description:
        "Recreation of Instagram interface using HTML & CSS during DevTown bootcamp.",
      technologies: ["HTML", "CSS", "UI Clone"],
      icon: "📸",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Title Section */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "animate-fade-in-scale" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Star className="w-8 h-8 text-blue-600" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A showcase of my academic and personal projects demonstrating
            various technologies and innovative solutions.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-purple-600" />
            <h3
              className={`text-2xl font-bold ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Major Projects
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-0 ${
                  project.featured ? "ring-2 ring-purple-500/20" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-purple-600/90 text-white border-0 shadow-lg">
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <Badge
                        variant="secondary"
                        className="bg-yellow-500/90 text-white border-0 shadow-lg"
                      >
                        ⭐ Featured
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="outline"
                      className="bg-green-500/90 text-white border-0 shadow-lg"
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription
                    className={`${
                      isDark ? "text-gray-300" : "text-gray-600"
                    } leading-relaxed`}
                  >
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-purple-50 hover:border-purple-300 transition-all duration-300"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </Button>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mini Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-6 h-6 text-blue-600" />
            <h3
              className={`text-2xl font-bold ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Mini Projects & Workshops
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {miniProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-800 dark:to-purple-900/20"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-white group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
