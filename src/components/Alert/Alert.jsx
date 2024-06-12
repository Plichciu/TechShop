import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../App'

const Alert = () => {
	const { openAlert, setOpenAlert, alertInfo } = useContext(CartContext)

	const handleClose = () => {
		setOpenAlert(false)
	}

	return (
		<div>
			{/* item add to cart */}
			<div
				className={`bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded  ${
					openAlert ? 'fixed' : 'hidden'
				} top-0 right-0 left-0 z-50 w-1/2 mx-auto mt-5`}
				role="alert">
				<span className="block sm:inline">{alertInfo} </span>
				<span>
					See your{' '}
					<strong onClick={handleClose}>
						<Link to="/cart">cart</Link>
					</strong>
				</span>
				<span className="absolute top-0 bottom-0 right-0 px-4 py-3">
					<svg
						onClick={handleClose}
						className="fill-current h-6 w-6 text-green-500"
						role="button"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20">
						<title>Close</title>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M14.95 5.05a.75.75 0 0 1 1.06 1.06L11.06 10l4.95 4.95a.75.75 0 1 1-1.06 1.06L10 11.06l-4.95 4.95a.75.75 0 0 1-1.06-1.06L8.94 10 4.99 5.05a.75.75 0 0 1 1.06-1.06L10 8.94l4.95-4.95z"></path>
					</svg>
				</span>
			</div>
		</div>
	)
}

export default Alert
