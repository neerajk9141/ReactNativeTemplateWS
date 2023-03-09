import React from 'react';
import { View } from 'react-native';

import CustomNavigationBar from '@molecules/NavigationBar';

function ItunesSearch() {
  return (
    <View style={{ flex: 0.165, height: 200 }}>
      <CustomNavigationBar style={{ flex: 1, height: 200 }} />
    </View>
  );
}

ItunesSearch.propTypes = {};

export default ItunesSearch;
