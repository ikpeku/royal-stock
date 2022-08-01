import React from 'react'
import { BsFacebook, BsTwitter, BsLinkedin, BsArrowRight, BsGlobe, BsKey, BsCurrencyBitcoin, BsAward, BsSearch, BsCash, BsWallet } from "react-icons/bs";
import { AllPhotos } from '../../contants';
import "./About.scss"
import { Link } from 'react-router-dom';
import { Card } from '../../components';
import { MdOutlinePersonalInjury, MdTrendingUp } from "react-icons/md";

const About = () => {
  return (
    <div id='about-page'>

      <div className='About-image__dash w-full h-100 min-h-full'>
        <img src={AllPhotos.aboutDash} alt="dash-board" className='w-full' />
        <div className='contact-modal'>
          <p>-ABOUT US-</p>
        </div>
      </div>

      <div className="video-section">
        <div>
          <iframe src={AllPhotos.tradeVideo} frameborder="0" max-width="1600" allow='autoplay; encryted-media' title='market mark' allowFullScreen>
          </iframe>
        </div>
        <div>
          <p>
            <span>ROYAL STOCK-SHELL </span>  has been created to
            address the vital importance of having a
            passive investment that can support you on
            the investment journey, through the ups and
            downs of the complex financial world and to
            build a road map in line with your risk profile
            and financial objectives in life and
            generations to come.
          </p>
          <Link to="/"><button>Our Servives < BsArrowRight  size={30}/></button></Link>

        </div>

      </div>

      <div className="card-section">
        <div className="card-section__holder">
          <div className='about-card'>
            <h3>40%</h3>
            <p>Average return in the past seven years.</p>
          </div>

          <div className='about-card'>
            <h5>01.</h5>
            <span>Mission</span>
            <p>
              Our mission is to help individuals
              and corporations to determine
              and achieve their financial and
              fund raising goals through a
              comprehensive financial manage
              ment process.
            </p>
          </div>
          <div className='about-card'>
            <h5>02.</h5>
            <span>Vission</span>
            <p>
              Our vission is to enrich the lives of
              our clients and to have positive
              impact on our community.
              We strive to be the best financial
              solution firm -Worldwide.
            </p>
          </div>
        </div>
        <div className='about-btn-container'>
          <button>View Certificate</button>
        </div>

      </div>


      <div className='investment-section__container'>
        <p className='title'>Why choose us to manage your investment </p>
        <div className='investment-section'>

          <Card logo={<MdTrendingUp color='#1F4690' />} text="Consistent Growth" className="card1" size={200} />
          <Card logo={<BsCash color='#1F4690' />} text="Lower fees" className="card1" />
          <Card logo={< MdOutlinePersonalInjury color='#1F4690' />} text="Personalized Portfolio" className="card1" />
          <Card logo={<BsGlobe color='#1F4690' />} text="Globally Located" className="card1" />
          <Card logo={<BsSearch color='#1F4690' />} text="Multiple Options" className="card1" />
          <Card logo={<BsWallet color='#1F4690' />} text="Reliable" className="card1" />
          <Card logo={<BsKey color='#1F4690' />} text="Security" className="card1" />
          <Card logo={<BsCurrencyBitcoin color='#1F4690' />} text="Multi-currency support" className="card1" />
          <Card logo={<BsAward color='#1F4690' />} text="Award Winning" className="card1" />

        </div>
      </div>

      <div className="financial-investment-section">
        <div className="financial-investment">
          <p>
            "All financial investments comes
            with risk. </p>
          <p>
            Our motto is to balance risk with
            growth".
          </p>
        </div>

        <div className="img-container">
          <img src={AllPhotos.imgcontain} alt="Bharat Masrani" />
        </div>
        <h6>
          Bharat Masrani, <br />
          BOARD MEMBER
        </h6>
      </div>


      <div className="distinctive-difference">
        <h4>A DISTINCTIVE DIFFERENCE</h4>

        <p>
          At <span>ROYAL STOCK-SHELL</span> , our approach is working with only the best
          breed of the investment world, maximising the economies of scale and
          harnessing that expertise to deliver unbiased and proactive solutions. We are
          the conduit to dynamic management of your money which is essential in
          today’s modern global financial markets. Our collective investment strategies
          and access to the best managers combined with your chosen risk profile
          allows you access to some of the best investment managers in line with your
          specific attitude to investment risk, which can be amended as your life cycle
          evolves.
        </p>
        <p>
          <span>INVESTMENT PHYLOSOPHY</span><br /> Rather than attempting to predict the future or outguess others, we draw 
          information about expected returns from the market itself—leveraging the
           knowledge of its millions of buyers and sellers as they set scurity 
          prices.
        </p>
        <p>
Trusting markets to do what they do best—drive information into prices—frees 
          us to spend time where we believe we have an advantage, namely in how we
          interpret the research, how we design and manage portfolios, and how we 
          service our clients. We take a less subjective, more systematic approac to 
          investing—an approach we can implement consistently and investors can
          understand and stick with, even in challenging market environments.
          

        </p>
      </div>

        <div className='questionaire'>
          <div className='questionaire-btn'>
            <h4>DO YOU STILL WANT TO ASK QUESTION?</h4>
            <Link to="/contact"><button>Contact us</button></Link>
          </div>
        </div>




      <div className="About-logos">
        <BsFacebook color='#1F4690' />
        <BsTwitter color='#1F4690' />
        <BsLinkedin color='#1F4690' />
      </div>

    </div>
  )
}

export default About;