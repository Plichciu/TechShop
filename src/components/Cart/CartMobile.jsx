import React, { useContext } from 'react'
import { CartContext } from '../../App'
import Button from '../Shared/Button'
import { ResponsiveContext } from './Cart'

const CartMobile = () => {
	const { cart, setCart } = useContext(CartContext)
	const { totalPrice, setTotalPrice, setHandleOrderPopup } = useContext(ResponsiveContext)

	return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:hidden bg-neutral-100 dark:bg-gray-800 dark:text-black  px-2 py-10 rounded-lg">
				{cart.map((el, i) => (
					<div className="bg-white rounded-md p-5 relative pb-10" key={i}>
						<img
							src={el.image}
							alt=""
							className="h-[120px] m-auto object-contain rounded-md"
						/>
						<div className="mt-5 flex w-full justify-between">
							{/* Remove button */}
							<Button
								handler={() => {
									setCart(cart.filter(item => item.id !== el.id))
									setTotalPrice(totalPrice - el.quantity * el.price)
								}}
								bgColor={'bg-primary'}
								textColor={'text-white '}
								text={'Remove'}
							/>
							{/* increasing, decreasing quantity */}
							<div className="quantity flex">
								<button
									className="bg-gray-200 px-2 py-1 rounded-md hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out dark:text-black"
									onClick={() => {
										if (el.quantity === 1) {
											return
										}
										el.quantity--
										setTotalPrice(totalPrice - el.price)
										subTotalPriceChange(el.id)
										setCart([...cart])
									}}>
									-
								</button>
								<p className="px-2">{el.quantity}</p>
								<button
									className="bg-gray-200 px-2 py-1 rounded-md hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out dark:text-black"
									onClick={() => {
										el.quantity++
										subTotalPriceChange(el.id)
										setTotalPrice(totalPrice + el.price)
										setCart([...cart])
									}}>
									+
								</button>
							</div>
						</div>
						{/* Update subtotal price */}
						<div className="flex justify-between items-center my-3">
							<p className="font-semibold">{el.title}</p>
						</div>
						<p className="font-bold absolute right-5 bottom-2">
							${(el.price * el.quantity).toFixed(2)}
						</p>
					</div>
				))}
			</div>
			{/* total */}
			<div className="flex md:hidden justify-between items-center my-5">
				<p className="text-xl font-semibold">Total</p>
				<p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
			</div>
			<div className="flex justify-end md:hidden">
				<div>
					{totalPrice > 0 && (
						<Button
							handler={() => setHandleOrderPopup(true)}
							bgColor={'bg-primary'}
							textColor={'text-white'}
							text={'Checkout'}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default CartMobile
