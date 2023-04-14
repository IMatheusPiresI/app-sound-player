import React from 'react';

import { ButtonSelect } from '@components/ButtonSelect';

import { HStack, VStack } from 'native-base';

import { IViewProps } from './types';

const BarSelectTypeView: React.FC<IViewProps> = ({
  selectedOption,
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
        selectedOption={selectedOption}
        selectOption={handleSelectOption}
      />
      <ButtonSelect
        title="Music"
        selectedOption={selectedOption}
        selectOption={handleSelectOption}
      />
      <ButtonSelect
        title="Design"
        selectedOption={selectedOption}
        selectOption={handleSelectOption}
      />
    </HStack>
  </VStack>
);
export default BarSelectTypeView;
