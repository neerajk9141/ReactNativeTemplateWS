import { createActions } from 'reduxsauce';
import { fromJS } from 'immutable';
import produce from 'immer';

export const {
  Types: homeScreenTypes,
  Creators: homeScreenActions
} = createActions({
  requestFetchTracks: ['trackName'],
  successFetchTracks: ['tracks'],
  failureFetchTracks: ['errorMessage']
});

export const initialState = fromJS({
  tracks: [],
  fetchingTracks: false,
  fetchingTracksError: null
});

export const fetchTracksFromItunes = state =>
  state
    .set('tracks', [])
    .set('fetchingTracks', true)
    .set('fetchingTracksError', null);

export const successFetchTracks = (state, { tracks }) =>
  state
    .set('tracks', tracks)
    .set('fetchingTracks', false)
    .set('fetchingTracksError', null);

export const failureFetchTracks = (state, { errorMessage }) =>
  state
    .set('tracks', [])
    .set('fetchingTracks', false)
    .set('fetchingTracksError', errorMessage);

export const homeContainerReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      case homeScreenTypes.REQUEST_FETCH_TRACKS:
        return fetchTracksFromItunes(state, action);
      case homeScreenTypes.SUCCESS_FETCH_TRACKS:
        return successFetchTracks(state, action);
      case homeScreenTypes.FAILURE_FETCH_TRACKS:
        return failureFetchTracks(state, action);
      default:
        return state;
    }
  });
