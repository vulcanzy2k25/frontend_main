

import { authEndpoints } from '../APIs';
const {SIGNUP_API,LOGIN_API} = authEndpoints

export const signin = () => {
  window.location.href = LOGIN_API; // Redirect user to Google OAuth
};
export const signup = () => {
  window.location.href = SIGNUP_API; // Redirect user to Google OAuth
};

