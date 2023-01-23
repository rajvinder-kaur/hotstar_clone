import { logDOM } from '@testing-library/react';
import React from 'react'
import {VscMenu} from 'react-icons/vsc';
import {BiSearch} from 'react-icons/bi';
import NavDrop from './NavDrop';
import SubscribeBtn from './SubscribeBtn';
import { Link } from 'react-router-dom';
import Login from './Login';
import Subcontainer from './Subcontainer';

function Header() {  
  return (
    <div className='header'>
      <div className="menu dropdown-container">
      <VscMenu/>
      <Subcontainer prop={
        {
          one:'Channel',
          two:'Languages',
          three:'Genre',
          four:'More'
        }
      }/>
      </div>
      <div className="logo">
       <Link>
       <img src="	https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
       </Link>
      </div>
      <ul>
        <li>
        <NavDrop number="0"/>
        </li>
        <li>
        <NavDrop number="1"/>
        </li>
        <li>
        <NavDrop number="2"/>
        </li>
        <li>
          <NavDrop number ='3'/>
        </li>
        <li></li>
      </ul>
      <div className="search">
        <div className='container'>
        <input type="text"    placeholder='Search'  />
          <BiSearch/>
        </div>
      </div>
      <SubscribeBtn/>
       <Login/>
    </div>
  )
}

export default Header
