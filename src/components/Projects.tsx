import { useState, useMemo } from "react";
import {
  ExternalLink,
  Github,
  Search,
  Layers,
  Sparkles,
  Code,
  Smartphone,
  Server,
  Brain,
  X,
  CheckCircle2,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { triggerConfetti } from "@/utils/confetti";
import TiltCard from "./TiltCard";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "web" | "backend" | "mobile" | "ai";
  categoryLabel: string;
  description: string;
  fullDetails: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: string;
}

const projectsData: Project[] = [
  {
    id: "code-editor",
    title: "Code Editor",
    subtitle: "React-Based Interactive Code Playground",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description:
      "Browser-based interactive code sandbox supporting real-time HTML, CSS, and JavaScript rendering, syntax formatting, ZIP download, and shareable links.",
    fullDetails: [
      "Real-time split-screen rendering of HTML/CSS/JavaScript with debounced compilation.",
      "Automated code formatting powered by Prettier integration.",
      "Instant ZIP bundle export allowing developers to take project files offline.",
      "URL-encoded shareable state to share code snippets across developers without a server backend.",
      "Custom themes with Dark/Light modes and preloaded starter templates (HTML5, Canvas, Animation).",
    ],
    techStack: ["React.js", "JavaScript", "HTML5", "CSS3", "Prettier", "Vercel"],
    demoUrl: "https://code-editor-9wsg.vercel.app/",
    githubUrl: "https://github.com/PriteshBhuravane/Code-Editor.git",
    featured: true,
    metrics: "Real-Time Preview • ZIP Export",
  },
  {
    id: "github-explorer",
    title: "GitHub Explorer",
    subtitle: "Developer Analytics & Profile Viewer",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description:
      "Responsive GitHub profile intelligence app fetching developer statistics, top repositories, language distributions, and rate-limit diagnostics via GitHub REST API.",
    fullDetails: [
      "Dynamic search connecting with GitHub's REST API with error handling and rate-limit monitoring.",
      "Repository sorting by stars, forks, and recently updated commits.",
      "Follower/following graph exploration with interactive card navigation.",
      "Visual language breakdown badges showing tech stack affinity.",
    ],
    techStack: ["React.js", "JavaScript", "GitHub REST API", "Tailwind CSS", "Vercel"],
    demoUrl: "https://git-hub-explorer-zeta.vercel.app/",
    githubUrl: "https://github.com/PriteshBhuravane/GitHub_Explorer.git",
    featured: true,
    metrics: "REST API • Real-time Stats",
  },
  {
    id: "news-portal",
    title: "NewsPortal",
    subtitle: "React-Based Real-Time News Platform",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description:
      "Dynamic news discovery application fetching real-time global news across Technology, Business, Sports, and Science via RESTful news APIs.",
    fullDetails: [
      "Categorized live feed aggregating global headlines with instant category filtering.",
      "Responsive layout optimized for high-readability on desktop and mobile screens.",
      "Search filter for discovering breaking headlines and specialized tech articles.",
      "Clean error boundaries and fallback imagery for missing news thumbnails.",
    ],
    techStack: ["React.js", "REST APIs", "JavaScript", "CSS3", "Vercel"],
    demoUrl: "https://news-portal-rho-ecru.vercel.app/",
    githubUrl: "https://github.com/PriteshBhuravane/NewsPortal.git",
    metrics: "Live Feed • Multi-Category",
  },
  {
    id: "e-learning",
    title: "E-Learning Platform",
    subtitle: "Python, Django & Razorpay Educational Portal",
    category: "backend",
    categoryLabel: "Backend & Full-Stack",
    description:
      "Robust course management portal built with Python Django featuring automated Razorpay payment gateway integration, course enrollments, video player, and admin panel.",
    fullDetails: [
      "End-to-end payment capture using Razorpay Webhooks and signature verification.",
      "Role-Based Access Control (RBAC) separating students, instructors, and system administrators.",
      "Course curriculum management with progress tracking and completion certificates.",
      "Relational database schema modeled in MySQL with strict transaction integrity.",
    ],
    techStack: ["Python", "Django", "MySQL", "Razorpay API", "Bootstrap", "Git"],
    githubUrl: "https://github.com/PriteshBhuravane/Django-Elearning-Portal.git",
    featured: true,
    metrics: "Payment Gateway • Admin Dashboard",
  },
  {
    id: "pet-adoption",
    title: "Pet Adoption App",
    subtitle: "React Native & Firebase Mobile App",
    category: "mobile",
    categoryLabel: "Mobile Apps",
    description:
      "MCA Mini Project mobile application connecting pet adopters with rescue shelters featuring real-time messaging, shelter listings, authentication, and filterable catalogs.",
    fullDetails: [
      "Cross-platform mobile client built with React Native for Android devices.",
      "Firebase Firestore realtime database synchronization for pet catalog and shelter updates.",
      "Integrated real-time chat between potential adopters and verified animal shelters.",
      "Geolocation-aware shelter discovery allowing users to adopt locally.",
    ],
    techStack: ["React Native", "Firebase Firestore", "Firebase Auth", "JavaScript", "Android SDK"],
    githubUrl: "https://github.com/PriteshBhuravane/Pet-Adoption-App.git",
    featured: true,
    metrics: "Realtime Chat • Firebase Backend",
  },
  {
    id: "skinfusion-net",
    title: "SkinFusion-Net Research",
    subtitle: "Deep Learning Skin Lesion Classification (IJSRST)",
    category: "ai",
    categoryLabel: "AI & Research",
    description:
      "Published research project in IJSRST journal introducing a hybrid deep neural network model integrating customized CNNs and MobileNet for early dermoscopy image classification.",
    fullDetails: [
      "Designed hybrid feature extraction combining lightweight MobileNet layers with custom deep convolution filters.",
      "Achieved superior accuracy on dermoscopy benchmark datasets for melanoma and benign lesion classification.",
      "Published peer-reviewed research paper in International Journal of Scientific Research in Science and Technology (IJSRST, 2026).",
      "Evaluated precision, recall, F1-score, and AUC-ROC curves under class imbalance constraints.",
    ],
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "IJSRST Journal"],
    githubUrl: "https://github.com/PriteshBhuravane/SkinFusion-Net-Research.git",
    featured: true,
    metrics: "IJSRST Published • Deep Learning",
  },
  {
    id: "home-fitness",
    title: "Home Fitness & Workout Tracker",
    subtitle: "Interactive Wellness & Exercise Guide",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description:
      "Interactive workout planning web app featuring guided exercise timers, category splits (Cardio, Strength, HIIT), progress logging, and responsive audio cues.",
    fullDetails: [
      "Visual timers with rest periods and sound cues for circuit training routines.",
      "Client-side workout history tracking with exercise rep and set calculators.",
      "Adaptive responsive design allowing users to follow along on mobile smartphones during workouts.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "LocalStorage API"],
    githubUrl: "https://github.com/PriteshBhuravane/Home-Fitness-App.git",
    metrics: "Timers • Workout Splits",
  },
  {
    id: "hotel-website",
    title: "Grand Horizon Hotel",
    subtitle: "Hospitality & Room Reservation Showcase",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description:
      "Modern hospitality web platform featuring room galleries, amenities tour, date availability calendar, and customer inquiry workflows.",
    fullDetails: [
      "Dynamic room catalog with amenity filters (Sea View, Deluxe, Suite, Executive).",
      "Interactive photo lightbox showcasing resort grounds and dining options.",
      "Contact and booking inquiry form with frontend input sanitization.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/PriteshBhuravane/Hotel-Website.git",
    metrics: "Interactive Gallery • Booking Form",
  },
  {
    id: "instagram-clone",
    title: "Instagram UI Clone",
    subtitle: "Pixel-Perfect Frontend Social Replica",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description:
      "Pixel-perfect replication of Instagram web client with interactive stories carousel, feed post interactions, like hearts, comments view, and explore grid.",
    fullDetails: [
      "Complex CSS grid and flexbox layout replicating modern Instagram web UI.",
      "Interactive story reels tray with gradient ring indicators.",
      "Double-tap like heart animation and interactive post interaction bar.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/PriteshBhuravane/Instagram-Clone.git",
    metrics: "Pixel-Perfect UI • CSS Animations",
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "web", label: "Web & Full-Stack", icon: Code },
  { id: "backend", label: "Backend & APIs", icon: Server },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "ai", label: "AI & Research", icon: Brain },
];

const Projects = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [starredProjects, setStarredProjects] = useState<Record<string, boolean>>({
    "code-editor": true,
    "skinfusion-net": true,
  });

  const toggleStar = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setStarredProjects((prev) => {
      const nextState = !prev[projectId];
      if (nextState) triggerConfetti();
      return { ...prev, [projectId]: nextState };
    });
  };

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="projects"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            Interactive Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Production web platforms, mobile apps, published deep learning research, and cloud utilities.
          </p>
        </motion.div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              const count =
                cat.id === "all"
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-[1.02]"
                      : isDark
                      ? "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-purple-300 shadow-sm"
                  }`}
                >
                  <Icon size={14} />
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : isDark
                        ? "bg-slate-800 text-slate-400"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search by name, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 text-xs rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                isDark
                  ? "bg-slate-900/90 border-slate-800 text-slate-100 placeholder-slate-500"
                  : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm"
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid with Motion */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"> 
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isStarred = starredProjects[project.id];
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <TiltCard
                    tiltDegree={8}
                    scale={1.02}
                    className={`h-full rounded-3xl border transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-lg ${
                      isDark
                        ? "bg-slate-900/80 border-slate-800 hover:border-purple-500/50"
                        : "bg-white border-slate-200/90 hover:border-purple-400 shadow-sm"
                    }`}
                  >
                    {/* Card Header & Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
                          {project.categoryLabel}
                        </span>
                        <div className="flex items-center gap-2">
                          {project.metrics && (
                            <span
                              className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                                isDark
                                  ? "bg-slate-800 text-slate-300 border-slate-700"
                                  : "bg-slate-100 text-slate-700 border-slate-200"
                              }`}
                            >
                              {project.metrics}
                            </span>
                          )}
                          <button
                            onClick={(e) => toggleStar(project.id, e)}
                            className={`p-1 rounded-lg transition-colors cursor-pointer ${
                              isStarred
                                ? "text-amber-400 hover:text-amber-300"
                                : "text-slate-500 hover:text-slate-300"
                            }`}
                            title={isStarred ? "Starred project!" : "Star this project"}
                          >
                            <Star size={15} fill={isStarred ? "currentColor" : "none"} />
                          </button>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400 mb-3">
                        {project.subtitle}
                      </p>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3 ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className={`text-[11px] px-2.5 py-1 rounded-lg border font-medium ${
                              isDark
                                ? "bg-slate-800/80 border-slate-700/80 text-slate-300"
                                : "bg-slate-50 border-slate-200 text-slate-700"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div
                      className={`p-4 px-6 border-t flex items-center justify-between gap-2 ${
                        isDark
                          ? "border-slate-800/80 bg-slate-900/40"
                          : "border-slate-100 bg-slate-50/50"
                      }`}
                    >
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span>Quick View</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-xl border transition-all duration-200 hover:scale-105 ${
                              isDark
                                ? "border-slate-700 bg-slate-800 text-slate-300 hover:text-white"
                                : "border-slate-200 bg-white text-slate-700 hover:text-purple-600 shadow-sm"
                            }`}
                            title="View GitHub Repository"
                          >
                            <Github size={15} />
                          </a>
                        )}

                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => triggerConfetti()}
                            className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all duration-200 hover:scale-105"
                          >
                            <span>Live Demo</span>
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-sm mb-3">No projects matching your search criteria.</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-xs cursor-pointer"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.25 }}
              className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl p-6 sm:p-8 ${
                isDark
                  ? "bg-slate-900 border-slate-700 text-slate-100 shadow-black/60"
                  : "bg-white border-slate-200 text-slate-900 shadow-slate-300"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="text-2xl font-extrabold mt-1">{selectedProject.title}</h3>
                  <p className="text-xs text-slate-400">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                {selectedProject.description}
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Architectural Highlights & Features
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.fullDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className={isDark ? "text-slate-300" : "text-slate-700"}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-3 py-1 rounded-xl border ${
                        isDark
                          ? "bg-slate-800 border-slate-700 text-slate-200"
                          : "bg-slate-100 border-slate-200 text-slate-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200/20">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="text-xs flex items-center gap-1.5 cursor-pointer">
                      <Github size={15} />
                      <span>View on GitHub</span>
                    </Button>
                  </a>
                )}

                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => triggerConfetti()}
                  >
                    <Button
                      size="sm"
                      className="text-xs bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <span>Open Live Demo</span>
                      <ExternalLink size={14} />
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
