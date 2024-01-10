import {View, ScrollView, Image} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

type StoryInfoTypes = {
  id: number;
  name: string;
  image: any;
};

// eslint-disable-next-line no-sparse-arrays
// image 사용: <Image source={require(image)}
const storyInfo: StoryInfoTypes[] = [
  {
    id: 1,
    name: '나의 스토리',
    image: require('../assets/images/userProfile.jpeg'),
  },
  {
    id: 2,
    name: 'john',
    image: require('../assets/images/profile1.jpeg'),
  },
  {
    id: 3,
    name: 'tonny',
    image: require('../assets/images/profile2.jpeg'),
  },
  {
    id: 4,
    name: 'daniel',
    image: require('../assets/images/profile3.jpeg'),
  },
  {
    id: 5,
    name: 'sojeong',
    image: require('../assets/images/profile4.jpeg'),
  },
  {
    id: 6,
    name: 'jaeho',
    image: require('../assets/images/profile5.jpeg'),
  },
];
const Stories = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      <GestureHandlerRootView
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        {storyInfo.map((data, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              onPress={() =>
                navigation.push('Status', {name: data.name, image: data.image})
              }>
              <View
                style={{
                  flexDirection: 'column',
                  paddingHorizontal: 8,
                  position: 'relative',
                }}>
                {data.id === 1 && (
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 5,
                      right: 5,
                      zIndex: 1,
                    }}>
                    <Entypo
                      name="circle-with-plus"
                      style={{
                        fontSize: 20,
                        color: '#405de6',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        overflow: 'hidden',
                      }}
                    />
                  </View>
                )}

                <View
                  style={{
                    width: 68,
                    height: 68,
                    backgroundColor: 'white',
                    borderWidth: 1.8,
                    borderRadius: 100,
                    borderColor: '#c13584',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={data.image}
                    style={{
                      width: '92%',
                      height: '92%',
                      borderRadius: 100,
                      backgroundColor: 'orange',
                    }}
                    resizeMode="cover"
                  />
                </View>
                {/* <Text></Text> */}
              </View>
            </TouchableOpacity>
          );
        })}
      </GestureHandlerRootView>
    </ScrollView>
  );
};

export default Stories;

// const styles = StyleSheet.create({});
