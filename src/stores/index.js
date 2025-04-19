import {combineReducers} from 'redux';
import buttonReducer from './reducers/ButtonReducer';
import iconReducer from './reducers/IconReducer';
import {formReducer} from './reducers/FormReducer';
import {formConfigReducer} from './reducers/FormConfigReducer';

const rootReducer = combineReducers({
  buttons: buttonReducer,
  icons: iconReducer,
  form: formReducer,
  formConfig: formConfigReducer,
});

export default rootReducer;
