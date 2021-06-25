import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import Login from './src/screens/Login';
import Colorcollection from './src/asset/Colorcollection';
import UpdateState from './src/screens/UpdateState';
import UpStateInung from './src/screens/UpStateInung';

function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Account</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Account" component={UpdateState} />
        <Stack.Screen name="Login Screen" component={LoginScreen} />
        <Stack.Screen name="Account Screen" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
