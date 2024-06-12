import React from 'react'
import Category from '../components/Category/Category'
import Category2 from '../components/Category/Category2'
import Services from '../components/Services/Services'
import Banner from '../components/Banner/Banner'
import Products from '../components/Products/Products'
import Blogs from '../components/Blogs/Blogs'
import Partners from '../components/Partners/Partners'
import Hero from '../components/Hero/Hero'
import { BannerData, BannerData2 } from '../data/bannersData'

const HomePage = () => {
	return (
		<>
			<Hero />
			<Category />
			<Category2 />
			<Services />
			<Banner data={BannerData} />
			<Products />
			<Banner data={BannerData2} />
			<Blogs />
			<Partners />
		</>
	)
}

export default HomePage
