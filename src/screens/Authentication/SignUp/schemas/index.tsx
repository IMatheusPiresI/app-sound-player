import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  email: Yup.string().required('Required field'),
  password: Yup.string().required('Required field'),
  confirmPassword: Yup.string().required('Required field'),
});
