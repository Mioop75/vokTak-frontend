import Search from '@/components/shared/Search/Search';
import { Card } from '@/components/ui/card';
import { Socket } from '@/utils/socket';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Socket as SocketBase } from 'socket.io-client';
import Chats from './Chats/Chats';
import ChatScreen from './ChatScreen/ChatScreen';
import NotFoundChat from './NotFoundChat';

export default function ChatPage() {
	const [searchParams] = useSearchParams();
	const [chatId, setChatId] = useState<number>();
	const chat = searchParams.get('chat');
	const [socket, setSocket] = useState<SocketBase | null>(null);

	useEffect(() => {
		if (chat) setChatId(Number(chat));
	}, [chat]);

	useEffect(() => {
		const newSocket = Socket('chat');
		setSocket(newSocket);
		return () => {
			newSocket.close();
		};
	}, [setSocket]);

	return (
		<Card className="flex justify-between mb-3 h-[600px]">
			<div className="border-r-2 overflow-hidden">
				<div className="p-4 pb-5">
					<Search />
				</div>
				<div className="border-t-2 h-full max-h-[516px] overflow-y-auto overflow-x-hidden">
					<Chats />
				</div>
			</div>
			{chatId && socket ? (
				<ChatScreen chatId={chatId} socket={socket} />
			) : (
				<NotFoundChat />
			)}
		</Card>
	);
}
