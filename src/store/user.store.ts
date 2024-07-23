import { loginFormSchema } from '@/schemas/login.schema';
import { registrationSchemaForm } from '@/schemas/registration.schema';
import authService from '@/services/auth/auth.service';
import { IUser } from '@/types/User.interface';
import { z } from 'zod';
import { create } from 'zustand';

interface UserState {
	user: IUser | null;
	error: string | null;
	signIn: (data: z.infer<typeof loginFormSchema>) => void;
	signUp: (data: z.infer<typeof registrationSchemaForm>) => void;
	logout: () => void;
	getMe: () => void;
}

export const useUserStore = create<UserState>(set => ({
	error: null,
	user: null,
	signIn: async data => {
		try {
			const response = await authService.signIn(data);
			localStorage.setItem('user_uuid', response?.uuid as string);
			set({ user: response });
		} catch (error) {
			set({ user: null, error } as { error: string });
		}
	},
	signUp: async data => {
		try {
			const response = await authService.signUp(data);
			localStorage.setItem('user_uuid', response?.uuid as string);
			set({ user: response });
		} catch (error) {
			set({ error: error } as { error: string });
		}
	},
	logout: async () => {
		await authService.logout();
		localStorage.removeItem('user_uuid');
		set({ user: null });
	},
	getMe: async () => {
		try {
			const response = await authService.getMe();
			localStorage.setItem('user_uuid', response?.uuid as string);
			set({ user: response });
		} catch (error) {
			set({ error: error } as { error: string });
		}
	},
}));
