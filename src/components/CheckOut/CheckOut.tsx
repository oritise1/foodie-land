import './index.css'
import Instagram1 from '../../images/instagram1.svg'
import Instagram from '../../images/whiteInstagram.svg'

const CheckOut = () => {
    return (
        <div className='checkWrapper'>
            <div className='checkWrap'>
                <br />
                <br />
                <h1 className='checkHead'>Check out @foodieland on Instagram</h1>
                <p className='checkParag'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className='insta'>
                <img src={Instagram1} alt='Our Instagram Page' width='280px' />
                <img src={Instagram1} alt='Our Instagram Page' width='280px' />
                <img src={Instagram1} alt='Our Instagram Page' width='280px' />
                <img src={Instagram1} alt='Our Instagram Page' width='280px' />
            </div>
            <button className='btn'>Visit our instagram <img src={Instagram} alt='instagram logo' /></button>
        </div>
    )
}

export default CheckOut;
