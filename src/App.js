import React from 'react'
import { Home, About, Contact, Faq, Notfound, Signin, Signup, Dashboard, Agreement } from './pages';
import { Route, Routes } from 'react-router-dom';
import { Cert, Footer, Navbar, Social } from './components';

const App = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Social />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cert' element={<Cert />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/agreement' element={<Agreement />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;