const protocol = window.location.protocol + '//';
const host = window.location.host;
const port = window.location.port;

export const environment = {
  production: true,
  apiUrl: `https://api.spacexdata.com/launches?limit=100`,
};
