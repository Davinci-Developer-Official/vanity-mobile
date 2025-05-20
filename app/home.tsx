import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Modal,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import AvatarHeader from '@/components/AvatarHeader';

const background = require('@/assets/images/background1.jpg');

export default function Home() {
  const user = 'John Doe';
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <ImageBackground source={background} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* AvatarHeader is a separate component */}
        <AvatarHeader
          userName={user}
          onEdit={() => setShowEditModal(true)} // now triggers modal
        />

        {/* Profile Section */}
        <View style={styles.section}>
          <FontAwesome5 name="user-circle" size={20} color="#ffcc70" />
          <Text style={styles.title}>Profile</Text>
          <Text style={styles.description}>Update your personal and contact information.</Text>
          <Link href="/profile" style={[styles.button, styles.buttonPurple]}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </Link>
        </View>

        {/* Owners Section */}
        <View style={styles.section}>
          <FontAwesome5 name="user-friends" size={20} color="#ffb347" />
          <Text style={styles.title}>Owners</Text>
          <Text style={styles.description}>Manage all owner data and records.</Text>
          <View style={styles.rowButtons}>
            <Link href="/add-owner" style={[styles.button, styles.buttonOrange]}>
              <Text style={styles.buttonText}>Add Owner</Text>
            </Link>
            <Link href="/owners" style={[styles.button, styles.buttonSky]}>
              <Text style={styles.buttonText}>Records</Text>
            </Link>
          </View>
        </View>

        {/* Business Section */}
        <View style={styles.section}>
          <FontAwesome5 name="briefcase" size={20} color="#90ee90" />
          <Text style={styles.title}>Business</Text>
          <Text style={styles.description}>Track and manage your business operations.</Text>
          <View style={styles.rowButtons}>
            <Link href="/add-business" style={[styles.button, styles.buttonGreen]}>
              <Text style={styles.buttonText}>Add Business</Text>
            </Link>
            <Link href="/business" style={[styles.button, styles.buttonSky]}>
              <Text style={styles.buttonText}>Records</Text>
            </Link>
          </View>
        </View>

        {/* Archives Section */}
        <View style={styles.section}>
          <FontAwesome5 name="archive" size={20} color="#aee2ff" />
          <Text style={styles.title}>Archives</Text>
          <Text style={styles.description}>Browse your saved and archived records.</Text>
          <Link href="/archives" style={[styles.button, styles.buttonSky]}>
            <Text style={styles.buttonText}>View Archives</Text>
          </Link>
        </View>

        {/* Info Section */}
        <View style={styles.section}>
          <FontAwesome5 name="info-circle" size={20} color="#66ccff" />
          <Text style={styles.title}>Info</Text>
          <Text style={styles.description}>General information about the app.</Text>
          <Link href="/info" style={[styles.button, styles.buttonSky]}>
            <Text style={styles.buttonText}>View Info</Text>
          </Link>
        </View>

        {/* Settings Section */}
        <View style={[styles.section, styles.settingsSection]}>
          <FontAwesome5 name="cogs" size={20} color="#66ccff" />
          <Text style={styles.title}>Settings</Text>
          <Text style={styles.description}>
            Customize app preferences, notifications, and account settings.
          </Text>
          <Link
            href="/settings"
            style={[styles.button, styles.settingsButton, { marginBottom: 20 }]}
          >
            <Text style={styles.buttonText}>Go to Settings</Text>
          </Link>
        </View>

        {/* Logout Button */}
        <Link href="/" style={[styles.button, styles.logoutButton]}>
          <Text style={styles.buttonText}>Logout</Text>
        </Link>
      </ScrollView>

      {/* Edit Profile Modal */}
      <Modal
        visible={showEditModal}
        animationType="fade"
        transparent
        onRequestClose={() => setShowEditModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => setShowEditModal(false)}
              style={styles.modalCloseButton}
            >
              <Text style={styles.modalCloseText}>×</Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>What do you want to do?</Text>

            <Link
              href="/profile"
              style={[styles.modalButton, styles.modalButtonPrimary]}
              onPress={() => setShowEditModal(false)}
            >
              <Text style={styles.modalButtonText}>Edit Profile</Text>
            </Link>

            <Link
              href="/"
              style={[styles.modalButton, styles.modalButtonDanger]}
              onPress={() => setShowEditModal(false)}
            >
              <Text style={styles.modalButtonText}>Logout</Text>
            </Link>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scroll: {
    padding: 20,
    paddingBottom: 60,
  },
  section: {
    backgroundColor: '#222',
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffcc70',
    marginBottom: 8,
  },
  description: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 12,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  buttonPurple: {
    backgroundColor: '#9652ff',
  },
  buttonOrange: {
    backgroundColor: '#ff8533',
  },
  buttonGreen: {
    backgroundColor: '#4CAF50',
  },
  buttonSky: {
    backgroundColor: '#1e90ff',
  },
  logoutButton: {
    backgroundColor: '#d9534f',
    marginTop: 20,
    marginBottom: 40,
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  modalContent: {
    backgroundColor: '#1e1e2f',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 25,
    width: '100%',
    maxWidth: 350,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
    elevation: 12,
    position: 'relative',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 10,
  },
  modalCloseText: {
    fontSize: 28,
    color: '#bbb',
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 30,
  },
  modalButton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 8,
  },
  modalButtonPrimary: {
    backgroundColor: '#4caf50',
  },
  modalButtonDanger: {
    backgroundColor: '#d9534f',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    textAlign:"center"
  },
  settingsSection: {
    borderWidth: 1,
    borderColor: '#222f',
    backgroundColor: '#222f',
  },
  settingsButton: {
    backgroundColor: '#3399ff',
    borderColor: '#222f',
    borderWidth: 1,
  },
});
