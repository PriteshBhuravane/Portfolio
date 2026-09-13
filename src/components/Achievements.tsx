import {
  Trophy,
  Award,
  BookOpen,
  FileCheck2,
  Sparkles,
  ExternalLink,
  Flame,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";
import TiltCard from "./TiltCard";
import { triggerConfetti } from "@/utils/confetti";

const Achievements = () => {
  const { isDark } = useTheme();

  const achievementsList = [
    {
      icon: BookOpen,
      badge: "Published Research",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      title: "SkinFusion-Net: Cross-Attention Hybrid Deep Learning",
      subtitle: "Published in IJSRST (International Journal of Scientific Research in Science and Technology)",
      period: "2026",
      description:
        "Co-authored peer-reviewed research paper introducing a cross-attention hybrid deep learning network for skin disease categorization, demonstrating superior precision over standard convolutional networks.",
      highlights: [
        "Peer-reviewed journal publication",
        "Hybrid cross-attention mechanism",
        "Evaluated on benchmark dermatological datasets",
      ],
    },
    {
      icon: Award,
      badge: "Academic Distinction",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      title: "3rd Rank in Master of Computer Applications (MCA)",
      subtitle: "Finolex Academy of Management & Technology (FAMT), Ratnagiri",
      period: "2024 – 2026",
      description:
        "Ranked 3rd across the entire MCA cohort with a stellar cumulative grade point average of 8.86 CGPA, demonstrating top-tier academic rigor in software architecture, distributed systems, and database engineering.",
      highlights: [
        "8.86 Cumulative Grade Point Average",
        "3rd Rank University Program Honors",
        "Leadership in technical workshops",
      ],
    },
    {
      icon: Trophy,
      badge: "Department Topper",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      title: "Topper in Bachelor of Science (Computer Science)",
      subtitle: "Nya. Tatyasaheb Athalye Arts, Sapre Commerce & Pitre Science College",
      period: "2021 – 2024",
      description:
        "Graduated with the highest academic honors in the Computer Science department with an outstanding 9.92 CGPA over three years of intensive computer science coursework.",
      highlights: [
        "9.92 CGPA across 6 semesters",
        "Consistent Department Rank 1",
        "Excellence in algorithms & programming",
      ],
    },
    {
      icon: Flame,
      badge: "State-Level Sports",
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      title: "Mumbai University Representative in Kho-Kho",
      subtitle: "Zonal Level & Ratnagiri District Senior State Championship",
      period: "2023 – 2024",
      description:
        "Selected to represent Mumbai University in Kho-Kho sports competitions at the Zonal Level. Selected as a key player representing Ratnagiri District in the Senior State Championship.",
      highlights: [
        "Mumbai University Zonal Representation",
        "Ratnagiri District Senior State Selection",
        "High agility, tactical discipline & team leadership",
      ],
    },
  ];

  return (
    <section
      id="achievements"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-slate-900/50" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Trophy size={14} />
            Honors & Distinctions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Achievements &{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Publications
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Recognized for peer-reviewed machine learning research, university academic ranks, and state-level athletic leadership.
          </p>
        </div>

        {/* Research Publication Spotlight Banner */}
        <div
          className={`p-6 sm:p-8 rounded-3xl border mb-12 shadow-2xl relative overflow-hidden ${
            isDark
              ? "bg-gradient-to-r from-purple-950/40 via-slate-900 to-blue-950/40 border-purple-500/30"
              : "bg-gradient-to-r from-purple-50 via-white to-blue-50 border-purple-200"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                  <Star size={13} className="text-amber-400 fill-amber-400" />
                  Peer-Reviewed Journal Publication
                </span>
                <span className="text-xs text-slate-400 font-mono">IJSRST • 2026</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100 dark:text-white">
                SkinFusion-Net: Cross-Attention Hybrid Deep Learning for Skin Disease Classification
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                Authored innovative biomedical computer vision model combining cross-attention mechanisms with convolutional neural networks for accurate multi-class dermatological diagnostics.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 text-center">
                <div className="text-xl font-extrabold text-purple-400">Co-Author</div>
                <div className="text-[11px] text-slate-400">Research Scholar</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Key Achievement Cards with 3D TiltCards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievementsList.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <TiltCard
                  tiltDegree={8}
                  scale={1.02}
                  className={`h-full p-6 sm:p-7 rounded-3xl border transition-all duration-300 shadow-xl flex flex-col justify-between ${
                    isDark
                      ? "bg-slate-800/60 border-slate-700/70 hover:border-purple-500/50"
                      : "bg-white border-slate-200 hover:border-purple-300 shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400">
                        <Icon size={22} />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold mb-1 text-slate-100 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-purple-400 mb-3">
                      {item.subtitle} • {item.period}
                    </p>

                    <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-4 border-t border-slate-200/20">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <FileCheck2 size={13} className="text-emerald-400 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
