import React from 'react';
import {Modal, View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style';

export const FormModal = () => {
  const dispatch = useDispatch();
  const {visible, formType} = useSelector(state => state.modal);

  const handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            {formType === 'pemasukan' ? 'Form Pemasukan' : 'Form Pengeluaran'}
          </Text>

          <Form formType={formType} onSubmit={handleClose} />

          <Button
            style={styles.buttonContainer}
            title="Tutup"
            onPress={handleClose}
          />
        </View>
      </View>
    </Modal>
  );
};
