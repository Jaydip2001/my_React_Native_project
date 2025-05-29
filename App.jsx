import { Image, StyleSheet, Text, View, Button, TouchableOpacity, Pressable, SafeAreaView } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>

      {/* for display text on your app  */}
      <Text style={styles.text}>Hello Jaydip.</Text>

      {/* for display image on your app  */}
      <Image
        style={styles.image}
        source={{ uri: "https://images.pexels.com/photos/32022761/pexels-photo-32022761/free-photo-of-gourmet-artichoke-dish-being-served.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
      />

      {/* for button (we don't use thie tag because of limited fectures ) */}
      <Button title='prees me'>
      </Button>

      {/* for TouchableOpacity (it's like button but batter ) */}
      <TouchableOpacity style={styles.btn} onPress={() => alert('Button Pressed!')}>
          <Text style={styles.textBtn}>Press me </Text>
      </TouchableOpacity>

      {/* for Pressable (it's like button, touchable but much batter ) */}
      <Pressable style={styles.btn} onPress={() => alert('Pressable Pressed!')} on>
        <Text style={styles.textBtn}>Press me </Text>
      </Pressable>


    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'beige',
    padding: 20,
    gap: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    alignContent: 'center',
    alignSelf: 'center',
  },
  btn: {
    padding: 10,
    backgroundColor: 'gray',
    marginTop: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    alignSelf: 'center',

  }
  , textBtn: {
    color: 'white',
    fontWeight: 'bold',
  }
})
