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

const initialState = {
  registerData: {},
  registerForm: {},
  beResponse:{},
  error: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_GET:
      return {
        ...state,
        loading: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        registerData: action.payload,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case REGISTER_FORM_GET:
        return {
          ...state,
          loading: action.payload,
        };
      case REGISTER_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          registerForm: action.payload,
        };
      case REGISTER_FORM_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case EMAIL_GET:
          return {
            ...state,
            loading: action.payload,
          };
        case EMAIL_SUCCESS:
          return {
            ...state,
            loading: false,
              beResponse: action.payload,
          };
        case EMAIL_ERROR:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
          case RESEND_EMAIL_GET:
            return {
              ...state,
              loading: action.payload,
            };
          case RESEND_EMAIL_SUCCESS:
            return {
              ...state,
              loading: false,
                beResponse: action.payload,
            };
          case RESEND_EMAIL_ERROR:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
            case SMS_GET:
              return {
                ...state,
                loading: action.payload,
              };
            case SMS_SUCCESS:
              return {
                ...state,
                loading: false,

                  beResponse: action.payload,
              };
            case SMS_ERROR:
              return {
                ...state,
                loading: false,
                error: action.payload,
              };
              case RESEND_SMS_GET:
                return {
                  ...state,
                  loading: action.payload,
                };
              case RESEND_SMS_SUCCESS:
                return {
                  ...state,
                  loading: false,
                    beResponse: action.payload,
                };
              case RESEND_SMS_ERROR:
                return {
                  ...state,
                  loading: false,
                  error: action.payload,
                };
    default:
      return state;
  }
}
