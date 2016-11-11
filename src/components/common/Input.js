import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

const Input = ({ label, placeholder, secureTextEntry, onChangeText, value }) => {

  const {inputStyle, container,labelStyle} = styles;

  return(
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCapilalize={'none'}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      </View>
  );
}

const styles = {
  inputStyle: {
    height: 40,
    borderColor: '#e60073',
    borderWidth:1,
    borderRadius:9,
    fontSize:14,
    flex: 2,
    flexDirection: 'row',
    paddingLeft: 20,
  },

  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    paddingRight: 10,
  },

  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
}
}

export {Input};
