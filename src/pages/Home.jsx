import React from 'react'
import Hero from '../components/Layout/Hero'
import NavBar from '../components/Common/NavBar'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
// import Preloader from '../components/Layout/Preloader'


const Home = () => {
  return (
    <div>
    <NavBar />
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      
    </div>
  )
}

export default Home
