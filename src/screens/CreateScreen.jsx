/* eslint-disable react-native/no-inline-styles */
import { Pressable, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import React, { useState } from 'react';

const CreateScreen = ({ data, setdata }) => {
  const [itemname, setitemname] = useState('');
  const [stock, setstock] = useState('');
  const [isEdit, setisEdit] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const handlerAdditem = () => {
    if (isEdit) {
      // Update the existing item
      const updatedData = data.map((item) =>
        item.id === editItemId ? { ...item, name: itemname, stock: stock } : item
      );
      setdata(updatedData);
      setisEdit(false);
      setEditItemId(null);
    } else {
      // Add new item
      const newItem = {
        id: Date.now(), // Unique ID for the item
        name: itemname,
        stock: stock,
      };
      setdata([...data, newItem]);
    }
    // Clear input fields
    setitemname('');
    setstock('');
  };

  const deleteItemHandler = (id) => {
    setdata(data.filter((item) => item.id !== id));
  };

  const editItemHandler = (item) => {
    setisEdit(true);
    setitemname(item.name);
    setstock(item.stock.toString());
    setEditItemId(item.id);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Item Name"
        style={styles.input}
        value={itemname}
        onChangeText={(text) => setitemname(text)}
      />

      <TextInput
        placeholder="Item Stock"
        style={styles.input}
        value={stock}
        onChangeText={(text) => setstock(text)}
        keyboardType="numeric" // Optional, shows numeric keyboard
      />

      <Pressable style={styles.button} onPress={handlerAdditem}>
        <Text style={styles.textbtn}>
          {isEdit ? 'Update Item' : 'Add Item in the Stock'}
        </Text>
      </Pressable>

      <View>
        {/* Header */}
        <View style={styles.headingcontainer}>
          <Text style={styles.title2}>All Items</Text>
          <Text style={styles.title2}>Quantity</Text>
        </View>

        {/* FlatList */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemcontainer,
                { backgroundColor: Number(item.stock) < 20 ? '#f8d7da' : '#d4edda' },
              ]}
            >
              <Text>{item.name}</Text>
              <Text>{item.stock}</Text>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={{ color: 'blue' }}>edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text style={{ color: 'red' }}>delete</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    padding: '4%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textbtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headingcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title2: {
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
