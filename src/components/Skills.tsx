import { useState, useMemo } from "react";
import {
  Code,
  Server,
  Terminal,
  Smartphone,
  Database,
  ShieldCheck,
  Search,
  CheckCircle,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";
import ArchitectureFlowModel from "./ArchitectureFlowModel";
import TiltCard from "./TiltCard";

interface Skill {
  name: string;
  category: "languages" | "backend" | "devops" | "frontend" | "databases" | "competencies";
  proficiency: number;
  level: string;
  experience: string;
  tags: string[];
}

const skillsData: Skill[] = [
  // Languages
  { name: "PHP", category: "languages", proficiency: 90, level: "Advanced", experience: "Pleximus Inc & Laravel Projects", tags: ["Backend", "Object-Oriented", "MVC"] },
  { name: "JavaScript (ES6+)", category: "languages", proficiency: 92, level: "Advanced", experience: "React.js & Node.js ecosystem", tags: ["Frontend", "Async", "Full-Stack"] },
  { name: "Python", category: "languages", proficiency: 85, level: "Proficient", experience: "Django, YOLOv8, NLP & ML", tags: ["AI/ML", "Django", "Scikit-Learn"] },
  { name: "HTML5", category: "languages", proficiency: 95, level: "Master", experience: "Semantic markup & accessible UX", tags: ["Markup", "Accessibility"] },
  { name: "CSS3 / Modern Styling", category: "languages", proficiency: 90, level: "Advanced", experience: "Tailwind CSS, Flexbox, Grid", tags: ["Responsive", "Animations"] },

  // Backend & APIs
  { name: "Laravel", category: "backend", proficiency: 90, level: "Advanced", experience: "Production backends & APIs", tags: ["PHP", "Artisan", "Eloquent ORM"] },
  { name: "Node.js", category: "backend", proficiency: 86, level: "Proficient", experience: "Event-driven microservices", tags: ["JavaScript", "Runtime", "APIs"] },
  { name: "Express.js", category: "backend", proficiency: 85, level: "Proficient", experience: "REST APIs & Middleware", tags: ["Routing", "Middleware", "Auth"] },
  { name: "REST APIs", category: "backend", proficiency: 92, level: "Advanced", experience: "API architecture, Postman testing", tags: ["Endpoints", "JSON", "Security"] },

  // DevOps & Infrastructure
  { name: "Linux Server Administration", category: "devops", proficiency: 92, level: "Advanced", experience: "DevOps Executive @ Pleximus Inc", tags: ["Ubuntu", "CLI", "Cron", "SSH"] },
  { name: "Ubuntu LTS", category: "devops", proficiency: 90, level: "Advanced", experience: "Host configuration & permissions", tags: ["OS", "SysAdmin", "Security"] },
  { name: "Nginx Reverse Proxy", category: "devops", proficiency: 88, level: "Advanced", experience: "SSL configs, proxy passes, routing", tags: ["Web Server", "Load Balance"] },
  { name: "Git & GitLab", category: "devops", proficiency: 92, level: "Advanced", experience: "Branching, CI/CD, merge workflows", tags: ["VCS", "CI/CD Pipelines"] },
  { name: "AWS / EC2", category: "devops", proficiency: 80, level: "Proficient", experience: "Cloud instance deployment", tags: ["Cloud", "Instances", "Security Groups"] },
  { name: "Application Deployment", category: "devops", proficiency: 90, level: "Advanced", experience: "Zero-downtime server deployments", tags: ["Production", "Troubleshooting"] },

  // Frontend & Mobile
  { name: "React.js", category: "frontend", proficiency: 90, level: "Advanced", experience: "Code Editor, GitHub Explorer, NewsPortal", tags: ["Hooks", "Context", "Vite"] },
  { name: "React Native", category: "frontend", proficiency: 84, level: "Proficient", experience: "Pet Adoption mobile application", tags: ["Cross-Platform", "Mobile"] },
  { name: "Flutter & Dart", category: "frontend", proficiency: 82, level: "Proficient", experience: "ShopMatcher e-commerce app", tags: ["Widgets", "Android", "Cross-Platform"] },

  // Databases
  { name: "MySQL", category: "databases", proficiency: 90, level: "Advanced", experience: "Schema design, relational indexes, queries", tags: ["SQL", "Relational", "Optimization"] },
  { name: "MongoDB", category: "databases", proficiency: 82, level: "Proficient", experience: "Document stores, aggregation pipelines", tags: ["NoSQL", "Mongoose"] },
  { name: "Firebase (Firestore & Auth)", category: "databases", proficiency: 85, level: "Proficient", experience: "Mobile real-time sync & auth", tags: ["BaaS", "Realtime", "Cloud"] },

  // Core Competencies
  { name: "Authentication & Security", category: "competencies", proficiency: 88, level: "Advanced", experience: "JWT, Session tokens, OAuth flows", tags: ["Security", "Role-Based Access"] },
  { name: "Database Optimization", category: "competencies", proficiency: 86, level: "Proficient", experience: "Query profiling, index strategies", tags: ["Performance", "Scaling"] },
  { name: "API Integration", category: "competencies", proficiency: 92, level: "Advanced", experience: "Payment gateways (Razorpay), GitHub", tags: ["Webhooks", "JSON Payloads"] },
  { name: "Responsive UI Architecture", category: "competencies", proficiency: 92, level: "Advanced", experience: "Mobile-first layouts & modern UX", tags: ["Tailwind", "Accessibility"] },
];

const categoryTabs = [
  { id: "all", label: "All Skills", icon: Cpu },
  { id: "backend", label: "Backend & APIs", icon: Server },
  { id: "devops", label: "DevOps & Linux", icon: Terminal },
  { id: "languages", label: "Languages", icon: Code },
  { id: "frontend", label: "Frontend & Mobile", icon: Smartphone },
  { id: "databases", label: "Databases", icon: Database },
  { id: "competencies", label: "Competencies", icon: ShieldCheck },
];

const Skills = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"model" | "cards" | "both">("both");

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCategory =
        activeCategory === "all" || skill.category === activeCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.experience.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="skills"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-slate-900/40" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Code size={14} />
            Technical Expertise & Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Proficiencies
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Curated toolkit covering backend development, DevOps automation, cloud databases, and multi-platform engineering.
          </p>

          {/* View Mode Switcher */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setViewMode("both")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                viewMode === "both"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-500/25"
                  : "bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700"
              }`}
            >
              <Sparkles size={13} />
              <span>Full View</span>
            </button>
            <button
              onClick={() => setViewMode("model")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                viewMode === "model"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-500/25"
                  : "bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700"
              }`}
            >
              <Cpu size={13} />
              <span>3D Architecture Model</span>
            </button>
            <button
              onClick={() => setViewMode("cards")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                viewMode === "cards"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-500/25"
                  : "bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700"
              }`}
            >
              <Layers size={13} />
              <span>Skills Matrix ({skillsData.length})</span>
            </button>
          </div>
        </motion.div>

        {/* 3D System Architecture Model */}
        {(viewMode === "model" || viewMode === "both") && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <ArchitectureFlowModel />
          </motion.div>
        )}

        {/* Filter Controls & Cards Grid */}
        {(viewMode === "cards" || viewMode === "both") && (
          <>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {categoryTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isSelected = activeCategory === tab.id;
                  const count =
                    tab.id === "all"
                      ? skillsData.length
                      : skillsData.filter((s) => s.category === tab.id).length;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveCategory(tab.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                          : isDark
                          ? "bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-slate-200"
                          : "bg-slate-100 border border-slate-200 text-slate-700 hover:border-purple-300"
                      }`}
                    >
                      <Icon size={14} />
                      <span>{tab.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : isDark
                            ? "bg-slate-700 text-slate-400"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-64">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search skill, tag, tool..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-9 pr-4 py-2 text-xs rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    isDark
                      ? "bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-500"
                      : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm"
                  }`}
                />
              </div>
            </div>

            {/* Skills Cards Grid with 3D Tilt */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredSkills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.4) }}
                >
                  <TiltCard
                    tiltDegree={8}
                    scale={1.02}
                    className={`h-full p-5 rounded-2xl border transition-all duration-300 ${
                      isDark
                        ? "bg-slate-800/60 border-slate-700/70 hover:border-purple-500/50 shadow-lg"
                        : "bg-white border-slate-200 hover:border-purple-300 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-sm text-slate-100 dark:text-white">
                        {skill.name}
                      </h3>
                      <span className="text-xs font-bold font-mono text-purple-400">
                        {skill.proficiency}%
                      </span>
                    </div>

                    {/* Animated Progress bar */}
                    <div className="h-2 w-full bg-slate-700/40 rounded-full overflow-hidden mb-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                      <span className="font-medium text-slate-300 flex items-center gap-1">
                        <CheckCircle size={12} className="text-emerald-400" />
                        {skill.level}
                      </span>
                      <span className="truncate max-w-[160px]" title={skill.experience}>
                        {skill.experience}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] px-2 py-0.5 rounded-md border ${
                            isDark
                              ? "bg-slate-900/60 border-slate-700 text-slate-400"
                              : "bg-slate-50 border-slate-200 text-slate-600"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* DevOps Infrastructure Stack Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mt-14 p-6 rounded-3xl border ${
            isDark
              ? "bg-slate-900/80 border-slate-800"
              : "bg-gradient-to-r from-purple-50 via-slate-50 to-blue-50 border-slate-200"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Core Production Pipeline
              </span>
              <h3 className="text-lg font-bold mt-1">Linux Server & DevOps Deployment Pipeline</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Trained in real-world deployment workflows: Ubuntu OS administration, automated Nginx reverse proxy configuration, and Git/GitLab version management.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {["Ubuntu Linux", "Nginx", "GitLab CI", "MySQL Optimization", "AWS EC2", "REST Security"].map(
                (item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-sm"
                  >
                    {item}
                  </motion.span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
