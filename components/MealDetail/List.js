import {
  StyleSheet, Text, View
} from 'react-native';

const List = ({ data }) => {
  return (
    <View>
      {data.map((item) => (
        <View key={item} style={styles.textContainer}>
          <Text style={styles.text}>
            {' '}
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  textContainer: {
    marginHorizontal: 10,
    marginVertical: 2,
    borderRadius: 4,
    backgroundColor: '#7598c6',
    padding: 2,
  },
  text: {
    textAlign: 'center',
    color: '#ffffff'
  },
});
