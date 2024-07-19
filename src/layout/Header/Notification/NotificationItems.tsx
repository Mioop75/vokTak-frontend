import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import NotificationItem from './NotificationItem';

const NotificationItems = () => {
	return (
		<>
			<DropdownMenuItem className="block">
				<NotificationItem />
			</DropdownMenuItem>
		</>
	);
};

export default NotificationItems;
