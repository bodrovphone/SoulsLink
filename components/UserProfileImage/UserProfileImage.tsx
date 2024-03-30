import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';

import style from './style';

type Props = {
  profileImage: ImageSourcePropType;
  imageDimensions: number;
};

const UserProfileImage = (props: Props) => {
  return (
    <View
      style={[style.userImageContainer, {borderRadius: props.imageDimensions}]}>
      <Image
        source={props.profileImage}
        style={{
          width: props.imageDimensions,
          height: props.imageDimensions,
        }}
      />
    </View>
  );
};

export default UserProfileImage;
