import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/providers/ThemeProvider';
import { useState } from 'react';

const ChangeTheme = ({ theme }: { theme: string }) => {
	const [selectedTheme, setSelectedTheme] = useState<string>(theme);
	const { setTheme } = useTheme();

	return (
		<Select
			value={selectedTheme}
			onValueChange={value => {
				setSelectedTheme(value);
				setTheme(value as Theme);
			}}
		>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Theme" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="light">Light</SelectItem>
				<SelectItem value="dark">Dark</SelectItem>
				<SelectItem value="system">System</SelectItem>
			</SelectContent>
		</Select>
	);
};

export default ChangeTheme;
