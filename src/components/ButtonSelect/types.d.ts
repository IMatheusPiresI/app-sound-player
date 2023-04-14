import {
  IOptionSelect,
  ISelectedOption,
} from '@components/BarSelectType/types';

type IProps = {
  title: IOptionSelect;
  option: ISelectedOption;
  selectOption: (option: IOptionSelect) => void;
};

type IViewProps = {
  title: IOptionSelect;
  rAnimatedText: {
    color: '#fff7' | '#fff';
    fontSize: number;
  };
  rAnimatedView: {
    position: 'absolute';
    top: number;
  };
  handleSelectOption: () => void;
};

export { IProps, IViewProps, IOptionSelect };
