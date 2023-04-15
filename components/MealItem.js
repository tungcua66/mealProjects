import {
  StyleSheet, Text, View, Image, Pressable, Platform
} from 'react-native';

const MealItem = ({ mealItem }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable style={({ pressed }) => (pressed ? styles.pressable : null)}>
        <View>
          <View style={styles.innerContainer}>
            <Image
              source={{ uri: mealItem.imageUrl }}
              style={styles.image}
            />
            <Text style={styles.text}>{mealItem.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>
              Duration:
              {' '}
              {mealItem.duration}
              {' '}
              m
            </Text>
            <Text style={styles.detailItem}>
              Complexity:
              {' '}
              {mealItem.complexity}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>

  );
};

export default MealItem;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 24,
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 0 },
  },
  pressable: {
    opacity: 0.25,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,

  },
  text: {
    margin: 2,
    fontSize: 15,
    fontWeight: 'bold',
    padding: 4,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailItem: {
    marginHorizontal: 8,
    marginBottom: 4,
  },
});
