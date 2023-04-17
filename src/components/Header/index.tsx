import React, { createElement } from 'react';

import { IProps, IViewProps } from './types';
import View from './view';

export const Header: React.FC<IProps> = ({
  iconLeft,
  iconMid,
  iconRight,
  textMid,
  handleIconLeftPress,
  handleIconRightPress,
}) => {
  const viewProps: IViewProps = {
    iconLeft,
    iconMid,
    iconRight,
    textMid,
    handleIconLeftPress,
    handleIconRightPress,
  };

  return createElement(View, viewProps);
};
