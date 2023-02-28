import { put, call, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { getItunesItem } from '@app/services/ItunesService/ItunesService';
import {
  homeScreenActions,
  homeScreenTypes,
  fetchTracksFromItunes
} from './reducer';

export function* fetchItunesTracks() {
  const response = yield call(getItunesItem);
  if (response.ok) {
    const { data } = response;
    yield put(homeScreenActions.successFetchtracks(get(data, '0')));
  } else {
    yield put(
      homeScreenActions.failureFetchTracks(
        'There was an error while fetching tracks.'
      )
    );
  }
}

export default function* searchListContainerSaga() {
  yield takeLatest(homeScreenTypes.REQUEST_FETCH_TRACKS, fetchTracksFromItunes);
}
