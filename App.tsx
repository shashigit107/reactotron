/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 
 
import { useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,

} from 'react-native';
import Screen from './src/Screen';
// import Reactotron from 'reactotron-react-native';
import {reactotron} from './src/reactotron';


if(__DEV__) reactotron.connect()

// Reactotron.configure({ name: 'MDroid' }) // controls connection & communication settings
//    .useReactNative() // add all built-in react native plugins
//    .connect(); // let's connect!

function App() {
  useEffect(()=>{


  },[])

  return (
    <SafeAreaView >
     <Screen/>
      <Text>hey Dear</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
