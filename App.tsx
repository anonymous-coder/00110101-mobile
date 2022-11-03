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
            tabBarLabel: 'Front Page',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="reader-outline" color={color} size={size} />
            ),
          }}
          />
        <Tab.Screen 
            name="Communities" 
            component={CommunitiesStackScreen} 
            options={{
              tabBarLabel: 'Communities',
              tabBarIcon: ({ color, size }) => (
                 <Feather name="users" color={color} size={size} />
              ),
            }}
            />
        <Tab.Screen 
            name="Post" 
            component={PostFormScreen} 
            options={{
              tabBarLabel: 'Post',
              tabBarIcon: ({ color, size }) => (
                 <Ionicons name="add" color={color} size={size} />
              ),
            }}
            />
        <Tab.Screen 
          name="User" 
          component={UserStackScreen} 
          options={{
            tabBarLabel: 'User',
            tabBarIcon: ({ color, size }) => (
               <Feather name="user" color={color} size={size} />
            ),
          }}
          />
        <Tab.Screen 
          name="Messaging" 
          component={MessagingStackScreen} 
          options={{
            tabBarLabel: 'Messaging',
            tabBarIcon: ({ color, size }) => (
               <Ionicons name="chatbox-outline" color={color} size={size} />
            ),
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}