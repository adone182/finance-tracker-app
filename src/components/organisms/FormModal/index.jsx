import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style';
import {hideModal} from '../../../stores/actions/ModalAction';
import {Form} from '../Form';
import {Icon} from '../../atoms/Icon';

export const FormModal = ({selectedTransaction}) => {
  const dispatch = useDispatch();
  const {visible, formType} = useSelector(state => state.modal);

  const allIcons = useSelector(state => state.icons.icons);
  const getCloseIcon = () => allIcons.find(icon => icon.id === 'close');

  const handleClose = () => {
    dispatch(hideModal());
  };

  const handleFormSubmit = formData => {
    console.log('Form submitted:', formData);
    handleClose();
  };

  const closeIcon = getCloseIcon();

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleClose}>
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalContainer}>
              {closeIcon && (
                <TouchableOpacity onPress={handleClose}>
                  <View style={styles.closeButton}>
                    <Icon
                      name={closeIcon.name}
                      type={closeIcon.type}
                      size={closeIcon.size}
                      color={closeIcon.color}
                    />
                  </View>
                </TouchableOpacity>
              )}
              <Text style={styles.modalTitle}>
                {formType === 'pemasukan'
                  ? 'Form Pemasukan'
                  : formType === 'pengeluaran'
                  ? 'Form Pengeluaran'
                  : 'Edit Transaksi'}
              </Text>

              <Form
                formType={formType}
                onSubmit={handleFormSubmit}
                defaultValues={selectedTransaction}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
