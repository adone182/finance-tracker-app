import {SET_BUTTONS} from '../../actions/ButtonAction';

const initialState = {
  buttons: [
    {
      id: 'pemasukan',
      title: 'Pemasukan',
      iconId: 'wallet',
      style: {
        backgroundColor: '#3c3dbf',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 6,
        gap: 10,
        marginBottom: 10,
      },
    },
    {
      id: 'pengeluaran',
      title: 'Pengeluaran',
      iconId: 'shopping-bag',
      style: {
        backgroundColor: '#ff3666',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 6,
        gap: 10,
        marginBottom: 10,
      },
    },
    {
      id: 'edit',
      title: '',
      iconId: 'edit',
      style: {
        backgroundColor: '#007aff',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginBottom: 10,
      },
    },
    {
      id: 'hapus',
      title: '',
      iconId: 'hapus',
      style: {
        backgroundColor: '#ff3b30',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginBottom: 10,
      },
    },
    {
      id: 'simpan',
      title: 'Simpan',
      iconId: 'save',
      style: {
        backgroundColor: '#3c3dbf',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 6,
        gap: 10,
        marginBottom: 10,
      },
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
