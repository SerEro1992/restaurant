import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<div className=" bg-fuchsia-50 h-12 md:h-20 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
			<Link href="/" className="uppercase font-bold text-xl">
				Massimo
			</Link>
			<p>© ALL RIGHTS RESERVED.</p>
		</div>
	);
};

export default Footer;
