type IProps = {};

type IViewProps = {
  selectedOption: IOptionSelect;
  handleSelectOption: (option: IOptionSelect) => void;
};

type IOptionSelect = 'Beauty' | 'Music' | 'Design';

export { IProps, IViewProps, IOptionSelect };
