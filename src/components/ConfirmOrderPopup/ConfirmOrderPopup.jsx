import React from 'react'

const ConfirmOrderPopup = ({ setConfirmAlert }) => {
	return (
		<div>
			<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex justify-center items-center">
				<div className="bg-white dark:bg-gray-900  p-5 rounded-md w-96">
					<h2 className="text-2xl font-semibold">Order Placed</h2>
					<p className="text-lg mt-5">Thank you for your order</p>
					<button
						className="bg-primary text-white px-3 py-1 rounded-md mt-5"
						onClick={() => {
							window.location.reload()
							localStorage.removeItem('cart')
							window.location.href = '/'
							setConfirmAlert(false)
						}}>
						Close
					</button>
				</div>
			</div>
		</div>
	)
}

export default ConfirmOrderPopup
