import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/fontHelper';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    paddingBottom: 20,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  userName: {
    color: '#000000',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 16,
  },
  location: {
    color: '#898DAE',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
  },
  likesContainer: {
    flexDirection: 'row',
  },
  commentsContainer: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  bookmarkContainer: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  userPostStats: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  postText: {
    marginLeft: 3,
    color: '#79869F',
  },
});

export default style;
