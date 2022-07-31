import React from 'react'
import "./Social.scss"
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";


const Social = () => {
    return (
        <div className="logos">
            <BsFacebook color='#1F4690' size={10} />
            <BsTwitter color='#1F4690' size={10} />
            <BsLinkedin color='#1F4690' size={10} />
        </div>
    )
}

export default Social;