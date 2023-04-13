import 'react-native-gesture-handler';
import {Text, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {
  SplashScreen,
  Login,
  FirstPage,
  ListCustomer,
  MenuCustomer,
  Reason,
  ProductEdit,
  ProductInput,
  ListProductEdit,
  ListProductInput,
  ListUpdateCustomer,
  ListUpdateProduct,
  UpdateProduct,
  ListDocumentation,
  InputDocumentation,
} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <ListDocumentation />
      {/* <Router/> */}
    </NavigationContainer>
  );
};

export default App;
