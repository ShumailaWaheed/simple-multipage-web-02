import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Topbar: React.FC = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="col left">
          <div className="inline">
            <a className="link" href="">
              FAQs
            </a>
            <span className="separator">|</span>
            <a className="link" href="">
              Help
            </a>
            <span className="separator">|</span>
            <a className="link" href="">
              Support
            </a>
          </div>
        </div>
        <div className="col right">
          <div className="inline">
            <a className="link" href="">
              <FaFacebookF className="icon" />
            </a>
            <a className="link" href="">
              <FaTwitter className="icon" />
            </a>
            <a className="link" href="">
              <FaLinkedinIn className="icon" />
            </a>
            <a className="link" href="">
              <FaInstagram className="icon" />
            </a>
            <a className="link" href="">
              <FaYoutube className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
