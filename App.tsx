import * as React from 'react';
import { useEffect, useCallback, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import FrontPageStackScreen from './app/screens/FrontPages';
import CommunitiesStackScreen from './app/screens/Communities';
import PostFormScreen from './app/screens/Post';
import UserStackScreen from './app/screens/User';
import MessagingStackScreen from './app/screens/Messages';
import AuthenticationScreen from './app/screens/Authentication';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(false);
  
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),

    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-BlackItalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),

    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),

    'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-LightItalic': require('./assets/fonts/Roboto-LightItalic.ttf'),
    
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-MediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),

    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
    'Roboto-ThinItalic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
    'JetBrainsMono-Regular': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
   
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }
  
  return (
    <NavigationContainer>
      {!isAuthenticated ? (
          <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={AuthenticationScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
          name="Front Page" 
          component={FrontPageStackScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="reader-outline" color={color} size={size} />
            ),
          }}
          />
        <Tab.Screen 
            name="Communities" 
            component={CommunitiesStackScreen} 
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                 <Feather name="users" color={color} size={size} />
              ),
            }}
            />
        <Tab.Screen 
            name="Post" 
            component={PostFormScreen} 
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                 <Ionicons name="add" color={color} size={size} />
              ),
            }}
            />
        <Tab.Screen 
          name="User" 
          component={UserStackScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
               <Feather name="user" color={color} size={size} />
            ),
          }}
          />
        <Tab.Screen 
          name="Messaging" 
          component={MessagingStackScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
               <Ionicons name="chatbox-outline" color={color} size={size} />
            ),
          }}
          />
      </Tab.Navigator>
      )}

    </NavigationContainer>
  );
}