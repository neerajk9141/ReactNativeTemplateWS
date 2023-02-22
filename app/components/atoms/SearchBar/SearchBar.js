import React, { Component } from 'react';

import { SearchBar } from '@rneui/themed';

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
        style={{
          width: '80%',
          height: '30%',
          backgroundColor: 'powderblue'
        }}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
