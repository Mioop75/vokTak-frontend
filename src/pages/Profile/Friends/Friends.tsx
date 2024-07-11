import AvatarWithUserInfo from '@/components/shared/AvatarWithUserInfo/AvatarWithUserInfo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Friends = () => {
	return (
		<Card className="mb-2">
			<CardHeader>
				<CardTitle>Friends</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-3 gap-4">
				<Link to="" className="flex flex-col items-center gap-2">
					<AvatarWithUserInfo
						avatarSrc="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						fullName="Alex joh"
						direction="column"
						sizeTitle="base"
					/>
				</Link>
				<Link to="" className="flex flex-col items-center gap-2">
					<AvatarWithUserInfo
						avatarSrc="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						fullName="Alex joh"
						direction="column"
						sizeTitle="base"
					/>
				</Link>
				<Link to="" className="flex flex-col items-center gap-2">
					<AvatarWithUserInfo
						avatarSrc="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						fullName="Alex joh"
						direction="column"
						sizeTitle="base"
					/>
				</Link>
				<Link to="" className="flex flex-col items-center gap-2">
					<AvatarWithUserInfo
						avatarSrc="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						fullName="Alex joh"
						direction="column"
						sizeTitle="base"
					/>
				</Link>
			</CardContent>
		</Card>
	);
};

export default Friends;
