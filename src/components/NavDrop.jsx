import React from 'react';
import { Link } from 'react-router-dom';
import data from '../Content';
import Subcontainer from './Subcontainer';

function NavDrop({number}) {
  if(number<=1){
  return (
    <div className='dropdown-container'>
      <Link>
      <div className='title'>{data[number].title}</div>
      </Link>
      <Subcontainer prop={data[number]} />
    </div>
  )}
  else{
    return(
    <div className='dropdown-container'>
       <Link>
      <div className='title'>{data[number].title}</div>
      </Link>
    </div>)
  }
}

export default NavDrop
