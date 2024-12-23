import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

export type TabletStackParamList = {
  Products: undefined;
  ProductDetail: { product: any };
};

const Stack = createStackNavigator<TabletStackParamList>();

const TabletNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}
    >
      {/* Product List */}
      <Stack.Screen
        name="Products"
        component={ProductListScreen}
        options={{ title: 'Products' }}
      />

      {/* Product Details */}
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          title: 'Product Detail',
          animationTypeForReplace: 'push',
        }}
      />
    </Stack.Navigator>
  );
};

export default TabletNavigator;
