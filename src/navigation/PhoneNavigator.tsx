import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

export type PhoneStackParamList = {
    Products: undefined;
    ProductDetail: { product: any }
}

const Stack = createStackNavigator<PhoneStackParamList>();

const PhoneNavigator = () => (
  <Stack.Navigator
    screenOptions={{
        gestureEnabled: true
    }}
  >
    <Stack.Screen 
        name="Products" 
        component={ProductListScreen} 
        options={{ title: 'Products' }}
    />
    <Stack.Screen 
        name="ProductDetail" 
        component={ProductDetailScreen} 
        options={{
            title: 'Product Detail',
            animationTypeForReplace: 'push'
        }}
    />
  </Stack.Navigator>
);

export default PhoneNavigator;
