import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FrontPageScreen from "./app/screens/FrontPage/index.tsx";
import MessagingScreen from "./app/screens/Messaging/index.tsx";
import CommunitiesScreen from "./app/screens/Communities/index.tsx";
import UsersFeedScreen from "./app/screens/UsersFeed/index.tsx";

// import AuthenticationScreen from "./app/screens/Authentication/index.tsx";
// import PublicationScreen from "./app/screens/Publication/index.tsx";





function App() {
  const Tab = createBottomTabNavigator();
  // const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="FrontPage" component={FrontPageScreen} />
      <Tab.Screen name="Communities" component={CommunitiesScreen} />
      <Tab.Screen name="UsersFeed" component={UsersFeedScreen} />
      <Tab.Screen name="Messaging" component={MessagingScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;


{/* <NavigationContainer>
<Stack.Navigator 
    initialRouteName="FrontPage"
    screenOptions={{
      headerShown: false
    }}
    >
  <Stack.Screen 
      name="Front Page" 
      component={FrontPageScreen} 
    />
  <Stack.Screen 
      name="Authentication" 
      component={AuthenticationScreen}
    />
  <Stack.Screen 
      name="Publication" 
      component={PublicationScreen}
    />
</Stack.Navigator>
</NavigationContainer> */}