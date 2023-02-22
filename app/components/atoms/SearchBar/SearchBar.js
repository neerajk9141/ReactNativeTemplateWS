import React, { Component } from 'react';

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

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        style={style.container}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
