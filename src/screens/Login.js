import React from 'react';
import {View, Text} from 'react-native';

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
          flex: 1,
          backgroundColor: 'gray',
          //justifyContent: 'center',
          //alignContent: 'center',
        }}>
        <Text>ini dia</Text>
      </View>
      <View style={{flex: 2, backgroundColor: 'pink'}} />
      <View style={{flex: 3, backgroundColor: 'skyblue'}} />
      <Text>Ini aku </Text>
    </View>
  );
};

export default Login;
