import {TouchableOpacity, Text} from 'react-native';
import {styles} from './style';
import {Icon} from '../Icon';

export const Button = ({title = '', onPress, icon = null, style = null}) => {
  return (
    <TouchableOpacity style={[styles.button, style || {}]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      {icon && <Icon {...icon} />}
    </TouchableOpacity>
  );
};
