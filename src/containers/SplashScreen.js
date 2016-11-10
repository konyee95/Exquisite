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
        Actions.login()
      }
    });
  }

  render() {
    return (
      <View style={styles.centerEverything}>
        <Text>Welcome to Exquisite</Text>
        <Spinner />
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
  }
}

export default SplashScreen;
