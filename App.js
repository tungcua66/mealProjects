import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MealCategoryScreen from './screens/MealCategoryScreen';
import Categories from './screens/Categories';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#1b3556' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#254774' }
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
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}
