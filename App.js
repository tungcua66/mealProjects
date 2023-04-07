import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import Categories from './screens/Categories';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Categories />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
