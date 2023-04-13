import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput, Gap, Button} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {Docum5, Stock, Update} from '../../assets';

const MenuCustomer = () => {
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
          <Button txt="Input Product" />
        </View>

        <Gap height={30} />
        <View style={{alignItems: 'center'}}>
          <Update />
          {/* <Check /> */}
          <Button txt="Edit Product" color="red" />
        </View>
        <Gap height={30} />
        <View style={{alignItems: 'center'}}>
          <Docum5 />
          {/* <Check /> */}
          <Button txt="Alasan" color="red" />
        </View>
      </View>
    </ScrollView>
  );
};

export default MenuCustomer;

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
