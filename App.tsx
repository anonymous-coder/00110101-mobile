import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CommunitiesScreen from './app/screens/Communities';
import CommunityScreen from './app/screens/Community';
import CommunityDiscussionScreen from './app/screens/CommunityDiscussion';

import FrontPageScreen from "./app/screens/FrontPage/index.tsx";
import PublicationScreen from "./app/screens/Publication/index.tsx";
import ArticleScreen from "./app/screens/Article/index.tsx";

import UserScreen from './app/screens/User';
import UserFeedScreen from './app/screens/UserFeed';
import UserSettingsScreen from './app/screens/UserSettings';

import MessagingScreen from './app/screens/Messaging';

// Home, influenced by newspaper front page (Long form articles, blogs, etc)
function FrontPageStackScreen() {
  const FrontPageStack = createNativeStackNavigator();
  return (
    <FrontPageStack.Navigator>
      <FrontPageStack.Screen name="FrontPage" component={FrontPageScreen} />
      <FrontPageStack.Screen name="Publication" component={PublicationScreen} />
      <FrontPageStack.Screen name="Article" component={ArticleScreen} /> 
    </FrontPageStack.Navigator>
  );
}

// Meeting Spots, influenced by reddit
function CommunitiesStackScreen() {
  const CommunitiesStack = createNativeStackNavigator();
  return (
    <CommunitiesStack.Navigator>
      <CommunitiesStack.Screen name="Communities" component={CommunitiesScreen} />
      <CommunitiesStack.Screen name="Community" component={CommunityScreen} />
      <CommunitiesStack.Screen name="Discussion" component={CommunityDiscussionScreen} />
    </CommunitiesStack.Navigator>
  );
}

// Users, influenced by twitter
function UserStackScreen() {
  const UserStack = createNativeStackNavigator();
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="User" component={UserScreen} />
      <UserStack.Screen name="UserFeed" component={UserFeedScreen} />
      <UserStack.Screen name="UserSettings" component={UserSettingsScreen} />
    </UserStack.Navigator>
  );
}

// Direct Messages, influenced by facebook messenger
function MessagingStackScreen() {
  const MessagingStack = createNativeStackNavigator();
  return (
    <MessagingStack.Navigator>
      <MessagingStack.Screen name="inbox" component={MessagingScreen} />
    </MessagingStack.Navigator>
  );
}


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Front Page" component={FrontPageStackScreen} />
        <Tab.Screen name="Communities" component={CommunitiesStackScreen} />
        <Tab.Screen name="User" component={UserStackScreen} />
        <Tab.Screen name="Messaging" component={MessagingStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}