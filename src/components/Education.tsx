import { useState } from "react";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
  School,
  Trophy,
  Sparkles,
  LayoutGrid,
  GitCommit,
  TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";
import TiltCard from "./TiltCard";

interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  boardOrUniversity: string;
  location: string;
  period: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
  distinction: string;
  category: "higher" | "schooling";
  icon: typeof GraduationCap;
  accentColor: string;
  description: string[];
  keyHighlights: string[];
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  tags: string[];
}

const educationData: EducationItem[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    field: "Computer Science & Application Development",
    institution: "Finolex Academy of Management & Technology (FAMT)",
    boardOrUniversity: "University of Mumbai",
    location: "Ratnagiri, Maharashtra",
    period: "July 2024 – June 2026",
    score: "8.86 CGPA",
    scoreType: "CGPA",
    distinction: "3rd Rank in MCA Cohort",
    category: "higher",
    icon: GraduationCap,
    accentColor: "from-purple-500 to-indigo-500",
    description: [
      "Graduated with top academic honors, achieving 3rd Rank overall in the MCA batch with an 8.86 CGPA.",
      "Published peer-reviewed research on SkinFusion-Net hybrid deep learning in IJSRST journal (2026).",
      "Specialized in advanced backend engineering, cloud database architecture, Linux sysadmin, and DevOps.",
    ],
    keyHighlights: ["3rd University Rank", "Published Research (IJSRST)", "DevOps Specialization"],
  },
  {
    id: "bsc",
    degree: "Bachelor of Science (BSc)",
    field: "Computer Science",
    institution: "Nya. Tatyasaheb Athalye Arts, Ved. S.R. Sapre Commerce & Vid. Dadasaheb Pitre Science College",
    boardOrUniversity: "University of Mumbai",
    location: "Devrukh, Ratnagiri, Maharashtra",
    period: "July 2021 – June 2024",
    score: "9.92 CGPA",
    scoreType: "CGPA",
    distinction: "Department Topper (Rank 1)",
    category: "higher",
    icon: Trophy,
    accentColor: "from-blue-500 to-cyan-500",
    description: [
      "Graduated at the very peak of the Computer Science department with an outstanding 9.92 CGPA across 6 semesters.",
      "Selected to represent Mumbai University in Kho-Kho sports competitions at the Zonal Level.",
      "Mastered foundational computer science, Data Structures & Algorithms, C++, PHP, and Relational Database Systems.",
    ],
    keyHighlights: ["Department Rank 1", "Mumbai Univ Athlete", "Algorithms & Systems"],
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC - 12th)",
    field: "Science & Computer Science",
    institution: "G.K. Sapare Junior College",
    boardOrUniversity: "Maharashtra State Board (MSBSHSE)",
    location: "Devrukh, Ratnagiri, Maharashtra",
    period: "2019 – 2021",
    score: "89.66%",
    scoreType: "Percentage",
    distinction: "First Class with Distinction",
    category: "schooling",
    icon: School,
    accentColor: "from-emerald-500 to-teal-500",
    description: [
      "Achieved an exceptional 89.66% in the Maharashtra State Board HSC examination.",
      "Studied Science stream with core electives in Computer Science, Mathematics, and Physics.",
      "Developed foundational coding logic, algorithmic reasoning, and mathematical computation.",
    ],
    keyHighlights: ["89.66% Distinction", "Science Stream", "Computer Science Elective"],
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC - 10th)",
    field: "General Science, Mathematics & Languages",
    institution: "M.V. Sonavade High School",
    boardOrUniversity: "Maharashtra State Board (MSBSHSE)",
    location: "Ratnagiri, Maharashtra",
    period: "2018 – 2019",
    score: "86.00%",
    scoreType: "Percentage",
    distinction: "First Class with Distinction",
    category: "schooling",
    icon: Award,
    accentColor: "from-amber-500 to-orange-500",
    description: [
      "Secured 86.00% with First Class Distinction in the Maharashtra State Board Class 10 examination.",
      "Earned Grade 'A' in the Maharashtra State Elementary Level Government Drawing Examination.",
      "Active school participant in athletics, state-level Kho-Kho competitions, and academic exhibitions.",
    ],
    keyHighlights: ["86.00% Distinction", "Drawing Exam Grade A", "Athletics & Academics"],
  },
];

