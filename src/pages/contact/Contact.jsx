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
          <p className='text-white text-center font-bold text-xl md:text-2xl'>Contact our support team</p>
        </div>
      </div>


      <div className='flex flex-wrap mt-1 md:p-10 md:mt-20 md:grid gap-4 grid-cols-3'>

        <form action="" onSubmit={handleSubmit} className="bg-[#918CAA] p-5 md:p-10 md:w-full col-span-2 border-2 border-slate-900'">
          <div>
            <h6 className='text-[#231955] font-bold text-lg'>Reach out to us.</h6>
            <p>
              Dont be shy, Just tell us about yourself and we’ll
              figure out the best option for you and your project.
              Dont like Filling up forms ? Mail us then
              <a href="mailto:support@royalstockshell.com" className='text-[#231955] '> support@royalstockshell.com</a>
            </p>
          </div>

          <div>
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}  className="w-full mb-5 p-5 mt-2" />
          </div>

          <div>
            <input  type="email" name="" id="" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-5 p-5" />
          </div>

          <div>
            <input type="number" name="" id="" placeholder='number' value={number} onChange={(e) => setNumber(e.target.value)} className="w-full mb-5 p-5" />
          </div>

          <div>
            <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full mb-5 p-5" />
          </div>

          <div>
            <textarea name="" id="" cols="10" rows="5" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} className="w-full mb-5 p-5"></textarea>
          </div>


          <div>
            <button className="bg-[#231955] hover:invert-[10%] text-white font-bold w-full mb-5 p-5">Sign Up</button>
          </div>
        </form>

        <div className='flex flex-col gap-5 p-5'>

          <div className='flex items-center gap-x-5'>
            <BsGeoAlt color='#1F4690' size={20} />
            <div>
              <p>
                <span className='font-bold'>Visit Us: </span> <br />
                34-36 High Street, llford, England, IG6 2DQ, GB
              </p>
            </div>
          </div>


          <div className='flex items-center gap-x-5'>
            <BsPhone color='#1F4690' size={20} />
            <div>
              <p>
                <span className='font-bold'>Feel Like Talking</span> <br />
                +447451287990
              </p>
            </div>
          </div>

          <div className='flex items-center gap-x-5'>
            <BsEnvelope color='#1F4690' size={20} />
            <div>
              <p>
                <span className='font-bold'>Need Help?</span> <br />
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