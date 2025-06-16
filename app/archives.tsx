import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';

// Sample archived data
const archivedOwners = [
  {
    id: '1',
    name: 'John Stewart Mwangi',
    phone: '011234221332',
    vehicle: { regNo: 'KCW 221A', model: 'Audi Q5' },
  },
  {
    id: '2',
    name: 'Ann Wanjiku Kariuki',
    phone: '0712345678',
    vehicle: { regNo: 'KDA 213Q', model: 'Toyota Vitz' },
  },
];

const archivedBusinesses = [
  {
    id: '1',
    name: 'Joy Ventures',
    location: 'Moi Avenue Flr 3',
    type: 'Boutique',
  },
  {
    id: '2',
    name: 'Kwetu Apparels',
    location: 'Tom Mboya St',
    type: 'Clothing Shop',
  },
];

const ArchivePage = () => {
  const [owners, setOwners] = useState(archivedOwners);
  const [businesses, setBusinesses] = useState(archivedBusinesses);

  const handleUnarchive = (type: 'owner' | 'business', id: string) => {
    if (type === 'owner') {
      setOwners(prev => prev.filter(item => item.id !== id));
    } else {
      setBusinesses(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleDelete = (type: 'owner' | 'business', id: string) => {
    if (type === 'owner') {
      setOwners(prev => prev.filter(item => item.id !== id));
    } else {
      setBusinesses(prev => prev.filter(item => item.id !== id));
    }
  };

  const renderOwner = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={[styles.tag, { backgroundColor: 'orange' }]}>OWNER</Text>
      <Text style={styles.title}>{item.name}</Text>
      <Text>Phone: {item.phone}</Text>
      <Text>Vehicle: {item.vehicle.model} ({item.vehicle.regNo})</Text>
      <View style={styles.actions}>
        <Pressable onPress={() => alert(JSON.stringify(item, null, 2))}><Text style={styles.link}>See More</Text></Pressable>
        <Pressable onPress={() => handleUnarchive('owner', item.id)}><Text style={styles.unarchive}>Unarchive</Text></Pressable>
        <Pressable onPress={() => handleDelete('owner', item.id)}><Text style={styles.delete}>Delete</Text></Pressable>
      </View>
    </View>
  );

  const renderBusiness = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={[styles.tag, { backgroundColor: 'skyblue' }]}>BUSINESS</Text>
      <Text style={styles.title}>{item.name}</Text>
      <Text>Location: {item.location}</Text>
      <Text>Type: {item.type}</Text>
      <View style={styles.actions}>
        <Pressable onPress={() => alert(JSON.stringify(item, null, 2))}><Text style={styles.link}>See More</Text></Pressable>
        <Pressable onPress={() => handleUnarchive('business', item.id)}><Text style={styles.unarchive}>Unarchive</Text></Pressable>
        <Pressable onPress={() => handleDelete('business', item.id)}><Text style={styles.delete}>Delete</Text></Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Archived Owners</Text>
      {owners.length === 0 ? (
        <Text style={styles.empty}>No archived owners</Text>
      ) : (
        <FlatList
          data={owners}
          keyExtractor={item => item.id}
          renderItem={renderOwner}
        />
      )}

      <Text style={styles.heading}>Archived Businesses</Text>
      {businesses.length === 0 ? (
        <Text style={styles.empty}>No archived businesses</Text>
      ) : (
        <FlatList
          data={businesses}
          keyExtractor={item => item.id}
          renderItem={renderBusiness}
        />
      )}
    </View>
  );
};

export default ArchivePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  empty: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  card: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    color: '#fff',
    fontSize: 12,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  link: {
    color: 'blue',
    fontWeight: '500',
  },
  unarchive: {
    color: 'green',
    fontWeight: '500',
  },
  delete: {
    color: 'red',
    fontWeight: '500',
  },
});
