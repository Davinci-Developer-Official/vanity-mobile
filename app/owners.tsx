import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from 'react-native';
import data from '../app/data.json';

interface Owner {
  id: number;
  'first-name': string;
  'middle-name': string;
  'last-name': string;
  phonenumber: string;
  vehicle: {
    'reg-no': string;
    model: string;
  };
  trustee: {
    'full-names': string;
    'id-no': string;
    'phone-number': string;
    'finger-print': string;
  };
}

const OwnersScreen = () => {
  const [owners, setOwners] = useState<Owner[]>([]);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [editMode, setEditMode] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setOwners(data.owners);
  }, []);

  const toggleExpand = (id: number) => {
    setExpanded(prev => (prev === id ? null : id));
  };

  const handleChange = (
    id: number,
    field: keyof Owner,
    value: string
  ) => {
    setOwners(prev =>
      prev.map(owner =>
        owner.id === id ? { ...owner, [field]: value } : owner
      )
    );
  };

  return (
    <ImageBackground
      source={require('../assets/images/background1.jpg')} // Replace with your image path
      style={styles.background}
      resizeMode="cover"
    >
      <FlatList
        data={owners}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>
              {item['first-name']} {item['last-name']}
            </Text>
            <Text>Vehicle: {item.vehicle.model} - {item.vehicle['reg-no']}</Text>
            <Text>Phone: {item.phonenumber}</Text>

            {expanded === item.id && (
              <>
                <Text>Middle Name: {item['middle-name']}</Text>
                <Text>Trustee: {item.trustee['full-names']}</Text>
                <Text>ID No: {item.trustee['id-no']}</Text>
                <Text>Trustee Phone: {item.trustee['phone-number']}</Text>
              </>
            )}

            <View style={styles.row}>
              <TouchableOpacity onPress={() => toggleExpand(item.id)}>
                <Text style={styles.link}>
                  {expanded === item.id ? 'Hide details' : 'View more details'}
                </Text>
              </TouchableOpacity>

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

            {editMode[item.id] && (
              <TextInput
                style={styles.input}
                value={item.phonenumber}
                onChangeText={text => handleChange(item.id, 'phonenumber', text)}
                placeholder="Edit phone"
              />
            )}
          </View>
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  container: {
    padding: 16
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.9)', // transparent white
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
  link: {
    color: '#007bff',
    marginRight: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 6,
    marginTop: 8,
    borderRadius: 6
  }
});

export default OwnersScreen;
