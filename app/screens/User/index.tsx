import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserScreen from './/User';
import UserFeedScreen from './UserFeed';
import UserSettingsScreen from './UserSettings';

// Users, influenced by twitter
export default function UserStackScreen() {
  const UserStack = createNativeStackNavigator();
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="user-profile" component={UserScreen} />
      <UserStack.Screen name="user-feed" component={UserFeedScreen} />
      <UserStack.Screen name="user-settings" component={UserSettingsScreen} />
    </UserStack.Navigator>
  );
}
