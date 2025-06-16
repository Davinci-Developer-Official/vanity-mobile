import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SUPABASE_URL = "https://ygrwfbubjwuvmlnxulko.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncndmYnViand1dm1sbnh1bGtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NjIwNTEsImV4cCI6MjA2MjQzODA1MX0.wGbaACQ7mYiFRJmTRHKgoRTRJzJj5D8ECmIouuPXiiI"

export default function LoginScreen() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginWithSupabase = async () => {
  try {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        email: email.trim(),
        password: password,
      }),
    });

    const data = await res.json();
    console.log('Signup response:', res.status, data);

    if (!res.ok) {
      throw new Error(data.error_description || data.msg || 'Signup failed');
    }

    // Alert.alert('Success', 'Signup successful! Now try login.');
    //@ts-ignore
    navigation.navigate("home")
  } catch (err: any) {
    Alert.alert('Signup error', err.message);
  }
};


  // 🔗 Login with Google (opens Supabase OAuth URL)
  const loginWithGoogle = async () => {
    const redirectTo = 'https://auth.expo.io/@your-username/your-app'; // Replace with your real redirect URI
    const url = `${SUPABASE_URL}/auth/v1/authorize?provider=google&redirect_to=${encodeURIComponent(redirectTo)}&apikey=${SUPABASE_ANON_KEY}`;

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Can't open the OAuth URL");
      }
    } catch (err: any) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Supabase Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Button title="Login" onPress={loginWithSupabase} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Login with Google" onPress={loginWithGoogle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 5,
    padding: 10, marginBottom: 15,
  },
  header: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
});
