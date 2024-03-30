import React from 'react';
import {Text} from 'react-native';

import style from './style';

type Props = {
  title: string;
};

const Title = (props: Props) => {
  return <Text style={style.title}>{props.title}</Text>;
};

export default Title;
