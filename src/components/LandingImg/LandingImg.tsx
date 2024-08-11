import './index.css'
import ChickenWings from '../../images/chickenWings.svg'
import Deals from '../../images/deals.svg'
import Badge from '../../images/badge.svg'
import Timer from '../../images/timer.svg';
import Fork from '../../images/fork.svg';
import John from '../../images/john.svg'
import Play from '../../images/play.svg'

const LandingImg = () => {
    return (
        <div className='landWrapper'>
            <div className='side'>
                <div className='leftSide'>
                    <div className='deals'>
                        <img src={Deals} alt='Hot deals' />
                        <p> Hot Recipes </p>
                    </div>
                    <div>
                        <h1 className='sideHead'>Spicy delicious chicken wings</h1>
                        <p className='sideParag'> Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    </div>
                    <div className='cardInfo1'>
                        <div className='cardItem1'>
                            <img src={Timer} alt='timer' />
                            <span> 30 Minutes </span>
                        </div>
                        <div className='cardItem'>
                            <img src={Fork} alt='timer' />
                            <span> Chicken </span>
                        </div>
                    </div>
                    <div style={{justifyContent:'space-between', display:'flex'}}>
                        <div className='john'>
                            <img src={John} alt='John Profile Picture' />
                            <span style={{ marginTop: '10px' }}>
                                <h1 className='johnHead'> John Smith </h1>
                                <p className='johnParag'> 15 March 2020 </p>
                            </span>
                        </div>
                        <div>
                            <button className='btnLand'>View Recipes <img src={Play} alt='play button' /> </button>
                        </div>
                    </div>
                </div>
                <img src={Badge} alt='Foodie Land Badge' className='position' />
                <div className='rightSide'>
                    <img src={ChickenWings} alt='Baked Chicken Wings with suace' height='550px' style={{ borderRadius: '0 5% 5% 0' }} />
                </div>
            </div>
        </div>
    )
}

export default LandingImg
