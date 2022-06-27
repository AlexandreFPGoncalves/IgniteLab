import { Logo } from '../logo';

export const Header = () => {
	return (
		<header className="w-full py-5 flex items-center justify-evenly bg-base-bars border-b border-base-strokeDivider">
			<Logo />
		</header>
	);
};
