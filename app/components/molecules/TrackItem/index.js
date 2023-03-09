import React from 'react';
import { PropTypes } from 'prop-types';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 3
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  text: {
    color: '#000000'
  }
});

const TrackItem = ({ data }) => (
  <TouchableOpacity
    style={styles.item}
    // onPress={() => alertItemName(trackItem)}
  >
    <View style={{ flexDirection: 'row' }}>
      <Image source={{ uri: 'favicon' }} style={{ width: 40, height: 40 }} />
      <Text style={styles.text}>{data?.trackName}</Text>
    </View>
  </TouchableOpacity>
);

TrackItem.propTypes = {
  data: PropTypes.object
};

export default TrackItem;
