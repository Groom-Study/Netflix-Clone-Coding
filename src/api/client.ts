import axios from 'axios';

interface client {
  baseURL: string;
  params: {
    api_key: string;
    language: string;
  };
}

const client = axios.create({
  baseURL: import.meta.env.VITE_APP_TMDB_API_URL,
  params: {
    api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
    language: 'ko-KR',
  },
});

export default client;
