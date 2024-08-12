
import { Link } from 'react-router-dom'
import './index.css'
import Facebook from "../../images/facebook.svg";
import Twitter from "../../images/twitter.svg";
import Instagram from "../../images/instagram.svg";

const NavBar = () => {
    return (
        <>
        <div className='navBar'>
            <h1 className='navTittle'>
                Foodieland<span style={{ color: 'orange' }}>.</span>
            </h1>
            <nav className='navList'>
                <Link to='/'>Home</Link>
                <Link to='/recipes'>Recipes</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About us</Link>
            </nav>
            <nav className='navImg'>
                <a href='https://www.facebook/com' target='_blank'><img src={Facebook} alt='social Image'  style={{marginTop:'10px'}} /></a>
                <a href='https://www.x.com' target='_blank'><img src={Twitter} alt='social Image'  style={{marginTop:'10px'}} /></a>
                <a href='https://www.instagram.com' target='_blank'><img src={Instagram} alt='social Image'  style={{marginTop:'10px'}} /></a>
            </nav>
        </div>
        <hr style={{opacity:'0.2'}} />
        </>
    )
}

export default NavBar
