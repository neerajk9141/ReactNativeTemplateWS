import React from 'react';
import { View } from 'react-native';

import { SearchBar } from '@rneui/themed';

const style = {
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    width: 370,
    height: 200,
    marginTop: 30
  }
};

export default function AppSearchBar() {
  const updateSearch = () => {};
  return (
    <View style={style.container}>
      <SearchBar
        placeholder="Search tracks.."
        onChangeText={updateSearch()}
        value=""
      />
    </View>
  );
}
