import React from 'react';
import { Button, Platform, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PropTypes } from 'prop-types';
import styled from 'styled-components/native';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';

import AppContainer from '@atoms/Container';
import ItunesSearch from '@organisms/ItunesSearch';
import TrackItem from '@molecules/TrackItem';

import { homeScreenActions } from './reducer';

import {
  selectTracks,
  selectTrackIsLoading,
  selectTrackErrorMessage
} from './selector';

const Container = styled(AppContainer)`
  margin: 20px;
  flex: 1;
  xwjustify-content: center;
  align-items: center;
  align-self: center;
`;

const CustomButtonParentView = styled(View)`
  margin-top: 40px;
  max-width: 80px;
  align-self: center;
`;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android:
    'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.'
});

export function HomeScreen(props) {
  const requestFetchTracks = trackName => {
    props.dispatchfetchTracks(trackName);
  };
  return (
    <Container style={{ backgroundColor: 'powderblue' }}>
      {props.fetchingTracks ? (
        <Text>loading..</Text>
      ) : (
        <View>
          <ItunesSearch
            instructions={instructions}
            userErrorMessage={props.fetchingTracksError}
            user={props.tracks}
            style={{ height: '20%' }}
          />
          <TrackItem />
          <CustomButtonParentView>
            <Button
              onPress={() => requestFetchTracks({ trackName: 'Perfect' })}
              title="Fetch Tracks"
            />
          </CustomButtonParentView>
        </View>
      )}
    </Container>
  );
}

HomeScreen.propTypes = {
  tracks: PropTypes.array,
  fetchingTracks: PropTypes.bool,
  fetchingTracksError: PropTypes.string,
  dispatchfetchTracks: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  tracks: selectTracks(),
  fetchingTracks: selectTrackIsLoading(),
  fetchingTracksError: selectTrackErrorMessage()
});

const mapDispatchToProps = dispatch => ({
  dispatchfetchTracks: trackName =>
    dispatch(homeScreenActions.requestFetchTracks(trackName))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, injectIntl)(HomeScreen);
