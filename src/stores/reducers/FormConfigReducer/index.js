import {SET_FORM_FIELDS} from '../../actions/FormConfigAction';

const initialState = {
  fields: [
    {
      name: 'nominal',
      label: 'Nominal:',
      placeholder: 'Masukkan nominal',
      keyboardType: 'numeric',
      type: 'pemasukan-pengeluaran',
    },
    {
      name: 'description',
      label: 'Deskripsi:',
      placeholder: 'Contoh: Gaji bulan ini',
      keyboardType: 'default',
      type: 'pemasukan-pengeluaran',
    },
    {
      name: 'date',
      label: 'Tanggal:',
      placeholder: 'yyyy-mm-dd',
      keyboardType: 'numeric',
      type: 'pemasukan-pengeluaran',
    },
  ],
};

export const formConfigReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_FIELDS:
      return {
        ...state,
        fields: action.payload,
      };
    default:
      return state;
  }
};
