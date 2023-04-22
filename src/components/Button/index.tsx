import React, { createElement } from 'react';

import { IProps } from './types';
import View from './view';

export const Button: React.FC<IProps> = ({
  title,
  isLoading,
  disabled,
  ...rest
}) => {
  const viewProps = { title, isLoading, disabled, ...rest };

  return createElement(View, viewProps);
};
