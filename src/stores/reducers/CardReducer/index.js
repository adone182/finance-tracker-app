import {SET_CARDS} from '../../actions/CardAction';

const initialState = {
  cards: [
    {
      bgColor: '#E0E7FF',
      color: '#3B82F6',
    },
    {
      bgColor: '#FEE2E2',
      color: '#EF4444',
    },
  ],
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    default:
      return state;
  }
};
