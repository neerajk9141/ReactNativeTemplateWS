import { put, call, takeLatest } from 'redux-saga/effects';

import { getItunesItem } from '@services/ItunesService';

import { homeScreenActions, homeScreenTypes } from './reducer';

export function* fetchItunesTracks(action) {
  try {
    const response = yield call(getItunesItem, action.trackName);
    if (response.ok) {
      const { data } = response;
      yield put(homeScreenActions.successFetchTracks(data.results));
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
  yield takeLatest(homeScreenTypes.REQUEST_FETCH_TRACKS, fetchItunesTracks);
}
