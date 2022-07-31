import React from 'react';
import "./Head.scss"
import { Link } from 'react-router-dom';


const Head = () => {
    return (
        <div id='head'>
            <h3>SECURED <span>CRYPTOCURRENCY</span> TRADING COMPANY </h3>
            <p>We provides always the best services for our clients  and always try
                to acheive our client’s trust and satisfaction.
            </p>
            <div id='head-btn__holder'>
                <Link to="/signup"><button>Create account</button></Link>
                <Link to="/signin"><button>Signin</button></Link>
            </div>

        </div>
    )
}

export default Head;