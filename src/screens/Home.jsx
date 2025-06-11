import { StyleSheet, Text, View ,Button} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button title="profile" onPress={() => navigation.navigate('Profile', {id: 1, name:"jaydip"})} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dadada',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
 
});