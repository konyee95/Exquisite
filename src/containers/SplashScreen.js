import React, { Component } from 'react';
import {
  View,
  Text,
  LayoutAnimation
} from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  Spinner,
} from './../components/common';

class SplashScreen extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        //go to main container
        console.log('Firebase: got user');
        Actions.main({ type: 'reset'})
      } else {
        //stay at auth container
        console.log('Firebase: no user');
        Actions.login();
      }
    });
  }

  render() {
        const {centerEverything,skeleton,container,innerContainer,textStyle}=styles;
    return (
      <View style={centerEverything}>
        <Text style={[textStyle]}>Welcome to Exquisite</Text>
        <View style={innerContainer}>
          <Spinner />
        </View>
      </View>
    )
  }
}

const styles = {
  centerEverything: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  skeleton: {
    borderWidth: 1,
    borderColor: 'blue'
  },
  container: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    paddingTop: 15
  },
  textStyle:{
    fontSize:30
    
  }
}

export default SplashScreen;
