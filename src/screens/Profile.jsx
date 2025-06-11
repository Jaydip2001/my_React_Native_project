import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const Profile = ({navigation, route}) => {
    const { id, name } = route.params || {};
  return (
    <View style={styles.container}>
      <Text>id:{id} ,name : {name}</Text>
        <Button title="Search" onPress={() => navigation.navigate('Search')} />
    </View>
    );
};
export default Profile;

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