import React, {useState, Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ShadowPropTypesIOS,
} from 'react-native';

const Lemari = () => {
  const [name, setName] = useState('Inung Shalihah');
  const onChangeText = text => {
    setName(text);
  };

  const initialState = 'A';
  const [state, setState] = useState(initialState);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>nama = {name}</Text>
      <Text>State di Function = {state}</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={name}
      />

      <View style={{height: 200}} />

      <UpdateStateClass />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default Lemari;

export class UpdateStateClass extends Component {
  constructor(props) {
    super(props);
    this.state = {name: 'alphat'};
    this.onChangeText = this.onChangeText.bind(this);
  }
  onChangeText(t) {
    this.setState({name: t});
  }
  render() {
    return (
      <View>
        <Text> Update State Class </Text>
        <Text>State di Class = {this.state.name}</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
      </View>
    );
  }
}
