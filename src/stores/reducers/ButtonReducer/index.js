import {SET_BUTTONS} from '../../actions/ButtonAction';

const initialState = {
  buttons: [
    {
      id: 'pemasukan',
      title: 'Pemasukan',
      bgColor: '#3c3dbf',
      iconName: 'wallet',
      typeIcon: 'FontAwesome5',
    },
    {
      id: 'pengeluaran',
      title: 'Pengeluaran',
      bgColor: '#ff3666',
      iconName: 'shopping-bag',
      typeIcon: 'FontAwesome5',
    },
    {
      id: 'edit',
      title: 'Edit',
      bgColor: '#34c759',
      iconName: 'edit',
      typeIcon: 'Feather',
    },
    {
      id: 'hapus',
      title: 'Hapus',
      bgColor: '#34c759',
      iconName: 'x',
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
