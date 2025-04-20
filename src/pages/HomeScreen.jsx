import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, ActivityIndicator} from 'react-native';
import {Home} from '../components/templates/Home';
import {
  fetchTransactions,
  deleteTransaction,
  updateTransaction,
} from '../actions/TransactionAction';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transactions.transactions);
  const loading = useSelector(state => state.transactions.loading);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const totalIncome = transactions
    .filter(item => item.type === 'Pemasukan')
    .reduce((acc, curr) => acc + curr.nominal, 0);
  const totalExpense = transactions
    .filter(item => item.type === 'Pengeluaran')
    .reduce((acc, curr) => acc + curr.nominal, 0);
  const remainingAmount = totalIncome - totalExpense;

  const handleEdit = updatedData => {
    const updatedTransaction = {
      id: updatedData.id,
      nominal: updatedData.nominal,
      description: updatedData.description,
      date: updatedData.date,
      type: updatedData.type,
    };

    dispatch(updateTransaction(updatedTransaction));

    setEditId(null);
    setEditNominal('');
    setEditDescription('');
    setEditDate('');
    setEditType('');
  };

  const handleDeleteAll = () => {
    dispatch(deleteTransaction(id));
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Home
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          remainingAmount={remainingAmount}
          submittedData={transactions}
          loading={loading}
        />
      )}
    </View>
  );
};
