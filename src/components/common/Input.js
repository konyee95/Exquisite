import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

const Input = ({  placeholder, secureTextEntry, onChangeText, value }) => {

  const {inputStyle} = styles;

  return(
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={input}
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
    borderColor: '#CFD0D1',
    borderWidth:1,
    borderRadius:3,
    fontSize:14,
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
  }
}

export {Input};
