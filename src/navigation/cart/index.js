import { COLORS } from '../../utils/constants/colors';
import Cart from '../../screens/cart';
import Orders from '../../screens/orders';
import { Platform } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Current Cart'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen name="Current Cart" component={Cart} />
            <Stack.Screen name="Orders" component={Orders} />
        </Stack.Navigator>
    )
}

export default CartStackNavigation; 