import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    padding: 10,
    marginTop: 3,
    backgroundColor: '#464646',
    alignItems: 'center'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  text: {
    color: '#ffffff'
  }
});

const state = {
  tracks: [
    {
      id: 0,
      trackName: 'Perfect0'
    },
    {
      id: 1,
      trackName: 'Perfect1'
    },
    {
      id: 2,
      trackName: 'Perfect2'
    },
    {
      id: 3,
      trackName: 'Perfect3'
    }
  ]
};

// const alertItemName = trackItem => {
//   alert(trackItem.trackName);
// };

const TrackItem = () => (
  <View style={styles.container}>
    <ScrollView>
      {state.tracks.map(trackItem => (
        <TouchableOpacity
          key={trackItem.id}
          style={styles.item}
          //   onPress={() => alertItemName(trackItem)}
        >
          <Text style={styles.text}>{trackItem.trackName}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

TrackItem.propTypes = {};

export default TrackItem;
