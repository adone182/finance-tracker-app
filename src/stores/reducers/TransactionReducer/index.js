import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  FETCH_TRANSACTIONS,
  SET_LOADING,
} from '../../actions/TransactionAction';

const initialState = {
  transactions: [],
  loading: false,
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
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

export default transactionReducer;
