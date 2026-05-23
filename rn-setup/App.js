import './global.css';
import { View, Text, Button } from 'react-native';
import { ThemeProvider, useTheme, themes } from './context/ThemeContext';
import { ThemedView, ThemedText } from './components/ThemedView';
import { useColors } from './hooks/useColors';

function AppContent() {
  const { theme, setThemeName, themeName } = useTheme();
  const colors = useColors();
  
  // Debug: Log theme changes
  console.log('Current theme:', theme.name, 'Background:', theme.background);
  
  return (
    <ThemedView className="flex-1 justify-center items-center" variant="default">
      {/* Debug info */}
      <View className="absolute top-10 left-0 right-0 p-2 bg-gray-100">
        <ThemedText variant="default" className="text-xs">
          Debug: Theme = {theme.name} | BG = {theme.background}
        </ThemedText>
      </View>
      
      <ThemedText variant="primary" className="text-2xl font-bold mb-4">
        Mobile App
      </ThemedText>
      
      <ThemedText variant="default" className="text-base mb-8 text-center">
        Ready for API Integration! 🚀
      </ThemedText>
      
      {/* Dynamic styling with color values */}
      <View 
        style={{ 
          backgroundColor: colors.withOpacity(colors.primary, 0.1),
          borderColor: colors.primary,
        }}
        className="p-4 rounded-lg border mb-4 w-64"
      >
        <ThemedText variant="primary" className="text-center">
          Current Theme: {theme.name}
        </ThemedText>
        <ThemedText variant="default" className="text-center text-xs mt-1">
          BG: {theme.background}
        </ThemedText>
      </View>
      
      {/* Theme switcher buttons */}
      <View className="flex-row gap-2 flex-wrap justify-center px-4">
        {['light', 'dark', 'colorful', 'nord'].map((name) => (
          <View
            key={name}
            style={{
              backgroundColor: themeName === name ? colors.primary : colors.secondary,
            }}
            className="px-4 py-2 rounded-lg mx-1"
          >
            <Text 
              style={{ color: '#fff', fontWeight: '600' }}
              onPress={() => {
                console.log('Switching to theme:', name);
                setThemeName(name);
              }}
            >
              {name}
            </Text>
          </View>
        ))}
      </View>
      
      {/* Test different backgrounds */}
      <View className="mt-8">
        <ThemedText variant="secondary" className="text-sm mb-2">
          Testing different backgrounds:
        </ThemedText>
        <View style={{ backgroundColor: theme.background, padding: 8, borderRadius: 4 }}>
          <ThemedText variant="default">Default background</ThemedText>
        </View>
        <View style={{ backgroundColor: theme.card, padding: 8, borderRadius: 4, marginTop: 4 }}>
          <ThemedText variant="default">Card background</ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}