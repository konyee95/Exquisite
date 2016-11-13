import React ,{ Component }from 'react';
import { AppRegistry,StyleSheet,View , Text } from 'react-native';
import { Card , CardSection } from './../components/common';

import ButtonComponent,{ RectangleButton } from 'react-native-button-component';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

const deviceWidth = require('Dimensions').get('window').width;
const deviceHeight = require('Dimensions').get('window').height;

export default class Home extends Component{
  logoutUser(){
    firebase.auth().signOut();
    Actions.auth();
  }

  render(){
    return(
      <View style={styles.container}>
        <Card>
          <CardSection>
            <Text style= {styles.title}> Advertisement </Text>
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Text style= {styles.title}> Product  </Text>
          </CardSection>
        </Card>


        <View style={styles.container}>
          <ButtonComponent
            type="primary"
            shape="rectangle"
            style={styles.buttonStyle}
            onPress={this.logoutUser.bind(this)}
            text="Sign out" />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex:1,
    paddingTop:50,
    backgroundColor: '#ffbf80',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 18,
    color: 'black',
    padding: 5
  },
  buttonStyle: {
    backgroundColor: '#129793',
    height: 40,
    width: deviceWidth*0.7,
    borderRadius: 20,
    margin: 3
  },
}
