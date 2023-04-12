import { StyleSheet, Text, View } from 'react-native';

const MealItem = ({ mealItem }) => {
  return (
    <View>
      <Text>{mealItem.title}</Text>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({});
