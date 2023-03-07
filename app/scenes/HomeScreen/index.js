import React from 'react';
import { Button, View, Text } from 'react-native';
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
  margin-top: 30;
  flex: 1;
  align-items: center;
  align-self: center;
`;

const CustomButtonParentView = styled(View)`
  margin-top: 40px;
  max-width: 80px;
  align-self: center;
`;

export function HomeScreen(props) {
  const requestFetchTracks = trackName => {
    props.dispatchfetchTracks(trackName);
  };
  return (
    <Container style={{ backgroundColor: '#ffffff' }}>
      <View>
        {props.fetchingTracks ? (
          <Text>loading..</Text>
        ) : (
          <>
            <ItunesSearch style={{ height: '20%' }} />
            <TrackItem />
            <CustomButtonParentView>
              <Button
                onPress={() => requestFetchTracks('Perfect')}
                title="Search"
              />
            </CustomButtonParentView>
          </>
        )}
      </View>
    </Container>
  );
}

HomeScreen.propTypes = {
  // tracks: PropTypes.array,
  fetchingTracks: PropTypes.bool,
  // fetchingTracksError: PropTypes.string,
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
