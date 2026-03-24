import React from 'react';
import { View, Text, Linking, ScrollView, FlatList, Modal, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const emergencyContacts = [
  { title: 'Police', number: '100' },
  { title: 'Ambulance', number: '101' },
  { title: 'Fire', number: '102' },
  { title: 'Poison Control', number: '103' },
];

const guides = {
  critical: [
    { id: '1', title: 'Heart Attack', content: 'Call 911 immediately...' },
    { id: '2', title: 'Stroke', content: 'Perform the FAST test...' },
  ],
  firstAid: [
    { id: '1', title: 'Burns', content: 'Run cool water over the burn...' },
    { id: '2', title: 'Cuts', content: 'Apply gentle pressure to stop bleeding...' },
  ],
  disaster: [
    { id: '1', title: 'Earthquake', content: 'Drop, cover, and hold on...' },
    { id: '2', title: 'Flood', content: 'Move to higher ground immediately...' },
  ],
};

const SOSScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedGuide, setSelectedGuide] = React.useState(null);

  const handleDial = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  const renderGuide = ({ item }) => (
    <Button title={item.title} onPress={() => { setSelectedGuide(item); setModalVisible(true); }} />
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Emergency Contacts</Text>
      {emergencyContacts.map((contact) => (
        <Button key={contact.title} title={`${contact.title}: ${contact.number}`} onPress={() => handleDial(contact.number)} />
      ))}
      <Tab.Navigator>
        <Tab.Screen name="Critical" >
          {() => (
            <FlatList
              data={guides.critical}
              renderItem={renderGuide}
              keyExtractor={(item) => item.id}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="First Aid" >
          {() => (
            <FlatList
              data={guides.firstAid}
              renderItem={renderGuide}
              keyExtractor={(item) => item.id}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Disaster" >
          {() => (
            <FlatList
              data={guides.disaster}
              renderItem={renderGuide}
              keyExtractor={(item) => item.id}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{selectedGuide?.content}</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#FF6B6B',
    marginBottom: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default SOSScreen;
