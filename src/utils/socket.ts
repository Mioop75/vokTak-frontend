import { io } from 'socket.io-client';

export function Socket(namespace: string, user_uuid: string) {
	return io(`${import.meta.env.VITE_SOCKET_API_URL}/${namespace}`, {
		withCredentials: true,
		query: {
			user_uuid,
		},
	});
}
