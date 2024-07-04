import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useSessionContext } from '@contexts/AuthContext';
import { validationSchema } from '@schemas/loginSchemaValidation';

import { PageContainer, LoginContainer, ErrorMessage } from './styles';

const Login = () => {

  const { handleCreateSession } = useSessionContext();

  const { handleSubmit, formState: { errors }, register } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleCreate = async (data) => {
    const response = await handleCreateSession(data);

    if (response) {
      window.location.href = '/dashboard';
    }
  }

  return (
    <PageContainer>
      <LoginContainer>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleCreate)}>

          <label htmlFor="email">E-mail:</label>
          <input {...register('email')} type="text" id="email" name="email" placeholder='Seu melhor e-mail' className={errors?.email ? 'error-input' : ''} />
          {errors?.email && <ErrorMessage>{errors?.email.message}</ErrorMessage>}

          <label htmlFor="password">Password:</label>
          <input {...register('password')} type="password" id="password" name="password" placeholder='Sua senha' className={errors?.password ? 'error-input' : ''} />
          {errors?.password && <ErrorMessage>{errors?.password.message}</ErrorMessage>}

          <button type="submit">Login</button>
        </form>
      </LoginContainer>
    </PageContainer>
  );
}

export default Login;
