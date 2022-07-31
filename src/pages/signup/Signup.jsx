import { useState } from 'react'
import "./Signup.scss";
import { Link } from 'react-router-dom';


const Signup = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(email, lastName, firstName, password, confirmPassword)
  }


  return (
    <div id='Signup-page'>
      <div className='Signup-page__card'>
        <h4>
          CREATE ACCOUNT AND <br />
          START YOUR JOURNEY <br />
          TO FINANCIAL FREEDOM <br />
        </h4>

      </div>

      <div className='Signup-page__form-container'>

        <form action="" onSubmit={handleSubmit}>
          <div>
            <h6>Sign Up</h6>
            <p>It is quick and easy</p>
          </div>
          <div className='form-input'>
            <input className='input' type="text" placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input className='input' type="text" placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <input className='input' type="email" name="" id="" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <input className='input' type="password" name="" id="" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <input className='input' type="password" name="" id="" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <div>
            <div>
              <span><input type="checkbox" name="" id="" /> <em>I’m not a ROBBOT</em></span>
            </div>
            <p>By clicking on sign up, You agree to our <Link to="#"><span> Privacy policies.</span></Link></p>
          </div>
          <div className='form-btn'>
            <button>Sign Up</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Signup;