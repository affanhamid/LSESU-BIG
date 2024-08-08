import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-3 text-2xl">
      <a href="https://uk.linkedin.com/company/lsesubig">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/lsesubig/">
        <FaInstagram />
      </a>
    </div>
  );
};

export default Socials;
