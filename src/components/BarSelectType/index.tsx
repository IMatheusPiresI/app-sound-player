import React, { createElement, useState } from 'react';

import View from './view';
import { IOptionSelect, IProps, ISelectedOption, IViewProps } from './types';

export const BarSelectType: React.FC<IProps> = () => {
  const [option, setOption] = useState<ISelectedOption>({
    selectedOption: 'Music',
    initial: true,
  });
  const handleSelectOption = (selectedOption: IOptionSelect) => {
    setOption({
      initial: false,
      selectedOption,
    });
  };

  const viewProps: IViewProps = {
    option,
    handleSelectOption,
  };

  return createElement(View, viewProps);
};
