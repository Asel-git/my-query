import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Users {
	id: number;
	email: string;
	// Другие свойства пользователя
}
interface CreateUserRequest {
	userName: string;
	email: string;
	password: string;
}

interface CreateUserResponse {
	id: number;
	userName: string;
	email: string;
	password: string;
	// Другие поля ответа после создания пользователя
}

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_PUBLIC_API_URL}/api/v1`
	}),

	endpoints: (builder) => {
		return {
			getUsers: builder.query<Users[], void>({
				query: () => 'users'
			}),
			createUser: builder.mutation<CreateUserResponse, CreateUserRequest>({
				query: (body) => ({
					url: 'users',
					method: 'POST',
					body
				})
			})
		};
	}
});

export const { useGetUsersQuery, useCreateUserMutation } = usersApi;
