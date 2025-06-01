import {FlatList, Image, StyleSheet, Text, View} from 'react-native'

const dummy = [
  {id:1, name: 'name1', description: 'description 1', image: 'https://reactnative.dev/img/tiny_logo.png'},
  {id:2, name: 'name2', description: 'description 2', image: 'https://reactnative.dev/img/tiny_logo.png'},
  {id:3, name: 'name3', description: 'description 3', image: 'https://reactnative.dev/img/tiny_logo.png'},
  {id:4, name: 'name4', description: 'description 4 ', image: 'https://reactnative.dev/img/tiny_logo.png'}, 
  {id:5, name: 'name5', description: 'description 5', image: 'https://reactnative.dev/img/tiny_logo.png'},
  {id:6, name: 'name6', description: 'description 6', image: 'https://reactnative.dev/img/tiny_logo.png'},
  {id:7, name: 'name7', description: 'description 7', image: 'https://reactnative.dev/img/tiny_logo.png'},
  {id:8, name: 'name8', description: 'description 8', image: 'https://reactnative.dev/img/tiny_logo.png'}, 
  {id:9, name: 'name9', description: 'description 9', image: 'https://reactnative.dev/img/tiny_logo.png'},
  {id:10, name: 'name10', description: 'description 10', image: 'https://reactnative.dev/img/tiny_logo.png'},
  {id:11, name: 'name11', description: 'description 11', image: 'https://reactnative.dev/img/tiny_logo.png'},
  {id:12, name: 'name12', description: 'description 12', image: 'https://reactnative.dev/img/tiny_logo.png'},
  {id:13, name: 'name13', description: 'description 13', image: 'https://reactnative.dev/img/tiny_logo.png'},
  {id:14, name: 'name14', description: 'description 14', image: 'https://reactnative.dev/img/tiny_logo.png'},
  {id:15, name: 'name15', description: 'description 15', image: 'https://reactnative.dev/img/tiny_logo.png'},
  {id:16, name: 'name16', description: 'description 16', image: 'https://reactnative.dev/img/tiny_logo.png'},
]

const App = () => {
 return (
  <View style={styles.container}>
  
    <FlatList  // FlatList is used to render a list of items is more efficient than ScrollView for large lists
      data={dummy}
      renderItem={({item}) => (
        
        <View style={styles.card}>
    
          <Image
            style={{width: 40, height: 40, borderRadius: 50}}
           source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
          <Text>name</Text>
          <Text>description</Text>
    
        </View>

      )}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <View style={{height: 10}} />}
      numColumns={2} //when you use numColumns, so you need to close app and restart again app
      columnWrapperStyle={{gap:10}}

      />
  </View>
  )

}
export default App

const styles = StyleSheet.create({
 container: {
  width: '100%',
  height: '100%',
  backgroundColor: '#dadada',
  paddingVertical: 10,
  paddingHorizontal: 20,
 },
 card: {
  width: 100,
  height: 100,
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 5,
  alignItems: 'center',
  justifyContent: 'center',
 },

})

