import {
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  FETCH_TRANSACTIONS,
  SET_LOADING,
} from '../../actions/TransactionAction';

const initialState = {
  transactions: [],
  loading: false,
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      console.log('Dispatching ADD_TRANSACTION:', action.payload);
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map(transaction =>
          transaction.id === action.payload.id
            ? {...transaction, ...action.payload}
            : transaction,
        ),
      };

    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload,
        ),
      };

    case FETCH_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
