import Posts from '@/components/containers/Posts/Posts';
import Users from '@/components/containers/Users/Users';
import CreatePost from '@/components/shared/CreatePost/CreatePost';
import postsService from '@/services/posts.service';
import { useQuery } from 'react-query';

export default function HomePage() {
	const { data, isLoading } = useQuery('posts', postsService.getAllPosts, {
		keepPreviousData: true,
	});

	if (isLoading) return <p>Loading...</p>;

	return (
		<div className="flex gap-5 justify-between">
			<div>
				<CreatePost />
				<Posts posts={data?.posts ? data.posts : []} />
			</div>
			<Users />
		</div>
	);
}
