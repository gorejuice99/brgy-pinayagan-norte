const apiUrl: any = {
  dev: import.meta.env.VITE_REACT_APP_DEV_API_URL,
  prod: import.meta.env.VITE_REACT_APP_PROD_API_URL,
};

const appUrl: any = {
  dev: import.meta.env.VITE_REACT_APP_DEV_APP_URL,
  prod: import.meta.env.VITE_REACT_APP_PROD_APP_URL,
};

const clientID: any = {
  dev: import.meta.env.VITE_REACT_APP_DEV_CLIENT_ID,
  prod: import.meta.env.VITE_REACT_APP_PRO_CLIENT_ID,
};

const identityProvider: any = {
  dev: import.meta.env.VITE_REACT_APP_IDENTITY_DEV_PROVIDER,
  prod: import.meta.env.VITE_REACT_APP_IDENTITY_PROD_PROVIDER,
};

export const ENV: any = import.meta.env.MODE;
export const API_URL: any = apiUrl[ENV];
export const APP_URL: any = appUrl[ENV];
export const CLIENT_ID: any = clientID[ENV];
export const IDENTITY_PROVIDER: any = identityProvider[ENV];
