import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const handleSOSPress = () => {
    // TODO: Handle SOS button press
    console.log('SOS button pressed');
  };

  return (
    <View style={styles.container}>
      <Button title="SOS" onPress={handleSOSPress} color="#FF0000" />
      {/* Main Navigation can be added here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;