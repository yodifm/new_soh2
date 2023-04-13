import { StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import {Button, Gap, Header, TextInput} from '../../components';
import { ScrollView } from 'react-native-gesture-handler'
import { LogoMnj } from '../../assets';




const Login = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Stock On Hand Application" />
      <View style={styles.container}>
        <LogoMnj
          style={{ alignSelf: 'center'}}
        />

        <TextInput
          color="#000"
          label="Username"
          placeholder="Enter Your username"
          placeholderTextColor="#7A7B84"
        //   value={form.username}
        //   onChangeText={value => setForm('username', value)}
        />
        <Gap height={16} />
        <TextInput
          color="#000"
          label="Password"
          placeholder="Enter Your password"
          placeholderTextColor="#7A7B84"
        //   value={form.password}
        //   onChangeText={value => setForm('password', value)}
          secureTextEntry={true}
        />

        <Gap height={24} />
        <Button txt="Login" />
        <View style={{backgroundColor: 'white'}}>
          <Gap height={30} />
        </View>
        <Text style={styles.versi}>Created by EDP MNJ</Text>
        <Text style={styles.name}>Version 1.0</Text>
      </View>
    </View>
  </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
    page: {flex: 1},
    container: {
      backgroundColor: 'white',
      paddingHorizontal: 24,
      paddingVertical: 10,
      flex: 1,
    },
    versi: {
      fontSize: 12,
      backgroundColor: 'white',
      color: '#7A7B84',
      textAlign: 'center',
    },
    name: {
      fontSize: 10,
      backgroundColor: 'white',
      color: '#7A7B84',
      textAlign: 'center',
    },
})