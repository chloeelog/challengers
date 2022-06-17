import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import store from './src/store/config';

import { QueryClient, QueryClientProvider } from 'react-query';

import Root from './src/components/screens/Root';
import Cart from './src/components/screens/Cart';
import ChallengeDetail from './src/components/screens/ChallengeDetail';
import ScreenHeader from './src/components/screens/headers/ScreenHeader';

import { AppStackParamList } from './src/utils/types/paramList';

const queryClient = new QueryClient();

const App = () => {
  const Stack = createNativeStackNavigator<AppStackParamList>();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Root"
              component={Root} 
              options={{
                headerShown: false
              }} 
            />
            <Stack.Screen 
              name="Cart"
              component={Cart} 
              options={{
                headerTitle: () => (
                  <ScreenHeader title="장바구니" />
                ),
              }}
            />
            <Stack.Screen 
              name="ChallengeDetail" 
              component={ChallengeDetail}
              options={({ route }) => ({ 
                title: route.params.challenge.title,
                headerTitle: () => (
                  <ScreenHeader title={route.params.challenge.title} />
                )
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
