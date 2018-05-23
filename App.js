import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchExample from './components/FetchExample';

export default class App extends React.Component {
  render() {
    return (
      <FetchExample />
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
