import { put, call, takeLatest } from 'redux-saga/effects';

import { getItunesItem } from '@app/services/ItunesService';

import {
  homeScreenActions,
  homeScreenTypes,
  fetchTracksFromItunes
} from './reducer';

export function* fetchItunesTracks(trackName) {
  try {
    const response = yield call(getItunesItem(trackName));
    if (response.ok) {
      const { data } = response;
      yield put(homeScreenActions.successFetchtracks(data));
    } else {
      yield put(
        homeScreenActions.failureFetchTracks(
          'There was an error while fetching tracks.'
        )
      );
    }
  } catch (error) {
    yield put(homeScreenActions.failureFetchTracks(error));
  }
}

export default function* homeScreenContainerSaga() {
  yield takeLatest(homeScreenTypes.REQUEST_FETCH_TRACKS, fetchTracksFromItunes);
}
