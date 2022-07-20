import React from 'react';
//import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/SejammahmudPranto" target="_blank" rel="noreferrer"><FaGithub /></a>
      
    </div>
    <div>
      <a href="https://www.facebook.com/smpranto20" target="_blank" rel="noreferrer"> 
        <FaFacebookF />
      </a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/sejan-mahmud-pranto/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
    </div>
  </div>
);

export default SocialMedia;
