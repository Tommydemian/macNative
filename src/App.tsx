import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabsNavigator} from './navigation/BottomTabs.navigator';
// store
import {store} from './store/index';
import {Provider} from 'react-redux';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
});
