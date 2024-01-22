// Api
import httpClient from 'api/http-client';

export const graphqlApi = async <T = any>(graphqlQuery: string): Promise<T> => {
  const { data } = await httpClient.post<T>('/graphql', graphqlQuery);

  return data;
};
