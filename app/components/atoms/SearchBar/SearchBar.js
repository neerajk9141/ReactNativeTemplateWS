import React, { Component } from 'react';

import { create } from 'apisauce';

import { SearchBar } from '@rneui/themed';


const style = {
  container: {
    flex: 1,
    backgroundColor: 'powderblue'
  }
};

const api = create({
  baseURL: 'https://itunes.apple.com/',
})

const getItunesItem = () => api.get('search?term=perfect')

export default class AppSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  updateSearch = search => {
    this.setState({ search });
    console.log(getItunesItem())
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
