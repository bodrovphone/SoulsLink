import React from 'react';
import {Text} from 'react-native';
import style from './style';

type Props = {
  title: string;
  isFocused: boolean;
};

const ProfileTabTitle = ({title, isFocused}: Props) => {
  return (
    <Text style={[style.title, !isFocused && style.titleNotFocused]}>
      {title}
    </Text>
  );
};

export default ProfileTabTitle;
