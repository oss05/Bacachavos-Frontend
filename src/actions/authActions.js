import setAutorizationToken from '../utils/setAutorizationToken';
import { APICLIENT } from '../utils/axiosAPI';
import qs from 'query-string'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from '../types';
import Swal from 'sweetalert2';

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ZnJvbnRlbmQtaWN0aW5lbzppYmFuLWljdGluZW8='
  }
}

export function loginUser(creds, history) {
  return async (dispatch) => {
    dispatch(requestLogin());

    try {
      const response = await APICLIENT.post(`/api/security/oauth/token`, qs.stringify(creds), config);
      // const responseUserInfo = await APICLIENT.get(`/api/users/user/${creds.username}`);
      localStorage.setItem('token', JSON.stringify(response.data));
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log(response.data)
      dispatch(receiveLogin(response.data, response.data))
      // switch (response.data.role[0].authority) {
      //   case ROLE_CFL_OB_LENDER:
      //     return history.push('/onboarding/form');
      //   case ROLE_CFL_OB_BORROWERCFL:
      //     return history.push('/onboarding/form');
      //   case ROLE_CFL_LENDERCFL:
      //     return history.push('/lender/dashboard');
      //   case ROLE_CFL_BORROWERCFL:
      //     return history.push('/borrower/dashboard');
      // }
      // history.push('/dashboards/analytics');
      // window.location.reload();
    } catch (error) {
      dispatch(loginError(error.message))
      if (error.response &&
        error.response.data &&
        error.response.status === 400 &&
        error.response.data.error_description === 'Bad credentials') {
        Swal.fire({
          icon: 'error',
          title: 'Error de autenticación',
          text: 'Los datos de autenticación introducidos son incorrectos. Inténtelo de nuevo.'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Algo salio mal',
          text: 'Hubo un error, intenta de nuevo'
        });
      }
    }
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    dispatch(receiveLogout())
  }
}

function requestLogin() {
  return {
    type: LOGIN_REQUEST
  }
}

function receiveLogin(token, user) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token,
      user
    }
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    payload: message
  }
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS
  }
}