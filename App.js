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
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="MealCategoryScreen" component={MealCategoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}
