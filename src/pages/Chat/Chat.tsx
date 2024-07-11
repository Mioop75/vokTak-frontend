import AvatarWithUserInfo from '@/components/shared/AvatarWithUserInfo/AvatarWithUserInfo';
import Search from '@/components/shared/Search/Search';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import EmojiPicker from 'emoji-picker-react';
import { FaRegImage } from 'react-icons/fa';
import { GoPaperclip } from 'react-icons/go';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import Chats from './Chats/Chats';
import Messages from './Messages/Messsages';

export default function ChatPage() {
	return (
		<Card className="flex justify-between mb-3 h-full max-h-[600px]">
			<div className="border-r-2 overflow-hidden">
				<div className="p-4 pb-5">
					<Search />
				</div>
				<div className="border-t-2 h-full max-h-[516px] overflow-y-auto overflow-x-hidden">
					<Chats />
				</div>
			</div>
			<div className="flex-1 overflow-hidden">
				<div className="border-b-2 p-4">
					<AvatarWithUserInfo
						avatarSrc="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						fullName="Alex Josh"
						extraInfo="active 2 mins ago"
					/>
				</div>
				<div className="w-full h-full max-h-[516px] overflow-y-auto overflow-x-hidden flex justify-between flex-col">
					<Messages />
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
						<Input placeholder="Write a message" />
						<EmojiPicker open={false} />
					</div>
				</div>
			</div>
		</Card>
	);
}
