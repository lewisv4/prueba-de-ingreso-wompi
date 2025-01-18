import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { store } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';

export default function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Color de fondo neutro para toda la app
  },
});
