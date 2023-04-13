import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from "react";
import { LogoMNJ, LogoMnj, SignIn } from '../../assets'

const SplashScreen =({navigation}) => {
  useEffect(() => {
      setTimeout(() => {
          navigation.replace('Login');
      }, 2000)
  }, [])
  return (
    <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
     <LogoMnj/> 
        
        {/* <Text style={{fontSize:32, color:'#000', fontFamily:'Poppins-Light'}}>Hello Yodi</Text> */}
    </View>
  )
}

export default SplashScreen

