import React, {useState, Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ShadowPropTypesIOS,
} from 'react-native';

const UpStateInung = () => {
  const [name, setName] = useState('Nama Lengkap Anda');
  const onChangeText = text => {
    setName(text);
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>nama={name}</Text>
      <Text>Text di Function ={name} </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={name}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
  },
});

export default UpStateInung;
