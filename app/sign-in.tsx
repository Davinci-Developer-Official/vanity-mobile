import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

const backgroundImage = require('@/assets/images/background1.jpg');

const SignIn = () => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      imageStyle={{ opacity: 0.85 }}
    >
      <View style={styles.overlay}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign In</Text>

          <TextInput
            style={styles.input}
            placeholder="Email or Username"
            placeholderTextColor="#cfcfcf"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#cfcfcf"
            secureTextEntry
          />

          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Glad to have you back!</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>or sign in with</Text>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#db4a39' }]}>
              <AntDesign name="google" size={20} color="white" />
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]}>
              <FontAwesome name="facebook" size={20} color="white" />
              <Text style={styles.socialText}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#000' }]}>
              <FontAwesome name="twitter" size={20} color="white" />
              <Text style={styles.socialText}>X</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signupPrompt}>
            <Text style={styles.promptText}> Don&apos;t have an account? </Text>
            <Link href="/sign-up" style={styles.signUpLink}>
              Sign Up
            </Link>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignIn;

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
  signInButton: {
    backgroundColor: '#8fdaa5',
    paddingVertical: 12,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
  },
  signInButtonText: {
    color: '#004d00',
    fontWeight: '700',
    fontSize: 16,
  },
  orText: {
    color: '#ddd',
    marginVertical: 16,
    fontSize: 14,
  },
  socialContainer: {
    width: '100%',
    flexDirection: 'column',
    gap: 12,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    gap: 10,
  },
  socialText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  signupPrompt: {
    flexDirection: 'row',
    marginTop: 24,
  },
  promptText: {
    color: '#ddd',
    fontSize: 14,
  },
  signUpLink: {
    color: '#8fdaa5',
    fontSize: 14,
    fontWeight: '700',
  },
});
