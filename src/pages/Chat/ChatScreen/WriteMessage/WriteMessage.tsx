import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import { FaRegImage } from 'react-icons/fa';
import { GoPaperclip } from 'react-icons/go';
import { MdOutlineEmojiEmotions } from 'react-icons/md';

const WriteMessage = () => {
	// implement websocket chat
	const [message, setMessage] = useState<string>('');

	const writeMessageHandle = (message: string) => {};

	return (
		<div className="flex gap-3 p-4 relative">
			<Button variant="ghost" size="sm">
				<FaRegImage className="w-5 h-5" />
			</Button>
			<Button variant="ghost" size="sm">
				<GoPaperclip className="w-5 h-5" />
			</Button>
			<Button variant="ghost" size="sm">
				<MdOutlineEmojiEmotions className="w-5 h-5" />
			</Button>
			<Input
				placeholder="Write a message"
				onChange={e => writeMessageHandle(e.target.value)}
			/>
			<EmojiPicker open={false} />
		</div>
	);
};

export default WriteMessage;
