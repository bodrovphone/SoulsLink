/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {getFontFamily} from './assets/fonts/fontHelper';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 30, fontFamily: getFontFamily('Inter', '300')}}>
        My App
      </Text>
    </SafeAreaView>
  );
};

export default App;
