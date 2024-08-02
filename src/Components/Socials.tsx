import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Socials = () => {
    return (
        <div className="flex gap-3 text-2xl">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
        </div>
    )
}

export default Socials