import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from '@routes/Tab/_components/tab.routes';
import Home from '@screens/Home';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
      <Stack.Screen name="Song" component={Home} />
    </Stack.Navigator>
  );
}
