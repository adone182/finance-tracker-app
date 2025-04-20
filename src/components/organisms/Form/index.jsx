import React from 'react';
import {View} from 'react-native';
import {FormInput} from '../../molecules/FormInput';
import {Button} from '../../atoms/Button';
import {useDispatch, useSelector} from 'react-redux';
import {setFormField} from '../../../stores/actions/FormAction';

export const Form = ({formType, onSubmit}) => {
  const dispatch = useDispatch();

  const fields = useSelector(state => state.formConfig.fields);
  const formValues = useSelector(state => state.form);

  const allButtons = useSelector(state => state.buttons.buttons);
  const allIcons = useSelector(state => state.icons.icons);

  const filteredFields = fields.filter(field =>
    field.type.includes(formType.toLowerCase()),
  );

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

  const handleInputChange = (name, value) => {
    dispatch(setFormField(name, value));
  };

  return (
    <View>
      {filteredFields.map((field, index) => (
        <FormInput
          key={index}
          label={field.label}
          value={formValues[field.name] || ''}
          onChangeText={value => handleInputChange(field.name, value)}
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
