import React from 'react';
import {View, StyleSheet,Image,TextInput} from 'react-native';

import logo from '../assets/logo.png';

export default function Login(){
    return (
    <View style ={styles.container}>
      <Image source={logo} />
      <TextInput placeholder="Digite o seu usuário do Github" />
    </View>
    );
}
const styles= StyleSheet.create({
   container:{
     flex:1,
     backgroundColor: '#f5f5f5',
     justifyContent: 'center',
     alignItems :'center',
     padding: 30 ,
   },
});