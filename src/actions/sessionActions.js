import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { APIUSER } from '../utils/axiosAPI';
import {
  SESSION_LOGIN_GET,
  SESSION_LOGIN_SUCCESS,
  SESSION_LOGIN_ERROR,
  SESSION_LOGOUT
} from '../types';

const sessionLogin = () => ({
  type: SESSION_LOGIN_GET,
  payload: true
});

const sessionLoginSuccess = (user) => ({
  type: SESSION_LOGIN_SUCCESS,
  payload: user
});
const sessionLoginError = () => ({
  type: SESSION_LOGIN_ERROR,
  payload: true
});

const sessionLogout = () => ({
  type: SESSION_LOGOUT,
  payload: true
});

export const login = (username) => {
  return async dispatch => {
    try {
      // set Loading
      dispatch( sessionLogin() );
      const respuesta = await APIUSER.get( `/user/${ username }` );
      Cookies.remove('user');
      Cookies.set('user', respuesta.data, { expires: 1 });
      dispatch( sessionLoginSuccess( respuesta.data ) )
    } catch (error) {
      // console.log(error);
      dispatch(sessionLoginError());
      Swal.fire({
        icon: 'error',
        title: 'Datos invalidos',
        text: 'Hubo un error, intenta de nuevo'
      });
    }
  };
};

export const logout = () => dispatch => {
  Cookies.remove('user');
  dispatch(sessionLogout());
};
