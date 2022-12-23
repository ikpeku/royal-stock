// import React,{useState} from 'react'
import {
  Home,
  About,
  Contact,
  Faq,
  Notfound,
  Signin,
  Signup,
  Dashboard,
  Agreement,
} from './pages'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Cert, Footer, Navbar, Social } from './components'
import { UserContexts } from './hooks/useContexts'

const App = () => {
  // const [toggle, setToggle] = useState(false)
  const { isComplete , user} = UserContexts()

  return (
    <div className="relative">
      {isComplete && (
        <>
          <Social />
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cert" element={<Cert />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/agreement" element={<Agreement />} />
              <Route path="/dashboard" element={ user ? <Dashboard /> : <Navigate  to="/signin" replace />} />
            </Route>

            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
