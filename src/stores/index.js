import {combineReducers} from 'redux';
import buttonReducer from './reducers/ButtonReducer';
import iconReducer from './reducers/IconReducer';

const rootReducer = combineReducers({
  buttons: buttonReducer,
  icons: iconReducer,
});

export default rootReducer;
