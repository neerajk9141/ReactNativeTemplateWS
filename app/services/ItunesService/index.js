import { create } from 'apisauce';

const iTunesApi = create({
  baseURL: 'https://itunes.apple.com/'
});

export const getItunesItem = trackName =>
  iTunesApi.get(`search?term={${trackName}}`);
