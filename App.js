import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login';
export default function App() {
  return (
    <View style={styles.container}>
     
    <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BE0811',
    alignItems: 'center',
    justifyContent: 'center',

  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },
  titleText2: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'red'
  },
});



