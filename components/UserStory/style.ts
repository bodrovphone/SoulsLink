import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/fontHelper';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  firstName: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 14,
    color: '#022150',
    marginTop: 8,
    textAlign: 'center',
  },
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    borderRadius: 50,
    padding: 4,
  },
  image: {
    width: 65,
    height: 65,
  },
});

export default style;
