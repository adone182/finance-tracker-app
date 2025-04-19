import {SET_ICONS} from '../../actions/IconAction';

const initialState = {
  icons: [
    {
      id: 'plus-circle',
      type: 'Feather',
      name: 'plus-circle',
      size: 20,
      color: 'white',
    },
    {
      id: 'minus-circle',
      type: 'Feather',
      name: 'minus-circle',
      size: 20,
      color: 'white',
    },
    {
      id: 'wallet',
      type: 'FontAwesome5',
      name: 'wallet',
      size: 20,
      color: 'white',
    },
    {
      id: 'shopping-bag',
      type: 'FontAwesome5',
      name: 'shopping-bag',
      size: 20,
      color: 'white',
    },
  ],
};

const iconReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ICONS:
      return {
        ...state,
        icons: action.payload,
      };
    default:
      return state;
  }
};

export default iconReducer;
