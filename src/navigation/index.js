import Categories from "../screens/categories";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetail from "../screens/product_detail";
import Products from "../screens/products";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppNavigation = () =>{
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Categories">
                <Stack.Screen name="Categories" component={Categories}/>
                <Stack.Screen name="Products" component={Products}/>
                <Stack.Screen name="ProductDetail" component={ProductDetail}/>
            </Stack.Navigator>
        </NavigationContainer>

    )

}

export default AppNavigation;