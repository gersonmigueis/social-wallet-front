import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Carteira from './views/Carteira/';
import Movimentacao from './views/AddMovimentacao';
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Carteira">
          <Stack.Screen
            name="Carteira"
            component={Carteira}
            options={{headerShown: false}}    
          />
          <Stack.Screen
            name="Movimentacao"
            component={Movimentacao}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
  }
});

export default App;
