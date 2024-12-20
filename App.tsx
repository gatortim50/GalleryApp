// src/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainNavigator from './src/navigation/MainNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppProvider } from './src/state/GlobalContext';

const queryClient = new QueryClient();

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </AppProvider>
  </GestureHandlerRootView>
);

export default App;
