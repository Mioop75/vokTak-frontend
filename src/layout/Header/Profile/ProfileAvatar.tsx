import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUserStore } from '@/store/user.store';
import { MdKeyboardArrowDown } from 'react-icons/md';

const ProfileAvatar = () => {
	const { user } = useUserStore();

	return (
		<div className="flex items-center">
			<Avatar>
				<AvatarImage src={user?.avatar?.photo.image} alt={user?.nickname} />
				<AvatarFallback />
			</Avatar>
			<MdKeyboardArrowDown />
		</div>
	);
};

export default ProfileAvatar;
