import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/fontHelper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: verticalScale(35),
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    paddingBottom: verticalScale(20),
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
    marginLeft: horizontalScale(10),
  },
  userName: {
    color: '#000000',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(16),
  },
  location: {
    color: '#898DAE',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  likesContainer: {
    flexDirection: 'row',
  },
  commentsContainer: {
    marginLeft: horizontalScale(20),
    flexDirection: 'row',
  },
  bookmarkContainer: {
    marginLeft: horizontalScale(20),
    flexDirection: 'row',
  },
  userPostStats: {
    marginLeft: horizontalScale(10),
    flexDirection: 'row',
  },
  postText: {
    marginLeft: horizontalScale(3),
    color: '#79869F',
  },
});

export default style;
