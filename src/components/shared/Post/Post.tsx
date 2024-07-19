import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { IPost } from '@/types/Post.interface';
import { formatName } from '@/utils/formatName';
import { timeSince } from '@/utils/timeSince';
import AvatarWithUserInfo from '../AvatarWithUserInfo/AvatarWithUserInfo';
import Actions from './Actions/Actions';
import Comment from './Comment/Comment';
import Comments from './Comments/Comments';
import Images from './Images/Images';
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
	return (
		<Card className="max-w-lg">
			<CardHeader className="flex-row gap-4 items-start justify-between">
				<AvatarWithUserInfo
					avatarSrc={author?.avatar?.photo.image}
					fullName={formatName(author.firstname, author.lastname)}
					extraInfo={timeSince(created_at)}
				/>
				<Actions uuid={uuid} />
			</CardHeader>
			<CardContent>
				<p className="mb-3">{content}</p>
				<Images />
			</CardContent>
			<CardFooter className="justify-between gap-5">
				<div className="flex gap-5">
					<Like likes={likes.length} />
					<Comment comments={comments.length} />
				</div>
				<Share />
			</CardFooter>
			<Comments />
		</Card>
	);
};

export default Post;
