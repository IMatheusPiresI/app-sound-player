import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

const navigate = (name, params) => {
  navigationRef.current.navigate(name, params);
};

const navigateReplace = (name, params) => {
  navigationRef.current.dispatch(StackActions.replace(name, params));
};

export { navigationRef, navigate, navigateReplace };
