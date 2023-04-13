
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { SplashScreen, Login, FirstPage, ListCustomer, MenuCustomer, 
        Reason, ProductEdit, ProductInput, ListProductEdit, ListProductInput,
        ListUpdateCustomer, ListUpdateProduct, UpdateProduct, ListDocumentation
        ,InputDocumentation } from "../pages";

const Stack = createStackNavigator();


const Router = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="FirstPage" component={FirstPage} options={{headerShown:false}}/>
        <Stack.Screen name="ListCustomer" component={ListCustomer} options={{headerShown:false}}/>
        <Stack.Screen name="MenuCustomer" component={MenuCustomer} options={{headerShown:false}}/>
        <Stack.Screen name="Reason" component={Reason} options={{headerShown:false}}/>
        <Stack.Screen name="ProductInput" component={ProductInput} options={{headerShown:false}}/>
        <Stack.Screen name="ProductEdit" component={ProductEdit} options={{headerShown:false}}/>
        <Stack.Screen name="ListProductInput" component={ListProductInput} options={{headerShown:false}}/>
        <Stack.Screen name="ListProductEdit" component={ListProductEdit} options={{headerShown:false}}/>
        <Stack.Screen name="ListUpdateCustomer" component={ListUpdateCustomer} options={{headerShown:false}}/>
        <Stack.Screen name="ListUpdateProduct" component={ListUpdateProduct} options={{headerShown:false}}/>
        <Stack.Screen name="UpdateProduct" component={UpdateProduct} options={{headerShown:false}}/>
        <Stack.Screen name="ListDocumentation" component={ListDocumentation} options={{headerShown:false}}/>
        <Stack.Screen name="InputDocumentation" component={InputDocumentation} options={{headerShown:false}}/>
      
    </Stack.Navigator>
    ) 
}

export default Router;  