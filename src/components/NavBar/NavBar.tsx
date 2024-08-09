import React from 'react'
import './index.css'
import Facebook from "../../images/facebook.svg";
import Twitter from "../../images/twitter.svg";
import Instagram from "../../images/instagram.svg";

const NavBar = () => {
    return (
        <>
        <div className='navBar'>
            <h1 className='navTittle'>
                Foodieland<span style={{ color: 'red' }}>.</span>
            </h1>
            <nav className='navList'>
                <a href='#'>Home</a>
                <a href='#'>Recipes</a>
                <a href='#'>Blog</a>
                <a href='#'>Contact</a>
                <a href='#'>About us</a>
            </nav>
            <nav className='navImg'>
                <a href='#'><img src={Facebook} alt='social Image'  style={{marginTop:'10px'}} /></a>
                <a href='#'><img src={Twitter} alt='social Image'  style={{marginTop:'10px'}} /></a>
                <a href='#'><img src={Instagram} alt='social Image'  style={{marginTop:'10px'}} /></a>
            </nav>
        </div>
        <hr style={{opacity:'0.2'}} />
        </>
    )
}

export default NavBar
