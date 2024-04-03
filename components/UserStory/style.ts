import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/fontHelper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),
  },
  firstName: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(14),
    color: '#022150',
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    borderRadius: horizontalScale(50),
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(4),
  },
  image: {
    width: 65,
    height: 65,
  },
});

export default style;
