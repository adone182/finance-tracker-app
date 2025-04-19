export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = type => ({
  type: SHOW_MODAL,
  payload: type,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
