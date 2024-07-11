import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import postsService from '@/services/posts.service';
import { IPost } from '@/types/Post.interface';
import { formatName } from '@/utils/formatName';
import { timeSince } from '@/utils/timeSince';
import { BsThreeDots } from 'react-icons/bs';
import { useMutation, useQueryClient } from 'react-query';
import AvatarWithUserInfo from '../AvatarWithUserInfo/AvatarWithUserInfo';
import Comment from './Comment/Comment';
import Like from './Like/Like';
import Share from './Share/Share';

const Post = ({
	uuid,
	content,
	likes,
	comments,
	created_at,
	author,
}: IPost) => {
	const queryClient = useQueryClient();

	const removePostMutation = useMutation({
		mutationFn: () => postsService.deletePost(uuid),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['posts'] });
		},
	});

	return (
		<Card className="max-w-lg">
			<CardHeader className="flex-row gap-4 items-start justify-between">
				<AvatarWithUserInfo
					avatarSrc={author?.avatar?.photo.image}
					fullName={formatName(author.firstname, author.lastname)}
					extraInfo={timeSince(created_at)}
				/>
				<DropdownMenu>
					<DropdownMenuTrigger className="outline-none bg-slate-200 p-2 transition-colors rounded-sm w-8 h-8 hover:bg-slate-300">
						<BsThreeDots />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Share</DropdownMenuItem>
						<DropdownMenuItem>
							<Button>Update</Button>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Button onClick={() => removePostMutation.mutate()}>
								Delete
							</Button>
						</DropdownMenuItem>
						<DropdownMenuItem>Hide</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</CardHeader>
			<CardContent>
				<p>{content}</p>
			</CardContent>
			<CardFooter className="justify-between gap-5">
				<div className="flex gap-5">
					<Like likes={likes.length} />
					<Comment comments={comments.length} />
				</div>
				<Share />
			</CardFooter>
		</Card>
	);
};

export default Post;
