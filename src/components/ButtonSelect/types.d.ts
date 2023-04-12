import { IOptionSelect } from '@components/BarSelectType/types';

type IProps = {
  title: IOptionSelect;
  selectedOption: IOptionSelect;
  selectOption: (option: IOptionSelect) => void;
};

type IViewProps = {
  title: IOptionSelect;
  handleSelectOption: () => void;
};

export { IProps, IViewProps, IOptionSelect };
