import React from 'react';
import { Image, ImagePicker, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';

// https://docs.expo.dev/tutorial/image-picker/

export default function App() {
  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log( pickerResult );
  }


  return (
    <View style={styles.container}>

      <Image source = { logo } style={ styles.logo } />

      <Text style={ styles.instructions } >To share a photo, just press the button below!</Text>

      <TouchableOpacity onPress={ ( openImagePickerAsync ) => alert('Hello world!') } style={ styles.button }  >

      <Text style={ styles.buttonText }> Pick a Photo </Text>

      </TouchableOpacity>
      

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#888',
    fontSize: 18,
  },

  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },

  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },

  button: {
    backgroundColor: 'blue',

  },
  
  buttonText: {
    fontSize: 20,
    color: '#fff',

  },


});
