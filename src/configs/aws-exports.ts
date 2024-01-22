// Configs
import { CLIENT_ID, APP_URL } from "configs/api";

const redirectUrl = window.location.origin;

const awsExports = {
  Auth: {
    region: import.meta.env.VITE_REACT_APP_REGION,
    userPoolId: import.meta.env.VITE_REACT_APP_USER_POOL_ID,
    userPoolWebClientId: CLIENT_ID,
    mandatorySignIn: true,
    authenticationFlowType: "USER_SRP_AUTH",
    oauth: {
      domain: "xxx",
      scope: [`${APP_URL}/admin`, "openid"],
      redirectSignIn: redirectUrl,
      redirectSignOut: redirectUrl,
      clientId: CLIENT_ID,
      responseType: "code", // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
  },
};

export default awsExports;
