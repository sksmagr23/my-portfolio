'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

export type PortfolioTheme = 'blue' | 'green';

const STORAGE_KEY = 'portfolio-theme';

interface ThemeContextValue {
  theme: PortfolioTheme;
  setTheme: (theme: PortfolioTheme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'blue',
  setTheme: () => {},
  toggleTheme: () => {},
});

function applyThemeToDom(theme: PortfolioTheme) {
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = theme;
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<PortfolioTheme>('blue');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      const initial: PortfolioTheme =
        saved === 'green' || saved === 'blue'
          ? saved
          : document.documentElement.dataset.theme === 'green'
            ? 'green'
            : 'blue';
      setThemeState(initial);
      applyThemeToDom(initial);
    } catch {
      applyThemeToDom('blue');
    }

    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && (e.newValue === 'blue' || e.newValue === 'green')) {
        setThemeState(e.newValue);
        applyThemeToDom(e.newValue);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const setTheme = useCallback((next: PortfolioTheme) => {
    setThemeState(next);
    applyThemeToDom(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: PortfolioTheme = prev === 'blue' ? 'green' : 'blue';
      applyThemeToDom(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore storage errors in restricted environments
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
