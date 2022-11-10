import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FrontPageActiveScreen from './active';
import FrontPageLatestScreen from './latest';
import FrontPageMainScreen from './main';

import PublicationScreen from '../Publication/Publication';
import ArticleScreen from '../Publication/Article';
import FrontPageTabBar from './tab-bar';

// Home, influenced by newspaper front page (Long form articles, blogs, etc)
function FrontPageTabs() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
    // tabBar={props => <FrontPageTabBar {...props} />}
    >
      <Tab.Screen name="main" component={FrontPageMainScreen} />
      <Tab.Screen name="latest" component={FrontPageLatestScreen} />
      <Tab.Screen name="active" component={FrontPageActiveScreen} />
    </Tab.Navigator>
  );
}

function FrontPageStackScreen() {
  const FrontPageStack = createNativeStackNavigator();
  return (
    <FrontPageStack.Navigator>
      <FrontPageStack.Screen name="FrontPage" component={FrontPageTabs} />
      <FrontPageStack.Screen name="PublicationProfile" component={PublicationScreen} />
      <FrontPageStack.Screen name="Article" component={ArticleScreen} />
    </FrontPageStack.Navigator>
  );
}

export default FrontPageStackScreen;
