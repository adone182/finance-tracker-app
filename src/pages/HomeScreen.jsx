import React from 'react';
import {View, Button} from 'react-native';
import {showModal} from '../stores/actions/ModalAction';
import {FormModal} from '../components/organisms/FormModal';
import {useDispatch} from 'react-redux';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const handlePemasukan = () => {
    dispatch(showModal('pemasukan'));
  };

  const handlePengeluaran = () => {
    dispatch(showModal('pengeluaran'));
  };

  return (
    <View>
      <Button title="Pemasukan" onPress={handlePemasukan} />
      <Button title="Pengeluaran" onPress={handlePengeluaran} />

      <FormModal />
    </View>
  );
};
