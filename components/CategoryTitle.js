import {
  StyleSheet, Text, View, Pressable, Platform
} from 'react-native';

const CategoryTitle = ({ title, color, onPress }) => {
  return (
    <View
      style={styles.container}
    >
      <Pressable
        style={({ pressed }) => [styles.outerContainer,
          { backgroundColor: color, }, pressed ? styles.buttonPressed : null]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryTitle;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: 150,
    height: 150,
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
    shadowRaidus: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : null,
  },
  outerContainer: {
    flex: 1,
    borderRadius: 8,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.5
  },
  text: {
    fontSize: 20,
    padding: 2,
    textAlign: 'center',
  }

});
