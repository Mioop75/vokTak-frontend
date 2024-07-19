import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import clsx from 'clsx';
import { IAVatarWithUserInfo } from './AvatarWithUserInfo.interface';

const AvatarWithUserInfo = ({
	avatarSrc,
	fullName,
	direction = 'row',
	sizeTitle = 'lg',
	extraInfo,
	className,
}: IAVatarWithUserInfo) => {
	return (
		<div
			className={clsx('flex gap-2 items-center', className, {
				['flex-col']: direction === 'column',
			})}
		>
			<Avatar className="w-11 h-11">
				<AvatarImage src={avatarSrc} alt={fullName} />
				<AvatarFallback />
			</Avatar>
			<div>
				<div
					className={clsx('font-medium', {
						['text-lg']: sizeTitle === 'lg',
						['text-base']: sizeTitle === 'base',
						['text-md']: sizeTitle === 'md',
						['text-sm']: sizeTitle === 'sm',
					})}
				>
					{fullName}
				</div>
				{extraInfo && (
					<div className="text-sm text-muted-foreground">{extraInfo}</div>
				)}
			</div>
		</div>
	);
};

export default AvatarWithUserInfo;
