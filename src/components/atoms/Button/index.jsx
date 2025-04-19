import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './style';

export const Button = ({
  title,
  bgColor,
  onPress,
  typeIcon = 'Feather',
  iconName = 'plus-circle',
  colorIcon = 'white',
  sizeIcon = 20,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: bgColor}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      {typeIcon === 'Feather' ? (
        <Feather name={iconName} size={sizeIcon} color={colorIcon} />
      ) : (
        <FontAwesome name={iconName} size={sizeIcon} color={colorIcon} />
      )}
    </TouchableOpacity>
  );
};
