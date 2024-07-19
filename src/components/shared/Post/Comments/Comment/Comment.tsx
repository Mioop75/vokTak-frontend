import AvatarWithUserInfo from '@/components/shared/AvatarWithUserInfo/AvatarWithUserInfo';
import Actions from '../../Actions/Actions';
import Images from '../../Images/Images';

const Comment = () => {
	return (
		<div className="border-b-2 pb-3">
			<div className="flex justify-between items-start">
				<AvatarWithUserInfo
					avatarSrc="https://images.unsplash.com/photo-1720849644323-499c62694fbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					fullName="Alex Joh"
					extraInfo="7s ago"
					className="mb-4"
				/>
				<Actions uuid="53" />
			</div>
			<Images />
			<p>Content</p>
		</div>
	);
};

export default Comment;
