import {View, Text} from 'react-native';
import React from 'react';

const LandingPage = () => {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        backgroundColor: '#dfdfdf',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: '#51245f',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Test
      </Text>
    </View>
  );
};

export default LandingPage;
