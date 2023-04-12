import React, { createElement, useState } from 'react';

import View from './view';
import { IOptionSelect, IProps, IViewProps } from './types';

export const BarSelectType: React.FC<IProps> = () => {
  const [selectedOption, setSelectedOption] = useState<IOptionSelect>('Music');

  const handleSelectOption = (option: IOptionSelect) => {
    setSelectedOption(option);
  };

  const viewProps: IViewProps = {
    selectedOption,
    handleSelectOption,
  };

  return createElement(View, viewProps);
};
