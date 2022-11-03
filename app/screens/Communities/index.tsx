import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CommunitiesScreen from './Communities';
import CommunityScreen from './Community';
import CommunityDiscussionScreen from './CommunityDiscussion';

// Meeting Spots, influenced by reddit
export default function CommunitiesStackScreen() {
  const CommunitiesStack = createNativeStackNavigator();
  return (
    <CommunitiesStack.Navigator screenOptions={{ headerShown: false }}>
      <CommunitiesStack.Screen name="communities-feed" component={CommunitiesScreen} />
      <CommunitiesStack.Screen name="community" component={CommunityScreen} />
      <CommunitiesStack.Screen name="discussion" component={CommunityDiscussionScreen} />
    </CommunitiesStack.Navigator>
  );
}
