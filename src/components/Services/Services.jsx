import React from 'react'
import { FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle } from 'react-icons/fa'

const ServiceData = [
	{
		id: 1,
		icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
		title: 'Free Shipping',
		description: 'Free Shipping On All Order',
	},
	{
		id: 2,
		icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
		title: 'Safe Money ',
		description: '30 Days Money Back',
	},
	{
		id: 3,
		icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
		title: 'Secure Payment',
		description: 'All Payment Secure',
	},
	{
		id: 4,
		icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
		title: 'Online Supoort 24/7',
		description: 'Technical Support 24/7',
	},
]

const Services = () => {
	return (
		<section id="services">
			<div className="container my-14 md:my-20">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
					{ServiceData.map((el, i) => (
						<div key={i} className="flex flex-col items-start sm:flex-row gap-4">
							{el.icon}
							<div>
								<h4 className="lg:text-xl font-bold">{el.title}</h4>
								<p className="text-gray-400 text-sm">{el.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
