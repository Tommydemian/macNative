import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
// Components
import {MoodPicker} from '../components/MoodPicker';

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <MoodPicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
