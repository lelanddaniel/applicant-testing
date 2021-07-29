import { USER_LOGGED_IN } from './actions';

export const initialState = {
  isLoggedIn: false
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${USER_LOGGED_IN}`:
      return {
        ...state,
        isLoggedIn: true,
        userName: payload.userName
      };

    default:
      return state;
  }
}

