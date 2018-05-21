import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JustifyContentBasics from './components/JustifyContentBasics';

export default class App extends React.Component {
  render() {
    return (
      <JustifyContentBasics />
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
