import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';  // Ícones de navegação

const ServicosScreen = ({ navigation }) => {
  const services = [
    { title: 'Clínicas', screen: 'ClinicasScreen' },
    { title: 'Petshops', screen: 'PetshopsScreen' },
    { title: 'Creches', screen: 'CrechesScreen' },
    { title: 'Hotéis para animais', screen: 'HoteisScreen' },
    { title: 'Dog walkers', screen: 'DogWalkersScreen' },
    { title: 'Ongs', screen: 'OngsScreen' },
  ];

  return (
    <ScrollView style={styles.container}>
      {services.map((service, index) => (
        <TouchableOpacity
          key={index}
          style={styles.serviceItem}
          onPress={() => navigation.navigate(service.screen)}  // Navegar para a tela correspondente
        >
          <Text style={styles.serviceText}>{service.title}</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ServicosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  serviceText: {
    fontSize: 16,
    color: '#000',
  },
});
