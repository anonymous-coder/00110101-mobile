import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrontPageScreen from "./app/screens/FrontPage/index.tsx";
import AuthenticationScreen from "./app/screens/Authentication/index.tsx";

function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
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
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;