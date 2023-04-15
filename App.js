import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MealCategoryScreen from './screens/MealCategoryScreen';

import Categories from './screens/Categories';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#1b3556' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#396fb5' }
          }}
        >
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{ title: 'All categories' }}
          />
          <Stack.Screen
            name="MealCategoryScreen"
            component={MealCategoryScreen}
            options={({ route }) => ({ title: route.params.title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}
