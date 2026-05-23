import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ThemedView, ThemedText } from '../components/ThemedView';
import { useColors } from '../hooks/useColors';
import { useNavigation } from '@react-navigation/native';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { theme } = useTheme();
  const colors = useColors();
  const navigation = useNavigation();

  const handleLogin = () => {
    // Simple validation - replace with actual authentication
    if (email && password) {
      console.log('Login attempt with:', { email, password });
      navigation.replace('Home');
    } else {
      Alert.alert('Error', 'Please enter both email and password');
    }
  };

  return (
    <ThemedView className="flex-1 justify-center items-center p-4" variant="default">
      <ThemedText variant="primary" className="text-3xl font-bold mb-8">
        My Mobile App
      </ThemedText>
      
      <ThemedText variant="default" className="text-xl mb-8">
        Login
      </ThemedText>
      
      <View className="w-full max-w-sm">
        <TextInput
          className="w-full p-3 mb-4 border rounded-lg"
          style={{
            backgroundColor: theme.card,
            borderColor: theme.border,
            color: theme.text,
          }}
          placeholder="Email"
          placeholderTextColor={theme.textSecondary}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        
        <TextInput
          className="w-full p-3 mb-6 border rounded-lg"
          style={{
            backgroundColor: theme.card,
            borderColor: theme.border,
            color: theme.text,
          }}
          placeholder="Password"
          placeholderTextColor={theme.textSecondary}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <Button
          title="Login"
          onPress={handleLogin}
          color={colors.primary}
        />
        
        {/* Demo credentials hint */}
        <View className="mt-8 p-4 rounded-lg" style={{ backgroundColor: colors.withOpacity(colors.primary, 0.1) }}>
          <ThemedText variant="secondary" className="text-xs text-center">
            Demo: Enter any email and password to login
          </ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}