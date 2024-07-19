import AvatarWithUserInfo from '@/components/shared/AvatarWithUserInfo/AvatarWithUserInfo';
import chatService from '@/services/chat/chat.service';
import { useUserStore } from '@/store/user.store';
import { IMessage } from '@/types/Chat.interface';
import { formatName } from '@/utils/formatName';
import { Socket } from '@/utils/socket';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { IChatScreenComponent } from './ChatScreen.interface';
import Messages from './Messages/Messages';
import WriteMessage from './WriteMessage/WriteMessage';

const ChatScreen = ({ chatId }: IChatScreenComponent) => {
	const { data: chat } = useQuery('chat', () => chatService.getChat(chatId));
	const { user } = useUserStore();

	const [messages, setMessages] = useState<IMessage[]>([]);
	const socket = Socket('chat', user.uuid);

	useEffect(() => {
		const messageListener = (message: IMessage) => {
			setMessages(prev => [...prev, message]);
		};

		socket.on('get_messages', messageListener);
		socket.emit('get_messages', 2);

		return () => {
			socket.off('chat', messageListener);
		};
	}, [socket]);

	return (
		<div className="flex-1 overflow-hidden">
			{chat ? (
				<>
					<div className="border-b-2 p-4">
						<AvatarWithUserInfo
							avatarSrc={chat.users[chat.users.length - 1].avatar?.photo.image}
							fullName={formatName(
								chat.users[chat.users.length - 1].firstname,
								chat.users[chat.users.length - 1].lastname
							)}
							extraInfo="active 2 mins ago"
						/>
					</div>
					<div className="w-full h-full max-h-[516px] overflow-y-auto overflow-x-hidden flex justify-between flex-col">
						<Messages />
						<WriteMessage />
					</div>
				</>
			) : (
				<div>No chat</div>
			)}
		</div>
	);
};

export default ChatScreen;
