import { Socket } from 'socket.io-client';

export interface IWriteMessageComponent {
	socket: Socket;
	user_uuid: string;
	chatId: number;
}
