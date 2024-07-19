import AvatarWithUserInfo from '@/components/shared/AvatarWithUserInfo/AvatarWithUserInfo';
import usersService from '@/services/users.service';
import { formatName } from '@/utils/formatName';
import clsx from 'clsx';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { IUsersComponent } from './Users.interface';

const Users = ({ className }: IUsersComponent) => {
	const { data: users } = useQuery('users', usersService.getUsers);

	return (
		<div
			className={clsx(
				'w-full max-w-72 p-5 shadow-sm rounded-lg bg-card text-card-foreground border',
				className
			)}
		>
			<h4 className="text-lg font-bold mb-5">Users</h4>
			<div className="flex flex-col gap-3">
				{users &&
					users.map(user => (
						<Link
							key={user.uuid}
							to={`/profile/${user.uuid}`}
							className="block border-b-2 p-4 transition-colors hover:bg-slate-50"
						>
							<AvatarWithUserInfo
								avatarSrc={user?.avatar?.photo.image}
								fullName={formatName(user.firstname, user.lastname)}
								sizeTitle="sm"
							/>
						</Link>
					))}
			</div>
		</div>
	);
};

export default Users;
