import React from 'react';
import { Button, Platform, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PropTypes } from 'prop-types';
import styled from 'styled-components/native';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';

import AppContainer from '@atoms/Container';
import ItunesSearch from '@organisms/ItunesSearch';

import {
  selectTracks,
  selectTrackIsLoading,
  selectTrackErrorMessage
} from './selectors';
import { homeScreenActions } from './reducer';

const Container = styled(AppContainer)`
  margin: 30px;
  flex: 1;
  justify-content: center;
  align-items: center;
  max-width: 320px;
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

class HomeScreen extends React.Component {
  componentDidMount() {
    this.requestFetchTracks()();
  }

  requestFetchTracks = () => () => {
    this.props.fetchTracks();
  };

  render() {
    return (
      <Container>
        {this.props.fetchingTracks ? (
          <ActivityIndicator testID="loader" size="large" color="#0000ff" />
        ) : (
          <View testID="example-container-content">
            <ItunesSearch
              instructions={instructions}
              userErrorMessage={this.props.fetchingTracksError}
              user={this.props.tracks}
            />
            <CustomButtonParentView>
              <Button onPress={this.requestFetchTracks()} title="Refresh" />
            </CustomButtonParentView>
          </View>
        )}
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  tracks: PropTypes.object,
  fetchingTracks: PropTypes.bool,
  fetchingTracksError: PropTypes.string,
  fetchTracks: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  tracks: selectTracks(),
  fetchingTracks: selectTrackIsLoading(),
  fetchingTracksError: selectTrackErrorMessage()
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(homeScreenActions.requestFetchTracks())
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, injectIntl)(HomeScreen);
