type IProps = {};

type IViewProps = {
  option: ISelectedOption;
  handleSelectOption: (option: IOptionSelect) => void;
};

type ISelectedOption = {
  selectedOption: IOptionSelect;
  initial: boolean;
};

type IOptionSelect = 'Beauty' | 'Music' | 'Design';

export { IProps, IViewProps, IOptionSelect, ISelectedOption };
