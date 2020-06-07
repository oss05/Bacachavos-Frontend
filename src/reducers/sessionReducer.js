import * as actionTypes from 'src/actions/sessionActions';
import Cookies from 'js-cookie';
import { SESSION_LOGIN_GET, SESSION_LOGIN_SUCCESS,  SESSION_LOGIN_ERROR, SESSION_LOGOUT } from '../types';

const initialState = {
  loggedIn: false,
  user: {
    // first_name: this.users.names,
    // last_name: this.users.fathersLastName,
    // email: this.users.email,
    // avatar: '/images/avatars/avatar_11.png'
    //   bio: 'Brain Director',
    // role: 'USER' // ['GUEST', 'USER', 'ADMIN']
  },
  loading: false
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SESSION_LOGIN_GET: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case SESSION_LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        loading: false
      };
    }
    case SESSION_LOGIN_ERROR: {
      return {
        ...state,
        user: action.payload,
        loading: true,
        loggedIn: false,
      };
    }
    case SESSION_LOGOUT: {
      return {
        ...state,
        loggedIn: false,
        user: {
          role: 'GUEST'
        }
      };
    }

    default: {
      return state;
    }
  }
};

export default sessionReducer;
