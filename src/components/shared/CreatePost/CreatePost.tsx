import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import postsService, { inputPostType } from '@/services/posts.service';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import { FaRegImage } from 'react-icons/fa';
import { GoPaperclip } from 'react-icons/go';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';

const CreatePost = () => {
	const queryClient = useQueryClient();
	const [value, setValue] = useState('');
	const [isOpenedEmojiPanel, setIsOpenedEmojiPanel] = useState<boolean>(false);

	const mutation = useMutation({
		mutationFn: (newPost: inputPostType) => postsService.createPost(newPost),
		onSuccess: () => {
			queryClient.invalidateQueries('posts');
			setValue('');
		},
	});

	const submitData = () => {
		mutation.mutate({ content: value, hidden: false });
	};

	return (
		<div className="mb-5 max-w-lg p-4 shadow-sm rounded-lg bg-card text-card-foreground border">
			<h2 className="text-xl font-bold mb-4">Create Post</h2>
			<Textarea
				placeholder="What's on your mind?"
				className="w-full h-24 mb-4"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<div className="flex justify-between items-center gap-5">
				<Button variant="ghost" size="sm">
					<FaRegImage className="w-5 h-5 mr-2" />
					Add image
				</Button>
				<Button variant="ghost" size="sm">
					<GoPaperclip className="w-5 h-5" />
				</Button>
				<Button
					variant="ghost"
					size="sm"
					onClick={() => setIsOpenedEmojiPanel(a => !a)}
				>
					<MdOutlineEmojiEmotions className="w-5 h-5" />
				</Button>
				<Button
					className="flex w-full max-w-28 ml-auto"
					disabled={mutation.isLoading}
					onClick={submitData}
				>
					Post
				</Button>
			</div>
			<EmojiPicker
				open={isOpenedEmojiPanel}
				lazyLoadEmojis={true}
				onEmojiClick={value => {
					setValue(oldValue => oldValue + value.emoji);
				}}
			/>
		</div>
	);
};

export default CreatePost;
