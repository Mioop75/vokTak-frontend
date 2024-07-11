import { IUser } from '@/types/User.interface';
import axios from '@/utils/axios';

interface IUsersService {
	getUsers(): Promise<IUser[]>;
	getUser(uuid: string): Promise<IUser>;
}

export const USERS = 'users';

class UsersService implements IUsersService {
	async getUsers(): Promise<IUser[]> {
		const { data: users } = await axios.get(USERS);

		return users;
	}

	async getUser(uuid: string): Promise<IUser> {
		const { data: user } = await axios.get(`${USERS}/${uuid}`);
		return user;
	}
}

export default new UsersService();
