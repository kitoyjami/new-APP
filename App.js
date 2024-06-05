import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Open up App.js to start working on your </Text>
      <Text style={styles.titleText2}>app eddy miñano pendejo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',

  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
  titleText2: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'red'
  },
});



