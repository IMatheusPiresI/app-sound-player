import React, { createElement } from 'react';

import { IProps, IViewProps } from './types';
import View from './view';

export const ModalConfirmExclude: React.FC<IProps> = ({
  isVisible,
  title,
  message,
  cancelButtonCallback,
  confirmButtonCallback,
}) => {
  const viewProps: IViewProps = {
    isVisible,
    title,
    message,
    cancelButtonCallback,
    confirmButtonCallback,
  };

  return createElement(View, viewProps);
};
