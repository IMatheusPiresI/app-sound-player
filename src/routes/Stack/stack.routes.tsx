import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from '@routes/Tab/_components/tab.routes';
import SignIn from '@screens/Authentication/SignIn';
import SignUp from '@screens/Authentication/SignUp';
import Music from '@screens/App/Music';

const Stack = createStackNavigator();

export const StackRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="TabRoutes" component={TabRoutes} />
    <Stack.Screen name="Music" component={Music} />
  </Stack.Navigator>
);

export const StackAuthentication = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);
