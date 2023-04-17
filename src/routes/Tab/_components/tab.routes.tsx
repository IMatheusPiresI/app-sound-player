import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';

import { MyTabBar } from './TabBar';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Home} />
      <Tab.Screen name="Album" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
}
