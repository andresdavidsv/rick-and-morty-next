import React from 'react';
import Navbar from '@components/NavbarComponent/Navbar';
import Footer from '@components/FooterComponent/Footer';

const Layout:React.FC = ({children}) => {
  return (
    <div className="app">
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}

export default Layout
