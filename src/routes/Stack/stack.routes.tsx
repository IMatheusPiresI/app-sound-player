import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import TabRoutes from '@routes/Tab/_components/tab.routes';
import SignIn from '@screens/Authentication/SignIn';
import SignUp from '@screens/Authentication/SignUp';
import Music from '@screens/App/Music';
import {
  StackNavigationOptions,
  TransitionSpec,
} from '@react-navigation/stack/lib/typescript/src/types';
import PlaylistCreate from '@screens/App/Playlist';

const Stack = createStackNavigator();

const config: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 250,
  },
};

const stackScreenOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
  transitionSpec: {
    open: config,
    close: config,
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export const StackRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="TabRoutes" component={TabRoutes} />
    <Stack.Screen name="Music" component={Music} />
    <Stack.Screen name="PlaylistCreate" component={PlaylistCreate} />
  </Stack.Navigator>
);

export const StackAuthentication = () => (
  <Stack.Navigator
    screenOptions={{
      ...stackScreenOptions,
    }}
  >
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);
