import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {FormatCurrencyId} from '../../../utils/helpers/CurrencyIdFormat';

export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const SET_LOADING = 'SET_LOADING';
export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION';

export const addTransaction = transaction => {
  return async (dispatch, getState) => {
    try {
      const {transactions} = getState().transactions;
      const newTransactions = [...transactions, transaction];

      await AsyncStorage.setItem(
        'transactions',
        JSON.stringify(newTransactions),
      );

      dispatch({
        type: ADD_TRANSACTION,
        payload: transaction,
      });

      const nominal = transaction.nominal;
      const formattedNominal = FormatCurrencyId(nominal);

      Toast.show({
        type: 'success',
        text1: 'Transaksi Berhasil Ditambahkan',
        text2: `Nominal: ${formattedNominal}`,
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Gagal Menambahkan Transaksi',
        text2: error.message || 'Terjadi kesalahan saat menambahkan transaksi.',
      });
    }
  };
};

// export const updateTransaction = updatedTransaction => {
//   return async (dispatch, getState) => {
//     try {
//       const {transactions} = getState().transactions;
//       const updatedTransactions = transactions.map(transaction =>
//         transaction.id === updatedTransaction.id
//           ? {...transaction, ...updatedTransaction}
//           : transaction,
//       );

//       await AsyncStorage.setItem(
//         'transactions',
//         JSON.stringify(updatedTransactions),
//       );

//       dispatch({
//         type: UPDATE_TRANSACTION,
//         payload: updatedTransaction,
//       });

//       const nominal = updatedTransaction.nominal;
//       const formattedNominal = FormatCurrencyId(nominal);
//       Toast.show({
//         type: 'success',
//         text1: 'Transaksi Berhasil Diperbarui',
//         text2: `Nominal: ${formattedNominal}`,
//       });
//     } catch (error) {
//       Toast.show({
//         type: 'error',
//         text1: 'Gagal Memperbarui Transaksi',
//         text2: error.message || 'Terjadi kesalahan saat memperbarui transaksi.',
//       });
//     }
//   };
// };
export const updateTransaction = updatedTransaction => {
  return async (dispatch, getState) => {
    try {
      const {transactions} = getState().transactions;
      console.log('Current Transactions:', transactions); // Check existing transactions
      console.log('Updated Transaction:', updatedTransaction); // Check the updated transaction

      const updatedTransactions = transactions.map(transaction =>
        transaction.id === updatedTransaction.id
          ? {...transaction, ...updatedTransaction}
          : transaction,
      );

      await AsyncStorage.setItem(
        'transactions',
        JSON.stringify(updatedTransactions),
      );

      dispatch({
        type: UPDATE_TRANSACTION,
        payload: updatedTransaction,
      });

      const nominal = updatedTransaction.nominal;
      const formattedNominal = FormatCurrencyId(nominal);
      Toast.show({
        type: 'success',
        text1: 'Transaksi Berhasil Diperbarui',
        text2: `Nominal: ${formattedNominal}`,
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Gagal Memperbarui Transaksi',
        text2: error.message || 'Terjadi kesalahan saat memperbarui transaksi.',
      });
    }
  };
};

export const deleteTransaction = id => {
  return async (dispatch, getState) => {
    try {
      const {transactions} = getState().transactions;
      const newTransactions = transactions.filter(
        transaction => transaction.id !== id,
      );

      await AsyncStorage.setItem(
        'transactions',
        JSON.stringify(newTransactions),
      );

      dispatch({
        type: DELETE_TRANSACTION,
        payload: id,
      });

      Toast.show({
        type: 'success',
        text1: 'Transaksi Berhasil Dihapus',
        text2: `ID Transaksi: ${id}`,
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Gagal Menghapus Transaksi',
        text2: error.message || 'Terjadi kesalahan saat menghapus transaksi.',
      });
    }
  };
};

// export const fetchTransactions = () => {
//   return async dispatch => {
//     dispatch(setLoading(true));

//     try {
//       const transactions = await AsyncStorage.getItem('transactions');
//       const parsedTransactions = transactions ? JSON.parse(transactions) : [];

//       dispatch({
//         type: FETCH_TRANSACTIONS,
//         payload: parsedTransactions,
//       });
//     } catch (error) {
//       Toast.show({
//         type: 'error',
//         text1: 'Gagal Mengambil Data Transaksi',
//         text2:
//           error.message || 'Terjadi kesalahan saat mengambil data transaksi.',
//       });
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };
// };
export const fetchTransactions = () => {
  return async dispatch => {
    dispatch(setLoading(true));

    try {
      const transactions = await AsyncStorage.getItem('transactions');
      const parsedTransactions = transactions ? JSON.parse(transactions) : [];
      console.log('Fetched Transactions:', parsedTransactions); // Check if data is fetched correctly

      dispatch({
        type: FETCH_TRANSACTIONS,
        payload: parsedTransactions,
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Gagal Mengambil Data Transaksi',
        text2:
          error.message || 'Terjadi kesalahan saat mengambil data transaksi.',
      });
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const setLoading = isLoading => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};
