import { Button } from '@/components/ui/button';
import { useUserStore } from '@/store/user.store';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
	const { logout } = useUserStore();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/sign-in');
	};

	return (
		<Button variant="outline" onClick={handleLogout}>
			Logout
		</Button>
	);
};

export default LogoutButton;
