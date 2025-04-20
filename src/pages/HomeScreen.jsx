import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import {Home} from '../components/templates/Home';
import {fetchTransactions} from '../stores/actions/TransactionAction';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transactions.transactions);
  const loading = useSelector(state => state.transactions.loading);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const totalIncome = transactions
    .filter(item => item.typeTrancation == 'pemasukan')
    .reduce((acc, curr) => acc + curr.nominal, 0);
  const totalExpense = transactions
    .filter(item => item.typeTrancation == 'pengeluaran')
    .reduce((acc, curr) => acc + curr.nominal, 0);
  const remainingAmount = totalIncome - totalExpense;

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, padding: 12}}>
      <Home
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        remainingAmount={remainingAmount}
        submittedData={transactions}
        loading={loading}
      />
    </ScrollView>
  );
};
