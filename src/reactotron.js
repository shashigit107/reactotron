// import { NativeModules } from 'react-native/types'
import Reactotron from 'reactotron-react-native'
// import AsyncStorage from "react-native"
import   {NativeModules} from "react-native"
import reactotron from 'reactotron-react-native'
const {scriptURL}=NativeModules.SourceCode
// console.log("scriptUrl",scriptURl)
const hostName=scriptURL.split("://")[1].split(":")[0]

reactotron
  .configure({host:hostName}).useReactNative() // add all built-in react native plugins
 const log=reactotron.log
//  const exportVariable={log,reactotron}
  export  {reactotron , log};