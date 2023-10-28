import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MoodOption} from '../types/index';

type MoodState = {
  selectedMood: null | MoodOption;
};

const initialState: MoodState = {
  selectedMood: null,
};

export const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    setSelectedMood: (state, action: PayloadAction<MoodOption>) => {
      state.selectedMood = action.payload;
    },
  },
});

export const {setSelectedMood} = moodSlice.actions;

export default moodSlice.reducer;
