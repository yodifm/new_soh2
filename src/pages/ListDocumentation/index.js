import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput, Gap, ButtonSearch} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';

const ListDocumentation = () => {
  return (
    <View>
      <Header title="Choose The Customer" subTitle="Make sure it's valid" />
      <TextInput
        placeholderTextColor="#000"
        placeholder="Search Product"
        // onChangeText={text => setInputSearch(text)}
        style={styles.searchinput}></TextInput>
      <Gap height={10} />

      <ButtonSearch
        txt="Search"
        // onPress={() => SearchProduct()}
      ></ButtonSearch>
      <Gap height={20} />
      <View>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Poppins-Medium',
            color: '#000',
            fontWeight: 'medium',
            paddingHorizontal: 37,
          }}>
          List of Customer
        </Text>
      </View>
      <Gap height={8} />

      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 12,
          paddingHorizontal: 8,
          flexDirection: 'row',
          alignItems: 'center',

          paddingHorizontal: 37,
        }}>
        <View style={styles.move}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Medium',
              color: '#000',
            }}>
            Guardian Cipinang Indah - 05GRD04
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Poppins-Light',
              color: '#000',
            }}>
            Cipinang
          </Text>
        </View>
      </View>
      {/* <View style={{paddingHorizontal: 8, alignItems: 'center'}}>
        <Text>
          -------------------------------------------------------------
        </Text>
      </View> */}

      <Gap height={20} />

      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 12,
          paddingHorizontal: 8,
          flexDirection: 'row',
          alignItems: 'center',

          paddingHorizontal: 37,
        }}>
        <View style={styles.move}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Medium',
              color: '#000',
            }}>
            Guardian Cipinang Indah - 05GRD04
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Poppins-Light',
              color: '#000',
            }}>
            Cipinang
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ListDocumentation;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: '#F5F3F3',
    paddingHorizontal: 24,
    paddingVertical: 10,
    flex: 1,
  },
  // text: {
  //   fontSize: 18,
  //   fontFamily: 'Poppins-Medium',
  //   color: 'black',
  //   fontWeight: 'bold',
  // },
  // productstyle: {
  //   backgroundColor: 'white',
  //   borderRadius: 12,
  //   paddingHorizontal: 8,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // nameProduct: {fontSize: 14, fontFamily: 'Poppins-Medium', color: '#000'},
  // quantity: {fontSize: 12, fontFamily: 'Poppins-Light', color: '#6E5DE7'},
  // quantityinput: {
  //   fontSize: 15,
  //   fontFamily: 'Poppins-Medium',
  //   color: '#6E5DE7',
  //   fontWeight: 'light',
  // },
  // total: {
  //   fontSize: 15,
  //   fontFamily: 'Poppins-Medium',
  //   color: '#6E5DE7',
  //   fontWeight: 'light',
  // },
  // totalinput: {
  //   fontSize: 15,
  //   fontFamily: 'Poppins-Medium',
  //   color: '#071A5B',
  //   fontWeight: 'light',
  // },
  // move: {padding: 8, marginRight: 8, marginLeft: 5},
  // info: {},
  // itemview: {padding: 15},
  // textinputstyle: {
  //   height: 40,
  //   borderWidth: 1,
  //   paddingLeft: 20,
  //   margin: 5,
  //   borderColor: '#000',
  //   backgroundColor: '#fff',
  // },
  // searchdesign: {flexDirection: 'row', alignItems: 'center', paddingLeft: 15},
  searchinput: {
    width: 350,

    alignSelf: 'center',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    // marginBottom: 25,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'black',
  },
  buttonsearch: {},
});
