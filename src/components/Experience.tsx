import { useState } from "react";
import {
  Briefcase,
  Server,
  Terminal,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Layers,
  Activity,
  GitBranch,
  Play,
  RotateCcw,
  Sparkles,
  GitCommit,
  LayoutGrid,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { triggerConfetti } from "@/utils/confetti";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  isCurrent: boolean;
  summary: string;
  responsibilities: string[];
  techStack: string[];
  highlights: string[];
  icon: typeof Server;
}

const experiences: ExperienceItem[] = [
  {
    id: "devops-exec",
    role: "DevOps Executive",
    company: "Pleximus Inc",
    location: "Ratnagiri, Maharashtra",
    period: "June 2026 – Present",
    badge: "Current Role",
    isCurrent: true,
    summary:
      "Overseeing application deployment pipelines, server-side infrastructure stability, and Linux system reliability for client-facing software applications.",
    responsibilities: [
      "Support continuous application deployment and server-side operations across production Linux-based environments.",
      "Manage Linux/Ubuntu distributions, Nginx reverse proxy configuration, Git/GitLab workflows, databases, and web applications.",
      "Assist with infrastructure and application maintenance, service management, configuration changes, and zero-downtime deployment activities.",
      "Collaborate directly with cross-functional development and operations teams to troubleshoot complex application and server issues.",
    ],
    techStack: ["Linux", "Ubuntu", "Nginx", "Git", "GitLab", "MySQL", "AWS/EC2", "Shell Scripting", "CI/CD"],
    highlights: [
      "Zero-downtime server updates & maintenance",
      "Production troubleshooting & root-cause analysis",
      "Automated Nginx configuration & SSL certification",
    ],
    icon: Server,
  },
  {
    id: "backend-intern",
    role: "Backend Developer Intern",
    company: "Pleximus Inc",
    location: "Ratnagiri, Maharashtra",
    period: "December 2025 – June 2026",
    badge: "Completed",
    isCurrent: false,
    summary:
      "Contributed to robust backend web architectures, RESTful API integrations, database optimization, and deployment scripts in high-velocity agile sprints.",
    responsibilities: [
      "Gained deep hands-on experience in backend development, REST APIs, database management, Git/GitLab, Linux server administration, and application deployment.",
      "Engineered clean PHP/Laravel backend workflows, authentication mechanisms, and controller architectures while contributing to real-world software projects.",
      "Applied structured debugging, database query optimization, API testing, and deployment best practices in a professional development environment.",
      "Coordinated with frontend engineers to integrate responsive endpoints and handle real-time payloads.",
    ],
    techStack: ["PHP", "Laravel", "REST APIs", "MySQL", "Git", "GitLab", "Linux Administration", "Postman"],
    highlights: [
      "Designed secure RESTful API endpoints for client apps",
      "Optimized relational database queries & index structures",
      "Contributed production-ready code with Git version control",
    ],
    icon: Terminal,
  },
];

