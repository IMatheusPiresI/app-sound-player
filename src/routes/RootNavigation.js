import { createNavigationContainerRef } from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

const navigate = (name, params) => {
  navigationRef.current.navigate(name, params);
};

export { navigationRef, navigate };
