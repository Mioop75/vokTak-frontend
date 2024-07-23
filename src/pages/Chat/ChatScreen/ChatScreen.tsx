import AvatarWithUserInfo from '@/components/shared/AvatarWithUserInfo/AvatarWithUserInfo';
import chatService from '@/services/chat/chat.service';
import { useUserStore } from '@/store/user.store';
import { IMessage } from '@/types/Chat.interface';
import { formatName } from '@/utils/formatName';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { IChatScreenComponent } from './ChatScreen.interface';
import Messages from './Messages/Messages';
import WriteMessage from './WriteMessage/WriteMessage';

const ChatScreen = ({ chatId, socket }: IChatScreenComponent) => {
	const { data: chat } = useQuery('chat', () => chatService.getChat(chatId));
	const { user } = useUserStore();
	const [isConnected, setIsConnected] = useState<boolean>(false);

	const [messages, setMessages] = useState<IMessage[]>([]);

	useEffect(() => {
		const messageListener = (message: IMessage) => {
			setMessages(prev => [...prev, message]);
		};

		socket.on('create_message', messageListener);
		socket.on('connect', () => setIsConnected(true));
		socket.on('disconnect', () => setIsConnected(false));

		socket.emit('get_messages', chatId, (data: IMessage[]) => {
			setMessages([...data]);
		});

		return () => {
			socket.off('create_message', messageListener);
			socket.off('get_messages');
			socket.off('connect');
			socket.off('disconnect');
		};
	}, [socket]);

	return (
		<div className="flex-1 overflow-hidden">
			{chat && user ? (
				<>
					<div className="border-b-2 p-4">
						<AvatarWithUserInfo
							avatarSrc={chat.users[chat.users.length - 1].avatar?.photo.image}
							fullName={formatName(
								chat.users[chat.users.length - 1].firstname,
								chat.users[chat.users.length - 1].lastname
							)}
							extraInfo={isConnected ? 'Online' : 'Offline'}
						/>
					</div>
					<div className="w-full h-full max-h-[516px] overflow-y-auto overflow-x-hidden flex justify-between flex-col">
						<Messages messages={messages} />
						<WriteMessage
							socket={socket}
							chatId={chatId}
							user_uuid={user.uuid}
						/>
					</div>
				</>
			) : (
				<div>Some error</div>
			)}
		</div>
	);
};

export default ChatScreen;
