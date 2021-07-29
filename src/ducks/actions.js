import { store } from '../store';

export const USER_LOGGED_IN = `USER_LOGGED_IN`;

export const LoginUser = (payload) =>
  store.dispatch({
    type: USER_LOGGED_IN,
    payload
  });
