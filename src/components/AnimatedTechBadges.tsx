import { motion } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";
import { Server, Database, Code2, Terminal, Cpu, Cloud, Layers, ShieldCheck } from "lucide-react";

interface FloatingBadgeProps {
  icon: typeof Server;
  label: string;
  sub: string;
  color: string;
  positionClass: string;
  delay: number;
}

const BADGES = [
  {
    icon: Server,
    label: "Laravel & PHP",
    sub: "REST APIs & Backend",
    color: "#f43f5e",
    positionClass: "top-2 -left-4 sm:-left-8",
    delay: 0,
  },
  {
    icon: Terminal,
    label: "Linux & DevOps",
    sub: "Ubuntu, Nginx, CI/CD",
    color: "#10b981",
    positionClass: "bottom-12 -left-3 sm:-left-6",
    delay: 0.6,
  },
  {
    icon: Code2,
    label: "React & Native",
    sub: "Web & Mobile Apps",
    color: "#38bdf8",
    positionClass: "top-8 -right-4 sm:-right-8",
    delay: 0.3,
  },
  {
    icon: Database,
    label: "MySQL & Mongo",
    sub: "Scalable Databases",
    color: "#f59e0b",
    positionClass: "bottom-4 -right-3 sm:-right-6",
    delay: 0.9,
  },
];

export const AnimatedTechBadges = () => {
  const { isDark } = useTheme();

  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {BADGES.map((badge, idx) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={badge.label}
            className={`absolute ${badge.positionClass} z-20 pointer-events-auto`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: badge.delay },
              scale: { duration: 0.5, delay: badge.delay },
              y: {
                duration: 4 + idx * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: badge.delay,
              },
            }}
            whileHover={{ scale: 1.08, y: -4 }}
          >
            <div
              className={`p-2.5 sm:p-3 rounded-2xl border backdrop-blur-md shadow-xl flex items-center gap-3 transition-all ${
                isDark
                  ? "bg-slate-900/90 border-slate-700/80 shadow-black/40 text-slate-100"
                  : "bg-white/95 border-slate-200 shadow-slate-300/50 text-slate-800"
              }`}
            >
              <div
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0"
                style={{ backgroundColor: badge.color }}
              >
                <Icon size={18} />
              </div>
              <div className="pr-1">
                <div className="text-xs font-bold leading-tight">{badge.label}</div>
                <div className="text-[10px] text-slate-400 leading-tight">{badge.sub}</div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedTechBadges;
