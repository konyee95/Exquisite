import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import firebase from 'firebase';
import {
  Header,
  Button,
  Card,
  CardSection,
  Spinner,
} from './../components/common';

import LoginForm from './../components/common/LoginForm';

class App extends Component {

  render() {
    const { container, skeleton, innerContainer, centerEverything } = styles;
    return(
      <View style={[container, skeleton]}>
        <Header headerText="Exquisite" />
        <View style={[innerContainer, skeleton]}>
          <Text>login</Text>
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
  }
}

export default App;
