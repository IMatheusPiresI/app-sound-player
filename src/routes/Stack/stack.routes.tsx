import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from '@routes/Tab/_components/tab.routes';
import Music from '@screens/Music';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
      <Stack.Screen name="Music" component={Music} />
    </Stack.Navigator>
  );
}
