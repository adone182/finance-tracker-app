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
import {TransactionCard} from '../../molecules/TransactionCard';
import {TransactionList} from '../../organisms/TransactionList';

export const Home = ({totalIncome, totalExpense, remainingAmount}) => {
  const dispatch = useDispatch();
  const allButtons = useSelector(state => state.buttons.buttons);
  const allIcons = useSelector(state => state.icons.icons);
  const transactions = useSelector(state => state.transactions.transactions);

  const [selectedTransaction, setSelectedTransaction] = useState(null);

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

      <View style={styles.cardContainer}>
        <TransactionCard
          type="FontAwesome5"
          name="wallet"
          size={30}
          iconColor="#0d6efd"
          bgColor="#E0E7FF"
          color="#3B82F6"
          title="Pemasukan Kamu"
          money={totalIncome}
          amountOfTransaction={
            transactions.filter(item => item.typeTrancation === 'pemasukan')
              .length
          }
        />
        <TransactionCard
          type="FontAwesome5"
          name="shopping-bag"
          size={30}
          iconColor="#dc3545"
          bgColor="#FEE2E2"
          color="#EF4444"
          title="Pengeluaran Kamu"
          money={totalExpense}
          amountOfTransaction={
            transactions.filter(item => item.typeTrancation === 'pengeluaran')
              .length
          }
        />
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
            <TransactionList
              key={transaction.id}
              transaction={transaction}
              filteredButtons={filteredButtons}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))
        )}

        <FormModal selectedTransaction={selectedTransaction} />
      </View>
    </View>
  );
};
