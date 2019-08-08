import React from 'react';
import {
  
  View,
  Text,
  StyleSheet
  
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container }>
    <Text style={styles.text}>Hello World !</Text>
    <Text style={styles.text}>Hello World !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
   flex:1,
   //display: 'flex',
   //flexDirection: 'column',
   
   backgroundColor:'#7159c1',
   justifyContent :'center',
   alignItems: 'center'
   },
   text :{
      fontWeight:'bold',
      color: '#FFF',
      fontSize: 20
   }



});


