import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ShadowPropTypesIOS,
} from 'react-native';
import UpStateInung from './UpStateInung';

const Login = () => {
  return (
    <View
      style={{
        // alignItems: 'center',
        // justifyContent: 'center',
        flex: 1,
        padding: 5,
        flexDirection: 'column',
      }}>
      <View
        style={{
          flexGrow: 1,
          padding: 5,
          backgroundColor: 'lightgray',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18}}>Welcome to MovieDB by Nunk</Text>
      </View>
      <View style={{flexGrow: 2, padding: 5, backgroundColor: 'white'}}>
        <UpStateInung />
      </View>
      <View style={{flex: 3, backgroundColor: 'navy'}} />
      <Text style={{fontSize: 8}}>Movie DB Project by nunk </Text>
    </View>
  );
};

export default Login;
