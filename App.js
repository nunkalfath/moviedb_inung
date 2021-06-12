/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const object = 'lalalala';
  return (
    <>
      <View style={styles.container}>
        <Text>Luki</Text>
        <View>
          <Text>Love Inung</Text>
        </View>
        <Html ide="ideku adalah apapun"></Html>
      </View>
    </>
  );
};

const Html = props => {
  const {ide} = props;
  return (
    <View>
      <Text>{ide}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
