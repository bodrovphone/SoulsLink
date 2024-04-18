import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/fontHelper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
  },
  profielImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profielImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    padding: horizontalScale(4),
    borderRadius: horizontalScale(110),
  },
  profileName: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
  },
  statsAmount: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
    color: '#022150',
    textAlign: 'center',
  },
  statsType: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    color: '#79869F',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(30),
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
  },
  statsBorder: {
    borderWidth: 1,
    borderColor: '#E9EFF1',
    opacity: 0.5,
  },
});

export default style;
