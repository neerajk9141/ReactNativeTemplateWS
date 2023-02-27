import { create } from 'apisauce';

const iTunesApi = create({
  baseURL: 'https://itunes.apple.com/'
});

export const GetItunesItem = params => iTunesApi.get(`search?term={${params}}`);
