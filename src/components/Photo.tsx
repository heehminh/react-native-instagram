import {Button, View, Platform} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import React from 'react';

const Photo = () => {
  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android',
      },
      res => {
        console.log(res);
      },
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Choose Photo" onPress={onSelectImage} />
    </View>
  );
};

export default Photo;
