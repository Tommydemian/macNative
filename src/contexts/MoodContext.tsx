import { createContext, useState, useCallback } from 'react';
import { MoodOptionWithTimestamp, MoodOption } from '../types';

type MoodContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectedMood: (selectedMood: MoodOption) => void;
};

const MoodContext = createContext<MoodContextType>({
  moodList: [],
  handleSelectedMood: () => {},
});

export const MoodProvider: React.FC = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback((selectedMood: MoodOption) => {
    setMoodList(current => [
      ...current,
      { mood: selectedMood, timestamp: Date.now() },
    ]);
  }, []);

  return (
    <MoodContext.Provider value={{ moodList, handleSelectMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export default MoodContext;
