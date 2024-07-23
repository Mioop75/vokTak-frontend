import { Socket } from 'socket.io-client';

export interface IChatScreenComponent {
	chatId: number;
	socket: Socket;
}
