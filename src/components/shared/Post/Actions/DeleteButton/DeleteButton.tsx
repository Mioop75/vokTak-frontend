import { Button } from '@/components/ui/button';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import postsService from '@/services/posts.service';
import { MdDelete } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import { IDeleteButtonComponent } from './DeleteButton.interface';

const DeleteButton = ({ uuid }: IDeleteButtonComponent) => {
	const queryClient = useQueryClient();

	const removePostMutation = useMutation({
		mutationFn: () => postsService.deletePost(uuid),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['posts'] });
		},
	});

	return (
		<DropdownMenuItem className="p-0">
			<Button
				variant="ghost"
				size="sm"
				onClick={() => removePostMutation.mutate()}
			>
				<MdDelete className="w-5 h-5 mr-2" />
				Delete
			</Button>
		</DropdownMenuItem>
	);
};

export default DeleteButton;
