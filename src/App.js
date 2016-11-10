import React, { Component } from 'react';
import {AppRegistry , StyleSheet,  Text,  View} from 'react-native';
import firebase from 'firebase';
import { Header ,Card, CardSection } from './components/common';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      //define firebase config here
      apiKey: "AIzaSyCThyRVQ2k1vlTNgDn0WZ-lFLIgPsbUyIE",
      authDomain: "exquisite-52c79.firebaseapp.com",
      databaseURL: "https://exquisite-52c79.firebaseio.com",
      storageBucket: "exquisite-52c79.appspot.com",
      messagingSenderId: "1048577587736"
    });
  }

  render(){
    console.log('1 App js');
    return(
      <Router />
    );
  }
}

export default App;
