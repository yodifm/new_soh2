import {
  StyleSheet,
  Text,
  View,
  Alert,
  RefreshControl,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header, TextInput, Gap, Button} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {Docum5, Stock, Update} from '../../assets';
import {useForm} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';

const FirstPage = ({navigation, route}) => {
  const dispatch = useDispatch();
  const loginReducer = useSelector(state => state.loginReducer);

  const {user_data, NIK} = route.params;

  console.log(user_data);
  console.log(NIK);

  const backAction = () => {
    if (navigation.isFocused()) {
      Alert.alert(
        'Exit App',
        'Do you want to logout?',
        [
          {
            text: 'No',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Yes', onPress: () => navigation.push('SignIn')},
        ],
        {cancelable: false},
      );
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  var valStockonHand;
  const StockonHand = () => {
    valStockonHand = {
      NIK: loginReducer.NIK,
    };
    Axios.post(
      'https://marganusantarajaya.com/imd_api_new/soh/list_outlet.php',
      valStockonHand,
    )
      .then(result => {
        dispatch({
          type: 'SET_USER_DATA',
          value: result.data,
        });

        navigation.navigate('ListCustomer', {
          user_data: user_data,
          NIK: NIK,
        });
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  return (
    <ScrollView>
      <Header
        title="Choose Menu"
        subTitle="Click that you want to do"
        //   onBack={() => {}}
        //   moveBack={() => backAction()}
      />
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Stock />
          {/* <Box /> */}
          <Button txt="Stock on Hand" onPress={StockonHand} />
        </View>

        <Gap height={30} />
        <View style={{alignItems: 'center'}}>
          <Update />
          {/* <Check /> */}
          <Button txt="Update Program" color="red" />
        </View>
        <Gap height={30} />
        <View style={{alignItems: 'center'}}>
          <Docum5 />
          {/* <Check /> */}
          <Button txt="Dokumentasi" color="red" />
        </View>
      </View>
    </ScrollView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: '#F5F3F3',
    paddingHorizontal: 24,
    paddingVertical: 10,
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontWeight: 'bold',
  },
  productstyle: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameProduct: {fontSize: 14, fontFamily: 'Poppins-Medium', color: '#000'},
  quantity: {fontSize: 12, fontFamily: 'Poppins-Light', color: '#6E5DE7'},
  quantityinput: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#6E5DE7',
    fontWeight: 'light',
  },
  total: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#6E5DE7',
    fontWeight: 'light',
  },
  totalinput: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#071A5B',
    fontWeight: 'light',
  },
  move: {padding: 8, marginRight: 8, marginLeft: 5},
  info: {},
  itemview: {padding: 15},
  textinputstyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  searchdesign: {flexDirection: 'row', alignItems: 'center', paddingLeft: 15},
  searchinput: {
    // width: 250,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    // marginBottom: 25,
    borderRadius: 8,
    borderColor: 'black',
  },
  buttonsearch: {},
});
