import { StyleSheet, Text, View , Button} from 'react-native';
import React from 'react';

const Search = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({

});