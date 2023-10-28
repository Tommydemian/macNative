import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Components
import { MoodPicker } from '../components/MoodPicker';
import { MoodList } from '../components/UI/MoodList';
import { MoodItemRow } from '../components/UI/MoodItemRow';

import { MoodOption, MoodOptionWithTimestamp } from '../types';

export const Home: React.FC = () => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback((selectedMood: MoodOption) => {
    setMoodList(current => [
      ...current,
      { mood: selectedMood, timestamp: Date.now() },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker handleSelectedMood={handleSelectMood} />
      {moodList.map((mood: MoodOptionWithTimestamp) => (
        <MoodItemRow item={mood} key={mood.timestamp} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
