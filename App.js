import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Shop from './src/pages/Shop';
import Cart from './src/pages/Cart';
import Profile from './src/pages/Profile'
import homeicon from './assets/home-icon.png'
import { NavigationContainer, TabActions } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
  <NavigationContainer styles={styles.container}>
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#594F87'}}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false, tabBarIcon: () => (<Image source={require("./assets/home-icon.png")} style={{width: 25, height: 25}}/>)}}/>
      <Tab.Screen name="Shop" component={Shop} options={{headerShown: false, tabBarIcon: () => (<Image source={require("./assets/shop-icon.png")} style={{width: 25, height: 25}}/>)}}/>
      <Tab.Screen name="Cart" component={Cart} options={{headerShown: false, tabBarIcon: () => (<Image source={require("./assets/cart-icon.png")} style={{width: 25, height: 25}}/>)}}/>
      <Tab.Screen name="Profile" component={Profile} options={{headerShown: false, tabBarIcon: () => (<Image source={require("./assets/profile-icon.png")} style={{width: 25, height: 25}}/>)}}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    color: '#1B0B35'
  },
});
