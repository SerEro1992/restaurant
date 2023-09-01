import React from 'react';
import Menu from './Menu';
import Link from 'next/link';
import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {
	const user = false;
	return (
		<div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40 bg-fuchsia-50">
			{/*Left links */}
			<div className="max-md:hidden md:flex gap-4 flex-1">
				<Link href="/">Home</Link>
				<Link href="/menu">Menu</Link>
				<Link href="/">Contact</Link>
			</div>
			{/* Logo*/}
			<div className="text-xl md:font-bold flex-1 md:text-center">
				<Link href="/"> Massimo</Link>
			</div>
			<div>
				<div className="md:hidden">
					{/*Mobile Menu */}
					<Menu />
				</div>
			</div>
			{/*Right links */}
			<div className="max-md:hidden md:flex gap-4 items-center justify-end flex-1.5">
				<div className="md:absolute top-3.5 lg:top-2 xl:static  r-2 flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
					<Image src="/phone.png" alt="" width={20} height={20} />
					<span className="max-lg:text-xs py-1">+7-4842-53-34-54</span>
				</div>
				{!user ? (
					<Link href="/login">Login</Link>
				) : (
					<Link href="/orders">Orders</Link>
				)}
				<CartIcon />
			</div>
		</div>
	);
};

export default Navbar;
