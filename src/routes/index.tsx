import React from 'react';

import { useUserStore } from '@store/user';

import { StackAuthentication, StackRoutes } from './Stack/stack.routes';

export const AppRoutes = () => {
  const { user } = useUserStore((state) => state);

  return user.email ? <StackRoutes /> : <StackAuthentication />;
};
