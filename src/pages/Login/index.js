import {StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {LogoMnj} from '../../assets';
import Axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {useForm} from '../../utils';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    username: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form', form);

    //Login API
    Axios.post('https://marganusantarajaya.com/imd_api_new/login.php', form)
      .then(res => {
        console.log(res.data);
        var login_info = {
          username: form.username,
          password: form.password,
        };

        console.log(res.data[0].NIK);

        dispatch({
          type: 'SET_LOGIN',
          value: login_info,
          NIK: res.data[0].NIK,
        });

        console.log(res.data);
        if (res.data == 'GAGAL') {
          Alert.alert(
            //Title
            'Login Failed',
            //Body
            'Please Check ID and Password',
            [
              {
                text: 'OK',
                onPress: () => console.log('Yes Pressed'),
              },
            ],
            {cancelable: false},
          );
        } else {
          val = {NIK: res.data[0].NIK};
          Axios.post(
            'https://marganusantarajaya.com/imd_api_new/soh/list_outlet.php',
            val,
          )
            .then(result => {
              console.log(result.data[0]);

              dispatch({
                type: 'SET_USER_DATA',
                value: result.data,
              });

              navigation.navigate('FirstPage', {
                user_data: res.data,
                NIK: result.data,
              });
            })
            .catch(err => {
              console.log('error', err);
            });
        }
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header title="Sign In" subTitle="Stock On Hand Application" />
        <View style={styles.container}>
          <LogoMnj style={{alignSelf: 'center'}} />

          <TextInput
            color="#000"
            label="Username"
            placeholder="Enter Your username"
            placeholderTextColor="#7A7B84"
            value={form.username}
            onChangeText={value => setForm('username', value)}
          />
          <Gap height={16} />
          <TextInput
            color="#000"
            label="Password"
            placeholder="Enter Your password"
            placeholderTextColor="#7A7B84"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry={true}
          />

          <Gap height={24} />
          <Button txt="Login" onPress={onSubmit} />
          <View style={{backgroundColor: 'white'}}>
            <Gap height={30} />
          </View>
          <Text style={styles.versi}>Created by EDP MNJ</Text>
          <Text style={styles.name}>Version 1.0</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

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
});
