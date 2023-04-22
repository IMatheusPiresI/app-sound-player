import { FormikContextType } from 'formik';

type IProps = {};

type IViewProps = {
  formik: FormikContextType<ISignUpForm>;
  loading: boolean;
  handleGoToSignIn: () => void;
};

type ISignUpForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

export { IProps, IViewProps, ISignUpForm };
