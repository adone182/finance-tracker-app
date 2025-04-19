import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Icon = ({
  type = 'Feather',
  name = 'circle',
  size = 20,
  color = 'black',
}) => {
  const IconComponent =
    type === 'FontAwesome'
      ? FontAwesome
      : type === 'FontAwesome5'
      ? FontAwesome5
      : Feather;

  return <IconComponent name={name} size={size} color={color} />;
};