const certifications: Certification[] = [
  { title: "React Essential Training", issuer: "LinkedIn Learning", date: "July 2025", tags: ["React.js", "Frontend", "Component Architecture"] },
  { title: "React Hooks", issuer: "LinkedIn Learning", date: "July 2025", tags: ["Hooks", "State Management", "Performance"] },
  { title: "React: Creating and Hosting a Full-Stack Site", issuer: "LinkedIn Learning", date: "July 2025", tags: ["Full-Stack", "Hosting", "APIs"] },
  { title: "React.js: Building an Interface", issuer: "LinkedIn Learning", date: "July 2025", tags: ["UI/UX", "Component Design", "Tailwind"] },
  { title: "React Native", issuer: "Onwingspan", date: "June 2025", tags: ["Mobile", "Cross-Platform", "React Native"] },
  { title: "Git & GitHub Bootcamp", issuer: "LetsUpgrade", date: "June 2025", credentialId: "LUEGGJUN12564", tags: ["Git", "GitHub", "VCS", "DevOps"] },
  { title: "Beginning Python", issuer: "Infosys Springboard", date: "June 2025", tags: ["Python", "Scripting", "OOP"] },
  { title: "Creating GitHub Portfolios", issuer: "LinkedIn Learning", date: "June 2025", tags: ["GitHub", "Showcase", "Markdown"] },
  { title: "UX and UI – Designing with Color Theory", issuer: "Onwingspan", date: "2025", tags: ["Design", "Color Theory", "Accessibility"] },
  { title: "Getting Started with Artificial Intelligence", issuer: "IBM SkillsBuild / Credly", date: "2024", tags: ["AI", "Machine Learning", "IBM"] },
  { title: "Introduction to Artificial Intelligence (MDL-211)", issuer: "IBM SkillsBuild", date: "2024", tags: ["AI", "Algorithms", "Neural Networks"] },
];

