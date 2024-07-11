import { useUserStore } from '@/store/user.store';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
	const { getMe, user } = useUserStore();

	useEffect(() => {
		if (!user) getMe();
	}, []);

	if (!user) {
		return <p>loading...</p>;
	}

	return (
		<div>
			<Header />
			<div className="container flex gap-5">
				<Sidebar />
				<main className="flex-auto">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Layout;
