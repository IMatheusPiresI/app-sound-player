import React, { createElement } from 'react';

import View from './view';
import { IProps, IViewProps } from './types';

export const ButtonSelect: React.FC<IProps> = ({
  title,
  selectedOption,
  selectOption,
}) => {
  const handleSelectOption = () => {
    console.log(selectedOption);
    selectOption(title);
  };
  const viewProps: IViewProps = {
    title,
    handleSelectOption,
  };

  return createElement(View, viewProps);
};
