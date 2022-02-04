export const SHOW_INFO = 'SHOW_INFO';

export const initialState = {
  infos: [],
};

export const showInfo = (payload) => ({
  type: SHOW_INFO,
  payload,
});
