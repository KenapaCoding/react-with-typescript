type HeaderProps = {
    children:React.ReactNode
};

const Header = ({children}: HeaderProps) => {
	return (
		<header className='bg-white shadow'>
			<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
				{children}
			</div>
		</header>
	);
};

export default Header;
