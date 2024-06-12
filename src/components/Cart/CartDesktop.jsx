import React, { useContext } from 'react'
import { CartContext } from '../../App'
import Button from '../Shared/Button'
import { ResponsiveContext } from './Cart'

const CartDesktop = () => {
	const { cart, setCart } = useContext(CartContext)
	const { totalPrice, setTotalPrice, setHandleOrderPopup } = useContext(ResponsiveContext)

	return (
		<div className="">
			<table className="hidden md:block table-auto w-fit  mx-auto">
				<thead className="min-w-full">
					<tr>
						<th className="px-4 py-2">Image</th>
						<th className="px-4 py-2">Product</th>
						<th className="px-4 py-2">Quantity</th>
						<th className="px-4 py-2">Price total</th>
						<th className="px-4 py-2">Action</th>
					</tr>
				</thead>
				<tbody className="w-full">
					{cart.map((el, i) => (
						<tr key={i}>
							<td className="border px-4 py-2">
								<img
									src={el.image}
									alt=""
									className="h-[50px] w-[50px] object-contain xl:h-[75px] xl:w-[75px]"
								/>
							</td>
							<td className="border px-4 py-2">{el.title}</td>
							<td className="border px-4 py-2 h-fit">
								{/* increasing, decreasing quantity */}
								<div className="quantity flex items-center justify-center">
									<button
										className="bg-gray-200 px-2 py-1 rounded-md hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out dark:text-black"
										onClick={() => {
											if (el.quantity === 1) {
												return
											}
											el.quantity--
											setTotalPrice(totalPrice - el.price)
											setCart([...cart])
										}}>
										-
									</button>
									<p className="px-2 w-10 flex justify-center">{el.quantity}</p>
									<button
										className="bg-gray-200 px-2 py-1 rounded-md hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out dark:text-black"
										onClick={() => {
											el.quantity++
											setTotalPrice((totalPrice + el.price))
											setCart([...cart])
										}}>
										+
									</button>
								</div>
							</td>
							{/* Update subtotal price */}
							<td className="border px-4 py-2">${(el.price * el.quantity).toFixed(2)}</td>
							{/* Remove button */}
							<td className="border px-4 py-2">
								<Button
									handler={() => {
										setCart(cart.filter(item => item.id !== el.id))
										setTotalPrice(totalPrice - el.quantity * el.price)
									}}
									bgColor={'bg-primary'}
									textColor={'text-white '}
									text={'Remove'}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{/* total */}
			<div className="hidden md:flex justify-between items-start my-5">
				<p className="text-xl font-semibold">Total</p>
				<div className="flex flex-col justify-end items-end gap-5">
					<p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
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

export default CartDesktop
