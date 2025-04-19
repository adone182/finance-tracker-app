import {TouchableOpacity, Text} from 'react-native';
import {styles} from './style';
import {Icon} from '../Icon';

export const Button = ({title = '', bgColor, onPress, icon = null}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: bgColor}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      {icon && <Icon {...icon} />}
    </TouchableOpacity>
  );
};
