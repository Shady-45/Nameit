
import React from 'react';
import '../App.css';
import Name from '../assets/nameit-1.png';


const Header = ({headerExpand}) => {
  return (
    <div className='header-container'>
        <img className={`head-img  ${headerExpand ?'head-img-expanded':'head-img-contracted'}` } src={Name} alt="nameit" />
        <h1 className={`head-text  ${headerExpand ?'head-text-expanded':'head-text-contracted'}` } >Nameit!!</h1>
    </div>
  )
}

export default Header