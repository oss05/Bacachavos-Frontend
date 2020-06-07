import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS
  } from '../types'
  
  const initialState = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    user: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('user')) : null,
    token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOGIN_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          isAuthenticated: false,
        })
      case LOGIN_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          isAuthenticated: true,
          errorMessage: '',
          token: action.payload.token,
          user: action.payload.user
        })
      case LOGIN_FAILURE:
        return Object.assign({}, state, {
          isFetching: false,
          isAuthenticated: false,
          errorMessage: action.payload,
          user: null,
          token: null
        })
      //LogOut
      case LOGOUT_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          isAuthenticated: false,
          user: null,
          token: null
        })
      case LOGOUT_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
        })
      default:
        return state
    }
  }