import {combineReducers} from 'redux';
import buttonReducer from './reducers/ButtonReducer';

const rootReducer = combineReducers({
  buttons: buttonReducer,
});

export default rootReducer;
