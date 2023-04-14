import React from 'react';

import { ButtonSelect } from '@components/ButtonSelect';

import { HStack, VStack } from 'native-base';

import { IViewProps } from './types';

const BarSelectTypeView: React.FC<IViewProps> = ({
  option,
  handleSelectOption,
}) => (
  <VStack>
    <HStack
      py="4"
      h="20"
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <ButtonSelect
        title="Beauty"
        option={option}
        selectOption={handleSelectOption}
      />
      <ButtonSelect
        title="Music"
        option={option}
        selectOption={handleSelectOption}
      />
      <ButtonSelect
        title="Design"
        option={option}
        selectOption={handleSelectOption}
      />
    </HStack>
  </VStack>
);
export default BarSelectTypeView;
