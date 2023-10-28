import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { MoodOptionWithTimestamp } from '../../types';

import format from 'date-fns/format';

type MoodListProps = {
  moodList: MoodOptionWithTimestamp[];
};

export const MoodList: React.FC<MoodListProps> = ({ moodList }) => {
  //const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  return (
    <View>
      {moodList.map(item => (
        <Text key={item.timestamp}>
          {item.mood.emoji} -{' '}
          {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});
