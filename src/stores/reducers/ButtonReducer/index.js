import {SET_BUTTONS} from '../../actions/ButtonAction';

const initialState = {
  buttons: [
    {
      id: 'pemasukan',
      title: 'Pemasukan',
      bgColor: '#3c3dbf',
      iconId: 'wallet',
    },
    {
      id: 'pengeluaran',
      title: 'Pengeluaran',
      bgColor: '#ff3666',
      iconId: 'shopping-bag',
    },
    {
      id: 'edit',
      title: 'Edit',
      bgColor: '#34c759',
      iconId: 'edit',
    },
    {
      id: 'hapus',
      title: 'Hapus',
      bgColor: '#34c759',
      iconId: 'x',
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
