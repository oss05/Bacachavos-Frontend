import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
const NavGrey = '#EBEBEB'

export default {
  primary: {
    contrastText: white,
    dark: colors.teal[900],
    main: colors.teal[500],
    light: colors.teal[100]
  },
  secondary: {
    contrastText: black,
    dark: colors.cyan[700],
    main: colors.cyan[500],
    light: colors.cyan[300]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: '#F4F6F8',
    paper: white
  },
  divider: colors.grey[200],
  navbar: {
    contrastText: black,
    primary: NavGrey,
    active: colors.teal.A200
  },
  charts:{
    contrastText: black,
    dark: colors.teal[700],
    main: colors.teal[400],
    light: colors.grey[200],
    error: colors.red.A400
  }

};
