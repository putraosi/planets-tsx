import axios from 'axios';
import querystring from 'qs';
import config from '../../env';

const api = axios.create({
  baseURL: config.STAGING,
  timeout: 20000,
  headers: {
    Accept: 'application/json',
  },
  paramsSerializer: params => querystring.stringify(params),
});

interface PostProps {
  query: string;
  variables?: object;
  showLog?: boolean;
}

export const ApiGraphql = {
  post: async ({query, variables = {}, showLog}: PostProps) => {
    try {
      if (showLog) console.log('API GRAPHQL BODY', variables);

      const res = await api.post('', {query, variables});

      if (showLog) console.log('API GRAPHQL RES', res.data);

      if (res.data.errors) {
        throw res.data.errors[0];
      }

      return res.data.data;
    } catch (error) {
      if (showLog) console.log('API GRAPHQL ERROR', {error});
      throw error;
    }
  },
};
