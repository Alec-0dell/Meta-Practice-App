import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { View } from 'react-native';

import Header from './Compnents/Header';
import Footer from './Compnents/Footer';
import Welcome from './Compnents/Welcome';
import Menu from './Compnents/Menu';
import FeedbackForm from './Compnents/FeedbackForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <Header />
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerStyle:"white"}}>
          <Stack.Screen name='Welcome' component={Welcome}/>
          <Stack.Screen name="FeedbackForm" component={FeedbackForm}/>
          <Stack.Screen name="Menu" component={Menu}/>
        </Stack.Navigator>
      </View>
      <View style={{ backgroundColor: '#495E57' }}>
        <Footer />
      </View>
    </NavigationContainer>
  );
}