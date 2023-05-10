import { IMusic } from '@components/CarouselMusic/types';

type IProps = {
  selectedMusics: IMusic[];
  toggleSelectMusic: (music: IMusic) => void;
};

type IViewProps = {
  allMusics: IMusic[];
  selectedMusics: IMusic[];
  filteredMusics: IMusic[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  toggleSelectMusic: (music: IMusic) => void;
};

export { IProps, IViewProps };
