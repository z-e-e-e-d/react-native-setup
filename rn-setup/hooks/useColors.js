import { useTheme } from '../context/ThemeContext';

export const useColors = () => {
  const { theme } = useTheme();
  
  return {
    // Direct color values
    primary: theme.primary,
    secondary: theme.secondary,
    background: theme.background,
    text: theme.text,
    card: theme.card,
    border: theme.border,
    
    // Helper for gradients
    getPrimaryGradient: () => [theme.primary, `${theme.primary}cc`],
    getSecondaryGradient: () => [theme.secondary, `${theme.secondary}cc`],
    
    // Opacity helpers
    withOpacity: (color, opacity = 0.5) => {
      // Convert hex to rgba
      const hex = color.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    },
  };
};