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
          <MdArrowDropDown onClick={() => setList1(false)} className="menu" />
        </div>}

        {!list1 && <div className='drops-container'>
          <h6>How do I invest?</h6>
          <MdArrowDropUp onClick={() => setList1(true)} className="menu" />
          <p>
            To make an investment you have to create an account either as a private or
            institutional investor. Once you are signed up, choose an investment plan that
            suits you and proceed to make a deposit. All deposits must be made through the
            Investor portfolio area.
          </p>
        </div>}
      </div>

      <div className='drops'>
        {list2 && <div className='drops-container'>
          <h6>How do I invest?</h6>
          <MdArrowDropDown onClick={() => setList2(false)} />
        </div>}

        {!list2 && <div className='drops-container'>
          <h6>How do I invest?</h6>
          <MdArrowDropUp onClick={() => setList2(true)} />
          <p>
            To make an investment you have to create an account either as a private or
            institutional investor. Once you are signed up, choose an investment plan that
            suits you and proceed to make a deposit. All deposits must be made through the
            Investor portfolio area.
          </p>
        </div>}
      </div>

      <div className='drops'>
        {list3 && <div className='drops-container'>
          <h6>How do I invest?</h6>
          <MdArrowDropDown onClick={() => setList3(false)} />
        </div>}

        {!list3 && <div className='drops-container'>
          <h6>How do I invest?</h6>
          <MdArrowDropUp onClick={() => setList3(true)} />
          <p>
            To make an investment you have to create an account either as a private or
            institutional investor. Once you are signed up, choose an investment plan that
            suits you and proceed to make a deposit. All deposits must be made through the
            Investor portfolio area.
          </p>
        </div>}
      </div>

      <div className='drops'>
        {list4 && <div>
          <h6>How do I invest?</h6>
          <MdArrowDropDown onClick={() => setList4(false)} />
        </div>}

        {!list4 && <div>
          <h6>How do I invest?</h6>
          <MdArrowDropUp onClick={() => setList4(true)} />
          <p>
            To make an investment you have to create an account either as a private or
            institutional investor. Once you are signed up, choose an investment plan that
            suits you and proceed to make a deposit. All deposits must be made through the
            Investor portfolio area.
          </p>
        </div>}
      </div>

      <div className='drops'>
        {list5 && <div>
          <h6>How do I invest?</h6>
          <MdArrowDropDown onClick={() => setList5(false)} />
        </div>}

        {!list5 && <div>
          <h6>How do I invest?</h6>
          <MdArrowDropUp onClick={() => setList5(true)} />
          <p>
            To make an investment you have to create an account either as a private or
            institutional investor. Once you are signed up, choose an investment plan that
            suits you and proceed to make a deposit. All deposits must be made through the
            Investor portfolio area.
          </p>
        </div>}
      </div>

      <div className='drops'>
        {list6 && <div>
          <h6>How do I invest?</h6>
          <MdArrowDropDown onClick={() => setList6(false)} />
        </div>}

        {!list6 && <div>
          <h6>How do I invest?</h6>
          <MdArrowDropUp onClick={() => setList6(true)} />
          <p>
            To make an investment you have to create an account either as a private or
            institutional investor. Once you are signed up, choose an investment plan that
            suits you and proceed to make a deposit. All deposits must be made through the
            Investor portfolio area.
          </p>
        </div>}
      </div>

      <div className='drops'>
        {list7 && <div>
          <h6>How do I invest?</h6>
          <MdArrowDropDown onClick={() => setList7(false)} />
        </div>}

        {!list7 && <div>
          <h6>How do I invest?</h6>
          <MdArrowDropUp onClick={() => setList7(true)} />
          <p>
            To make an investment you have to create an account either as a private or
            institutional investor. Once you are signed up, choose an investment plan that
            suits you and proceed to make a deposit. All deposits must be made through the
            Investor portfolio area.
          </p>
        </div>}
      </div>

      <div className='drops'>
        {list8 && <div>
          <h6>How do I invest?</h6>
          <MdArrowDropDown onClick={() => setList8(false)} />
        </div>}

        {!list8 && <div>
          <h6>How do I invest?</h6>
          <MdArrowDropUp onClick={() => setList8(true)} />
          <p>
            To make an investment you have to create an account either as a private or
            institutional investor. Once you are signed up, choose an investment plan that
            suits you and proceed to make a deposit. All deposits must be made through the
            Investor portfolio area.
          </p>
        </div>}
      </div>


    </div>
  )
}

export default Faq;