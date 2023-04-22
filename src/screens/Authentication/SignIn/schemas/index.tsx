import * as Yup from 'yup';

export const signInSchema = Yup.object({
  email: Yup.string().required('Required field'),
  password: Yup.string().required('Required field'),
});
