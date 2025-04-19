import {SET_FORM_FIELD, RESET_FORM} from '../../actions/FormAction';

const initialState = {
  nominal: '',
  description: '',
  date: '',
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
};
