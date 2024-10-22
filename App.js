import 'react-native-gesture-handler'; // Isso é necessário para o react-navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';  // Supondo que sua tela de login está em 'screens'
import HomeScreen from './screens/HomeScreen';   // Tela que acabamos de criar
import CruzamentoSeguro from './screens/CruzamentoSeguro';
import Servicos from './screens/Servicos';
import Pedidos from './screens/Pedidos';
import EmDesenvolvimentoScreen from './screens/EmDesenvolvimentoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        {/* Tela de login */}
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Removendo o cabeçalho da tela de login
        />
        {/* Tela HomeScreen */}
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ title: 'Match My Pet' }} // Define o título da barra de navegação
        />
        {/* Tela Cruzamento Seguro */}
        <Stack.Screen 
          name="CruzamentoSeguro" 
          component={CruzamentoSeguro} 
          options={{ title: 'Cruzamento Seguro' }} 
        />
        <Stack.Screen 
        name="Servicos" 
        component={Servicos} 
        options={{ title: 'Servicos' }} 
        />
        <Stack.Screen 
        name="Pedidos" 
        component={Pedidos} 
        options={{ title: 'Pedidos' }} 
        />
        <Stack.Screen 
        name="EmDesenvolvimentoScreen" 
        component={EmDesenvolvimentoScreen} 
        options={{ title: 'Voltar' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