const Experience = () => {
  const { isDark } = useTheme();
  const [viewMode, setViewMode] = useState<"timeline" | "cards">("cards");
  const [activeTab, setActiveTab] = useState<string>(experiences[0].id);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const runDeploymentSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(1);

    setTimeout(() => setSimStep(2), 700);
    setTimeout(() => setSimStep(3), 1400);
    setTimeout(() => {
      setSimStep(4);
      triggerConfetti();
      setTimeout(() => {
        setIsSimulating(false);
        setSimStep(0);
      }, 3500);
    }, 2200);
  };

  return (
    <section
      id="experience"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-slate-900/60" : "bg-slate-50/80"
      }`}
    >
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase size={14} />
            Professional Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Hands-on expertise in Linux server administration, DevOps deployment automation, and backend engineering at Pleximus Inc.
          </p>

          {/* View Toggle (Timeline vs Cards) */}
          <div className="flex items-center justify-center mt-6">
            <div className={`inline-flex p-1 rounded-xl border ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
              <button
                onClick={() => setViewMode("timeline")}
                aria-label="Timeline view"
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === "timeline"
                    ? "bg-purple-600 text-white shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <GitCommit size={14} />
                <span>Timeline</span>
              </button>
              <button
                onClick={() => setViewMode("cards")}
                aria-label="Cards view"
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === "cards"
                    ? "bg-purple-600 text-white shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <LayoutGrid size={14} />
                <span>Cards</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* View Mode: Timeline View (Default) */}
        {viewMode === "timeline" && (
          <motion.div
            key="experience-timeline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-blue-500 before:to-emerald-500 space-y-12 pl-12 sm:pl-20"
          >
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline Node Pin */}
                  <div className="absolute -left-12 sm:-left-20 top-2 w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-slate-900 border-2 border-purple-400 text-purple-400 flex items-center justify-center shadow-lg shadow-purple-500/30 z-10">
                    <Icon size={18} />
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden shadow-xl ${
                      isDark
                        ? "bg-slate-800/70 border-slate-700/80 shadow-black/30"
                        : "bg-white border-slate-200/90 shadow-slate-200/50"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200/20">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                            {exp.role}
                          </h3>
                          <Badge
                            variant="secondary"
                            className={
                              exp.isCurrent
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            }
                          >
                            {exp.badge}
                          </Badge>
                          {exp.isCurrent && (
                            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 ml-1">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              Active Role
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
                          <span className="font-semibold text-purple-400">{exp.company}</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={13} />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={13} />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="py-4">
                      <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        {exp.summary}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <Layers size={14} />
                        Key Responsibilities & Scope
                      </h4>
                      <div className="space-y-2.5">
                        {exp.responsibilities.map((resp, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                            <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className={isDark ? "text-slate-300" : "text-slate-700"}>
                              {resp}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Core Deliverables */}
                    <div className="mb-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                        <GitBranch size={14} />
                        Core Deliverables
                      </h4>
                      <div className="grid sm:grid-cols-3 gap-2">
                        {exp.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className={`text-xs p-2.5 rounded-xl border ${
                              isDark
                                ? "bg-slate-900/60 border-slate-700 text-slate-300"
                                : "bg-slate-50 border-slate-200 text-slate-700 shadow-sm"
                            }`}
                          >
                            • {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Deployment Test inside Current Role */}
                    {exp.isCurrent && (
                      <div
                        className={`p-4 rounded-2xl border mb-5 ${
                          isDark ? "bg-slate-900/80 border-slate-800" : "bg-purple-50/60 border-purple-200"
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                              <Activity size={14} className="animate-pulse" />
                              Interactive DevOps Zero-Downtime Pipeline
                            </div>
                            <p className="text-xs text-slate-400">
                              Trigger live simulated CI/CD build, GitLab fetch, hot Nginx reload, and systemd verification.
                            </p>
                          </div>
                          <Button
                            size="sm"
                            onClick={runDeploymentSimulation}
                            disabled={isSimulating}
                            className="text-xs bg-purple-600 hover:bg-purple-500 text-white font-mono flex items-center gap-1.5 cursor-pointer flex-shrink-0"
                          >
                            {isSimulating ? (
                              <>
                                <RotateCcw size={13} className="animate-spin" />
                                <span>Deploying...</span>
                              </>
                            ) : (
                              <>
                                <Play size={13} />
                                <span>Test Deployment</span>
                              </>
                            )}
                          </Button>
                        </div>

                        {simStep > 0 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="mt-3 p-3 rounded-xl bg-slate-950 text-[11px] font-mono border border-slate-800 space-y-1"
                          >
                            {simStep >= 1 && <div className="text-blue-400">➜ Pulling latest commit from GitLab...</div>}
                            {simStep >= 2 && <div className="text-amber-400">➜ Building assets & running migrations...</div>}
                            {simStep >= 3 && <div className="text-cyan-400">➜ Hot reload Nginx & restart systemd...</div>}
                            {simStep >= 4 && (
                              <div className="text-emerald-400 font-bold flex items-center gap-1">
                                <Sparkles size={12} />
                                ✔ Deployment complete: 0ms downtime!
                              </div>
                            )}
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Tech stack pills */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        Technologies & Workflows
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className={`text-xs px-3 py-1 rounded-xl font-medium border transition-all duration-200 hover:scale-105 ${
                              isDark
                                ? "bg-slate-900/80 border-slate-700 text-slate-200 hover:border-purple-400"
                                : "bg-slate-100 border-slate-200 text-slate-800 hover:border-purple-400"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* View Mode: Split Cards View (Alternative) */}
        {viewMode === "cards" && (
        <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-start w-full">
          {/* Left Navigation Tabs */}
          <div className="md:col-span-5 lg:col-span-4 space-y-3 md:space-y-4 w-full">
            <div className="space-y-3">
              {experiences.map((exp) => {
                const Icon = exp.icon;
                const isSelected = activeTab === exp.id;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveTab(exp.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative group overflow-hidden cursor-pointer ${
                      isSelected
                        ? isDark
                          ? "bg-slate-800/90 border-purple-500/50 shadow-xl shadow-purple-500/10 scale-[1.02]"
                          : "bg-white border-purple-400 shadow-xl shadow-purple-500/10 scale-[1.02]"
                        : isDark
                        ? "bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/80 hover:border-slate-600"
                        : "bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          isSelected
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30 scale-105"
                            : isDark
                            ? "bg-slate-700 text-slate-300 group-hover:text-white"
                            : "bg-slate-100 text-slate-600 group-hover:bg-purple-50 group-hover:text-purple-600"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="font-bold text-base truncate">{exp.role}</h3>
                          {exp.isCurrent && (
                            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              Live
                            </span>
                          )}
                        </div>
                        <p className="text-xs font-semibold text-purple-400 mb-1">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Calendar size={13} />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <ChevronRight
                        size={18}
                        className={`self-center text-slate-400 transition-transform duration-300 ${
                          isSelected ? "translate-x-1 text-purple-400" : "group-hover:translate-x-0.5"
                        }`}
                      />
                    </div>

                    {/* Active Indicator Line */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-l-2xl" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* DevOps Live Metric Badge & Interactive Simulator */}
            <div
              className={`p-5 rounded-2xl border ${
                isDark
                  ? "bg-slate-800/40 border-slate-700/60"
                  : "bg-white/80 border-slate-200 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <Activity size={14} className="animate-pulse" />
                  DevOps Automation Hub
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  99.98% SLA
                </span>
              </div>

              <div className="space-y-2 text-xs mb-4">
                <div className="flex justify-between text-slate-400">
                  <span>Server OS:</span>
                  <span className="font-semibold text-slate-200">Ubuntu / Linux LTS</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Web Engine:</span>
                  <span className="font-semibold text-slate-200">Nginx Reverse Proxy</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>CI/CD Workflow:</span>
                  <span className="font-semibold text-slate-200">Git & GitLab Automation</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Database Systems:</span>
                  <span className="font-semibold text-slate-200">MySQL & MongoDB</span>
                </div>
              </div>

              {/* Interactive Deployment Test Button */}
              <div className="pt-2 border-t border-slate-200/10">
                <Button
                  size="sm"
                  onClick={runDeploymentSimulation}
                  disabled={isSimulating}
                  className="w-full text-xs bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 font-mono flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {isSimulating ? (
                    <>
                      <RotateCcw size={13} className="animate-spin text-purple-400" />
                      <span>Pipeline Running...</span>
                    </>
                  ) : (
                    <>
                      <Play size={13} className="text-emerald-400" />
                      <span>Simulate Zero-Downtime Deploy</span>
                    </>
                  )}
                </Button>

                {simStep > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2.5 p-2.5 rounded-xl bg-slate-950 text-[11px] font-mono border border-slate-800 space-y-1"
                  >
                    {simStep >= 1 && <div className="text-blue-400">➜ Pulling latest commit from GitLab...</div>}
                    {simStep >= 2 && <div className="text-amber-400">➜ Building assets & running migrations...</div>}
                    {simStep >= 3 && <div className="text-cyan-400">➜ Hot reload Nginx & restart systemd...</div>}
                    {simStep >= 4 && (
                      <div className="text-emerald-400 font-bold flex items-center gap-1">
                        <Sparkles size={12} />
                        ✔ Deployment complete: 0ms downtime!
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Right Detail Card */}
          <div className="md:col-span-7 lg:col-span-8 w-full"> 
            <AnimatePresence mode="wait">
              {experiences
                .filter((exp) => exp.id === activeTab)
                .map((exp) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className={`p-6 sm:p-8 rounded-3xl border shadow-2xl transition-all duration-300 relative overflow-hidden ${
                      isDark
                        ? "bg-slate-800/80 border-slate-700/80 shadow-black/40"
                        : "bg-white border-slate-200/90 shadow-slate-200/50"
                    }`}
                  >
                    {/* Subtle gradient backdrop */}
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Top Role Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/20">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h3 className="text-2xl font-extrabold tracking-tight">
                            {exp.role}
                          </h3>
                          <Badge
                            variant="secondary"
                            className={
                              exp.isCurrent
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            }
                          >
                            {exp.badge}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                          <span className="font-semibold text-purple-400">{exp.company}</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="py-5">
                      <p className={`text-base leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        {exp.summary}
                      </p>
                    </div>

                    {/* Responsibilities list */}
                    <div className="space-y-4 mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                        <Layers size={14} className="text-purple-400" />
                        Key Responsibilities & Contributions
                      </h4>
                      <div className="space-y-3">
                        {exp.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm">
                            <CheckCircle2
                              size={18}
                              className="text-emerald-400 flex-shrink-0 mt-0.5"
                            />
                            <span className={isDark ? "text-slate-300" : "text-slate-700"}>
                              {resp}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-6 p-4 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-2">
                        <GitBranch size={14} />
                        Core Deliverables
                      </h4>
                      <ul className="grid sm:grid-cols-3 gap-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className={`text-xs p-2.5 rounded-xl border ${
                              isDark
                                ? "bg-slate-800/80 border-slate-700 text-slate-300"
                                : "bg-white border-slate-200 text-slate-700 shadow-sm"
                            }`}
                          >
                            • {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack pills */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Technologies & Workflows
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className={`text-xs px-3 py-1.5 rounded-xl font-medium border transition-all duration-200 hover:scale-105 ${
                              isDark
                                ? "bg-slate-900/80 border-slate-700 text-slate-200 hover:border-purple-400"
                                : "bg-slate-100 border-slate-200 text-slate-800 hover:border-purple-400"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
