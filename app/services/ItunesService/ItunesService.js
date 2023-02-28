import { create } from 'apisauce';

const iTunesApi = create({
  baseURL: 'https://itunes.apple.com/'
});

export const getItunesItem = params => iTunesApi.get(`search?term={${params}}`);
