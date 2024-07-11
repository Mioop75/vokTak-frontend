import { useUserStore } from '@/store/user.store';
import { BiChat, BiHome, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const { user } = useUserStore();

	return (
		<aside className="flex-auto p-4 shadow-sm rounded-lg bg-card text-card-foreground border min-h-16 mb-6 min-w-40 max-w-40 h-screen">
			<div className="flex flex-col gap-1">
				<Link
					to={`/profile/${user.uuid}`}
					className="flex items-center gap-2 p-2 rounded-md transition-colors hover:bg-slate-100"
				>
					<BiUser className="w-6 h-6" />
					<div className="text-sm">My Profile</div>
				</Link>
				<Link
					to={'/home'}
					className="flex items-center gap-2 p-2 rounded-md transition-colors hover:bg-slate-100"
				>
					<BiHome className="w-6 h-6" />
					<div className="text-sm">News</div>
				</Link>
				<Link
					to={'/chat'}
					className="flex items-center gap-2 p-2 rounded-md transition-colors hover:bg-slate-100"
				>
					<BiChat className="w-6 h-6" />
					<div className="text-sm">Messages</div>
				</Link>
			</div>
		</aside>
	);
};

export default Sidebar;
