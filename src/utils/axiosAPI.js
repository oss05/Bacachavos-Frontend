import axios from 'axios';

const token = localStorage.getItem('token') ? (JSON.parse(localStorage.getItem('token'))).access_token : null

axios.defaults.crossDomain = true

export const APIREGISTER = axios.create({
  baseURL: 'https://dev.corebanking.users-dev-ibanpaas.com',
});

export const APIUSER = axios.create({
  baseURL: 'https://corebanking.users-dev-ibanpaas.com',
});

export const APICLIENT = axios.create({
  baseURL: 'https://dev.corebanking.users-dev-ibanpaas.com',
  headers: {'Authorization': 'Bearer '+ token}
});

// const allocationHeaders = new Headers({
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'text/plain'
// });

export const APIALLOCATION = axios.create({
  baseURL: '',
  // headers: allocationHeaders
});
