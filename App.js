// git project token
// 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


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';
import Home from "./screens/Home";
import MeetingRoom from './screens/MeetingRoom';


export default function App() {
  return <Navigation/>;
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
