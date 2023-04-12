import { Dimensions, Platform } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

const isIOS = Platform.OS === 'ios';

export default {
  screenWidth: width,
  screenHeight: height,
  bottomSpace: isIOS ? getBottomSpace() : 0,
  statusBarHeight: getStatusBarHeight(),
};