const Education = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState<"all" | "higher" | "schooling" | "certifications">("all");
  const [viewMode, setViewMode] = useState<"cards" | "timeline">("cards");

  const filteredEducation = educationData.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <section
      id="education"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

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
            <GraduationCap size={14} />
            Complete Academic Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Education &{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            From foundational secondary schooling to postgraduate excellence: MCA (8.86 CGPA), BSc (9.92 CGPA), HSC (89.66%), and SSC (86.00%).
          </p>

          {/* Quick Stat Pill Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-2xl mx-auto">
            <div className={`p-3 rounded-2xl border ${isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
              <div className="text-xl font-black text-amber-400">8.86 CGPA</div>
              <div className="text-[11px] text-slate-400">MCA 3rd Rank</div>
            </div>
            <div className={`p-3 rounded-2xl border ${isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
              <div className="text-xl font-black text-blue-400">9.92 CGPA</div>
              <div className="text-[11px] text-slate-400">BSc CS Topper</div>
            </div>
            <div className={`p-3 rounded-2xl border ${isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
              <div className="text-xl font-black text-emerald-400">89.66%</div>
              <div className="text-[11px] text-slate-400">HSC (12th Science)</div>
            </div>
            <div className={`p-3 rounded-2xl border ${isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
              <div className="text-xl font-black text-purple-400">86.00%</div>
              <div className="text-[11px] text-slate-400">SSC (10th Board)</div>
            </div>
          </div>
        </motion.div>

        {/* Filter Controls & View Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full sm:w-auto">
            {[
              { id: "all", label: "All Education (4)", icon: GraduationCap },
              { id: "higher", label: "University (MCA & BSc)", icon: Trophy },
              { id: "schooling", label: "Junior College & High School (HSC & SSC)", icon: School },
              { id: "certifications", label: "Certifications (11)", icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as "all" | "higher" | "schooling" | "certifications")}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 ${
                    isSelected
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-[1.02]"
                      : isDark
                      ? "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-purple-300 shadow-sm"
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* View Toggle (Cards vs Timeline) when education is active */}
          {activeCategory !== "certifications" && (
            <div className={`inline-flex p-1 rounded-xl border ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
              <button
                onClick={() => setViewMode("cards")}
                aria-label="Cards view"
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === "cards"
                    ? "bg-purple-600 text-white shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <LayoutGrid size={14} />
                <span className="hidden sm:inline">Cards</span>
              </button>
              <button
                onClick={() => setViewMode("timeline")}
                aria-label="Timeline view"
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === "timeline"
                    ? "bg-purple-600 text-white shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <GitCommit size={14} />
                <span className="hidden sm:inline">Timeline</span>
              </button>
            </div>
          )}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeCategory === "certifications" ? (
            /* Certifications View */
            <motion.div
              key="certifications-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  whileHover={{ y: -4 }}
                  className={`p-5 rounded-2xl border transition-all duration-300 shadow-md flex flex-col justify-between ${
                    isDark
                      ? "bg-slate-900/70 border-slate-800 hover:border-purple-500/40"
                      : "bg-white border-slate-200 hover:border-purple-300 shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        <BookOpen size={16} />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                        <Calendar size={11} />
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm mb-1 text-slate-100 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-medium text-purple-400 mb-3">
                      {cert.issuer}
                    </p>

                    {cert.credentialId && (
                      <div className="mb-3 text-[11px] text-slate-400 font-mono bg-slate-800/60 px-2.5 py-1 rounded-md inline-block border border-slate-700/50">
                        ID: {cert.credentialId}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-200/20">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] px-2 py-0.5 rounded-md border ${
                          isDark
                            ? "bg-slate-800 border-slate-700 text-slate-300"
                            : "bg-slate-50 border-slate-200 text-slate-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : viewMode === "cards" ? (
            /* Cards View for Education (MCA, BSc, HSC, SSC) */
            <motion.div
              key="education-cards"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6 sm:gap-8"
            >
              {filteredEducation.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="h-full"
                  >
                    <TiltCard
                      tiltDegree={7}
                      scale={1.02}
                      className={`h-full p-6 sm:p-8 rounded-3xl border shadow-xl flex flex-col justify-between transition-all duration-300 ${
                        isDark
                          ? "bg-slate-900/80 border-slate-800 hover:border-purple-500/50"
                          : "bg-white border-slate-200 hover:border-purple-300 shadow-sm"
                      }`}
                    >
                      <div>
                        {/* Top Bar: Icon + Distinction Badge */}
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${item.accentColor} text-white shadow-lg shadow-purple-500/20`}>
                            <Icon size={24} />
                          </div>
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1.5 shadow-sm">
                            <Award size={13} />
                            {item.distinction}
                          </span>
                        </div>

                        {/* Degree Title & Field */}
                        <h3 className="text-xl sm:text-2xl font-black text-slate-100 dark:text-white tracking-tight mb-1">
                          {item.degree}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-purple-400 mb-2">
                          {item.field}
                        </p>
                        <p className="text-sm font-medium text-slate-300 mb-1">
                          {item.institution}
                        </p>
                        <p className="text-xs text-slate-400 mb-4 font-mono">
                          {item.boardOrUniversity}
                        </p>

                        {/* Meta Pills: Period & Location */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-6 pb-4 border-b border-slate-200/20">
                          <span className="flex items-center gap-1 bg-slate-800/40 px-2.5 py-1 rounded-lg">
                            <Calendar size={13} className="text-purple-400" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1 bg-slate-800/40 px-2.5 py-1 rounded-lg">
                            <MapPin size={13} className="text-amber-400" />
                            {item.location}
                          </span>
                        </div>

                        {/* Detailed Bullet Points */}
                        <div className="space-y-2.5 mb-6">
                          {item.description.map((desc, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                              <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span className={isDark ? "text-slate-300" : "text-slate-700"}>
                                {desc}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Tag Highlights */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {item.keyHighlights.map((hl) => (
                            <span
                              key={hl}
                              className="text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                            >
                              {hl}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Score Ribbon */}
                      <div className="pt-4 border-t border-slate-200/20 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                          <TrendingUp size={14} className="text-emerald-400" />
                          <span>Academic Performance</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                            {item.score}
                          </span>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* Interactive Timeline View */
            <motion.div
              key="education-timeline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-blue-500 before:to-emerald-500"
            >
              {filteredEducation.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                      isEven ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Center Node Pin */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 w-9 h-9 rounded-2xl bg-slate-900 border-2 border-purple-400 text-purple-400 flex items-center justify-center shadow-lg shadow-purple-500/30 z-10">
                      <Icon size={16} />
                    </div>

                    {/* Content Card */}
                    <div
                      className={`ml-12 sm:ml-0 w-full sm:w-[calc(50%-2rem)] p-6 rounded-3xl border shadow-xl transition-all duration-300 hover:scale-[1.01] ${
                        isDark
                          ? "bg-slate-900/90 border-slate-800 hover:border-purple-500/40"
                          : "bg-white border-slate-200 hover:border-purple-300 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-bold text-purple-400 flex items-center gap-1">
                          <Calendar size={13} />
                          {item.period}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {item.score}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-100 dark:text-white mb-0.5">
                        {item.degree}
                      </h3>
                      <p className="text-xs font-semibold text-purple-400 mb-1">
                        {item.field}
                      </p>
                      <p className="text-xs text-slate-300 mb-2">
                        {item.institution} • <span className="text-slate-400">{item.location}</span>
                      </p>

                      <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/50 mb-3 text-xs text-amber-400 font-semibold flex items-center gap-1.5">
                        <Award size={14} />
                        <span>{item.distinction}</span>
                      </div>

                      <ul className="space-y-1.5 text-xs text-slate-300 mb-3">
                        {item.description.map((desc, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-1.5">
                            <span className="text-purple-400 mt-0.5">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1">
                        {item.keyHighlights.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Education;
