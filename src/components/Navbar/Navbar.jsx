import React, { useContext } from 'react'
import {  FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode'
import { Link } from 'react-router-dom'
import { CartContext } from '../../App'

const Navbar = () => {
	const { cartQuantity } = useContext(CartContext)

	return (
		<div className="bg-white dark:bg-gray-900 dark:text-white duration-200  top-0 z-40 fixed w-full">
			<div className="py-4">
				<div className="container flex justify-between items-center">
					{/* Logo and Links section */}
					<div className="flex items-center gap-4">
						<Link
							to="/"
							href="#"
							className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
              ">
							TechShop
						</Link>

						<nav className="hidden lg:block">
							<ul className="flex items-center gap-4">
								<li>
									<a
										href="#shop"
										className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
										Shop{' '}
									</a>
								</li>
								<li>
									<a
										href="#blog"
										className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
										Blog
									</a>
								</li>
							</ul>
						</nav>
					</div>

					<div className="flex justify-between items-center gap-4">
						{/* Order-button section */}
						<button className="relative p-3">
							<Link to="/cart">
								<FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
							</Link>
							<div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
								{cartQuantity}
							</div>
						</button>
						{/* Dark Mode section */}
						<div>
							<DarkMode />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
