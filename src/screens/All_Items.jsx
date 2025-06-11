/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View, Text, FlatList } from 'react-native';

const All_Items = ({ data }) => {
  return (
    <View>
      {/* Header */}
      <View style={styles.headingcontainer}>
        <Text style={styles.title}>All Items</Text>
        <Text style={styles.title}>Quantity</Text>
      </View>

      {/* FlatList */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.itemcontainer,
              { backgroundColor: item.stock < 20 ? '#f8d7da' : '#d4edda' },
            ]}>
            <Text>{item.name}</Text>
            <Text>{item.stock}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default All_Items;

const styles = StyleSheet.create({
  headingcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  itemcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});
