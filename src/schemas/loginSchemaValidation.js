import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Favor informar um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .min(8, 'Password deve ter no mínimo 8 caracteres')
    .required('Password é obrigatório'),
});
