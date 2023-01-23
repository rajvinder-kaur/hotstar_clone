import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {SiGoogleplay} from 'react-icons/si';
import {BsApple} from 'react-icons/bs';



function Footer() {
  return (
    <div className='footer'>
    <div id='one'>
      <ul>
        <li>
          <h5>About Disney+ Hotstar</h5>
        </li>
        <li>
          <h5> Terms Of Use</h5>
        </li>
        <li>
          <h5>Privacy Policy</h5>
        </li>
        <li>
          <h5>FAQ</h5>
        </li>
        <li>
          <h5>Feedback</h5>
        </li>
        <li>
          <h5>Careers</h5>
        </li>
      </ul>
      <div>© 2023 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</div>
      </div>
      <div id='two'>
      <ol>
        
        <li>
          <div> <p>Connect with us</p> </div>
          <div className="sm">
          <FaFacebookF/>
          <BsTwitter/>
          </div>
        </li>
        <li>
          <div>
            <p>Disney+ Hotstar App</p>
            <div className="smm">
              <SiGoogleplay/>
              <BsApple />
            </div>
          </div>
        </li>
      </ol>
    </div>
    </div>
  )
}

export default Footer
