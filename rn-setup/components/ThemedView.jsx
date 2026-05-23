import { View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export const ThemedView = ({ 
  children, 
  variant = 'default',
  className = '', 
  style = {},
  ...props 
}) => {
  const { theme } = useTheme();
  
  const bgColor = {
    default: theme.background,
    card: theme.card,
    primary: theme.primary,
    secondary: theme.secondary,
  }[variant];
  
  return (
    <View 
      style={[{ backgroundColor: bgColor }, style]}
      className={className}
      {...props}
    >
      {children}
    </View>
  );
};

export const ThemedText = ({ 
  children, 
  variant = 'default',
  className = '', 
  style = {},
  ...props 
}) => {
  const { theme } = useTheme();
  
  const textColor = {
    default: theme.text,
    primary: theme.primary,
    secondary: theme.secondary,
  }[variant];
  
  return (
    <Text 
      style={[{ color: textColor }, style]}
      className={className}
      {...props}
    >
      {children}
    </Text>
  );
};