import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Title from './components/Title/Title';

import globalStyle from './assets/styles/globalStyle';

const App = () => {
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title="Hello World" />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumberText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
