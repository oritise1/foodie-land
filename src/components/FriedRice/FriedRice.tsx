import './index.css'
import John from '../../images/john.svg'
import Timer from '../../images/timer.svg'
import Fork from '../../images/fork.svg'
import Share from '../../images/share.svg'
import Print from '../../images/print.svg'
import FoodPlay from '../../images/foodPlay.svg'

const FriedRice = () => {
    return (
            <div className='riceWrapper'>
                <div className='riceWrap'>
                    <div>
                        <h1 className='sideHead1'>Health Japanese Fried Rice</h1>
                        <div className='john1'>
                            <img src={John} alt='John Profile Picture' />
                            <span style={{ marginTop: '10px' }}>
                                <h1 className='johnHead1'> John Smith </h1>
                                <p className='johnParag1'> 15 March 2020 </p>
                            </span>
                            <span style={{ width: '0.5px', height: '50px', border: 'solid 0.5px black', opacity: '0.1', margin: '0 30px' }}></span>
                            <img src={Timer} alt='John Profile Picture' />
                            <span style={{ marginTop: '10px' }}>
                                <h1 className='johnHead1'> Prep Time </h1>
                                <p className='johnParag1'> 15 Minutes </p>
                            </span>
                            <span style={{ width: '0.5px', height: '50px', border: 'solid 0.5px black', opacity: '0.1', margin: '0 30px' }}></span>
                            <img src={Timer} alt='John Profile Picture' />
                            <span style={{ marginTop: '10px' }}>
                                <h1 className='johnHead1'> Cook Time </h1>
                                <p className='johnParag1'> 15 Minutes </p>
                            </span>
                            <span style={{ width: '0.5px', height: '50px', border: 'solid 0.5px black', opacity: '0.1', margin: '0 30px' }}></span>
                            <img src={Fork} alt='John Profile Picture' />
                            <span style={{ marginTop: '10px' }}>
                                <h1 className='johnHead1'></h1>
                                <p className='johnParag1'> Chicken </p>
                            </span>
                        </div>
                        <img src={FoodPlay} alt='Food show press play' width='750px' />
                    </div>
                    <div>
                        <div className='riceSpan'>
                            <span>
                                <img src={Print} alt='Print button' />
                                <p style={{ marginLeft: '20px' }}> PRINT </p>
                            </span>
                            <span>
                                <img src={Share} alt='Share Button' />
                                <p style={{ marginLeft: '20px' }}>SHARE</p>
                            </span>
                        </div>
                        <div className='itemList'>
                            <h2 className='listHead'> Nutrition Information </h2>
                            <div className='dList'>
                                <ul className='leftList'>
                                    <li> Calories </li>
                                    <li> Total Fat </li>
                                    <li> Protein</li>
                                    <li> Carbohydrate </li>
                                    <li> Cholesterol </li>
                                </ul>
                                <ul className='rightList'>
                                    <li> 219.9 kcal </li>
                                    <li> 10.7 g </li>
                                    <li> 7.9 g </li>
                                    <li> 22.3 g </li>
                                    <li> 37.4 mg</li>
                                </ul>
                            </div>
                            <p className='listFooter'>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
                <p className='footerP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
    )
}

export default FriedRice
