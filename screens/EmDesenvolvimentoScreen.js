import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';  // Usaremos o ícone de construção

const EmDesenvolvimentoScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="construction" size={100} color="gray" />
      <Text style={styles.message}>Página em Desenvolvimento</Text>
    </View>
  );
};

export default EmDesenvolvimentoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 20,
  },
});

