import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Palette, Check } from "lucide-react";
import { useTheme, THEMES, ColorTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { isDark, toggleTheme, colorTheme, setColorTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex items-center gap-1.5" ref={dropdownRef}>
      {/* Quick Dark/Light Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className={`h-9 w-9 rounded-xl border transition-all duration-300 ${
          isDark
            ? "border-slate-700 bg-slate-800/80 text-amber-300 hover:bg-slate-700"
            : "border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-100 shadow-sm"
        }`}
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <div className="relative w-4 h-4">
          <Sun
            className={`absolute inset-0 transition-all duration-500 ${
              isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 text-amber-500"
            }`}
            size={16}
          />
          <Moon
            className={`absolute inset-0 transition-all duration-500 ${
              isDark ? "rotate-0 scale-100 opacity-100 text-amber-300" : "-rotate-90 scale-0 opacity-0"
            }`}
            size={16}
          />
        </div>
        <span className="sr-only">Toggle Dark Mode</span>
      </Button>

      {/* Palette Selector Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`h-9 px-2.5 rounded-xl border flex items-center gap-1.5 transition-all duration-300 text-xs font-medium ${
          isDark
            ? "border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-700"
            : "border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-100 shadow-sm"
        }`}
        title="Change Visual Theme"
      >
        <Palette size={15} className="text-purple-400" />
        <span className="hidden sm:inline capitalize font-semibold tracking-wide">
          {colorTheme}
        </span>
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute right-0 top-12 w-64 p-2 rounded-2xl shadow-2xl border backdrop-blur-xl z-50 animate-fade-in-scale ${
            isDark
              ? "bg-slate-900/95 border-slate-700 text-slate-100 shadow-black/60"
              : "bg-white/95 border-slate-200 text-slate-800 shadow-slate-300/60"
          }`}
        >
          <div className="px-3 py-2 border-b border-slate-200/20 mb-1">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Select Theme Aesthetic
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Instant animation & color palette change
            </p>
          </div>

          <div className="space-y-1">
            {THEMES.map((theme) => {
              const isSelected = colorTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    setColorTheme(theme.id as ColorTheme);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all duration-200 ${
                    isSelected
                      ? isDark
                        ? "bg-slate-800 text-white border border-slate-600"
                        : "bg-slate-100 text-slate-900 border border-slate-300"
                      : isDark
                      ? "hover:bg-slate-800/60 text-slate-300"
                      : "hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{theme.icon}</span>
                    <div>
                      <div className="text-xs font-bold flex items-center gap-1.5">
                        {theme.name}
                        <span
                          className="inline-block w-2 h-2 rounded-full"
                          style={{ backgroundColor: theme.primaryColor }}
                        />
                      </div>
                      <div className="text-[10px] text-slate-400 line-clamp-1">
                        {theme.description}
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <Check size={15} className="text-emerald-400 flex-shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
