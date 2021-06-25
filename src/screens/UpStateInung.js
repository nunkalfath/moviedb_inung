import React, {useState, Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ShadowPropTypesIOS,
} from 'react-native';

const UpStateInung = () => {
  const [name, setName] = useState('Nama Lengkap');
  const onChangeText = text => {
    setName(text);
  };
  const [email, setEmail] = useState('Email');
  const onChangeEmail = text => {
    setEmail(text);
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>Nama = {name}</Text>
      <Text>Email = {email} </Text>
      <Text>Sign In</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={name}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default UpStateInung;
