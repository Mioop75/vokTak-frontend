import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { registrationSchemaForm } from '@/schemas/registration.schema';
import { useUserStore } from '@/store/user.store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { Input } from '../ui/input';

const AuthRegistrationForm = () => {
	const form = useForm<z.infer<typeof registrationSchemaForm>>({
		defaultValues: {
			email: '',
			nickname: '',
			firstname: '',
			lastname: '',
			password: '',
			confirmedPassword: '',
		},
		resolver: zodResolver(registrationSchemaForm),
	});
	const [isNotEqualPassword, setIsNotEqualPassword] = useState<boolean>(false);
	const { signUp, error } = useUserStore();

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof registrationSchemaForm>) {
		const { password, confirmedPassword } = form.getValues();

		if (password !== confirmedPassword) {
			setIsNotEqualPassword(true);
			return null;
		}

		setIsNotEqualPassword(false);
		signUp(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type="email" placeholder="Email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="nickname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nickname</FormLabel>
							<FormControl>
								<Input placeholder="nickname" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="firstname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Firstname</FormLabel>
							<FormControl>
								<Input placeholder="Firstname" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Lastname</FormLabel>
							<FormControl>
								<Input placeholder="Lastname" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type="password" placeholder="Password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmedPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Confirm password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{isNotEqualPassword && (
					<p className="text-base font-medium text-destructive">
						Passwords don't match
					</p>
				)}
				{error && (
					<p className="text-base font-medium text-destructive">{error}</p>
				)}
				<Button type="submit" className="w-full max-w-28 mr-3">
					Sign up
				</Button>
				<Link
					to="/sign-in"
					className="text-blue-500 transition-colors hover:text-blue-700"
				>
					If you have an account, sign in
				</Link>
			</form>
		</Form>
	);
};

export default AuthRegistrationForm;
