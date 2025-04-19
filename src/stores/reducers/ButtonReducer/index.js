import {SET_BUTTONS} from '../../actions/ButtonAction';

const initialState = {
  buttons: [
    {
      id: 'pemasukan',
      title: 'Pemasukan',
      bgColor: '#3c3dbf',
      iconName: 'plus-circle',
      typeIcon: 'FontAwesome',
    },
    {
      id: 'pengeluaran',
      title: 'Pengeluaran',
      bgColor: '#e11d48',
      iconName: 'minus-circle',
      typeIcon: 'FontAwesome',
    },
    {
      id: 'lainnya',
      title: 'Lainnya',
      bgColor: '#34c759',
      iconName: 'circle',
      typeIcon: 'Feather',
    },
  ],
};

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUTTONS:
      return {
        ...state,
        buttons: action.payload,
      };
    default:
      return state;
  }
};

export default buttonReducer;
