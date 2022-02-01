import { COLORS } from '../utils/constants/colors';
import CartStackNavigation from './cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ShopStackNavigation from './shop';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer >
            <BottomTabs.Navigator initialRouteName='Shop' screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: COLORS.primary,
                    tabBarInactiveTintColor: COLORS.darkGrey,
                }}>
                <BottomTabs.Screen
                    name='Shop'
                    component={ShopStackNavigation} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name='home-outline' size={20} color={focused ? COLORS.primary : COLORS.darkGrey} />
                        )          
                    }}
                />
                <BottomTabs.Screen
                    name='Cart'
                    component={CartStackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name='cart-outline' size={20} color={focused ? COLORS.primary : COLORS.darkGrey}/>
                        )
                    }} 
                />
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;