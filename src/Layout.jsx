import React from 'react'
import Footer from './components/header/footer/footer.jsx'
import Header from './components/Header/Footer/Header.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

    </>
  )
}

export default Layout
