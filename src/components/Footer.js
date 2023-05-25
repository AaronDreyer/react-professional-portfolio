import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
        <h2>Professional Portfolio</h2>
        <div className='envelope'>
          <a href="mailto:aaronottaway@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
        </a>
        </div>
        <div className='linkedin'>
        <a href="https://www.linkedin.com/in/aarondreyer/">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
        </div>
        <div className='github'>
          <a href="https://github.com/AaronDreyer">
        <FontAwesomeIcon icon={faGithub} />
        </a>
        </div>
    </footer>
  );
}