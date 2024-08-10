import './index.css'
import KissSalad from '../../images/kissSalad.svg'
import PotatoPlate from '../../images/potatoPlate.svg'

const Inbox = () => {
    return (
        <div className='inboxWrapper'>
            <div className='inboxWrap'>
                <br />
                <br />
                <h1 className='inboxHead'>Deliciousness to your inbox</h1>
                <p className='inboxParag'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div>
                    <input type='text' className='textArea' placeholder='Your email address...' />
                    <button className='btnArea'> Subscribe </button>
                    <span className='inboxImg'>
                    <img src={KissSalad} alt='Kiss Salad' width='250px' height='250px' style={{borderRadius:'20%', objectFit:'cover'}}/>
                    <img src={PotatoPlate} alt='Kiss Salad' width='250px' height='250px' style={{borderRadius:'10%'}} />
                </span>
                </div>
            </div>
        </div >
    )
}

export default Inbox
