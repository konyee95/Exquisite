import firebase from 'firebase';
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Home from './containers/Home';
import User from './containers/User';
import Offers from './containers/Offers';
import ShoppingCart from './containers/ShoppingCart';
import Login from './containers/Login';

//comment

const TabIcon=({ selected,title }) => {
  return(
    <Text style={{color:selected ? 'blue': 'black'}}>{title}</Text>
  );
};

class RouterComponent extends Component {

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        //go to main container
        console.log('got user');
      } else {
        //stay at auth container
        console.log('no user');
      }
    });
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
          <Router>
            <Scene key="root">
              <Scene key="auth" >
                <Scene key="login" initial component={Login}/>
              </Scene>

              <Scene key="main" initial>
                <Scene key="tabbar" tabs tabBarStyle={{ backgroundColor: '#d9b3ff'}}>
                  <Scene key="Home" title="Home"  icon={TabIcon} >
                    <Scene initial key="home" component={Home} title="Home Screen " />
                  </Scene>

                  <Scene key="Offers" title="Offers" icon={TabIcon}>
                    <Scene initial key="offers" component={Offers} title="Offers Screen " />
                  </Scene>

                  <Scene key="ShoppingCart" title="Shopping cart" icon={TabIcon}>
                    <Scene initial key="shoppingcart" component={ShoppingCart} title="ShoppingCart Screen " />
                  </Scene>

                  <Scene key="User" title="My account" icon={TabIcon}>
                    <Scene initial key="user" component={User} title="User Screen " />
                  </Scene>
                </Scene>
              </Scene>
            </Scene>
          </Router>
      </View>
    );
  }
}

export default RouterComponent;
