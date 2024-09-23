import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-3 text-2xl">
      <a
        href="https://uk.linkedin.com/company/lsesubig"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/lsesubig/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default Socials;
