import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorTheme = 'classic' | 'cyber' | 'devops' | 'ocean';

export interface ThemeConfig {
  id: ColorTheme;
  name: string;
  description: string;
  icon: string;
  badgeBg: string;
  primaryColor: string;
  accentColor: string;
}

export const THEMES: ThemeConfig[] = [
  {
    id: 'classic',
    name: 'Classic Executive',
    description: 'Timeless slate, rich charcoal & warm champagne gold',
    icon: '🏛️',
    badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    primaryColor: '#d97706',
    accentColor: '#475569',
  },
  {
    id: 'cyber',
    name: 'Midnight Nebula',
    description: 'High-energy cyber purple, electric blue & neon violet',
    icon: '🔮',
    badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    primaryColor: '#a855f7',
    accentColor: '#3b82f6',
  },
  {
    id: 'devops',
    name: 'DevOps Terminal',
    description: 'Matrix obsidian black, vivid emerald green & console vibes',
    icon: '⚡',
    badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    primaryColor: '#10b981',
    accentColor: '#064e3b',
  },
  {
    id: 'ocean',
    name: 'Oceanic Azure',
    description: 'Deep navy, electric cyan & luminous cloud blues',
    icon: '🌊',
    badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    primaryColor: '#06b6d4',
    accentColor: '#1e40af',
  },
];

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
  currentThemeConfig: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [colorTheme, setColorThemeState] = useState<ColorTheme>('cyber');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio_dark_mode');
    if (savedTheme !== null) {
      setIsDark(savedTheme === 'true');
    }
    const savedColorTheme = localStorage.getItem('portfolio_color_theme') as ColorTheme | null;
    if (savedColorTheme && ['classic', 'cyber', 'devops', 'ocean'].includes(savedColorTheme)) {
      setColorThemeState(savedColorTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio_dark_mode', String(isDark));
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('portfolio_color_theme', colorTheme);
    document.documentElement.setAttribute('data-theme', colorTheme);
  }, [colorTheme]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const setColorTheme = (theme: ColorTheme) => {
    setColorThemeState(theme);
  };

  const currentThemeConfig = THEMES.find((t) => t.id === colorTheme) || THEMES[1];

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
        colorTheme,
        setColorTheme,
        currentThemeConfig,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
