import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/App/Home';
import Favorites from '@screens/App/Favorites';
import Playlists from '@screens/App/Playlists';

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
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Playlists" component={Playlists} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
}
