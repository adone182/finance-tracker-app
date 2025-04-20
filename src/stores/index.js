import {combineReducers} from 'redux';
import buttonReducer from './reducers/ButtonReducer';
import iconReducer from './reducers/IconReducer';
import {formReducer} from './reducers/FormReducer';
import {formConfigReducer} from './reducers/FormConfigReducer';
import {modalReducer} from './reducers/ModalReducer';
import {transactionReducer} from './reducers/TransactionReducer';

const rootReducer = combineReducers({
  buttons: buttonReducer,
  icons: iconReducer,
  form: formReducer,
  formConfig: formConfigReducer,
  modal: modalReducer,
  transactions: transactionReducer,
});

export default rootReducer;
