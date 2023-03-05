import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { fonts } from '@themes';
import If from '@molecules/If';
import CustomNavigationBar from '@molecules/NavigationBar';
import { View } from 'react-native';

const Error = styled.Text`
  ${fonts.style.standard()};
  text-align: center;
  margin-bottom: 5px;
  color: red;
`;

function ItunesSearch({ userErrorMessage }) {
  return (
    <View style={{ flex: 0.165, height: 200 }}>
      <CustomNavigationBar style={{ flex: 1, height: 200 }} />
      <If
        condition={!userErrorMessage}
        otherwise={<Error>{userErrorMessage}</Error>}
      ></If>
    </View>
  );
}

ItunesSearch.propTypes = {
  userErrorMessage: PropTypes.string
};

export default ItunesSearch;
