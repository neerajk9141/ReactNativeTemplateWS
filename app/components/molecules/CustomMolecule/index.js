import React from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { fonts, images } from '@themes';
import T from '@atoms/T';

const styles = {
  parentView: {
    marginTop: 30,
    marginBottom: 30
  },
  logoContainer: {
    width: '100%',
    height: 150,
    marginBottom: 25
  },
  logo: {
    width: '100%',
    height: '100%',
    alignSelf: 'center'
  }
};

const Instructions = styled(T)`
  ${fonts.style.standard()};
  text-align: center;
  margin-bottom: 5;
  font-style: italic;
`;

function CustomIntructions({ instructions }) {
  return (
    <View>
      <View style={styles.logoContainer}>
        <Text>
          Hello! {instructions} Welcome! into this custom instructions view{' '}
        </Text>
      </View>
      <Instructions text={instructions} />
    </View>
  );
}

CustomIntructions.propTypes = {
  instructions: PropTypes.string
};

export default CustomIntructions;
