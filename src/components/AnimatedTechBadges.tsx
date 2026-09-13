import { motion } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";
import { TechIcon, TechIconName } from "./TechIcons";
import { Sparkles, ArrowUpRight } from "lucide-react";

export interface TechBadgeConfig {
  id: string;
  label: string;
  sub: string;
  primaryIcon: TechIconName;
  secondaryIcon?: TechIconName;
  color: string;
  glowColor: string;
  positionClass: string;
  delay: number;
  category: "backend" | "devops" | "frontend" | "database";
  targetTechId: string;
}

export const HERO_TECH_BADGES: TechBadgeConfig[] = [
  {
    id: "laravel-php",
    label: "Laravel & PHP",
    sub: "REST APIs & Architecture",
    primaryIcon: "laravel",
    secondaryIcon: "php",
    color: "#FF2D20",
    glowColor: "rgba(255, 45, 32, 0.4)",
    // Positioned safely above-left of the terminal so it does NOT collide with the view switcher
    positionClass: "-top-8 sm:-top-10 -left-2 sm:-left-6 lg:-left-10",
    delay: 0,
    category: "backend",
    targetTechId: "laravel",
  },
  {
    id: "react-mobile",
    label: "React & Native",
    sub: "Web & Mobile Frontends",
    primaryIcon: "react",
    secondaryIcon: "flutter",
    color: "#61DAFB",
    glowColor: "rgba(97, 218, 251, 0.4)",
    positionClass: "-top-8 sm:-top-10 -right-2 sm:-right-6 lg:-right-10",
    delay: 0.25,
    category: "frontend",
    targetTechId: "react",
  },
  {
    id: "linux-devops",
    label: "Linux & DevOps",
    sub: "Ubuntu, Nginx, CI/CD",
    primaryIcon: "linux",
    secondaryIcon: "docker",
    color: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.4)",
    positionClass: "-bottom-8 sm:-bottom-10 -left-2 sm:-left-6 lg:-left-10",
    delay: 0.5,
    category: "devops",
    targetTechId: "linux",
  },
  {
    id: "mysql-mongo",
    label: "MySQL & Mongo",
    sub: "Scalable Databases & ACID",
    primaryIcon: "mysql",
    secondaryIcon: "mongo",
    color: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.4)",
    positionClass: "-bottom-8 sm:-bottom-10 -right-2 sm:-right-6 lg:-right-10",
    delay: 0.75,
    category: "database",
    targetTechId: "mysql",
  },
];

interface AnimatedTechBadgesProps {
  onSelectBadge?: (techId: string) => void;
  activeViewMode?: "terminal" | "3d-orbit";
}

export const AnimatedTechBadges: React.FC<AnimatedTechBadgesProps> = ({
  onSelectBadge,
  activeViewMode,
}) => {
  const { isDark } = useTheme();

  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {HERO_TECH_BADGES.map((badge, idx) => {
        return (
          <motion.div
            key={badge.id}
            className={`absolute ${badge.positionClass} z-20 pointer-events-auto`}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: badge.delay },
              scale: { duration: 0.5, delay: badge.delay },
              y: {
                duration: 4.5 + idx * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: badge.delay,
              },
            }}
            whileHover={{ scale: 1.07, y: -4 }}
            whileTap={{ scale: 0.96 }}
          >
            <button
              type="button"
              onClick={() => onSelectBadge?.(badge.targetTechId)}
              title={`Click to inspect ${badge.label} in 3D Tech Orbit`}
              className={`group text-left p-2.5 sm:p-3 rounded-2xl border backdrop-blur-md shadow-xl flex items-center gap-3 transition-all duration-300 cursor-pointer relative overflow-hidden ${
                isDark
                  ? "bg-slate-900/90 border-slate-700/80 shadow-black/50 text-slate-100 hover:border-white/50"
                  : "bg-white/95 border-slate-200/90 shadow-slate-300/60 text-slate-800 hover:border-slate-400"
              }`}
            >
              {/* Subtle Brand Glow Halo on Hover */}
              <div
                style={{ backgroundColor: badge.color }}
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-sm pointer-events-none"
              />

              {/* Dual Brand Icon Cluster */}
              <div className="relative flex items-center -space-x-1.5 flex-shrink-0">
                <div
                  style={{ borderColor: badge.color }}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center shadow-md ${
                    isDark ? "bg-slate-950" : "bg-slate-100"
                  }`}
                >
                  <TechIcon name={badge.primaryIcon} size={18} />
                </div>
                {badge.secondaryIcon && (
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg border border-slate-700 flex items-center justify-center shadow-sm -mt-3 ${
                      isDark ? "bg-slate-900" : "bg-white"
                    }`}
                  >
                    <TechIcon name={badge.secondaryIcon} size={14} />
                  </div>
                )}
              </div>

              {/* Text Information & 3D Cue */}
              <div className="pr-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold leading-tight tracking-tight">
                    {badge.label}
                  </span>
                  <span
                    className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider flex items-center gap-0.5 ${
                      isDark
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        : "bg-purple-100 text-purple-700 border border-purple-200"
                    }`}
                  >
                    <span>3D Orbit</span>
                    <ArrowUpRight size={10} />
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 leading-tight mt-0.5">
                  {badge.sub}
                </div>
              </div>
            </button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedTechBadges;
