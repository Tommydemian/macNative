import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moodOptions} from '../constants/moodOptions';

export const MoodPicker = () => {
  return (
    <View style={styles.container}>
      {moodOptions.map(el => (
        <View style={styles.emojiContainer} key={el.emoji}>
          <Text>{el.emoji}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  emojiContainer: {},
});
