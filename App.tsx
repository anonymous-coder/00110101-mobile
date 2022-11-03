import * as React from 'react';
import { useEffect, useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import FrontPageStackScreen from './app/screens/FrontPages';
import CommunitiesStackScreen from './app/screens/Communities';
import PostFormScreen from './app/screens/Post';
import UserStackScreen from './app/screens/User';
import MessagingStackScreen from './app/screens/Messages';
const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
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
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}