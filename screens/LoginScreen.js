// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Match my Pet</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#cccccc"
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#cccccc"
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('HomeScreen')} // Navegação para a HomeScreen
        color="#6A5ACD"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00CED1', // Ciano
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6A5ACD', // Roxo
    marginBottom: 40,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#6A5ACD',
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
});

export default LoginScreen;
