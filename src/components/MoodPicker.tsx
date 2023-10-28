import React, {useCallback} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {moodOptions} from '../constants/moodOptions';
import {MoodOption} from '../types/index';
// hooks
import {useAppDispatch, useAppSelector} from '../hooks/redux/hooks';
// Slice
import {setSelectedMood} from '../features/moodSlice';

export const MoodPicker = () => {
  const dispatch = useAppDispatch();
  const selectedMood = useAppSelector(state => state.mood.selectedMood);

  const handlePress = useCallback(
    (el: MoodOption) => {
      if (!el) {
        console.warn('Element is not defined.');
        return;
      }
      dispatch(setSelectedMood(el));
    },
    [dispatch],
  );

  return (
    <View style={styles.container}>
      {moodOptions.map(el => (
        <View
          style={[
            styles.emojiContainer,
            el === selectedMood && styles.selectedMood,
          ]}
          key={el.emoji}>
          <Pressable onPress={() => handlePress(el)}>
            <Text>{el.emoji}</Text>
          </Pressable>
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
  emojiContainer: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  selectedMood: {
    backgroundColor: 'yellow',
  },
});
