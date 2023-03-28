// const { View, Text } = require("react-native/types")
import { useEffect } from "react"
import {View,Text} from "react-native"
// import Reactotron from "reactotron-react-native"
import  {log} from "./reactotron"

const Screen=()=>{
    useEffect(()=>{
        log("Hi dear")
    },[])

    return (
    <View>
      
    </View>)
}
 export default Screen