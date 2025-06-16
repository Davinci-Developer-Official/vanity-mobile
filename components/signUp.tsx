import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SUPABASE_URL = "https://ygrwfbubjwuvmlnxulko.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncndmYnViand1dm1sbnh1bGtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NjIwNTEsImV4cCI6MjA2MjQzODA1MX0.wGbaACQ7mYiFRJmTRHKgoRTRJzJj5D8ECmIouuPXiiI"


export default function LoginScreen() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginWithSupabase = async () => {
    try {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
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

    // Alert.alert('Success', 'Account created! Please check your email to confirm.');
    //@ts-ignore
    navigation.navigate("home")
  } catch (err: any) {
    console.error(err);
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
      <Button title=" sign up " onPress={loginWithSupabase} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 5,
    padding: 10, marginBottom: 15,
  },
  header: { fontSize: 22}
})