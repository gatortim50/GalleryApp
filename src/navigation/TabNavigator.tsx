import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PhoneNavigator from './PhoneNavigator';
import TabletNavigator from './TabletNavigator';
import { Text } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Products"
        component={isTablet ? TabletNavigator : PhoneNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'heart' : 'heart'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={() => (
          <Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            Settings Screen
          </Text>
        )}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={focused ? 'settings' : 'settings-outline'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
