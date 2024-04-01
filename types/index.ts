import {ImageSourcePropType} from 'react-native';

export type Story = {
  firstName: string;
  id: number;
  profileImage: ImageSourcePropType;
};

export type Post = {
  firstName: string;
  lastName: string;
  location: string;
  likes: number;
  comments: number;
  bookmarks: number;
  id: number;
  image: ImageSourcePropType;
  profileImage: ImageSourcePropType;
};
