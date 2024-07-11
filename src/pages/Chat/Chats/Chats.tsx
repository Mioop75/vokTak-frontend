import AvatarWithUserInfo from '@/components/shared/AvatarWithUserInfo/AvatarWithUserInfo';

const Chats = () => {
	return (
		<div className="overflow-y-auto overflow-x-hidden mt-5 flex flex-col gap-5">
			<div className="w-full cursor-pointer inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-accent/30 text-accent-foreground shadow-sm hover:bg-accent/80 h-16 rounded-md px-5 dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink justify-start gap-4">
				<AvatarWithUserInfo
					avatarSrc="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					fullName="Alex"
					extraInfo="Message"
				/>
			</div>
			<div className="w-full cursor-pointer inline-flex items-center whitespace-nowrap  transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent/30 hover:text-accent-foreground h-16 rounded-md px-5 justify-start gap-4 border-b-1">
				<AvatarWithUserInfo
					avatarSrc="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					fullName="Alex"
					extraInfo="Message"
				/>
			</div>
			<div className="w-full cursor-pointer inline-flex items-center whitespace-nowrap  transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent/30 hover:text-accent-foreground h-16 rounded-md px-5 justify-start gap-4 border-b-1">
				<AvatarWithUserInfo
					avatarSrc="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					fullName="Alex"
					extraInfo="Message"
				/>
			</div>
			<div className="w-full cursor-pointer inline-flex items-center whitespace-nowrap  transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent/30 hover:text-accent-foreground h-16 rounded-md px-5 justify-start gap-4 border-b-1">
				<AvatarWithUserInfo
					avatarSrc="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					fullName="Alex"
					extraInfo="Message"
				/>
			</div>
			<div className="w-full cursor-pointer inline-flex items-center whitespace-nowrap  transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent/30 hover:text-accent-foreground h-16 rounded-md px-5 justify-start gap-4 border-b-1">
				<AvatarWithUserInfo
					avatarSrc="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					fullName="Alex"
					extraInfo="Message"
				/>
			</div>
			<div className="w-full cursor-pointer inline-flex items-center whitespace-nowrap  transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent/30 hover:text-accent-foreground h-16 rounded-md px-5 justify-start gap-4 border-b-1">
				<AvatarWithUserInfo
					avatarSrc="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					fullName="Alex"
					extraInfo="Message"
				/>
			</div>
		</div>
	);
};

export default Chats;
