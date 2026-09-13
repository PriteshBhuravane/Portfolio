import { useState, useEffect } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  FileText,
  Terminal,
  MapPin,
  ExternalLink,
  ChevronRight,
  Award,
  Rotate3d,
  Sparkles,
  Play,
  BookOpen,
  Activity,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import ParticleBackground from "./ParticleBackground";
import ResumeModal from "./ResumeModal";
import InteractiveTechOrbit from "./InteractiveTechOrbit";
import AnimatedTechBadges from "./AnimatedTechBadges";
import { triggerConfetti, triggerStarConfetti } from "@/utils/confetti";

const TITLES = [
  "Software Developer",
  "Backend & REST API Engineer",
  "DevOps & Linux Administrator",
  "MCA Graduate (3rd Rank, 8.86 CGPA)",
  "Full-Stack Web & Mobile Creator",
];

const Hero = () => {
  const { isDark } = useTheme();
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeTerminalTab, setActiveTerminalTab] = useState<"status" | "skills" | "contact" | "deploy">("status");
  const [rightViewMode, setRightViewMode] = useState<"terminal" | "3d-orbit">("terminal");
  const [orbitSelectedTechId, setOrbitSelectedTechId] = useState<string | null>("laravel");

  useEffect(() => {
    const currentTitle = TITLES[currentIndex];
    if (displayText.length < currentTitle.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 65);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex((prev) => (prev + 1) % TITLES.length);
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [displayText, currentIndex]);

  const handleResumeDownload = () => {
    triggerConfetti();
    const link = document.createElement("a");
    link.href = "/Pritesh_Bhuravane_Resume.pdf";
    link.download = "Pritesh_Bhuravane_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCelebrate = () => {
    triggerStarConfetti();
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-28 pb-16 relative overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-b from-slate-50 via-white to-slate-100"
      }`}
    >
      <ParticleBackground />

      {/* Decorative Blur Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full bg-purple-500/10 blur-[130px] animate-pulse-soft" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-blue-500/10 blur-[120px] animate-float" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-[120px] animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Introductions & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 text-center lg:text-left space-y-6"
          >
            {/* Live System & Infrastructure Telemetry Banner (Eliminates blank space & adds live DevOps feel) */}
            <div className="flex items-center justify-center lg:justify-start">
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono border backdrop-blur-md shadow-sm transition-all ${
                  isDark
                    ? "bg-slate-900/80 border-slate-700/70 text-slate-300"
                    : "bg-white/90 border-slate-200 text-slate-700"
                }`}
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-500 dark:text-emerald-400 font-bold tracking-wider">SYS: ONLINE</span>
                <span className="text-slate-500">•</span>
                {/* <span className="text-slate-400 font-medium hidden sm:inline">pleximus-node-01</span> */}
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-purple-500 dark:text-purple-400 font-semibold">99.98% Uptime</span>
                <span className="text-slate-500 hidden md:inline">•</span>
                <span className="text-blue-500 dark:text-blue-400 hidden md:inline">IST (UTC+5:30)</span>
              </div>
            </div>

            {/* Interactive Shell Prompt Line */}
            <div className="flex items-center gap-2 justify-center lg:justify-start font-mono text-xs text-slate-400 bg-slate-900/50 dark:bg-slate-950/70 px-3.5 py-1.5 rounded-xl border border-slate-800/80 w-fit mx-auto lg:mx-0 shadow-sm">
              <Terminal size={13} className="text-emerald-400" />
              <span className="text-emerald-400 font-bold">pritesh@Devops</span>
              <span className="text-slate-500">:</span>
              <span className="text-blue-400">~/portfolio</span>
              <span className="text-slate-500">$</span>
              <span className="text-slate-200 font-semibold">./init.sh --stack="fullstack-devops"</span>
            </div>

            {/* Status & Achievement Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                DevOps Executive @ Pleximus Inc
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-sm">
                <Award size={13} />
                3rd Rank MCA (8.86 CGPA)
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-sm">
                <BookOpen size={13} />
                IJSRST Published Researcher
              </span>

              <button
                type="button"
                onClick={handleCelebrate}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 transition-all cursor-pointer shadow-sm hover:scale-105"
                title="Click to celebrate!"
              >
                <Sparkles size={13} className="text-amber-400 animate-spin-slow" />
                <span>Celebrate</span>
              </button>
            </div>

            {/* Main Name & Title with Animated Greeting */}
            <div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start mb-2">
                <span className="text-2xl sm:text-3xl animate-wave origin-bottom-right select-none">👋</span>
                <p className="text-xs sm:text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Hello, World! I am
                </p>
                <span className="hidden sm:inline-block h-px w-14 bg-gradient-to-r from-purple-500/50 via-blue-500/30 to-transparent" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className={isDark ? "text-white" : "text-slate-900"}>Pritesh </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Bhuravane
                </span>
              </h1>
            </div>

            {/* Typewriter Line */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <div
                className={`text-base sm:text-xl md:text-2xl font-mono font-medium flex items-center ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                <span className="text-purple-400 mr-2">&gt;</span>
                <span className="truncate max-w-[280px] sm:max-w-none">{displayText}</span>
                <span className="inline-block w-2.5 h-6 ml-1 bg-purple-400 animate-pulse flex-shrink-0" />
              </div>
            </div>

            {/* Subtitle / Bio summary */}
            <p
              className={`text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Software Developer specializing in <strong className="text-purple-400">Backend Development</strong>,{" "}
              <strong className="text-blue-400">Linux Server Administration</strong>, and{" "}
              <strong className="text-emerald-400">DevOps Automation</strong>. MCA Graduate from FAMT Ratnagiri (3rd Rank, 8.86 CGPA) with proven production deployment and API architecture experience.
            </p>

            {/* Quick Contact metadata */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-amber-400" />
                Ratnagiri, Maharashtra
              </span>
              <a
                href="mailto:bhuravanepritesh@gmail.com"
                className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"
              >
                <Mail size={14} className="text-blue-400" />
                bhuravanepritesh@gmail.com
              </a>
              <a
                href="tel:9405059038"
                className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"
              >
                <Phone size={14} className="text-emerald-400" />
                +91 9405059038
              </a>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Button
                onClick={handleResumeDownload}
                className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-5 sm:px-6 py-5 rounded-2xl shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 font-semibold text-xs sm:text-sm flex items-center gap-2"
              >
                <Download size={16} />
                Download Resume
              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  triggerConfetti();
                  setIsResumeModalOpen(true);
                }}
                className={`px-4 sm:px-5 py-5 rounded-2xl border transition-all duration-300 hover:scale-105 font-medium text-xs sm:text-sm flex items-center gap-2 ${
                  isDark
                    ? "border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-700"
                    : "border-slate-300 bg-white/80 text-slate-800 hover:bg-slate-100 shadow-sm"
                }`}
              >
                <FileText size={16} className="text-purple-400" />
                Interactive Resume
              </Button>

              <Button
                variant="ghost"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-3 sm:px-4 py-5 rounded-2xl text-slate-400 hover:text-purple-400 transition-all text-xs sm:text-sm font-medium flex items-center gap-1.5"
              >
                <span>View Projects</span>
                <ChevronRight size={15} />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              {[
                { icon: Github, href: "https://github.com/PriteshBhuravane", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/pritesh-bhuravane/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:bhuravanepritesh@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-3 rounded-2xl border transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                    isDark
                      ? "border-slate-800 bg-slate-900/90 text-slate-400 hover:text-white hover:border-purple-500/50 shadow-md"
                      : "border-slate-200 bg-white/90 text-slate-600 hover:text-purple-600 hover:border-purple-300 shadow-sm"
                  }`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive DevOps Terminal OR 3D Tech Orbit Model */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative pt-12 sm:pt-14"
          >
            {/* Floating Tech Badges around the right container with Laravel & PHP elevated cleanly above */}
            <AnimatedTechBadges
              activeViewMode={rightViewMode}
              onSelectBadge={(techId) => {
                setRightViewMode("3d-orbit");
                setOrbitSelectedTechId(techId);
              }}
            />

            {/* View Mode Switching Controls placed above terminal/orbit window */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg">
                <button
                  type="button"
                  onClick={() => setRightViewMode("terminal")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    rightViewMode === "terminal"
                      ? "bg-purple-600 text-white shadow-md shadow-purple-500/30 font-bold scale-[1.02]"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Terminal size={14} />
                  <span>DevOps Terminal</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRightViewMode("3d-orbit")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    rightViewMode === "3d-orbit"
                      ? "bg-purple-600 text-white shadow-md shadow-purple-500/30 font-bold scale-[1.02]"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Rotate3d size={14} className={rightViewMode === "3d-orbit" ? "animate-spin-slow" : ""} />
                  <span>3D Tech Orbit</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-purple-400 font-mono hidden sm:flex items-center gap-1.5 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {rightViewMode === "terminal" ? "Interactive Shell" : "3D Celestial Orbit"}
                </span>
              </div>
            </div>

            {/* View Mode Switching */}
            <AnimatePresence mode="wait">
              {rightViewMode === "terminal" ? (
                /* Terminal Component */
                <motion.div
                  key="terminal-window"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 ${
                    isDark
                      ? "bg-slate-900/95 border-slate-700/80 shadow-black/50"
                      : "bg-slate-950 text-slate-100 border-slate-800 shadow-slate-400/30"
                  }`}
                >
                  {/* Terminal Window Bar */}
                  <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
                      <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Terminal size={12} />
                        pritesh@ratnagiri-server:~
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-mono">
                      {(["status", "skills", "deploy", "contact"] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTerminalTab(tab)}
                          className={`px-2 py-0.5 rounded transition-colors ${
                            activeTerminalTab === tab
                              ? "bg-purple-500/20 text-purple-300 font-semibold"
                              : "text-slate-400 hover:text-slate-200"
                          }`}
                        >
                          {tab}.sh
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Terminal Output Screen */}
                  <div className="p-5 font-mono text-xs leading-relaxed space-y-3 min-h-[330px]">
                    {activeTerminalTab === "status" && (
                      <>
                        <div className="text-slate-400">
                          $ <span className="text-purple-400">neofetch</span> --engineer
                        </div>
                        <div className="text-slate-200">
                          <span className="text-emerald-400 font-bold">User:</span> Pritesh Suresh Bhuravane
                        </div>
                        <div className="text-slate-300">
                          <span className="text-cyan-400 font-bold">Current Role:</span> DevOps Executive @ Pleximus Inc
                        </div>
                        <div className="text-slate-300">
                          <span className="text-blue-400 font-bold">Past Role:</span> Backend Developer Intern @ Pleximus Inc
                        </div>
                        <div className="text-slate-300">
                          <span className="text-amber-400 font-bold">Academics:</span> MCA (FAMT, 8.86 CGPA, 3rd Rank)
                        </div>
                        <div className="text-slate-300">
                          <span className="text-pink-400 font-bold">Research:</span> "SkinFusion-Net" (IJSRST Published)
                        </div>
                        <div className="text-slate-300">
                          <span className="text-emerald-400 font-bold">Stack:</span> PHP, Laravel, Node.js, React, Linux, Nginx, Docker
                        </div>
                        <div className="pt-2 text-slate-500 text-[11px]">
                          // Server health: optimal • zero alerts • 99.9% uptime
                        </div>
                      </>
                    )}

                    {activeTerminalTab === "skills" && (
                      <>
                        <div className="text-slate-400">
                          $ <span className="text-purple-400">cat</span> stack.config.json
                        </div>
                        <pre className="text-emerald-300 text-[11px] overflow-x-auto">
{`{
  "backend": ["Laravel 11", "Node.js", "Express.js", "PHP 8.2"],
  "devops": ["Linux Ubuntu 22.04", "Nginx", "GitLab CI", "AWS EC2", "Docker"],
  "frontend": ["React.js", "React Native", "Flutter", "Tailwind CSS"],
  "databases": ["MySQL", "MongoDB", "Firebase Firestore"],
  "education": ["MCA (8.86)", "BSc CS (9.92)", "HSC (89.66%)", "SSC (86%)"]
}`}
                        </pre>
                      </>
                    )}

                    {activeTerminalTab === "deploy" && (
                      <>
                        <div className="text-slate-400">
                          $ <span className="text-purple-400">bash</span> deploy-pipeline.sh --env=production
                        </div>
                        <div className="text-slate-300 space-y-1 text-[11px]">
                          <div className="text-emerald-400">✔ Git checkout: branch main (commit #8a4f91)</div>
                          <div className="text-blue-400">✔ Running composer & npm production install... done</div>
                          <div className="text-emerald-400">✔ Migrating MySQL schemas & running database seeders... done</div>
                          <div className="text-cyan-400">✔ Reloading Nginx reverse proxy configuration... OK</div>
                          <div className="text-amber-400">✔ Systemd service restarted: plekimus-api.service active (running)</div>
                          <div className="text-purple-400 font-bold mt-1">🚀 Application successfully deployed with zero downtime!</div>
                        </div>
                      </>
                    )}

                    {activeTerminalTab === "contact" && (
                      <>
                        <div className="text-slate-400">
                          $ <span className="text-purple-400">curl</span> -X GET /api/v1/pritesh/contact
                        </div>
                        <div className="text-slate-300 space-y-1">
                          <div>
                            <span className="text-amber-400">location:</span> "Ratnagiri, Maharashtra, India"
                          </div>
                          <div>
                            <span className="text-blue-400">email:</span> "bhuravanepritesh@gmail.com"
                          </div>
                          <div>
                            <span className="text-emerald-400">phone:</span> "+91 9405059038"
                          </div>
                          <div>
                            <span className="text-purple-400">linkedin:</span> "linkedin.com/in/pritesh-bhuravane"
                          </div>
                          <div>
                            <span className="text-pink-400">portfolio:</span> "portfolio-gamma-opal-5be8cvvw26.vercel.app"
                          </div>
                        </div>
                      </>
                    )}

                    <div className="flex items-center text-slate-500 pt-2">
                      <span className="text-emerald-400 mr-2">➜</span>
                      <span className="text-slate-400">~</span>
                      <span className="inline-block w-2 h-4 ml-1.5 bg-emerald-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Terminal Footer Quick Links */}
                  <div className="px-4 py-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Ratnagiri Cluster • Node 01</span>
                    <a
                      href="https://github.com/PriteshBhuravane"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-300 flex items-center gap-1"
                    >
                      <span>github.com/PriteshBhuravane</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </motion.div>
              ) : (
                /* 3D Orbit Component */
                <motion.div
                  key="orbit-window"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  <InteractiveTechOrbit
                    selectedTechId={orbitSelectedTechId}
                    onSelectTech={(id) => setOrbitSelectedTechId(id)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Floating Quick Stats Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3.5"
        >
          {[
            { value: "8.86", label: "MCA CGPA", sub: "3rd Rank in Program" },
            { value: "9.92", label: "BSc CS CGPA", sub: "Department Topper" },
            { value: "89.66%", label: "HSC (12th)", sub: "First Class Distinction" },
            { value: "86.00%", label: "SSC (10th)", sub: "First Class Distinction" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-4 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1 shadow-sm ${
                isDark
                  ? "bg-slate-900/70 border-slate-800 text-slate-200 hover:border-purple-500/40"
                  : "bg-white/80 border-slate-200 text-slate-800 shadow-sm hover:border-purple-300"
              }`}
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Down Cue */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex flex-col items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-purple-400 transition-colors cursor-pointer"
          >
            <span>Explore Portfolio</span>
            <ArrowDown size={18} className="animate-bounce text-purple-400" />
          </button>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </section>
  );
};

export default Hero;
