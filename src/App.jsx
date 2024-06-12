import React, { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage.jsx'
import HomePage from './pages/HomePage.jsx'
import Alert from './components/Alert/Alert.jsx'
import './App.css'
export const CartContext = createContext(null)

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []

const App = () => {
	const [singleQuantityProduct, setSingleQuantityProduct] = useState(1)
	const [cart, setCart] = useState(cartFromLocalStorage)
	const [cartQuantity, setCartQuantity] = useState(0)
	const [openAlert, setOpenAlert] = useState(false)
	const [alertInfo, setAlertInfo] = useState('')

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	useEffect(() => {
		AOS.init({
			duration: 800,
			easing: 'ease-in-sine',
			delay: 100,
			offset: 100,
		})
		AOS.refresh()
	}, [])

	useEffect(() => {
		setCartQuantity(cart.length)
	}, [cart])

	return (
		<div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
			<BrowserRouter>
				<CartContext.Provider
					value={{
						cart,
						setCart,
						cartQuantity,
						setCartQuantity,
						singleQuantityProduct,
						setSingleQuantityProduct,
						openAlert,
						setOpenAlert,
						alertInfo,
						setAlertInfo,
					}}>
					<Navbar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/cart" element={<CartPage />} />
					</Routes>
					<Footer />
					<Alert />
				</CartContext.Provider>
			</BrowserRouter>
		</div>
	)
}

export default App
