import { useState } from 'react'
import "./Faq.scss";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";


const Faq = () => {
  const [list1, setList1] = useState(false)
  const [list2, setList2] = useState(true)
  const [list3, setList3] = useState(true)
  const [list4, setList4] = useState(true)
  const [list5, setList5] = useState(true)
  const [list6, setList6] = useState(true)
  const [list7, setList7] = useState(true)
  const [list8, setList8] = useState(true)

  return (
    <div>
      <div className="faq-dash">
        <h6>
          Freqently Asked Questions
        </h6>
      </div>

      <div className='drops'>
        {list1 && <div className='drops-container'>
          <h6>How do I invest?</h6>
          <MdArrowDropDown onClick={() => setList1(false)} className="menu" size={30} />
        </div>}

        {!list1 && <div className='drops-container'>
          <h6>How do I invest?</h6>
          <MdArrowDropUp onClick={() => setList1(true)} className="menu" size={30} />
          <p className='w-full md:w-4/5'>
            To make an investment you have to create an account either as a private or
            institutional investor. Once you are signed up, choose an investment plan that
            suits you and proceed to make a deposit. All deposits must be made through the
            Investor portfolio area.
          </p>
        </div>}
      </div>

      <div className='drops'>
        {list2 && <div className='drops-container'>
          <h6>Does the fund charge any fees?</h6>
          <MdArrowDropDown onClick={() => setList2(false)} className="menu" size={30} />
        </div>}

        {!list2 && <div className='drops-container'>
          <h6>Does the fund charge any fees?</h6>
          <MdArrowDropUp onClick={() => setList2(true)} className="menu" size={30} />
          <p className='w-full md:w-4/5'>
            The fund charges a 5% profit fee, the only way we can make money is if you profit from
            your investment.
          </p>
        </div>}
      </div>

      <div className='drops'>
        {list3 && <div className='drops-container'>
          <h6>What is the withdrawal process time?</h6>
          <MdArrowDropDown onClick={() => setList3(false)} className="menu" size={30} />
        </div>}

        {!list3 && <div className='drops-container'>
          <h6>What is the withdrawal process time?</h6>
          <MdArrowDropUp onClick={() => setList3(true)} className="menu" size={30} />
          <p className='w-full md:w-4/5'>
            After you have submitted a withdrawal, it will take 24h for the fund to liquidate your
            positions and send you your BTC wallet.
          </p>
        </div>}
      </div>

      <div className='drops'>
        {list4 && <div className='drops-container'>
          <h6>What are your average returns?</h6>
          <MdArrowDropDown onClick={() => setList4(false)} className="menu" size={30} />
        </div>}

        {!list4 && <div className='drops-container'>
          <h6>What are your average returns?</h6>
          <MdArrowDropUp onClick={() => setList4(true)} className="menu" size={30} />
          <p className='w-full md:w-4/5'>
            Although there are no guarantees, estimate to receive around 11.5% to 22.5% of your
            capital investment a month. This ROI is based on previous performance.
          </p>
        </div>}
      </div>

      <div className='drops'>
        {list5 && <div className='drops-container'>
          <h6>How is profit calculated?</h6>
          <MdArrowDropDown onClick={() => setList5(false)} className="menu" size={30} />
        </div>}

        {!list5 && <div className='drops-container'>
          <h6>How is profit calculated?</h6>
          <MdArrowDropUp onClick={() => setList5(true)} className="menu" size={30} />
          <p className='w-full md:w-4/5'>
            All profits are calculated in Bitcoin, which means Royal Stock-Shell’s objective is to
            increase your Bitcoin holdings.
          </p>
        </div>}
      </div>

      <div className='drops'>
        {list6 && <div className='drops-container'>
          <h6>Who we are?</h6>
          <MdArrowDropDown onClick={() => setList6(false)} className="menu" size={30} />
        </div>}

        {!list6 && <div className='drops-container'>
          <h6>Who we are?</h6>
          <MdArrowDropUp onClick={() => setList6(true)} className="menu" size={30} />
          <p className='w-full md:w-4/5'>
            Royal Stock-Shell is an online investment platform specialized in trading the financial
            markets. Our objective is to trade and manage our clients’ portfolio and earn them
            profits.
          </p>
        </div>}
      </div>

      <div className='drops'>
        {list7 && <div className='drops-container'>
          <h6>How secure are my funds if the market Crash?</h6>
          <MdArrowDropDown onClick={() => setList7(false)} className="menu" size={30} />
        </div>}

        {!list7 && <div className='drops-container'>
          <h6>How secure are my funds if the market Crash?</h6>
          <MdArrowDropUp onClick={() => setList7(true)} className="menu" size={30} />
          <p className='w-full md:w-4/5'>
            There are money-back guarantees depending on the plan you subscribe for. We have a
            risk management department that keeps your investment protected.
          </p>
        </div>}
      </div>

      <div className='drops'>
        {list8 && <div className='drops-container'>
          <h6>How can I withdraw funds?</h6>
          <MdArrowDropDown onClick={() => setList8(false)} className="menu" size={30} />
        </div>}

        {!list8 && <div className='drops-container'>
          <h6>How can I withdraw funds?</h6>
          <MdArrowDropUp onClick={() => setList8(true)} className="menu" size={30} />
          <p className='w-full md:w-4/5'>
            Login to your account using your username and password and check the withdraw
            section.
          </p>
        </div>}
      </div>


    </div >
  )
}

export default Faq;