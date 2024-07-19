import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useTheme } from '@/hooks/useTheme';
import { useUserStore } from '@/store/user.store';
import { BiUser } from 'react-icons/bi';
import { IoSettings } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import ChangeTheme from './ChangeTheme';
import LogoutButton from './LogoutButton';

const ProfileItems = () => {
	const { user } = useUserStore();
	const { theme } = useTheme();

	return (
		<>
			<DropdownMenuItem>
				<Link to={`profile/${user?.uuid}`} className="flex items-center gap-1">
					<BiUser className="w-6 h-6" />
					Profile
				</Link>
			</DropdownMenuItem>
			<DropdownMenuItem>
				<Link to="/settings" className="flex items-center gap-1">
					<IoSettings className="w-6 h-6" />
					Settings
				</Link>
			</DropdownMenuItem>
			<DropdownMenuItem>
				<ChangeTheme theme={theme} />
			</DropdownMenuItem>
			<DropdownMenuItem>
				<LogoutButton />
			</DropdownMenuItem>
		</>
	);
};

export default ProfileItems;
