import React,{useState} from 'react'
import { Home, About, Contact, Faq, Notfound, Signin, Signup, Dashboard, Agreement } from './pages';
import { Route, Routes } from 'react-router-dom';
import { Cert, Footer, Navbar, Social } from './components';

const App = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <div className='relative'>
      <Navbar toggle={toggle} setToggle={setToggle} />
      { toggle && <div className='absolute w-full h-full z-40 bg-slate-100 opacity-75 md:hidden'></div>}
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