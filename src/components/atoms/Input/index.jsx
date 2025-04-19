import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './style';

const Input = ({value, onChangeText, placeholder, keyboardType, style}) => (
  <TextInput
    style={[styles.input, style]}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    keyboardType={keyboardType}
  />
);

export default Input;
