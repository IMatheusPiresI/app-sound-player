import { Dimensions, Platform } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

const isIOS = Platform.OS === 'ios';

export default {
  screenWidth: width,
  screenWidth90: width * 0.9,
  screenWidth80: width * 0.8,
  screenWidth70: width * 0.7,
  screenWidth60: width * 0.6,
  screenWidth50: width * 0.5,
  screenWidth40: width * 0.4,
  screenHeight: height,
  bottomSpace: isIOS ? getBottomSpace() : 0,
  statusBarHeight: getStatusBarHeight(),
  26: 104,
  28: 112,
  30: 120,
};
