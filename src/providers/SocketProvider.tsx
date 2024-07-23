import { createContext, ReactChild, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface ISocketContext {
	socket: Socket | null;
	connected: boolean;
}

export const SocketContext = createContext<ISocketContext>({
	socket: null,
	connected: false,
});

interface ISocketProvider {
	children: ReactChild;
}

export const SocketProvider = (props: ISocketProvider) => {
	const socket = io(import.meta.env.VITE_SOCKET_API_URL, {
		withCredentials: true,
	});

	const [isConnected, setIsConnected] = useState<boolean>(false);

	useEffect(() => {
		const onConnect = () => {
			setIsConnected(true);
		};

		const onDisconnect = () => {
			setIsConnected(false);
		};

		socket.on('connect', onConnect);
		socket.on('disconnect', onDisconnect);

		return () => {
			socket.removeAllListeners();
		};
	}, [socket]);

	return (
		<SocketContext.Provider value={{ socket: socket, connected: isConnected }}>
			{props.children}
		</SocketContext.Provider>
	);
};
