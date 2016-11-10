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
  LoginForm
} from './../components/common';

class App extends Component {
  state = {loggedIn: null}

  renderContent() {
    switch(this.state.loggedIn){
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Sign Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return(
      <View>
        <Header headerText="Exquisite" />
        <View>
          {this.renderContent()}
        </View>
      </View>
    )
  }
}

export default App;
