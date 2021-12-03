import React from 'react';
import Navbar from '@components/NavbarComponent/Navbar';
import Footer from '@components/FooterComponent/Footer';

const Layout:React.FC = ({children}) => {
  return (
    <div>
      <Navbar />
        <div className="app">
          <main>
            {children}
          </main>
        </div>
      <Footer />
    </div>
  )
}

export default Layout
