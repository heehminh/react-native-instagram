import {View, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import {RNCamera} from 'react-native-camera';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

const Camera = () => {
  const cameraRef = useRef<RNCamera>(null);

  const takePhoto = async () => {
    console.log('cameraRef', cameraRef);
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      if (data) {
        const result = await CameraRoll.saveToCameraRoll(data.uri);
        console.log('result', result);
      }
    }
  };

  return (
    <View>
      <RNCamera
        ref={cameraRef}
        style={{width: 200, height: 200}}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={takePhoto}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              borderWidth: 10,
              borderColor: 'lightGrey',
              backgroundColor: 'pink',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Camera;
