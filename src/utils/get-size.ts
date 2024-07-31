import { Dimensions } from 'react-native';

const getSize = {
  deviceWidth: Dimensions.get('screen').width,
  deviceHeight: Dimensions.get('screen').height,
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
};

export { getSize };
