import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

export const themes = {
  light: {
    name: 'light',
    primary: '#14b8a6',
    secondary: '#6b7280',
    background: '#ffffff',
    text: '#111827',
    card: '#ffffff',
    border: '#e5e7eb',
  },
  dark: {
    name: 'dark',
    primary: '#14b8a6',
    secondary: '#9ca3af',
    background: '#030712',  // This is very dark gray/black
    text: '#f9fafb',
    card: '#1f2937',
    border: '#374151',
  },
  colorful: {
    name: 'colorful',
    primary: '#f97316',
    secondary: '#6b7280',
    background: '#fff7ed',  // Warm off-white
    text: '#111827',
    card: '#ffffff',
    border: '#fed7aa',
  },
  nord: {
    name: 'nord',
    primary: '#3b82f6',
    secondary: '#64748b',
    background: '#f7f9fc',  // Cool light blue-gray
    text: '#0f172a',
    card: '#ffffff',
    border: '#e2e8f0',
  },
};

export const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [themeName, setThemeName] = useState('light');
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    if (themeName === 'system') {
      setTheme(systemColorScheme === 'dark' ? themes.dark : themes.light);
    } else {
      setTheme(themes[themeName] || themes.light);
    }
  }, [themeName, systemColorScheme]);

  return (
    <ThemeContext.Provider value={{ theme, themeName, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};