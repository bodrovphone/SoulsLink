import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/fontHelper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(14),
    backgroundColor: '#F9FAFB',
    borderRadius: horizontalScale(10),
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: horizontalScale(10),
    position: 'absolute',
    right: 9,
    top: 11,
  },

  messageNumberText: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(6),
    fontFamily: getFontFamily('Inter', '600'),
  },

  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },

  userPostContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(18),
  },
});

export default style;
