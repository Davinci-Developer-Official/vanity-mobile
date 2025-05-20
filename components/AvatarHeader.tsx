// AvatarHeader.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AvatarHeader = ({ userName, onEdit }: any) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onEdit} style={styles.userInfo}>
        <Image
          source={require('@/assets/images/profile1.png')}
          style={styles.avatar}
        />
        <Text style={styles.userName}>{userName}</Text>
      </TouchableOpacity>
      <View style={styles.iconRow}>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="information-circle-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AvatarHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  iconRow: {
    flexDirection: 'row',
    gap: 16,
  },
});
