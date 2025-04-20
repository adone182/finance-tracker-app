import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from './style';
import {FormModal} from '../../organisms/FormModal';
import {Button} from '../../atoms/Button';
import {showModal} from '../../../stores/actions/ModalAction';
import {
  deleteTransaction,
  fetchTransactions,
} from '../../../stores/actions/TransactionAction';
import {FormatCurrencyId} from '../../../utils/helpers/CurrencyIdFormat';
import {FormatDate} from '../../../utils/helpers/DateFormat';
import {Icon} from '../../atoms/Icon';

export const Home = ({
  totalIncome,
  totalExpense,
  remainingAmount,
  submittedData,
  handleButtonClick,
  isModalOpen,
  handleCloseModal,
  modalType,
  handleSubmit,
  handleDeleteAll,
}) => {
  const dispatch = useDispatch();

  const allButtons = useSelector(state => state.buttons.buttons);
  const allIcons = useSelector(state => state.icons.icons);
  const transactions = useSelector(state => state.transactions.transactions);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  console.log('All Transactions:', transactions);

  const allowed = ['pemasukan', 'pengeluaran', 'edit', 'hapus'];

  const getIconById = id => allIcons.find(icon => icon.id === id);

  const handlePemasukan = () => dispatch(showModal('pemasukan'));
  const handlePengeluaran = () => dispatch(showModal('pengeluaran'));

  const handleEdit = transaction => {
    setSelectedTransaction(transaction);
    dispatch(showModal('edit'));
  };

  const handleDelete = id => {
    Alert.alert(
      'Konfirmasi Hapus',
      'Apakah Anda yakin ingin menghapus transaksi ini?',
      [
        {
          text: 'Batal',
          onPress: () => console.log('Hapus dibatalkan'),
          style: 'cancel',
        },
        {
          text: 'Hapus',
          onPress: () => {
            dispatch(deleteTransaction(id));
          },
        },
      ],
      {cancelable: false},
    );
  };

  const getOnPressById = id => {
    switch (id) {
      case 'pemasukan':
        return handlePemasukan;
      case 'pengeluaran':
        return handlePengeluaran;
      case 'edit':
        return handleEdit;
      case 'hapus':
        return handleDelete;
      default:
        return () => console.log(`Unhandled button: ${id}`);
    }
  };

  const filteredButtons = allButtons
    .filter(btn => allowed.includes(btn.id))
    .map(btn => {
      const icon = getIconById(btn.iconId);
      const onPress = getOnPressById(btn.id);
      return {
        ...btn,
        onPress,
        icon,
      };
    });

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <View style={[styles.container, {backgroundColor: '#f9f9f9', flex: 1}]}>
      <StatusBar barStyle="light-content" backgroundColor="#3c3dbf" />
      <Text style={styles.title}>FINANCE TRACKERS {'\n'} APP</Text>
      <View style={styles.separator} />

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>
          {FormatCurrencyId(remainingAmount)},-
        </Text>
        <Text style={styles.remainingText}>
          Uang kamu tersisa{' '}
          <Text style={styles.percentageText}>
            {totalIncome !== 0
              ? ((remainingAmount / totalIncome) * 100).toFixed(2)
              : 0}
            %
          </Text>{' '}
          lagi.
        </Text>
      </View>

      <View style={styles.transactionContainer}>
        <View style={styles.buttonContainer}>
          {filteredButtons
            .filter(btn => ['pemasukan', 'pengeluaran'].includes(btn.id))
            .map(btn => (
              <Button
                key={btn.id}
                title={btn.title}
                onPress={btn.onPress}
                style={btn.style}
                icon={btn.icon}
              />
            ))}
        </View>

        <Text style={styles.transactionTitle}>
          <Icon
            type="FontAwesome"
            name="line-chart"
            size={22}
            color="#3c3dbf"
          />{' '}
          Ringkasan Transaksi
        </Text>
        {transactions.length === 0 ? (
          <Text style={styles.noTransactionText}>
            Ooops....Belom ada transaksi nih!
          </Text>
        ) : (
          transactions.map(transaction => (
            <View key={transaction.id}>
              <View style={styles.transactionItem}>
                <View style={styles.transactionLeft}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 10,
                    }}>
                    <Icon
                      type="FontAwesome5"
                      name={
                        transaction.type === 'Pemasukan'
                          ? 'wallet'
                          : 'shopping-bag'
                      }
                      size={22}
                      color={
                        transaction.type === 'Pemasukan' ? '#3c3dbf' : '#ff3666'
                      }
                    />
                    <Text
                      style={[
                        styles.amountText,
                        {
                          color:
                            transaction.type === 'Pemasukan'
                              ? '#3c3dbf'
                              : '#ff3666',
                        },
                      ]}>
                      {FormatCurrencyId(transaction.nominal)},-
                    </Text>
                  </View>

                  <Text
                    style={[
                      styles.descriptionText,
                      {
                        color:
                          transaction.type === 'Pemasukan'
                            ? '#3c3dbf'
                            : '#ff3666',
                      },
                    ]}>
                    {transaction.description}
                  </Text>
                  <Text style={styles.dateText}>
                    {FormatDate(transaction.date)}
                  </Text>
                </View>
              </View>
              <View style={styles.actionButtons}>
                {filteredButtons
                  .filter(btn => ['edit', 'hapus'].includes(btn.id))
                  .map(btn => (
                    <Button
                      key={btn.id}
                      title={btn.title}
                      onPress={() =>
                        btn.id === 'edit'
                          ? handleEdit(transaction)
                          : handleDelete(transaction.id)
                      }
                      icon={btn.icon}
                      style={btn.style}
                    />
                  ))}
              </View>
            </View>
          ))
        )}

        <FormModal selectedTransaction={selectedTransaction} />
      </View>
    </View>
  );
};
