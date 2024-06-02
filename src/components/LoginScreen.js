import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import styles from '../styles';
import { Feather } from '@expo/vector-icons'; // Import icons

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error message

  const handleLogin = async () => {
    setIsLoading(true); // Start loading indicator
    setError(null); // Clear any previous error

    try {
      // Replace with your actual authentication logic
      // Here's a placeholder simulating successful login
      if (phoneNumber === 'user@example.com' && password === 'password') {
        // Simulate successful login
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
        setIsLoading(false);
        navigation.navigate('Home');
      } else {
        setError('Invalid phoneNumber or password'); // Set error message
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An unexpected error occurred. Please try again later.');
      setIsLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      {isLoading && (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
          {/* Activity indicator while loading */}
          <Feather name="loader" size={48} color="#ccc" />
        </View>
      )}
      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter your phone number"
        autoCapitalize="none"
        keyboardType="numeric"
        maxLength={10}
        style={styles.numberInput}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={styles.passwordInput}
      />
      {error && <Text style={styles.loginErrorText}>{error}</Text>}
      <Button title="Login" onPress={handleLogin} disabled={isLoading} />
    </View>
  );
};

export default LoginScreen;
