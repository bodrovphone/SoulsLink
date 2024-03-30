import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';

import style from './style';

type Props = {
  profileImage: ImageSourcePropType;
};

const UserProfileImage = (props: Props) => {
  return (
    <View style={style.userImageContainer}>
      <Image source={props.profileImage} style={style.image} />
    </View>
  );
};

export default UserProfileImage;
