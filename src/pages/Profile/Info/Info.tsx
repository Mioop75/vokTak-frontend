import AvatarWithUserInfo from '@/components/shared/AvatarWithUserInfo/AvatarWithUserInfo';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { formatName } from '@/utils/formatName';
import { BiMessage } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { IInfoComponent } from './Info.interface';

const Info = ({ avatar, email, firstname, lastname, info }: IInfoComponent) => {
	return (
		<Card className="mb-5 p-3 col-start-1 col-end-7">
			<CardHeader className="flex-row gap-4 items-start justify-between">
				<AvatarWithUserInfo
					avatarSrc={avatar?.photo?.image}
					fullName={formatName(firstname, lastname)}
					extraInfo={email}
				/>
				<div className="flex items-center gap-3">
					<Button className="bg-green-600 hover:bg-green-900">
						Add friend
					</Button>
					<Button variant="secondary" title="Write a message">
						<BiMessage className="w-5 h-5" />
					</Button>
					<DropdownMenu>
						<DropdownMenuTrigger className="outline-none bg-secondary p-2 transition-colors rounded-sm w-10 h-10 hover:bg-slate-300">
							<BsThreeDots className="inline w-5 h-5" />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Billing</DropdownMenuItem>
							<DropdownMenuItem>Team</DropdownMenuItem>
							<DropdownMenuItem>Subscription</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</CardHeader>
			<Separator className="mb-5" />
			<CardContent className="flex gap-2 flex-col max-w-96">
				<div className="inline-flex justify-between gap-3 items-center">
					<p className="text-gray-500 font-medium">Birthday:</p>
					<Link
						to=""
						className="transition-colors text-blue-400 hover:text-blue-500 font-bold"
					>
						January 7
					</Link>
				</div>
				<div className="inline-flex justify-between gap-3 items-center">
					<p className="text-gray-500 font-medium">Current city:</p>
					<Link
						to=""
						className="transition-colors text-blue-400 hover:text-blue-500 font-bold"
					>
						Saint Petersburg
					</Link>
				</div>
				<div className="inline-flex justify-between gap-3 items-center">
					<p className="text-gray-500 font-medium">Hometown:</p>
					<Link
						to=""
						className="transition-colors text-blue-400 hover:text-blue-500 font-bold"
					>
						Novosibirks
					</Link>
				</div>
			</CardContent>
			<Separator className="mb-5" />
			<CardFooter className="gap-5">
				<div>
					<div className="text-xl text-blue-600">2,630</div>
					<p className="text-gray-500">Photos</p>
				</div>
				<div>
					<div className="text-xl text-blue-600">2,630</div>
					<p className="text-gray-500">Photos</p>
				</div>
			</CardFooter>
		</Card>
	);
};

export default Info;
