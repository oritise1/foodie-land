import './index.css'
import Facebook from "../../images/facebook.svg";
import Twitter from "../../images/twitter.svg";
import Instagram from "../../images/instagram.svg";

const Footer = () => {
    return (
        <div className='footerWrapper'>
            <div className='footerHead'>
                <div>
                    <h1 className='navTittle'>
                        Foodieland<span style={{ color: 'orange' }}>.</span>
                    </h1>
                    <p className='footerParag'>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
                </div>
                <div >
                    <nav className='navList'>
                        <a href='#'>Recipes</a>
                        <a href='#'>Blog</a>
                        <a href='#'>Contact</a>
                        <a href='#'>About us</a>
                    </nav>
                </div>
            </div>
            <hr style={{ opacity: '0.2' }} />
            <div className='copy'>
                <span></span>
                <p> &copy; 2020 Flowbase. Powered by <span style={{ color: 'red'}}> Webflow </span></p>
                <span>
                    <nav className='navImg'>
                        <a href='#'><img src={Facebook} alt='social Image' style={{ marginTop: '10px' }} /></a>
                        <a href='#'><img src={Twitter} alt='social Image' style={{ marginTop: '10px' }} /></a>
                        <a href='#'><img src={Instagram} alt='social Image' style={{ marginTop: '10px' }} /></a>
                    </nav>
                </span>
            </div>
        </div>
    )
}

export default Footer
