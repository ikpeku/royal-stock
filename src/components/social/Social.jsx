import React from 'react'
import "./Social.scss"
import { BsWhatsapp, BsTelegram } from "react-icons/bs";


const Social = () => {
    return (
        <div className="logos fixed left-2 bottom-10 bg-[#0C081C] p-5 z-50 rounded">
            <a href="https://wa.me/447405957892?text=Royal%20Stock%20a%20Shell"><BsWhatsapp size={30} fill="#ffffff" /></a>
            <br />
            <a href="https://t.me/CryptoMagic11"><BsTelegram size={30} fill="#ffffff" /></a>
        </div>
    )
}

export default Social;