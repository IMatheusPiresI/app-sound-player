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
  screenHeight80: height * 0.8,
  screenHeight70: height * 0.7,
  screenHeight60: height * 0.6,
  screenHeight50: height * 0.5,
  screenHeight45: height * 0.45,
  screenHeight40: height * 0.4,
  screenHeight38: height * 0.38,
  screenHeight35: height * 0.35,
  screenHeight30: height * 0.3,
  screenHeight25: height * 0.25,
  bottomSpace: isIOS ? getBottomSpace() : 0,
  statusBarHeight: getStatusBarHeight(),
  14: 56,
  26: 104,
  28: 112,
  30: 120,
};
