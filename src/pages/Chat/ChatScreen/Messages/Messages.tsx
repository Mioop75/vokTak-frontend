import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUserStore } from '@/store/user.store';
import { IMessage } from '@/types/Chat.interface';
import clsx from 'clsx';
import { useState } from 'react';

const Messages = () => {
	const { user } = useUserStore();
	const [messages, setMessages] = useState<IMessage[]>([]);

	return (
		<div className="w-full overflow-y-auto overflow-x-hidden flex flex-col">
			{messages &&
				messages.map(message => (
					<div
						className={clsx('flex flex-col gap-2 p-4 whitespace-pre-wrap', {
							['items-end']: user?.nickname === message.user.nickname,
							['items-start']: user?.nickname !== message.user.nickname,
						})}
					>
						<div className={'flex gap-3 items-center'}>
							<Avatar className="w-11 h-11">
								<AvatarImage src={message.user.avatar?.photo.image} />
								<AvatarFallback></AvatarFallback>
							</Avatar>
							<div className="bg-accent p-3 rounded-md max-w-xs">
								<div>{message.message}</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default Messages;
