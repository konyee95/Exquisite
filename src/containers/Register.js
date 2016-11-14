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

import ButtonComponent,{ RectangleButton } from 'react-native-button-component';
import { Actions } from 'react-native-router-flux';

const deviceWidth = require('Dimensions').get('window').width;
const deviceHeight = require('Dimensions').get('window').height;

class Register extends Component{
  state = {
    first_name: '',
    last_name:'',
    email: '',
    password: '',
    address:'',
    telNo:'',
  }

 registerUser(){
   const { email,password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => Actions.main({type:'reset'}))
      .catch((error) => console.log('error'));
 }


  render(){
    const {centerEverything,skeleton,container,innerContainer,buttonStyle,textStyle}=styles;
    return(
      <View style={container}>
        <View style={innerContainer}>
          <Text style={textStyle}> Register account </Text>
        </View>
        
        <View style={innerContainer}>
          <Input
            label="First Name"
            placeholder="First Name"
            onChangeText ={(first_name) => this.setState({first_name})}
            value={this.state.first_name} />

            <Input
              label="Last Name"
              placeholder="Last Name"
              onChangeText ={(last_name) => this.setState({last_name})}
              value={this.state.last_name} />

            <Input
              label="Email"
              placeholder="Email"
              onChangeText ={(email) => this.setState({email})}
              value={this.state.email} />

            <Input
              label="Password"
              placeholder="Password"
              onChangeText ={(password) => this.setState({password})}
              value={this.state.password} />

            <Input
              label="Address"
              placeholder="Address"
              onChangeText ={(address) => this.setState({address})}
              value={this.state.address} />

            <Input
              label="Tel No."
              placeholder="Tel No."
              onChangeText ={(telNo) => this.setState({telNo})}
              value={this.state.telNo} />
        </View>

      <View style = {[centerEverything,innerContainer]}>
          <ButtonComponent
            type="primary"
            shape="rectangle"
            style={buttonStyle}
            onPress={this.registerUser.bind(this)}
            text="Sign up"
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
    backgroundColor: '#ff6600',
    height: 40,
    width: deviceWidth*0.7,
    borderRadius: 20,
    margin: 3
  },
  textStyle:{
    fontSize:20,
  }
}

export default Register;
