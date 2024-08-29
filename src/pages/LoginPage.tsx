import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styled from 'styled-components';
import Typography from '@components/Typography';
import Button from '@components/Button';

// Define the validation schema using Zod
const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Login data:', data);
    // Handle login logic here
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography as="h2">Login</Typography>

      <label>
        <Typography as="p">Email</Typography>
        <Input type="email" {...register('email')} />
        {errors.email && (
          <ErrorMessage as="span">{errors.email.message}</ErrorMessage>
        )}
      </label>

      <label>
        <Typography as="p">Password</Typography>
        <Input type="password" {...register('password')} />
        {errors.password && (
          <ErrorMessage as="span">{errors.password.message}</ErrorMessage>
        )}
      </label>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginPage;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.typography.body};
  border: 1px solid ${(props) => props.theme.colors.accent};
  border-radius: 4px;
`;

const ErrorMessage = styled(Typography)`
  color: ${(props) => props.theme.colors.danger};
  font-size: ${(props) => props.theme.typography.small};
`;
