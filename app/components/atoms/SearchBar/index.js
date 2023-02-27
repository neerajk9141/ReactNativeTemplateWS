import React, { Component } from 'react';
import { View } from 'react-native';

import { SearchBar } from '@rneui/themed';

const style = {
  container: {
    flex: 1,
    backgroundColor: 'powderblue'
  }
};

export default class AppSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  updateSearch = () => {
    // this.setState({ search });
    // console.log(getItunesItem());
  };

  render() {
    const { search } = this.state;

    return (
      <View style={style.container}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
      </View>
    );
  }
}
