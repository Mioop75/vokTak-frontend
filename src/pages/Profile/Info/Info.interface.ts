import { IAvatar, IUserInfo } from '@/types/User.interface';

export interface IInfoComponent {
	avatar: IAvatar;
	email: string;
	firstname: string;
	lastname: string;
	info: IUserInfo;
}
