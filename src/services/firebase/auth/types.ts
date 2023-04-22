type IPayloadEmailPassword = {
  email: string;
  password: string;
};

type IObservableCheck = {
  initializing: boolean;
  setInitializing: React.Dispatch<React.SetStateAction<boolean>>;
};

type ICallBack = {
  onSuccess: () => void;
  onError: () => void;
};

export { ICallBack, IPayloadEmailPassword, IObservableCheck };
