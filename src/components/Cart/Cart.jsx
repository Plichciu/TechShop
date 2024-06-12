import React, { createContext, useContext, useEffect, useState } from 'react'
import { CartContext } from '../../App'
import OrderPopup from '../OrderPopup/OrderPopup'
import Button from '../Shared/Button'
import CartMobile from './CartMobile'
import CartDesktop from './CartDesktop'
export const ResponsiveContext = createContext(null)

const Cart = () => {
	const { cart, setCart } = useContext(CartContext)
	const total = cart.reduce((acc, item) => acc + item.price, 0)
	const [totalPrice, setTotalPrice] = useState(total)
	const [handleOrderPopup, setHandleOrderPopup] = useState(false)

	useEffect(() => {
		setTotalPrice(cart.reduce((acc, item) => acc + item.price * item.quantity, 0))
		window.scrollTo(0, 0)
	}, [])
	return (
		<div className="container mx-auto w-screen min-h-[28rem]">
			<h1 className="text-3xl font-semibold my-5">Cart</h1>
			{cart.length === 0 ? (
				<p className="text-xl font-semibold my-5">Your cart is empty</p>
			) : (
				<div>
					{/* Mobile and desktop view of cart */}
					<ResponsiveContext.Provider
						value={{ totalPrice, setTotalPrice, setHandleOrderPopup }}>
						<CartMobile />
						<CartDesktop />
					</ResponsiveContext.Provider>
				</div>
			)}
			{/* Popup */}
			<OrderPopup
				handleOrderPopup={handleOrderPopup}
				setHandleOrderPopup={setHandleOrderPopup}
				totalPrice={totalPrice}
			/>
		</div>
	)
}

export default Cart
