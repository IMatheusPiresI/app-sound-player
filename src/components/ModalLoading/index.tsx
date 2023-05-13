import React, { createElement } from 'react';

import { IProps, IViewProps } from './types';
import View from './view';

export const ModalLoading: React.FC<IProps> = ({ message }) => {
  const viewProps: IViewProps = { message };

  return createElement(View, viewProps);
};
