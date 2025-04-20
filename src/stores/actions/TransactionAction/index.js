import AsyncStorage from '@react-native-async-storage/async-storage';

export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const SET_LOADING = 'SET_LOADING';

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
    } catch (error) {
      console.error('Error adding transaction to AsyncStorage:', error);
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
    } catch (error) {
      console.error('Error deleting transaction from AsyncStorage:', error);
    }
  };
};

export const fetchTransactions = () => {
  return async dispatch => {
    dispatch(setLoading(true));

    try {
      const transactions = await AsyncStorage.getItem('transactions');
      const parsedTransactions = transactions ? JSON.parse(transactions) : [];

      dispatch({
        type: FETCH_TRANSACTIONS,
        payload: parsedTransactions,
      });
    } catch (error) {
      console.error('Error fetching transactions from AsyncStorage:', error);
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
