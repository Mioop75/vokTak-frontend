import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

export const useSocket = (namespace: string) => {
	const socket = useRef<Socket | null>(null);

	useEffect(() => {
		socket.current = io(`${import.meta.env.VITE_SOCKET_API_URL}/${namespace}`, {
			autoConnect: false,
			query: {
				user_uuid: localStorage.getItem('user_uuid'),
			},
		});
	}, [namespace]);
	return socket;
};
