import React from 'react'
import { AllPhotos } from '../../contants';
import "./Signin.scss"
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div id='signin'>
      <div className='signin-image__dash'>
        <img src={AllPhotos.Dash} alt="dash-board" />
        <div className='signin-image__key'>
          <img src={AllPhotos.Key} alt="" />
        </div>
        <div className='signin-image__key signin-image__key2'>
          <img src={AllPhotos.Key} alt="" />
        </div>
      </div>

      <div className="signin-form-section">
        <div className="signin-form__container">
          <form action="">
            <input type="text" placeholder='Username' required />
            <input type="password" name="" id="" placeholder='Password' required />
            <Link to="#"><em>Forgot password?</em></Link>
            <div className='btn-container'>
              <button>Submit</button>
            </div>
          </form>

          <div className="signin-form__signup-section">
            <p>Don’t have account?</p>
            <Link to="/signup"><button>Create account</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin;