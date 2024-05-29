import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import TabNavigator from './src/navigators/TabNavigator';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
