import React from 'react'
import NavBar from "../Common/NavBar"
import Footer from "../Common/Footer"
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
    {/* <NavBar /> */}
    <main>
      <Outlet />
    </main>

    
    <Footer />
    </>
  )
}

export default UserLayout
