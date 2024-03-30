import React from 'react';
import {ImageSourcePropType, Text, View} from 'react-native';

import UserProfileImage from '../UserProfileImage/UserProfileImage';
import style from './style';

type Props = {
  firstName: string;
  profileImage: ImageSourcePropType;
};

const UserStory = (props: Props) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage
        profileImage={props.profileImage}
        imageDimensions={65}
      />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

export default UserStory;
