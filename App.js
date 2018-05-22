import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Touchables from './components/Touchables';

export default class App extends React.Component {
  render() {
    return (
      <Touchables />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
