import { StyleSheet, Text, View } from 'react-native';

const MealCategoryScreen = ({ route }) => {
  const cateId = route.params.categoryId;
  return (
    <View>
      <Text>
        MealCategoryScreen-
        {' '}
        {cateId}
      </Text>
    </View>
  );
};

export default MealCategoryScreen;

const styles = StyleSheet.create({});
