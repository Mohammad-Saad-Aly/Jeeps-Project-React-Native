import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/components/Navigator/Navigation'
export default function App() {
  return (
    <View style={{flex: 1}}>
     
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
