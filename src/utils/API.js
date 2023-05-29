import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:5234/api/',
  headers: {
    'Content-Type': 'application/json'
  }
})

client.interceptors.request.use(
  req => {
    req.headers.set('Authorization', `Bearer ${localStorage.getItem("access_token")}`);
    return req;
  },
  error => Promise.reject(error)
);

// client.interceptors.response.use(
//   res => res,
//   error => {
//     if (error.response.status === 401) {
//       toast("Sign in first", { type: 'error' });
//     } else if (error.response.status === 403) {
//       toast("No permissions", { type: 'error' });
//     } else {
//       if (error.response.data === 'BLOCKED') { // TEMPORARY
//         toast("You have been blocked. Contact the administrator for details", { type: 'warning' });
//       } else {
//         toast(error.response.data, { type: 'error' });
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default client