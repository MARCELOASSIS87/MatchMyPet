import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

// Componente para um único Card
const CardItem = ({ title, subtitle, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

// Tela principal HomeScreen
const HomeScreen = ({ navigation }) => {
  const items = [
    { title: 'Cruzamento Seguro', subtitle: 'Encontre o par perfeito',screen: 'CruzamentoSeguro' },
    { title: 'Adote um amigo', subtitle: 'Algum pet precisa de você', screen: 'EmDesenvolvimentoScreen' },
    { title: 'Serviços', subtitle: 'O que fazemos',                   screen: 'Servicos'},
    { title: 'Pedidos', subtitle: 'Faça seus pedidos',                screen: 'Pedidos' },
    { title: 'Seja sócio', subtitle: 'Conheça as vantagens',          screen:  'EmDesenvolvimentoScreen'},
    { title: 'Fidelidade', subtitle: 'Compre e ganhe',                screen:  'EmDesenvolvimentoScreen'},
    { title: 'Agendar', subtitle: 'Banho & tosa, consultas e exames', screen:  'EmDesenvolvimentoScreen'},
    { title: 'Procura', subtitle: 'Animais perdidos',                 screen:  'EmDesenvolvimentoScreen'},
    { title: 'Eventos', subtitle: 'Feiras e encontros',               screen:  'EmDesenvolvimentoScreen'},
    { title: 'Sobre nós', subtitle: 'Saiba mais',                     screen:  'EmDesenvolvimentoScreen'},
    { title: 'Suporte', subtitle: 'Fale conosco',                     screen:  'EmDesenvolvimentoScreen'},
    
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {items.map((item, index) => (
          <CardItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            onPress={() => navigation.navigate(item.screen)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#00CED1', // Ciano
    borderRadius: 15,
    padding: 20,
    margin: 10,
    width: '40%', // Ajusta o tamanho para ser responsivo na grade
    elevation: 3,
    position: 'relative', // Para permitir posicionamento absoluto do ícone
  },
  textContainer: {
    marginBottom: 20, // Dá espaço entre o texto e o ícone
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A5ACD', // Roxo
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'center',
  },
});
