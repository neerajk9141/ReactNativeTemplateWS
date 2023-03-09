import React from 'react';
import { View, TextInput } from 'react-native';

const style = {
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    width: 370,
    height: 200,
    marginTop: 30
  },
  input: {
    height: 60,
    margin: 0,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    fontSize: 16
  }
};

export default function AppSearchBar() {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Search here.."
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}
