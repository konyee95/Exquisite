import React ,{ Component }from 'react';
import { AppRegistry,StyleSheet,View , Text } from 'react-native';
import { Card , CardSection } from './../components/common';
import { Actions } from 'react-native-router-flux';

export default class ShoppingCart extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Card>
        <CardSection>
          <Text style= {styles.title}> item </Text>
        </CardSection>

        <CardSection>
          <Text style= {styles.title}> item Detail </Text>
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          <Text style= {styles.title}> item 2 </Text>
        </CardSection>

        <CardSection>
          <Text style= {styles.title}> item Detail </Text>
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
    backgroundColor: '#99FFBB',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 18,
    color: 'black',
    padding: 5
  }
}
