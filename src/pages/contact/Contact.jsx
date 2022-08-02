import { useState } from 'react'
import { AllPhotos } from '../../contants';
import "./Contact.scss"
import { BsEnvelope, BsPhone, BsGeoAlt } from "react-icons/bs";


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault()


  }



  return (
    <div id='contact-page'>
      <div className='contact-image__dash'>
        <img src={AllPhotos.contactDash} alt="dash-board" />
        <div className='contact-modal'>
          <p>Contact our support team</p>
        </div>
      </div>


      <div className='contact-page__form-container'>

        <form action="" onSubmit={handleSubmit}>
          <div>
            <h6>Reach out to us.</h6>
            <p>
              Dont be shy, Just tell us about yourself and we’ll
              figure out the best option for you and your project.
              Dont like Filling up forms ? Mail us then
              <a href="mailto:support@royalstockshell.com"> support@royalstockshell.com</a>
            </p>
          </div>

          <div>
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <input className='input' type="email" name="" id="" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <input type="number" name="" id="" placeholder='number' value={number} onChange={(e) => setNumber(e.target.value)} />
          </div>

          <div>
            <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>

          <div>
            <textarea name="" id="" cols="10" rows="5" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
          </div>


          <div className='form-btn'>
            <button>Sign Up</button>
          </div>
        </form>

        <div className='contact-location'>

          <div className='single-sub-child'>
            <BsGeoAlt color='#1F4690' size={20} />
            <div>
              <p>
                <span>Visit Us: </span> <br />
                34-36 High Street, llford, England, IG6 2DQ, GB
              </p>
            </div>
          </div>


          <div className='single-sub-child'>
            <BsPhone color='#1F4690' size={20} />
            <div>
              <p>
                <span>Feel Like Talking</span> <br />
                +447451287990
              </p>
            </div>
          </div>

          <div className='single-sub-child'>
            {/* <img src={AllPhotos.Phone} alt="mobile logo" /> */}
            <BsEnvelope color='#1F4690' size={20} />
            <div>
              <p>
                <span>Need Help?</span> <br />
                support@royalstock-shell.com
              </p>
            </div>
          </div>


        </div>

      </div>
      
    </div>
  )
}

export default Contact;