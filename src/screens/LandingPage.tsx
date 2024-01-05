import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const LandingPage = () => {
  return (
    <View style={tw`flex-1 bg-[#dfdfdf] items-center justify-center`}>
      <Text style={tw`text-[#51245f] font-bold text-[20]`}>Test</Text>
    </View>
  );
};

export default LandingPage;
