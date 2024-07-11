import { IoNotificationsOutline } from 'react-icons/io5';

const Notification = () => {
	return (
		<div className="cursor-pointer rounded-md p-2 transition-colors  hover:bg-slate-200 ">
			<IoNotificationsOutline className="stroke-black w-8 h-8" />
		</div>
	);
};

export default Notification;
