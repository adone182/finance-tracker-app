import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './style';

export const Button = ({
  title = '',
  bgColor,
  onPress,
  typeIcon = 'Feather',
  iconName = 'plus-circle',
  colorIcon = 'white',
  sizeIcon = 20,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: bgColor, borderWidth: 1, borderColor: 'black'},
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      {typeIcon === 'Feather' ? (
        <Feather name={iconName} size={sizeIcon} color={colorIcon} />
      ) : (
        <FontAwesome5 name={iconName} size={sizeIcon} color={colorIcon} />
      )}
    </TouchableOpacity>
  );
};
