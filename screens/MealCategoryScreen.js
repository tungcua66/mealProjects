import { StyleSheet, View, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

const MealCategoryScreen = ({ route }) => {
  const cateId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(cateId) >= 0);
  const renderMeals = (mealItem) => {
    return (
      <MealItem mealItem={mealItem} />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderMeals(item)}
      />
    </View>
  );
};

export default MealCategoryScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  }
});
