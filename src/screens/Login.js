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
          backgroundColor: 'gray',
          //justifyContent: 'center',
          //alignContent: 'center',
        }}>
        <Text>ini dia</Text>
        <UpStateInung />
      </View>
      <View style={{flex: 2, backgroundColor: 'pink'}} />
      <View style={{flex: 3, backgroundColor: 'skyblue'}} />
      <Text>Ini aku </Text>
    </View>
  );
};

export default Login;
