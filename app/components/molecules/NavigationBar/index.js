import React from 'react';

import { View, Button } from 'react-native';

import AppSearchBar from '@app/components/atoms/SearchBar/SearchBar';

import { TextInput } from 'react-native-gesture-handler';

const styles = {
  container: {
    width: '100%',
    flex: 1,
    alignSelf: 'center'
  }
};

function CustomNavigationBar() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput>Navigation Bar...</TextInput>
        <Button title="Search"></Button>
      </View>
      <AppSearchBar></AppSearchBar>
    </View>
  );
}

CustomNavigationBar.propTypes = {};

export default CustomNavigationBar;
