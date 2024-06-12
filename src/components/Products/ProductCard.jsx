import React, { useContext, useEffect, useState } from 'react'
import Button from '../Shared/Button'
import { CartContext } from '../../App'

const ProductCard = () => {
	const [products, setProducts] = useState([])
	const {
		cart,
		setCart,
		singleQuantityProduct,
		setSingleQuantityProduct,
		openAlert,
		setOpenAlert,
		alertInfo,
		setAlertInfo,
	} = useContext(CartContext)

	const getApiProducts = () => {
		fetch('https://fakestoreapi.com/products/category/electronics')
			.then(res => res.json())
			.then(data => setProducts(data))
			.catch(err => console.log(err))
	}

	const updateCart = prod => {
		const product = cart.find(el => el.id === prod.id)
		if (product) {
			product.quantity++
			setCart([...cart])
		} else {
			setCart([...cart, { ...prod, quantity: prod.quantity++ }])
		}
		setOpenAlert(true)
		setAlertInfo('Product added to cart')

		setTimeout(() => {
			setOpenAlert(false)
		}, 3000)
	}

	useEffect(() => {
		getApiProducts()
	}, [])

	return (
		<div className="mb-10">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
				{/* card section */}
				{products.map(el => (
					<div
						data-aos="fade-up"
						data-aos-delay="200"
						className="group mb-10 bg-white dark:text-black rounded-xl p-5 relative pb-10 shadow-md hover:shadow-lg transition duration-200 ease-in-out  items-center w-full"
						key={el.id}>
						<div className="relative">
							<span className="hidden">{(el.quantity = singleQuantityProduct)}</span>
							<img
								src={el.image}
								alt={el.title}
								className="h-[200px] object-contain rounded-md m-auto"
							/>
							{/* hover button */}
							<div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
								<Button
									handler={() => updateCart(el)}
									text={'Add to cart'}
									bgColor={'bg-primary'}
									textColor={'text-white'}
								/>
							</div>
						</div>
						<div className="leading-7 sm:h-[180px] md:h-[210px] 2xl:h-[160px] flex flex-col justify-between">
							<h2 className="font-semibold my-2">{el.title}</h2>
							<h2 className="font-bold">${el.price}</h2>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProductCard
