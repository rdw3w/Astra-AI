import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const MapsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Offline Maps</Text>
      <MapView style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Dark theme background
  },
  header: {
    fontSize: 24,
    color: '#FF0000', // Red accents
    textAlign: 'center',
    marginVertical: 20,
  },
  map: {
    flex: 1,
  },
});

export default MapsScreen;