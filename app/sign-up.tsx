import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { Link } from 'expo-router';

const backgroundImage = require('@/assets/images/background1.jpg');

const SignUp = () => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      imageStyle={{ opacity: 0.85 }}
    >
      <View style={styles.overlay}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Create Account</Text>

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#cfcfcf"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#cfcfcf"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#cfcfcf"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#cfcfcf"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#cfcfcf"
            secureTextEntry
          />

          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Join Us</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>— Or sign up with —</Text>

          <View style={styles.socialButtonsRow}>
            <TouchableOpacity style={[styles.socialButton, styles.google]}>
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, styles.facebook]}>
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, styles.twitter]}>
              <Text style={styles.socialButtonText}>Twitter</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signInPrompt}>
            <Text style={styles.promptText}>Already have an account? </Text>
            <Link href="/sign-in" style={styles.signInLink}>
              Sign In
            </Link>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  formContainer: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 16,
    color: 'white',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#555',
  },
  signUpButton: {
    backgroundColor: '#6dd46d',
    paddingVertical: 14,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    color: '#064006',
    fontWeight: '700',
    fontSize: 16,
  },
  orText: {
    color: '#bbb',
    marginVertical: 20,
    fontSize: 14,
  },
  socialButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  socialButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 30,
    alignItems: 'center',
  },
  google: {
    backgroundColor: '#DB4437',
  },
  facebook: {
    backgroundColor: '#3b5998',
  },
  twitter: {
    backgroundColor: '#1DA1F2',
  },
  socialButtonText: {
    color: 'white',
    fontWeight: '700',
  },
  signInPrompt: {
    flexDirection: 'row',
  },
  promptText: {
    color: '#ddd',
    fontSize: 14,
  },
  signInLink: {
    color: '#6dd46d',
    fontSize: 14,
    fontWeight: '700',
  },
});
