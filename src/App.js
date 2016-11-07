import React, { Component } from 'react';
import {AppRegistry , StyleSheet,  Text,  View} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Header ,Card, CardSection } from './components/common';
import Home from './containers/Home';
import User from './containers/User';
import Offers from './containers/Offers';
import ShoppingCart from './containers/ShoppingCart';

const TabIcon=({ selected,title }) => {
  return(
    <Text style={{color:selected ? 'blue': 'black'}}>{title}</Text>
  );
};

class App extends Component {
  render(){
    return(
      //<View>
      //  <Header headerText="EXQUISITE" />
          <Router>
            <Scene key="root">
            //some comments
            <Scene
              key="tabbar"
              tabs
              tabBarStyle={{ backgroundColor: '#d9b3ff'}}>
              <Scene key="Home" title="Home" icon={TabIcon}>
                <Scene
                  initial
                  key="home"
                  component={Home }
                  title="Home Screen " />
            </Scene>

            <Scene key="Offers" title="Offers" icon={TabIcon}>
              <Scene
                initial
                key="offers"
                component={Offers}
                title="Offers Screen " />
            </Scene>

          <Scene key="ShoppingCart" title="Shopping cart" icon={TabIcon}>
            <Scene
              initial
              key="shoppingcart"
              component={ShoppingCart}
              title="ShoppingCart Screen " />
          </Scene>


          <Scene key="User" title="My account" icon={TabIcon}>
            <Scene
              initial
              key="user"
              component={User}
              title="User Screen " />
          </Scene>

            </Scene>
            </Scene>
          </Router>
      //</View>
    );
  }
}

export default App;
