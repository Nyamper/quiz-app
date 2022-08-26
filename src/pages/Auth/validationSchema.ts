import * as yup from 'yup';
export const schema = yup
  .object()
  .shape({
    username: yup.string().min(3).required('Name is required'),
    password: yup.string().min(3).required('Password is required'),
  })
  .required();
