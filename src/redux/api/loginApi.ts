import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface LoginRequest {
	email: string;
	password: string;
}

interface LoginResponse {
	token: string;
	// Другие данные, которые могут быть в ответе
}

export const loginApi = createApi({
	reducerPath: 'loginApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_PUBLIC_API_URL}/api/v1`
	}),
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginRequest>({
			query: (body) => ({
				url: 'login',
				method: 'POST',
				body
			})
		})
	})
});

export const { useLoginMutation } = loginApi;
