const token = import.meta.env.VITE_TMDB_BEARER;

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
};