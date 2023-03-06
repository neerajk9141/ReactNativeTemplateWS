import React from 'react';
import { View } from 'react-native';

import AppSearchBar from '@atoms/SearchBar';

const styles = {
  container: {
    flex: 1,
    alignSelf: 'auto',
    width: '90%',
    height: 150
  }
};

function CustomNavigationBar() {
  return (
    <View style={styles.container}>
      <AppSearchBar />
    </View>
  );
}

CustomNavigationBar.propTypes = {};

export default CustomNavigationBar;
