import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
    
  return (
    <>
    <div>
        <Header />
    </div>
    <div>
        {children}
    </div>
    <div>
        {/* <Footer /> */}
    </div>
    </>
    
  )
}

export default Layout