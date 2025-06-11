/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View , Pressable} from 'react-native';
import React, { useState } from 'react';
import All_Items from './All_Items';

import CreateScreen from './CreateScreen';


const Home = () => {
  const [view, setView] = useState(0);
  const [data, setdata] = useState([
  { id: 1, name: 'Item 1', stock: 10 },
  { id: 2, name: 'Item 2', stock: 50 },
  { id: 3, name: 'Item 3', stock: 5 },
  { id: 4, name: 'Item 4', stock: 20 },
  { id: 5, name: 'Item 5', stock: 15 },
  { id: 6, name: 'Item 6', stock: 30 },
  { id: 7, name: 'Item 7', stock: 25 },
  { id: 8, name: 'Item 8', stock: 12 },
]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.ButtonContainer}>
       <Pressable
  style={[
    styles.button,
    view === 0 ? { backgroundColor: 'green' } : null]}
  onPress={() => setView(0)}
>
  <Text style={[
    styles.buttonText,
    view === 0 ? { color: 'white' } : null]}>
    All Item
  </Text>
</Pressable>

<Pressable
  style={[
    styles.button,
    view === 1 ? { backgroundColor: 'green' } : null]}
  onPress={() => setView(1)}
>
  <Text style={[
    styles.buttonText,
    view === 1 ? { color: 'white' } : null]}>
    Low Stock
  </Text>
</Pressable>

<Pressable
  style={[
    styles.button,
    view === 2 ? { backgroundColor: 'green' } : null]}
  onPress={() => setView(2)}
>
  <Text style={[
    styles.buttonText,
    view === 2 ? { color: 'white' } : null]}>
    Create
  </Text>
</Pressable>

      </View>

      {view === 0 && <All_Items data={data} />}
      {view === 1 && <All_Items data={data.filter((item)=> item.stock < 20)}/>}
      {view === 2 && <CreateScreen data={data} setdata={setdata} />}


    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    padding:'4%',
  },
  title: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  ButtonContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginVertical: 20,
    gap: 10,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'green',

  },
    buttonText: {
      color: 'green',
      fontSize: 16,
      fontWeight: 'bold',

    },
  });