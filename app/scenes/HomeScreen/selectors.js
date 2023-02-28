import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

export const selectHomeDomain = state => (state.example || initialState).toJS();

export const selectTracks = () =>
  createSelector(selectHomeDomain, substate => get(substate, 'tracks', null));

export const selectTrackIsLoading = () =>
  createSelector(selectHomeDomain, substate =>
    get(substate, 'fetchingTracks', null)
  );

export const selectTrackErrorMessage = () =>
  createSelector(selectHomeDomain, substate =>
    get(substate, 'fetchingTracksError', null)
  );
