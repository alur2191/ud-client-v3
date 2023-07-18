import React, { ReactNode } from 'react';
import Footer from './parts/footer';
import Navigation from './parts/navigation';

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => (
	<>
		<Navigation />
		<main>
			{children}
		</main>
		<Footer />
	</>
);

export default Layout;
