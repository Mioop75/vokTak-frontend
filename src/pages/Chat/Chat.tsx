import Search from '@/components/shared/Search/Search';
import { Card } from '@/components/ui/card';
import { useSearchParams } from 'react-router-dom';
import Chats from './Chats/Chats';
import ChatScreen from './ChatScreen/ChatScreen';

export default function ChatPage() {
	const [searchParams] = useSearchParams();
	const chat = searchParams.get('chat');

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
			<ChatScreen chatId={Number(chat)} />
		</Card>
	);
}
