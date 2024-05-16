import React from 'react';
import { AppProvider } from "./AppContext";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { useChatClient } from './useChatClient';
// import { OverlayProvider } from 'stream-chat-react-native';

const Stack = createStackNavigator();

const HomeScreen = () => <Text>Home Screen</Text>;

const NavigationStack = () => {
  const { clientIsReady } = useChatClient();

  if (!clientIsReady) {
    return <Text>Loading chat ...</Text>
  }
  return (
    // <OverlayProvider>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    // </OverlayProvider>
  );
};

export default () => {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
              <NavigationStack />
            </NavigationContainer>
          </SafeAreaView>
          </GestureHandlerRootView>
      </SafeAreaProvider>
    </AppProvider>

  );
};
