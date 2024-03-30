import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';

import style from './style';

type Props = {
  firstName: string;
  profileImage: ImageSourcePropType;
};

const UserStory = (props: Props) => {
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
        <Image source={props.profileImage} style={style.image} />
      </View>
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

export default UserStory;
