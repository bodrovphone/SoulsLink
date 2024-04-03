import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    borderRadius: horizontalScale(50),
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(4),
  },
});

export default style;
