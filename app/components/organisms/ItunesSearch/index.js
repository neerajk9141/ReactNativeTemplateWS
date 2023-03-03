import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { fonts } from '@themes';
import If from '@molecules/If';
import CustomNavigationBar from '@molecules/NavigationBar';

const Error = styled.Text`
  ${fonts.style.standard()};
  text-align: center;
  margin-bottom: 5px;
  color: red;
`;

function ItunesSearch({ userErrorMessage }) {
  return (
    <>
      <CustomNavigationBar />
      <If
        condition={!userErrorMessage}
        otherwise={<Error>{userErrorMessage}</Error>}
      ></If>
    </>
  );
}

ItunesSearch.propTypes = {
  userErrorMessage: PropTypes.string
};

export default ItunesSearch;
