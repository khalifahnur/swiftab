import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AuthData, AuthResponse, ErrorResponse } from '@/types';
import { loginUser, signUpUser } from '@/api/api';

export function useLogin(): UseMutationResult<AuthResponse, ErrorResponse, AuthData> {
  return useMutation<AuthResponse, ErrorResponse, AuthData>({mutationFn:loginUser, 
    onSuccess: (data:AuthResponse) => {
      console.log('Login successful:', data);
    },
    onError: (error:ErrorResponse) => {
      console.error('Login error:', error.message);
    },
  });
}

export function useSignUp(): UseMutationResult<AuthResponse, ErrorResponse, AuthData> {
  return useMutation<AuthResponse, ErrorResponse, AuthData>({mutationFn:signUpUser,
    onSuccess: () => {
      console.log('Sign-up successful:');
    },
    onError: (error:ErrorResponse) => {
      console.error('Sign-up error:', error.message);
    },
  });
}
