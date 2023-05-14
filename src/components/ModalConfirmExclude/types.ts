type IProps = {
  isVisible: boolean;
  title: string;
  message: string;
  cancelButtonCallback: () => void;
  confirmButtonCallback: () => void;
};

type IViewProps = {
  isVisible: boolean;
  title: string;
  message: string;
  cancelButtonCallback: () => void;
  confirmButtonCallback: () => void;
};

export type { IProps, IViewProps };
