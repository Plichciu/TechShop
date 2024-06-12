import React, { useState } from 'react'
import ConfirmOrderPopup from '../ConfirmOrderPopup/ConfirmOrderPopup'
import Button from '../Shared/Button'

const OrderPopup = ({ handleOrderPopup, setHandleOrderPopup, totalPrice }) => {
	const [name, setName] = useState({ text: '', id: 'name' })
	const [email, setEmail] = useState({ text: '', id: 'email' })
	const [address, setAddress] = useState({ text: '', id: 'address' })
	const [phone, setPhone] = useState({ text: '', id: 'phone' })
	const [terms, setTerms] = useState({ checked: false, id: 'terms' })
	const [error, setError] = useState(false)
	const [confirmAlert, setConfirmAlert] = useState(false)



	const handleForm = e => {
		e.preventDefault()

		const inputs = [name, email, address, phone]

		inputs.forEach(input => {
			if (input.text === '') {
				if (document.getElementById(input.id)) {
					document.getElementById(input.id).classList.add('border-red-500')
				}
				setError(true)
				return
			} else {
				if (document.getElementById(input.id)) {
					document.getElementById(input.id).classList.remove('border-red-500')
				}
				setError(false)
			}
		})

		if (!terms.checked) {
			if (document.getElementById('terms')) {
				document.getElementById('terms').classList.add('text-red-500')
			}
		} else {
			if (document.getElementById('terms')) {
				document.getElementById('terms').classList.remove('text-red-500')
			}
		}

		if (terms.checked && !error) {
			setName({ text: '', id: 'name' })
			setEmail({ text: '', id: 'email' })
			setAddress({ text: '', id: 'address' })
			setPhone({ text: '', id: 'phone' })
			setTerms({ checked: false, id: 'terms' })
			setConfirmAlert(true)
		}
	}

	return (
		<div className={`${handleOrderPopup ? 'block' : 'hidden'}  `}>
			{/* shadow bg */}
			<div
				onClick={() => setHandleOrderPopup(false)}
				className={`fixed inset-0 bg-black bg-opacity-50 z-50`}></div>

			<div className="fixed inset-0 flex flex-col justify-center items-center z-50 bg-gray-200 md:h-fit md:w-[75%] mx-auto my-auto p-12 md:rounded-xl xl:max-w-[1000px] dark:bg-gray-900">
				<span
					onClick={() => setHandleOrderPopup(false)}
					className="close absolute top-5 right-5 cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</span>
				{/* form */}
				<form className="max-w-[700px]" action="">
					<div className="flex justify-center">
						<p
							to="/"
							href="#"
							className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl pb-10">
							TechShop
						</p>
					</div>
					<input
						onChange={e => {
							setName({ text: e.target.value, id: 'name' })
						}}
						id="name"
						type="text"
						placeholder="Name"
						className="w-full p-2 mb-5 border border-gray-400 rounded-md focus:dark:bg-gray-800 focus:dark:text-white dark:text-black"
					/>
					<input
						onChange={e => {
							setEmail({ text: e.target.value, id: 'email' })
						}}
						id="email"
						type="text"
						placeholder="Email"
						className="w-full p-2 mb-5 border border-gray-400 rounded-md focus:dark:bg-gray-800 focus:dark:text-white dark:text-black"
					/>
					<input
						onChange={e => {
							setAddress({ text: e.target.value, id: 'address' })
						}}
						id="address"
						type="text"
						placeholder="Address"
						className="w-full p-2 mb-5 border border-gray-400 rounded-md focus:dark:bg-gray-800 focus:dark:text-white dark:text-black"
					/>
					<input
						onChange={e => {
							setPhone({ text: e.target.value, id: 'phone' })
						}}
						id="phone"
						type="text"
						placeholder="Phone"
						className="w-full p-2 mb-5 border border-gray-400 rounded-md focus:dark:bg-gray-800 focus:dark:text-white dark:text-black		"
					/>
					<div className="terms" id="terms">
						<input
							onChange={e => {
								setTerms({ checked: e.target.checked, id: 'terms' })
							}}
							type="checkbox"
						/>
						<label className="ml-2">
							I have read and agree to the <span>terms and conditions</span>
						</label>
					</div>
					{/* error handler  */}
					<div className={`${error ? 'block' : 'hidden'} errorInfo py-2`}>
						<p className="text-red-500 text-sm text-center">Please fill all the fields</p>
					</div>
					{/* Total price */}
					<div className="flex justify-end pt-5 pb-2">
						<p>
							Total price: <span className="font-bold">${totalPrice}</span>
						</p>
					</div>
					{/* checkout button */}
					<div className="flex justify-end">
						<Button
							handler={handleForm}
							bgColor={'bg-primary'}
							textColor={'text-white'}
							text={'Checkout'}
						/>
					</div>
				</form>
			</div>
			{/* confirm alert */}
			<div className={`${confirmAlert ? 'block' : 'hidden'}`}>
				<ConfirmOrderPopup
					confirmAlert={confirmAlert}
					setConfirmAlert={setConfirmAlert}
				/>
			</div>
		</div>
	)
}

export default OrderPopup
