import React from 'react';
import {View, Button} from 'react-native';
import {FormInput} from '../../molecules/FormInput';
import {Button} from '../components/atoms/Button';
import {useSelector} from 'react-redux';

export const Form = ({formData, onSubmit}) => {
  const allButtons = useSelector(state => state.buttons.buttons);
  const allIcons = useSelector(state => state.icons.icons);

  const allowed = ['simpan'];

  const getIconById = id => allIcons.find(icon => icon.id === id);

  const filteredButtons = allButtons
    .filter(btn => allowed.includes(btn.id))
    .map(btn => {
      const icon = getIconById(btn.iconId);
      return {
        ...btn,
        onPress: () => console.log(`Klik tombol ${btn.title}`),
        icon,
      };
    });

  return (
    <View>
      {formData.map((field, index) => (
        <FormInput
          key={index}
          label={field.label}
          value={field.value}
          onChangeText={field.onChangeText}
          placeholder={field.placeholder}
          keyboardType={field.keyboardType}
          errorMessage={field.errorMessage}
        />
      ))}

      <View>
        {filteredButtons.map(btn => (
          <Button
            key={btn.id}
            title={btn.title}
            bgColor={btn.bgColor}
            icon={btn.icon}
            onPress={onSubmit}
          />
        ))}
      </View>
    </View>
  );
};
