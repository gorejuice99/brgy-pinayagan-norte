import { Auth } from 'aws-amplify';
import axios, { AxiosInstance } from 'axios';

// Configs
import { API_URL, ENV } from 'configs/api';

const httpClient: AxiosInstance = axios.create({
  baseURL: `${API_URL}/${ENV}`,
});

httpClient.interceptors.request.use(
  async (config) => {
    try {
      const session = await Auth?.currentSession();
      const xApiKey = session.getIdToken().decodePayload().knowledgeGraphApiKey;
      if (config.headers && !config.headers['x-api-key']) {
        config.headers['x-api-key'] = xApiKey;
        // config.headers.Authorization = `Bearer ${session
        //   .getAccessToken()
        //   .getJwtToken()}`;
      }
      return config;
    } catch (error) {
      Auth.signOut();
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpClient;
