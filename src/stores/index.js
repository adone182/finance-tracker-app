import {combineReducers} from 'redux';
import {formReducer} from './reducers/FormReducer';
import {formConfigReducer} from './reducers/FormConfigReducer';
import {modalReducer} from './reducers/ModalReducer';
import {transactionReducer} from './reducers/TransactionReducer';
import {buttonReducer} from './reducers/ButtonReducer';
import {iconReducer} from './reducers/IconReducer';
import {cardReducer} from './reducers/CardReducer';

const rootReducer = combineReducers({
  buttons: buttonReducer,
  icons: iconReducer,
  cards: cardReducer,
  form: formReducer,
  formConfig: formConfigReducer,
  modal: modalReducer,
  transactions: transactionReducer,
});

export default rootReducer;
