import { useState } from "react";
import {
  User,
  Server,
  Terminal,
  Smartphone,
  Cpu,
  Globe,
  Trophy,
  Award,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  FileText,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";
import ResumeModal from "./ResumeModal";
import TiltCard from "./TiltCard";
import { triggerConfetti } from "@/utils/confetti";

const About = () => {
  const { isDark } = useTheme();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const pillars = [
    {
      icon: Server,
      title: "Backend & RESTful APIs",
      description:
        "Building robust backend architectures with PHP, Laravel, Node.js, and Express.js. Designing clean REST APIs, auth workflows, and optimized SQL/NoSQL schemas.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Terminal,
      title: "DevOps & Linux Administration",
      description:
        "Managing Linux/Ubuntu servers, Nginx reverse proxies, Git/GitLab CI pipelines, environment configurations, and production troubleshooting at Pleximus Inc.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Applications",
      description:
        "Creating responsive, high-performance user interfaces with React.js, React Native, and Flutter for unified web and mobile experiences.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "Machine Learning & Research",
      description:
        "Co-authored 'SkinFusion-Net' published in IJSRST. Experience training YOLOv8 and EfficientNet models for computer vision and NLP classification.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const languagesSpoken = [
    { name: "Marathi", level: "Native / Full Professional", percent: 100 },
    { name: "Hindi", level: "Full Professional", percent: 95 },
    { name: "English", level: "Professional Working", percent: 80 },
  ];

  return (
    <section
      id="about"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-slate-950" : "bg-white"
      }`}
    >
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
            <User size={14} />
            About Me
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Engineering with{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Purpose & Precision
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            A dedicated software developer based in Ratnagiri, combining deep backend discipline with practical DevOps operations.
          </p>
        </motion.div>

        {/* Bio & Details Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16">
          {/* Main Story & Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div
              className={`p-6 sm:p-8 rounded-3xl border shadow-xl ${
                isDark
                  ? "bg-slate-900/80 border-slate-800 text-slate-200"
                  : "bg-slate-50/90 border-slate-200 text-slate-800"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-purple-400">Pritesh Suresh Bhuravane</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-400">
                <p>
                  I am a <strong className="text-purple-400">Software Developer</strong> with hands-on
                  experience in backend development, DevOps, Linux server administration, REST APIs,
                  database management, Git/GitLab, and application deployment.
                </p>
                <p>
                  As an <strong className="text-emerald-400">MCA graduate</strong> from Finolex Academy of
                  Management & Technology (Ratnagiri), I secured an <strong className="text-amber-400">8.86 CGPA</strong> and{" "}
                  <strong className="text-amber-400">3rd Rank</strong> in the MCA program (2026), backed by a{" "}
                  <strong className="text-blue-400">9.92 CGPA</strong> in Bachelor of Science in Computer Science.
                </p>
                <p>
                  Currently serving as a <strong className="text-purple-400">DevOps Executive</strong> at{" "}
                  <span className="font-semibold text-slate-200">Pleximus Inc</span>, I support continuous application
                  deployments, server stability on Linux/Ubuntu, and collaborative backend operations. I am deeply
                  committed to writing clean, maintainable code and maintaining zero-downtime environments.
                </p>
              </div>

              {/* Verified Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-200/20 text-xs sm:text-sm">
                {[
                  "Active DevOps Executive @ Pleximus Inc",
                  "MCA 3rd Ranker (8.86 CGPA)",
                  "Published Researcher (IJSRST)",
                  "BSc Computer Science Topper (9.92 CGPA)",
                  "Linux & Nginx Server Administrator",
                  "Full-Stack: Laravel, Node, React, Mobile",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                    <span className={isDark ? "text-slate-300" : "text-slate-700"}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Spoken Box */}
            <div
              className={`p-6 rounded-3xl border shadow-lg ${
                isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"
              }`}
            >
              <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-4 flex items-center gap-2">
                <Globe size={16} />
                Languages Known
              </h4>
              <div className="space-y-4">
                {languagesSpoken.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className={isDark ? "text-slate-200" : "text-slate-800"}>
                        {lang.name}
                      </span>
                      <span className="text-purple-400">{lang.level}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-700"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Details, Education & Sports Highlight */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Card */}
            <div
              className={`p-6 rounded-3xl border shadow-xl ${
                isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200"
              }`}
            >
              <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-4">
                Personal & Contact Info
              </h4>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Location</div>
                    <div className="font-semibold text-slate-200">Ratnagiri, Maharashtra, India</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400">Email Address</div>
                    <a
                      href="mailto:bhuravanepritesh@gmail.com"
                      className="font-semibold text-slate-200 hover:text-purple-400 truncate block"
                    >
                      bhuravanepritesh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Contact Number</div>
                    <a
                      href="tel:9405059038"
                      className="font-semibold text-slate-200 hover:text-purple-400"
                    >
                      +91 9405059038
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Degree & Year</div>
                    <div className="font-semibold text-slate-200">MCA, 2024–2026 (Rank 3)</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/20">
                <button
                  onClick={() => {
                    triggerConfetti();
                    setIsResumeModalOpen(true);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-95 transition-all duration-200 hover:scale-[1.02] cursor-pointer shadow-md"
                >
                  <FileText size={16} />
                  Open Interactive Resume Modal
                </button>
              </div>
            </div>

            {/* Sports & Extracurriculars Spotlight */}
            <div
              className={`p-6 rounded-3xl border shadow-xl relative overflow-hidden ${
                isDark
                  ? "bg-slate-900/80 border-slate-800 text-slate-200"
                  : "bg-slate-50 border-slate-200 text-slate-800"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Trophy size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-base">Athletics & Sports Honors</h4>
                  <p className="text-xs text-slate-400">State-level competitive athlete</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-3">
                Selected to represent <strong className="text-amber-400">Mumbai University in Kho-Kho</strong> (Zonal Level).
                Furthermore selected for the <strong className="text-purple-400">Senior State Championship</strong> representing
                Ratnagiri District (2023–24).
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                <Award size={12} />
                Team Leadership & Strategic Coordination
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Pillars with 3D TiltCards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <TiltCard
                  tiltDegree={10}
                  scale={1.03}
                  className={`h-full p-6 rounded-3xl border transition-all duration-300 shadow-lg group ${
                    isDark
                      ? "bg-slate-900/60 border-slate-800 hover:border-purple-500/40"
                      : "bg-white border-slate-200 hover:border-purple-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${pillar.color} p-3 text-white flex items-center justify-center mb-5 shadow-lg shadow-purple-500/15 group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={22} />
                  </div>
                  <h4 className="text-base font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </section>
  );
};

export default About;
