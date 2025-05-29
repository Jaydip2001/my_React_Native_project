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
      <TouchableOpacity style={{ padding: 10, backgroundColor: 'blue', }} onPress={() => alert('Button Pressed!')}>
        <Text style={{ color: 'white' }}>Press Me</Text>
      </TouchableOpacity>

      {/* for Pressable (it's like button, touchable but much batter ) */}
      <Pressable style={{ padding: 10, backgroundColor: 'green', marginTop: 20 }} onPress={() => alert('Pressable Pressed!')} on>
        <Text>Press me </Text>
      </Pressable>


    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'beige',
  },
  text: {
    fontSize: 18,
    marginBottom: 20
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
  }
})
