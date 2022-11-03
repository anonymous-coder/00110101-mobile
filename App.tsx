import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons'; 

import FrontPageStackScreen from './app/screens/FrontPages';
import CommunitiesStackScreen from './app/screens/Communities';
import PostFormScreen from './app/screens/Post';
import UserStackScreen from './app/screens/User';
import MessagingStackScreen from './app/screens/Messages';

export default function App() {
  const Tab = createBottomTabNavigator();
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