import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NotificationScreen from './notifications';
import DirectMessagesScreen from './direct-messages';

// Direct Messages, influenced by facebook messenger
export default function MessagingStackScreen() {
  const MessagingStack = createNativeStackNavigator();
  return (
    <MessagingStack.Navigator screenOptions={{ headerShown: false }}>
      <MessagingStack.Screen name="notifications" component={NotificationScreen} />
      <MessagingStack.Screen name="direct-messages" component={DirectMessagesScreen} />
    </MessagingStack.Navigator>
  );
}
