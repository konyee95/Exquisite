import React ,{ Component }from 'react';
import { AppRegistry,StyleSheet,View , Text } from 'react-native';
import { Card , CardSection } from './../components/common';
import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/MaterialIcons';
const accountbox = (<Icon name="account-box" size={30} color="black" />);
const face = (<Icon name="face" size={30} color="black" />);
const email = (<Icon name="email" size={30} color="black" />);

export default class User extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Card>
        <CardSection>
          <Text style= {styles.title}> User </Text>
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          {face}
          <Text style= {styles.title}> Name: </Text>
        </CardSection>
        <CardSection>
          {email}
          <Text style= {styles.title}> Email: </Text>
        </CardSection>
        <CardSection>
          <Text style= {styles.title}> Gender: </Text>
        </CardSection>
        <CardSection>
          <Text style= {styles.title}> Address: </Text>
        </CardSection>
      </Card>

      </View>
    );
  }
}

const styles = {
  container: {
    flex:1,
    paddingTop:50,
    backgroundColor: '#CCCCFF',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 18,
    color: 'black',
    padding: 5
  }
}
