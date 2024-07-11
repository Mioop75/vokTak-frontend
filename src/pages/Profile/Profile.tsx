import Posts from '@/components/containers/Posts/Posts';
import CreatePost from '@/components/shared/CreatePost/CreatePost';
import usersService from '@/services/users.service';
import { IPost } from '@/types/Post.interface';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Friends from './Friends/Friends';
import Info from './Info/Info';
import Photos from './Photos/Photos';

export default function ProfilePage() {
	const { uuid } = useParams();

	const { isLoading, data: user } = useQuery('users', () =>
		usersService.getUser(uuid as string)
	);

	if (isLoading) return <p>Loading...</p>;

	return (
		<div className="grid grid-cols-4 gap-4">
			<Info
				avatar={user?.avatar}
				email={user?.email}
				firstname={user?.firstname}
				lastname={user?.lastname}
				info={user?.info}
			/>
			<div>
				<Friends />
				<Photos />
			</div>
			<div className="col-start-2 col-end-7">
				<CreatePost />
				<Posts posts={user?.posts as IPost[]} />
			</div>
		</div>
	);
}
