import React ,{ Component }from 'react';
import { AppRegistry,StyleSheet,View , Text } from 'react-native';
import { Card , CardSection } from './../components/common';
import { Actions } from 'react-native-router-flux';

export default class User extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Card>
        <CardSection>
          <Text style= {styles.title}> User </Text>
        </CardSection>

        <CardSection>
          <Text style= {styles.title}> User Detail </Text>
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          <Text style= {styles.title}> Product 2 </Text>
        </CardSection>

        <CardSection>
          <Text style= {styles.title}> Product Detail </Text>
        </CardSection>
      </Card>
      </View>
    );
  }
}

const styles = {
  container: {
    flex:1,
    backgroundColor: '#CCCCFF',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 18,
    color: 'black',
    padding: 5
  }
}
