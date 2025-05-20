import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

interface InputProps {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
}

const backgroundImage = require('@/assets/images/background1.jpg');

const VanityForm = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const [showVehicle, setShowVehicle] = useState(false);
  const [showTrustee, setShowTrustee] = useState(false);

  const [vehicleDetails, setVehicleDetails] = useState({ regNo: '', carModel: '' });
  const [trusteeDetails, setTrusteeDetails] = useState({ fullName: '', idNo: '', phoneNumber: '' });

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAddVehicle = () => {
    if (!vehicleDetails.regNo.trim() || !vehicleDetails.carModel.trim()) {
      alert('Please fill all vehicle fields');
      return;
    }
    console.log('Vehicle Added:', vehicleDetails);
    setVehicleDetails({ regNo: '', carModel: '' });
    setShowVehicle(false);
  };

  const handleAddTrustee = () => {
    if (!trusteeDetails.fullName.trim() || !trusteeDetails.idNo.trim() || !trusteeDetails.phoneNumber.trim()) {
      alert('Please fill all trustee fields');
      return;
    }
    console.log('Trustee Added:', trusteeDetails);
    setTrusteeDetails({ fullName: '', idNo: '', phoneNumber: '' });
    setShowTrustee(false);
  };

  return (
    <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: 20,
          justifyContent: 'center',
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
          keyboardVerticalOffset={100}
        >
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 40,
              flexGrow: 1,
              justifyContent: 'center',
              width: '100%',
              maxWidth: 500,
              alignSelf: 'center',
            }}
            keyboardShouldPersistTaps="handled"
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 28,
                fontWeight: '700',
                color: '#fff',
                marginBottom: 30,
                textShadowColor: '#000',
                textShadowOffset: { width: 0, height: 1 },
                textShadowRadius: 5,
              }}
            >
              Owner Details
            </Text>

            <Input label="First Name" value={firstName} onChangeText={setFirstName} />
            <Input label="Middle Name" value={middleName} onChangeText={setMiddleName} />
            <Input label="Last Name" value={lastName} onChangeText={setLastName} />
            <Input label="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad" />

            {/* VEHICLE SECTION */}
            <Text style={sectionTitleStyle}>Vehicles</Text>
            <TouchableOpacity
              onPress={() => setShowVehicle(true)}
              style={buttonBlueStyle}
              activeOpacity={0.8}
            >
              <Text style={buttonTextStyle}>Add Vehicle</Text>
            </TouchableOpacity>

            {showVehicle && (
              <View style={sectionBoxStyle}>
                <Input
                  label="Reg No"
                  value={vehicleDetails.regNo}
                  onChangeText={(text) => setVehicleDetails({ ...vehicleDetails, regNo: text })}
                />
                <Input
                  label="Car Model"
                  value={vehicleDetails.carModel}
                  onChangeText={(text) => setVehicleDetails({ ...vehicleDetails, carModel: text })}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={handleAddVehicle} style={buttonGreenStyle} activeOpacity={0.8}>
                    <Text style={buttonTextStyle}>Confirm Vehicle</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setShowVehicle(false)} style={buttonRedStyle} activeOpacity={0.8}>
                    <Text style={buttonTextStyle}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* TRUSTEE SECTION */}
            <Text style={sectionTitleStyle}>Trustee</Text>
            <TouchableOpacity
              onPress={() => setShowTrustee(true)}
              style={buttonBlueStyle}
              activeOpacity={0.8}
            >
              <Text style={buttonTextStyle}>Add Trustee</Text>
            </TouchableOpacity>

            {showTrustee && (
              <View style={sectionBoxStyle}>
                <Input
                  label="Full Name"
                  value={trusteeDetails.fullName}
                  onChangeText={(text) => setTrusteeDetails({ ...trusteeDetails, fullName: text })}
                />
                <Input
                  label="ID No"
                  value={trusteeDetails.idNo}
                  onChangeText={(text) => setTrusteeDetails({ ...trusteeDetails, idNo: text })}
                />
                <Input
                  label="Phone Number"
                  value={trusteeDetails.phoneNumber}
                  onChangeText={(text) => setTrusteeDetails({ ...trusteeDetails, phoneNumber: text })}
                  keyboardType="phone-pad"
                />

                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#FFC107',
                    padding: 10,
                    borderRadius: 8,
                    marginVertical: 15,
                    justifyContent: 'space-between',
                  }}
                  activeOpacity={0.8}
                  onPress={() => alert('Add Finger feature coming soon')}
                >
                  <Text style={{ fontSize: 16, color: '#333' }}>Add Finger</Text>
                  <Text style={{ fontSize: 24 }}>🖐️</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={handleAddTrustee} style={buttonGreenStyle} activeOpacity={0.8}>
                    <Text style={buttonTextStyle}>Confirm Trustee</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setShowTrustee(false)} style={buttonRedStyle} activeOpacity={0.8}>
                    <Text style={buttonTextStyle}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* Dashboard Button */}
            <Link
              href="/home"
              style={{
                ...buttonGrayStyle,
                marginTop: 30,
                alignSelf: 'center',
                minWidth: 180,
              }}
              asChild
            >             
                <Text style={buttonTextStyle}>Go Back</Text>              
            </Link>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

const Input = ({ label, value, onChangeText, keyboardType = 'default' }: InputProps & { keyboardType?: any }) => (
  <View style={{ marginBottom: 15 }}>
    <Text style={{ fontSize: 16, fontWeight: '600', color: '#fff', marginBottom: 6, textShadowColor: '#000', textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 3 }}>
      {label}
    </Text>
    <TextInput
      style={{
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: 16,
      }}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      placeholder={`Enter ${label.toLowerCase()}`}
      placeholderTextColor="#888"
    />
  </View>
);

const sectionTitleStyle = {
  fontSize: 20,
  fontWeight: '700',
  color: '#fff',
  marginTop: 25,
  marginBottom: 10,
  textShadowColor: '#000',
  textShadowOffset: { width: 0, height: 1 },
  textShadowRadius: 5,
};

const buttonBlueStyle = {
  alignSelf: 'flex-end',
  backgroundColor: '#007BFF',
  paddingHorizontal: 14,
  paddingVertical: 8,
  borderRadius: 10,
};

const buttonGreenStyle = {
  backgroundColor: '#28A745',
  paddingHorizontal: 14,
  paddingVertical: 8,
  borderRadius: 10,
};

const buttonRedStyle = {
  backgroundColor: '#DC3545',
  paddingHorizontal: 14,
  paddingVertical: 8,
  borderRadius: 10,
};

const buttonGrayStyle = {
  backgroundColor: '#6c757d',
  paddingHorizontal: 20,
  paddingVertical: 12,
  borderRadius: 12,
};

const buttonTextStyle = {
  color: 'white',
  fontSize: 17,
  fontWeight: '700',
  textAlign: 'center' as const,
};

const sectionBoxStyle = {
  backgroundColor: 'rgba(255,255,255,0.9)',
  padding: 15,
  borderRadius: 12,
  marginTop: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 5,
};

export default VanityForm;
