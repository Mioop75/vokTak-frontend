import logo from '@/assets/media/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to="/home" className="w-24">
			<img src={logo} alt="votTak logo" className="w-24" />
		</Link>
	);
};

export default Logo;
