import { StyleSheet, SafeAreaView } from 'react-native';
import SubTitle from './SubTitle';
import List from './List';

const DetailList = ({ title, data }) => {
  return (
    <SafeAreaView style={styles.detailListContainer}>
      <SubTitle title={title} />
      <List data={data} />
    </SafeAreaView>
  );
};

export default DetailList;

const styles = StyleSheet.create({
  detailListContainer: {
    marginBottom: 10
  }
});
