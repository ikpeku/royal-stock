import React from 'react'
import "./Footer.scss"
import { AllPhotos } from '../../contants';
import { Link } from 'react-router-dom';
import { BsPhone, BsGeoAlt } from "react-icons/bs";

const Footer = () => {
  return (
    <div id='footer'>
      <div className="footer-container">
        <div className="footer-container__left">
          <div id='translator2'>
            <a href="#translator">
              <select name="" id="" defaultValue="language">
                <option value="language">Select Language</option>
                <option value="">English</option>
                <option value="">French</option>
                <option value="">Dutch</option>
              </select>
            </a>
          </div>
          <Link to='/'><img src={AllPhotos.Logo} alt="royal stock logo" /></Link>
          <p>Copyright © 2015 <span>Royal Stock Shell.</span><br />All Rights Reserved</p>

        </div>
        <div className="footer-container__right">
          <div className="footer-container__right-contain">
            <div className='double-sub'>
              <div className='double-sub-child'>
                <p>
                  <span>Financial News</span> <br />
                  Financial Times <br />
                  The Wall Street Journal <br />
                  Bloomberg <br />
                  Zero Hedge <br />
                </p>
              </div>
              <div className='double-sub-child'>
                <p>
                  <span>Legal</span> <br />
                  Agreement <br />
                  Cookie Policy <br />
                  FAQ <br />
                </p>
              </div>
            </div>
            <div className='single-sub'>

              <div className='single-sub-child'>
              <BsGeoAlt color='#1F4690' size={8} />
                <div>
                  <p>
                    <span>Our Office :</span> <br />
                    34-36 High Street, llford, England, IG6 2DQ, GB
                  </p>
                </div>
              </div>
              <div className='single-sub-child'>
                <BsPhone color='#1F4690' size={8} />
                <div>
                  <p>
                    <span>+447451287990</span> <br />
                    support@royalstockshell.com
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer;