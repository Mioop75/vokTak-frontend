import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUserStore } from '@/store/user.store';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
	const { user, logout } = useUserStore();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/sign-in');
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="outline-none p-2 transition-colors rounded-sm hover:bg-slate-100">
				<div className="flex items-center">
					<Avatar>
						<AvatarImage src={user?.avatar?.photo.image} alt={user?.nickname} />
						<AvatarFallback>{user?.nickname}</AvatarFallback>
					</Avatar>
					<MdKeyboardArrowDown />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Link to={`profile/${user?.uuid}`}>Profile</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>Settings</DropdownMenuItem>
				<DropdownMenuItem>Theme</DropdownMenuItem>
				<DropdownMenuItem>
					<Button variant="outline" onClick={handleLogout}>
						Logout
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Profile;
