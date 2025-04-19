export const SET_FORM_FIELD = 'SET_FORM_FIELD';
export const RESET_FORM = 'RESET_FORM';

export const setFormField = (field, value) => ({
  type: SET_FORM_FIELD,
  payload: {field, value},
});

export const resetForm = () => ({
  type: RESET_FORM,
});
