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
  Input
} from './../components/common';

import LoginForm from './../components/common/LoginForm';

import ButtonComponent from 'react-native-button-component';

class App extends Component {

 loginUser(){
   const { email,password } = this.state;
   this.loginUser(email,password);
 }
  render() {
    const { container, skeleton, innerContainer, centerEverything } = styles;
    return(
      <View style={[container, skeleton]}>
        <Header headerText="Exquisite" />
        <View style={[innerContainer, skeleton]}>
          <Text>login</Text>
          <Input label="email" placeholder="Email" onChangeText ={(email) => this.setState({email})} value={this.state.email} />
          <Input label="password" placeholder="Password" onChangeText ={(password) => this.setState({password})} value=
          {this.state.password} secureTextEntry />
        </View>

        <ButtonComponent
          style={buttonStyle}
          type='primary'
          shape='rectangle'
          text='Sign In'
        />
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
