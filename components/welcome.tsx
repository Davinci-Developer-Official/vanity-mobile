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

const backgroundImage = require('@/assets/images/welcome2.jpg');

const Welcome = () => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      imageStyle={{ opacity: 0.8 }}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Vanity Mobile</Text>
        <Text style={styles.subtitle}>
          Welcome to Vanity Mobile, your trusted car loan application.
        </Text>

        <View style={styles.buttonRow}>
          <Link href="/sign-in" asChild>
            <TouchableOpacity style={styles.buttonReg}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/sign-up" asChild>
            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

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
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#e0e0e0',
    textAlign: 'center',
    marginBottom: 40,
    maxWidth: 350,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
  },
  buttonReg: {
    backgroundColor: '#add8e6', // light blue
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonLogin: {
    backgroundColor: '#ff4d4d', // light red 
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#003366', // darker blue for contrast
    fontWeight: '700',
    fontSize: 16,
  },
});
