import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {FormInput} from '../../molecules/FormInput';
import {Button} from '../../atoms/Button';
import uuid from 'react-native-uuid';
import {setFormField} from '../../../stores/actions/FormAction';
import {
  addTransaction,
  updateTransaction,
} from '../../../stores/actions/TransactionAction';

const validationSchema = yup.object().shape({
  nominal: yup
    .number()
    .transform((value, originalValue) => {
      return originalValue === '' ? undefined : Number(originalValue);
    })
    .required('Nominal wajib diisi')
    .positive('Nominal harus lebih besar dari 0'),

  description: yup
    .string()
    .max(100, 'Deskripsi tidak boleh lebih dari 100 karakter')
    .required('Deskripsi wajib diisi'),

  date: yup
    .string()
    .required('Tanggal wajib diisi')
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Tanggal harus dalam format yyyy-mm-dd')
    .test('isValidDate', 'Tanggal harus dalam format yyyy-mm-dd', value => {
      const [year, month, day] = value.split('-').map(num => parseInt(num, 10));
      const date = new Date(year, month - 1, day);
      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
      );
    }),
});

export const Form = ({formType, onSubmit, defaultValues}) => {
  const dispatch = useDispatch();
  const fields = useSelector(state => state.formConfig.fields);
  const formValues = useSelector(state => state.form);
  const allButtons = useSelector(state => state.buttons.buttons);
  const allIcons = useSelector(state => state.icons.icons);

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: formValues,
  });

  useEffect(() => {
    reset({
      nominal: '',
      description: '',
      date: '',
    });
  }, []);

  const handleInputChange = (fieldName, value, onChange) => {
    onChange(value);
    dispatch(setFormField({[fieldName]: value}));
  };

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

  const onSubmitHandler = data => {
    const formDataWithId = {
      ...data,
      id: uuid.v4(),
      typeTrancation: formType,
    };

    console.log('Form Data:', formDataWithId);
    if (defaultValues?.id) {
      dispatch(updateTransaction(formDataWithId)); // EDIT
    } else {
      dispatch(addTransaction(formDataWithId)); // CREATE
    }
    onSubmit(formDataWithId);
  };

  return (
    <View>
      {filteredFields.map((field, index) => (
        <View key={index}>
          <Controller
            control={control}
            name={field.name}
            render={({field: {onChange, value}}) => (
              <FormInput
                label={field.label}
                value={value || ''}
                onChangeText={text =>
                  handleInputChange(field.name, text, onChange)
                }
                placeholder={field.placeholder}
                keyboardType={field.keyboardType}
                errorMessage={errors[field.name]?.message}
              />
            )}
          />
        </View>
      ))}

      <View>
        {filteredButtons.map(btn => (
          <Button
            key={btn.id}
            title={btn.title}
            icon={btn.icon}
            onPress={handleSubmit(onSubmitHandler)}
            style={btn.style}
          />
        ))}
      </View>
    </View>
  );
};
