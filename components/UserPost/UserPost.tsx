import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import style from './style';

type Props = {
  firstName: string;
  lastName: string;
  location?: string;
  image: ImageSourcePropType;
  profileImage: ImageSourcePropType;
  bookmarks: number;
  comments: number;
  likes: number;
};

export const UserPost = (props: Props) => {
  console.log(props);

  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={48}
          />
          <View style={style.userTextContainer}>
            <Text style={style.userName}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color="#898DAE" size={24} />
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View
        style={{
          marginLeft: 10,
          flexDirection: 'row',
        }}>
        <View style={style.likesContainer}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text
            style={{
              marginLeft: 3,
              color: '#79869F',
            }}>
            {props.likes}
          </Text>
        </View>

        <View style={[style.likesContainer, {marginLeft: 27}]}>
          <FontAwesomeIcon icon={faMessage} color="#79869F" />
          <Text
            style={{
              marginLeft: 3,
              color: '#79869F',
            }}>
            {props.comments}
          </Text>
        </View>

        <View style={[style.likesContainer, {marginLeft: 27}]}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          <Text
            style={{
              marginLeft: 3,
              color: '#79869F',
            }}>
            {props.bookmarks}
          </Text>
        </View>
      </View>
    </View>
  );
};
