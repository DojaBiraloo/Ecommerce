import React from 'react'
import Hero from '../components/Layout/Hero'
import NavBar from '../components/Common/NavBar'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import { PiPlaceholder } from 'react-icons/pi'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturedSection from '../components/Products/FeaturedSection'
// import Preloader from '../components/Layout/Preloader'

const placeholderProducts = [
     {
          _id: 5,
          name: "Product 5",
          price: 100,
          images: [{
               url: "https://picsum.photos/500/500?random=7",
          }],
     },
     {
          _id: 6,
          name: "Product 6",
          price: 100,
          images: [{
               url: "https://picsum.photos/500/500?random=8",
          }],
     },
     {
          _id: 7,
          price: 100,
          name: "Product 7",
          images: [{
               url: "https://picsum.photos/500/500?random=9",
          }],
     },
     {
          _id: 8,
          price: 100,
          name: "Product 8",
          images: [{
               url: "https://picsum.photos/500/500?random=10",
          }],
     },
     {
          _id: 9,
          name: "Product 9",
          price: 100,
          images: [{
               url: "https://picsum.photos/500/500?random=11",
          }],
     },
     {
          _id: 10,
          name: "Product 10",
          price: 100,
          images: [{
               url: "https://picsum.photos/500/500?random=12",
          }],
     },
     {
          _id: 11,
          price: 100,
          name: "Product 11",
          images: [{
               url: "https://picsum.photos/500/500?random=13",
          }],
     },
     {
          _id: 12,
          price: 100,
          name: "Product 12",
          images: [{
               url: "https://picsum.photos/500/500?random=14",
          }],
     },


]

const Home = () => {
     return (
          <div>
               <Hero />
               <GenderCollectionSection />
               <NewArrivals />

               {/* Best Seller Section */}
               <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
               <ProductDetails />
               <div className="container mx-auto">
                    <h2 className='text-3xl text-center font-bold mb-4'>
                         Top Wears for Women
                    </h2>
                    <ProductGrid products={placeholderProducts} />
               </div>

               <FeaturedCollection />

               <FeaturedSection />

          </div>
     )
}

export default Home
