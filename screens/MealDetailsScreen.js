import { useLayoutEffect } from 'react';
import {
  StyleSheet, Text, View, Image, ScrollView
} from 'react-native';
import DetailList from '../components/MealDetail/DetailList';
import IconButton from '../components/IconButton';

const MealDetailsScreen = ({ route, navigation }) => {
  const { mealItem } = route.params;
  const renderIconButton = () => {
    return (
      <IconButton
        name="ios-star"
        size={24}
        color="white"
      />
    );
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.mealItem.title,
      headerRight: renderIconButton
    });
  });
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: mealItem.imageUrl }}
        style={styles.image}
      />
      <Text style={styles.text}>
        {' '}
        {mealItem.title}
      </Text>
      <ScrollView>
        <DetailList title="Ingredients" data={mealItem.ingredients} />
        <DetailList title="Steps" data={mealItem.steps} />
      </ScrollView>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    width: '100%',
    height: 250
  },
  text: {
    margin: 4,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 4,
    textAlign: 'center',
    color: 'white'
  },
});
