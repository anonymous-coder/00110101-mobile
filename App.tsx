import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrontPageScreen from "./app/screens/FrontPage";

export default function App() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
            <Stack.Navigator>
        <Stack.Screen name="FrontPage" component={FrontPageScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}