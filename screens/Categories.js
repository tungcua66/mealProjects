import { View, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryTitle from '../components/CategoryTitle';

const Categories = ({ navigation }) => {
  const onPressHandler = (item) => {
    navigation.navigate('MealCategoryScreen', { categoryId: item.id, title: item.title });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <CategoryTitle
              title={item.title}
              color={item.color}
              onPress={() => onPressHandler(item)}
            />
          );
        }}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
