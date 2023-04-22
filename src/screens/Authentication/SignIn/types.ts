import { FormikContextType } from 'formik';

type IProps = {};

type IViewProps = {
  formik: FormikContextType<ISignInForm>;
  loading: boolean;
  handleLogin: () => void;
  handleGoToCreateAccount: () => void;
};

type ISignInForm = {
  email: string;
  password: string;
};

export { IProps, IViewProps, ISignInForm };
