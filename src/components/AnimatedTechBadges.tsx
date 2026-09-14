import React from "react";
import { motion } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";
import { TechIcon, TechIconName } from "./TechIcons";
import { ArrowUpRight } from "lucide-react";

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

export const HERO_SATELLITE_BADGES: TechBadgeConfig[] = [
  {
    id: "laravel-php",
    label: "Laravel & PHP",
    sub: "REST APIs & Architecture",
    primaryIcon: "laravel",
    secondaryIcon: "php",
    color: "#FF2D20",
    glowColor: "rgba(255, 45, 32, 0.4)",
    // Positioned cleanly above the terminal switcher so it never overlaps
    positionClass: "-top-14 sm:-top-16 lg:-top-16 -left-2 sm:-left-4 lg:-left-6",
    delay: 0.05,
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
    // Positioned cleanly above the terminal top right
    positionClass: "-top-14 sm:-top-16 lg:-top-16 -right-2 sm:-right-4 lg:-right-6",
    delay: 0.15,
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
    positionClass: "-bottom-12 sm:-bottom-12 -left-2 sm:-left-4 lg:-left-6",
    delay: 0.25,
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
    positionClass: "-bottom-12 sm:-bottom-12 -right-2 sm:-right-4 lg:-right-6",
    delay: 0.35,
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
}) => {
  const { isDark } = useTheme();

  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block z-20">
      {HERO_SATELLITE_BADGES.map((badge, idx) => {
        return (
          <motion.div
            key={badge.id}
            className={`absolute ${badge.positionClass} pointer-events-auto`}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -7, 0],
            }}
            transition={{
              opacity: { duration: 0.4, delay: badge.delay },
              scale: { duration: 0.4, delay: badge.delay },
              y: {
                duration: 4.2 + idx * 0.4,
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
              className={`group text-left p-2 sm:p-2.5 rounded-2xl border backdrop-blur-md shadow-xl flex items-center gap-2.5 transition-all duration-300 cursor-pointer relative overflow-hidden ${
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
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl border flex items-center justify-center shadow-md ${
                    isDark ? "bg-slate-950" : "bg-slate-100"
                  }`}
                >
                  <TechIcon name={badge.primaryIcon} size={16} />
                </div>
                {badge.secondaryIcon && (
                  <div
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg border border-slate-700 flex items-center justify-center shadow-sm -mt-2.5 ${
                      isDark ? "bg-slate-900" : "bg-white"
                    }`}
                  >
                    <TechIcon name={badge.secondaryIcon} size={12} />
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
                    className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[8px] px-1 py-0.5 rounded font-bold uppercase tracking-wider flex items-center gap-0.5 ${
                      isDark
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        : "bg-purple-100 text-purple-700 border border-purple-200"
                    }`}
                  >
                    <span>3D</span>
                    <ArrowUpRight size={9} />
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
