import { Button } from '@/components/ui/button';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { BiPencil } from 'react-icons/bi';
import { IUpdateButtonComponent } from './UpdateButton.interface';

const UpdateButton = ({ uuid }: IUpdateButtonComponent) => {
	return (
		<DropdownMenuItem className="p-0">
			<Button variant="ghost" size="sm">
				<BiPencil className="w-5 h-5 mr-2" />
				Update
			</Button>
		</DropdownMenuItem>
	);
};

export default UpdateButton;
