import { StyleSheet, Text, View } from 'react-native';

const SubTitle = ({ title }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTileText}>{title}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitleContainer: {
    borderBottomWidth: 4,
    borderColor: '#bcd4f5',
    marginHorizontal: 64,
    marginVertical: 4,
    padding: 4
  },
  subTileText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#bcd4f5'
  }
});
