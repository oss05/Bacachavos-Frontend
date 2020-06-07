import Swal from "sweetalert2";
import { APIREGISTER } from "../utils/axiosAPI";
import {
  REGISTER_GET,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  REGISTER_FORM_GET,
  REGISTER_FORM_SUCCESS,
  REGISTER_FORM_ERROR,
  EMAIL_GET,
  EMAIL_SUCCESS,
  EMAIL_ERROR,
  RESEND_EMAIL_GET,
  RESEND_EMAIL_SUCCESS,
  RESEND_EMAIL_ERROR,
  SMS_GET,
  SMS_SUCCESS,
  SMS_ERROR,
  RESEND_SMS_GET,
  RESEND_SMS_SUCCESS,
  RESEND_SMS_ERROR,
} from "../types";
import {geolocallizacion} from '../utils/geolocalizacion'
import { updateLanguageServiceSourceFile } from "typescript";

const registerLogin = () => ({
  type: REGISTER_GET,
  payload: true,
});

const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

const registerError = () => ({
  type: REGISTER_ERROR,
  payload: true,
});

function handleErrorResponse( error ) {
  if (error.response &&
      error.response.data &&
      error.response.status === 409) {
      Swal.fire({
          icon: 'error',
          title: 'Algo salio mal',
          text: error.response.data.message
      });
  } else {
      Swal.fire({
        icon: 'error',
        title: 'Algo salio mal',
        text: 'Hubo un error, intenta de nuevo'
      });
  }
}

export const registerAction = (user, handleEditOpen) => {
  return async (dispatch) => {
    try {
      // set Loading
      localStorage.setItem('registerUser', JSON.stringify(user.users))
      // console.log(idUserStorage.iduser) 
      dispatch(registerLogin());
      const respuesta = await APIREGISTER.post(
        `/api/users/registration/103`,
        user
      );
        Swal.fire("Correcto", "Revisa tu correo para verificarlo.", "success");
        dispatch(registerSuccess(user));
        handleEditOpen()
    
    } catch (error) {
      // console.log(error);
      dispatch(registerError());
      handleErrorResponse( error );
    }
  };
};

const email = () => ({
  type: EMAIL_GET,
  payload: true,
});

const emailSuccess = (userEmail) => ({
  type: EMAIL_SUCCESS,
  payload: userEmail,
});

const emailError = () => ({
  type: EMAIL_ERROR,
  payload: true,
});
const idUserStorage = JSON.parse(localStorage.getItem('registerUser'))
export const emailComfirm = (idUser, mailcode, nextStep) => {
  return async (dispatch) => {
    try {
      // set Loading
      dispatch(email());
      const respuesta = await APIREGISTER.get(
        `/api/users/${idUser}/mail/${mailcode}`,
      );
      dispatch(emailSuccess(respuesta.data));
        Swal.fire("Correcto", "Tu email ha sido verificado.", "success");
        nextStep();
    } catch (error) {
      dispatch(emailError());
      handleErrorResponse( error );
    }
  };
};

const resendEmail = () => ({
  type: RESEND_EMAIL_GET,
  payload: true,
});

const resendEmailSuccess = (userEmail) => ({
  type: RESEND_EMAIL_SUCCESS,
  payload: userEmail,
});

const resendEmailError = () => ({
  type: RESEND_EMAIL_ERROR,
  payload: true,
});

export const resendEmailComfirm = (userEmail) => {
  return async (dispatch) => {
    try {
      // set Loading
      dispatch(resendEmail());
      const respuesta = await APIREGISTER.post(
        `/api/users/registration/renewemailcode`,
        userEmail
      );
      dispatch(resendEmailSuccess(respuesta.data));
      Swal.fire("Correcto", "Revisa tu correo para verificarlo.", "success");
    } catch (error) {
      // console.log(error);
      dispatch(resendEmailError());
      Swal.fire({
        icon: "error",
        title: "OPS...",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
};

const registerForm = () => ({
  type: REGISTER_FORM_GET,
  payload: true,
});

const registerFormSuccess = (user) => ({
  type: REGISTER_FORM_SUCCESS,
  payload: user,
});

const registerFormError = () => ({
  type: REGISTER_FORM_ERROR,
  payload: true,
});

export const registerFormAction = (userInfo, handleEditOpen) => {
  return async (dispatch) => {
    try {
      // set Loading
      dispatch(registerForm());
      const respuesta = await APIREGISTER.put(`/api/customers/cfl/customer`, userInfo);
      console.log(respuesta.data)
      dispatch(registerFormSuccess(userInfo));
      Swal.fire("Correcto", "Revisa tu teléfono para verificarlo.", "success");
      handleEditOpen()
    } catch (error) {
      // console.log(error);
      dispatch(registerFormError());
      handleErrorResponse( error )
    }
  };
};

const sms = () => ({
  type: SMS_GET,
  payload: true,
});

const smsSuccess = (userSMS) => ({
  type: SMS_SUCCESS,
  payload: userSMS,
});

const smsError = () => ({
  type: SMS_ERROR,
  payload: true,
});

export const smsComfirm = (idUser, smsCode, nextStepSMS) => {
  return async (dispatch) => {
    try {
      // set Loading
      dispatch(sms());
      const respuesta = await APIREGISTER.get(
        `/api/users/${idUser}/sms/${smsCode}`,
      );
      
      dispatch(smsSuccess(respuesta.data));
      console.log(idUser, smsCode )
      console.log(respuesta.data)
      
      Swal.fire("Correcto", "Tu teléfono ha sido verificado.", "success");
      nextStepSMS();
    } catch (error) {
      // console.log(error);
      dispatch(smsError());
      handleErrorResponse( error )
    }
  };
};


const resendSMS = () => ({
  type: RESEND_SMS_GET,
  payload: true,
});

const resendSMSSuccess = (userSMS) => ({
  type: RESEND_SMS_SUCCESS,
  payload: userSMS,
});

const resendSMSError = () => ({
  type: RESEND_SMS_ERROR,
  payload: true,
});

export const resendSMSComfirm = (userSMS) => {
  return async (dispatch) => {
    try {
      // set Loading
      dispatch(resendSMS());
      const respuesta = await APIREGISTER.post(
        `/api/users/registration/renewsmscode`,
        userSMS
      );
      dispatch(resendSMSSuccess(respuesta.data));
      Swal.fire("Correcto", "Revisa tu correo para verificarlo.", "success");
    } catch (error) {
      // console.log(error);
      dispatch(resendSMSError());
      Swal.fire({
        icon: "error",
        title: "OPS...",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
};

export const logout = () => (dispatch) => {
  //   Cookies.remove("user");
  //   dispatch(());
};
