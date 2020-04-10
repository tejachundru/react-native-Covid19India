import {Dimensions, Platform, StatusBar} from 'react-native';
import {Colors} from '.';
// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    safeContainer: {
      flex: 1,
      marginTop: getStatusBarHeight(true),
    },
  },
  //APP Horizontal Padding
  AHP: {
    paddingHorizontal: 20,
  },
};

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
}

export function getStatusBarHeight(safe) {
  return Platform.select({
    ios: isIphoneX() ? 44 : 24,
    android: StatusBar.currentHeight,
    default: 0,
  });
}

export function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}

export default ApplicationStyles;
