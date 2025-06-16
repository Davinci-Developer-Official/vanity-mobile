import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import data from '../app/data.json';

interface Business {
  id: number;
  'business-name': string;
  'business-location': string;
  'business-type': string;
}

const BusinessScreen = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [editMode, setEditMode] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setBusinesses(data.business);
  }, []);

  const handleChange = (
    id: number,
    field: keyof Business,
    value: string
  ) => {
    setBusinesses(prev =>
      prev.map(biz =>
        biz.id === id ? { ...biz, [field]: value } : biz
      )
    );
  };

  return (
    <ImageBackground
      source={require('../assets/images/background1.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <FlatList
        data={businesses}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {editMode[item.id] ? (
              <>
                <TextInput
                  style={styles.input}
                  value={item['business-name']}
                  onChangeText={text =>
                    handleChange(item.id, 'business-name', text)
                  }
                />
                <TextInput
                  style={styles.input}
                  value={item['business-location']}
                  onChangeText={text =>
                    handleChange(item.id, 'business-location', text)
                  }
                />
                <TextInput
                  style={styles.input}
                  value={item['business-type']}
                  onChangeText={text =>
                    handleChange(item.id, 'business-type', text)
                  }
                />
              </>
            ) : (
              <>
                <Text style={styles.title}>{item['business-name']}</Text>
                <Text>Location: {item['business-location']}</Text>
                <Text>Type: {item['business-type']}</Text>
              </>
            )}

            <TouchableOpacity
              onPress={() =>
                setEditMode(prev => ({
                  ...prev,
                  [item.id]: !prev[item.id]
                }))
              }
            >
              <Text style={styles.link}>
                {editMode[item.id] ? 'Done' : 'Edit'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // translucent white
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 6,
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 6,
    backgroundColor: '#fff'
  },
  link: {
    color: '#007bff',
    marginTop: 8
  }
});

export default BusinessScreen;
