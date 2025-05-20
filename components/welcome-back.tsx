import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Link } from 'expo-router';

const backgroundImage = require('@/assets/images/background1.jpg');

// Dummy user data (replace with actual user state or props)
const userName = 'John Doe';

const WelcomeBack = ({user}:{user:string}) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      imageStyle={{ opacity: 0.8 }}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Hello <Text style={styles.userName}>{user}</Text>, we’re glad to have you back.
        </Text>
        <Text style={styles.subnote}>
          Continue where you left off and manage your car loan applications seamlessly.
        </Text>

        <View style={styles.buttonWrapper}>
          <Link href="/home" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Continue as {userName.split(' ')[0]}</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeBack;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#e0f7ff',
    textAlign: 'center',
    marginBottom: 8,
    marginTop:5
  },
  userName: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subnote: {
    fontSize: 16,
    color: '#cceeff',
    textAlign: 'center',
    maxWidth: 360,
    marginBottom: 36,
    marginTop:5
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#90ee90',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    minWidth: 200,
    alignItems: 'center',
    marginTop:5
  },
  buttonText: {
    color: '#003366',
    fontWeight: '700',
    fontSize: 16,
  },
});
