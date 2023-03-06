import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

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

const state = {
  // We are using hardcoded data for now, will update it in coming PR
  tracks: [
    {
      id: 0,
      trackName: 'Track 1'
    },
    {
      id: 1,
      trackName: 'Track 2'
    },
    {
      id: 2,
      trackName: 'Track 3'
    },
    {
      id: 3,
      trackName: 'Track 4'
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
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{ uri: 'favicon' }}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.text}>{trackItem.trackName}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

TrackItem.propTypes = {};

export default TrackItem;
