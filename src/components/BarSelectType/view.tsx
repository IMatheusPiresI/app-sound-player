import React from 'react';

import { ButtonSelect } from '@components/ButtonSelect';

import { Box, HStack, VStack } from 'native-base';

import { IViewProps } from './types';

const BarSelectTypeView: React.FC<IViewProps> = ({
  selectedOption,
  handleSelectOption,
}) => (
  <VStack pt="statusBarHeight">
    <HStack
      px="12"
      py="4"
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <ButtonSelect
        title="Beauty"
        selectedOption={selectedOption}
        selectOption={handleSelectOption}
      />
      <Box>
        <ButtonSelect
          title="Music"
          selectedOption={selectedOption}
          selectOption={handleSelectOption}
        />
      </Box>
      <Box>
        <ButtonSelect
          title="Design"
          selectedOption={selectedOption}
          selectOption={handleSelectOption}
        />
      </Box>
    </HStack>
  </VStack>
);
export default BarSelectTypeView;
