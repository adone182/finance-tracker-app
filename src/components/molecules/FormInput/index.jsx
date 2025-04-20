import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../atoms/Input';
import {styles} from './style';

export const FormInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  errorMessage,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};
