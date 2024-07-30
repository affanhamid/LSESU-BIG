import React from 'react'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
    return (
        <div className="mt-4 flex gap-3 text-xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaLinkedin /></a>
        </div>
    )
}

export default Socials