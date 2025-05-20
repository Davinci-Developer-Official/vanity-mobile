import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

const BusinessForm = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [customType, setCustomType] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');

  const businessOptions = ['Car wash', 'Car park', 'please specify'];

  const handleSelect = (option: string) => {
    setSelectedType(option);
    setDropdownOpen(false);
    if (option !== 'please specify') {
      setCustomType('');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/background1.jpg')} // replace with your background image path
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Text style={styles.header}>Vanity</Text>

            <TextInput
              placeholder="Business name"
              value={businessName}
              onChangeText={setBusinessName}
              style={styles.input}
              placeholderTextColor="#555"
            />

            <TextInput
              placeholder="Business Location"
              value={location}
              onChangeText={setLocation}
              style={styles.input}
              placeholderTextColor="#555"
            />

            {/* Dropdown Header */}
            <TouchableOpacity
              onPress={() => setDropdownOpen(prev => !prev)}
              style={styles.dropdownHeader}
            >
              <Text style={styles.dropdownText}>{selectedType || 'Select Business Type'}</Text>
              <Text style={styles.dropdownText}>{dropdownOpen ? '▲' : '▼'}</Text>
            </TouchableOpacity>

            {/* Dropdown Items */}
            {dropdownOpen && (
              <View style={styles.dropdownList}>
                {businessOptions.map(option => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => handleSelect(option)}
                    style={styles.dropdownItem}
                  >
                    <Text style={styles.dropdownItemText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Custom Field */}
            {selectedType === 'please specify' && (
              <TextInput
                placeholder="Enter custom business type"
                value={customType}
                onChangeText={setCustomType}
                style={styles.input}
                placeholderTextColor="#555"
              />
            )}

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                console.log({
                  businessName,
                  location,
                  type: selectedType === 'please specify' ? customType : selectedType
                });
              }}
            >
              <Text style={styles.buttonText}>Confirm Changes</Text>
            </TouchableOpacity>

            <Link href="/home"
              style={styles.dashboardButton}
              
            >
              <Text style={styles.buttonText}>back</Text>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollContainer: {
    paddingVertical: 50,
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    color: '#000',
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 10,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownList: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#444',
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  dashboardButton: {
    backgroundColor: 'skyblue',
    padding: 14,
    borderRadius: 10,
    marginTop: 25,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BusinessForm;
