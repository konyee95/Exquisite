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

import ButtonComponent,{ RectangleButton } from 'react-native-button-component';
import { Actions } from 'react-native-router-flux';

const deviceWidth = require('Dimensions').get('window').width;
const deviceHeight = require('Dimensions').get('window').height;

class App extends Component {

  state = {
    email: '',
    password: ''
  }

 loginUser(){
   const { email,password } = this.state;
   firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => Actions.main({type:'reset'}))
      .catch((error) => console.log('error'));
 }


  render() {
    const { textStyle,container, skeleton, innerContainer, centerEverything ,buttonStyle} = styles;
    return(
      <View style={[container]}>
        <Header headerText="EXQUISITE" />
        <View style={[innerContainer]}>
            <Text style={textStyle}>Login</Text>
        </View>

        <View style={[innerContainer]}>
          <View>
            <Input
              label="email"
              placeholder="Email"
              onChangeText ={(email) => this.setState({email})}
              value={this.state.email} />
          </View>

          <View>
            <Input
              label="password"
              placeholder="Password"
              onChangeText ={(password) => this.setState({password})}
              value={this.state.password}
              secureTextEntry />
          </View>
        </View>

        <View style={[centerEverything,innerContainer]}>
          <ButtonComponent
            type="primary"
            shape="rectangle"
            style={buttonStyle}
            onPress={this.loginUser.bind(this)}
            text="Sign in"
          />

          <ButtonComponent
            type="primary"
            shape="rectangle"
            style={buttonStyle}
            onPress={() =>Actions.register()}
            text="Register new account"
          />
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
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent:'center',
    // alignItems: 'center'
  },
  buttonStyle: {
    backgroundColor: '#bfff00',
    height: 40,
    width: deviceWidth*0.7,
    borderRadius: 20,
    margin: 3
  },

  textStyle:{
    fontSize: 20,
  }
}

export default App;
