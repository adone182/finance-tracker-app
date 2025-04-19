import {SHOW_MODAL, HIDE_MODAL} from '../../actions/ModalAction';

const initialState = {
  visible: false,
  formType: '',
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        visible: true,
        formType: action.payload,
      };
    case HIDE_MODAL:
      return {
        ...state,
        visible: false,
        formType: '',
      };
    default:
      return state;
  }
};
